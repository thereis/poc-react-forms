import React, {Component} from 'react'

/* MobX dependencies */
/* Components */

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header       from './components/Header'
import Main         from './components/Main'
import ProductsList from './components/ProductsList'
import AddProduct   from './components/AddProduct'
// import CalcPrice          from './components/CalcPrice'
/* External dependencies */

class App extends Component {
    render() {

        return (
            <Header/>
        )
        // return (
        //     <div>
        //         <Switch>
        //             <Route exact path='/' component={Header}/>
        //             <Route exact path='/addProduct' component={AddProduct}/>
        //         </Switch>
        //     </div>
        // )
    }
}

export default App
