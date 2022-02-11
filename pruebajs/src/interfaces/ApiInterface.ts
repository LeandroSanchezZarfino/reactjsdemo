export interface Paginated<T> {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    },
    results: Array<T>
}

export interface PageFilter {
    page: number;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array<string>;
    url: string;
    created: string;
}