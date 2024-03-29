import { Link } from "react-router-dom";

import List from "./NewFullObj";

import "./NewFull.scss";

const NewFull = () => {
  return (
    <div className="new-full">
      <div className="new_full">
        {List.map((item, key) => {
          return (
            <Link to={item.to} key={key} className="new_full-list">
              <img src={item.imgLink} alt="" />
              <p>{item.text}</p>
              <span>{item.date}</span>
              <h4>{item.price}</h4>
            </Link>
          );
        })}
      </div>
      <span className="full-list">
        Покозать еще
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.8179 4.9691L1.30176 0.268569C1.19064 0.152908 1.01258 0.152908 0.90146 0.268569C0.790415 0.38412 0.790415 0.569553 0.90146 0.685105L5.61889 5.59514C5.72991 5.71072 5.90807 5.71072 6.01909 5.59514L10.7344 0.685105C10.7889 0.628447 10.8182 0.552076 10.8182 0.477969C10.8182 0.403834 10.791 0.327463 10.7344 0.270696C10.6234 0.155144 10.4452 0.155144 10.3342 0.270696L5.8179 4.9691Z"
            fill="black"
            stroke="#4E72CA"
          />
        </svg>
      </span>
    </div>
  );
};

export default NewFull;
