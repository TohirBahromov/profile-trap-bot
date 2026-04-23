const { Telegraf } = require("telegraf");
require("dotenv").config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const MY_ID = process.env.MY_ID;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  const visitor = ctx.from;
  const id = visitor.id.toString();
  const name = visitor.first_name || "Unknown";
  const username = visitor.username ? `@${visitor.username}` : "no username";

  bot.telegram.sendMessage(
    MY_ID,
    `🕵️ ALERT: ${name} (${username}) just clicked your profile bot!`,
  );

  if (id === MY_ID) return;
  ctx.reply("Bot is under construction... Sorry for the inconvenience.");
});

bot.launch();

console.log("Bot is running... Go click 'Start' on your bot to test it!");

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
