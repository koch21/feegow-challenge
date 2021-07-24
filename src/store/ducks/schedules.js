import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addSchedule = createAction("addSchedule");
export const removeSchedule = createAction("removeSchedule");

export default createReducer(INITIAL_STATE, {
  [addSchedule.type]: (state, action) => [...state, action.payload],
  [removeSchedule.type]: (state, action) => [
    ...state.filter((event) => event.id !== action.payload.id),
  ],
});
