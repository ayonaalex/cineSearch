"use client";
import DropDown from "../DropDown/index";
import useSWR from "swr";
import { useMovieStore } from "../../stores/useMovieStore";
import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import styles from "./Filter.module.css";

const Filters = () => {
  const [selectedGenreValue, setSelecteGenreValue] = useState("Genre");
  const [selectedRatingValue, setSelecteRatingValue] =
    useState("Pick a rating");
  const ratings = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "10" },
  ];

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const handleGenreFilter = useMovieStore((state) => state.handleGenreFilter);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
    fetcher
  );

  const searchParams = useSearchParams();
  const router = useRouter();

  const createSearchURL = (term: string, query: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(`${query}`, term);
    } else {
      params.delete(`${query}`);
    }
    return `/filter?${params.toString()}`;
  };

  const onGenreDropDownClick = (genre) => {
    if (genre.name == selectedGenreValue) {
      setSelecteGenreValue("Genre");
      router.push("/");
    } else {
      setSelecteGenreValue(genre.name);
      router.push(createSearchURL(genre.id, "genre"));
    }
  };

  // const onRatingDropDownClick = (genre) => {
  //   if (genre.name == selectedRatingValue) {
  //     setSelecteRatingValue("Rating");
  //     router.push(createSearchURL("", "rating"));
  //   } else {
  //     setSelecteRatingValue(genre.name);
  //     router.push(createSearchURL(genre.id, "rating"));
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      <DropDown
        dropDownValues={data?.genres}
        selectedValue={selectedGenreValue}
        onDropDownClick={onGenreDropDownClick}
      />
      {/* <DropDown
        dropDownValues={ratings}
        selectedValue={selectedRatingValue}
        onDropDownClick={onRatingDropDownClick}
      /> */}
    </div>
  );
};

export default Filters;
