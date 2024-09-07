import authLogo from "../assets/png/Logo.png";
import React from "react";

export const AuthWrapper = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 logoContainerBox bg-orange">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
              <img srcSet={authLogo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="col-6 authModuleBox bg-orange">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
