import {FC, useState} from "react";

import {IGenre} from "../../interfaces/GenreInterface";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/movieSlice";
import {IMovie} from "../../interfaces/moviesInterface";
import {MoviesListCard} from "../MovieContainer/MoviesListCard";

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const [movies, setMovies] = useState<IMovie[]>([])

    const searchMovie = async ()=>{
   const result = await  dispatch(moviesActions.getByGenre({genreId:genre.id,page:1})).unwrap();
   setMovies(result.results)};
    // const getMovie = dispatch(moviesActions.getAll(1)).unwrap()
    // return getMovie



    return (
        <div >
            <button onClick={searchMovie}>{genre.name}</button>
            <div>
                {
                    movies.map(movie =><div key={movie.id}>
                        {
                            <MoviesListCard movie={movie}/>
                        }
                    </div>)
                }
            </div>

        </div>

    )}
export {Genre};
