import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import copyrightLogo from "./copyrightLogo.svg";
import copyrightPci from "./copyrightPci.svg";
import "./_footer.scss";



const Footer = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <footer className="footer padding-80">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer-col">
            <div className="footer-col__title">{t("footer.learn.title")}</div>
            <a href="#" className="footer-col__link">
              {t("footer.learn.helpCenter")}
            </a>
            <a href="#" className="footer-col__link">
              {t("footer.learn.joinTeam")}
            </a>
            <a href="#" className="footer-col__link">
              {t("footer.learn.privacyPolicy")}
            </a>
            <a href="#" className="footer-col__link">
              {t("footer.learn.cookies")}
            </a>
            <a href="#" className="footer-col__link">
              {t("footer.learn.terms")}
            </a>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">{t("footer.discover.title")}</div>
            <a href="#" className="footer-col__link">
            {t("footer.discover.forDevelopers")}
            </a>
            <a href="#" className="footer-col__link">
            {t("footer.discover.apple")}
            </a>
            <a href="#" className="footer-col__link">
            {t("footer.discover.google")}
            </a>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">{t("footer.offer.title")}</div>
            <Link to="/business" className="footer-col__link">
            {t("footer.offer.business")}
            </Link>
            <Link to="/personal" className="footer-col__link">
            {t("footer.offer.personal")}
            </Link>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">{t("footer.language.title")}</div>
            <p onClick={() => i18n.changeLanguage("en")} className="footer-col__link">
            {t("footer.language.en")}
            </p>
            <p onClick={() => i18n.changeLanguage("pl")} className="footer-col__link">
            {t("footer.language.pl")}
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">{t("footer.followUs")}</div>
            <a href="#" className="footer-col__link">
              <svg
                className="footer-col__link__svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1.90625"
                  width="38"
                  height="38"
                  stroke="black"
                  strokeWidth="2"
                />
                <g clipPath="url(#clip0_1_278)">
                  <path
                    d="M15.0299 28.7812H11.2973V18.266H15.0299V28.7812ZM13.1616 16.8316C11.9683 16.8316 11 15.9668 11 14.9227C11 13.8785 11.9683 13.0312 13.1616 13.0312C14.3549 13.0312 15.3232 13.8785 15.3232 14.9227C15.3232 15.9668 14.3549 16.8316 13.1616 16.8316ZM29 28.7812H25.2754V23.6625C25.2754 22.4426 25.2473 20.8781 23.3348 20.8781C21.3942 20.8781 21.0969 22.2035 21.0969 23.5746V28.7812H17.3683V18.266H20.9482V19.7004H21.0004C21.4986 18.8742 22.7161 18.0023 24.5321 18.0023C28.3089 18.0023 29.004 20.1785 29.004 23.0051V28.7812H29Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_278">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(11 11.9062)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">{t("footer.contact")}</div>
            <a href="mailto:hello@zen.com" className="footer-col__link">
              hello@zen.com
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          <div>
            <div className="copyright__logo">
              <img src={copyrightLogo} alt="copyright" />
            </div>
            <p className="copyright__text">
              ZEN.COM is a licensed financial institution under the supervision
              of the Central Bank of Lithuania approved by European Banking
              Authority for 31 countries. Registration number of the company
              304749651, VAT ID LT100011714916. License of electronic money
              institutions number LB000457. Share capital 2.185.000,00 EUR.
              Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales
              Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.
            </p>
          </div>
          <div className="copyright__pci">
            <img src={copyrightPci} alt="copyrightPci" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
