import { configureStore } from "@reduxjs/toolkit";

import rootDoctors from "./ducks/doctors";

export default configureStore({
  reducer: {
    doctors: rootDoctors,
  },
});
