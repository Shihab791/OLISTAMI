import React from "react";
import { Element } from "react-scroll";
import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import Policy from "../components/Policy";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Business from "../components/Business";
import Footer from "../components/Footer";
import CreateAccount from "../components/CreateAccount"

const Home = () => {
  return (
    <>
      <Element name="home">
        <Hero />
      </Element>

      <KeyFeatures />

      <Element name="explore">
        <Events />
      </Element>

      <CreateAccount />
      <Testimonials />

      <Element name="privacy">
        <Policy />
      </Element>

      <HowItWorks />

      <Element name="contact">
        <Contact />
      </Element>

      <Business />
      <Footer />
    </>
  );
};

export default Home;