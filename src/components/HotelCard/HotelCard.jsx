import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import "./hotelCard.scss";

export const HotelCard = ({
  name,
  photo,
  description,
  rooms,
  city,
  country,
  price,
}) => {
  const { setEffect, effect } = useContext(DataContext);

  let p = "";
  if (price === 1) {
    p = "$";
  } else if (price === 2) {
    p = "$$";
  } else if (price === 3) {
    p = "$$$";
  } else if (price === 4) {
    p = "$$$$";
  }

  const reservation = () => {
    setEffect({
      ...effect,
      status: true,
      title: "BOOKED IT!",
      image: "thum",
      p: "Reservation ready",
    });
  };

  return (
    <section className="hotelCard">
      <img src={photo} alt={city} />
      <div className="hotelCard-description">
        <h2>{name}</h2>
        <p className="hotelCard-information">{description}</p>
        <div className="hotelCard-country">
          <img src={`./images/${country}.jpg`} alt="" />
          <p>
            {city}, {country}
          </p>
        </div>
        <div className="hotelCard-items">
          <img src="./images/room.jpg" alt="" />
          <p>Rooms: {rooms}</p>
          <img src="./images/price.jpg" alt="" />
          <p>Price {p} </p>
        </div>
      </div>
      <button onClick={reservation} className="hotelCard-btn-reservation">
        Reservation
      </button>
    </section>
  );
};
