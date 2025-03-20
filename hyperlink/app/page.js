'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to HyperLink</h1>
        <p>Link your crypto wallets to a smart account on thirdweb.</p>
        <div className={styles.ctas}>
          <Link href="/auth" className={styles.primary}>
            Get Started
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 HyperLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
