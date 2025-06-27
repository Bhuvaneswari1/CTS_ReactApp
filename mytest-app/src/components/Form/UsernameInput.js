import React, { useState, useEffect } from 'react';

// Mock API call for demonstration
const checkUsernameAvailability = (username) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const isAvailable = !['admin', 'testuser'].includes(username.toLowerCase());
      resolve(isAvailable);
    }, 500); // Simulate network delay
  });
};

function UsernameInput({ onUsernameValid }) {
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError(''); // Clear error on new input
    if (username.length < 3) {
      setIsValid(false);
      setError('Username must be at least 3 characters');
      return;
    }

    setIsLoading(true);
    const handler = setTimeout(async () => {
      const available = await checkUsernameAvailability(username);
      if (available) {
        setIsValid(true);
        onUsernameValid(username); // Notify parent
      } else {
        setIsValid(false);
        setError('Username is already taken');
      }
      setIsLoading(false);
    }, 500); // Debounce time

    return () => clearTimeout(handler); // Cleanup on unmount or re-render
  }, [username, onUsernameValid]);

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {isLoading && <p>Checking availability...</p>}
      {error && <p className="error-message">{error}</p>}
      {!isLoading && username.length >= 3 && isValid && <p style={{ color: 'green' }}>Username available!</p>}
    </div>
  );
}

export default UsernameInput;