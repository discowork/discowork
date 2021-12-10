import { CommandInteractionOptionResolver, Interaction } from "discord.js";

import { Client } from "@discowork/core";
import { Command, CommandResponse } from "@discowork/interfaces";

export const command: Command = {
  name: "ping",
  description: "Verifica o tempo de resposta do servidor.",
  options: [
    {
      name: "embed",
      description: "Mostra o tempo de resposta do servidor em um embed.",
      type: "BOOLEAN",
      required: false,
    }
  ],
  run: async (
    client: Client,
    interaction: Interaction,
    options: CommandInteractionOptionResolver
  ): CommandResponse => {
    const isEmbed = options.get("embed")?.value;

    if (isEmbed) {
      return {
        embeds: [{
          title: 'Pong!',
          description: `O servidor respondeu em ${client.ws.ping}ms!`,
          color: 0x00fa77,
          author: {
            name: interaction.user.username,
            icon_url: interaction.user.avatarURL()
          },
          timestamp: new Date(),
          footer: {
            text: `Discowork © ${new Date().getFullYear()}`
          },
          thumbnail: {
            url: 'https://avatars.githubusercontent.com/u/95651058?v=4'
          }
        }],
      };
    }

    return {
      content: `**Pong!** \nO servidor respondeu em ${client.ws.ping}ms!`,
    };
  },
};
