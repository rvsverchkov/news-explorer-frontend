import './SavedNews.css';

function SavedNews (props) {

    const keywords = props.savedCardsArray.map((i) => i = i.keyword);

    const showSomeKeyword = () => {
        if (props.savedCardsArray.length === 0) {
            return(
                <>
                    <p className="saved__subtitle">Сохраните понравившуюся вам статью на главной странице :)</p>
                </>
            )
        }
        if (props.savedCardsArray.length === 1) {
            return(
                <>
                    <p className="saved__subtitle">По ключевому слову: <b>{keywords[0]}</b></p>
                </>
            )
        }
        if (props.savedCardsArray.length === 2) {
            return(
                <>
                    <p className="saved__subtitle">По ключевому слову: <b>{keywords[0]} и <b>{keywords[1]}</b></b></p>
                </>
            )
        }
        if (props.savedCardsArray.length > 2) {
            return(
                <>
                    <p className="saved__subtitle">По ключевому слову: <b>{keywords[0]}, <b>{keywords[1]} и <b>{keywords.length - 2}-м</b></b></b> другим</p>
                </>
            )
        }
    }

    return (
        <div className="saved__container">
            <p className="saved__title">Сохранённые статьи</p>
            <h2 className="saved__message">{props.name}, у вас {props.savedCardsArray.length} сохранённых статей</h2>
            <>
                {showSomeKeyword()}
            </>
        </div>
    )
}

export default SavedNews;