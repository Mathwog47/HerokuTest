import axios from "../axios";
import { endpoints } from "../config";
import { getAuthToken } from "../helper";

export const loginApi = async (body) => {
  return await axios({
    method: "POST",
    url: `${endpoints.auth.LOGIN}`,
    headers: {
      Authorization: "Bearer " + getAuthToken(),
      "Cache-Control": "no-cache",
      "Postman-Token": "your-postman-token",
      "Content-Type": "application/json",
    },
    data: body,
  });
};
