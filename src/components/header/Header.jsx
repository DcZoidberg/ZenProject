import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ModalGetApp from "../modalGetApp/ModalGetApp";
import Menu from "../menu/Menu";

import mastercard from "./mastercard.svg";
import logo from "./logo.svg";
import "./_header.scss";

const Header = () => {
  const { t } = useTranslation();
  const [isActiveSidemenu, setIsActiveSidemenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSidemenu = () => {
    setIsActiveSidemenu(true);
  };

  const handleCloseSide = () => {
    setIsActiveSidemenu(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="d-flex a-center">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <div className="mastercard">
                <img src={mastercard} alt="logo" />
              </div>
              <Link to={"/personal"} className="header__link">
                {t("header.personal")}
              </Link>
              <Link to="/business" className="header__link">
                {t("header.business")}
              </Link>
            </div>
            <div className="d-flex a-center">
              <ul className="header__list">
                <li>
                  <Link to="/zenefits" className="header__link">
                    {t("header.zenefits")}
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="header__link">
                    {t("header.features")}
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="header__link">
                    {t("header.pricing")}
                  </Link>
                </li>
              </ul>
              <button onClick={handleOpenModal} className="btn header__btn">
                {t("header.getApp")}
              </button>
            </div>
            <div onClick={handleSidemenu} id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <Menu isActive={isActiveSidemenu} handleCloseSide={handleCloseSide} />
      <ModalGetApp open={isModalOpen} onClose={handleModalClose}/>
    </>
  );
};

export default Header;
