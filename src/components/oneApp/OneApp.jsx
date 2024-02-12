import { useTranslation } from "react-i18next";
import phoneImg from "../../assets/phone_5.png";



const OneApp = () => {
  const { t } = useTranslation();
  
  return (
    <section className="one-account padding-80">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("home.oneApp.title")}</h3>
              <p className="fz-18">
                {t("home.oneApp.paragTop")}
              </p>
              <p className="fz-18">
                {t("home.oneApp.paragBottom")}
              </p>
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

export default OneApp;
