import { useEffect } from "react";
import iconoBookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";
import iconoMovie from "../assets/images/icon-category-movie.svg";

interface baseProps {
    anio: string;
    media_type: string;
    title: string;
    url_img: string;
}

const CardTrending = ({ anio, media_type, title, url_img }: baseProps) => {
    return (
        <div
            className="container-card-trending"
            style={{ backgroundImage: url_img }}
        >
            <div className="container-card-trending__icon">
                <img src={iconoBookmarkEmpty} alt="" />
            </div>
            <div className="container-card-trending__information">
                <div className="information__detail">
                    <div className="informacion__detail__anio-type">
                        <span className="detail__anio-type__anio">{anio}</span>
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
    );
};

export default CardTrending;
