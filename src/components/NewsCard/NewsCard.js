import './NewsCard.css';

function NewsCard (props) {

    const getDate = () => {
        const date = new Date(props.date);
        return date.toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const saveCard = () => {
        props.handleSaveCard(props.currentCard);
    }

    const deleteCard = () => {
        props.handleDeleteCard(props.currentCard);
    }

    const showActionButton = () => {
        if (!props.isLoggedIn && props.currentPath.pathname === '/') {
            return (
                <>
                    <button className="card__action-button" alt='Картинка' onClick={props.action}/>
                    <div className="card__action-error">
                        <p className="card__action-description">Войдите, чтобы сохранять статьи</p>
                    </div>
                </>
            )
        }
        if (props.isLoggedIn && props.currentPath.pathname === '/') {
            return (
                <>
                    <button className={
                        `${(props.savedCardsArray.some((currentCard) =>
                            currentCard.text === props.text
                        )) ? 
                        'card__action-button-saved' : 'card__action-button'}`
                    } alt='Картинка' onClick={saveCard}/>
                </>
            )
        }
        if (props.currentPath.pathname === '/saved-news') {
            return (
                <>
                    <div className="card__keyword-container">
                        <p className="card__keyword">{props.keyword}</p>
                    </div>
                    <button className="card__action-button-delete" alt='Картинка' onClick={deleteCard}/>
                    <div className="card__action-error">
                        <p className="card__action-description">Убрать из сохранённых</p>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="card__container" >
            <img src={props.src} alt={`${props.alt}`} className="card__picture" />
            <div className="card__action-container">
                <>
                    {showActionButton()}
                </>
            </div>
            <div className="card__background">
                <div className="card__text-container">
                    <p className="card__date">{getDate()}</p>
                    <h2 className="card__title">{props.title}</h2>
                    <p className="card__text">{props.text}</p>
                </div>
                <a className="card__source" href={props.href} target="_blank" rel="noreferrer">{props.source}</a>
            </div>
        </div>
    )
}

export default NewsCard;