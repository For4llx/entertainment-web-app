import { useQuery } from "@tanstack/react-query";
import { getCollections } from "./CollectionAPI";

export const useFetchCollections = () => {
  const {
    data: collections,
    isLoading: isLoadingCollections,
    isError: isErrorCollections,
    isSuccess: isSuccessCollections,
  } = useQuery({
    queryKey: ["collections"],
    queryFn: getCollections,
  });

  return {
    collections,
    isLoadingCollections,
    isErrorCollections,
    isSuccessCollections,
  };
};
