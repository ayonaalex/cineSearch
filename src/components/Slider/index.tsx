"use client";
import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { FaChevronLeft, FaChevronRight, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/movie";

const Slider = ({ initialMovies }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalPages = 5;

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  //   Auto-slide every 3 seconds if not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className={styles.carouselWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <button
        className={styles.arrowButton}
        onClick={handlePrevious}
        disabled={currentPage === 0}>
        <FaChevronLeft />
      </button>
      <div className={styles.sliderContainer}>
        <div className={styles.listWrapper}>
          {initialMovies?.map((movie) => (
            <Link
              href={`/moviePage/${movie.id}`}
              key={movie.id}
              className={styles.link}>
              <div
                className={styles.imageWrapper}
                key={movie.id}
                style={{
                  transform: `translateX(-${currentPage * 100}%)`,
                }}>
                <Image
                  height={513}
                  width={342}
                  alt={movie.title || "Movie backdrop"}
                  className={styles.responsiveImage}
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                />
                <div className={styles.titleCard}>
                  Rating: {movie.vote_average.toFixed(2)}{" "}
                  <FaRegStar size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button
        className={styles.arrowButton}
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
