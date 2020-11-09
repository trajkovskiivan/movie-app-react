import React from 'react';

import './Slider.scss'

const Slider = (props) => {
    console.log(props)
    if (!props.data) {
        return null
    }
    const {genres} = props;
    const {results} = props.data
    console.log(genres)
    console.log(results[0])
    let randomNum = Math.floor(Math.random() * 20);

    // const sliderMovie = results[randomNum]
    const sliderMovie = results[0]
    console.log(randomNum)
    console.log(sliderMovie)
    let conditionalTitle = sliderMovie.original_language !== "en" ? "" : <p>{sliderMovie.original_title}</p>


    return (
        <div className="slider">
            <div className="slider-data">
                <div className='slider-movie-info'>
                    <p className="movie-title">{sliderMovie.title}</p>
                    {sliderMovie.original_language !== "en" ? <p>{sliderMovie.original_title}</p> : ""}
                </div>
                <div className='slider-image-info'>
                    <img src={`https://image.tmdb.org/t/p/w185/${sliderMovie.poster_path}`} alt="" />
                </div>
            </div>


        </div>
    );

}

export default Slider;