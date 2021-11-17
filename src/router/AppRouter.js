import React from 'react'
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom'
import { ProductList } from '../products/ProductList'
import { ProductScreen } from '../products/ProductScreen'
export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route exact path='/product/:productid' component={ProductScreen} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
