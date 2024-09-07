import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import Select from "react-select";
import { counselApi, eventApi } from "../../../utils/Service/dashboard";
import { PanelInput } from "../../../common/PanelInput";
import { PanelButton } from "../../../common/PanelButton";
import { TimeCalender } from "./TimelineCalender";
import useDynamicVH from "../../../utils/hooks/useDynamicVH";

export const Event = () => {
  const [counselling, setCounselling] = useState("");
  const eventBoxHeight = useDynamicVH(75);
  const [search, setSearch] = useState("");
  const [pill, setPill] = useState("Past");
  const initialState = {
    counselData: [],
    eventData: [],
    errorCounsel: {},
    errorEvent: {},
  };
  const eventReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_COUNCEL_SUCCESS":
        return { ...state, counselData: action.payload };
      case "FETCH_COUNCEL_ERROR":
        return { ...state, errorCounsel: action.payload };
      case "FETCH_EVENT_SUCCESS":
        return { ...state, eventData: action.payload };
      case "FETCH_EVENT_ERROR":
        return { ...state, errorEvent: action.payload };
      default:
        return state;
    }
  };
  const [eventStore, dispatch] = useReducer(eventReducer, initialState);

  useEffect(() => {
    const fetchCounsel = async () => {
      try {
        const counselRes = await counselApi();
        const { data, success } = counselRes?.data || {};
        if (success) {
          dispatch({ type: "FETCH_COUNCEL_SUCCESS", payload: data });
        }
      } catch (err) {
        console.log(err);
        dispatch({ type: "FETCH_COUNCEL_ERROR", payload: err });
      }
    };
    fetchCounsel();
  }, []);

  useEffect(() => {
    const fetchEvent = async (pillType = "past") => {
      try {
        const eventRes = await eventApi(pillType);
        const { data, success } = eventRes?.data || {};
        if (success) {
          dispatch({ type: "FETCH_EVENT_SUCCESS", payload: data?.events });
        }
      } catch (err) {
        console.log(err);
        dispatch({ type: "FETCH_EVENT_ERROR", payload: err });
      }
    };
    fetchEvent(pill?.toLowerCase());
  }, [pill]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #D9D9D9",
      borderRadius: "0.375rem",
      padding: "0px",
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };

  const { counsellings } = eventStore?.counselData || {};

  const { eventData } = eventStore || {};

  let counsellingsData = counsellings?.map((v) => {
    return { label: v?.name, value: v?.id };
  });

  const renderEventData = (datum = []) => {
    if (counselling?.label) {
      return datum?.filter((m) => m?.counselling === counselling?.label);
    } else if (search.length > 0) {
      return datum?.filter((m1) =>
        m1?.counselling?.toLowerCase()?.startsWith(search?.toLowerCase())
      );
    }
    return datum;
  };

  return (
    <div className="p-3">
      <p className="text-base font-bold">Events</p>
      <div className="row">
        <div className="col-12">
          <Select
            options={counsellingsData}
            placeholder="Select Counselling"
            onChange={(selectedOptions) => setCounselling(selectedOptions)}
            styles={customStyles}
          />
        </div>
        <div className="col-5 pe-0 mt-2">
          <PanelInput
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            isSearch
            className="w-full border-1 border-grayBlack border-solid rounded-2 p-2 mb-3"
            placeholder="Search event"
          />
        </div>
        <div className="col-7 mt-2">
          <div className="border-1 border-grayBlack border-solid rounded-1 p-1.5">
            <div className="d-flex justify-content-between">
              {["Past", "Today", "Upcoming"].map((v, i) => {
                return (
                  <div className="col-4 px-1" key={i}>
                    <PanelButton
                      type="button"
                      label={v}
                      className={`${
                        pill === v
                          ? "bg-orange text-light"
                          : "bg-white text-dark"
                      } text-sm font-bold rounded-1 p-1 w-full`}
                      onClick={() => setPill(v)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="eventCalenderBox"
            style={{ height: `${eventBoxHeight}px` }}
          >
            <TimeCalender eventData={renderEventData(eventData)} />
          </div>
        </div>
      </div>
    </div>
  );
};
