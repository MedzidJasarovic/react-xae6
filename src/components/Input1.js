import React from "react";

const Input1 = (props) => {
  const { broj } = props;
  const { objekat } = props;
  console.log(objekat);

  return (
    <div>
      ovde ce da stoji Ime:{objekat.prezime} ovde ce ime : {objekat.ime[0]} ,
      ona ima {broj} godina
    </div>
  );
};

export default Input1;
