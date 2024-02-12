export interface Project {
    collectionId: string;
    collectionName: string;
    created: Date;
    description: string;
    id: string;
    link: string;
    status: Status;
    order: number;
    title: string;
    updated: Date;
}

export enum Status {
    UNDER_DEVELOPMENT, ARCHIVED, ONLINE, OFFLINE
}