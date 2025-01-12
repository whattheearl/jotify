import { messageHandler } from "./handlers/message";
import { notificationHandler } from "./handlers/notification";

const PORT = Bun.env.PORT || 8080;

console.log(`Server started at http://localhost:${PORT}`);

Bun.serve({
    async fetch(req) {
        const url = new URL(req.url.toLowerCase().trimEnd());
        if (url.pathname.startsWith("/notifications")) {
            return notificationHandler(req);
        } else if (url.pathname.startsWith("/messages")) {
            return messageHandler(req);
        }
        return new Response("not found", { status: 404 });
    },
    port: PORT,
});
