import { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import Search from "../components/Search";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import { SearchMultiResponseModel } from "../types";
import { TIPO_VISTA } from "../constants";
import useGetTrending from "../hooks/useGetTrending";

const Home = () => {
    const [data, setData] = useState<SearchMultiResponseModel>();
    const [isSearchMulti, setIsSearchMulti] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const {
        data: dataRecommended,
        mutateAsync: searchTrending,
        isSuccess,
    } = useGetTrending();

    useEffect(() => {
        const params = {
            media_type: "movie",
            time_window: "week",
        };
        searchTrending(params);
    }, []);

    return (
        <PageLayout>
            <>
                <Search setData={setData} setIsSearchMulti={setIsSearchMulti} setSearch={setSearch} tipoVista={TIPO_VISTA.home} />
                <Trending isSearchMulti={isSearchMulti} />
                {
                    search !== "" ? (
                        <Recommended data={data} isSearchMulti={isSearchMulti} search={search} tipoVista={TIPO_VISTA.home} />
                    ) : (
                        <Recommended data={dataRecommended} isSearchMulti={isSearchMulti} search={search} tipoVista={TIPO_VISTA.home} />
                    )
                }
            </>
        </PageLayout>
    );
};

export default Home;
