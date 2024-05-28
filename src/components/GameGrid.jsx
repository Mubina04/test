/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = ({ selectedGenre }) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  {
    error && <Text color="red">{error}</Text>;
  }
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => {
          return (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          );
        })}
      {data.map((game) => {
        return (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        );
      })}
    </SimpleGrid>
  );
};

export default GameGrid;
