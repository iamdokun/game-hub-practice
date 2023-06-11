import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {data: genres} = useGenres()
  return (
    <div>
        {genres.map((genre) => <li>{genre.name}</li>)}
    </div>
  )
}

export default GenreList