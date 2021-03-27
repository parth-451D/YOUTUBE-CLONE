import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/video.action";
import "./_categories.scss";

const keywords = [
  "All",
  "Bruno Mars",
  "React js",
  "Coding",
  "Ed sheeran",
  "Jaden Smith",
  "Music",
  "Graffity",
  "Games",
  "Crafting",
  "Coding",
  "Cricket",
  "Football",
  "Lofi music",
  "Naruto",
  "Playlists",
  "Jujutsu kaisen",
];

const Categories = (value) => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value)
    if (value === "All") {
      dispatch(getPopularVideos())
    } else {
      dispatch(getVideosByCategory(value))
    }
  }

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categories
