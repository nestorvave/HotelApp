import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import "./size.scss";

export const Size = () => {
  const { size, setSize } = useContext(DataContext);

  const currentSize = (e) => {
    let selectedRooms = e.target.value;

    switch (selectedRooms) {
      case "Small":
        return setSize({ ...size, roomfrom: 1, roomto: 10, val: "Small" });
      case "Medium":
        return setSize({ ...size, roomfrom: 11, roomto: 20, val: "Medium" });
      case "Big":
        return setSize({ ...size, roomfrom: 21, roomto: 100, val: "Big" });

      case "All":
        return setSize({ ...size, roomfrom: false, roomto: false, val: "All" });

      default:
    }
  };

  return (
    <>
      <select className="size" value={size.val} onChange={currentSize}>
        <option value="All"> Size </option>
        <option value="Small">Pequeño</option>
        <option value="Medium">Mediano</option>
        <option value="Big">Grande</option>
      </select>
    </>
  );
};
