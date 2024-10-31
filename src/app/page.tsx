import Image from "next/image";
import styles from "./page.module.css";
import MovieList from "@/components/list";
import SearchPage from "./search/page";
import SearchMoviesInput from "./search/search-movies-input";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <MovieList />
        </ol>
      </main>
    </div>
  );
}
