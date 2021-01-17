import './Main.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/Search.js';
import Results from '../Results/Results.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import Avatar from '../../images/avatar.jpg';
import Github from '../../images/github.svg';
import Facebook from '../../images/fb.svg';

function Main (props) {
    return (
        <main>
            <div className="main">
                <div className="main__header-background">
                    <Header onLoginPopup={props.onLoginPopup} isLoggedIn={props.isLoggedIn} />
                    <SearchForm />
                </div>
                <div className="main__results-background">
                    <Results />
                </div>
                <div className="main__about-background">
                    <About
                        src={Avatar}
                        alt='Аватар'
                        title='Об авторе'
                        firstParagraph='Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.'
                        secondParagraph='Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.'
                    />
                </div>
                <Footer
                    facebook={Facebook}
                    facebookAlt='Facebook Link'
                    github={Github}
                    githubAlt='Github Link'
                />
            </div>
        </main>
    )
}

export default Main;