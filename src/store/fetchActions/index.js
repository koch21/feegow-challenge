import api from "../../services/api";

import { listDoctors } from "../ducks/doctors";

export const fetchAllDoctors = () => {
  return (dispatch) => {
    api.get("/professional/list").then((res) => {
      return dispatch(listDoctors(res.data));
    });
  };
};
