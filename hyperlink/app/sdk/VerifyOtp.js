'use client';

import { useState } from 'react';

export default function SDKVerifyOtp({ phoneNumber, onVerify }) {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify?.(otp);
  };

  return (
    <div className="mock-container" style={{ width: '360px' }}>
      <div className="diamond" />
      <h2>Use your saved wallet info with HyperLink</h2>
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>
        Enter the code sent to <strong>{phoneNumber}</strong> to securely use your saved crypto wallet information.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ textAlign: 'left' }}>
          <label htmlFor="otp">Enter code</label>
          <input
            type="text"
            id="otp"
            placeholder="6-digit code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button" style={{ width: '100%' }}>
          Verify
        </button>
      </form>
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
        <a href="#" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          Resend code
        </a>
      </div>
      <p style={{ color: '#888', marginTop: '10px', fontSize: '12px' }}>Encrypted</p>
      <div className="mock-secured">Secured by HyperLink</div>
    </div>
  );
}
