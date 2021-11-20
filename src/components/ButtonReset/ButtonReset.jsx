import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import "./buttonReset.scss";

export const ButtonReset = () => {
  
  const { setSize, setCountry, setPrice, setAvaliable, avaliable, size } =
    useContext(DataContext);

  const reset = () => {
    setCountry(false);
    setSize({ ...size, roomfrom: false, roomto: false, val: "All" });
    setPrice(false);
    setAvaliable({
      ...avaliable,
      from: false,
      to: false,
      statusTo: "",
      statusFrom: "",
    });
  };

  return (
    <button className="btn-reset" onClick={reset}>
      Reset
    </button>
  );
};
