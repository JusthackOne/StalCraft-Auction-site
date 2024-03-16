import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import ModalNavigation from "./components/ModalNavigation";
import MainInfo from "./components/MainInfo";

import "./index.css";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleModal = () => {
    if (!isOpenModal) {
      setScrollPosition(window.pageYOffset);
    }
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    if (!isOpenModal) {
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpenModal]);

  return (
    <div
      className={`relative bg-darkBlue text-white font-inter ${
        isOpenModal ? "overflow-hidden h-screen" : ""
      }`}
    >
      <Navbar toggleModal={toggleModal} isOpenModal={isOpenModal} />
      <ModalNavigation isOpen={isOpenModal} />
      <MainInfo />
    </div>
  );
}

export default App;
