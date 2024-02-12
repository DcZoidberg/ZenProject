import { useTranslation } from "react-i18next";
import "./_price-block.scss";

const PriceBlock = () => {
  const { t } = useTranslation();
  return (
    <section className="price padding-80">
      <div className="container">
        <h1 className="fz-36 tac">{t("pricing.premiumPlans.title")}</h1>
        <div className="price-wrapper">
          <div className="price-block">
            <h3>{t("pricing.premiumPlans.free")}</h3>
            <p>
              <sup>$</sup>
              <span>0</span>
              <sub>/ {t("pricing.premiumPlans.month")}</sub>
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li className="price-li-unavailable">
                <strike>Lorem ipsum dolor sit amet</strike>
              </li>
              <li className="price-li-unavailable">
                <strike>Lorem ipsum dolor sit amet</strike>
              </li>
              <li className="price-li-unavailable">
                <strike>Lorem ipsum dolor sit amet</strike>
              </li>
            </ul>
            <button className="btn">{t("pricing.premiumPlans.getPlan")}</button>
          </div>
          <div className="price-block">
            <h3>{t("pricing.premiumPlans.basic")}</h3>
            <p>
              <sup>$</sup>
              <span>5</span>
              <sub>/ {t("pricing.premiumPlans.month")}</sub>
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li className="price-li-unavailable">
                <strike>Lorem ipsum dolor sit amet</strike>
              </li>
              <li className="price-li-unavailable">
                <strike>Lorem ipsum dolor sit amet</strike>
              </li>
            </ul>
            <button className="btn">{t("pricing.premiumPlans.getPlan")}</button>
          </div>
          <div className="price-block">
            <h3>{t("pricing.premiumPlans.business")}</h3>
            <p>
              <sup>$</sup>
              <span>10</span>
              <sub>/ {t("pricing.premiumPlans.month")}</sub>
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <button className="btn">{t("pricing.premiumPlans.getPlan")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBlock;
