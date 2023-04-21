import CardTrending from "./CardTrending";
import useGetTrending from "../hooks/useGetTrending";
import { useEffect } from "react";
import { MOVIE_TYPE, TV_TYPE } from "../constants";
import { MovieModel, TVSerieModel } from "../types";

interface baseProps {
    isSearchMulti: boolean;
}

const Trending = ({ isSearchMulti }: baseProps) => {
    const { data, mutateAsync: searchTrending, isSuccess } = useGetTrending();

    useEffect(() => {
        const params = {
            media_type: "all",
            time_window: "day",
        };
        searchTrending(params);
    }, []);

    return (
        !isSearchMulti ? (
            <>
                <span>Trending</span>
                <div className="container-trending">
                    {(data?.results?.length ?? 0) > 0 &&
                        data?.results.map((item, index) => {
                            switch (item.media_type) {
                                case MOVIE_TYPE:
                                    item = item as MovieModel;
                                    return (
                                        <CardTrending
                                            key={index}
                                            anio={item.release_date}
                                            media_type={item.media_type}
                                            title={item.original_title}
                                            url_img={`url(https://image.tmdb.org/t/p/original${item.poster_path})`}
                                            item={item}
                                        />
                                    );
                                case TV_TYPE:
                                    item = item as TVSerieModel;
                                    return (
                                        <CardTrending
                                            key={index}
                                            anio={"no tiene"}
                                            media_type={item.media_type}
                                            title={item.original_name}
                                            url_img={`url(https://image.tmdb.org/t/p/original${item.poster_path})`}
                                            item={item}
                                        />
                                    );
                            }
                        })}
                </div>
            </>
        ) : (<></>)
    );
};

export default Trending;
