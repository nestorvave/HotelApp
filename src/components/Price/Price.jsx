import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import './price.scss'

export const Price = () => {
  const {price, setPrice } = useContext(DataContext);
  const currentPrice = (e) => {
    let selectedPrice;
    
    e.target.value === "All"
      ? (selectedPrice = e.target.value)
      : (selectedPrice = parseInt(e.target.value));

    switch (selectedPrice) {
      case 1:
        return setPrice(selectedPrice);
      case 2:
        return setPrice(selectedPrice);
      case 3:
        return setPrice(selectedPrice);
      case 4:
        return setPrice(selectedPrice);
      case "All":
        return setPrice(false);

      default:
        break;
    }
  };

  return (
    <>
      <select className="price" value={price} onChange={currentPrice}>
        <option value="All"> Prices </option>
        <option value={1}>$</option>
        <option value={2}>$ $</option>
        <option value={3}>$ $ $</option>
        <option value={4}>$ $ $ $</option>
      </select>
    </>
  );
};
