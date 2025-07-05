import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './starRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating="5"
      messages={['Terrible', 'Bad', 'Nice', 'Good', 'Amazing']}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={25}
      className="test"
      defaultRaing={4}
    />
    <Test /> */}
  </React.StrictMode>
);

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={8} color="blue" onSetRaing={setMovieRating} />
//       <p>this movie was rated {movieRating} stars </p>
//     </div>
//   );
// }
