import React from "react";
import moment from "moment";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

export const TimeCalender = ({ eventData }) => {
  const renderDate = (inpDate = "") => {
    const parsedDate = moment(inpDate, "YYYY-MM-DD HH:mm:ss");
    return {
      day: parsedDate.format("DD"),
      month: parsedDate.format("MMMM"),
    };
  };

  return (
    <>
      {eventData.length === 0 ? (
        <p className="text-orange text-center">Sorry, No Records Found...!</p>
      ) : (
        <>
          {eventData?.map((v) => {
            return (
              <div className="d-flex flex-row" key={v?.id}>
                <div className="col-1">
                  <p className="mb-0 text-uppercase text-vs text-dark font-medium">
                    {renderDate(v?.start_time)?.month?.substring(0, 3)}
                  </p>
                  <p className="mb-0 text-dark text-base font-medium">
                    {renderDate(v?.start_time)?.day}
                  </p>
                  <FaArrowDownLong className="my-2" />
                  <p className="mb-0 text-uppercase text-vs text-dark font-medium">
                    {renderDate(v?.end_time)?.month?.substring(0, 3)}
                  </p>
                  <p className="mb-0 text-dark text-base font-medium">
                    {renderDate(v?.end_time)?.day}
                  </p>
                </div>
                <div className="col-10 border-b border-grayBlack border-solid mb-2">
                  <p className="mb-0 pb-1 text-dark font-medium text-sm">
                    {v?.description}
                  </p>
                  <span className="font-bold text-steelBlue text-xs">
                    {v?.counselling}
                  </span>{" "}
                  <span className="font-black text-xs relative bottom-1">
                    .
                  </span>{" "}
                  <span className="font-bold text-orange text-xs">
                    {v?.topic}
                  </span>
                  <div className="d-flex flex-row pt-2">
                    <CiCalendarDate className="text-xl text-gray" />{" "}
                    <p className="text-sm ps-2 text-gray">
                      {moment(v?.start_time, "YYYY-MM-DD HH:mm:ss").format(
                        "DD MMMM, hh:mma"
                      )}
                    </p>{" "}
                    <p className="text-sm text-gray px-2">-</p>{" "}
                    <p className="text-sm text-gray">
                      {moment(v?.end_time, "YYYY-MM-DD HH:mm:ss").format(
                        "DD MMMM, hh:mma"
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-1 border-b border-grayBlack border-solid mb-2">
                  <div className="d-flex justify-content-center">
                    <FaAngleDown className="text-gray" />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
