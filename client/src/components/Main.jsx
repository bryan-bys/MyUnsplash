import React from "react";
import SearchForm from "./SearchForm";
import Categories from "./Categories";
import AppBackground from "./AppBackground";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <AppBackground />
        <SearchForm />
        <Categories />
      </div>
    </>
  );
};

export default Main;
