import React from "react";
import Header from "../../components/section/Header";
import OurProducts from "../../components/section/OurProducts";
import OrganicFood from "../../components/section/OrganicFood";
import SectionMap from "../../components/section/SectionMap";

const Home = () => {
  return (
    <>
      <Header />
      <OrganicFood />
      <OurProducts />
      <SectionMap />
      
    </>
  );
};

export default Home;