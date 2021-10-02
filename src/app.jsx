import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import './components/moviePage/moviePage.css';
import MoviePage from './components/moviePage/moviePage';

function App({naver}){

  const page = useRef();

  let [scroll, setScroll] = useState(false);
  let [hover, setHover] = useState(false);

  const onScroll = () => {
    if(page.current.scrollTop > 50){
      setScroll(true);
    }else{
      setScroll(false);
      setHover(false);
    }
  }

  const onScrollUp = () => {
    if(!page.current){
        return;
    }
    page.current.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  const onHover = () => {
    setHover(true);
  }

  const onLeave = () => {
    setHover(false);
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">    
              <section ref={page} className={styles.moviePage} onScroll={onScroll}>      
                <MoviePage naver={naver} moviePage={page}/>
                {scroll &&
                <i className="fas fa-arrow-up" onClick={onScrollUp} onMouseEnter={onHover} onMouseLeave={onLeave}>
                  {hover && <div className={styles.up}>맨 위로</div>}
                </i>}
              </section> 
          </Route>
        </Switch>
      </Router>
    </div>
  )             
}

export default App;
