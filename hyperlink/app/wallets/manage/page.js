'use client';

import '/sharedMockStyles.css'; // shared container & diamond
import styles from './ManageWallets.module.css'; // local styling
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

/* Example wallet icons from web3icons */
const WalletMetamask = dynamic(
  () => import('@web3icons/react').then((mod) => mod.WalletMetamask),
  { ssr: false }
);
const WalletWalletConnect = dynamic(
  () => import('@web3icons/react').then((mod) => mod.WalletWalletConnect),
  { ssr: false }
);

export default function ManageWalletsPage() {
  const router = useRouter();

  const handleSignOut = () => {
    console.log('Sign out clicked');
  };

  const handleAddWallet = () => {
    router.push('/wallets/add');
  };

  const handleDisconnectAll = () => {
    console.log('Disconnect all wallets');
  };

  return (
    <div className="shared-container">
      <div className="diamond" />

      {/* Top row: user info on left, sign out on right */}
      <div className={styles.topRow}>
        <div className={styles.userLeft}>
          <div className={styles.avatar}>C</div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Cameron Walker</p>
            <p className={styles.userPhone}>+27 83 627 1129</p>
          </div>
        </div>
        <button className={styles.signOutBtn} onClick={handleSignOut}>
          Sign out
        </button>
      </div>

      {/* Wallet list */}
      <div className={styles.walletList}>
        {/* Example wallet (Metamask) */}
        <div className={styles.walletCard}>
          <div className={styles.walletLeft}>
            <div className={styles.walletIcon}>
              <WalletMetamask variant="branded" size={28} />
            </div>
            <div className={styles.walletDetails}>
              <p className={styles.walletName}>Cameron Walker</p>
              <p className={styles.walletAddress}>0xdv...a0k0d</p>
            </div>
          </div>
          <Link href="/wallets/manage/1" className={styles.manageBtn}>
            Manage
          </Link>
        </div>

        {/* Example wallet (WalletConnect) */}
        <div className={styles.walletCard}>
          <div className={styles.walletLeft}>
            <div className={styles.walletIcon}>
              <WalletWalletConnect variant="branded" size={28} />
            </div>
            <div className={styles.walletDetails}>
              <p className={styles.walletName}>Cameron Walker</p>
              <p className={styles.walletAddress}>0xabc...123</p>
            </div>
          </div>
          <Link href="/wallets/manage/2" className={styles.manageBtn}>
            Manage
          </Link>
        </div>
      </div>

      {/* Add wallet row */}
      <div className={styles.actionRow} onClick={handleAddWallet}>
        <div className={styles.actionIcon}>
          {/* plus icon */}
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="10" y1="5" x2="10" y2="15" />
            <line x1="5" y1="10" x2="15" y2="10" />
          </svg>
        </div>
        <span className={styles.actionText}>Add crypto wallet</span>
      </div>

      {/* Disconnect all row */}
      <div className={styles.actionRow} onClick={handleDisconnectAll}>
        <div className={styles.actionIcon}>
          {/* disconnect icon */}
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
        <span className={styles.actionText}>Disconnect all crypto wallets</span>
      </div>

      <div className="secured">Secured by HyperLink</div>
    </div>
  );
}
