import { Link } from 'react-router-dom';

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

import './Navbar.scss';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar_top">
                <span><img src={Back} alt=""/></span>
                <div className=""><img src={Avtomobil} alt=""/></div>
                <div className=""><img src={Nedvi} alt=""/></div>
                <Link to="/navbar" className=""><img src={Elektronika} alt=""/></Link>
                <div className=""><img src={Rabota} alt=""/></div>
                <div className=""><img src={Lichniye} alt=""/></div>
                <div className=""><img src={Domisad} alt=""/></div>
                <div className=""><img src={Ctroyka} alt=""/></div>
                <div className=""><img src={Xobbi} alt=""/></div>
                <div className=""><img src={Biznes} alt=""/></div>
                <span><img src={Next} alt=""/></span>
            </div>
        </div>
    )
};

export default Navbar;