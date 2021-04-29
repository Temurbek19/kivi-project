import { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import InfoReklama from '../../pages/InfoReklama';

import InfoItemBack from '../InfoItemBack';
import InfoItemNext from '../InfoItemNext';

import Info1 from '../../assets/images/info1.png';
import Info2 from '../../assets/images/info2.png';
import Info3 from '../../assets/images/info3.png';
import Info4 from '../../assets/images/info4.png';
import Info5 from '../../assets/images/info5.png';
import Info6 from '../../assets/images/info6.png';

import './InfoItem.scss';

const InfoItem = () => {
    const [ activeImg, setActiveImg ] = useState('info6');
    const [ activeNumber, setActiveNumber ] = useState('');
    const [ activeNumber2, setActiveNumber2 ] = useState('');
    return(
        <div className="info_item">
            <h1>Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5</h1>
            <div className="info_item-block">
                <div className="info_item-block-left">
                    <div className="info_item-block-left-left">
                        <img src={Info1} alt="" onClick={() => setActiveImg('info1')}/>
                        <img src={Info2} alt="" onClick={() => setActiveImg('info2')}/>
                        <img src={Info3} alt="" onClick={() => setActiveImg('info3')}/>
                        <img src={Info4} alt="" onClick={() => setActiveImg('info4')}/>
                        <img src={Info5} alt="" onClick={() => setActiveImg('info5')}/>
                    </div>
                    <div className="info_item-block-left-right">
                        <img src={Info6} className={`infoImg ${activeImg==='info6' ? 'active' : ''}`} alt=""/>
                        <img src={Info1} className={`infoImg ${activeImg==='info1' ? 'active' : ''}`} alt=""/>
                        <img src={Info2} className={`infoImg ${activeImg==='info2' ? 'active' : ''}`} alt=""/>
                        <img src={Info3} className={`infoImg ${activeImg==='info3' ? 'active' : ''}`} alt=""/>
                        <img src={Info4} className={`infoImg ${activeImg==='info4' ? 'active' : ''}`} alt=""/>
                        <img src={Info5} className={`infoImg ${activeImg==='info5' ? 'active' : ''}`} alt=""/>
                    </div>
                </div>
                <div className="info_item-block-right">
                    <div className="info_item-block-right-top">
                        <span>Артикул: 4418970</span>
                        <span>обновлено: 28.04.17 добавлено: 28.04.17</span>
                    </div>
                    <h1 className="price">70 000 у.е.</h1>
                    <Link className="price-link">Ташкент, Ташкентская область, Юнусабадский район </Link>
                    <div className="phone-number">
                        <h5>99891 166 </h5>
                        <span className={`${activeNumber === 'opened' ? 'closed' : ''}`}>****</span>
                        <span className={`number ${activeNumber === 'opened' ? 'opened' : ''}`}>2021</span>
                        <button onClick={() => setActiveNumber('opened')}>Покозать польностю</button>
                    </div>
                    <div className="phone-number">
                        <h5>99893 216 </h5>
                        <span className={`${activeNumber2 === 'opened' ? 'closed' : ''}`}>****</span>
                        <span className={`number ${activeNumber2 === 'opened' ? 'opened' : ''}`}>1202</span>
                        <button onClick={() => setActiveNumber2('opened')}>Покозать польностю</button>
                    </div>
                    <div className="avtor">
                        <h6>Автор обьявлении: </h6>
                        <Link>Зухриддин Темиров</Link>
                    </div>
                    <div className="button-link">
                        <button>Написать автору</button>
                        <button>Предложить свою цену</button>
                    </div>
                    <div className="table">
                        <div className="table-block">
                            <div className="table-block-item">
                                <h5>Количество комнат:</h5>
                                <span>6</span>
                            </div>
                            <div className="table-block-item">
                                <h5>Общая площадь:</h5>
                                <span>40 м2</span>
                            </div>
                            <div className="table-block-item">
                                <h5>Этаж:</h5>
                                <span>32</span>
                            </div>
                        </div>
                        <div className="table-block">
                            <div className="table-block-item">
                                <h5>Количество комнат:</h5>
                                <span>6</span>
                            </div>
                            <div className="table-block-item">
                                <h5>Состояние квартиры:</h5>
                                <span>Первая сдача</span>
                            </div>
                            <div className="table-block-item">
                                <h5>Этаж:</h5>
                                <span>32</span>
                            </div>
                        </div>
                        <div className="table-block">
                            <div className="table-block-item">
                                <h5>Планировка</h5>
                                <Link>Раздельная</Link>
                            </div>
                            <div className="table-block-item">
                                <h5>Год постройки/сдачи</h5>
                                <Link>Сдача в 2017</Link>
                            </div>
                            <div className="table-block-item">
                                <h5>Ремонт</h5>
                                <span>Авторский проект</span>
                            </div>
                        </div>
                        <div className="table-block">
                            <div className="table-block-item">
                                <h5>Санузел</h5>
                                <Link>2 санузла и более</Link>
                            </div>
                            <div className="table-block-item">
                                <h5>Меблирована</h5>
                                <Link>Да</Link>
                            </div>
                            <div className="table-block-item">
                                <h5>Высота потолков</h5>
                                <span>32</span>
                            </div>
                        </div>
                        <div className="table-block">
                            <div className="table-block-item item2">
                                <h5>Рядом есть</h5>
                                <Link>Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-item">
                        <p>Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый.
                          <br/> <br/>  Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.</p>
                        <div className="text-item-block">
                            <h5>Просмотры:10958</h5>
                            <span>Пожаловатся</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info_item_reklama">
                <Router>
                    <InfoReklama/>
                    <Switch>
                        <Route exact path="/news/infoItem" component={InfoItemBack}/>
                        <Route path="/avtore" component={InfoItemNext}/>
                    </Switch>
                </Router>
            </div>
        </div>
    )
};

export default InfoItem;