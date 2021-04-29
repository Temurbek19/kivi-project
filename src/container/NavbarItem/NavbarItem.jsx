import { useState } from 'react';
import cx from 'classnames';

import Back from '../../assets/images/back.svg';
import Next from '../../assets/images/next.svg';
import Avtomobil from '../../assets/images/avtomobil.svg';
import Biznes from '../../assets/images/biznes.svg';
import Ctroyka from '../../assets/images/ctroyka.svg';
import Domisad from '../../assets/images/domisad.svg';
import Elektronika from '../../assets/images/elektronika.svg';
import Lichniye from '../../assets/images/lichniye.svg';
import Nedvi from '../../assets/images/nedvi.svg';
import Rabota from '../../assets/images/rabota.svg';
import Xobbi from '../../assets/images/xobbi.svg';
import Treagle from '../../assets/images/treagle.png';
import ArrowLeft from '../../assets/images/arrowLeft.png';

import '../Navbar/Navbar.scss';

const NavbarItem = () => {
    const [ opened, setOpened ] = useState('opened');
    const [ active, setActive ] = useState('');
    return(
        <div className="navbar">
            <div className="navbar_top">
                <span><img src={Back} alt=""/></span>
                <div className=""><img src={Avtomobil} alt=""/></div>
                <div className=""><img src={Nedvi} alt=""/></div>
                <div className=""><img src={Elektronika} onClick={() => setOpened('opened')} alt=""/></div>
                <div className=""><img src={Rabota} alt=""/></div>
                <div className=""><img src={Lichniye} alt=""/></div>
                <div className=""><img src={Domisad} alt=""/></div>
                <div className=""><img src={Ctroyka} alt=""/></div>
                <div className=""><img src={Xobbi} alt=""/></div>
                <div className=""><img src={Biznes} alt=""/></div>
                <span><img src={Next} alt=""/></span>
            </div>
            <div className={cx('modal', opened === 'opened' && active !== 'span1' && 'opened', active === 'span1' && 'closed')}>
                <img src={Treagle} alt="" className="modal-treagle"/>
                <div className="modal-block">
                    <span>Телефоны</span>
                    <span onClick={() => setActive("span1")}>Компьютеры</span>
                    <span>Фото / видео</span>
                    <span>Тв / видеотехника</span>
                    <span>Аудиотехника</span>
                </div>
                <div className="modal-block">
                    <span>Игры и игровые приставки</span>
                    <span>Техника для дома</span>
                    <span>Техника для кухни</span>
                    <span>Климатическое оборудование</span>
                    <span>Индивидуальный уход</span>
                </div>
                <div className="modal-block">
                    <span>Аксессуары и комплектующие</span>
                    <span>Прочая электроника</span>
                    <span>Телефоны</span>
                    <span>Компьютеры</span>
                    <span>Фото / видео</span>
                </div>
                <div className="modal-block">
                    <span>Телефоны</span>
                    <span>Компьютеры</span>
                    <span>Фото / видео</span>
                    <span>Тв / видеотехника</span>
                    <span>Аудиотехника</span>
                </div>
            </div>
            <div className={`secont_modal ${active==="span1" ? 'opened' : ''}`}>
                <img src={Treagle} alt="" className="modal-treagle"/>

                <div className="secont_modal-top">
                    <img src={ArrowLeft} alt=""/>
                    <h1>Компьютеры</h1>
                    <span>Посмотреть всю категорию компютеры</span>
                </div>

                <div className="salom">
                    <div className="modal-block">
                        <span>Настольные</span>
                        <span>Ноутбуки</span>
                        <span>Планшетные</span> 
                        <span>Компьютеры</span>
                    </div>
                    <div className="modal-block">
                        <span>Серверы</span>
                        <span>Аксессуары</span>
                        <span>Комплектующие</span> 
                        <span>Периферийные устройства</span>
                    </div>
                    <div className="modal-block">
                        <span>Мониторы</span>
                        <span>Внешние накопители</span>
                        <span>Расходные материалы</span>
                        <span>Другое</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavbarItem;