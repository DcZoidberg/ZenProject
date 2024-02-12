import features from "../../assets/features.svg";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  return (
    <section className="padding-140-80">
      <div className="container">
        <div className="wrapper a-center">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("features.easy.title")}</h3>
              <p className="fz-18">
                {t("features.easy.parag")}
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

export default Features;
