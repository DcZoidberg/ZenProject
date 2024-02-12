import { useTranslation } from "react-i18next";
import features from "../../assets/features-security.svg";

const FeaturesSecurity = () => {
  const { t } = useTranslation();
  return (
    <section className="padding-80">
      <div className="container">
        <div className="wrapper a-center">
          <div className="wrapper__block">
            <img id="telephoneImg" src={features} alt="phone" />
          </div>
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block align-self-end">
              <h3 className="fz-36">{t("features.security.title")}</h3>
              <p className="fz-18">{t("features.security.parag")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecurity;
