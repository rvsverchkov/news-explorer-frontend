import './Header.css';
import { NavLink } from 'react-router-dom';

function Header (props) {

    const console1 = () => {
        console.log('123');
    }

    return (
        <div className="header__container">
            <NavLink className={`header__main-link ${props.isMain ? '' : 'header__black'}`} to="/">NewsExplorer</NavLink>
            <div className="header__navigation">
                <NavLink className={`${props.isMain ? 'header__button' : 'header__black-button'}`} to="/">Главная</NavLink>
                {props.isLoggedIn ? 
                    <button className="header__authorization-button" to="/" onClick={props.onLoginPopup}>Авторизоваться</button> : 
                    <div className="header__auth-links">
                        <NavLink className={`${props.isMain ? 'header__button' : 'header__black-button'}`} to="/saved-news">Сохранённые статьи</NavLink>
                        <div className={`header__logout ${props.isMain ? '' : 'header__black-border'}`}>
                            <p className={`header__logout-name ${props.isMain ? '' : 'header__black'}`}>Грета</p>
                            {props.isMain ? <img src={props.src} alt={props.alt} className="header__logout-image"/> :
                            <img src={props.srcBlack} alt={props.alt} className="header__logout-image"/> }
                        </div>
                    </div>
                }
            </div>
            <img src={props.srcMenu} alt={props.altMenu} className="header__menu-button" onClick={console1}/>
        </div>
    )
}

export default Header;