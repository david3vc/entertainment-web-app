import { useEffect, useState } from "react";
import iconoBookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import iconoBookmarkFull from "../assets/images/icon-bookmark-full.svg";
import iconoMovie from "../assets/images/icon-category-movie.svg";
import {
    MovieDetailModel,
    MovieModel,
    PersonModel,
    TVSerieModel,
    TvDetailModel,
} from "../types";
import { useBookMarList } from "../context/BookmarkListContext";
import Modal from "./modal/modal";
import { Boton, Contenido } from "./modal/estilos";
import useGetMovieDetail from "../hooks/useGetMovieDetail";
import useGetMovieVideos from "../hooks/useGetMovieVideos";
import YouTube from "react-youtube";
import MovieVideoDetailModel from "../types/models/MovieVideoDetailModel";
import useGetTvDetail from "../hooks/useGetTvDetail";
import { MOVIE_TYPE, TV_TYPE } from "../constants";
import useGetTvVideos from "../hooks/useGetTvVideos";

interface baseProps {
    anio: string;
    media_type: string;
    title: string;
    url_img: string | null;
    item: MovieModel | TVSerieModel | PersonModel;
}

interface IHoursAndMin {
    hours: number;
    minutes: number;
}

const CardMovie = ({ anio, media_type, title, url_img, item }: baseProps) => {
    const [showModal, setShowModal] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false);
    const [duracion, setDuracion] = useState<IHoursAndMin>();
    const [trailer, setTrailer] = useState<MovieVideoDetailModel>();
    const [iconoBookmark, setIconoBookmark] = useState(iconoBookmarkEmpty);
    const [dataMovie, setDataMovie] = useState<MovieDetailModel>();
    const [dataTv, setDataTv] = useState<TvDetailModel>();

    const { list, setList } = useBookMarList();
    const { data: dataMovielDetail, isSuccess, isLoading: isLoadingMovieDetail } = useGetMovieDetail(
        showModal && media_type === MOVIE_TYPE ? item.id : 0
    );
    const { data: dataMovies, isSuccess: isGetMovieVideos } = useGetMovieVideos(
        showModal && media_type === MOVIE_TYPE ? item.id : 0
    );
    const { data: dataTvDetail, isSuccess: isGetTvDetail } = useGetTvDetail(
        showModal && media_type === TV_TYPE ? item.id : 0
    );
    const { data: dataTvVideos, isSuccess: isGetTvVideos } = useGetTvVideos(
        showModal && media_type === TV_TYPE ? item.id : 0
    );

    const url =
        url_img !== null
            ? `https://image.tmdb.org/t/p/original${url_img}`
            : "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg";

    useEffect(() => {
        if (isSuccess) {
            console.log(dataMovielDetail);
            setDataMovie(dataMovielDetail);
            const duracion = toHoursAndMinutes(dataMovielDetail.runtime);
            setDuracion(duracion);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isGetMovieVideos) {
            const trailer = dataMovies.results.find(
                (video) => video.type === "Trailer"
            );
            console.log(trailer);
            setTrailer(trailer);
        }
    }, [isGetMovieVideos]);

    useEffect(() => {
        if (isGetTvDetail) {
            console.log(dataTvDetail);
            setDataTv(dataTvDetail);
        }
    }, [isGetTvDetail]);

    useEffect(() => {
        if (isGetTvVideos) {
            const trailer = dataTvVideos.results.find(
                (video) => video.type === "Trailer"
            );
            console.log(trailer);
            setTrailer(trailer);
        }
    }, [isGetTvVideos]);

    useEffect(() => {
        if (showTrailer) {
            setShowModal(false);
        } else setShowModal(true);
    }, [showTrailer]);

    useEffect(() => {
        setShowModal(false);
    }, []);

    const marcarPelicula = () => {
        const itemEncontrado = list?.find((movie) => movie.id === item.id);
        if (typeof itemEncontrado === "undefined") {
            list?.push(item);
            setIconoBookmark(iconoBookmarkFull);
        } else {
            const newList = list?.filter((movie) => movie.id !== item.id);
            setList?.(newList ?? []);
            setIconoBookmark(iconoBookmarkEmpty);
        }
    };

    const toHoursAndMinutes = (totalMinutes: number) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return { hours, minutes };
    };

    return (
        <>
            <div className="container-card-movie">
                <div className="container-card-movie__image">
                    <div className="image__icon" onClick={marcarPelicula}>
                        <img
                            src={
                                list?.includes(item)
                                    ? iconoBookmarkFull
                                    : iconoBookmark
                            }
                            alt=""
                            className="image__icon__iconoBookmarkEmpty"
                        />
                    </div>
                    <img
                        src={url}
                        alt=""
                        className="image__photo"
                        onClick={() => setShowModal(true)}
                    />
                </div>
                <div className="container-card-movie__information">
                    <span className="information__anio">
                        {anio?.substring(0, 4)}
                    </span>
                    <span className="information__type">
                        <img
                            src={iconoMovie}
                            alt=""
                            className="information__type__icon"
                        />
                        <span className="information__type__term">
                            {media_type}
                        </span>
                    </span>
                    <span className="information__category">PG</span>
                </div>
                <div className="container-card-movie__title">
                    <span className="title__term">{title}</span>
                </div>
            </div>

            {media_type === MOVIE_TYPE ? (
                <Modal
                    padding="20px"
                    titulo={`${dataMovie?.title}`}
                    anio={`(${dataMovie?.release_date?.substring(0, 4)})`}
                    mostrarHeader={true}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    imagen={
                        showModal
                            ? `https://image.tmdb.org/t/p/original${
                                  dataMovie?.belongs_to_collection
                                      ?.backdrop_path ?? dataMovie?.poster_path
                              }`
                            : ""
                    }
                >
                    <Contenido>
                        <div className="contenido__generos">
                            {(dataMovie?.genres?.length ?? 0) > 0 &&
                                dataMovie?.genres.map((genre, index) =>
                                    <>
                                        <span className="contenido__generos__genre">{genre.name}</span>{' '}
                                    </>
                                )}
                            <span>
                                {" "}
                                . {duracion?.hours}h {duracion?.minutes}m
                            </span>
                        </div>
                        <div className="contenido__tagline">
                            <span>{dataMovie?.tagline}</span>
                        </div>
                        <div className="contenido__overview">
                            <span className="contenido__overview__caption">
                                Overview
                            </span>
                            <span className="contenido__overview__paragraph">
                                {dataMovie?.overview}
                            </span>
                        </div>
                        <div className="contenido__boton">
                            <Boton onClick={() => setShowTrailer(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>
                                <span>Play Trailer</span>
                            </Boton>
                        </div>
                    </Contenido>
                </Modal>
            ) : (
                <Modal
                    padding="20px"
                    titulo={`${dataTv?.name}`}
                    anio={`(${dataTv?.last_air_date?.substring(0, 4)})`}
                    mostrarHeader={true}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    imagen={
                        showModal
                            ? `https://image.tmdb.org/t/p/original${dataTv?.poster_path}`
                            : ""
                    }
                >
                    <Contenido>
                        <div className="contenido__generos">
                            {(dataTv?.genres?.length ?? 0) > 0 &&
                                dataTv?.genres.map((genre, index) =>
                                    <>
                                        <span className="contenido__generos__genre">{genre.name}</span>{' '}
                                    </>
                                )}
                        </div>
                        <div className="contenido__tagline">
                            <span>{dataTv?.tagline}</span>
                        </div>
                        <div className="contenido__overview">
                            <span className="contenido__overview__caption">
                                Overview
                            </span>
                            <span className="contenido__overview__paragraph">
                                {dataTv?.overview}
                            </span>
                        </div>
                        <div className="contenido__boton">
                            <Boton onClick={() => setShowTrailer(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-play-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>
                                <span>Play Trailer</span>
                            </Boton>
                        </div>
                    </Contenido>
                </Modal>
            )}

            <Modal
                padding="0px"
                showModal={showTrailer}
                setShowModal={setShowTrailer}
                titulo="Trailer"
                mostrarHeader={false}
                imagen=""
                anio=""
            >
                <YouTube
                    videoId={trailer?.key}
                    opts={{ width: "100%", height: "500px" }}
                />
            </Modal>
        </>
    );
};

export default CardMovie;
