import { Link } from 'react-router-dom';
import { useState } from 'react';

import Popolnit from '../../assets/images/popolnit.png';
import Avatar from '../../assets/images/avatar.svg';
import Actions from '../../assets/images/Actions.svg';
import WorldImg from '../../assets/images/world.png';
import Skopka from '../../assets/images/skopka.svg';
import ArrowLeft from '../../assets/images/arrowLeft.png';

import ChatList from './ChatObj';

import './Chat.scss';

const Chat = () => {
    const [ active, setActive ] = useState('link1');
    const [ aciveChat, setActiveChat ] = useState('link1');
    return(
        <div className="chat">
            <div className="chat-top1">
                <h5>Здравствуйте Темурбек Абдуллаев</h5>
                <p>
                    <h6>Ваш счет: 2 3000 сум</h6>
                    <Link className="popolnit">
                        <img src={Popolnit} alt=""/>
                    </Link>
                    
                </p>
            </div>
            <div className="chat-top2">
                <Link onClick={() => setActive('link1')} className={`chat-top2-link ${active === 'link1' ? 'active' : ''}`}>Объявления</Link>
                <Link onClick={() => setActive('link2')} className={`chat-top2-link ${active === 'link2' ? 'active' : ''}`}>Сообщения</Link>
                <Link onClick={() => setActive('link3')} className={`chat-top2-link ${active === 'link3' ? 'active' : ''}`}>Платежи и счёт</Link>
                <Link onClick={() => setActive('link4')} className={`chat-top2-link ${active === 'link4' ? 'active' : ''}`}>Настройки</Link>
                <Link onClick={() => setActive('link5')} className={`chat-top2-link ${active === 'link5' ? 'active' : ''}`}>Мой бизнес</Link>
            </div>
            <div className="chat-block">
                <div className="chat-block-left">
                    {
                        ChatList.map((item) => {
                            return(
                                <div onClick={() => setActiveChat(`${item.click}`)} className={`chat-block-left-item ${aciveChat === `${item.click}` ? 'activePage' : ''}`}>
                                    <div className="item-left"><img src={item.imgLink} alt=""/></div>
                                    <div className="item-main">
                                        <h5>{item.name}</h5>
                                        <h6>{item.text}</h6>
                                    </div>
                                    <div className="item-right">
                                        <img src={item.skopka} alt=""/>
                                        <h4>{item.time}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="chat-block-right">
                    <div className="item-top">
                        <div className="item-top-left">
                            <img src={Avatar} alt=""/>
                            <span>contact@jakubwp.com</span>
                        </div>
                        <div className="item-top-right">
                            <img src={Actions} alt=""/>
                        </div>
                    </div>
                    <h4 className="today">Today, 6:02 AM</h4>
                    <div className="world-img">
                        <img src={WorldImg} alt=""/>
                        <img src={WorldImg} alt=""/>
                        <img src={WorldImg} alt=""/>
                    </div>
                    <div className="top3-right">
                        <span>contact@jakubwp.com</span>
                        <img src={Avatar} alt=""/>
                    </div>
                    <div className="bottom-chat">
                        <input type="text" placeholder="Hello John, I have no idea what is this message about"/>
                    </div>
                    <div className="chat-bottom">
                        <img className="skopka" src={Skopka} alt=""/>
                        <Link className="bottom-link">
                            <span>Отправить</span>
                            <img src={ArrowLeft} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat;