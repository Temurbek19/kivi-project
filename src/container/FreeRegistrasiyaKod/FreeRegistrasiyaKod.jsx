import { Link } from 'react-router-dom';
import FooterTop from '../FooterTop';

import RegistrasiyaImg from '../RegistrasiyaImg';

import './FreeRegistrasiyaKod.scss';

const FreeregistrasiyaKod = () => {
    return(
        <div className="">
            <div className="free_registrasiya_kod">
            <div className="left">
                <h1>Бесплатная регистрация</h1>
                <p>Код отправлен в виде смс на указанный номер телефона</p>
                <div className="free-kod">
                    <label htmlFor="kod">Введите ваш номер телефона</label>
                    <div className="">
                        <input type="number" name="" id="kod" placeholder="998 97 772 13 44"/>
                        <span>90s</span>
                    </div>
                </div>
                <input type="text" className="input-free" placeholder="Введите код подтверждения"/>
                <Link to="/registrasiya/free/kod/parol" className="dalee">Далее</Link>
                <span className="span">или</span>
                <Link className="h5-link" to="/registrasiya/free/kod/parol">Войдите в систему, если у вас уже есть аккаунт kivi.uz</Link>
            </div>
            <RegistrasiyaImg/>
        </div>
        <FooterTop/>
        </div>
    )
};

export default FreeregistrasiyaKod;