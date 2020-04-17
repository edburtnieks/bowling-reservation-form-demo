import React from "react";

import "./styles.scss";
import { ReservationForm } from "./components/ReservationForm";

const App = () => (
  <ReservationForm
    startHour={11}
    endHour={24}
    minDuration={1}
    maxDuration={4}
    minLaneCount={1}
    maxLaneCount={1}
    totalLaneCount={10}
    minPlayerCount={1}
    maxPlayerCount={6}
  />
);

export { App };
