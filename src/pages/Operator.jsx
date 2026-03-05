import React from "react";
import Dashboard from "../components/operator/Dashboard";
import Image from "../components/operator/Image";
import Pricing from "../components/operator/Pricing";
import Policy from "../components/operator/Policy";
import FAQ from "../components/operator/FAQ";
import Footer from "../components/operator/Footer";

const Operator = () => {
  return (
    <>
    <Dashboard />
    <Image />
    <Pricing />
    <Policy />
    <FAQ />
    <Footer />
    </>
  );
};

export default Operator;