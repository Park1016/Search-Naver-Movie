import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './moviePage.module.css';
import './moviePage.css';
import MovieList from '../movieList/movieList';
import Input from '../input/input';
import YearPick from '../yearPick/yearPick';
import CountryCode from '../countryCode/countryCode';
import Display from '../display/display';
import Guidance from '../guidance/guidance';
import { v4 as uuid } from 'uuid';
import Logo from '../logo/logo';
import Loading from '../loading/loading';


const MoviePage = memo(({naver, moviePage}) => {

    const form = useRef();
    const movieList = useRef();
    const toggle = useRef();
    const arrow = useRef();

    const [movie, setMovie] = useState([]);

    let [loading, setLoading] = useState(false);

    let [prevQuery, setPrevQuery] = useState('');
    let [prevYear, setPrevYear] = useState({from: '', to: ''});

    let [query, setQuery] = useState('');
    let [year, setYear] = useState({from: '', to: ''});
    let [display, setDisplay] = useState(50);
    let [country, setCountry] = useState('');

    const onCheck = () => {
        if(movie!=undefined){
            let movieItems = [];
            movieItems = movie;
            return movieItems;
        }
    };  

    let movieItems = onCheck();
    let movieItem = movieItems.items;


    const onInput = (query) => {
        setQuery(query);
        onInputMount();
    };

    function onInputMount(){
        if(prevQuery == query){
            return;
        }
        if(prevQuery != query){
            setLoading(true);
            naver.onLoad(query, display, country, prevYear.from, prevYear.to)//
            .then((result)=>setMovie(result));     
            setPrevQuery(query);
        }    
    };
    


    const onYear = (smallYear, largeYear) => {
        setYear({from: smallYear, to: largeYear});
        setYear((year)=>{
            onYearMount(year);
            setYear(year);
        })
    };

    function onYearMount(year){
        if(prevYear == year){
            return;
        }
        if(prevYear != year){
            setLoading(true);    
            naver.onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));   
            setPrevYear(year);
        }
    };

    const onReset = () => {
        setYear({from: '', to: ''});
        setYear((reset)=>{
            onYear(reset.form, reset.to);
        })
    }

    const onCountry = (code) => {
        setCountry(code);
        setCountry((code)=>{
            onCountryMount(code);
            setCountry(code);
        })
    };

    function onCountryMount(country){
        setLoading(true);  
        naver.onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));  
    };



    const onDisplay = (num) => {
        setDisplay(num);
        setDisplay((num)=>{
            onDisplayMount(num);
            setDisplay(num);
        })
    };

    function onDisplayMount(display){
        setLoading(true);  
        naver.onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));
    };


    const onToggle = () => {
        if(toggle.current.style.display == 'flex'){
            toggle.current.style.display = 'none';
            arrow.current.style.display = 'none';
        }else{
            toggle.current.style.display = 'flex';
            arrow.current.style.display = 'block';
        }
    };

    function onScrollChangeWidth(){
        form.current.style.width = 'calc(100vw - 10px)';
    };

    function onChangeWidth(){
        form.current.style.width = '100vw';
    };


    function onNavBarWidth(){
        if(movieItem != undefined){
            if(movieItem.length != 0){
                movieList.current.style.display = 'flex';
                if(moviePage.current.clientHeight != moviePage.current.scrollHeight){
                    onScrollChangeWidth();
                }else{
                    onChangeWidth();
                }
            }
            else{
                onChangeWidth();
                movieList.current.style.display = 'none';
            }
        }
    };

    useEffect(()=>{
        onNavBarWidth();
    },[onInputMount]);
    

    useEffect(()=>{
        if(query == ''){
            return;
        }
        if(country == undefined){
            country = '';
        }
        if(display == undefined){
            display = 10;
        }
        onInputMount();
    });

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            if(toggle.current != null){
                if(window.innerWidth < 1191){
                    toggle.current.style.display = 'none';
                    arrow.current.style.display = 'none';
                    return;
                };
                toggle.current.style.display = 'flex';
                arrow.current.style.display = 'block';
            }
        })
    });

    useEffect(()=>{
        window.addEventListener('click', (e)=>{
            if(window.innerWidth > 1191 | toggle.current == null){
                return;
            }
            if(toggle.current.style.display == 'none'){
                if(e.target.classList.contains('moviePage_toggle__1uR4Q')){
                    toggle.current.style.display = 'flex';
                    arrow.current.style.display = 'block';
                }
            }
            // blur이벤트 리액트에 적용시키기 실패ㅠㅠ
            // toggle창 숨길 요소들 일일이 지정...
            if(toggle.current.style.display == 'flex'){
                if(e.target.classList.contains('input_input__1tBiL')|
                e.target.classList.contains('input_btn__2MyKN')|
                e.target.classList.contains('app_moviePage__3RJPj')|
                e.target.classList.contains('moviePage_movieList__3pSfX')|
                e.target.classList.contains('moviePage_options__NvghN')|
                e.target.classList.contains('guidance_section__2HD9S')|
                e.target.classList.contains('moviePage_movie__FZ7NS')|
                e.target.classList.contains('moviePage_logo__3lWdu')|
                e.target.classList.contains('moviePage_form__3Aatt')|
                e.target.classList.contains('logo_back__pY3--')|
                e.target.tagName == 'IMG'|
                e.target.tagName == 'H1'|
                e.target.tagName == 'LI'){
                    toggle.current.style.display = 'none';
                    arrow.current.style.display = 'none';
                    return;
                }
            }
        })
    })

    let check = query.length !== 0;

    useEffect(()=>{
        setLoading(false);
    },[movieItem]);

    
    return (
        <>
            <section ref={form} className={styles.form}>
                <div className={styles.logo}>
                    <Logo />                 
                </div>
                <div className={styles.options}>
                    <div className={styles.input}>
                        <Input input={onInput}/>
                    </div>
                    <i onClick={onToggle} className="fas fa-bars">
                        <div ref={arrow} className={styles.arrow}></div>
                    </i>
                    <div ref={toggle} className={styles.toggle}>
                        <div className={styles.yearPick}> 
                            <YearPick onYear={onYear} onReset={onReset} query={query} movie={movieItem}/>
                        </div>
                        <div className={styles.countryCode}>
                            <CountryCode onCountry={onCountry}/>
                        </div> 
                        <div className={styles.display}>
                            <Display onDisplay={onDisplay}/>
                        </div>                    
                    </div>
                </div> 
            </section> 
            <div className={styles.guidance}>
                <Guidance query={query} movie={movieItem} />
            </div>
            {(loading && check) && <Loading query={query}/>}
            <div className={styles.movie}>
                <div ref={movieList} className={movieItem ? styles.movieList : styles.none} >
                    {movieItem && movieItem.map((item)=>
                    <MovieList key={uuid()} movie={item}/>
                    )}
                </div>
            </div>
        </>
    )
})

export default MoviePage;