import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function SchoolarRoutes({ children }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/tool/barcode'>
          <div>Barcode Activity</div>
        </Route>
      </Switch>
      {children}
    </BrowserRouter>
  )
}

export default SchoolarRoutes
