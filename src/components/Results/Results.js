import './Results.css';
import NewsCard from '../NewsCard/NewsCard.js';

function Results (props) {
    return (
        <div className="results__container">
            <h1 className="results__title">Результаты поиска</h1>
            <div className="results__grid">
                {props.resultCardsArray.slice(0).reverse().map((card, i) =>
                    <NewsCard
                        src={card.urlToImage}
                        alt={card.title}
                        date={card.publishedAt}
                        title={card.title}
                        text={card.description}
                        href={card.url}
                        source={card.source.name}
                    />
                )}
            </div>
            <button className="results__button">Показать еще</button>
        </div>
    )
}

export default Results;