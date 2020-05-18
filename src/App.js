import React from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import SingleProject from './pages/SingleProject'
import Home from './pages/Home'


 const App = () => {

    return (
        <Router>
            <Switch>
          
                <Route path="/projects">
                    <Home />
                </Route>
                <Route path="/contact">
                    <Home />
                </Route>
                <Route  path= "/project/:id">
                    <SingleProject />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            
        </Router>
    )
}

export default App;