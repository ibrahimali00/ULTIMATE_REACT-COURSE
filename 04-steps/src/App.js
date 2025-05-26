import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}

      <StepMessage step={1}>
        <p>Learn about Props children</p>
        <p>😒</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Go crazy about it </p>
        <p>😒</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setSep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: 'Ali' });

  function handlerPrev() {
    if (step > 1) setSep((s) => s - 1);
    // setTest({ name: 'Asmaa' });
  }
  function handlerNext() {
    if (step < 3) setSep((s) => s + 1);
    // setTest({ name: 'Aiyosha' });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {' '}
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert('learn about props children')}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlerPrev}>
              <span>👈</span> Previous{' '}
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlerNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} :</h3> {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
