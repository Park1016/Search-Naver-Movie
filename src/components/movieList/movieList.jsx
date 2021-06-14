import React, { memo, useEffect, useState } from 'react';
import styles from './movieList.module.css';

const MovieList = memo(({movie}) => {

    return (
        <div>
            <h2>{movie.title.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</h2>
            <h2>{movie.link}</h2>
            <img src={movie.image} />
            <h3>{movie.subtitle}</h3>
            <h3>{movie.director}</h3>
            <h3>{movie.actor}</h3>
            <h3>{movie.userRating}</h3>
        </div>
    )
})

export default MovieList;