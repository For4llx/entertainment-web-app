import { ICollection } from "@/interfaces/Collection";

export const getMovies = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./data.json");
  const collections = await response.json();
  const movies = collections.filter(
    (collection: ICollection) => collection.category === "Movie"
  );
  return movies;
};
