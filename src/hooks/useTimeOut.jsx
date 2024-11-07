import { useEffect, useRef } from "react";

const useTimeOut = (callback, timer) => {
  const timerValue = useRef(null);

  const stop = () => {
    if (timerValue.current) {
      clearTimeout(timerValue.current);
    }
    timerValue.current = null;
  };

  const start = () => {
    if (timerValue.current) {
      clearTimeout(timerValue.current);
    }
    timerValue.current = setTimeout(() => {
      callback();
    }, timer);
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return {
    start,
    stop,
  };
};

export default useTimeOut;
