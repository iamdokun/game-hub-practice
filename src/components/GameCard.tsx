import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/gamesHooks'
import PlatformIcons from './PlatformIcons'
import Criticsocre from './Criticsocre'

interface GameCardProps {
    game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card overflow={'hidden'} borderRadius={10}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)} />
            <Criticsocre score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard