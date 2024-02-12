import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.svg";

import "./_error-page.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Header />
      <div className="error padding-80">
        <div className="container ">
          <h1 className="tac fz-36 error-title">Oops!</h1>
          <img src={errorImg} alt="error pictures" />
          <p className="tac fz-18">Sorry, an unexpected error has ocurred</p>
          <p className="tac fz-18">
            <i>{error.statusText || error.error.message}</i>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
