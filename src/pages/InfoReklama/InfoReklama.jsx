import { useState } from "react";
import { Link } from "react-router-dom";

import "./InfoReklama.scss";

const InfoReklama = () => {
  const [activeInfo, setActiveInfo] = useState("info1");
  return (
    <div className="info_reklama">
      <Link
        onClick={() => setActiveInfo("info1")}
        className={`link1 link ${activeInfo === "info1" ? "active" : ""}`}
        to="/news/infoItem"
      >
        Похожие объявления
      </Link>
      <Link
        onClick={() => setActiveInfo("info2")}
        className={`link2 link ${activeInfo === "info2" ? "active" : ""}`}
        to="/avtore"
      >
        Обьявление автора
      </Link>
    </div>
  );
};

export default InfoReklama;
