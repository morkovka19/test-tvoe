import './navbar.css';
import Image from 'next/image';
import EventsImage from '../images/events.svg';
import FlashImage from '../images/flash.svg';
import CarImage from '../images/car.svg';
import BagImage from '../images/bag.svg';
import HealthImage from '../images/health.svg';
import CriptoImage from '../images/cripto.svg';
import HomeImage from '../images/home.svg';
import BookImage from '../images/book.svg';
import AnalizImage from '../images/analiz.svg';
import TurImage from '../images/tur.svg';
import StarImage from '../images/star.svg';
import SportImage from '../images/sport.svg';
import DressImage from '../images/dress.svg';
import LaptopImage from '../images/laptop.svg';
import EconomicaImage from '../images/economica.svg';

export default function Navbar(){
    return (
        <nav className='nav'>
             <div className='nav__item nav__item_active'>
                <Image src={FlashImage} width={32} height={32}/>
                <a className='nav__link nav__link_active'>Происшествия</a>
            </div>
            <div className='nav__item'>
                <Image src={EventsImage} width={32} height={32}/>
                <a className='nav__link'>Происшествия</a>
            </div>
            <div className='nav__item'>
                <Image src={CarImage} width={32} height={32}/>
                <a className='nav__link'>Авто</a>
            </div>
            <div className='nav__item'>
                <Image src={BagImage} width={32} height={32}/>
                <a className='nav__link'>Бизнес</a>
            </div>
            <div className='nav__item'>
                <Image src={HealthImage} width={32} height={32}/>
                <a className='nav__link'>Здоровье</a>
            </div>
            <div className='nav__item'>
                <Image src={CriptoImage} width={32} height={32}/>
                <a className='nav__link'>Крипто</a>
            </div>
            <div className='nav__item'>
                <Image src={HomeImage} width={32} height={32}/>
                <a className='nav__link'>Недвижимость</a>
            </div>
            <div className='nav__item'>
                <Image src={BookImage} width={32} height={32}/>
                <a className='nav__link'>Образование</a>
            </div>
            <div className='nav__item'>
                <Image src={AnalizImage} width={32} height={32}/>
                <a className='nav__link'>Политика</a>
            </div>
            <div className='nav__item'>
                <Image src={TurImage} width={32} height={32}/>
                <a className='nav__link'>Туризм</a>
            </div>
            <div className='nav__item'>
                <Image src={StarImage} width={32} height={32}/>
                <a className='nav__link'>Шоу-бизнес</a>
            </div>
            <div className='nav__item'>
                <Image src={StarImage} width={32} height={32}/>
                <a className='nav__link'>Спорт</a>
            </div>
            <div className='nav__item'>
                <Image src={DressImage} width={32} height={32}/>
                <a className='nav__link'>Стиль</a>
            </div>
            <div className='nav__item'>
                <Image src={LaptopImage} width={32} height={32}/>
                <a className='nav__link'>Наука и технологии</a>
            </div>
            <div className='nav__item'>
                <Image src={EconomicaImage} width={32} height={32}/>
                <a className='nav__link'>Экономика</a>
            </div>
        </nav>
    )
}