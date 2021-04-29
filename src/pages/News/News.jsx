import { Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./News.scss";
import NewFull from "../../container/NewFull";
import NewGood from "../../container/NewGood";

const News = () => {
  const [active, setActive] = useState("full");

  return (
    <div className="news">
      <Link
        to="/"
        onClick={() => setActive("full")}
        className={`news-full link ${active == "full" ? "active" : ""}`}
      >
        <h1>Новые объявления</h1>
      </Link>
      <Link
        to="/newGood"
        onClick={() => setActive("good")}
        className={`news-good link ${active == "good" ? "active" : ""}`}
      >
        <h1>Лучщие предложение</h1>
      </Link>
      <div className="content">
        <Switch>
          <Route path="/">
            <NewFull />
          </Route>
          <Route path="/newGood">
            <NewGood />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default News;
