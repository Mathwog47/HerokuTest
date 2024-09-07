import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./style.module.scss";
import { PanelInput } from "../../common/PanelInput";
import { PanelButton } from "../../common/PanelButton";
import { loginApi } from "../../utils/Service/auth";
import { setAuthToken } from "../../utils/helper";

const Login = () => {
  const loginRef = useRef();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(loginRef.current);
      const email = formData.get("email");
      const password = formData.get("password");
      let body = { email, password };
      navigate('/home/dashboard');
      if (email && password) {
        const loginRes = await loginApi(JSON.stringify(body));
        const { message, data, success } = loginRes?.data || {};
        if (success) {
          setAuthToken(JSON.stringify(data));
          localStorage.setItem('loginDetails', JSON.stringify(body));
          toast.success(message || "Logging in...");
          setTimeout(() =>{
            navigate('/home/dashboard');
          }, 2000)
        } else {
          toast.error("Authentication Failed");
        }
      } else {
        toast.error("Please complete login details");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form ref={loginRef} onSubmit={handleLoginSubmit}>
      <div className={`${style.authProviderContainer} bg-light p-5 rounded-3`}>
        <PanelInput type="email" name="email" placeholder="Enter your mail" />
        <PanelInput
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <PanelButton type="submit" />
      </div>
      <ToastContainer className="toast-position" position="top-right" />
    </form>
  );
};

export default Login;
