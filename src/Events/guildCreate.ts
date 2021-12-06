import { Guild } from "discord.js";
import { readdirSync } from "fs";
import path from "path";
import Client from "src/Client";
import { Event } from "../Interfaces";

export const event: Event = {
  name: "guildCreate",
  run: async (client: Client, guild: Guild) => {
    const commandsToDeploy = [];

    const commandPath = path.join(__dirname, "..", "Commands");
    readdirSync(commandPath).forEach(async file => {
      const { command } = require(`${commandPath}/${file}`);

      const commandFormatted = {
        name: command.name,
        description: command.description,
        options: command.options,
      };

      commandsToDeploy.push(commandFormatted);
    });

    await guild.commands.set(commandsToDeploy);

    console.log("Deployed");
  },
};
