import React from "react";
import { Header } from "./components/Header/Header";
import { Hotels } from "./components/Hotels/Hotels";
import { DataProvider } from "./context/DataProvider";

export const App = () => {
  return (
    <div>
      <DataProvider  >
        <Header />
        <Hotels />
      </DataProvider>
    </div>
  );
};
