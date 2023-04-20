import { useFormik } from "formik";
import iconoSearch from "../assets/images/icon-search.svg";
import useSearchMovie from "../hooks/useSearchMovie";
import useSearchMulti from "../hooks/useSearchMulti";
import { useEffect } from "react";
import { SearchMultiResponseModel } from "../types";
import useGetTrending from "../hooks/useGetTrending";
import { TIPO_VISTA } from "../constants";
import useSearchTVSeries from "../hooks/useSearchTVSeries";

interface baseProps {
    setData: React.Dispatch<
        React.SetStateAction<SearchMultiResponseModel | undefined>
    >;
    setIsSearchMulti: React.Dispatch<React.SetStateAction<boolean>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    tipoVista: string;
}

const Search = ({
    setData,
    setIsSearchMulti,
    setSearch,
    tipoVista,
}: baseProps) => {
    const formik = useFormik({
        initialValues: {
            query: "",
        },
        onSubmit: (values) => {
            switch (tipoVista) {
                case TIPO_VISTA.home:
                    const params = {
                        req: values.query,
                        page: 1
                    }
                    searchMulti(params);
                    break;
                case TIPO_VISTA.movies:
                    searchMovie(values.query);
                    break;
                case TIPO_VISTA.series:
                    searchTVSeries(values.query);
                    break;
            }
        },
    });

    const { data, mutateAsync: searchMulti, isSuccess } = useSearchMulti();
    const { data: dataMovie, mutateAsync: searchMovie, isSuccess: isMovie } = useSearchMovie();
    const { data: dataTVSeries, mutateAsync: searchTVSeries, isSuccess: isTVSeries } = useSearchTVSeries();

    // const {
    //     data: dataTrending,
    //     mutateAsync: searchTrending,
    //     isSuccess: isTrending,
    // } = useGetTrending();

    useEffect(() => {
        if (isSuccess) {
            setData(data);
            setIsSearchMulti(true);
            setSearch(formik.values.query);
        } else setIsSearchMulti(false);
    }, [isSuccess]);

    // useEffect(() => {
    //     if (isTrending) {
    //         setData(dataTrending);
    //         setIsSearchMulti(true);
    //         setSearch(formik.values.query);
    //     } else setIsSearchMulti(false);
    // }, [isTrending]);

    useEffect(() => {
        if (isMovie) {
            setData(dataMovie);
            setSearch(formik.values.query);
        }
    }, [isMovie]);

    useEffect(() => {
        if (isTVSeries) {
            setData(dataTVSeries);
            setSearch(formik.values.query);
        }
    }, [isTVSeries]);

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            formik.handleSubmit();
        }
    };

    return (
        <div className="container-search">
            <div className="container-search__icon">
                <img src={iconoSearch} alt="" />
            </div>
            <input
                type="text"
                className="container-search__input"
                placeholder="Search for movies or TV series"
                name="query"
                value={formik.values.query ?? ""}
                onChange={formik.handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default Search;
