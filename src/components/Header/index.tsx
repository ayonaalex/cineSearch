"use client";

import styles from "./Header.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import SearchMoviesInput from "@/app/search/search-movies-input";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>
          MovieB
          <FaCirclePlay size={18} fill={"#E50914"} />
          <FaCirclePlay size={18} fill={"#fff"} />k
        </div>
        <div className={styles.navigationBar}>
          <div>Home</div>
          <div>Movies</div>
          <div>Series</div>
          <div>Favorites</div>
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <SearchMoviesInput />
      </div>
    </div>
  );
};

export default Header;
