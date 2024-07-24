import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import './../css/moviefind.css';

function MovieFind() {
    const [sidePanelVisible, setSidePanelVisible] = useState(false);
    const [genres, setGenres] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [topWatchedMovies, setTopWatchedMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [noResultsMessage, setNoResultsMessage] = useState('');

    const toggleSidePanel = () => {
        setSidePanelVisible(prevState => !prevState);
    };

    const fetchMovies = async (query = '') => {
        const API_KEY = import.meta.env.VITE_TMDb_API_KEY;
        const url = query 
            ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (query) {
                if (data.results.length > 0) {
                    let sortedResults = data.results;
                    if (query) {
                        // Sort by rating (highest to lowest)
                        sortedResults = sortedResults.sort((a, b) => b.vote_average - a.vote_average);
                    }
                    setSearchResults(sortedResults);
                    setNoResultsMessage('');
                } else {
                    setSearchResults([]);
                    setNoResultsMessage(`No results found for "${query}"`);
                }
            } else {
                setLatestMovies(data.results);
            }
        } catch (error) {
            console.error("Error fetching movies", error);
        }
    };

    useEffect(() => {
        const fetchGenres = async () => {
            const API_KEY = import.meta.env.VITE_TMDb_API_KEY;
            const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error("Error fetching genres", error);
            }
        };

        const fetchTopWatchedMovies = async () => {
            const API_KEY = import.meta.env.VITE_TMDb_API_KEY;
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setTopWatchedMovies(data.results);
            } catch (error) {
                console.error("Error fetching top watched movies", error);
            }
        };

        fetchGenres();
        fetchMovies(); // Fetch latest movies by default
        fetchTopWatchedMovies();
    }, []);

    const handleSearch = () => {
        fetchMovies(searchQuery);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className="navbar">
                <Link to="/" className="home-button">Home</Link>
            </div>
            <h1>Movie Finds</h1>
            <div className="moviefind-container">
                <div className="movie-navbar">
                    <button className="toggle-button-movie" onClick={toggleSidePanel}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="search-bar-movie">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <button className="search-button-movie" onClick={handleSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={`side-panel-movie ${sidePanelVisible ? 'visible' : ''}`}>
                    <div className="side-panel-content">
                        <h3 style={{ fontWeight: "800", fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
                            Movie Categories
                        </h3>
                        <ul className="genre-list">
                            {genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {searchQuery ? (
                    <div className="search-results-section">
                        <h2 className="latest-movies-title">
                            Search Results for "{searchQuery}"
                        </h2>
                        {noResultsMessage ? (
                            <p>{noResultsMessage}</p>
                        ) : (
                            <div className="latest-movies">
                                {searchResults.map(movie => (
                                    <div key={movie.id} className="movie-tile">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                        <h4>{movie.title}</h4>
                                        <p className="movie-rating">Rating: {movie.vote_average.toFixed(1)}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="latest-movies-section">
                            <h2 className="latest-movies-title">Latest Movies Release</h2>
                            <div className="latest-movies">
                                {latestMovies.map(movie => (
                                    <div key={movie.id} className="movie-tile">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                        <h4>{movie.title}</h4>
                                        <p className="movie-rating">Rating: {movie.vote_average.toFixed(1)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="top-watched-section">
                            <h2 className="top-watched-title">Top Watched Movies</h2>
                            <div className="top-watched-movies">
                                {topWatchedMovies.map(movie => (
                                    <div key={movie.id} className="movie-tile">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                        <h4>{movie.title}</h4>
                                        <p className="movie-rating">Rating: {movie.vote_average.toFixed(1)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default MovieFind;
