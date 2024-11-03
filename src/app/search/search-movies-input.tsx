"use client";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./search.module.css";

export default function SearchMoviesInput({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = useDebouncedCallback((term) => {
    setDebouncedQuery(term);
  }, 300);

  const createSearchURL = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    return `/search?${params.toString()}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(newQuery);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && debouncedQuery) {
      startTransition(() => {
        router.push(createSearchURL(debouncedQuery));
      });
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="search"
        placeholder="Search movies..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        aria-label="Search for movies"
        className={`${styles.searchInput} ${isVisible ? styles.show : ""}`}
      />
      <button
        className={styles.searchButton}
        onClick={() => {
          setIsVisible(!isVisible);
          setQuery("");
        }}>
        <IoSearchOutline color="white" size={25} />
      </button>
    </div>
  );
}
