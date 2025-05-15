export const checkWalletInstalled = () => {
  return !!window.ethereum;
};

export const connectWallet = async () => {
  if (!checkWalletInstalled()) {
    window.open('https://metamask.io/download.html', '_blank');
    return null;
  }

  try {
    const accounts = await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
    });
    return {
      address: accounts[0],
      shortAddress: `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`
    };
  } catch (error) {
    console.error("Connection error:", error);
    throw error;
  }
};