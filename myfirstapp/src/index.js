import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


function MyInfo() {
  return (<div>
    <h1>Umair Sheikh</h1>
    <p>I love to code, enjoy movies and going out with freinds!</p>
    <h3>Top 3 vacation spots I would love to visit:</h3>
    <ol>
      <li>Spain</li>
      <li>Paris</li>
      <li>Dubai</li>
    </ol>
  </div>)
}




ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
