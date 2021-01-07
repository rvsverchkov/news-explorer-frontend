import './Main.css';
import Header from '../Header/Header.js';

function Main (props) {
    return (
        <main>
            <div className="main">
                <div className="main__backdrop">
                    <Header />
                </div>
            </div>
        </main>
    )
}

export default Main;