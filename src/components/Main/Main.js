import './Main.css';
import Header from '../Header/Header.js';
import Search from '../Search/Search.js';

function Main (props) {
    return (
        <main>
            <div className="main">
                <div className="main__backdrop">
                    <Header />
                    <Search />
                </div>
            </div>
        </main>
    )
}

export default Main;