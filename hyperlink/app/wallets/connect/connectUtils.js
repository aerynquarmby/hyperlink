'use client';

import { createThirdwebClient } from 'thirdweb';
import { createWallet } from 'thirdweb/wallets';
import { useConnect, useDisconnect, useActiveWallet } from 'thirdweb/react';
import { useState } from 'react';

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
});

export function useThirdwebMetamask() {
  const { connect, isConnecting, error } = useConnect();
  const { disconnect } = useDisconnect();
  const activeWallet = useActiveWallet();
  const [address, setAddress] = useState(null);

  async function connectMetamask() {
    try {
      // If there's an active wallet, disconnect it first
      if (activeWallet && disconnect) {
        await disconnect(activeWallet);
      }
      // Connect MetaMask
      const wallet = await connect(async () => {
        const metamaskWallet = createWallet('io.metamask');
        await metamaskWallet.connect({ client });
        return metamaskWallet;
      });
      if (wallet && wallet.address) {
        setAddress(wallet.address);
        return wallet.address;
      }
    } catch (e) {
      console.error('Error connecting to MetaMask:', e);
    }
    return null;
  }

  return {
    connectMetamask,
    isConnecting,
    error,
    address,
  };
}
