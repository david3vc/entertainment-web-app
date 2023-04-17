import { UseMutationResult, useMutation } from "react-query";
import { SearchMultiResponseModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

const useSearchMulti = (): UseMutationResult<SearchMultiResponseModel, FetchError<SearchMultiResponseModel>, string> => {
	return useMutation({
		mutationFn: async (req: string) =>
			await TMService.searchMulti(req).then(res => res.data),
	});
};

export default useSearchMulti;
