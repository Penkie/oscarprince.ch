export interface Project {
    collectionId: string;
    collectionName: string;
    created: Date;
    description: string;
    id: string;
    link: string;
    status: string;
    title: string;
    updated: Date;
}

export enum Status {
    UNDER_DEVELOPMENT, ARCHIVED, ONLINE, OFFLINE
}