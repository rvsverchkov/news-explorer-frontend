import './Main.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/Search.js';
import Results from '../Results/Results.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import Avatar from '../../images/avatar.jpg';

function Main (props) {
    return (
        <main>
            <div className="main">
                <div className="main__header-background">
                    <Header />
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
            </div>
        </main>
    )
}

export default Main;