import { useEffect, useReducer } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Loader from './Loader.js';
import Error from './Error.js';
import Question from './Question.js';
import NextButton from './NextButton.js';
import StartScreen from './startScreen.js';
import Progress from './Progress.js';
import FinishedStates from './FinishedStates.js';
import Footer from './Footer.js';
import Timer from './Timer.js';

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  // 'loading' , 'ready' , 'error' , 'active' , 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  remainingSeocnds: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    case 'start':
      return {
        ...state,
        status: 'active',
        remainingSeocnds: state.questions.length * SECS_PER_QUESTION,
      };

    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    case 'finished':
      return {
        ...state,
        status: 'finished',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case 'reset':
      return {
        ...state,
        status: 'ready',
        index: 0,
        answer: null,
        points: 0,
        highScore: 0,
        remainingSeocnds: null,
      };

    case 'tick':
      return {
        ...state,
        remainingSeocnds: state.remainingSeocnds - 1,
        status: state.remainingSeocnds === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Unkown Action');
  }
}

export default function App() {
  const [
    { questions, status, index, answer, points, highScore, remainingSeocnds },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQusestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataRecieved', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQusestions={numQusestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQusestions={numQusestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} remainingSeocnds={remainingSeocnds} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQusestions}
              />
            </Footer>
          </>
        )}

        {status === 'finished' && (
          <FinishedStates
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
