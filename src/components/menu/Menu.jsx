import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ModalGetApp from "../modalGetApp/ModalGetApp";

import "./_menu.scss";

const MENU_LINKS = [
  {
    link: "/personal",
    title: "personal",
  },
  {
    link: "/business",
    title: "business",
  },
  {
    link: "/zenefits",
    title: "zenefits",
  },
  {
    link: "/features",
    title: "features",
  },
  {
    link: "/pricing",
    title: "pricing",
  },
];

const Menu = ({ isActive, handleCloseSide }) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    handleCloseSide();
  };

  return (
    <>
      <div className={`menu ${isActive ? "active" : ""}`}>
        <ul className="menu__list">
          <div onClick={handleCloseSide} id="close">
            &times;
          </div>
          {MENU_LINKS.map((link) => (
            <li key={link.link}>
              <Link
                to={link.link}
                onClick={handleCloseSide}
                className="menu__link"
              >
                {t(`header.${link.title}`)}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={handleModalOpen} className="btn menu__btn">
              {t("header.getApp")}
            </button>
          </li>
        </ul>
        <div className="menu__overlay" onClick={handleCloseSide}></div>
      </div>
      <ModalGetApp open={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

export default Menu;
