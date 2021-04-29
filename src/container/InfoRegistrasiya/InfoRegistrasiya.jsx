import { Link } from 'react-router-dom';
import FooterTop from '../FooterTop';

import RegistrasiyaImg from '../RegistrasiyaImg';

import './InfoRegistrasiya.scss';

const InfoRegistrasiya = () => {
    return(
        <div className="">
            <div className="info_registrasiya">
            <div className="info_registrasiya-left">
                <h1>Бесплатная регистрация</h1>
                <input type="text" placeholder="Темиров Зухриддин"/>
                <Link className="button" to="/registrasiya/free">Далее</Link>
                <span>или</span>
                <Link className="h5-link" to="/registrasiya/free/kod/parol">Войдите в систему, если у вас уже есть аккаунт kivi.uz</Link>
            </div>
            <RegistrasiyaImg/>
        </div>
        <FooterTop/>
        </div>
    )
};

export default InfoRegistrasiya;