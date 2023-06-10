import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/gamesHooks'

interface GameCardProps {
    game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card overflow={'hidden'} borderRadius={10}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard