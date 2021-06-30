import React, { memo, useEffect, useState } from 'react';
import styles from './moviePage.module.css';
import MovieList from '../movieList/movieList';
import Input from '../input/input';
import YearPick from '../yearPick/yearPick';
import CountryCode from '../countryCode/countryCode';
import Display from '../display/display';
import Guidance from '../guidance/guidance';
import { v4 as uuid } from 'uuid';

const MoviePage = memo(({naver}) => {
    const [movie, setMovie] = useState([]);
  let [prevQuery, setPrevQuery] = useState('');
  let [prevYear, setPrevYear] = useState({from: '', to: ''});
  // let [prevDisplay, setPrevDisplay] = useState('');
  // let [prevCountry, setPrevCountry] = useState('');

  let [query, setQuery] = useState('');
  let [year, setYear] = useState({from: '', to: ''});
  let [display, setDisplay] = useState(10);
  let [country, setCountry] = useState('');


  const onInput = (query) => {
    setQuery(query);
    OnInputMount();
  };

  function OnInputMount(){
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
      OnYearMount(year);
      setYear(year);
    })
  };

  function OnYearMount(year){
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
      OnYearMount(reset);
      setYear(reset);
    })
  }

  const onCountry = (code) => {
    setCountry(code);
    setCountry((code)=>{
      OnCountryMount(code);
      setCountry(code);
    })
  };

  function OnCountryMount(country){
    naver.onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));  
  };



  const onDisplay = (num) => {
    setDisplay(num);
    setDisplay((num)=>{
      OnDisplayMount(num);
      setDisplay(num);
    })
  };

  function OnDisplayMount(display){
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
    OnInputMount();
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
    return (
        <>
            <div className={styles.form}>
            <div className={styles.options}>
                <Input input={onInput}/>
                <div className={styles.yearPick}> 
                <YearPick onYear={onYear} onReset={onReset}/>
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