import { Technology } from "./technology.model";

export interface Project {
    description: string;
    id: string;
    url: string;
    status: Status;
    order: number;
    title: string;
    technologies: Technology[];
}

export enum Status {
    UNDER_DEVELOPMENT, ARCHIVED, ONLINE, OFFLINE
}