import api from "../../services/api";

import { listDoctors, FoundDoctors } from "../ducks/doctors";
import { listSchedule } from "../ducks/schedules";
import { listSpecialties } from "../ducks/specialties";

export const fetchAllDoctors = (params) => {
  return (dispatch) => {
    api.get(`professional/list?ativo=1&unidade_id=${params}`).then((res) => {
      return dispatch(listDoctors(res.data));
    });
  };
};

export const fetchSearchDoctors = (idParam) => {
  return (dispatch) => {
    api.get(`/professional/search?profissional_id=${idParam}`).then((res) => {
      return dispatch(FoundDoctors(res.data));
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
