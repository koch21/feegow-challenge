import api from "../../services/api";
import apiV2 from "../../services/api";

import { listDoctors } from "../ducks/doctors";
import { listSchedule } from "../ducks/schedules";

export const fetchAllDoctors = () => {
  return (dispatch) => {
    api.get("/professional/list").then((res) => {
      return dispatch(listDoctors(res.data));
    });
  };
};

export const fetchAllSchedules = () => {
  return (dispatch) => {
    api.get("/v2/appoints/search").then((res) => {
      return dispatch(listSchedule(res.data));
    });
  };
};
