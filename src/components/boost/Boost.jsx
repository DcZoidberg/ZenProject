import { useTranslation } from "react-i18next";

import phoneTwo from "../../assets/phone_2.png";
import "./_boost.scss";

const Boost = () => {
  const {t} = useTranslation();

  return (
    <section className="boost padding-80">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block">
            <img id="telephoneImg" src={phoneTwo} alt="phone" />
          </div>
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block boost__text">
              <h3 className="fz-36">{t("home.boost.title")}</h3>
              <p className="fz-18">
                {t("home.boost.paragTop")}
              </p>
              <p className="fz-18">
              {t("home.boost.paragBottom")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boost;
