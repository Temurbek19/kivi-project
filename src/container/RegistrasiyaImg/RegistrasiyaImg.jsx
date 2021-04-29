import ImageRegistrasiya from '../../assets/images/imageRegistrasiya.png';
import ImageKivi from '../../assets/images/kiviImage.png';

import './RegistrasiyaImg.scss';

const RegistrasiyaImg = () => {
    return (
        <div className="info_registrasiya-right">
                <img src={ImageRegistrasiya} className="img-fon" alt=""/>
                <img src={ImageKivi} alt="" className="img-kivi"/>
        </div>
    )
};

export default RegistrasiyaImg;