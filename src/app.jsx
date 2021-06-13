import React, { memo, useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import MovieList from './components/movieList/movieList';
import { v4 as uuid } from 'uuid';
import FirstPage from './components/firstPage/firstPage';
import Input from './components/input/input';


// let movieItems = [];
const App = memo((props) => {
  const [movie, setMovie] = useState([]);
  let [prevQuery, setPrevQuery] = useState('');
  let [query, setQuery] = useState('');



  const myHeaders = new Headers();
  myHeaders.append('X-Naver-Client-Id', process.env.REACT_APP_CLIENT_ID);
  myHeaders.append("X-Naver-Client-Secret", process.env.REACT_APP_CLIENT_SECRET);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  async function onLoad(q){
    const search = await fetch(`/v1/search/movie.json?query=${q}&display=10`, requestOptions);
    const response = await search.json();
    // console.log('onLoad함수 : ', q);
    return response;
  }; 




  useEffect(()=>{
    if(prevQuery == query){
      // console.log('------------------333333---------------------');
      // console.log('3prevQuery :', prevQuery);
      // console.log('3query :', query);
      return;
    }
    if(prevQuery != query){
      onLoad(query).then((result)=>setMovie(result));
      setPrevQuery(query);
      // console.log('------------------2222222----------------------');
      // console.log('2prevQuery :', prevQuery);
      // console.log('2query :', query);
    }
  });




  const onInput = useCallback((query) => {
    setQuery(query);
    // console.log('----------------1111111--------------------');
    // console.log('1prevQuery :', prevQuery);
    // console.log('1query :', query);
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
          <Route exact path="/">
              <FirstPage />
          </Route>
          <Route path="/movieList">        
              <Input input={onInput}/>
              {movieItem && movieItem.map((item)=>
                <MovieList key={uuid()} movie={item}/>
              )}
          </Route>
        </Switch>
      </Router>
    </div>
  )
              
})

export default App;
