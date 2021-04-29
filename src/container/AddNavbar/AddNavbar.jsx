import { useState } from "react";

import Back from "../../assets/images/back.svg";
import Next from "../../assets/images/next.svg";
import Avtomobil from "../../assets/images/avtomobil.svg";
import Biznes from "../../assets/images/biznes.svg";
import Ctroyka from "../../assets/images/ctroyka.svg";
import Domisad from "../../assets/images/domisad.svg";
import Elektronika from "../../assets/images/elektronika.svg";
import Lichniye from "../../assets/images/lichniye.svg";
import Nedvi from "../../assets/images/nedvi.svg";
import Rabota from "../../assets/images/rabota.svg";
import Xobbi from "../../assets/images/xobbi.svg";
import ArrowNext from "../../assets/images/arrowNext.svg";

import "./AddNavbar.scss";
import { Link } from "react-router-dom";

const AddNavbar = () => {
  const [rubrika, setRubrik] = useState("");
  const [rubrika2, setRubrik2] = useState("");
  const [activeItem, setActiveItem] = useState("");
  return (
    <div className="add_navbar">
      <div className="add_navbar_top">
        <h1>Добавить обьявления бесплатно</h1>
        <h5>Для добавления вашего обьявлении вы должны выбрать категорию</h5>
      </div>
      <div className="navbar_top">
        <span>
          <img src={Back} alt="" />
        </span>
        <div className="">
          <img src={Avtomobil} alt="" />
        </div>
        <div onClick={() => setActiveItem("nedvi")} className="">
          <img src={Nedvi} alt="" />
        </div>
        <div className="">
          <img src={Elektronika} alt="" />
        </div>
        <div className="">
          <img src={Rabota} alt="" />
        </div>
        <div className="">
          <img src={Lichniye} alt="" />
        </div>
        <div className="">
          <img src={Domisad} alt="" />
        </div>
        <div className="">
          <img src={Ctroyka} alt="" />
        </div>
        <div className="">
          <img src={Xobbi} alt="" />
        </div>
        <div className="">
          <img src={Biznes} alt="" />
        </div>
        <span>
          <img src={Next} alt="" />
        </span>
      </div>
      <div
        className={`add_navbar_block nedvi ${
          activeItem === "nedvi" ? "opened" : ""
        }`}
      >
        <div className="add_navbar_block_item">
          <h2>Рубрика</h2>
          <div className="rubrika">
            <img src={ArrowNext} className="arrow-next" alt="" />
            <div className="rubrika-title">
              <span>Детский мир</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div
              onClick={() => setRubrik("doma")}
              className={`rubrika-title ${rubrika === "doma" ? "active" : ""}`}
            >
              <span>Недвижимость</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Транспорт</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Работа</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Животные</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Дом и сад</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Электроника</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Бизнес и услуги</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Мода и стиль</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Хобби, отдых и спорт</span>
              <img src={ArrowNext} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`add_navbar_block_item nedvijimost ${
            rubrika === "doma" ? "doma" : ""
          }`}
        >
          <h2>Недвижимость</h2>
          <div className="rubrika">
            <img src={ArrowNext} className="arrow-next" alt="" />
            <div className="rubrika-title">
              <span>Квартиры</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div
              onClick={() => setRubrik2("doma")}
              className={`rubrika-title ${rubrika2 === "doma" ? "active" : ""}`}
            >
              <span>Дома</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Земля</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Гаражи / стоянки</span>
              <img src={ArrowNext} alt="" />
            </div>
            <div className="rubrika-title">
              <span>Коммерческие помещения</span>
              <img src={ArrowNext} alt="" />
            </div>
          </div>
        </div>
        <div
          className={`add_navbar_block_item arenda ${
            rubrika2 === "doma" ? "doma" : ""
          }`}
        >
          <h2>Дома</h2>
          <div className="rubrika rubrika3">
            <Link to="/dobavit/izmenit" className="rubrika-title">
              <span>Аренда долгосрочная</span>
              <img src={ArrowNext} alt="" />
            </Link>
            <Link to="/dobavit/izmenit" className="rubrika-title">
              <span>Аренда посуточно</span>
              <img src={ArrowNext} alt="" />
            </Link>
            <Link to="/dobavit/izmenit" className="rubrika-title">
              <span>Продажа</span>
              <img src={ArrowNext} alt="" />
            </Link>
            <Link to="/dobavit/izmenit" className="rubrika-title">
              <span>Обмен</span>
              <img src={ArrowNext} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNavbar;
