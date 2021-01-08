import './Results.css';
import NewsCard from '../NewsCard/NewsCard.js';
import park from '../../images/newscard-park.png';

function Results (props) {
    return (
        <div className="results__container">
            <h1 className="results__title">Результаты поиска</h1>
            <div className="results__grid">
                <NewsCard 
                    src={park}
                    alt='Парк'
                    date='2 августа, 2019'
                    title='Национальное достояние - парки'
                    text='В 2016 году Америка отмечала важный юбилей: 
                    сто лет назад здесь начала складываться система национальных парков 
                    – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'
                    href='https://lenta.ru/'
                    source='ЛЕНТА.РУ'
                />
                <NewsCard 
                    src={park}
                    alt='Парк'
                    date='2 августа, 2019'
                    title='Национальное достояние - парки'
                    text='В 2016 году Америка отмечала важный юбилей: 
                    сто лет назад здесь начала складываться система национальных парков 
                    – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'
                    href='https://lenta.ru/'
                    source='ЛЕНТА.РУ'
                />
                <NewsCard 
                    src={park}
                    alt='Парк'
                    date='2 августа, 2019'
                    title='Национальное достояние - парки'
                    text='В 2016 году Америка отмечала важный юбилей: 
                    сто лет назад здесь начала складываться система национальных парков 
                    – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'
                    href='https://lenta.ru/'
                    source='ЛЕНТА.РУ'
                />
            </div>
        </div>
    )
}

export default Results;