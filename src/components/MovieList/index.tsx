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
  initialMovies,
  title,
}: {
  initialMovies: Movie[];
  title: string;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 6;

  const totalPages = Math.ceil(initialMovies?.length / moviesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const displayedMovies = initialMovies?.slice(
    currentPage * moviesPerPage,
    (currentPage + 1) * moviesPerPage
  );

  return (
    <>
      <div className={styles.title}> {title}</div>
      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowButton}
          onClick={handlePrevious}
          disabled={currentPage === 0}>
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
          disabled={currentPage === totalPages - 1}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}
