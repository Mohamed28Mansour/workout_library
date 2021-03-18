import React, { useRef, useState, Suspense,useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import Navbar from './Navbar'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import About from './pages/About'
import Error from './pages/Error'


export default function App() {

  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/channel/:id'>
        <Playlist/>
      </Route>
      <Route exact path='*'>
        <Error/>
      </Route>
    </Switch>
    </Router>
  )
}
