export interface Pageable<T> {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: T[];
}