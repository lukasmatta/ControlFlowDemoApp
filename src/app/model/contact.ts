export enum Status {
    Offline = 0,
    Online,
    Away,
    Busy
}

export interface Contact {
    id: number;
    name: string;
    profile_picture: string;
    last_message: string | null;
    blocked_me?: boolean;
    status: Status;
}


