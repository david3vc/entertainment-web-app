import { UseQueryResult, useQuery } from "react-query";
import { GetVideosModel } from "../types";
import { FetchError } from "../utils";
import { TMService } from "../services";

const useGetTvVideos = (id?: number): UseQueryResult<GetVideosModel, FetchError<GetVideosModel>> => {
	return useQuery<GetVideosModel, FetchError<GetVideosModel>>({
		queryKey: ['useGetTvVideos', id],
		queryFn: async () => await TMService.getTvVideosById(id ?? 0).then(res => res.data),
		enabled: !(id == 0),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default useGetTvVideos;
