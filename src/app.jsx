import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import MovieList from './components/movieList/movieList';
import { v4 as uuid } from 'uuid';
import FirstPage from './components/firstPage/firstPage';


// let movieItems = [];
const App = (props) => {
  const [movie, setMovie] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append('X-Naver-Client-Id', process.env.REACT_APP_CLIENT_ID);
  myHeaders.append("X-Naver-Client-Secret", process.env.REACT_APP_CLIENT_SECRET);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  async function onSearch(){
    const search = await fetch("/v1/search/movie.json?query=괴물&display=10", requestOptions);
    const response = await search.json();
    return response;
  } 

  useEffect(()=>{
    onSearch().then((result)=>setMovie(result));
  },[])
  
  const onLoad = () =>{
    if(movie!=undefined){
      let movieItems = [];
      movieItems = movie;
      return movieItems;
    }
  }
  
  let movieItems = onLoad();
  let movieItem = movieItems.items;


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <FirstPage />
          </Route>
          <Route path="/movieList">        
              {movieItem && movieItem.map((item)=>
                <MovieList key={uuid()} movie={item}/>
              )}
          </Route>
        </Switch>
      </Router>
    </div>
  )
              
}

export default App;
