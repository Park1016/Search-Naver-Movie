import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './moviePage.module.css';
import { useHistory, useLocation } from 'react-router';
import Header from '../header/header';
import MovieList from '../movieList/movieList';
import Input from '../input/input';
import YearPick from '../yearPick/yearPick';
import CountryCode from '../countryCode/countryCode';
import Display from '../display/display';
import Guidance from '../guidance/guidance';
import { v4 as uuid } from 'uuid';

const MoviePage = memo(({naver,authService}) => {
    const location = useLocation();
    const form = useRef();
    // console.log(location.state.age_range, location.state.email, location.state.gender, location.state.nickname, location.state.image);
    const [movie, setMovie] = useState([]);
    let [prevQuery, setPrevQuery] = useState('');
    let [prevYear, setPrevYear] = useState({from: '', to: ''});

    let [query, setQuery] = useState('');
    let [year, setYear] = useState({from: '', to: ''});
    let [display, setDisplay] = useState(10);
    let [country, setCountry] = useState('');


    const history = useHistory();
    const onLogout = () => {
      authService.logout();
    };
  
    useEffect(() => {
      authService.onAuthChange(user => {
        if (!user) {
          history.push('/');
        }
      });
    });


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
        }else{
            onScrollChangeWidth();
        }
    }

    function onScrollChangeWidth(){
        form.current.style.width = 'calc(100vw - 10px)';
    }

    function onChangeWidth(){
        form.current.style.width = '100vw';
    }

    return (
        <>
            <Header onLogout={onLogout}/>
            <div ref={form} className={styles.form}>
            <div className={styles.options}>
                <Input input={onInput}/>
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
            <div className={styles.guidance}>
            <Guidance query={query} movie={movieItem}/>
            </div>
            <div className={styles.movie}>
            <div className={styles.movieList}>
                {movieItem && movieItem.map((item)=>
                <MovieList key={uuid()} movie={item}/>
                )}
            </div>
            </div>
        </>
    )
})

export default MoviePage;