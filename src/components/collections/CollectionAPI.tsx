import { ICollection } from "@/interfaces/Collection";

export const getCollections = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./json/data.json");
  const data = await response.json();
  const collections = data.filter(
    (collection: ICollection) => collection.isTrending === false
  );
  return collections;
};

export const getTrendings = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./json/data.json");
  const data = await response.json();
  const trendings = data.filter(
    (collection: ICollection) => collection.isTrending
  );
  return trendings;
};

export const getMovies = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./json/data.json");
  const data = await response.json();
  const movies = data.filter(
    (collection: ICollection) => collection.category === "Movie"
  );
  return movies;
};

export const getTvSeries = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./json/data.json");
  const data = await response.json();
  const tvSeries = data.filter(
    (collection: ICollection) => collection.category === "TV Series"
  );
  return tvSeries;
};

export const getBookmarkedMovies = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./json/data.json");
  const data = await response.json();
  const tvSeries = data.filter(
    (collection: ICollection) =>
      collection.category === "Movie" && collection.isBookmarked
  );
  return tvSeries;
};

export const getBookmarkedTvSeries = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./json/data.json");
  const data = await response.json();
  const tvSeries = data.filter(
    (collection: ICollection) =>
      collection.category === "TV Series" && collection.isBookmarked
  );
  return tvSeries;
};

interface IGetSearch {
  searchTerm: string;
}

export const getSearchCollections = async ({
  searchTerm,
}: IGetSearch): Promise<Array<ICollection>> => {
  const response = await fetch("./json/data.json");
  const data = await response.json();
  const searchedCollections = data.filter((collection: ICollection) =>
    collection.title.toLowerCase().match(searchTerm.toLowerCase())
  );
  return searchedCollections;
};

export const getSearchMovies = async ({
  searchTerm,
}: IGetSearch): Promise<Array<ICollection>> => {
  const response = await fetch("../../json/data.json");
  const data = await response.json();
  const movies = data.filter(
    (collection: ICollection) => collection.category === "Movie"
  );
  const searchedMovies = movies.filter((collection: ICollection) =>
    collection.title.toLowerCase().match(searchTerm.toLowerCase())
  );
  return searchedMovies;
};

export const getSearchTvSeries = async ({
  searchTerm,
}: IGetSearch): Promise<Array<ICollection>> => {
  const response = await fetch("../../json/data.json");
  const data = await response.json();
  const tvSeries = data.filter(
    (collection: ICollection) => collection.category === "TV Series"
  );
  const searchedTvSeries = tvSeries.filter((collection: ICollection) =>
    collection.title.toLowerCase().match(searchTerm.toLowerCase())
  );
  return searchedTvSeries;
};

export const getSearchedBookmarked = async ({
  searchTerm,
}: IGetSearch): Promise<Array<ICollection>> => {
  const response = await fetch("../../json/data.json");
  const data = await response.json();
  const collections = data.filter(
    (collection: ICollection) => collection.isBookmarked
  );
  const searchedCollections = collections.filter((collection: ICollection) =>
    collection.title.toLowerCase().match(searchTerm.toLowerCase())
  );
  return searchedCollections;
};
