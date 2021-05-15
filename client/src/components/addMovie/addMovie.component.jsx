import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getGenresQuery } from "../queries/queries";

const displayGenres = (loading, data) => {
  if (loading) {
    return <option disabled>Loading genres</option>;
  } else {
    return data.genres.map((genre) => {
      return (
        <option key={genre.id} value={genre.id}>
          {genre.genre}
        </option>
      );
    });
  }
};

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const { loading, data } = useQuery(getGenresQuery);
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, genre, description);
  };

  return (
    <form id="add-title" onSubmit={handleSubmit}>
      <div className="field">
        <label>Movie Name:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Select Genre</option>
          {displayGenres(loading, data)}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddMovie;
