import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { NavBar } from "../NavBar/NavBar";
import "./header.scss";

export const Header = () => {
  const { country, avaliable, price,size} = useContext(DataContext);
  const { from, to } = avaliable;
  const{val}=size

  const convertUnixToDate = (from, to) => {
    let dateFrom = [];
    let dateTo = [];
    if (from < to) {
      const dateObjectFrom = new Date(from * 1000);

      const numberFrom = dateObjectFrom.toLocaleString("en-US", {
        day: "numeric",
      });
      dateFrom.push(numberFrom);
      const monthFrom = dateObjectFrom.toLocaleString("en-US", {
        month: "long",
      });
      dateFrom.push(monthFrom);
      const yearFrom = dateObjectFrom.toLocaleString("en-US", {
        year: "numeric",
      });
      dateFrom.push(yearFrom);

      const dateObjectTo = new Date(to * 1000);

      const numberTo = dateObjectTo.toLocaleString("en-US", { day: "numeric" });
      dateTo.push(numberTo);
      const monthTo = dateObjectTo.toLocaleString("en-US", { month: "long" });
      dateTo.push(monthTo);
      const yearTo = dateObjectTo.toLocaleString("en-US", { year: "numeric" });
      dateTo.push(yearTo);
    }

    return { dateFrom, dateTo };
  };
  let x = convertUnixToDate(from, to);
  let priceNatural

  if(price===1){
    priceNatural="Cheap"
  }else if(price===2){
    priceNatural="Confort"
  }else if(price===3){
    priceNatural="Luxurious"
  }else{
    priceNatural="Awesome"
  }
  return (
    <header className="header">
      <img
        className="img-bg"
        src="https://media.cntraveler.com/photos/5cd364efa6a5c49a1a2f0a81/16:9/w_2560,c_limit/Big%20Beach_GettyImages-874980426.jpg"
        alt=""
      />
      <div className="header-info">
        <img src="./images/logo.jpg" alt="" />
        <div className="info-selected">
          {country === false ? "" : <p>Country:{country}</p>}
          {x.dateFrom.length > 0 ? (
            <p>
              {" "}
              From: {x.dateFrom[1]} {x.dateFrom[0]}, {x.dateFrom[2]}{" "}
            </p>
          ) : (
            ""
          )}
          {x.dateTo.length > 0 ? (
            <p>
              {" "}
              To: {x.dateTo[1]} {x.dateTo[0]}, {x.dateTo[2]}{" "}
            </p>
          ) : (
            ""
          )}
          {price===false?"":<p>Price:{priceNatural}</p>}
          {val==="All"?"":<p>Size:{val}</p>}
        </div>
      </div>

      <NavBar />
    </header>
  );
};
