function Options({ question, answer, dispatch }) {
  const hasAnwser = answer !== null;

  return (
    <div className="options">
      {question.options.map((opt, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnwser
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnwser}
          key={opt}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
