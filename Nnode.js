const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "أهلاً بك في لعبة Crash!",
    Markup.inlineKeyboard([
      [Markup.button.webApp("🎮 افتح اللعبة", "https://yourdomain.com/crash")]
    ])
  );
});

bot.launch();
