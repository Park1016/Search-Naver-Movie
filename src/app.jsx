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
import { symbol } from 'prop-types';


const App = memo((props) => {
  const [movie, setMovie] = useState([]);
  let [prevQuery, setPrevQuery] = useState('');
  let [prevYear, setPrevYear] = useState({from: '', to: ''});
  // let prevYear = {from: '', to: ''};
  // let [prevStart, setPrevStart] = useState('');
  // let [prevEnd, setPrevEnd] = useState('');
  let [prevDisplay, setPrevDisplay] = useState('');
  let [prevCountry, setPrevCountry] = useState('');


  let [query, setQuery] = useState('');
  let [year, setYear] = useState({from: '', to: ''});
  // let year = {from: '', to: ''};
  // let [start, setStart] = useState('');
  // let [end, setEnd] = useState('');
  let [display, setDisplay] = useState(10);
  let [country, setCountry] = useState('');



  const myHeaders = new Headers();
  myHeaders.append('X-Naver-Client-Id', process.env.REACT_APP_CLIENT_ID);
  myHeaders.append("X-Naver-Client-Secret", process.env.REACT_APP_CLIENT_SECRET);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  async function onLoad(q, display, country, from, to){
    const search =
    await fetch(
      `/v1/search/movie.json?query=${q}&display=${display}&country=${country}&yearfrom=${from}&yearto=${to}`,
    requestOptions);
    const response = await search.json();
    // console.log('onLoad함수 : ', q);
    return response;
  }; 




  // useEffect(()=>{
  //   if(prevQuery == query){
  //     // console.log(year, prevYear);
  //     // console.log('------------------333333---------------------');
  //     // console.log('3prevQuery :', prevQuery);
  //     // console.log('3query :', query);
  //     return;
  //   }
  //   if(prevQuery != query){
  //     console.log(query,display,country,year);
  //     console.log(query, prevQuery);
  //     console.log(year, prevYear);
  //     onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));
      
  //     setPrevQuery(query);
  //     setPrevYear({from: year.from, to: year.to});


  //     // console.log(year, prevYear);
  //     // console.log('------------------2222222----------------------');
  //     // console.log('2prevQuery :', prevQuery);
  //     // console.log('2query :', query);
  //   }
  // });




  const onInput = (query) => {
    setQuery(query);
    // console.log('----------------1111111--------------------');
    // console.log('1prevQuery :', prevQuery);
    // console.log('1query :', query);
    OnInputMount();
  };

  function OnInputMount(){
    if(prevQuery == query){
      return;
    }
    if(prevQuery != query){
      onLoad(query, display, country, prevYear.from, prevYear.to).then((result)=>setMovie(result));      
      // onLoad(query, display, country, start, end).then((result)=>setMovie(result));  
      setPrevQuery(query);
    }
  };
  

  const onYear = (smallYear, largeYear) => {
    console.log(smallYear, largeYear);
    setYear({from: smallYear, to: largeYear});
    setYear((year)=>{
      OnYearMount(year);
    })
    // year = {from: smallYear, to: largeYear};
    // console.log(prevYear, year);
    // console.log(year, prevYear);
    // setFrom(smallYear);
    // setTo(largeYear);
  };

  function OnYearMount(year){
    // if(year == undefined){
    //   return;
    // }
    if(prevYear == year){
      return;
    }
    if(prevYear != year){
      
      console.log(prevYear, year);
      onLoad(query, display, country, year.from, year.to).then((result)=>setMovie(result));   
      // onLoad(query, display, country, start, end).then((result)=>setMovie(result));     
      // console.log(prevStart, start);
      // console.log(prevEnd, end);
      setPrevYear(year);
      // prevYear = year;
    }
  };

  const onCountry = (code) => {
    setCountry(code);
    // console.log(code);
    setCountry((code)=>{
      OnCountryMount(code);
    })
    // OnCountryMount();
  };

  function OnCountryMount(country){
    // if(year == undefined){
    //   return;
    // }
    // if(prevCountry == country){
    //   console.log('너냐');
    //   return;
    // }
    onLoad(query, display, country, prevYear.from, prevYear.to).then((result)=>setMovie(result));  
    // console.log(prevYear, year);
    // if(prevCountry != country){
    //   onLoad(query, display, country, prevYear.from, prevYear.to).then((result)=>setMovie(result));     
    //   // onLoad(query, display, country, start, end).then((result)=>setMovie(result));   
    //   // setPrevCountry(country);
    // }
  };

  const onDisplay = (num) => {
    setDisplay(num);
    setDisplay((num)=>{
      OnDisplayMount(num);
    })
  };

  function OnDisplayMount(display){
    // if(year == undefined){
    //   return;
    // }
    // if(prevDisplay == display){
    //   return;
    // }
    if(prevDisplay != display){
      onLoad(query, display, country, prevYear.from, prevYear.to).then((result)=>setMovie(result));
      // onLoad(query, display, country, start, end).then((result)=>setMovie(result));       
      // setPrevDisplay(display);
    }
  };

  const onCheck = () => {
    if(movie!=undefined){
      let movieItems = [];
      movieItems = movie;
      return movieItems;
    }
  };

  

  useEffect(()=>{
    if(query == ''){
      console.log('아 왜이랴');
      return;
    }
    // if(year == undefined){
    //   console.log('이유가 뭘까?');
    //   return;
    // }
    OnInputMount();
    // onYear();
    // onCountry();
    // onDisplay();
  });

  
  let movieItems = onCheck();
  let movieItem = movieItems.items;


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <FirstPage />
          </Route>
          <Route path="/movieList">    
              <section className={styles.moviePage}> 
                <Input input={onInput}/>
                <div className={styles.optionsAndMovie}>
                  <div className={styles.options}>
                    <div className={styles.yearPick}> 
                      <YearPick onYear={onYear}/>
                    </div>
                    <div className={styles.countryCode}>
                      <CountryCode onCountry={onCountry}/>
                    </div> 
                    <div className={styles.display}>
                      <Display onDisplay={onDisplay}/>
                    </div>                    
                  </div> 
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
