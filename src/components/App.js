import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main.js';
import LoginPopup from './LoginPopup/LoginPopup.js';
import RegisterPopup from './RegisterPopup/RegisterPopup.js';
import './App.css';

function App() {

  const [isLoginPopupOpened, setLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setRegisterPopupOpened] = useState(false);

  const closeAllPopups = () => {
    setLoginPopupOpened(false);
    setRegisterPopupOpened(false);
  }

  const handleLoginPopupClick = () => {
    setRegisterPopupOpened(false);
    setLoginPopupOpened(!isLoginPopupOpened);
  }

  const handleRegisterPopupClick = () => {
    setLoginPopupOpened(false);
    setRegisterPopupOpened(!isRegisterPopupOpened);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main onLoginPopup={handleLoginPopupClick} />
        </Route>
      </Switch>
      <LoginPopup isOpen={isLoginPopupOpened} onClose={closeAllPopups} onRegisterPopup={handleRegisterPopupClick} />
      <RegisterPopup isOpen={isRegisterPopupOpened} onClose={closeAllPopups} onLoginPopup={handleLoginPopupClick} />
    </div>
  );
}

export default App;
