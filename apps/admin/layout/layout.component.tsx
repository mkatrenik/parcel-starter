import * as React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Posts } from '../posts'
import './styles.css'

declare var module: any

const App = () => (
  <BrowserRouter>
    <div className="container">
      <div className="header">
        <Link to="/">Dashboard</Link>
      </div>
      <div className="menu">
        <Link to="/posts">posts</Link>
      </div>
      <div className="main">
        <Route path="/posts" component={Posts} />
      </div>
    </div>
  </BrowserRouter>
)

export const Layout = hot(module)(App)
