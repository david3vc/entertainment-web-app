import CardMovie from "./CardMovie";
import {
    MovieModel,
    PersonModel,
    SearchMultiResponseModel,
    TVSerieModel,
} from "../types";
import { MOVIE_TYPE, PERSON_TYPE, TIPO_VISTA, TV_TYPE } from "../constants";

interface baseProps {
    data: SearchMultiResponseModel | undefined;
    isSearchMulti: boolean;
    search: string;
    tipoVista: string;
}

const Recommended = ({ data, isSearchMulti, search, tipoVista }: baseProps) => {

    return (
        <>
            {!isSearchMulti ? (
                <span className="recommended-tipo-vista">{tipoVista}</span>
            ) : (
                <span className="found-results">
                    Found {data?.results?.length} results for '{search}'
                </span>
            )}
            <div className="recommended-container">
                {(data?.results?.length ?? 0) > 0 &&
                    data?.results?.map((item, index) => {
                        let response: MovieModel | TVSerieModel | PersonModel;
                        if (typeof item.media_type !== "undefined") {
                            switch (item.media_type) {
                                case MOVIE_TYPE:
                                    response = item as MovieModel;
                                    return (
                                        <CardMovie
                                            url_img={response.poster_path}
                                            key={index}
                                            anio={response?.release_date}
                                            media_type={response.media_type}
                                            title={response.title}
                                            item={item}
                                        />
                                    );
                                case TV_TYPE:
                                    response = item as TVSerieModel;
                                    return (
                                        <CardMovie
                                            url_img={response.poster_path}
                                            key={index}
                                            anio={response.first_air_date}
                                            media_type={response.media_type}
                                            title={response.name}
                                            item={item}
                                        />
                                    );
                                case PERSON_TYPE:
                                    response = item as PersonModel;
                                    switch (response.known_for.media_type) {
                                        case MOVIE_TYPE:
                                            response = item as MovieModel;
                                            return (
                                                <CardMovie
                                                    url_img={
                                                        response.poster_path
                                                    }
                                                    key={index}
                                                    anio={
                                                        response?.release_date
                                                    }
                                                    media_type={
                                                        response.media_type
                                                    }
                                                    title={response.title}
                                                    item={item}
                                                />
                                            );
                                        case TV_TYPE:
                                            response = item as TVSerieModel;
                                            return (
                                                <CardMovie
                                                    url_img={
                                                        response.poster_path
                                                    }
                                                    key={index}
                                                    anio={response.first_air_date}
                                                    media_type={
                                                        response.media_type
                                                    }
                                                    title={response.name}
                                                    item={item}
                                                />
                                            );
                                    }
                            }
                        } else {
                            switch (tipoVista) {
                                case TIPO_VISTA.movies:
                                    response = item as MovieModel;
                                    return (
                                        <CardMovie
                                            url_img={response.poster_path}
                                            key={index}
                                            anio={response?.release_date}
                                            media_type={MOVIE_TYPE}
                                            title={response.title}
                                            item={item}
                                        />
                                    );
                                case TIPO_VISTA.series:
                                    response = item as TVSerieModel;
                                    return (
                                        <CardMovie
                                            url_img={response.poster_path}
                                            key={index}
                                            anio={response.first_air_date}
                                            media_type={TV_TYPE}
                                            title={response.name}
                                            item={item}
                                        />
                                    );
                            }
                        }
                    })}
            </div>
        </>
    );
};

export default Recommended;
