import React from 'react';
import './Main.scss'


const Main = (props) => {
    // console.log(props)
    if (!props.data) {
        return null
    }
    const {results} = props.data
    // console.log(results[0])
    return (
        <div className="main">
            {/* <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="" />
                {results[0].title}
            </div> */}
            {
                results.map(el => {
                    // console.log(el.popularity)
                    return <div className="movie-card" key={el.title}>
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w185/${el.poster_path}`} alt="" />
                        <p className="movie-title">{el.title}</p>
                        {el.genre_ids.map((gen, index) => <span key={index}>{`${gen} `}</span>, 2)}
                    </div>
                })
            }

        </div>
    );
}

export default Main;

