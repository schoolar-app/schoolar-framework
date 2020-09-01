import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import QRCode from 'react-qr-code'

function SchoolarRoutes({ children }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div>
            <QRCode value='http://192.168.8.1:5000' />
          </div>
        </Route>
        {children}
      </Switch>
    </BrowserRouter>
  )
}

export default SchoolarRoutes
