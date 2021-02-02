import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* pages */
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import SavedMovies from '../pages/SavedMovies'

export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path="/movies" component={ Movies } />
        <Route path="/savedmovies" component={ SavedMovies } />
    </Switch>
)