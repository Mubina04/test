// import { useEffect, useState } from "react";

import useGames from "../hooks/useGames";

// import apiClient from "../services/api-client";
const GameGrid = () => {
  // first understand
  // const [games, setGames] = useState([]);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   apiClient
  //     .get("/games")
  //     .then((res) => setGames(res.data.results))
  //     .catch((err) => setError(err.message));
  // });
  const { games, error } = useGames();
  return (
    <>
      {error && <p color="red">{error}</p>}
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
};

export default GameGrid;
