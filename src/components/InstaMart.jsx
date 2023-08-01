import { useState } from "react";
import AboutInsta from "./AboutInsta";
import ContactInsta from "./ContactInsta";
import CareerInsta from "./CareerInsta";

const InstaMart = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    contact: false,
    career: false,
  });

  return (
    <div>
      <AboutInsta isVisible={isVisible} setIsVisible={setIsVisible} />
      <ContactInsta isVisible={isVisible} setIsvisible={setIsVisible} />
      <CareerInsta isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default InstaMart;
