import { useEffect, useState } from "react";
import iconoBookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import iconoMovie from "../assets/images/icon-category-movie.svg";
import { MovieModel, TVSerieModel } from "../types";
import MovieVideoDetailModel from "../types/models/MovieVideoDetailModel";
import { useBookMarList } from "../context/BookmarkListContext";
import Modal from "./modal/modal";
import useGetMovieDetail from "../hooks/useGetMovieDetail";
import { Boton, Contenido } from "./modal/estilos";
import YouTube from "react-youtube";

interface baseProps {
    anio: string;
    media_type: string;
    title: string;
    url_img: string;
    item: MovieModel | TVSerieModel;
}

interface IHoursAndMin {
    hours: number;
    minutes: number;
}

const CardTrending = ({ anio, media_type, title, url_img, item }: baseProps) => {
    const [showModal, setShowModal] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false);
    const [duracion, setDuracion] = useState<IHoursAndMin>();
    const [trailer, setTrailer] = useState<MovieVideoDetailModel>();

    const { data, isSuccess } = useGetMovieDetail(showModal ? item.id : 0);

    const { list, setList } = useBookMarList();

    const marcarPelicula = () => {
        const itemEncontrado = list?.find((movie) => movie.id === item.id);
        if (typeof itemEncontrado === "undefined") {
            list?.push(item);
        } else {
            const newList = list?.filter((movie) => movie.id !== item.id);
            setList?.(newList ?? []);
        }
    };
    
    return (
        <>
            <div
                className="container-card-trending"
                style={{ backgroundImage: url_img }}
                onClick={() => setShowModal(true)}
            >
                <div className="container-card-trending__icon" onClick={marcarPelicula}>
                    <img src={iconoBookmarkEmpty} alt="" />
                </div>
                <div className="container-card-trending__information">
                    <div className="information__detail">
                        <div className="informacion__detail__anio-type">
                            <span className="detail__anio-type__anio">{anio?.substring(0, 4)}</span>
                            <span className="detail__anio-type__type">
                                <img src={iconoMovie} alt="" />
                                <span>{media_type}</span>
                            </span>
                        </div>
                        <div className="information__detail__title">
                            <span>{title}</span>
                        </div>
                    </div>
                    <div className="information__category">
                        <span>PG</span>
                    </div>
                </div>
            </div>

            <Modal
                padding="20px"
                titulo={`${data?.title}`}
                anio={`(${data?.release_date?.substring(
                    0,
                    4
                )})`}
                mostrarHeader={true}
                showModal={showModal}
                setShowModal={setShowModal}
                imagen={
                    showModal
                        ? `https://image.tmdb.org/t/p/original${
                              data?.belongs_to_collection?.backdrop_path ??
                              data?.poster_path
                          }`
                        : ""
                }
            >
                <Contenido>
                    <div className="contenido__generos">
                        {(data?.genres?.length ?? 0) > 0 &&
                            data?.genres.map((genre, index) =>
                                index !== data?.genres?.length - 1 ? (
                                    <span>{genre.name}, </span>
                                ) : (
                                    <span>{genre.name}</span>
                                )
                            )}
                        <span>
                            {" "}
                            . {duracion?.hours}h {duracion?.minutes}m
                        </span>
                    </div>
                    <div className="contenido__tagline">
                        <span>{data?.tagline}</span>
                    </div>
                    <div className="contenido__overview">
                        <span className="contenido__overview__caption">Overview</span>
                        <span className="contenido__overview__paragraph">{data?.overview}</span>
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

            <Modal
                padding="0px"
                showModal={showTrailer}
                setShowModal={setShowTrailer}
                titulo="Trailer"
                mostrarHeader={false}
                imagen=""
                anio=""
            >
                <YouTube videoId={trailer?.key} opts={{width: "100%", height: "200px"}} />
            </Modal>
        </>
    );
};

export default CardTrending;
