"use client";
import React, { useState } from "react";
import MovieCard from "../../components/MovieCard/index";
import styles from "./Movielist.module.css";
import { FaChevronLeft, FaChevronRight, FaRegStar } from "react-icons/fa";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  popularity: number;
}

export default function MovieList({
  initialMovies = [],
  title,
}: {
  initialMovies?: Movie[];
  title: string;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 6;

  const totalMovies = initialMovies?.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedMovies = [...initialMovies, ...initialMovies].slice(
    currentPage * moviesPerPage,
    (currentPage + 1) * moviesPerPage
  );

  return (
    <div className={styles.wraper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowButton}
          onClick={handlePrevious}
          disabled={totalPages === 1}>
          <FaChevronLeft />
        </button>
        <div className={styles.listWrapper}>
          {displayedMovies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <button
          className={styles.arrowButton}
          onClick={handleNext}
          disabled={totalPages === 1}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
