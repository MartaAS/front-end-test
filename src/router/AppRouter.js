import React from 'react'
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom'
import { ProductDetailScreen } from '../pages/ProductDetailScreen'
import { ProductListScreen } from '../pages/ProductListScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ProductDetailScreen} />
            <Route exact path='/productList' component={ProductListScreen} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
