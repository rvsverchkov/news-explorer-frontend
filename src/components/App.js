import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main.js';
import LoginPopup from './LoginPopup/LoginPopup.js';
import RegisterPopup from './RegisterPopup/RegisterPopup.js';
import './App.css';

function App() {

  const [isLoginPopupOpened, setLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setRegisterPopupOpened] = useState(false);
  const [isSearching, setSearchingOn] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCloseButton, setCloseButton] = useState(false);

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

  const handleLoggedInClick = (e) => {
    e.preventDefault();
    closeAllPopups();
    setLoggedIn(!isLoggedIn);
  }

  const handleSearchClick = (e) => {
    e.preventDefault();
    setError(false);
    setSearchingOn(!isSearching);
    setTimeout(handleSearchErrorClick, 500);
  }

  const handleSearchErrorClick = () => {
    setSearchingOn(false);
    setError(true);
  }

  const openMenu = () => {
    setMenuOpen(!isMenuOpen);
    setCloseButton(!isCloseButton);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main isCloseButton={isCloseButton} isMain="true" openMenu={openMenu} isMenuOpen={isMenuOpen} 
          onLoginPopup={handleLoginPopupClick} isLoggedIn={!isLoggedIn} handleSearchClick={handleSearchClick} 
          isSearching={isSearching} isError={isError} />
        </Route>
        <Route exact path="/saved-news">
          <Main />
        </Route>
      </Switch>
      <LoginPopup isOpen={isLoginPopupOpened} onClose={closeAllPopups} onRegisterPopup={handleRegisterPopupClick} handleLoggedInClick={handleLoggedInClick} />
      <RegisterPopup isOpen={isRegisterPopupOpened} onClose={closeAllPopups} onLoginPopup={handleLoginPopupClick} handleLoggedInClick={handleLoggedInClick} />
    </div>
  );
}

export default App;
