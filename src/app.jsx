import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import MoviePage from './components/moviePage/moviePage';

function App({naver}){

  const page = useRef();

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">    
              <section ref={page} className={styles.moviePage} >      
                <MoviePage naver={naver} moviePage={page}/>
              </section> 
          </Route>
        </Switch>
      </Router>
    </div>
  )             
}

export default App;
