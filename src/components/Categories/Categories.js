import React, { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import "./categories.scss";

function Categories({ filterCategory, categories }) {


  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => filterCategory(category)}
            className="categories__button"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
