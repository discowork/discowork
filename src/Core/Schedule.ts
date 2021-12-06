import { Job, JobCallback, RecurrenceRule, scheduleJob } from "node-schedule";

export default class Schedule {
  private schedules: { [key: string]: Job } = {};

  public add(name: string, rule: RecurrenceRule, callback: JobCallback) {
    this.schedules[name] = scheduleJob(name, rule, callback);
  }
}
