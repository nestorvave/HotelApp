import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import "./country.scss";

export const Country = () => {
  const { setCountry, country } = useContext(DataContext);

  const currentCountry = (e) => {
    let selectedCountry = e.target.value;

    switch (selectedCountry) {
      case "Argentina":
        return setCountry(selectedCountry);
      case "Uruguay":
        return setCountry(selectedCountry);
      case "Brasil":
        return setCountry(selectedCountry);
      case "Chile":
        return setCountry(selectedCountry);
      case "All":
        return setCountry(false);

      default:
        break;
    }
  };

  return (
    <select className="country" value={country} onChange={currentCountry}>
      <option value="All"> Countries </option>
      <option value="Argentina">Argentina</option>
      <option value="Uruguay">Uruguay</option>
      <option value="Brasil">Brasil</option>
      <option value="Chile">Chile</option>
    </select>
  );
};
