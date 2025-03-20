'use client';

export default function SDKPayWith({ phoneNumber, onSelectPayment }) {
  // Dummy saved wallets
  const savedPayments = [
    { id: '0xd5a4', name: 'My MetaMask Wallet', address: '0xd5a4...db5a' },
    { id: '0x66d5', name: 'Wife Binance Wallet', address: '0x66d5...d58a' },
  ];

  return (
    <div className="mock-container" style={{ width: '360px' }}>
      <div className="diamond" />
      <h2>Phone: {phoneNumber}</h2>
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>Select a saved payment</p>
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        {savedPayments.map((sp) => (
          <div key={sp.id} style={{ marginBottom: '10px' }}>
            <input
              type="radio"
              name="payment"
              onChange={() => onSelectPayment?.(sp.id)}
              style={{ marginRight: '6px' }}
            />
            <strong>{sp.name}</strong> <br />
            <span style={{ fontSize: '12px', color: '#666' }}>{sp.address}</span>
          </div>
        ))}
        <button
          className="button"
          style={{ width: '100%', marginTop: '10px' }}
          onClick={() => onSelectPayment?.('new')}
        >
          + Add a new crypto wallet
        </button>
      </div>
      <div className="mock-secured">Secured by HyperLink</div>
    </div>
  );
}
