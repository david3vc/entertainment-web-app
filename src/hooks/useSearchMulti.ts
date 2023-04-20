import { UseMutationResult, useMutation } from "react-query";
import { SearchMultiResponseModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

interface ISearchMulti {
	req: string;
	page: number;
}

const useSearchMulti = (): UseMutationResult<SearchMultiResponseModel, FetchError<SearchMultiResponseModel>, ISearchMulti> => {
	return useMutation({
		mutationFn: async ({req, page}: ISearchMulti) =>
			await TMService.searchMulti(req, page).then(res => res.data),
	});
};

export default useSearchMulti;
