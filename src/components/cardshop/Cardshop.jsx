import { useTranslation } from "react-i18next";
import cardImg from "../../assets/cards.png";
import applepay from "../../assets/applepay.svg";
import googlepay from "../../assets/googlepay.svg";
import "./_cardshop.scss";


const Cardshop = () => {
  const { t } = useTranslation();

  return (
    <section className="cardshop padding-80">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("home.cardshop.title")}</h3>
              <p className="fz-18">
                {t("home.cardshop.parag")}
              </p>
            </div>
            <div className="cardshop__btn">
              <a href="#">
                <img src={applepay} alt="applepay" />
              </a>
              <a href="#">
                <img src={googlepay} alt="googlepay" />
              </a>
            </div>
          </div>
          <div className="wrapper__block">
            <img id="telephoneImg" src={cardImg} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardshop;
