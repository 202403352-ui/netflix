import { useState } from 'react'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import './App.css'

const movies = [
  {
    id: 1,
    title: 'The Dark Knight',
    year: '2008',
    type: 'Movie',
    rating: '9.0',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Interstellar',
    year: '2014',
    type: 'Movie',
    rating: '8.7',
    image:
      'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'The Last Kingdom',
    year: '2015',
    type: 'Series',
    rating: '8.5',
    image:
      'https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'The Adventure',
    year: '2023',
    type: 'Movie',
    rating: '8.2',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Stranger World',
    year: '2022',
    type: 'Series',
    rating: '8.4',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Into The Wild',
    year: '2020',
    type: 'Movie',
    rating: '8.1',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    title: 'The City',
    year: '2024',
    type: 'Movie',
    rating: '8.6',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    title: 'Night Story',
    year: '2023',
    type: 'Series',
    rating: '8.3',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      movie.type === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="netflix-app">

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-small">
            NETFLIX ORIGINAL
          </p>

          <h1>
            STRANGER
            <br />
            THINGS
          </h1>

          <div className="hero-info">

            <span>2026</span>

            <span>16+</span>

            <span>5 Seasons</span>

            <span>HD</span>

          </div>

          <p className="hero-description">
            When strange events begin happening in a small town,
            a group of friends discovers a secret world filled
            with mystery, adventure and danger.
          </p>

          <div className="hero-buttons">

            <button className="watch-btn">
              ▶ Watch Now
            </button>

            <button className="more-btn">
              ⓘ More Info
            </button>

          </div>

        </div>

      </section>


      {/* MAIN CONTENT */}

      <main className="content">

        {/* CATEGORY */}

        <div className="categories">

          <button
            className={
              selectedCategory === 'All'
                ? 'category active'
                : 'category'
            }
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>

          <button
            className={
              selectedCategory === 'Movie'
                ? 'category active'
                : 'category'
            }
            onClick={() => setSelectedCategory('Movie')}
          >
            Movies
          </button>

          <button
            className={
              selectedCategory === 'Series'
                ? 'category active'
                : 'category'
            }
            onClick={() => setSelectedCategory('Series')}
          >
            Series
          </button>

        </div>


        {/* TRENDING */}

        <section className="movie-section">

          <div className="section-heading">

            <h2>
              Trending Now
            </h2>

            <span>
              See All →
            </span>

          </div>

          <div className="movie-grid">

            {filteredMovies.slice(0, 4).map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))}

          </div>

        </section>


        {/* POPULAR */}

        <section className="movie-section">

          <div className="section-heading">

            <h2>
              Popular on Netflix
            </h2>

            <span>
              See All →
            </span>

          </div>

          <div className="movie-grid">

            {filteredMovies.slice(4, 8).map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))}

          </div>

        </section>


        {/* ALL */}

        {search && (

          <section className="movie-section">

            <div className="section-heading">

              <h2>
                Search Results
              </h2>

            </div>

            {filteredMovies.length > 0 ? (

              <div className="movie-grid">

                {filteredMovies.map((movie) => (

                  <MovieCard
                    key={movie.id}
                    movie={movie}
                  />

                ))}

              </div>

            ) : (

              <p className="no-results">
                No movies found.
              </p>

            )}

          </section>

        )}

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <h2>NETFLIX</h2>

        <p>
          Questions? Contact us.
        </p>

        <div className="footer-links">

          <span>FAQ</span>
          <span>Help Center</span>
          <span>Account</span>
          <span>Media Center</span>

        </div>

        <p className="copyright">
          © 2026 Netflix Clone. Built with React.
        </p>

      </footer>

    </div>
  )
}

export default App