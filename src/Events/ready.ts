import { readdirSync } from "fs";
import path from "path";
import { Event } from "../Interfaces";

export const event: Event = {
  name: "ready",
  run: async client => {
    console.log(`${client?.user?.tag} is online!`);

    client.guilds.cache.forEach(async guild => {
      try {
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

        console.log(`${guild.name} has been deployed!`);
      } catch (error) {
        console.log(error);

        console.log(`${guild.name} Error!`);
      }
    });
  },
};
