import { UseMutationResult, useMutation } from "react-query";
import { SearchTVSeriesResponseModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

const useSearchTVSeries = (): UseMutationResult<SearchTVSeriesResponseModel, FetchError<SearchTVSeriesResponseModel>, string> => {
	return useMutation({
		mutationFn: async (req: string) =>
			await TMService.searchTVSeries(req).then(res => res.data),
	});
};

export default useSearchTVSeries;
