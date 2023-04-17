import iconoBookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import iconoMovie from "../assets/images/icon-category-movie.svg";

interface baseProps {
    anio: string;
    media_type: string;
    title: string;
    url_img: string | null;
}

const CardMovie = ({ anio, media_type, title, url_img }: baseProps) => {
    const API_TMDB_URL = import.meta.env.VITE_API_TMDB_URL;
    const url =
        url_img !== null
            ? `https://image.tmdb.org/t/p/original${url_img}`
            : "https://static.euronews.com/articles/stories/07/31/01/20/606x758_cmsv2_dfdbec3d-af7a-5e75-9ae7-2ec0188cbf9a-7310120.jpg";
    return (
        <div className="container-card-movie">
            <div className="container-card-movie__image">
                <div className="image__icon">
                    <img
                        src={iconoBookmarkEmpty}
                        alt=""
                        className="image__icon__iconoBookmarkEmpty"
                    />
                </div>
                <img
                    src={url}
                    alt=""
                    className="image__photo"
                />
            </div>
            <div className="container-card-movie__information">
                <span className="information__anio">{anio}</span>
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
    );
};

export default CardMovie;
