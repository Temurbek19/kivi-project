import { Link } from 'react-router-dom';

import FreeArrow from '../../assets/images/freeArrow.png';
import FooterTop from '../FooterTop';
import RegistrasiyaImg from '../RegistrasiyaImg';

import './FreeRegistrasiya.scss';

const FreeRegistrsiya = () => {
    return(
        <div className="">
            <div className="free_registrasiya">
            <div className="left">
                <h1>Бесплатная регистрация</h1>
                <div className="free-email">
                    <label htmlFor="email">Введите ваш email</label>
                    <input type="email" id="email" placeholder="example@kivi.uz"/>
                </div>
                <div className="free-number">
                    <label htmlFor="number">Введите ваш номер телефона</label>
                    <input type="number" id="number" className="first-input" placeholder="998"/>
                    <input type="number" className="secont-input" placeholder="97 772 13 44"/>
                    <h4>Нажимая на кнопку «Получить доступ», я даю согласие на обработку персональных данных и соглашаюсь c условиями <span>договора-оферты и политикой конфиденциальности</span></h4>
                    <div className="free-button">
                        <Link to="/registrasiya" className="h4">
                            <img src={FreeArrow} alt=""/>
                        </Link>
                        <Link to="/registrasiya/free/kod" className="span">Получить доступ</Link>
                    </div>
                    <h4 className="free-ili">или</h4>
                    <Link className="h4-link" to="/registrasiya/free/kod/parol">Войдите в систему, если у вас уже есть аккаунт kivi.uz</Link>
                </div>
            </div>
            <RegistrasiyaImg/>
        </div>
        <FooterTop/>
        </div>
    )
};

export default FreeRegistrsiya;