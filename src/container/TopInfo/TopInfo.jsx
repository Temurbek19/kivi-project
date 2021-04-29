import { Link } from 'react-router-dom';

import Lupa from '../../assets/images/lupa.png';
import Icon1 from '../../assets/Icons/icon1.svg';
import Icon2 from '../../assets/Icons/icon2.svg';
import Icon3 from '../../assets/Icons/icon3.svg';
import Icon4 from '../../assets/Icons/icon4.svg';
import Icon5 from '../../assets/Icons/icon5.svg';
import Icon6 from '../../assets/Icons/icon6.svg';
import Icon7 from '../../assets/Icons/icon7.svg';
import Icon8 from '../../assets/Icons/icon8.svg';
import Icon9 from '../../assets/Icons/icon9.svg';
import Icon10 from '../../assets/Icons/icon10.png';

import ListArr from './TopInfoObj';
import ListReklama from './TopInfoReklamaObj';
import TopInfoRange from './TopInfoRange';

import './TopInfo.scss';

const TopInfo = () => {
    return(
        <div className="top_info">
            <div className="top_info-top1">
                <img className="lupa" src={Lupa} alt=""/>
                <input className="text-input" type="text" placeholder="Введите название обявления или"/>
                <span className="file-input">выберите из списка</span>
            </div>
            <div className="top_info-top2">
                <Link className="link-info"><img src={Icon1} alt=""/></Link>
                <Link className="link-info"><img src={Icon2} alt=""/></Link>
                <Link className="link-info"><img src={Icon3} alt=""/></Link>
                <Link className="link-info"><img src={Icon4} alt=""/></Link>
                <Link className="link-info"><img src={Icon5} alt=""/></Link>
                <Link className="link-info"><img src={Icon6} alt=""/></Link>
                <Link className="link-info"><img src={Icon7} alt=""/></Link>
            </div>
            <div className="top_info-top3">
                <span className="top3-left">Вы сейчас в рубрике</span>
                <div className="top3-right">
                    <Link className="elektronika"><img src={Icon8} alt=""/></Link>
                    <Link className="monitori"><img src={Icon9} alt=""/></Link>
                    <img className="top3-arrow" src={Icon10} alt=""/>
                </div>
            </div>
            <TopInfoRange/>
            <div className="top_info-top4">
                <select name="" id="">
                    <option value="">Состояние</option>
                    <option value="">Состояние</option>
                    <option value="">Состояние</option>
                </select>
                <select name="" id="">
                    <option value="">Тип объявщика</option>
                    <option value="">Состояние</option>
                    <option value="">Состояние</option>
                </select>
                <select name="" id="">
                    <option value="">Ташкент, Мирза улугбекский район</option>
                    <option value="">Состояние</option>
                    <option value="">Состояние</option>
                </select>
                <Link className="top4-link">Применить</Link>
            </div>
            <div className="top_info-arr">
                {
                    ListArr.map((item) => {
                        return(
                            <Link to={item.to} className={`blocks ${item.top}`}>
                                <img src={item.imgLink} alt=""/>
                                <p>{item.text}</p>
                                <span>{item.date}</span>
                                <h5>{item.price}</h5>
                                <h6>{item.top}</h6>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="bottom1_info">
                <h1> <img src={Lupa} alt=""/> СЕЙЧАС ИЩУТ</h1>
                <div className="bottom1_info-bottom">
                    <div className="bottom1_info-bottom-block">
                        <h3>купить Мясная продукция</h3>
                        <h5> <img src={Lupa} alt=""/> 2 часа назад</h5>
                    </div>
                    <div className="bottom1_info-bottom-block">
                        <h3>купить Мясная продукция</h3>
                        <h5> <img src={Lupa} alt=""/> 2 часа назад</h5>
                    </div>
                    <div className="bottom1_info-bottom-block">
                        <h3>купить Мясная продукция</h3>
                        <h5> <img src={Lupa} alt=""/> 2 часа назад</h5>
                    </div>
                    <div className="bottom1_info-bottom-block">
                        <h3>купить Мясная продукция</h3>
                        <h5> <img src={Lupa} alt=""/> 2 часа назад</h5>
                    </div>
                    <div className="bottom1_info-bottom-block">
                        <h3>купить Мясная продукция</h3>
                        <h5> <img src={Lupa} alt=""/> 2 часа назад</h5>
                    </div>
                    <div className="bottom1_info-bottom-block">
                        <h3>купить Мясная продукция</h3>
                        <h5> <img src={Lupa} alt=""/> 2 часа назад</h5>
                    </div>
                    <div className="bottom1_info-bottom-block">
                        <h3>купить Мясная продукция</h3>
                        <h5> <img src={Lupa} alt=""/> 2 часа назад</h5>
                    </div>
                </div>
            </div>
            <div className="bottom2_info">
                <h1>САМОЕ ИНТЕРЕСНОЕ</h1>
                <div className="bottom2_info-reklama2">
                    {
                        ListReklama.map((item) => {
                            return(
                                <Link to={item.to} className="reklama_block2">
                                    <img src={item.imgLink} alt=""/>
                                    <p>{item.text}</p>
                                    <span>{item.date}</span>
                                    <h5>{item.price}</h5>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default TopInfo;