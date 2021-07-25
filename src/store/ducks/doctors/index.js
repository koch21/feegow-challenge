import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const listDoctors = createAction("LIST_DOCTORS");

export default createReducer(INITIAL_STATE, {
  [listDoctors.type]: (state, actions) => {
    return { ...actions.payload };
  },
});
