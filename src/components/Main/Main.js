import './Main.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/Search.js';
import Results from '../Results/Results.js';

function Main (props) {
    return (
        <main>
            <div className="main">
                <div className="main__backdrop">
                    <Header />
                    <SearchForm />
                </div>
                <div className="main__background">
                    <Results />
                </div>
            </div>
        </main>
    )
}

export default Main;