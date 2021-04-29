import Rek1 from '../../assets/images/rek1.png';
import Rek2 from '../../assets/images/rek2.png';
import Rek3 from '../../assets/images/rek3.png';

import './Reklame.scss';

const Reklama = () => {
    return(
        <div className="reklama_block">
                <img src={Rek1} alt="" className="reklama_block-item"/>
                <img src={Rek2} alt="" className="reklama_block-item"/>
                <img src={Rek3} alt="" className="reklama_block-item"/>
                <img src={Rek2} alt="" className="reklama_block-item"/>
                <img src={Rek1} alt="" className="reklama_block-item"/>
                <img src={Rek3} alt="" className="reklama_block-item"/>
        </div>
    )
};

export default Reklama;