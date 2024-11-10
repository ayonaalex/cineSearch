"use client";
import styles from "./DropDown.module.css";
import React from "react";

export type TGenre = {
  id: number;
  name: string;
};

export type TDropDownProps = {
  dropDownValues: TGenre[];
  selectedValue: string;
  onDropDownClick: (genre: TGenre) => void;
};

const DropDown = ({
  dropDownValues,
  selectedValue,
  onDropDownClick,
}: TDropDownProps) => {
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
