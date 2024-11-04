"use client";

import styles from "./Header.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import SearchMoviesInput from "@/app/search/search-movies-input";
import Link from "next/link";
import Filters from "../Filters/Index";

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
          <Link href={`/`} className={styles.link}>
            Home
          </Link>
          <div>
            <Link href={`/favourites/`} className={styles.link}>
              Favorites
            </Link>
          </div>
          <div>
            <Filters />
          </div>
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <SearchMoviesInput />
      </div>
    </div>
  );
};

export default Header;
