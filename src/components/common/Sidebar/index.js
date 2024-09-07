import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./style.module.scss";

export const Sidebar = ({ navData, isCollapse }) => {
  const location = useLocation();
  const [sidebarItems, setSidebarItems] = useState([]);

  const handleToggle = (e, index) => {
    if (sidebarItems.includes(index)) {
      setSidebarItems(sidebarItems.filter((item) => item !== index));
    } else {
      setSidebarItems([...sidebarItems, index]);
    }
  };

  console.log(sidebarItems, "zrrt");

  return (
    <div
      className={`container ${
        isCollapse ? "col-1 w-auto" : "col-2"
      } pe-1 ps-3 postionContentBox pt-2`}
    >
      {navData?.map((menu, index) => {
        return (
          <NavLink key={index} to={menu.to} className={`${classes.navLink}`}>
            {menu?.btnLabel ? (
              <p
                className="text-gray-light mb-0 font-medium text-xs ps-3 my-3 d-flex"
                role="button"
                onClick={(e) => handleToggle(e, index)}
              >
                {menu?.btnLabel}{" "}
                {sidebarItems.includes(index) && menu.subItems
                  ? menu.btnOpen
                  : menu.btnClose}
              </p>
            ) : (
              <p
                className={`${
                  !location.pathname.includes(menu.to)
                    ? classes.active
                    : classes.navItem
                } mb-0 my-1 d-flex font-bold text-sm`}
                title={isCollapse ? menu.label : ""}
              >
                {!location.pathname.includes(menu.to)
                  ? menu.image
                  : menu.imageHighlight}
                {!isCollapse && <span className={` ps-2`}>{menu.label}</span>}
              </p>
            )}
            {sidebarItems.includes(index) && menu.subItems && (
              <div className="sub-items">
                {menu.subItems.map((subItem, subIndex) => (
                  <p
                    className={`${
                      !location.pathname.includes(subItem.to)
                        ? classes.active
                        : classes.navItem
                    } mb-0 my-1 d-flex font-bold text-sm`}
                    title={isCollapse ? subItem.label : ""}
                  >
                    {!location.pathname.includes(subItem.to)
                      ? subItem.image
                      : subItem.imageHighlight}
                    {!isCollapse && (
                      <span className={` ps-2`}>{subItem.label}</span>
                    )}
                  </p>
                ))}
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};
