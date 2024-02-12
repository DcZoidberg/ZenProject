import { useTranslation } from "react-i18next";
import phoneImg from "../../assets/phone_6.png";
import appleBtn from "../../assets/applebtn.svg";
import googleBtn from "../../assets/googlebtn.svg";
import "./_quick-easy.scss";



const QuickEasy = () => {
  const { t } = useTranslation();
  
  return (
    <section className="quick-easy padding-80">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__block">
            <img id="telephoneImg" src={phoneImg} alt="phone" />
          </div>
          <div className="wrapper__block block-flex">
            <div className="wrapper__text-block quick-easy__block">
              <h3 className="fz-36">{t("home.quickEasy.title")}</h3>
              <p className="fz-18">
                {t("home.quickEasy.paragTop")}
              </p>
              <p className="fz-18">
                {t("home.quickEasy.paragBottom")}
              </p>
              <div className="btn-app-download quick-easy__btns">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/genre/ios-games/id6014"
                >
                  <img src={appleBtn} alt="applebtn" />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/games?hl=ru&gl=US&pli=1"
                >
                  <img src={googleBtn} alt="google" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickEasy;
