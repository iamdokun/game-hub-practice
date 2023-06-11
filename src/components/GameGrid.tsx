import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/gamesHooks"
import GameCard from "../components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const {games, error, isLoading} = useGame();
  const Skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={10}>
        {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton}/>)}
        {games?.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
