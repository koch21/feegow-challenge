import { configureStore } from "@reduxjs/toolkit";

import rootDoctors from "./ducks/doctors";
import rootSchedules from "./ducks/schedules";

export default configureStore({
  reducer: {
    doctors: rootDoctors,
    schedules: rootSchedules,
  },
});
