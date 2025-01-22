
export type Movie = {
    id : number;
    title : string;
    poster_path?: string;
    backdrop_path : string;
    overview : string;
    release_date : string;
    vote_average : number;
    genre_ids : number[];
    adult : boolean;
    original_language : string;
    original_title : string;
    video : boolean;
    vote_count : number;
    popularity : number;
};

export type SearchResults = {
    page : number;
    results : Movie[];
    total_pages : number;
    total_results : number;
};

export type Genre = {
    id : number;
    name : string;
};

export type Genres = {
    genres : Genre[]
}