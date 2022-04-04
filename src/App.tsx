import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='content'>
          <AppRouter/>
        </div>
      </div>
    </div>
  );
}

export default App;
