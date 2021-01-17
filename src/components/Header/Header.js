import './Header.css';
import { NavLink } from 'react-router-dom';

function Header (props) {
    return (
        <div className="header__container">
            <NavLink className="header__main-link" to="/">NewsExplorer</NavLink>
            <div>
                <NavLink className="header__main-button" to="/">Главная</NavLink>
                { props.isLoggedIn ? 
                    <button className="header__authorization-button" to="/" onClick={props.onLoginPopup}>Авторизоваться</button> : 
                    <div className="header__auth-links">
                        
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;