'use client';

import { useEffect } from 'react';

export default function ClearWalletData() {
  useEffect(() => {
    // Delete the WalletConnect V2 IndexedDB
    const dbName = 'WALLET_CONNECT_V2_INDEXED_DB';
    const request = indexedDB.deleteDatabase(dbName);
    request.onsuccess = () => {
      console.log(`${dbName} deleted successfully.`);
    };
    request.onerror = (e) => {
      console.error(`Error deleting ${dbName}:`, e);
    };
    request.onblocked = () => {
      console.warn(`${dbName} deletion is blocked.`);
    };

    // Clear localStorage keys used by thirdweb and our app
    localStorage.removeItem('connectedWallet');
    localStorage.removeItem('walletName');
    localStorage.removeItem('thirdweb:active-chain');
    localStorage.removeItem('thirdweb:active-wallet-id');
    localStorage.removeItem('thirdweb:connected-wallet-ids');
  }, []);

  return null;
}
