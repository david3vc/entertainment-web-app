import { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import Search from "../components/Search";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import { SearchMultiResponseModel } from "../types";
import { TIPO_VISTA } from "../constants";
import useGetTrending from "../hooks/useGetTrending";
import { Boton } from "../components/modal/estilos";
import useSearchMulti from "../hooks/useSearchMulti";

const Home = () => {
    const [data, setData] = useState<SearchMultiResponseModel>();
    const [isSearchMulti, setIsSearchMulti] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    const {
        data: dataRecommended,
        mutateAsync: searchTrending,
        isSuccess,
        isLoading
    } = useGetTrending();

    const {
        data: dataSearchMulti,
        mutateAsync: searchMulti,
        isSuccess: isSuccessSearchMulti,
    } = useSearchMulti();

    useEffect(() => {
        const params = {
            media_type: "movie",
            time_window: "week",
        };
        searchTrending(params);
    }, []);

    useEffect(() => {
        if (isSuccessSearchMulti) {
            setData(dataSearchMulti);
        }
    }, [isSuccessSearchMulti]);

    const loadingMore = () => {
        console.log("loading more");
        const params = {
            req: search,
            page: (data?.page ?? 0) + 1,
        };
        searchMulti(params);
    };

    return (
        <PageLayout>
            <>
                <Search
                    setData={setData}
                    setIsSearchMulti={setIsSearchMulti}
                    setSearch={setSearch}
                    tipoVista={TIPO_VISTA.home}
                />
                <Trending isSearchMulti={isSearchMulti} />
                {search !== "" ? (
                    <Recommended
                        data={data}
                        isSearchMulti={isSearchMulti}
                        search={search}
                        tipoVista={TIPO_VISTA.home}
                    />
                ) : (
                    <Recommended
                        data={dataRecommended}
                        isSearchMulti={isSearchMulti}
                        search={search}
                        tipoVista={TIPO_VISTA.home}
                    />
                )}
                {search !== "" && (
                    <div
                        className="btn-loading-more"
                        style={{ margin: "auto", marginTop: "35px" }}
                    >
                        <Boton onClick={loadingMore}>Load more</Boton>
                    </div>
                )}
            </>
        </PageLayout>
    );
};

export default Home;
