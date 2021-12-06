import Client from "../Client";
import { Schedule } from "../Interfaces";

import ScheduleHelper from "../Helpers/ScheduleHelper";

export const schedule: Schedule = {
  name: "scheduleTest",
  timerRules: ScheduleHelper.createTimerRule({ hour: 7, minute: 30 }),
  callback: async (client: Client) => {
    console.log("test");
  },
};
