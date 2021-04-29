import { useRef, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import * as AuthContext from "../../context/Auth";

import FooterTop from "../FooterTop";

import RegistrasiyaImg from "../RegistrasiyaImg";

import "./ZavershinaRegistrasiya.scss";

const ZavershinaRegistrasiya = () => {
  const emailReqres = useRef(null);
  const passwordReqres = useRef(null);

  const history = useHistory();
  const { value, methods } = useContext(AuthContext.AuthContext);

  console.log("token => ", value);

  const AutoRequest = (e) => {
    e.preventDefault();

    axios
      .post("https://reqres.in/api/login", {
        email: emailReqres.current.value,
        password: passwordReqres.current.value,
      })
      .then(function ({ data }) {
        methods.setToken(data.token);
        history.push("/table");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="">
      <div className="zavershina_registrasiya">
        <form onSubmit={AutoRequest} className="left">
          <h1>Ваша регистрация завершена!</h1>
          <p>
            Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в
            виде смс на ваше телефонный номер
          </p>
          <label htmlFor="emaililinomer">
            Введите email или номер телефона
          </label>
          <input
            ref={emailReqres}
            type="email"
            id="emaililinumber"
            placeholder="99891 167 27 23"
          />
          <label htmlFor="parol">Пароль</label>
          <input
            ref={passwordReqres}
            type="password"
            placeholder="***********"
          />
          <button type="submit" className="voyti">
            Войти
          </button>
          <span>или</span>
          <h6>Восстоновить ваше пароль</h6>
        </form>
        <RegistrasiyaImg />
      </div>
      <FooterTop />
    </div>
  );
};

export default ZavershinaRegistrasiya;
