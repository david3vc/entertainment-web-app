import { UseMutationResult, useMutation } from "react-query";
import { SearchMovieResponseModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";
import GetTrendingResponseModel from "../types/models/GetTrendingResponseModel";

interface TrendingProps {
	media_type: string;
	time_window: string;
}

const useGetTrending = (): UseMutationResult<GetTrendingResponseModel, FetchError<GetTrendingResponseModel>, TrendingProps> => {
	return useMutation({
		mutationFn: async ({media_type, time_window}: TrendingProps) =>
			await TMService.searchTrending(media_type, time_window).then(res => res.data),
	});
};

export default useGetTrending;
