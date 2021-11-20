import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

export const EndDate = () => {
  const { avaliable, setAvaliable } = useContext(DataContext);

  const getDate = (e) => {

    let date;
    date = new Date(e.target.value).getTime() / 1000 + 86400;

    if (Number.isNaN(date)) {

      setAvaliable({ ...avaliable, to: false, statusTo: "" });
    } else {
      setAvaliable({ ...avaliable, to: date, statusTo: e.target.value });
      
    }
  };


  return (
    <>
      <input type="date" value={avaliable.statusTo} onChange={getDate} />
    </>
  );
};
