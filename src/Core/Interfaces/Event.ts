import { ClientEvents } from "discord.js";

import { Client } from "@discowork/core";

interface Run {
  (client: Client, ...args: any[]): void;
}

export interface Event {
  name: keyof ClientEvents;
  run: Run;
}
