import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/Header.js';
import './App.css';

function App() {
    return (
      <div className="App">
            <Header />
      </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
