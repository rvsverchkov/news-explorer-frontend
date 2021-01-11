import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main.js';
import LoginPopup from './LoginPopup/LoginPopup.js';
import './App.css';

function App() {

  const [isLoginPopupOpened, setLoginPopupOpened] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <LoginPopup isOpen='true'/>
    </div>
  );
}

export default App;
