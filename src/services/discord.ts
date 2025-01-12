import { Events, Client, GatewayIntentBits } from "discord.js";

export const sendMsg = async (msg: string) => {
    const client = new Client({ intents: GatewayIntentBits.DirectMessages });
    client.once(Events.ClientReady, async () => {
        console.log(`sending ${new Date()}`);
        const channel = await client.users.createDM(
            process.env.DISCORD_USERID as string,
        );
        channel.send(msg);
    });
    client.login(process.env.DISCORD_SECRET);
};
