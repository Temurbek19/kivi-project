import { Link } from 'react-router-dom';
 
import Logo2 from '../../assets/images/logo2.svg';
import Apple from '../../assets/images/apple.svg';
import googlePlay from '../../assets/images/googlePlay.svg'

import '../Footer/Footer.scss';

const FooterTop = () => {
    return(
        <div className="footer-top">
                <Link to="/" className="footer-top-left">
                    <img src={Logo2} alt=""/>
                    <p>Продай, найди, купи все что ты пожелаешь</p>
                </Link>
                <div className="footer-top-main">
                Веб сайт бесплатных обьявлений | на базе 
                имеется 234 944 999 шт обяления
                </div>
                <div className="footer-top-right">
                    <Link>
                        <img src={Apple} alt=""/>
                        <div className="div">
                            <h5>Available on the</h5>
                            <h3>Apple Store</h3>
                        </div>
                    </Link>
                    <Link>
                        <img src={googlePlay} alt=""/>
                        <div className="div">
                            <h5>Android App on</h5>
                            <h3>GOOGLE PLAY</h3>
                        </div>
                    </Link>
                </div>
            </div>
    )
};

export default FooterTop;