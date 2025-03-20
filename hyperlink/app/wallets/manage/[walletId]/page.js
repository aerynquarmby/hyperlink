'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import styles from './ManageWallet.module.css';
import { chainConfig } from '../../../../config/chainConfig';
import '/sharedMockStyles.css'; // shared container & diamond

export default function ManageIndividualWalletPage() {
  const { walletId } = useParams();

  // Example user data
  const user = {
    name: 'Cameron Walker',
    phone: '+27 83 627 1129',
  };

  // Convert chainConfig to an array for easy ordering
  const chainOrder = [
    'Base',
    'Polygon',
    'Bnb',
    'Avalanche',
    'Arbitrum',
    'Ethereum',
    'Optimism',
    'Linea',
  ];

  const chainsArray = chainOrder
    .map((key) => ({
      key,
      ...chainConfig[key],
    }))
    .filter((chain) => chain.chainName); // Only include valid chains

  // All collapsed by default
  const initialOpenState = chainOrder.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {});
  const [openChains, setOpenChains] = useState(initialOpenState);

  const toggleChain = (chainKey) => {
    setOpenChains((prev) => ({
      ...prev,
      [chainKey]: !prev[chainKey],
    }));
  };

  const handleDisconnect = () => {
    console.log('Disconnect clicked');
  };

  const handleRevoke = () => {
    console.log('Revoke spending permissions clicked');
  };

  return (
    <div className={styles.container}>
      <div className={styles.diamond} />

      {/* Top Row: avatar + user info on left, 2 buttons on right */}
      <div className={styles.topRow}>
        <div className={styles.userLeft}>
          <div className={styles.avatar}>C</div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userPhone}>{user.phone}</p>
          </div>
        </div>
        <div className={styles.topButtons}>
          <button className={styles.topButton} onClick={handleDisconnect}>
            Disconnect
          </button>
          <button className={styles.topButton} onClick={handleRevoke}>
            Revoke 
          </button>
        </div>
      </div>

      {/* Chain List */}
      <div className={styles.chainList}>
        {chainsArray.map((chain) => {
          const { key, chainName, chainIcon, total, fromCurrency = {} } = chain;
          const isOpen = openChains[key];

          // Build token rows
          const tokenRows = Object.entries(fromCurrency).map(
            ([tokenKey, tokenData], idx) => (
              <div key={idx} className={styles.tokenRow}>
                <div className={styles.tokenLeft}>
                  <img
                    src={tokenData.icon || 'https://via.placeholder.com/32'}
                    alt={tokenData.label || tokenKey}
                    className={styles.tokenIcon}
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/32';
                    }}
                  />
                  <div className={styles.tokenText}>
                    <span className={styles.tokenLabel}>
                      {tokenData.label || tokenKey}
                    </span>
                    <span className={styles.tokenSymbol}>
                      {tokenData.symbol || tokenKey}
                    </span>
                  </div>
                </div>
                <div className={styles.tokenRight}>
                  <div className={styles.tokenValue}>
                    {tokenData.value || '$0.00'}
                  </div>
                  <button className={styles.approveButton}>
                    Approve
                  </button>
                </div>
              </div>
            )
          );

          return (
            <div
              key={key}
              className={styles.chainRow}
              onClick={() => toggleChain(key)}
            >
              <div className={styles.chainHeader}>
                <div className={styles.chainLeft}>
                  <img
                    src={chainIcon || 'https://via.placeholder.com/24'}
                    alt={chainName}
                    className={styles.chainIcon}
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/24';
                    }}
                  />
                  <span className={styles.chainName}>{chainName}</span>
                </div>
                <div className={styles.chainRight}>
                  <span className={styles.chainValue}>{total || '$0.00'}</span>
                  <span className={styles.chainArrow}>
                    {isOpen ? '▲' : '›'}
                  </span>
                </div>
              </div>

              {/* If open, show tokens */}
              {isOpen && tokenRows.length > 0 && (
                <div className={styles.chainTokens}>{tokenRows}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="secured">Secured by HyperLink</div>
    </div>
  );
}
