import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./container/Header";
import InfoItem from "./container/InfoItem";

import HomePage from "./pages/HomePage";
import Registrasiya from "./pages/Registrasiya";

import * as AuthContext from "./context/Auth";

import ZavershinaRegistrasiya from "./container/ZavershinaRegistrasiya";
import NavbarItem from "./container/NavbarItem/NavbarItem";
import AddNavbar from "./container/AddNavbar/AddNavbar";
import Izmeniya from "./container/Izmeniya";
import Table from './container/Table';
import Chat from './container/Chat';

import "./assets/styles/main.scss";

function App() {
  return (
    <div className="home_page">
      <AuthContext.Provider>
        <Router>
          <Header />
          <Switch>
            <Route path="/registrasiya/free/kod/parol" component={ZavershinaRegistrasiya}/>
            <Route path="/news/infoItem" component={InfoItem} />
            <Route path="/dobavit/izmenit" component={Izmeniya} />
            <Route path="/dobavit" component={AddNavbar} />
            <Route path="/table/message" component={Chat}/>
            <Route path="/table" component={Table} />
            <Route path="/registrasiya" component={Registrasiya}/>
            <Route path="/navbar" component={NavbarItem}/>
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
