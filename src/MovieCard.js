import React from 'react'
import './movieCard.css';
import './App.css';
import StarRating from './StarRating';
import {Link} from 'react-router-dom'


/* insert prop for (the movie) in the card  */
/* use link router to link for id for movie */
function MovieCard({movie}) {
    return (
    <div className='main'>
    <div class = "card">
    <img src={movie.poster} alt=" photos"/>
    <div class="card-content">
        <h2>
        {movie.title}
        <StarRating value={movie.rating}  filterRate={() => {}}/>
        </h2>
        <p>
        <Link to={`/details/${movie.id}`} className='trailerclass'>MORE D'ETAILS</Link>
        </p>
        
    </div>
    </div>
    </div>
    )
}

export default MovieCard
