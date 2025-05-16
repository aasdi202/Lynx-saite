import { useState, useEffect } from 'react';

const METAMASK_DOWNLOAD_URL = 'https://metamask.io/download.html';

// Utility functions
const formatWalletData = (address) => ({
  address,
  shortAddress: `${address.substring(0, 6)}...${address.substring(38)}`,
  isConnected: true
});

const formatWalletError = (error) => {
  const errorMap = {
    'User rejected request': 'Connection canceled by user',
    'Already processing eth_requestAccounts': 'Connection already in progress'
  };
  return new Error(errorMap[error.message] || 'Failed to connect wallet');
};

// Main hook
export const useWallet = () => {
  const [walletData, setWalletData] = useState(null);
  const [error, setError] = useState(null);

  const isWalletInstalled = () => !!window.ethereum;

  const connectWallet = async () => {
    if (!isWalletInstalled()) {
      window.open(METAMASK_DOWNLOAD_URL, '_blank');
      throw new Error('MetaMask extension not detected');
    }

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (!accounts?.[0]) throw new Error('No accounts found');
      
      const data = formatWalletData(accounts[0]);
      setWalletData(data);
      return data;
    } catch (err) {
      const formattedError = formatWalletError(err);
      setError(formattedError);
      throw formattedError;
    }
  };

  // Auto-connect if already connected
  useEffect(() => {
    if (!isWalletInstalled()) return;

    const checkConnection = async () => {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_accounts' 
        });
        if (accounts?.[0]) {
          setWalletData(formatWalletData(accounts[0]));
        }
      } catch (err) {
        console.error('Auto-connect check failed:', err);
      }
    };

    checkConnection();
  }, []);

  // Event listeners
  useEffect(() => {
    if (!isWalletInstalled()) return;

    const handleAccountsChanged = (accounts) => {
      setWalletData(accounts?.[0] 
        ? formatWalletData(accounts[0]) 
        : null
      );
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, []);

  return {
    walletData,
    error,
    isWalletInstalled,
    connectWallet,
    isConnected: !!walletData
  };
};

// For backward compatibility
export const walletService = {
  isWalletInstalled: () => !!window.ethereum,
  connectWallet: async () => {
    const { connectWallet } = useWallet();
    return await connectWallet();
  }
};