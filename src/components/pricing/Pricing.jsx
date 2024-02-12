import { useTranslation } from "react-i18next";
import pricing from "../../assets/pricing.svg";



const Pricing = () => {
  const {t} = useTranslation();
  return (
    <section className="padding-140-80">
      <div className="container">
        <div className="wrapper a-center">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("pricing.bestPrice.title")}</h3>
              <p className="fz-18">
              {t("pricing.bestPrice.paragTop")}
              </p>
              <p className="fz-18">
              {t("pricing.bestPrice.paragBottom")}
              </p>
            </div>
          </div>
          <div className="wrapper__block">
            <img id="telephoneImg" src={pricing} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
