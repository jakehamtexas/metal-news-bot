import { Client } from "discord.js";
import auth from "./bot/auth";
const logger = console;
import getMessageHandler from "./bot/messageHandler";

const bot = new Client();
console.log(auth.botToken);
bot.login(auth.botToken).then(_ => {
  bot.on("ready", () => {
    logger.log("Connected");
    logger.log("Logged in as:", bot.user?.tag, bot.user?.id);
  });
  bot.on("message", getMessageHandler(bot.user?.id));
});
