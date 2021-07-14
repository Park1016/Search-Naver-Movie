import React, { useEffect, useRef } from 'react';
import './guidance.css';
import styles from './guidance.module.css';

const Guidance = ({query, movie}) => {
    const text = useRef();
    const guidanceText = useRef();
    const image = useRef();
    const page = document.querySelector('.moviePage_movie__FZ7NS');

    let showSlide;
    let i = 1;
    
    const onCheck = () => {
        if(query){
            if(movie != undefined){
                if(movie.length != 0){
                    if(page.clientWidth <= 740){
                        text.current.innerHTML = `"${query}" 의<br/>검색결과입니다`;
                    }else{
                        text.current.textContent = `"${query}" 의 검색결과입니다`;
                    }
                    image.current.style.display = 'none';
                    guidanceText.current.setAttribute('class', 'fillContent');
                    return;
                }
                if(movie.length == 0){
                    text.current.textContent = `"${query}" 의 검색결과가 없습니다`;
                    image.current.style.display = 'block';
                    onSlide();
                    guidanceText.current.setAttribute('class', 'emptyContent');
                    return;
                }
            }
        }else{
            text.current.textContent = '영화 제목을 검색해보세요!';
            onSlide();
            guidanceText.current.setAttribute('class', 'emptyContent');
            return;
        }
    };
    
    const onSlide = () => { 
        showSlide = setInterval(() => {
                if(image.current.style.display == 'none'){
                    clearInterval(showSlide);
                }          
                if(i > image.current.childNodes.length-1){
                    i = 0;
                }
                
                image.current.childNodes[0].style.transform = 'translateX(-6rem) scale(0)';
                image.current.childNodes[1].style.transform = 'translateX(-6rem) scale(0)';
                image.current.childNodes[2].style.transform = 'translateX(-6rem) scale(0)';
                image.current.childNodes[3].style.transform = 'translateX(-6rem) scale(0)';
                image.current.childNodes[i].style.transform = 'translateX(-6rem) scale(1)';
        
                i++;              
        }, 3000);
    }

    useEffect(()=>{
        window.addEventListener('resize', onCheck);
    })

    useEffect(()=>{
        onCheck();
    }, [movie]);

    return (
        <section className={styles.section}>
            <div ref={image} className={styles.images}>
                <img className={styles.popcorn} src="/images/popcorn.png" alt="이미지가 없습니다"></img>
                <img className={styles.film} src="/images/film.png" alt="이미지가 없습니다"></img>
                <img className={styles.cam} src="/images/cam.png" alt="이미지가 없습니다"></img>
                <img className={styles.readyAction} src="/images/readyAction.png" alt="이미지가 없습니다"></img>
            </div>
            <div ref={guidanceText} className={styles.guidanceText}>
                <i className="fas fa-film"></i>
                <h1 ref={text} className={styles.text}> </h1>
            </div>
        </section>       
    )
}

export default Guidance;