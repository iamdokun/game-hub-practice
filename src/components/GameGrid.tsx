import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/gamesHooks"
import GameCard from "../components/GameCard";


const GameGrid = () => {
  const {games, error} = useGame()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={10}>
        {games?.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
