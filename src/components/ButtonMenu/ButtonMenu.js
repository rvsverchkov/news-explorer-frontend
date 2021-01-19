import './ButtonMenu.css';
import { NavLink } from 'react-router-dom';

function ButtonMenu (props) {
    return (
        <div className="mobile__container">
            {props.isMenuOpen ?
                <div className="mobile__background-shadow">
                    <div className="mobile__background">
                        <div className="mobile__top-link">
                            <NavLink className={`mobile__main-link`} to="/">NewsExplorer</NavLink>
                        </div>
                        <div className="mobile__bottom-link">
                            <NavLink className="mobile__button" to="/">Главная</NavLink>
                            <NavLink className="mobile__button" to="/saved-news">Сохранённые статьи</NavLink>
                            <button className="mobile__authorization-button" onClick={props.onLoginPopup}>Авторизоваться</button>
                        </div>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default ButtonMenu;