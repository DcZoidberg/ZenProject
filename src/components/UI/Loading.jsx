import loading from "../../assets/loading.gif";
const Loading = () => {
  return (
    <div className="loading tac">
      <div className="container">
        <img src={loading} alt="cat gif loading" />
      </div>
    </div>
  );
};

export default Loading;
