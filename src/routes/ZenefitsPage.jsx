import { useTranslation } from "react-i18next";
import zenefits from "../assets/zenefits.svg";


const ZenefitsPage = () => {
  const {t} = useTranslation();
  
  return (
    <section className="padding-140-80">
      <div className="container">
        <div className="wrapper a-center">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("zenefits.title")}</h3>
              <p className="fz-18">
                {t("zenefits.parag")}
              </p>
            </div>
          </div>
          <div className="wrapper__block">
            <img id="telephoneImg" src={zenefits} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZenefitsPage;
