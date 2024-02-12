import Modal from "../UI/Modal";
import { useTranslation } from "react-i18next";
import appleBtn from "../../assets/applebtn.svg";
import googleBtn from "../../assets/googlebtn.svg";

const ModalGetApp = ({ open, onClose }) => {
  const { t } = useTranslation();
  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="tac">{t("modalGetApp")}</h3>
      <div className="btn-app-download a-center">
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
    </Modal>
  );
};

export default ModalGetApp;
