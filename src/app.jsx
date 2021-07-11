import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import MoviePage from './components/moviePage/moviePage';

function App({naver}){

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">    
              <section className={styles.moviePage} >      
                <MoviePage naver={naver}/>
              </section> 
          </Route>
        </Switch>
      </Router>
    </div>
  )             
}

export default App;
