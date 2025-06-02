import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const ConnectWallet = ({ onAddress }) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  const handleConnect = () => connect();
  const handleDisconnect = () => disconnect();

  if (isConnected) {
    onAddress(address);
    return (
      <div>
        <p>کیف پول متصل شد: {address}</p>
        <button onClick={handleDisconnect}>قطع اتصال</button>
      </div>
    );
  }

  return <button onClick={handleConnect}>اتصال به کیف پول</button>;
};

export default ConnectWallet;
