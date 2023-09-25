import './adv.css';

export default function Advertising(){
    return (
        <section className="adv">
            <a className="adv__link">Ссылка на сайт <span className="adv__span" >РЕКЛАМА</span></a>
            <div className="adv__block">Реклама</div>
            <p className="adv__text">Текст длинного рекламного объявления</p>
        </section>
    )
}