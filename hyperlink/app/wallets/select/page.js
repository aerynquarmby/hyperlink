'use client';

import '/sharedMockStyles.css';
import styles from './SelectWallets.module.css';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useThirdwebMetamask } from '../connect/connectUtils';
import { useDisconnect, useActiveWallet } from "thirdweb/react";

// Dynamically import WalletIcon from @web3icons/react
const DynamicWalletIcon = dynamic(
  () => import('@web3icons/react').then((mod) => mod.WalletIcon),
  { ssr: false }
);

const walletOptions = [
  { name: 'metamask', label: 'MetaMask' },
  { name: 'coinbase-wallet', label: 'Coinbase Wallet' },
  { name: 'trust-wallet', label: 'Trust Wallet' },
  { name: 'wallet-connect', label: 'WalletConnect' },
  { name: 'phantom', label: 'Phantom' },
  { name: 'rabby', label: 'Rabby' },
];

export default function SelectWalletsPage() {
  const router = useRouter();
  const [selectedWallet, setSelectedWallet] = useState(null);
  const { connectMetamask, isConnecting, error } = useThirdwebMetamask();

  // Retrieve disconnect function and active wallet from thirdweb/react
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  async function handleSelect(walletName) {
    // Disconnect any active wallet as the first action
    if (wallet) {
      disconnect(wallet);
    }

    setSelectedWallet(walletName);

    if (walletName === 'metamask') {
      const connectedAddress = await connectMetamask();
      if (connectedAddress) {
        const storedName = localStorage.getItem('walletName') || 'Unnamed Wallet';
        localStorage.setItem(
          'connectedWallet',
          JSON.stringify({ name: storedName, address: connectedAddress })
        );
        router.push('/wallets/manage');
      }
    } else {
      router.push('/wallets/manage');
    }
  }

  if (isConnecting) {
    return (
      <div className="shared-container">
        <div className="diamond" />
        <h2>Connecting to {selectedWallet}...</h2>
        <p>Please wait while we connect your wallet.</p>
        <div className="secured">Secured by HyperLink</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shared-container">
        <div className="diamond" />
        <h2>Failed to connect</h2>
        <p>{error.message}</p>
        <div className="secured">Secured by HyperLink</div>
      </div>
    );
  }

  return (
    <div className="shared-container">
      <div className="diamond" />
      <h2>Select crypto wallet</h2>
      <div className={styles.walletGrid}>
        {walletOptions.map((wallet) => (
          <div
            key={wallet.name}
            className={styles.walletItem}
            onClick={() => handleSelect(wallet.name)}
          >
            <DynamicWalletIcon
              name={wallet.name}
              variant="branded"
              size={50}
              fallback={
                <div style={{ width: 50, height: 50, background: '#eee', borderRadius: 12 }} />
              }
            />
            <span className={styles.walletLabel}>{wallet.label}</span>
          </div>
        ))}
      </div>
      <div className="secured">Secured by HyperLink</div>
    </div>
  );
}
