import React, { memo, useEffect, useState } from 'react';
import styles from './movieList.module.css';

const MovieList = memo(({movie}) => {

    return (
        <ul className={styles.content}>            
            <li>
                <img className={styles.poster} src={movie.image} alt="해당 영화의 포스터가 없습니다"
                onError={(e)=>{e.target.onerror = null; e.target.src="/image/noMoviePoster.png"}}
                />
            </li>
            <li className={styles.title}>{movie.title.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
            <li className={styles.date}>{movie.pubDate}</li>
            {/* <li>{movie.subtitle.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
            <li>{movie.director}</li>
            <li>{movie.actor}</li>
            <li>{movie.userRating}</li>
            <li>
                <a href={movie.link} target='_blank'>링크</a>
            </li> */}
        </ul>
    )
})

export default MovieList;