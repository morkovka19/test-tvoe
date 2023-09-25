import { events } from "../constants";
import './events.css';
import Image from "next/image";
import ArrowsImage from '../images/arrows.svg';
import LikeImage from '../images/like.svg';
import AngryImage from '../images/angry.svg';
import FuImage from '../images/fu.svg';
import ComImage from '../images/comm.svg';
import AddImage from '../images/add.svg'


export default function Events(){
    return (
        <section className='events'>
            <h2 className='events__title'>Происшествия <Image src={ArrowsImage} width={24} height={24} alt="стрелочка" /></h2>
            <ul className='events__list'>
                {events.map((item, i) =>(
                    <li className='events__item' key={i}>
                            <Image src={item.link} className="events__img" alt={item.title} width={264} height={164} />
                            <span className='events__date'>{item.date}</span>
                        <h3 className='events__item-title'>{item.title}</h3>
                        <div className='events__emogi'>
                            <span className='events__emogi-item'><Image className="events__icon" src={LikeImage} width={14} height={14} alt="лайк"/>{item.likes}</span>
                            <span className='events__emogi-item'><Image className="events__icon" src={AngryImage} width={14} height={14} alt="злой"/>{item.angry}</span>
                            <span className='events__emogi-item'><Image className="events__icon" src={FuImage} width={14} height={14} alt="не нравится"/>{item.fu}</span>
                            <span className='events__emogi-item'><Image className="events__icon" src={ComImage} width={14} height={14} alt="комментарий"/>{item.com}</span>
                            <span className='events__emogi-item'><Image className="events__icon" src={AddImage} width={14} height={14} alt="закладка"/>{item.add}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}