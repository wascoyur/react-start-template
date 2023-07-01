import React, { useState } from 'react';
import './App.scss';
import './components/modal/Modal-window.scss';
import { ModalWindow } from './components/modal/ModalWindow';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setIsVisible(true)}> Show modal</button>
      <ModalWindow
        onClick={() => {
          setIsVisible((v) => !v);
          console.log(`click`);
        }}
        visible={isVisible}
      >
        <div>some text inside modal window</div>
      </ModalWindow>
    </div>
  );
}

export default App;
