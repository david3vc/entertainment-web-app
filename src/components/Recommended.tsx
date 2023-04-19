import { useEffect } from "react";
import CardMovie from "./CardMovie";
import {
    MovieModel,
    PersonModel,
    SearchMultiResponseModel,
    TVSerieModel,
} from "../types";
import { MOVIE_TYPE, PERSON_TYPE, TIPO_VISTA, TV_TYPE } from "../constants";
import useGetTrending from "../hooks/useGetTrending";

interface baseProps {
    data: SearchMultiResponseModel | undefined;
    isSearchMulti: boolean;
    search: string;
    tipoVista: string;
}

const Recommended = ({ data, isSearchMulti, search, tipoVista }: baseProps) => {
    // const {
    //     data: dataRecommended,
    //     mutateAsync: searchTrending,
    //     isSuccess,
    // } = useGetTrending();

    // useEffect(() => {
    //     const params = {
    //         media_type: "movie",
    //         time_window: "week",
    //     };
    //     searchTrending(params);
    // }, []);

    // console.log(data, data?.results?.length);

    return (
        <>
            {!isSearchMulti ? (
                <span>{tipoVista}</span>
            ) : (
                <span>
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
                                            anio={"no tiene"}
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
                                                    anio={"no tiene"}
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
                                            media_type={TIPO_VISTA.movies}
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
                                            anio={"no tiene"}
                                            media_type={TIPO_VISTA.series}
                                            title={response.name}
                                            item={item}
                                        />
                                    );
                            }
                        }
                    })}
            </div>
            {/* {!isSearchMulti ? <span>{tipoVista}</span> : <span>Found {data?.results.length} results for '{search}'</span> }
            <div className="recommended-container">
                {(data?.results?.length ?? 0) > 0
                    ? data?.results?.map((item, index) => {
                          let response: MovieModel | TVSerieModel | PersonModel;
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
                                      />
                                  );
                              case TV_TYPE:
                                  response = item as TVSerieModel;
                                  return (
                                      <CardMovie
                                          url_img={response.poster_path}
                                          key={index}
                                          anio={"no tiene"}
                                          media_type={response.media_type}
                                          title={response.name}
                                      />
                                  );
                              case PERSON_TYPE:
                                  response = item as PersonModel;
                                  switch (response.known_for.media_type) {
                                      case MOVIE_TYPE:
                                          response = item as MovieModel;
                                          return (
                                              <CardMovie
                                                  url_img={response.poster_path}
                                                  key={index}
                                                  anio={response?.release_date}
                                                  media_type={
                                                      response.media_type
                                                  }
                                                  title={response.title}
                                              />
                                          );
                                      case TV_TYPE:
                                          response = item as TVSerieModel;
                                          return (
                                              <CardMovie
                                                  url_img={response.poster_path}
                                                  key={index}
                                                  anio={"no tiene"}
                                                  media_type={
                                                      response.media_type
                                                  }
                                                  title={response.name}
                                              />
                                          );
                                  }
                          }
                      })
                    : (dataRecommended?.results?.length ?? 0) > 0 &&
                      dataRecommended?.results?.map((item, index) => {
                          let response: MovieModel | TVSerieModel;
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
                                      />
                                  );
                              case TV_TYPE:
                                  response = item as TVSerieModel;
                                  return (
                                      <CardMovie
                                          url_img={response.poster_path}
                                          key={index}
                                          anio={"no tiene"}
                                          media_type={response.media_type}
                                          title={response.name}
                                      />
                                  );
                          }
                      })}
            </div> */}
        </>
    );
};

export default Recommended;
