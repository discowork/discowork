import { RecurrenceRule } from "node-schedule";
import { TimerRules } from "../Interfaces";

export default class ScheduleHelper {
  static createTimerRule(rules: TimerRules): RecurrenceRule {
    const rule = new RecurrenceRule();

    if (rules.hour) {
      rule.hour = rules.hour;
    }

    if (rules.minute) {
      rule.minute = rules.minute;
    }

    if (rules.second) {
      rule.second = rules.second;
    }

    rule.tz = "America/Sao_Paulo";

    return rule;
  }
}
