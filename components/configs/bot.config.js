require('dotenv').config();
var config = {
   token: process.env.TOKEN,
   guildId: process.env.GUILD_ID,
   clientId: process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,

   server: { reportsChannel: process.env.REPORTS_CHANNEL_ID },
   moderation: {
       messageLimit: 5,
       timeLimit: 5000,
       swearFilter: false,
       commandTimeout: 2500
   },
   developer: {
       debug: true,
       debugging: {
          show_loaded_commands: false,
          show_loaded_components: false,
          show_loaded_events: false
       },
   },
};
module.exports = config;
