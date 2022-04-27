import React from "react";
import "./kartica.css";

const Kartica = (props) => {
  let klasa = "";
  const { text, broj } = props;
  if (broj % 2 !== 0) {
    klasa = "kartica";
  } else {
    klasa = "kartica2";
  }

  return (
    <div className={klasa}>
      {" "}
      {text} {broj}
    </div>
  );
};

export default Kartica;
