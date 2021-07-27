import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const findDoctors = createAction("FIND_DOCTORS");

export default createReducer(INITIAL_STATE, {
  [findDoctors.type]: (state, actions) => {
    return { ...actions.payload };
  },
});
