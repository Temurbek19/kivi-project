import { Link } from 'react-router-dom';

import ArrowBottom from '../../assets/Icons/arrowBottom.svg';
import CamereIcon from '../../assets/Icons/cameraIcon.png';
import Xarita from '../../assets/images/xarita.png';
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
import Izmenit from '../../assets/images/izmenit.png';
import Ptichka from '../../assets/images/ptichka.png';

import './Izmeniya.scss';

const Izmeniya = () => {
    return (
        <div className="izmeniya">
            <div className="add_navbar_top">
                <h1>Добавить обьявления бесплатно</h1>
                <h5>Для добавления вашего обьявлении вы должны выбрать категорию</h5>
            </div>
            <div className="navbar_top">
                <span><img src={Back} alt=""/></span>
                <div className="opasity"><img src={Avtomobil} alt=""/></div>
                <div className="nedvi"><img src={Nedvi} alt=""/> <img className="ptichka" src={Ptichka} alt=""/> </div>
                <div className="opasity"><img src={Elektronika} alt=""/></div>
                <div className="opasity"><img src={Rabota} alt=""/></div>
                <div className="opasity"><img src={Lichniye} alt=""/></div>
                <div className="opasity"><img src={Domisad} alt=""/></div>
                <div className="opasity"><img src={Ctroyka} alt=""/></div>
                <div className="opasity"><img src={Xobbi} alt=""/></div>
                <div className="opasity"><img src={Biznes} alt=""/></div>
                <span><img src={Next} alt=""/></span>
            </div>
            <div className="izmeniya_top1">
                <h5>Вы выбрали: </h5>
                <span>Недвижимость   »</span>
                <span>Дома   »</span>
                <span>Аренда долгосрочная</span>
                <Link className="izmenit"><img src={Izmenit} alt=""/></Link>
            </div>
            <div className="izmeniya-top2">
                <div className="izmeniya-top2-left">
                    <span>Цена</span>
                    <h5>400 000</h5>
                </div>
                <div className="izmeniya-top2-main">
                    <h6>Сум</h6>
                    <img src={ArrowBottom} alt=""/>
                </div>
                <div className="izmeniya-top2-right">
                    <input type="checkbox"/>
                    <span>Договорная</span>
                </div>
            </div>
            <div className="izmeniya-top2">
                <div className="izmeniya-top2-left">
                    <span>Количество комнат*</span>
                    <h5>4</h5>
                </div>
                <div className="izmeniya-top2-main top3-main">
                    <h6>900</h6>
                </div>
                <div className="izmeniya-top2-right top3-right">
                    <span>90</span>
                </div>
            </div>
            <h4 className="top4-text">Расположение*</h4>
            <div className="izmeniya-top4">
                <div className="izmeniya-top4-left">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В городе</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В пригороде</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В сельской местности</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Вдоль трассы</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Возле водоема, реки</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В предгорьях</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В дачном массиве</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>На закрытой территории</span>
                    </div>
                </div>
            </div>
            <div className="izmeniya-top2">
                <div className="izmeniya-top2-left">
                    <span>Этажность дома*</span>
                    <h5>4</h5>
                </div>
                <div className="izmeniya-top2-left top5_block">
                    <span>Высота потолков</span>
                    <h5>2m</h5>
                </div>
                <div className="izmeniya-top2-left top5_block">
                    <span>Площадь участка*</span>
                    <h5>342</h5>
                </div>
            </div>
            <h4 className="top4-text">Отопление</h4>
            <div className="izmeniya-top4">
                <div className="izmeniya-top4-left">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Авторский проект</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Средний ремонт</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Евроремонт</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Требует ремонта</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Предчистовая отделка</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Не достроен</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Черновая отделка</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Под снос</span>
                    </div>
                </div>
            </div>
            <div className="izmeniya-top6">
                <h6>Электричество</h6>
                <h5>Есть возможность подключения</h5>
            </div>
            <div className="izmeniya-bottom1">
                <h3>9000 знаков осталос</h3>
                <div className="izmeniya-bottom1-top">
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                </div>
                <div className="izmeniya-bottom1-top">
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                    <img src={CamereIcon} alt=""/>
                </div>
                <h1>Местоположение объекта</h1>
            </div>
            <div className="izmeniya-bottom2">
                <div className="izmeniya-bottom2-left">
                    <h5>Регион</h5>
                    <h3>
                        <span>Ташкент</span>
                        <img src={ArrowBottom} alt=""/>
                    </h3>
                </div>
                <div className="izmeniya-bottom2-left">
                    <h5>Город / Район</h5>
                    <h3>
                        <span>Мирза Улугбекский район</span>
                        <img src={ArrowBottom} alt=""/>
                    </h3>
                </div>
            </div>
            <img className="xarita" src={Xarita} alt=""/>
            <div className="izmeniya-bottom3">
                <label htmlFor="nomer">Телефонный номер</label>
                <input type="text" id="nomer" placeholder="+99894 888 74452"/>
            </div>
            <div className="izmeniya-bottom3">
                <label htmlFor="email">Email-адрес</label>
                <input type="text" id="email" placeholder="+99894 888 74452"/>
            </div>
            <div className="izmeniya-bottom3">
                <label htmlFor="liso">Контактный лицо</label>
                <input type="text" id="liso" placeholder="Зухриддин"/>
            </div>
            <div className="izmeniya-bottom4">
                <Link className="link1-bottom4">Добавить обьявления бесплатно</Link>
                <Link className="link2-bottom4">Предпросмотр</Link>
            </div>
        </div>
    )
};

export default Izmeniya;