import './SavedNewsGrid.css';
import NewsCard from '../NewsCard/NewsCard.js';

function SavedNewsGrid (props) {

    const showError = () => {
        if (props.savedCardsArray.length !== 0) {
            return(
                <>
                    <div className="saved__grid">
                        {props.savedCardsArray.slice(0).reverse().map((card, i) =>
                            <NewsCard
                                src={card.image}
                                alt='Фотография'
                                key={i}
                                date={card.date}
                                currentCard={card}
                                title={card.title}
                                text={card.text}
                                href={card.link}
                                keyword={card.keyword}
                                source={card.source}
                                bookmark={props.bookmark}
                                isLoggedIn={props.isLoggedIn}
                                handleSaveCard={props.handleSaveCard}
                                currentPath={props.currentPath}
                                handleDeleteCard={props.handleDeleteCard}
                            />
                        )}
                    </div>
                </>
            )
        }
        if (props.savedCardsArray.length === 0) {
            return(
                <p className="saved__grid-error">Здесь пока что ничего нет, сохраните понравившиеся вам статьи, и они отобразятся здесь</p>
            )
        }
    }

    return (
            <>
                {showError()}
            </>
    )
}

export default SavedNewsGrid;