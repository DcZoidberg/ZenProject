import { useTranslation } from "react-i18next";
import phoneImg from "../../assets/phone_4.png";
import "./_no-fees.scss";


const NoFees = () => {
  const { t } = useTranslation();
  
  return (
    <section className="no-fees padding-80">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block">
            <img id="telephoneImg" src={phoneImg} alt="phone" />
          </div>
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block no-fees__block">
              <h3 className="fz-36">{t("home.noFees.title")}</h3>
              <p className="fz-18">
                {t("home.noFees.paragTop")}
              </p>
              <p className="fz-18">
                {t("home.noFees.paragBottom")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoFees;
