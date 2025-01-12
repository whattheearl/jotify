export interface Notification {
    name: string;
    description: string;
    time: Date;
    repeat?: string;
}

export interface NotificationResult {
    data: Notification | null;
    error: Error | null;
}

export interface NotificationListResult {
    data: Notification[] | null;
    error: Error | null;
}

let notificationList: any[] = [
    {
        name: "team-meeting",
        description: "weekly team meeting",
        time: "2024-12-01T09:00:00", // YYYY-MM-DDTHH:mm:ss.sssZ
        repeat: "30 * * * * *", // every thirty seconds
    },
].map((notification) => ({
    ...notification,
    time: new Date(notification.time),
}));

export const addNotification = (notification: Notification) => {
    notificationList.push({
        ...notification,
        time: notification.time.toISOString(),
    });
    return { data: null, error: null } as NotificationResult;
};

export const getNotification = () => {
    return {
        data: notificationList.map((n) => ({ ...n, time: new Date(n.time) })),
        error: null,
    } as NotificationListResult;
};

export const updateNotification = (
    name: string,
    notification: Notification,
) => {
    const filtered = notificationList.filter((n) => n.name == name);
    if (filtered.length == 0) {
        return [null, new Error("not found")];
    }

    const target = filtered[0];
    target.description = notification.description;
    target.name = notification.name;
    target.repeat = notification.repeat;
    target.time = notification.time;

    return { data: null, error: null } as NotificationResult;
};

export const removeNotification = (name: string) => {
    notificationList = notificationList.filter((n) => n.name != name);
    return { data: null, error: null } as NotificationResult;
};
