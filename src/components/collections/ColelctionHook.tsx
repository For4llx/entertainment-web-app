import { useQuery } from "@tanstack/react-query";
import {
  getBookmarkedMovies,
  getBookmarkedTvSeries,
  getCollections,
  getMovies,
  getSearchCollections,
  getSearchMovies,
  getSearchTvSeries,
  getTrendings,
  getTvSeries,
} from "./CollectionAPI";

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

export const useFetchTrendings = () => {
  const {
    data: trendings,
    isLoading: isLoadingTrendings,
    isError: isErrorTrendings,
    isSuccess: isSuccessTrendings,
  } = useQuery({
    queryKey: ["trendings"],
    queryFn: getTrendings,
  });

  return {
    trendings,
    isLoadingTrendings,
    isErrorTrendings,
    isSuccessTrendings,
  };
};

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

export const useFetchTvSeries = () => {
  const {
    data: tvSeries,
    isLoading: isLoadingtvSeries,
    isError: isErrortvSeries,
    isSuccess: isSuccesstvSeries,
  } = useQuery({
    queryKey: ["tvSeries"],
    queryFn: getTvSeries,
  });

  return {
    tvSeries,
    isLoadingtvSeries,
    isErrortvSeries,
    isSuccesstvSeries,
  };
};

export const useFetchBookmarkedMovies = () => {
  const {
    data: bookmarkedMovies,
    isLoading: isLoadingbookmarkedMovies,
    isError: isErrorbookmarkedMovies,
    isSuccess: isSuccessbookmarkedMovies,
  } = useQuery({
    queryKey: ["bookmarkedMovies"],
    queryFn: getBookmarkedMovies,
  });

  return {
    bookmarkedMovies,
    isLoadingbookmarkedMovies,
    isErrorbookmarkedMovies,
    isSuccessbookmarkedMovies,
  };
};

export const useFetchBookmarkedTvSeries = () => {
  const {
    data: bookmarkedTvSeries,
    isLoading: isLoadingbookmarkedTvSeries,
    isError: isErrorbookmarkedTvSeries,
    isSuccess: isSuccessbookmarkedTvSeries,
  } = useQuery({
    queryKey: ["bookmarkedTvSeries"],
    queryFn: getBookmarkedTvSeries,
  });

  return {
    bookmarkedTvSeries,
    isLoadingbookmarkedTvSeries,
    isErrorbookmarkedTvSeries,
    isSuccessbookmarkedTvSeries,
  };
};

interface IuseFetchSearchedCollections {
  searchTerm: string;
}

export const useFetchSearchedCollections = ({
  searchTerm,
}: IuseFetchSearchedCollections) => {
  const {
    data: searchedCollections,
    isLoading: isLoadingbookmarkedTvSeries,
    isError: isErrorbookmarkedTvSeries,
    isSuccess: isSuccessbookmarkedTvSeries,
  } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => getSearchCollections({ searchTerm }),
  });

  return {
    searchedCollections,
    isLoadingbookmarkedTvSeries,
    isErrorbookmarkedTvSeries,
    isSuccessbookmarkedTvSeries,
  };
};

export const useFetchSearchedMovies = ({
  searchTerm,
}: IuseFetchSearchedCollections) => {
  const {
    data: searchedMovies,
    isLoading: isLoadingbookmarkedTvSeries,
    isError: isErrorbookmarkedTvSeries,
    isSuccess: isSuccessbookmarkedTvSeries,
  } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => getSearchMovies({ searchTerm }),
  });

  return {
    searchedMovies,
    isLoadingbookmarkedTvSeries,
    isErrorbookmarkedTvSeries,
    isSuccessbookmarkedTvSeries,
  };
};

export const useFetchSearchedTvSeries = ({
  searchTerm,
}: IuseFetchSearchedCollections) => {
  const {
    data: searchedTvSeries,
    isLoading: isLoadingbookmarkedTvSeries,
    isError: isErrorbookmarkedTvSeries,
    isSuccess: isSuccessbookmarkedTvSeries,
  } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => getSearchTvSeries({ searchTerm }),
  });
  return {
    searchedTvSeries,
    isLoadingbookmarkedTvSeries,
    isErrorbookmarkedTvSeries,
    isSuccessbookmarkedTvSeries,
  };
};
