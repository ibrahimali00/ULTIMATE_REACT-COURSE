function Progress({ index, numQusestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQusestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQusestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
