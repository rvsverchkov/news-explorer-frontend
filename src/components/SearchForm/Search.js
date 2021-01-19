import './Search.css';

function Search (props) {
    return (
        <div className="search__container">
            <h1 className="search__title">Что творится в мире?</h1>
            <p className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете</p>
            <form className="search__form">
                <div className="search__input-container">
                    <input className="search__input" placeholder="Введите тему новости"/>
                </div>
                <div className="search__button-container">
                    <button className="search__button" onClick={props.handleSearchClick}>Искать</button>
                </div>
            </form>
        </div>
    )
}

export default Search;