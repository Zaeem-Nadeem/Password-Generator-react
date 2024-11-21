import React, { useRef, useContext } from 'react';
import { userContext } from '../store/stateHandle';

function Field() {
  const { password } = useContext(userContext);
  const inputRef = useRef(null);

  const handleCopy = () => {
    window.navigator.clipboard.writeText(password)
    inputRef.current?.select()
    }
  return (
    <div className="field-container">
      <input
        className="field"
        type="text"
        readOnly
        value={password}
        ref={inputRef}
      />
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}

export default Field;
