import './NewsCard.css';

function NewsCard (props) {
    return (
        <div className="card__container" >
            <img src={props.src} alt={`${props.alt}`} className="card__picture" />
            <div className="card__background">
                <div className="card__text-container">
                    <p className="card__date">{props.date}</p>
                    <h2 className="card__title">{props.title}</h2>
                    <p className="card__text">{props.text}</p>
                </div>
                <a className="card__source" href={props.href} target="_blank" rel="noreferrer">{props.source}</a>
            </div>
        </div>
    )
}

export default NewsCard;