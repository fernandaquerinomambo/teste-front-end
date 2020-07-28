import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Main from './components/Main'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  )
}