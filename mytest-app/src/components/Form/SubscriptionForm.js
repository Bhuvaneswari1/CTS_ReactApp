import React, { useState } from 'react';

function SubscriptionForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [termsError, setTermsError] = useState('');

  const validate = () => {
    let isValid = true;
    setEmailError('');
    setTermsError('');

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Valid email is required');
      isValid = false;
    }
    if (!agreeTerms) {
      setTermsError('You must agree to the terms and conditions');
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ email, agreeTerms });
      setEmail('');
      setAgreeTerms(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Subscription Form">
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!emailError}
          aria-describedby={emailError ? 'email-error' : undefined}
        />
        {emailError && <p id="email-error" className="error-message">{emailError}</p>}
      </div>
      <div>
        <input
          id="agreeTerms"
          type="checkbox"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
        />
        <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
        {termsError && <p id="terms-error" className="error-message">{termsError}</p>}
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SubscriptionForm;