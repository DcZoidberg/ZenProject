import { useTranslation } from "react-i18next";
import "./_cashback.scss";

const Cashback = () => {
  const { t } = useTranslation();
  return (
    <section className="cashback padding-80">
      <div className="container">
        <div className="cashback__wrapper">
          <h3 className="fz-36">{t("home.cashback.title")}</h3>
          <p className="fz-18">
          {t("home.cashback.parag")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cashback;
