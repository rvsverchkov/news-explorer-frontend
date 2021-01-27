import './Main.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/Search.js';
import Results from '../Results/Results.js';
import Preloader from '../Preloader/Preloader.js';
import NotFound from '../NotFound/NotFound.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';
import SavedNewsGrid from '../SavedNewsGrid/SavedNewsGrid.js';
import Avatar from '../../images/avatar.jpg';
import NotFoundImage from '../../images/not-found.svg';
import Logout from '../../images/logout.svg';
import LogoutBlack from '../../images/logout-black.svg';
import Github from '../../images/github.svg';
import Facebook from '../../images/fb.svg';
import Menu from '../../images/menu.svg';
import CloseButton from '../../images/back.svg';

function Main (props) {
    return (
        <main>
            <div className="main">
                <div className={`${props.isMain ? 'main__header-background' : ''}`}>
                    <Header 
                        CloseButton={CloseButton} 
                        isCloseButton={props.isCloseButton} 
                        isMenuOpen={props.isMenuOpen} 
                        srcMenu={Menu} 
                        openMenu={props.openMenu} 
                        altMenu="Menu" 
                        onLoginPopup={props.onLoginPopup} 
                        isLoggedIn={props.isLoggedIn} 
                        src={Logout} srcBlack={LogoutBlack} 
                        alt="Logout" 
                        isMain={props.isMain}
                        name={props.name}
                        handleLogout={props.handleLogout}
                    />
                    {props.isMain ? <SearchForm onSubmit={props.onSubmitSearch} handleSearchClick={props.handleSearchClick}/> : null}
                </div>
                {props.isMain ? <div className="main__preloader">
                    {props.isAlreadySearch ? <Preloader /> : null}
                </div> : null}
                <div className="main__results-background">
                    {props.isSuccessSearch ? <Results
                        resultCardsArray={props.resultCardsArray}
                        showMoreCards={props.showMoreCards}
                        rowOfCards={props.rowOfCards}
                    /> : null}
                    {props.isNotFound ? <NotFound src={NotFoundImage} /> : null}
                </div>
                <div className="main__saved">
                    {props.isMain ? null : <SavedNews />}
                </div>
                <div className="main__saved-grid">
                    {props.isMain ? null : <SavedNewsGrid />}
                </div>
                <div className="main__about-background">
                    {props.isMain ? <About
                        src={Avatar}
                        alt='Аватар'
                        title='Об авторе'
                        firstParagraph='Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.'
                        secondParagraph='Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.'
                    /> : null}
                </div>
                <Footer
                    facebook={Facebook}
                    facebookAlt='Facebook Link'
                    github={Github}
                    githubAlt='Github Link'
                />
            </div>
        </main>
    )
}

export default Main;