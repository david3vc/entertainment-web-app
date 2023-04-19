import { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { SearchMultiResponseModel } from "../types";
import Search from "../components/Search";
import Recommended from "../components/Recommended";
import { TIPO_VISTA } from "../constants";
import useSearchMovie from "../hooks/useSearchMovie";
import useGetTrending from "../hooks/useGetTrending";

const Movies = () => {
    const [data, setData] = useState<SearchMultiResponseModel>();
    const [isSearchMulti, setIsSearchMulti] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    const {
        data: dataTrending,
        mutateAsync: searchTrending,
        isSuccess: isTrending,
    } = useGetTrending();

    useEffect(() => {
        const params = {
            media_type: "movie",
            time_window: "day",
        };
        searchTrending(params);
    }, []);

    return (
        <PageLayout>
            <>
                <Search
                    setData={setData}
                    setIsSearchMulti={setIsSearchMulti}
                    setSearch={setSearch}
                    tipoVista={TIPO_VISTA.movies}
                />
                {
                    search !== "" ? (
                        <Recommended
                            data={data}
                            isSearchMulti={isSearchMulti}
                            search={search}
                            tipoVista={TIPO_VISTA.movies}
                        />
                    ) : (
                        <Recommended
                            data={dataTrending}
                            isSearchMulti={isSearchMulti}
                            search={search}
                            tipoVista={TIPO_VISTA.movies}
                        />
                    )
                }
            </>
        </PageLayout>
    );
};

export default Movies;
