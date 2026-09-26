export default function Navbar({ search, setSearch }) {

  return (

    <nav className="navbar">

      <div className="nav-left">

        <h1 className="netflix-logo">
          NETFLIX
        </h1>

        <ul className="nav-links">

          <li>
            <a href="#home">
              Home
            </a>
          </li>

          <li>
            <a href="#movies">
              Movies
            </a>
          </li>

          <li>
            <a href="#series">
              Series
            </a>
          </li>

          <li>
            <a href="#my-list">
              My List
            </a>
          </li>

        </ul>

      </div>


      <div className="nav-right">

        <div className="search-box">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <span className="notification">
          🔔
        </span>

        <div className="profile">
          R
        </div>

      </div>

    </nav>

  )
}