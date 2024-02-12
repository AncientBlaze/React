/* eslint-disable no-unused-vars */
import React from 'react';
import Background from './components/Background'
import Foreground from './components/Foreground';

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800 flex">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;