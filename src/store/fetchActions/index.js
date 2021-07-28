import api from "../../services/api";

import { listDoctors } from "../ducks/doctors";
import { listSchedule } from "../ducks/schedules";
const UID = 111;

export const fetchAllDoctors = (params) => {
  return (dispatch) => {
    api.get(`professional/list?ativo=1&unidade_id=${params}`).then((res) => {
      return dispatch(listDoctors(res.data));
    });
  };
};

export const fetchAllSchedules = (params) => {
  const { endDate, startDate } = params;
  return (dispatch) => {
    api
      .get(
        `https://api.feegow.com/v1/api/appoints/search?data_start=${startDate}&data_end=${endDate}&paciente_id=` +
          UID
      )
      .then((res) => {
        return dispatch(listSchedule(res.data));
      });
  };
};
