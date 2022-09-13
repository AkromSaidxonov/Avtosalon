import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Index from "./router/Index";
import Cookies from "universal-cookie";
import { setToken } from "./redux/slice/authSlise";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch()
  const cookies = new Cookies();
  const navigate = useNavigate();
  let token = cookies.get("token");

  useEffect(() => {
    if (token !== undefined) {
      navigate("/");
    }
    dispatch(setToken(token));
  }, [token]);
  return (
    <div className="App">
      <Index token={token} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
