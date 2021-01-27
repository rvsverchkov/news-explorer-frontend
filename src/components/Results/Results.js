import './Results.css';
import NewsCard from '../NewsCard/NewsCard.js';

function Results (props) {

    const rowOfCards = props.rowOfCards * 3;

    return (
        <div className="results__container">
            <h1 className="results__title">Результаты поиска</h1>
            <div className="results__grid">
                {props.resultCardsArray.slice(0, rowOfCards).reverse().map((card, i) =>
                    <NewsCard
                        src={card.urlToImage}
                        alt='Фотография'
                        key={i}
                        date={card.publishedAt}
                        title={card.title}
                        text={card.description}
                        href={card.url}
                        source={card.source.name}
                    />
                )}
            </div>
            <button className="results__button" onClick={props.showMoreCards}>Показать еще</button>
        </div>
    )
}

export default Results;