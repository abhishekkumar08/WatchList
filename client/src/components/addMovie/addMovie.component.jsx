import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getGenresQuery, addMovieMutation } from "../../queries/queries";
import "../../App.css";

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
  const [addMovie] = useMutation(addMovieMutation);
  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, genre);
    addMovie({
      variables: {
        title,
        genre,
        description,
      },
    });
  };

  return (
    <div className="container">
    <form id="add-title" onSubmit={handleSubmit}>
      <div className="field">
        <label>Movie Name:</label>
        <input className= "inp"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Description:</label>
        <input className= "inp"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <select  className= "inp" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Select Genre</option>
          {displayGenres(loading, data)}
        </select>
      </div>
      <div className="field">
        <label></label>
      <button className= "btn">Add</button>
      </div>
    </form>
    </div>
  );
};

export default AddMovie;
