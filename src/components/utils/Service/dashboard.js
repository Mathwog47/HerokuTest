import axios from "../axios";
import { endpoints } from "../config";

export const counselApi = async () => {
  return await axios({
    method: "GET",
    url: `${endpoints.panel.COUNSELLING}`,
    headers: {
      Authorization: JSON.parse(localStorage.getItem('authToken'))?.token,
      "Cache-Control": "no-cache",
      "Postman-Token": "your-postman-token",
      "Content-Type": "application/json",
    },
  });
};

export const eventApi = async (type) => {
  return await axios({
    method: "GET",
    url: `${endpoints.panel.EVENT}/events?event_type=${type}&offset=0`,
    headers: {
      Authorization: JSON.parse(localStorage.getItem('authToken'))?.token,
      "Cache-Control": "no-cache",
      "Postman-Token": "your-postman-token",
      "Content-Type": "application/json",
    },
  });
};
