import { UseMutationResult, useMutation } from "react-query";
import { SearchMovieResponseModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

const useSearchMovie = (): UseMutationResult<SearchMovieResponseModel, FetchError<SearchMovieResponseModel>, string> => {
	return useMutation({
		mutationFn: async (req: string) =>
			await TMService.searchMovie(req).then(res => res.data),
	});
};

export default useSearchMovie;
