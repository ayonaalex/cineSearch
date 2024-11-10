"use client";
import DropDown from "../DropDown/index";
import useSWR from "swr";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./Filter.module.css";

export type TGenre = {
  id: number;
  name: string;
};

const Filters = () => {
  const [selectedGenreValue, setSelecteGenreValue] = useState("Genre");

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const { data } = useSWR(
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

  const onGenreDropDownClick = (genre: TGenre) => {
    if (genre.name == selectedGenreValue) {
      setSelecteGenreValue("Genre");
      router.push("/");
    } else {
      setSelecteGenreValue(genre.name);
      router.push(createSearchURL(String(genre.id), "genre"));
    }
  };

  return (
    <div className={styles.wrapper}>
      <DropDown
        dropDownValues={data?.genres}
        selectedValue={selectedGenreValue}
        onDropDownClick={onGenreDropDownClick}
      />
    </div>
  );
};

export default Filters;
