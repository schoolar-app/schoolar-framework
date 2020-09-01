import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function SchoolarRoutes({ children }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div>Barcode Activity testing</div>
        </Route>
        {children}
      </Switch>
    </BrowserRouter>
  )
}

export default SchoolarRoutes
