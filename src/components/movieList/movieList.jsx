import React, { memo, useEffect, useState } from 'react';
import styles from './movieList.module.css';

const MovieList = memo(({movie}) => {

    console.log(movie.image);
    return (
        <ul className={styles.content}>            
            <li>
                <img className={styles.poster} src={movie.image} alt="해당 영화의 포스터가 없습니다"
                onerror="https://picsum.photos/id/237/200/300"
                />
            </li>
            {/* <img src="" alt="zzz"></img> */}
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