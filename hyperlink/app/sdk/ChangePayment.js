'use client';

export default function SDKChangePayment({ currentMethod, onChange }) {
  return (
    <div className="mock-container" style={{ width: '360px' }}>
      <div className="diamond" />
      <h2>Change Payment Method</h2>
      <p style={{ marginBottom: '20px' }}>
        Current Method: <strong>{currentMethod}</strong>
      </p>
      <button className="button" style={{ width: '100%' }} onClick={onChange}>
        Change Payment Method
      </button>
      <div className="mock-secured">Secured by HyperLink</div>
    </div>
  );
}
