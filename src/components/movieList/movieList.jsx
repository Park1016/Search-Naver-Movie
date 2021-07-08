import React, { memo, useRef } from 'react';
import styles from './movieList.module.css';
import './movieList.css';

const MovieList = memo(({movie}) => {
    const modal = useRef();
    const content = useRef();

    let image;
    let title;
    let date;
    let subTitle;
    let director;
    let actor;
    let userRating;
    let link;


    const onClick = (e) => {
        const target = e.target.parentElement.parentElement.parentElement.parentElement;

        image = target.childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute('src');
        title = target.childNodes[1].textContent;
        date = target.childNodes[2].textContent;
        subTitle = target.childNodes[3].textContent;
        director =target.childNodes[4].textContent;
        actor = target.childNodes[5].textContent;
        userRating = target.childNodes[6].textContent;
        link = target.childNodes[7].childNodes[0].getAttribute('href');

        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].setAttribute('src', image);
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent = title;
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].textContent = date;
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2].textContent = subTitle;
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[3].textContent = `감독 : ${director}`;
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[4].textContent = `배우 : ${actor}`;
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[5].setAttribute("class", "fa fa-star");
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[5].textContent = ` ${userRating}`;
        modal.current.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[6].childNodes[0].setAttribute('href', link);
        modal.current.childNodes[0].style.backgroundImage = `url("${image}")`;
        modal.current.style.display = 'block';
    }

    const onHideModal = () => {
        modal.current.style.display = 'none';
    }

    return (
        <>
            <section ref={modal} className={styles.modalBack}>
                <div className={styles.modal}>
                    <div className={styles.modalBlur}>
                        <ul className={styles.modalContents}>
                            <li>
                                <img className={styles.mPoster} alt="해당 영화의 포스터가 없습니다"
                                onError={(e)=>{e.target.onerror = null; e.target.src="/image/noMoviePoster.png"}}
                                />
                            </li>
                            <li>
                                <ul className={styles.mTexts}>
                                    <li className={styles.mTitle}></li>
                                    <li className={styles.mDate}></li>
                                    <li className={styles.mSubTitle}></li>
                                    <li className={styles.mDirector}></li>
                                    <li className={styles.mActor}></li>
                                    <li className={styles.mUserRating}></li>
                                    <li className={styles.mLink}>
                                        <a className={styles.mLinkText} target='_blank'>링크</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* <i onClick={onHideModal} className="fas fa-window-close"></i> */}
                    <button className={styles.button} onClick={onHideModal}>확인
                        <button className={styles.line}></button>
                    </button>
                </div>
            </section>

            <ul ref={content} className={styles.content}>     
                <li>
                    <div className={styles.posterBack} style={{backgroundImage:`url("${movie.image}")`}}>
                        <div className={styles.posterBlur}>
                            <img className={styles.poster} src={movie.image} alt="해당 영화의 포스터가 없습니다"
                            onError={(e)=>{e.target.onerror = null; e.target.src="/image/noMoviePoster.png"}}
                            onClick={e=>onClick(e)} title={'상세보기'}/>
                        </div>
                    </div>
                </li>
                <li className={styles.title}>{movie.title.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
                <li className={styles.date}>{movie.pubDate}</li>
                <li className={styles.none}>{movie.subtitle.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
                <li className={styles.none}>{movie.director.replace(/\|/gi,'')}</li>
                <li className={styles.none}>{movie.actor.replace(/\|/gi,', ').replace(/,\s*$/gi, "")}</li>
                <li className={styles.none}>{movie.userRating}</li>
                <li className={styles.none}>
                    <a href={movie.link} target='_blank'>링크</a>
                </li>
            </ul>
        </>
    )
})

export default MovieList;