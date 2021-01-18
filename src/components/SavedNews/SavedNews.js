import './SavedNews.css';

function SavedNews (props) {
    return (
        <div className="saved__container">
            <p className="saved__title">Сохранённые статьи</p>
            <h2 className="saved__message">Грета, у вас 5 сохранённых статей</h2>
            <p className="saved__subtitle">По ключевым словам: <b>Природа</b>, <b>Тайга</b> и <b>2-м другим</b></p>
        </div>
    )
}

export default SavedNews;