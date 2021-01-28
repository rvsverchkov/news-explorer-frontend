import './SavedNewsGrid.css';
import NewsCard from '../NewsCard/NewsCard.js';
import Forest from '../../images/forest.png';
import Park from '../../images/park.png';
import Taiga from '../../images/taiga.png';

function SavedNewsGrid (props) {
    return (
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
                        source={card.source}
                        bookmark={props.bookmark}
                        isLoggedIn={props.isLoggedIn}
                        handleSaveCard={props.handleSaveCard}
                    />
                )}
        </div>
    )
}

export default SavedNewsGrid;