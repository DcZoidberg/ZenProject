import { useTranslation } from "react-i18next";
import phoneImg from "../../assets/phone_1.png";
import overtitle from "./overtitle.svg";
import appleBtn from "../../assets/applebtn.svg";
import googleBtn from "../../assets/googlebtn.svg";
import "./_promo.scss";

const Promo = () => {
  const { t } = useTranslation();

  return (
    <section id="promo" className="promo">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block block-flex">
            <div className="overtitle">
              <img src={overtitle} alt="play btn" />
              <h2 className="fz-18">{t("home.promo.overtitle")}</h2>
            </div>
            <h1 className="main-title">
              {t("home.promo.title.top")}{" "}
              <span>{t("home.promo.title.bottom")}</span>
            </h1>
            <div className="subtitle">{t("home.promo.subtitle")}</div>
            <div className="btn-app-download">
              <a
                target="_blank"
                href="https://apps.apple.com/us/genre/ios-games/id6014"
              >
                <img src={appleBtn} alt="applebtn" />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/games?hl=ru&gl=US&pli=1"
              >
                <img src={googleBtn} alt="google" />
              </a>
            </div>
          </div>
          <div className="wrapper__block">
            <img id="telephoneImg" src={phoneImg} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
