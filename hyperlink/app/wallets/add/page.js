'use client';

import '/sharedMockStyles.css'; // phone-like container
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddWalletPage() {
  const router = useRouter();
  const [walletName, setWalletName] = useState('');
  const [network, setNetwork] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the chosen wallet name in localStorage
    localStorage.setItem('walletName', walletName);
    router.push('/wallets/select');
  };

  return (
    <div className="shared-container">
      <div className="diamond" />

      <h2>Add crypto wallets</h2>

      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <div className="form-group">
          <label htmlFor="walletName">Name</label>
          <input
            type="text"
            id="walletName"
            placeholder="e.g. My MetaMask"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="network">Select Network</label>
          <select
            id="network"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option value="">-- Choose a network --</option>
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
            <option value="bsc">BNB Chain</option>
            <option value="arbitrum">Arbitrum</option>
            <option value="optimism">Optimism</option>
            <option value="avalanche">Avalanche</option>
          </select>
        </div>
        <button type="submit" className="button" style={{ width: '100%', marginTop: '10px' }}>
          Add wallet
        </button>
      </form>

      <div className="secured">Secured by HyperLink</div>
    </div>
  );
}
