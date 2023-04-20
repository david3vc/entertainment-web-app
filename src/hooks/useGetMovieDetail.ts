import { UseQueryResult, useQuery } from "react-query";
import { MovieDetailModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

const useGetMovieDetail = (id?: number): UseQueryResult<MovieDetailModel, FetchError<MovieDetailModel>> => {
	return useQuery<MovieDetailModel, FetchError<MovieDetailModel>>({
		queryKey: ['useGetMovieDetail', id],
		queryFn: async () => await TMService.getMovieById(id ?? 0).then(res => res.data),
		enabled: !(id == 0),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default useGetMovieDetail;
