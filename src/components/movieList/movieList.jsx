import React, { memo, useEffect, useState } from 'react';
import styles from './movieList.module.css';

const MovieList = memo(({movie}) => {

    return (
        <ul className={styles.content}>
            <li>{movie.title.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
            <li>
                <img src={movie.image} alt="해당 영화의 포스터가 없습니다"/>
            </li>
            <li>{movie.subtitle.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
            <li>{movie.pubDate}</li>
            <li>{movie.director}</li>
            <li>{movie.actor}</li>
            <li>{movie.userRating}</li>
            <li>
                <a href={movie.link} target='_blank'>링크</a>
            </li>
        </ul>
    )
})

export default MovieList;