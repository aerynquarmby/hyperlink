import './globals.css';
import './mockStyles.css';
import { ThirdwebProvider } from 'thirdweb/react';
import { polygon } from 'thirdweb/chains';
import ClearWalletData from './wallets/cleardata/ClearWalletData';

export const metadata = {
  title: 'HyperLink',
  description: 'Link crypto wallets to a smart account on thirdweb'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* This client component clears any previous connection data */}
        <ClearWalletData />
        <ThirdwebProvider
          desiredChainId={polygon.chainId}
          clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        >
          <main className="main">{children}</main>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
