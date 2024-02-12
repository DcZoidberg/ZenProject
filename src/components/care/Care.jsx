import { useTranslation } from "react-i18next";

import phoneImg from "../../assets/phone_3.png";
import "./_care.scss";

const Care = () => {
  const {t} = useTranslation();

  return (
    <section className="care padding-80">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block">
              <h3 className="fz-36">{t("home.zenCare.title")}</h3>
              <p className="fz-18">
              {t("home.zenCare.paragTop")}
              </p>
              <p className="fz-18">
              {t("home.zenCare.paragMiddle")}
              </p>
              <p className="fz-18">
              {t("home.zenCare.paragBottom")}
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

export default Care;
