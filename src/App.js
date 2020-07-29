import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Contact/>
        </div>
      </div>

    </div>
  );
}

export default App;
