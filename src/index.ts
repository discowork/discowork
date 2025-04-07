import express from "express";
import "dotenv/config";
import { Client } from "@discowork/core";
import { ActivityType } from "discord.js";

new Client({
  intents: 32767,
  presence: {
    status: "online",
    afk: false,
    activities: [
      {
        name: "/comandos",
        type: ActivityType.Listening
      }
    ]
  }
}).init();

const server = express();
const PORT = process.env.PORT || 3000;

server.listen(PORT);
