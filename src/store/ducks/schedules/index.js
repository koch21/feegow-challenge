import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const listSchedule = createAction("LIST_SCHEDULE");
export const addSchedule = createAction("ADD_SCHEDULE");
export const removeSchedule = createAction("REMOVE_SCHEDULE");

export default createReducer(INITIAL_STATE, {
  [listSchedule.type]: (state, actions) => {
    return { ...actions.payload };
  },
  [addSchedule.type]: (state, action) => [...state, action.payload],
  [removeSchedule.type]: (state, action) => [
    ...state.filter((event) => event.id !== action.payload.id),
  ],
});
