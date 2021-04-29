import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/Auth/context";

import Logo from "../../assets/images/logo.svg";
import UserImg from '../../assets/images/user.jpg';

import "./Header.scss";

const Header = () => {
  const { value, methods } = useContext(AuthContext);
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <Link to="/" className="header-top-left-link">
            <img src={Logo} alt="" className="header-top-left-link-logo" />
            <span>Продай, найди, купи все что пожелаешь…</span>
          </Link>
        </div>
        <div className="header-top-main">
          <span className="header-text">Объявления</span>
          <span className="header-text">Магазины</span>
          <span className="header-text">Для бизнеса</span>
          <span className="header-text">Помощь</span>
        </div>
        <div className="header-top-right">
          <div className="header-top-right-left">
            <span>Рус | </span>
            <span> O’z</span>
          </div>
          <div className="header-top-right-right">
            {value.token ? (
              <div className="header-user" onClick={() => methods.setToken("")}>
                <span>Abdullayev</span>
                <img className="user-image" src={UserImg} alt=""/>
              </div>
            ) : (
              <>
                <Link to="/registrasiya/free/kod/parol" className="span">
                  Вход
                </Link>
                <h6 className="span">|</h6>
                <Link className="span span-two" to="/registrasiya/">
                  Регистрация
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">
          <select>
            <option value="">Любая категория</option>
            <option value="">Любая категория</option>
            <option value="">Любая категория</option>
          </select>
          <input type="text" placeholder="Что будем искать ?" />
          <select>
            <option value="">По всей Узбекистану</option>
            <option value="">По всей Узбекистану</option>
            <option value="">По всей Узбекистану</option>
            <option value="">По всей Узбекистану</option>
          </select>
          <span>Найти</span>
        </div>
        <div className="header-bottom-right">
          <Link
            to={value.token ? "/dobavit" : "/registrasiya/free/kod/parol"}
            className="dobavit"
          >
            Добавить обьявления
          </Link>

          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
