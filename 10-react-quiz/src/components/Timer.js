import { useEffect } from 'react';

function Timer({ dispatch, remainingSeocnds }) {
  const mins = Math.floor(remainingSeocnds / 60);
  const secs = Math.floor(remainingSeocnds % 60);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(id);
    },

    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
    </div>
  );
}

export default Timer;
