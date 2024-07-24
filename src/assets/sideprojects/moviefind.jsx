import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import './../css/moviefind.css';

function MovieFind() {
    const [sidePanelVisible, setSidePanelVisible] = useState(false);

    const toggleSidePanel = () => {
        setSidePanelVisible(prevState => !prevState);
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
                        <input type="text" placeholder="Search..." />
                        <button className="search-button-movie">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={`side-panel-movie ${sidePanelVisible ? 'visible' : ''}`}>
                    <div className="side-panel-content">
                        Side Panel Content
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieFind;
