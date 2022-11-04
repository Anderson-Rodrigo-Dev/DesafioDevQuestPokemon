import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  console.log(search)
  const handleSearch = (e) => {
    e.preventDefault();

    searchPokemon();
  };

  const searchPokemon = async () => {
    const name = search.toLowerCase()

    console.log(name)

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await fetch(url);

    if (res.status !== 404) {
      navigate(`/pokemon/${name}`);
    } else {
      navigate("/Error_404");
    }

    setSearch("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        style={{ width: "300px", height: "30px", fontSize: "2rem" }}
        type="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
};

export default Search;
