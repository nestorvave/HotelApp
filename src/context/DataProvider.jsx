import React, { createContext, useState } from "react";
import hotelsData from "../assets/helpers/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [hotel, setHotel] = useState(hotelsData);
  const [country, setCountry] = useState(false);
  const [price, setPrice] = useState(false);
  const [size, setSize] = useState({
    roomfrom: false,
    roomto: false,
    val: "All",
  });

  const [avaliable, setAvaliable] = useState({
    from: false,
    to: false,
    statusTo: "",
    statusFrom: "",
  });
  const [effect, setEffect] = useState({
    status:false,
    title:null,
    p:null,
    image:null
  });

  return (
    <DataContext.Provider
      value={{
        effect,
        setEffect,
        hotel,
        setHotel,
        country,
        setCountry,
        price,
        setPrice,
        size,
        setSize,
        avaliable,
        setAvaliable,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
