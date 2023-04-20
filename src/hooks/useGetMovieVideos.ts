import { UseQueryResult, useQuery } from "react-query";
import { MovieVideosModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

const useGetMovieVideos = (id?: number): UseQueryResult<MovieVideosModel, FetchError<MovieVideosModel>> => {
	return useQuery<MovieVideosModel, FetchError<MovieVideosModel>>({
		queryKey: ['useGetMovieVideos', id],
		queryFn: async () => await TMService.getMovieVideosById(id ?? 0).then(res => res.data),
		enabled: !(id == 0),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default useGetMovieVideos;
