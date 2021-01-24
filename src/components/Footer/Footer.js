import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer (props) {
    return (
        <div className="footer__container">
            <p className="footer__description">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__link-container">
                <NavLink className="footer__main-link" to="/">Главная</NavLink>
                <a className="footer__praktikum-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                <a className="footer__github-link" href="https://github.com/rvsverchkov" target="_blank" rel="noreferrer">
                    <img src={props.github} alt={props.githubAlt} />
                </a>
                <a className="footer__facebook-link" href="https://www.facebook.com/profile.php?id=100009101131220" target="_blank" rel="noreferrer">
                    <img src={props.facebook} alt={props.facebookAlt} />
                </a>
            </div>
        </div>
    )
}

export default Footer;