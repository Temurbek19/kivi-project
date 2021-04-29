import { Link } from "react-router-dom";
import { useState } from "react";

import TableObj from "./TableObj";

import Popolnit from "../../assets/images/popolnit.png";
import Nuqtalar from "../../assets/images/nuqtalar.png";

import "./Table.scss";
import FooterTop from "../FooterTop";

const Table = () => {
  const [active, setActive] = useState("link1");
  return (
    <div className="table">
      <div className="table-top1">
        <h5>Здравствуйте Темурбек Абдуллаев</h5>
        <p>
          <h6>Ваш счет: 2 3000 сум</h6>
          <Link className="popolnit">
            <img src={Popolnit} alt="" />
          </Link>
        </p>
      </div>
      <div className="table-top2">
        <Link
          onClick={() => setActive("link1")}
          className={`table-top2-link ${active === "link1" ? "active" : ""}`}
        >
          Объявления
        </Link>
        <Link
          to="/table/message"
          onClick={() => setActive("link2")}
          className={`table-top2-link ${active === "link2" ? "active" : ""}`}
        >
          Сообщения
        </Link>
        <Link
          onClick={() => setActive("link3")}
          className={`table-top2-link ${active === "link3" ? "active" : ""}`}
        >
          Платежи и счёт
        </Link>
        <Link
          onClick={() => setActive("link4")}
          className={`table-top2-link ${active === "link4" ? "active" : ""}`}
        >
          Настройки
        </Link>
        <Link
          onClick={() => setActive("link5")}
          className={`table-top2-link ${active === "link5" ? "active" : ""}`}
        >
          Мой бизнес
        </Link>
      </div>
      <div className="table-block">
        {TableObj.map((item) => {
          return (
            <div className="table-block-item">
              <div className="table-block-item-top">
                <Link className="img1-link">
                  <img src={item.img1} alt="" />
                </Link>
                <p>{item.srochna}</p>
                <h5>
                  <h6>{item.som}</h6>
                  <h6>{item.som2}</h6>
                </h5>
                <h6>
                  <h6>{item.date}</h6>
                  <h6>{item.date2}</h6>
                  <h6>{item.date3}</h6>
                </h6>
                <Link className="img2-link">
                  <img src={item.img2} alt="" />
                </Link>
                <Link className="img3-link">
                  <img src={item.img3} alt="" />
                </Link>
                <Link className="img4-link">
                  <img src={Nuqtalar} alt="" />
                </Link>
              </div>
              <div className="table-block-item-bottom">
                <span>{item.statistika}</span>
                <span>{item.prosmotri}</span>
                <span>{item.tel}</span>
                <span>{item.izbrannom}</span>
              </div>
            </div>
          );
        })}
      </div>
      <FooterTop />
    </div>
  );
};

export default Table;
