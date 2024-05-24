// import { useEffect, useState } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  {
    error && <Text color="red">{error}</Text>;
  }
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => {
          return <GameCardSkeleton key={skeleton} />;
        })}
      {games.map((game) => {
        return <GameCard game={game} key={game.id} />;
      })}
    </SimpleGrid>
  );
};

export default GameGrid;
