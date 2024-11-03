// "use client";
// import { useMovieStore } from "../stores/useMovieStore";
// import styles from "./dropDown.module.css";
// import React, { useState } from "react";
// import useSWR from "swr";

// const DropDown = () => {
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

//   const handleGenreFilter = useMovieStore((state) => state.handleGenreFilter);

//   const { data, error } = useSWR(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
//     fetcher
//   );

//   const [selectedGenre, setSelectedGenre] = useState("Pick a genre");

//   const getValue = (genre) => {
//     if (genre.name == selectedGenre) {
//       setSelectedGenre("Pick a genre");
//     } else {
//       setSelectedGenre(genre.name);
//       handleGenreFilter(genre.id);
//     }
//   };

//   return (
//     <div className={styles.dropdown}>
//       <button className={styles.dropbtn}>{selectedGenre}</button>
//       <div className={styles.dropdownContent}>
//         {data?.genres.map((genre) => (
//           <button
//             className={styles.option}
//             key={genre.id}
//             onClick={() => getValue(genre)}>
//             {genre.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DropDown;

//after two css classes
// "use client";
// import { useMovieStore } from "../stores/useMovieStore";
// import styles from "./dropDown.module.css";
// import React, { useState } from "react";
// import useSWR from "swr";

// const DropDown = () => {
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

//   const handleGenreFilter = useMovieStore((state) => state.handleGenreFilter);

//   const { data, error } = useSWR(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
//     fetcher
//   );

//   const [selectedGenre, setSelectedGenre] = useState("Pick a genre");

//   const getValue = (genre) => {
//     if (genre.name == selectedGenre) {
//       setSelectedGenre("Pick a genre");
//     } else {
//       setSelectedGenre(genre.name);
//       handleGenreFilter(genre.id);
//     }
//   };

//   return (
//     <div className={styles.dropdown}>
//       <button className={styles.dropbtn}>{selectedGenre}</button>
//       <div className={styles.dropdownContent}>
//         {data?.genres.map((genre) => (
//           <button
//             className={`${styles.option} ${
//               genre.name == selectedGenre ? styles.clickedOption : ""
//             }`}
//             key={genre.id}
//             onClick={() => getValue(genre)}>
//             {genre.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DropDown;

// "use client";
// import { useMovieStore } from "../stores/useMovieStore";
// import styles from "./dropDown.module.css";
// import React, { useState } from "react";
// import useSWR from "swr";
// import { useSearchParams, useRouter } from "next/navigation";

// const DropDown = () => {
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

//   const handleGenreFilter = useMovieStore((state) => state.handleGenreFilter);

//   const { data, error } = useSWR(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
//     fetcher
//   );

//   const [selectedGenre, setSelectedGenre] = useState("Pick a genre");
//   const searchParams = useSearchParams();
//   const [query, setQuery] = useState("");
//   const router = useRouter(); // Add useRouter to manage navigation

//   const createSearchURL = (term: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//       params.set("genre", term);
//     } else {
//       params.delete("genre");
//     }
//     return `/?${params.toString()}`;
//   };

//   const getValue = (genre) => {
//     if (genre.name == selectedGenre) {
//       setSelectedGenre("Pick a genre");
//     } else {
//       setSelectedGenre(genre.name);
//       handleGenreFilter(genre.id);
//       router.push(createSearchURL(genre.id));
//     }
//   };

//   return (
//     <div className={styles.dropdown}>
//       <button className={styles.dropbtn}>{selectedGenre}</button>
//       <div className={styles.dropdownContent}>
//         {data?.genres.map((genre) => (
//           <button
//             className={`${styles.option} ${
//               genre.name == selectedGenre ? styles.clickedOption : ""
//             }`}
//             key={genre.id}
//             onClick={() => getValue(genre)}>
//             {genre.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DropDown;

"use client";
import styles from "./dropDown.module.css";
import React from "react";

const DropDown = ({ dropDownValues, selectedValue, onDropDownClick }) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>{selectedValue}</button>
      <div className={styles.dropdownContent}>
        {dropDownValues?.map((genre) => (
          <button
            className={`${styles.option} ${
              genre.name == selectedValue ? styles.clickedOption : ""
            }`}
            key={genre.id}
            onClick={() => onDropDownClick(genre)}>
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
