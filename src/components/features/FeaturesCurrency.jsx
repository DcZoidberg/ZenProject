import { useTranslation } from "react-i18next";
import features from "../../assets/features-currency.svg";

const FeaturesCurrency = () => {
  const { t } = useTranslation();
  return (
    <section className="padding-80">
      <div className="container">
        <div className="wrapper a-end">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("features.currency.title")}</h3>
              <p className="fz-18">
                {t("features.currency.parag")}
              </p>
            </div>
          </div>
          <div className="wrapper__block">
            <img id="telephoneImg" src={features} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCurrency;
