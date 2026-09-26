export default function MovieCard({ movie }) {

  return (

    <div className="movie-card">

      <div className="movie-image">

        <img
          src={movie.image}
          alt={movie.title}
        />

        <div className="movie-overlay">

          <button className="play-button">
            ▶
          </button>

          <button className="add-button">
            +
          </button>

        </div>

        <div className="rating">
          ⭐ {movie.rating}
        </div>

      </div>


      <div className="movie-info">

        <h3>
          {movie.title}
        </h3>

        <div>

          <span>
            {movie.year}
          </span>

          <span>
            {movie.type}
          </span>

          <span>
            HD
          </span>

        </div>

      </div>

    </div>

  )
}