import { ICollection } from "@/interfaces/Collection";

export const getCollections = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const collections = data.filter(
    (collection: ICollection) => collection.isTrending === false
  );
  return collections;
};

export const getTrendings = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const trendings = data.filter(
    (collection: ICollection) => collection.isTrending
  );
  return trendings;
};

export const getMovies = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const movies = data.filter(
    (collection: ICollection) => collection.category === "Movie"
  );
  return movies;
};

export const getTvSeries = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const tvSeries = data.filter(
    (collection: ICollection) => collection.category === "TV Series"
  );
  return tvSeries;
};
