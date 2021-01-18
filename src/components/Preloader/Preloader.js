import './Preloader.css';

function Preloader (props) {
    return (
        <div className="preloader__container">
            <i className="preloader__body"></i>
            <p className="preloader__subtitle">Идет поиск новостей...</p>
        </div>
    )
}

export default Preloader;
