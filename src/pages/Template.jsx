import { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";
import ModalNavigation from "./../components/ModalNavigation";
import Footer from "../components/Footer";

function Template({ children }) {
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
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 50">
        <path
          fill="#090A19"
          fill-opacity="1"
          d="M0,32L1440,64L1440,320L0,320Z"
        ></path>
      </svg>

      <Footer />
    </div>
  );
}

export default Template;
