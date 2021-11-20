import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="svg">
        <a href="https://github.com/nestorvave" target="_blank" rel="noreferrer" >
          <img src="./svg/github.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/nestorvave/" target="_blank" rel="noreferrer" >
          <img src="./svg/instagram.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/nestorvave/" target="_blank" rel="noreferrer" >
          <img src="./svg/linkedin.svg" alt="" />
        </a>
      </div>
      <p>Made by Nestor Vargas</p>
    </footer>
  );
};
