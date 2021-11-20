import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import "./msgWarning.scss";

export const MsgWarning = ({ title, image, p }) => {
  const { setEffect, effect } = useContext(DataContext);
  useEffect(() => {
    setTimeout(() => setEffect(false), 5000);
  }, [effect, setEffect]);

  return (
    <section className="section animate__animated animate__flipInY ">
      <p className="title">Your message</p>
      <span className="green"></span>
      <span className="orange"></span>
      <span className="red"></span>
      <div className="warning">
        <div className="msg">
          <h1>{title}</h1>
          <p>{p}</p>
        </div>
        <img src={`./images/${image}.jpg`} alt="" />
      </div>
    </section>
  );
};
