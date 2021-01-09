import './About.css';

function About (props) {
    return (
        <about>
            <div className="about__container">
                <img className="about__image" src={props.src} alt={props.alt} />
                <div className="about__text-container">
                    <h1 className="about__title">{props.title}</h1>
                    <p className="about__text">{props.firstParagraph}</p>
                    <p className="about__text">{props.secondParagraph}</p>
                </div>
            </div>
        </about>
    )
}

export default About;