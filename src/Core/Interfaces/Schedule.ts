import { RecurrenceRule } from "node-schedule";

import { Client } from "@discowork/core";

interface CallbackProps {
  (client: Client): Promise<void>;
}

export interface Schedule {
  name: string;
  timerRules: RecurrenceRule;
  callback: CallbackProps;
}
