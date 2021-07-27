import api from "../../services/api";

import { listDoctors } from "../ducks/doctors";
import { findDoctors } from "../ducks/specialties";
import { listSchedule } from "../ducks/schedules";
import { doctorFind } from "../ducks/scheduleDoctorFind";

const UID = 111;
export const fetchAllDoctors = (params) => {
  return (dispatch) => {
    api.get(`professional/list?ativo=1&unidade_id=${params}`).then((res) => {
      return dispatch(listDoctors(res.data));
    });
  };
};

export const fetchSearchDoctors = (params) => {
  return (dispatch) => {
    api.get(`/professional/search?profissional_id=${params}`).then((res) => {
      return dispatch(findDoctors(res.data));
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

export const fetchAvailableSchedules = (params) => {
  const { endDate, procedure, startDate, type } = params;
  return (dispatch) => {
    api
      .get(
        `v2/appoints/available-schedule?tipo=${type}&procedimento_id=${procedure}&unidade_id=0&data_start=${startDate}&data_end=${endDate}`
      )
      .then((res) => {
        return dispatch(listSchedule(res.data));
      });
  };
};
