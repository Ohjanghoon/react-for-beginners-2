function MovieDetail({coverImg, title, titleEng, year, rating, genres}){
    return (
        <div>
        <img src={coverImg} alt={title}/>
        <h2>
          {title}
        </h2>
        <h4>
            ({titleEng})
        </h4>
        <p>개봉연도: {year}</p>
        <p>평점: {rating}점</p>
        {genres !== undefined ? (<ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>) : null}
      </div>
    );
}

export default MovieDetail;