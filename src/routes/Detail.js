import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetail from "../components/MovieDetatil";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    const getMovies = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
            <MovieDetail 
                key={movie.id}
                coverImg={movie.large_cover_image}
                title={movie.title}
                titleEng={movie.title_english}
                year={movie.year}
                rating={movie.rating}
                genres={movie.genres}
            />
            )}
        </div>
    );
}

export default Detail;