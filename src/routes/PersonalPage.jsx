import { useTranslation } from "react-i18next";
import image from "../assets/personal.svg";

const PersonalPage = () => {
  const { t } = useTranslation();
  return (
    <section className="padding-140-80">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("personal.title")}</h3>
              <p className="fz-18">
                {t("personal.paragTop")}
              </p>
              <p className="fz-18">
                {t("personal.paragBottom")}
              </p>
            </div>
          </div>
          <div className="wrapper__block">
            <img id="telephoneImg" src={image} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPage;
