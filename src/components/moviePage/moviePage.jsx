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
import { symbol } from 'prop-types';

const MoviePage = memo(({naver}) => {

    const form = useRef();
    const movieList = useRef();
    const toggle = useRef();
    const arrow = useRef();

    const [movie, setMovie] = useState([]);
    let [prevQuery, setPrevQuery] = useState('');
    let [prevYear, setPrevYear] = useState({from: '', to: ''});

    let [query, setQuery] = useState('');
    let [year, setYear] = useState({from: '', to: ''});
    let [display, setDisplay] = useState(50);
    let [country, setCountry] = useState('');



    const onInput = (query) => {
        setQuery(query);
        onInputMount();
    };

    function onInputMount(){
        if(prevQuery == query){
        return;
        }
        if(prevQuery != query){
        naver.onLoad(query, display, country, prevYear.from, prevYear.to).then((result)=>setMovie(result));       
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
            naver.onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));   
            setPrevYear(year);
        }
        console.log(year);
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
        naver.onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));
    };

    
    
    
    
    
    const onCheck = () => {
        if(movie!=undefined){
        let movieItems = [];
        movieItems = movie;
        return movieItems;
        }
    };

    let movieItems = onCheck();
    let movieItem = movieItems.items;

    if(movieItem != undefined){
        if(movieItem.length == 0){
            onChangeWidth();
            movieList.current.style.display = 'none';
        }else{
            onScrollChangeWidth();
            movieList.current.style.display = 'flex';
        }
    }

    function onScrollChangeWidth(){
        form.current.style.width = 'calc(100vw - 10px)';
    }

    function onChangeWidth(){
        form.current.style.width = '100vw';
    }

    const onToggle = () => {
        if(toggle.current.style.display == 'flex'){
            toggle.current.style.display = 'none';
            arrow.current.style.display = 'none';
        }else{
            toggle.current.style.display = 'flex';
            arrow.current.style.display = 'block';
        }
    }

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
            if(window.innerWidth < 1191){
                toggle.current.style.display = 'none';
                arrow.current.style.display = 'none';
                return;
            };
            toggle.current.style.display = 'flex';
            arrow.current.style.display = 'block';
        })
    });

    useEffect(()=>{
        window.addEventListener('click', (e)=>{
            if(window.innerWidth > 1191){
                return;
            }
            if(e.target.classList.contains('fa-bars') | e.target.classList.contains('moviePage_toggle__1uR4Q')){
                toggle.current.style.display = 'flex';
                arrow.current.style.display = 'block';
            }else{
                toggle.current.style.display = 'none';
                arrow.current.style.display = 'none';
            }
        })
    })

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
                <Guidance query={query} movie={movieItem}/>
            </div>
            <div className={styles.movie}>
                <div ref={movieList} className={movieItem ? styles.movieList : styles.none}>
                    {movieItem && movieItem.map((item)=>
                    <MovieList key={uuid()} movie={item}/>
                    )}
                </div>
            </div>
        </>
    )
})

export default MoviePage;