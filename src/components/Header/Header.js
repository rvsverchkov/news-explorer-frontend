import './Header.css';
import ButtonMenu from '../ButtonMenu/ButtonMenu.js';
import { NavLink } from 'react-router-dom';

function Header (props) {
    return (
        <div className="header__container">
            <NavLink className={`header__main-link ${props.isMain ? '' : 'header__black'}`} to="/">NewsExplorer</NavLink>
            <div className="header__navigation">
                <NavLink className={`${props.isMain ? 'header__button' : 'header__black-button'}`} to="/">Главная</NavLink>
                {props.isLoggedIn ? 
                    <button className="header__authorization-button" to="/" onClick={props.onLoginPopup}>Авторизоваться</button> : 
                    <div className="header__auth-links">
                        <NavLink className={`${props.isMain ? 'header__button' : 'header__black-button'}`} onClick={props.getSavedCards} to="/saved-news">Сохранённые статьи</NavLink>
                        <div className={`header__logout ${props.isMain ? '' : 'header__black-border'}`}>
                            <p onClick={props.handleLogout} className={`header__logout-name ${props.isMain ? '' : 'header__black'}`}>{props.name}</p>
                            {props.isMain ? <img src={props.src} alt={props.alt} className="header__logout-image"/> :
                            <img src={props.srcBlack} alt={props.alt} className="header__logout-image"/> }
                        </div>
                    </div>
                }
            </div>
            {props.isMenuOpen ? <ButtonMenu isMenuOpen={props.isMenuOpen} onLoginPopup={props.onLoginPopup} /> : null}
            <img src={props.isCloseButton ? props.CloseButton : props.srcMenu} alt={props.altMenu} className="header__menu-button" onClick={props.openMenu}/>
        </div>
    )
}

export default Header;