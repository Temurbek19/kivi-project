import FooterTop from '../FooterTop';
import Footer from '../Footer';

import ListArr from './InfoItemBackObj';

import InfoBack from '../../assets/images/infoBack.svg';
import InfoNext from '../../assets/images/infoNext.svg';

import './InfoItemBack.scss';

const InfoItemBack = () => {
    return(
        <div className="">
            <div className="info_item_back">
                <img src={InfoNext} className="info_next slider" alt=""/>
                <img src={InfoBack} alt="" className="info_back slider"/>
                <div className="block">
                    {
                        ListArr.map((item) => {
                            return(
                                <div className="block-item">
                                    <img src={item.imgLink} alt=""/>
                                    <p>{item.text}</p>
                                    <span>{item.date}</span>
                                    <h4>{item.price}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <FooterTop />
            <Footer />
        </div>
    )
};

export default InfoItemBack;