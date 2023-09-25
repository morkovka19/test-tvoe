import {read} from '../constants';
import './read.css';
import Image from 'next/image';
import ArrowsImage from '../images/arrows.svg';
import LikeImage from '../images/like.svg';
import AngryImage from '../images/angry.svg';
import FuImage from '../images/fu.svg';
import ComImage from '../images/comm.svg';
import AddImage from '../images/add.svg'

export default function Read(){
    return (
        <section className='read'>
            <h2 className='read__title'>Читайте также <Image src={ArrowsImage} width={24} height={24} alt="стрелочка" /></h2>
            <ul className='read__list'>
                {read.map((item, i) =>(
                    <li className='read__item' key={i}>
                        <div className='read__info-block'>
                            <span className='read__section'>{item.section}</span>
                            <span className='read__date'>{item.date}</span>
                        </div>
                        <h3 className='read__item-title'>{item.title}</h3>
                        <div className='read__emogi'>
                            <span className='read__emogi-item'><Image className="read__icon" src={LikeImage} width={14} height={14} alt="лайк"/>{item.likes}</span>
                            <span className='read__emogi-item'><Image className="read__icon" src={AngryImage} width={14} height={14} alt="злой"/>{item.angry}</span>
                            <span className='read__emogi-item'><Image className="read__icon" src={FuImage} width={14} height={14} alt="не нравится"/>{item.fu}</span>
                            <span className='read__emogi-item'><Image className="read__icon" src={ComImage} width={14} height={14} alt="комментарий"/>{item.com}</span>
                            <span className='read__emogi-item'><Image className="read__icon" src={AddImage} width={14} height={14} alt="закладка"/>{item.add}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}