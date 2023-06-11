import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const {data: genres, isLoading} = useGenres();
    const genreSkeleton = [1,2,3,4,5,6,7,8]
  return (
    <List>
        {isLoading && genreSkeleton.map(skeleton => <GenreListSkeleton key={skeleton} />)}
        {genres.map((genre) => <ListItem paddingY={"5px"}>
            <HStack >
                <Image boxSize={"32px"} borderRadius={"8px"} src={getCroppedImageUrl(genre.image_background)} />
                <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList