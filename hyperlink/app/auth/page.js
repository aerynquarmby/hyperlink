'use client';

import '/sharedMockStyles.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/wallets/add');
  };

  return (
    <div className="shared-container">
      <div className="diamond" />

      <h2>HyperLink</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Pay faster with your crypto wallets
      </p>

      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="+27 83 627 1129"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button" style={{ width: '100%', marginTop: '10px' }}>
          Continue
        </button>
      </form>

      <div className="secured">Secured by HyperLink</div>
    </div>
  );
}
