import { useFormik } from "formik";
import iconoSearch from "../assets/images/icon-search.svg";
import useSearchMovie from "../hooks/useSearchMovie";
import useSearchMulti from "../hooks/useSearchMulti";
import { useEffect } from "react";
import { SearchMultiResponseModel } from "../types";

interface baseProps {
    setData: React.Dispatch<React.SetStateAction<SearchMultiResponseModel | undefined>>;
}

const Search = ({setData}: baseProps) => {
    const formik = useFormik({
        initialValues: {
            query: "",
        },
        onSubmit: (values) => searchMulti(values.query),
    });

    const {
        data,
        mutateAsync: searchMulti,
        isSuccess,
    } = useSearchMulti();

    useEffect(()=>{
        if(isSuccess) setData(data)
    },[isSuccess])

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
