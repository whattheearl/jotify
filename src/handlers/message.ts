import { sendMsg } from "../services/discord";

export const messageHandler = async (req: Request) => {
    const { message } = await req.json();
    await sendMsg(message);
    return new Response(null, { status: 204 });
};
