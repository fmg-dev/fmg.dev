import React, { useState } from "react";
import About from "../../components/About/About";
import Navbar from "../../components/Navbar/Navbar";
import Works from "../../components/Works/Works";
import "./home.scss";
import data from "./data";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

function Home() {
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [work, setWork] = useState(data);
  const [categories, setCategory] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setWork(data);
      return;
    }
    const newCategory = data.filter((item) => item.category === category);
    setWork(newCategory);
  };

  return (
    <div className="home">
      <Navbar />
      <About />
      <Categories filterCategory={filterCategory} categories={categories} />
      <Works work={work} />
      {/* <Contact/> */}
    </div>
  );
}

export default Home;
