import './header.css';
import Image from 'next/image';
import Date from '../images/header.svg';
import Search from '../images/search.svg';
import Profile from '../images/profile.svg'



export default function Header(){
    return (
        <header className='header'>
            <div className='header__logo'>лого</div>
                <ul className='header__list'>
                    <li className='header__list-item'>
                        <span className='header__icon'><Image className='header__img' src={Date} alt="иконка" width={24} height={24} /></span>
                        <span className='header__text'>ПН, 4.08.2023</span>
                    </li>
                    <li className='header__list-item'>
                        <span className='header__icon'>$</span>
                        <span className='header__text'>96.34</span>
                    </li>
                    <li className='header__list-item'>
                        <span className='header__icon'>€</span>
                        <span className='header__text'>104.61</span>
                    </li>
                    <li className='header__list-item'>
                        <span className='header__icon'>₿</span>
                        <span className='header__text'>25.725</span>
                    </li>
                </ul>
            <div className='header__block-buttons'>
                    <button className='header__button'><Image src={Search} width={36} height={36} alt="поиск"/></button>
                    <button className='header__button'><Image src={Profile} width={36} height={36} alt="профиль"/></button>
                </div>
        </header>
    )
}