// import { useEffect, useState } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  {
    error && <Text color="red">{error}</Text>;
  }
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >
      {games.map((game) => {
        return <GameCard game={game} key={game.id} />;
      })}
    </SimpleGrid>
  );
};

export default GameGrid;
