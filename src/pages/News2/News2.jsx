import { useState } from 'react';
import { Link } from 'react-router-dom';

import './News2.scss';

const News2 = () => {
    const [ active2, setActive2 ] = useState('pros');
    
    return(
        <div className="news2">
            <Link to="/" onClick={() => setActive2('pros')} className={`news-full link ${active2=='pros' ? 'active' : ''}`}>
                <h1>Просмотренные</h1>
            </Link>
            <Link to="/viber" onClick={() => setActive2('viber')} className={`news-good link ${active2=='viber' ? 'active' : ''}`}>
                <h1>Выбор редакции</h1>
            </Link>
            <Link to="/snijenniye" onClick={() => setActive2('snijenniye')} className={`news-good link ${active2=='snijenniye' ? 'active' : ''}`}>
                <h1>Сниженные цены</h1>
            </Link>
        </div>
    )
};

export default News2;