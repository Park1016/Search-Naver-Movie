import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import MoviePage from './components/moviePage/moviePage';


const App = memo(({naver}) => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <Login />
          </Route>
          <Route exact path="/movie">    
              <section className={styles.moviePage} >      
                <MoviePage naver={naver} />
              </section> 
          </Route>
        </Switch>
      </Router>
    </div>
  )
              
})

export default App;
