"use client";
import React from "react";
import { FiHeart } from "react-icons/fi";
import styles from "./FavButton.module.css";
import { useMovieStore } from "../../stores/useMovieStore";

interface Movie {
  id: number;
  title: string;
  popularity: number;
}

const FavoriteButton = ({ movie }: { movie: Movie }) => {
  const favorites = useMovieStore((state) => state.favorites);
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavorite(movie);
  };

  return (
    <button onClick={handleClick} className={styles.favButton}>
      <FiHeart
        fill={isFavorite ? "red" : "none"}
        className={`${styles.heartIcon} ${isFavorite ? styles.filled : ""}`}
      />
    </button>
  );
};

export default FavoriteButton;
