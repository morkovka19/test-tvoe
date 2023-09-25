import './footer.css';
import TelegramInage from '../images/telegram.svg';
import Image from 'next/image';

export default function Footer(){
    return (
        <footer className='footer'>
            <div className='footer__block-logo'>
                <span className='footer__logo'>лого</span>
                <span className='footer__logo-text'>© НАЗВАНИЕ 2023. Все права защищены</span>
            </div>
            <div className='footer__block'>
                <a href="#" className='footer__link'>Контакты</a>
                <a href="#" className='footer__link'>Редакция</a>
            </div>
            <div className='footer__block'>
                <a href="#" className='footer__link'>Политика конфиденциальности</a>
                <a href="#" className='footer__link'>Условия использования</a>
                <a href="#" className='footer__link'>Реклама</a>
            </div>
            <div className='footer__block'>
                <div className='footer__block-email'>
                <span className='footer__link'>По любым вопросам пишите на</span> <span className='footer__span'>privet@yandex.com</span>
                </div>
                <a className='footer__link footer__logo-text'><Image src={TelegramInage} width={24} height={24} className='footer__icon' alt="телеграм"/>Подписаться</a>
            </div>
            <button className='footer__button'>Предложить новость</button>
        </footer>
    )
}