import { useEffect } from "react";
import CardMovie from "./CardMovie";
import {
    MovieModel,
    PersonModel,
    SearchMultiResponseModel,
    TVSerieModel,
} from "../types";
import { MOVIE_TYPE, PERSON_TYPE, TV_TYPE } from "../constants";
import useGetTrending from "../hooks/useGetTrending";

interface baseProps {
    data: SearchMultiResponseModel | undefined;
}

const Recommended = ({ data }: baseProps) => {
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
        <>
            <span>Recommended for fou</span>
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
            </div>
        </>
    );
};

export default Recommended;
