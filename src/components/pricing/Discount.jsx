import { useTranslation } from "react-i18next";
import discount from "../../assets/discount.svg";

const Discount = () => {
  const { t } = useTranslation();
  return (
    <section className="padding-80">
      <div className="container">
        <div className="wrapper a-center">
          <div className="wrapper__block">
            <img id="telephoneImg" src={discount} alt="phone" />
          </div>
          <div className="wrapper__block block-flex ">
            <div className="wrapper__text-block align-self-end">
              <h3 className="fz-36">{t("pricing.discount.title")}</h3>
              <p className="fz-18">{t("pricing.discount.paragTop")}</p>
              <p className="fz-18">{t("pricing.discount.paragBottom")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
