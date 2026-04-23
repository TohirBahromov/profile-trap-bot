const { Telegraf } = require("telegraf");

const BOT_TOKEN = "8669950620:AAGpyCzI7KV_cWtJw7mTQOPEY8y7Q1xB8Vc";
const MY_ID = "924174457";

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  const visitor = ctx.from;
  const name = visitor.first_name || "Unknown";
  const username = visitor.username ? `@${visitor.username}` : "no username";

  bot.telegram.sendMessage(
    MY_ID,
    `🕵️ ALERT: ${name} (${username}) just clicked your profile bot!`,
  );

  ctx.reply("Bot is under construction... Sorry for the inconvenience.");
});

bot.launch();

console.log("Bot is running... Go click 'Start' on your bot to test it!");

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
