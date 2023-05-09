import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./MovieAPI";

export const useFetchMovies = () => {
  const {
    data: movies,
    isLoading: isLoadingMovies,
    isError: isErrorMovies,
    isSuccess: isSuccessMovies,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return {
    movies,
    isLoadingMovies,
    isErrorMovies,
    isSuccessMovies,
  };
};

export default useFetchMovies;
