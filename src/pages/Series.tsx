import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { SearchMultiResponseModel } from "../types";
import useGetTrending from "../hooks/useGetTrending";
import Search from "../components/Search";
import { TIPO_VISTA } from "../constants";
import Recommended from "../components/Recommended";

const Series = () => {
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
            media_type: "tv",
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
                    tipoVista={TIPO_VISTA.series}
                />
                {search !== "" ? (
                    <Recommended
                        data={data}
                        isSearchMulti={isSearchMulti}
                        search={search}
                        tipoVista={TIPO_VISTA.series}
                    />
                ) : (
                    <Recommended
                        data={dataTrending}
                        isSearchMulti={isSearchMulti}
                        search={search}
                        tipoVista={TIPO_VISTA.series}
                    />
                )}
            </>
        </PageLayout>
    );
};

export default Series;
