export interface Message {
    id: number;
    text: string;
    sender_id: number | null;
    timestamp: string
}

export interface Conversation {
    contact_id: number;
    messages: Message[];
}
