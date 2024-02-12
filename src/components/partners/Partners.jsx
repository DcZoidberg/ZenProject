import { useTranslation } from "react-i18next";
import frame1 from "../../assets/partners/Frame-1.png";
import frame2 from "../../assets/partners/Frame-2.png";
import frame3 from "../../assets/partners/Frame-3.png";
import frame4 from "../../assets/partners/Frame-4.png";
import frame5 from "../../assets/partners/Frame-5.png";
import frame6 from "../../assets/partners/Frame-6.png";
import frame7 from "../../assets/partners/Frame-7.png";
import frame8 from "../../assets/partners/Frame-8.png";
import "./_partners.scss";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="partners padding-80">
      <h3 className="fz-36">{t("home.partners.title")}</h3>
      <div className="partners__line">
        <div className="partners__wrapper">
          <img src={frame1} alt="partners" />
          <img src={frame2} alt="partners" />
          <img src={frame3} alt="partners" />
          <img src={frame4} alt="partners" />
          <img src={frame5} alt="partners" />
          <img src={frame6} alt="partners" />
          <img src={frame7} alt="partners" />
          <img src={frame8} alt="partners" />
          <img src={frame1} alt="partners" />
          <img src={frame2} alt="partners" />
          <img src={frame3} alt="partners" />
          <img src={frame4} alt="partners" />
          <img src={frame5} alt="partners" />
          <img src={frame6} alt="partners" />
          <img src={frame7} alt="partners" />
          <img src={frame8} alt="partners" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
