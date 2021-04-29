import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import InfoRegistrasiya from '../../container/InfoRegistrasiya';
import FreeRegistrasiya from '../../container/FreeRegistrasiya';
import FreeregistrasiyaKod from '../../container/FreeRegistrasiyaKod';
import ZavershinaRegistrasiya from '../../container/ZavershinaRegistrasiya';

import './Registrasiya.scss';

const Registrasiya = () => {
    return(
        <div className="registrasiya">
            <Router>
                <Switch>
                    <Route exact path="/registrasiya" component={InfoRegistrasiya}/>
                    <Route exact path="/registrasiya/free" component={FreeRegistrasiya}/>
                    <Route exact path="/registrasiya/free/kod" component={FreeregistrasiyaKod}/>
                    <Route exact path="/registrasiya/free/kod/parol" component={ZavershinaRegistrasiya}/>
                </Switch>
            </Router>
        </div>
    )
};

export default Registrasiya;