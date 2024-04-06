import React from 'react'
/* import of router hooks*/
import{useParams,useNavigate} from 'react-router-dom'
import './movieCard.css';


        /* use router hook to navigate and insert the details component*/
const Details = ({movie}) => {
        /* useNavigate to navigate to the initial route (back)*/
    const navigate = useNavigate();
        /* useParams to insert the trailer and description for the id from movie*/
    const {id} = useParams();
    const selectedMovie = movie.find((m) => m.id.toString() === id);
    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }

        return (
    <div>
        <h2 className='titledetails' style={{color:'red', fontWeight:'bolder', fontStyle:'italic'}}>{selectedMovie.title}</h2>
    <p className='descriptiondetails' style={{fontSize:'17px'}}>{selectedMovie.description}</p>
    <iframe
        title="trailer"
        width="590"
        height="415"
        src={`https://www.youtube.com/embed/${selectedMovie.trailer.split('v=')[1]}`}
        allowFullScreen
    ></iframe>
        <h3 class="d-2 buttonback" onClick={() =>navigate('/')}>BACK HOME</h3>
    </div>
    )
}

export default Details
