import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoPlayOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { FaRankingStar } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Navbar } from "../components/common/Navbar";
import { Sidebar } from "../components/common/Sidebar";
// import { useNavigate } from "react-router-dom";
// import { getAuthToken } from "../components/utils/helper";

export const DashboardWrapper = ({ children, getList }) => {
  const [toggle, setToggle] = useState(false);
  // const navigate = useNavigate();

  const sideBarData = [
    {
      name: 'dashboard',
      label: 'Dasboard',
      to: '/home/dashboard',
      linkName: '/dashboard',
      image: <RxDashboard className="text-dark text-xl" />,
      imageHighlight: <RxDashboard className="text-orange text-xl" />,
    },
    {
      name: 'videos',
      label: 'Videos',
      to: null,
      linkName: '/videos',
      image: <IoPlayOutline className="text-dark text-xl" />,
      imageHighlight: <IoPlayOutline className="text-orange text-xl" />,
    },
    {
      btnLabel: 'TOOLS',
      btnOpen: <FaAngleUp className="text-gray-light text-xl" />,
      btnClose: <FaAngleDown className="text-gray-light text-xl" />,
      subItems: [
        {
          name: 'rank',
          label: 'Closing Ranks',
          to: null,
          linkName: '/rank',
          image: <FaRankingStar className="text-dark text-xl" />,
          imageHighlight: <FaRankingStar className="text-orange text-xl" />,
        },
        {
          name: 'seat-matrix',
          label: 'Seat Matrix',
          to: null,
          linkName: '/seat-matrix',
          image: <BsGrid3X3Gap className="text-dark text-xl" />,
          imageHighlight: <BsGrid3X3Gap className="text-orange text-xl" />,
        },
        {
          name: 'feeBond',
          label: 'Fee, Stipend & Bond',
          to: null,
          linkName: '/feeBond',
          image: <HiOutlineCurrencyRupee className="text-dark text-xl" />,
          imageHighlight: <HiOutlineCurrencyRupee className="text-orange text-xl" />,
        },
      ],
    },
    {
      btnLabel: 'FAQs & RESOURCES',
      btnOpen: <FaAngleUp className="text-gray-light text-xl" />,
      btnClose: <FaAngleDown className="text-gray-light text-xl" />,
      subItems: [
        {
          name: 'faq',
          label: 'FAQs',
          to: null,
          linkName: '/faq',
          image: <FaQuestion className="text-dark text-xl" />,
          imageHighlight: <FaQuestion className="text-orange text-xl" />,
          toggle: false,
        },
      ],
    },
  ];

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  // useEffect(() => {
  //   const authToken = getAuthToken();
  //   if (!authToken) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <>
      <div className="container-fluid">
        <div className="row overflow-hidden">
          <div className="col-12 p-0">
            <Navbar handleToggler={toggleHandler} getList={getList} />
            <div className="row">
              <Sidebar navData={sideBarData} isCollapse={toggle} />
              <div className="col postionContentBox p-0">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
