import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const listDoctorPerfil = createAction("LIST_DOCTORPERFIL");
export const goTODoctor = createAction("GOTO_DOCTOR");
export const goBackDoctor = createAction("GOBACK_DOCTOR");

export default createReducer(INITIAL_STATE, {
  [listDoctorPerfil.type]: (state, actions) => {
    return { ...actions.payload };
  },
  [goTODoctor.type]: (state, action) => [...state, action.payload],
  [goBackDoctor.type]: (state, action) => [
    ...state.filter((event) => event.id !== action.payload.id),
  ],
});
