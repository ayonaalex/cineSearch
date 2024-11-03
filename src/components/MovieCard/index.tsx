"use client";
import FavoriteButton from "../favButton";
import styles from "./MovieCard.module.css";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          height={290}
          width={270}
          alt={movie.title || "Movie backdrop"}
          className={styles.responsiveImage}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
      </div>
      <div className={styles.heading}>
        <p>{movie.title}</p>
      </div>
      <div className={styles.favcnt}>
        <div>
          Rating: {movie.vote_average.toFixed(2)} <FaRegStar size={13} />
        </div>
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
