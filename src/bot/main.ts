import { Client } from "discord.js";
import auth from "./auth";
const logger = console;
import getMessageHandler from "./messageHandler";

const bot = new Client();

bot.login(auth.botToken).then(_ => {
  bot.on("ready", () => {
    logger.info("Connected");
    logger.info("Logged in as:", bot.user?.tag, bot.user?.id);
  });
  bot.on("message", getMessageHandler(bot.user?.id));
});
