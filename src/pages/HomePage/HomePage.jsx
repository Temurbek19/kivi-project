import { Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./Home.scss";
import NewFull from "../../container/NewFull";
import NewGood from "../../container/NewGood";
import Reklama from "../../container/Reklama/Reklama";
import NewPros from "../../container/NewPros/NewPros";
import NewViber from "../../container/NewViber/NewViber";
import NewSnijenniye from "../../container/NewSnijenniye/NewSnijinniye";
import Navbar from "../../container/Navbar";
import FooterTop from "../../container/FooterTop";
import Footer from "../../container/Footer";

const HomePage = () => {
  const [active, setActive] = useState("full");
  const [active2, setActive2] = useState("pros");

  return (
    <div className="home_page">
      <Navbar />
      <div className="news">
        <Link
          to="/"
          onClick={() => setActive("full")}
          className={`news-full link ${active === "full" ? "active" : ""}`}
        >
          <h1>Новые объявления</h1>
        </Link>
        <Link
          to="/newGood"
          onClick={() => setActive("good")}
          className={`news-good link ${active === "good" ? "active" : ""}`}
        >
          <h1>Лучщие предложение</h1>
        </Link>
      </div>
      <div className="content_inner">
        <Switch>
          <Route path="/newGood">
            <NewGood />
          </Route>
          <Route path="/">
            <NewFull />
          </Route>
        </Switch>
      </div>
      <Reklama />

      <div className="news2">
        <Link
          to="/"
          onClick={() => setActive2("pros")}
          className={`news-full link ${active2 === "pros" ? "active" : ""}`}
        >
          <h1>Просмотренные</h1>
        </Link>
        <Link
          to="/viber"
          onClick={() => setActive2("viber")}
          className={`news-good link ${active2 === "viber" ? "active" : ""}`}
        >
          <h1>Выбор редакции</h1>
        </Link>
        <Link
          to="/snijenniye"
          onClick={() => setActive2("snijenniye")}
          className={`news-good link ${
            active2 === "snijenniye" ? "active" : ""
          }`}
        >
          <h1>Сниженные цены</h1>
        </Link>
      </div>
      <div className="content_inner">
        <Switch>
          <Route path="/viber">
            <NewViber />
          </Route>
          <Route path="/snijenniye">
            <NewSnijenniye />
          </Route>
          <Route path="/">
            <NewPros />
          </Route>
        </Switch>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
};

export default HomePage;
