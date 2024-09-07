import "./style.scss";
import React, { useState } from "react";
import navLogo from "../../../assets/png/Logo.png";
import collapseBtn from "../../../assets/png/Collapse Button.png";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeToken } from "../../utils/helper";

export const Navbar = ({ handleToggler }) => {
  const [state, setState] = useState(true);
  const [toggle, setToggle] = useState(false);
  const getLoginDetails = JSON.parse(localStorage.getItem("loginDetails"));
  const { email } = getLoginDetails || {};

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      toast.success("Logging out!");
      setToggle(false);
      setTimeout(() => {
        removeToken();
        navigate("/");
      }, 4000);
    } catch (error) {
      toast.error("Logout failed!");
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
      <div className="navbar px-4 position-relative">
        <div className="d-flex justify-content-between align-items-center w-100 h-100">
          <div className="col-2">
            <div className="d-flex justify-content-between">
              <div>
                <img srcSet={navLogo} className="w-[120px]" alt="logo" />
              </div>
              <div
                className="relative right-5"
                onClick={handleToggler}
                role="button"
              >
                <img srcSet={collapseBtn} className="w-[20px]" alt="logo" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end w-100 align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="profileBtn py-2"
                onClick={() => {
                  setToggle(true);
                }}
              >
                <div className="d-flex flex-row justify-content-end align-items-center">
                  <div>
                    <div className="profileRound bg-lightSeaBlue">
                      <p className={`userLogoName text-dark mb-0`}>
                        {(email && email?.[0].toUpperCase()) || "U"}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div
              className="cursor-pointer profile profile-dropdown mr-3"
              onClick={() => setState(!state)}
            >
              <div className="d-flex align-items-center">
                <i className="icon-down-arrow down-icon text-white" />
              </div>
            </div>
          </div>
        </div>
        {toggle && (
          <div className="logoutModal">
            <MdClose
              className="cursor-pointer positionModalClose"
              onClick={() => setToggle(false)}
            />

            <div className="d-flex justify-content-center">
              <div>
                <p className="welcomeNameClass text-center mb-0 py-2">
                  {`Hi ${email && email?.split("@")?.[0]}`}
                </p>
              </div>
            </div>
            <div className="mx-auto d-block px-5 pb-3">
              <button
                type="button"
                className="profileBtnOut py-2"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer className="toast-position" position="top-right" />
    </>
  );
};
