import React from "react";
import { ButtonReset } from "../ButtonReset/ButtonReset";
import { Country } from "../Country/Country";
import { EndDate } from "../EndDate/EndDate";
import { Price } from "../Price/Price";
import { Size } from "../Size/Size";
import { StartDate } from "../StartDate/StartDate";
import "./navBar.scss";

export const NavBar = () => {
  return (
    <nav>
      <Country />
      <div className="dates-NavBar">
        <StartDate />
        <EndDate />
      </div>

      <Price />
      <Size />
      <ButtonReset />
    </nav>
  );
};
