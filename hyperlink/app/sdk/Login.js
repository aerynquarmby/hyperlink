'use client';

import { useState } from 'react';

export default function SDKLogin({ onContinue }) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue?.(phone);
  };

  return (
    <div className="mock-container" style={{ width: '360px' }}>
      <div className="diamond" />
      <h2>HyperLink</h2>
      <p className="mock-subtitle">Pay faster with your crypto wallets</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ textAlign: 'left' }}>
          <label htmlFor="sdk-phone">Phone number</label>
          <input
            type="tel"
            id="sdk-phone"
            placeholder="+27 83 627 1129"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button" style={{ width: '100%' }}>
          Continue
        </button>
      </form>
      <div className="mock-secured">Secured by HyperLink</div>
    </div>
  );
}
