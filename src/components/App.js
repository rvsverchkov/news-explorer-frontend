import { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Main from './Main/Main.js';
import LoginPopup from './LoginPopup/LoginPopup.js';
import RegisterPopup from './RegisterPopup/RegisterPopup.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.js';
import NewsApi from '../utils/NewsApi.js';
import * as explorerAuth from '../utils/ExplorerAuth.js';
import * as mainApi from '../utils/MainApi.js';
import * as token from '../utils/Token.js';
import './App.css';

function App() {

  const history = useHistory();
  const currentPath = useLocation();
  const localStorageArray = JSON.parse(localStorage.getItem('results'));
  const [isLoginPopupOpened, setLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setRegisterPopupOpened] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCloseButton, setCloseButton] = useState(false);
  const [resultCardsArray, setResultCardsArray] = useState([]);
  const [isAlreadySearch, setAlreadySearch] = useState(false);
  const [isSuccessSearch, setSuccessSearch] = useState(false);
  const [isActiveHistory, setActiveHistory] = useState(false);
  const [isShowResults, setShowResults] = useState(false);
  const [isNotFound, setNotFound] = useState(false);
  const [rowOfCards, setRowOfCards] = useState(1);
  const [isSuccessRegistration, setSuccessRegistration] = useState(false);
  const [savedCardsArray, setSavedCardsArray] = useState([]);
  const [userData, setUserData] = useState({ id: '', email: '', name: '' });
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: ''
  })

  const getSavedCards = () => {
    const jwt = token.getToken();
    mainApi.getSavedCards(jwt)
      .then((response) => {
        console.log(response);
        setSavedCardsArray(response);
      })
  }

  const handleRegister = (email, password, name) => {
    explorerAuth.register(email, password, name)
      .then((response) => {
        console.log(`
          Вы только что успешно зарегистрировали свой аккаунт в сервисе News Explorer со следующими данными:
          Почтой с адресом ${response.email} и именем ${response.name}
        `);
        setSuccessRegistration(true);
        setRegisterPopupOpened(false);
      })
      .catch((error) => {
        console.log(`Регистрация не была завершена из - за ${error}`);
      })
  }

  const handleLogin = (email, password) => {
    explorerAuth.login(email, password)
      .then((response) => {
        console.log(response);
        setLoginPopupOpened(false);
        tokenCheck();
      })
  }

  const handleLogout = () => {
    token.removeToken();
    //localStorage.removeItem('results');
    setLoggedIn(false);
  }

  const handleSaveCard = (currentCard) => {
    tokenCheck();
    getSavedCards();
    const jwt = token.getToken();
    mainApi.saveCurrentCard(
      localStorage.getItem('word'),
      currentCard.title,
      currentCard.description,
      currentCard.publishedAt,
      currentCard.source.name,
      currentCard.url,
      currentCard.urlToImage,
      jwt
    )
      .then((response) => {
        console.log(response)
      })
  }

  const checkStorage = () => {
    if (localStorageArray !== null && isSuccessSearch === false) {
      setShowResults(true);
      setActiveHistory(true);
    }
    if (localStorageArray !== null && isSuccessSearch === true) {
      setShowResults(true);
      setActiveHistory(false);
    }
  }

  const handleDeleteCard = (currentCard) => {
    const jwt = token.getToken();
    const cardId = currentCard._id;
    mainApi.deleteCurrentCard(
      cardId, jwt
    )
      .then((response) => {
        console.log(response)
        getSavedCards();
      })
  }

  const tokenCheck = () => {
    getSavedCards();
    checkStorage();
    const jwt = token.getToken();
    console.log(localStorageArray)
    if (!jwt) {
      return;
    }
    Promise.all([
      explorerAuth.get(jwt),
    ])
      .then((response) => {
        console.log(response);
        setLoggedIn(true);
        const [userData] = response;
        setUserData(userData);
        setCurrentUser(userData);
        history.push('/');
      })
  }

  const showMoreCards = () => {
    setRowOfCards(rowOfCards + 1);
  }

  const closeAllPopups = () => {
    setLoginPopupOpened(false);
    setRegisterPopupOpened(false);
    setSuccessRegistration(false);
  }

  const onSubmitSearch = (e, word) => {
    e.preventDefault();
    setError(false);
    setAlreadySearch(true);
    setSuccessSearch(false);
    setNotFound(false);
    NewsApi.getArticles(word)
      .then((response) => {
        if (response.articles.length !== 0) {
          setShowResults(true);
          setActiveHistory(false);
          console.log(response.articles.length);
          setResultCardsArray(response.articles);
          localStorage.setItem('results', JSON.stringify(response.articles));
          localStorage.setItem('word', word);
          setSuccessSearch(true);
          setAlreadySearch(false);
        } else {
          setAlreadySearch(false);
          setActiveHistory(false);
          setSuccessSearch(false);
          setShowResults(false)
          setNotFound(true);
        }
      })
      .catch(() => {
        setError(true);
        setAlreadySearch(false);
      })
  }

  const handleLoginPopupClick = () => {
    setRegisterPopupOpened(false);
    setLoginPopupOpened(!isLoginPopupOpened);
    setSuccessRegistration(false);
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

  useEffect(() => {
    tokenCheck();
    return () => {};
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              isNotFound={isNotFound}
              showMoreCards={showMoreCards}
              rowOfCards={rowOfCards}
              name={userData.name}
              handleLogout={handleLogout}
              handleSaveCard={handleSaveCard}
              getSavedCards={getSavedCards}
              currentPath={currentPath}
              handleDeleteCard={handleDeleteCard}
              isActiveHistory={isActiveHistory}
              localStorageArray={localStorageArray}
              isShowResults={isShowResults}
              savedCardsArray={savedCardsArray}
              action={handleRegisterPopupClick}
            />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            isLoggedIn={!isLoggedIn}
            component={Main}
            name={userData.name}
            handleLogout={handleLogout}
            savedCardsArray={savedCardsArray}
            currentPath={currentPath}
            handleDeleteCard={handleDeleteCard}
          />
        </Switch>
        <LoginPopup 
          isOpen={isLoginPopupOpened} 
          onClose={closeAllPopups} 
          onRegisterPopup={handleRegisterPopupClick} 
          handleLoggedInClick={handleLoggedInClick}
          handleLogin={handleLogin}
        />
        <RegisterPopup 
          isOpen={isRegisterPopupOpened} 
          onClose={closeAllPopups} 
          onLoginPopup={handleLoginPopupClick} 
          handleLoggedInClick={handleLoggedInClick}
          handleRegister={handleRegister}
        />
        <PopupWithForm
          checkOpen={isSuccessRegistration}
          isRegister={isSuccessRegistration}
          disable='true'
          title='Пользователь успешно зарегистрирован!'
          name='register-success'
          anotherAction='Войти'
          onClose={closeAllPopups}
          onAnotherAction={handleLoginPopupClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
