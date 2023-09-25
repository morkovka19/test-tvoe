import Image from "next/image";
import FireImage from '../images/fire.svg';
import './lenta.css';
import Fire from '../images/fire1.svg';

export default function Lenta({events}){
    console.log(events)
return (
    <section className="lenta">
        <h2 className="lenta__title">Лента</h2>
        <ul className="lenta__list">
            {events.map((item, i) => (
                <li key={i} className="lenta__item">
                    <div className="lenta__item-info">
                        <Image className="lenta__img" src={FireImage} width={24} height={24} alt="молния"/>
                        <h3 className="lenta__item-title">{item.title}</h3>
                    </div>
                    <div className="lenta__item-block">
                        <span className="lenta__time">{item.time}</span>
                        <span className="lenta__section">{item.section}</span>
                    </div>
                </li>
            ))}
        </ul>
        <marquee className="lenta__marquee">
            <div className="lenta__block-menquee">
                <Image src={Fire} width={24} height={24} alt="огонь"/>
                <span className="lenta__text">ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
                <Image src={Fire} width={24} height={24} alt="огонь"/>
                <span className="lenta__text">ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
                <Image src={Fire} width={24} height={24} alt="огонь"/>
                <span className="lenta__text">ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
            </div>
        </marquee>
    </section>
)
}