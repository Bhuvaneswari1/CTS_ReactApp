import React from "react";
function TextInput({ label, id, value, onChange, error }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined} 
      />
      {error && <p id={`${id}-error`} className="error-message">{error}</p>}  {/* ✅ Correct usage */}
    </div>
  );
}

export default TextInput;
