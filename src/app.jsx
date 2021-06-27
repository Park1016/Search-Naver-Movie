import React, { memo, useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import MovieList from './components/movieList/movieList';
import { v4 as uuid } from 'uuid';
import FirstPage from './components/firstPage/firstPage';
import Input from './components/input/input';
import YearPick from './components/yearPick/yearPick';
import CountryCode from './components/countryCode/countryCode';
import Display from './components/display/display';
import Guidance from './components/guidance/guidance';
// import { symbol } from 'prop-types';


const App = memo(({naver}) => {
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
    // naver.onLoad(query, display, country, '', '').then((result)=>setMovie(result));
    const reset = {from: '', to: ''};
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
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/">
              <FirstPage />
          </Route> */}
          <Route exact path="/">    
              <section className={styles.moviePage} >
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
                  {/* {movieItem && <Guidance query={query} movie={movieItem}/>} */}
                </div>
                <div className={styles.movie}>
                  <div className={styles.movieList}>
                    {movieItem && movieItem.map((item)=>
                    <MovieList key={uuid()} movie={item}/>
                    )}
                  </div>
                </div>
              </section> 
          </Route>
        </Switch>
      </Router>
    </div>
  )
              
})

export default App;
