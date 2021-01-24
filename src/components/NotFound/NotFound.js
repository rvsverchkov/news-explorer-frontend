import './NotFound.css';

function NotFound (props) {
    return (
        <div className="found__container">
            <img className="found__image" alt={props.alt} src={props.src}/>
            <h1 className="found__title">Ничего не найдено</h1>
            <p className="found__subtitle">К сожалению по вашему запросу ничего не найдено</p>
        </div>
    )
}

export default NotFound;