import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main.js';
import LoginPopup from './LoginPopup/LoginPopup.js';
import RegisterPopup from './RegisterPopup/RegisterPopup.js';
import NewsApi from '../utils/NewsApi.js';
import './App.css';

function App() {

  const [isLoginPopupOpened, setLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setRegisterPopupOpened] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCloseButton, setCloseButton] = useState(false);
  const [resultCardsArray, setResultCardsArray] = useState([]);
  const [isAlreadySearch, setAlreadySearch] = useState(false);
  const [isSuccessSearch, setSuccessSearch] = useState(false);

  const closeAllPopups = () => {
    setLoginPopupOpened(false);
    setRegisterPopupOpened(false);
  }

  const onSubmitSearch = (e) => {
    e.preventDefault();
    setAlreadySearch(true);
    setSuccessSearch(false);
    NewsApi.getArticles()
      .then((response) => {
        console.log(response.articles);
        setResultCardsArray(response.articles);
        setSuccessSearch(true);
        setAlreadySearch(false);
      })
      .catch(() => {
        setError(true);
      })
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

  const openMenu = () => {
    setMenuOpen(!isMenuOpen);
    setCloseButton(!isCloseButton);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main 
            isCloseButton={isCloseButton} 
            isMain="true" 
            openMenu={openMenu} 
            isMenuOpen={isMenuOpen} 
            onLoginPopup={handleLoginPopupClick} 
            isLoggedIn={!isLoggedIn} 
            isError={isError} 
            onSubmitSearch={onSubmitSearch}
            resultCardsArray={resultCardsArray}
            isAlreadySearch={isAlreadySearch}
            isSuccessSearch={isSuccessSearch}
          />
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
