import CardTrending from "./CardTrending";
import Slider from "react-slick";
import useGetTrending from "../hooks/useGetTrending";
import { useEffect } from "react";
import { MOVIE_TYPE, TV_TYPE } from "../constants";
import { MovieModel, TVSerieModel } from "../types";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return !isSearchMulti ? (
        <>
            <span className="trending-term">Trending</span>
            {/* <div className="container-trending"> */}
            <Slider {...settings} >
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
            </Slider>
            {/* </div> */}
        </>
    ) : (
        <></>
    );
};

export default Trending;
