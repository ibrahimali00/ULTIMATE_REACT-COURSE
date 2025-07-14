function FinishedStates({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = points / maxPossiblePoints;

  let emoji;

  if (percentage === 100) emoji = '🎖️';
  if (percentage >= 100 && percentage < 100) emoji = '🥳';
  if (percentage >= 50 && percentage < 80) emoji = '😀';
  if (percentage > 0 && percentage < 50) emoji = '🤔';
  if (percentage === 0) emoji = '🤦';
  return (
    <>
      <p className="result">
        <span>{emoji}</span>Your Score is <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Your HighScore : {highScore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Rest Quiz
      </button>
    </>
  );
}

export default FinishedStates;
