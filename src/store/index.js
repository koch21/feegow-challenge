import { configureStore } from "@reduxjs/toolkit";

import rootDoctors from "./ducks/doctors";
import rootDoctorProfile from "./ducks/doctorProfile";
import rootSchedules from "./ducks/schedules";

export default configureStore({
  reducer: {
    doctors: rootDoctors,
    doctorprofile: rootDoctorProfile,
    schedules: rootSchedules,
  },
});
