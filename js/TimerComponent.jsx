// https://codesandbox.io/s/dreamy-nobel-5n04cr?file=/src/Timer.jsx:0-690

import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    let t;
    if (isActive) {
      t = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(t);
    }

    return () => clearInterval(t);
  }, [isActive, seconds]);

  const reset = () => {
    setSeconds(0);
    setActive(false);
  };

  return (
    <>
      <h1>{seconds}</h1>
      <span>s</span>
      <button onClick={() => setActive(!isActive)}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export { Timer };
