import Promo from "../components/promo/Promo";
import Boost from "../components/boost/Boost";
import Care from "../components/care/Care";
import Cashback from "../components/cashback/Cashback";
import Partners from "../components/partners/Partners";
import Cardshop from "../components/cardshop/Cardshop";
import NoFees from "../components/noFees/NoFees";
import OneApp from "../components/oneApp/OneApp";
import QuickEasy from "../components/quickEasy/QuickEasy";

const HomePage = () => {
  return (
    <>
      <Promo />
      <Boost />
      <Care />
      <Cashback />
      <Partners />
      <Cardshop />
      <NoFees />
      <OneApp />
      <QuickEasy />
    </>
  );
};

export default HomePage;