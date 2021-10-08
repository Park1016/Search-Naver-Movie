import React, { memo, useEffect, useRef } from 'react';
import styles from './movieList.module.css';
import './movieList.css';

const MovieList = memo(({movie}) => {

    const modal = useRef();
    const content = useRef();
    const modalContent =useRef();

    let image;
    let title;
    let date;
    let subTitle;
    let director;
    let actor;
    let userRating;
    let link;


    const onClick = (e) => {
        if(window.innerWidth <= 500){
            return;
        }
        const target = e.target.parentElement.parentElement.parentElement.parentElement;

        image = target.childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute('src');
        title = target.childNodes[1].childNodes[0].textContent;
        date = target.childNodes[1].childNodes[1].textContent;
        subTitle = target.childNodes[1].childNodes[2].textContent;
        director =target.childNodes[1].childNodes[3].textContent;
        actor = target.childNodes[1].childNodes[4].textContent;
        userRating = target.childNodes[1].childNodes[5].childNodes[1].textContent;
        link = target.childNodes[1].childNodes[6].childNodes[0].getAttribute('href');

        const modalCurrent = modal.current.childNodes[0].childNodes[0].childNodes[0];
        const modalList = modalCurrent.childNodes[1].childNodes[0];

        modalCurrent.childNodes[0].childNodes[0].setAttribute('src', image);
        modalList.childNodes[0].textContent = title;
        modalList.childNodes[1].textContent = date;
        modalList.childNodes[2].textContent = subTitle;
        modalList.childNodes[3].textContent = director;
        modalList.childNodes[4].textContent = actor;
        modalList.childNodes[5].setAttribute("class", "fa fa-star");
        modalList.childNodes[5].textContent = userRating;
        modalList.childNodes[6].childNodes[0].setAttribute('href', link);
        modal.current.childNodes[0].style.backgroundImage = `url("${image}")`;
        modal.current.style.display = 'flex';
    }

    const onHideModal = () => {
        modalContent.current.style.transform = 'translateY(-10rem)';
        setTimeout(()=>{
            modal.current.style.display = 'none';
            modalContent.current.style.transform = 'translateY(0rem)';
        },300);
    }



    return (
        <>
            <section ref={modal} className={styles.modalBack}>
                <div ref={modalContent} className={styles.modal}>
                    <div className={styles.modalBlur}>
                        <div className={styles.modalContents}>
                            <div>
                                <img className={styles.mPoster} alt="해당 영화의 포스터가 없습니다"
                                onError={(e)=>{e.target.onerror = null; e.target.src="/images/noMoviePoster.png"}}
                                />
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </div>
                    <button className={styles.button} onClick={onHideModal}>확인
                        <div className={styles.line}></div>
                    </button>
                </div>
            </section>

            <section ref={content} className={styles.content}>     
                <div className={styles.posterArea}>
                    <div className={styles.posterBack} style={{backgroundImage:`url("${movie.image}")`}}>
                        <div className={styles.posterBlur}>
                            <img className={styles.poster} src={movie.image} alt="해당 영화의 포스터가 없습니다"
                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/noMoviePoster.png"}}
                            onClick={e=>onClick(e)} title={`"${movie.title.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}" 상세보기`}/>
                        </div>
                    </div>
                </div>
                <ul className={styles.textArea}>
                    <li className={styles.title}>{movie.title.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
                    <li className={styles.date}>{movie.pubDate}</li>
                    <li className={[styles.none, styles.subTitle].join(' ')}>{movie.subtitle.replace(/<\/b>/gi,'').replace(/<b>/gi,' ')}</li>
                    <li className={[styles.none, styles.director].join(' ')}>감독 : {movie.director.replace(/\|/gi,'')}</li>
                    <li className={[styles.none, styles.actor].join(' ')}>배우 : {movie.actor.replace(/\|/gi,', ').replace(/,\s*$/gi, "")}</li>
                    <li className={[styles.none, styles.rate].join(' ')}>
                        <i className='fa fa-star'></i>
                        <p className={styles.rateText}>{movie.userRating}</p>
                    </li>
                    <li className={[styles.none, styles.link].join(' ')}>
                        <a className={styles.linkText} href={movie.link} target='_blank'>링크</a>
                    </li>
                </ul>
            </section>
        </>
    )
})

export default MovieList;