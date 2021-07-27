import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const doctorFind = createAction("DOCTOR_FIND");

export default createReducer(INITIAL_STATE, {
  [doctorFind.type]: (state, actions) => {
    return { ...actions.payload };
  },
});
