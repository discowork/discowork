import Client from "../Client";
import {
  ApplicationCommandOption,
  CommandInteractionOptionResolver,
  Interaction,
} from "discord.js";

interface Run {
  (
    client: Client,
    interaction: Interaction,
    options: CommandInteractionOptionResolver
  ): Promise<string>;
}

export interface Command {
  name: string;
  description: string;
  options: ApplicationCommandOption[];
  run: Run;
}
