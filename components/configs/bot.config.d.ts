interface BotConfig {
   token: string;
   guildId: string;
   clientId: string;
   clientSecret: string;

   server: { reportsChannel: string; };
   moderation: {
       messageLimit: number;
       timeLimit: number;
       swearFilter: boolean;
       commandTimeout: number;
   };
   developer: {
       debug: boolean;
       debugging: {
          show_loaded_commands: boolean;
          show_loaded_components: boolean;
          show_loaded_events: boolean;
       };
   };
}
declare module './bot.config' {  
   const config: BotConfig;
   export default config;
}
