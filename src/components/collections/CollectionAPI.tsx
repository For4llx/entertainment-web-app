import { ICollection } from "@/interfaces/Collection";

export const getCollections = async (): Promise<Array<ICollection>> => {
  const response = await fetch("./data.json");
  return response.json();
};
