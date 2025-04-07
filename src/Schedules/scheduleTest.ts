import { Client } from "@discowork/core";
import { Schedule } from "@discowork/interfaces";
import { ScheduleHelper } from "@discowork/helpers";

export const schedule: Schedule = {
  name: "scheduleTest",
  timerRules: ScheduleHelper.createTimerRule({ hour: 17, minute: 20 }),
  callback: async (client: Client) => {
    console.log("ScheduleHelper is working");
  }
};
