import { Interaction } from "discord.js";

import { Event, Command } from "@discowork/interfaces";

export const event: Event = {
  name: "interactionCreate",
  run: async (client, interaction: Interaction) => {
    if (!interaction.isCommand() || !interaction.guildId) return;

    if (!interaction.commandName) return;

    const command = client.commands.get(interaction.commandName);

    if (command) {
      const response = await (command as Command).run(
        client,
        interaction,
        interaction.options
      );

      await interaction.reply(response);
    }
  },
};
