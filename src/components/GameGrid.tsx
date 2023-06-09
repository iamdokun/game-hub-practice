import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "../components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGame();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={Skeleton} />
            </GameCardContainer>
          ))}
        {games?.map((game) => {
          return (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
