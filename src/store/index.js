import { configureStore } from "@reduxjs/toolkit";

import rootDoctors from "./ducks/doctors";
import rootSpecialties from "./ducks/specialties";
import rootDoctorProfile from "./ducks/doctorProfile";
import rootScheduleDoctorProfile from "./ducks/scheduleDoctorFind";
import rootSchedules from "./ducks/schedules";

export default configureStore({
  reducer: {
    doctors: rootDoctors,
    specialties: rootSpecialties,
    schedules: rootSchedules,
    scheduleDoctorFind: rootScheduleDoctorProfile,
    doctorprofile: rootDoctorProfile,
  },
});
