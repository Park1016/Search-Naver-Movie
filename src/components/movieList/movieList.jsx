import React, { memo, useEffect, useState } from 'react';
// import { v4 as uuid } from 'uuid';

let movieItems = [];
// let movieItem = [];
const MovieList = memo(({movie}) => {


    return (
        <div>
            <h2>{movie.title.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</h2>
            <h2>{movie.link}</h2>
            <img src={movie.image} />
        </div>
    )
})

export default MovieList;