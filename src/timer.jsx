
import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [input, setInput] = useState('');
  const [remaining, setRemaining] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const start = () => {
    const secs = parseInt(input, 10);
    if (isNaN(secs) || secs <= 0) return;
    setRemaining(secs);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  };

  const reset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRemaining(0);
    setInput('');
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        placeholder="Secondes"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <div style={{ fontSize: 24, marginTop: 10 }}>{remaining}</div>
    </div>
  );
}

export default Timer;
