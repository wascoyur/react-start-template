import React from 'react';
import './App.scss';
import './components/modal/Modal-window.scss';
import { ModalWindow } from './components/modal/ModalWindow';

function App() {
  return (
    <div className="App">
      <ModalWindow
        onClick={() => {
          console.log(`click`);
        }}
        visible={true}
      >
        some text inside modal window
      </ModalWindow>
    </div>
  );
}

export default App;
