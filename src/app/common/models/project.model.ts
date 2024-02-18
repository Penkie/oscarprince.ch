import { Technology } from "./technology.model";

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
    // custom fields not in DB
    technologies: Technology[];
}

export enum Status {
    UNDER_DEVELOPMENT, ARCHIVED, ONLINE, OFFLINE
}