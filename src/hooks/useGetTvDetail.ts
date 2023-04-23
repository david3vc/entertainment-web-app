import { UseQueryResult, useQuery } from "react-query";
import { TvDetailModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

const useGetTvDetail = (id?: number): UseQueryResult<TvDetailModel, FetchError<TvDetailModel>> => {
	return useQuery<TvDetailModel, FetchError<TvDetailModel>>({
		queryKey: ['useGetTvDetail', id],
		queryFn: async () => await TMService.getTvById(id ?? 0).then(res => res.data),
		enabled: !(id == 0),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default useGetTvDetail;
