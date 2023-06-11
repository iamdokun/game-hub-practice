import { CardBody, Center, HStack, ListItem, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"

const GenreListSkeleton = () => {
  return (
    <ListItem>
       <Skeleton />
       <HStack >
       <SkeletonCircle boxSize={"32px"} />
        <SkeletonText  />
       </HStack>
        
        
    </ListItem>
  )
}

export default GenreListSkeleton