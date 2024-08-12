import { useState, useEffect } from 'react';

const useCountUp = (start, end, duration, startCounting) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!startCounting) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const newCount = Math.min(start + (end - start) * (progress / duration), end);
      setCount(Math.floor(newCount));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration, startCounting]);

  return count;
};

export default useCountUp;
