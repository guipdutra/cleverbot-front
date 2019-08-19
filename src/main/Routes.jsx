import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main } from '../components/templates'
import { Cleverbot } from '../components/pages'

const withTemplateMain = (jsxComponent, props) => (
  <Main {...props}>
    {jsxComponent}
  </Main>
)

const Routes = () => (
  <Switch>
    <Route
      exact path="/"
      component={props =>
        withTemplateMain(<Cleverbot {...props} />, props)
      }
    />
  </Switch>
)

export default Routes
