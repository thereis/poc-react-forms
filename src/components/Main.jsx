import React, {Component} from 'react'
import AddProduct         from './AddProduct'
import ProductsList       from './ProductsList'

import {observer} from 'mobx-react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ProductsList}/>
                <Route exact path='/addProduct' component={AddProduct}/>
            </Switch>
        )
    }
}

export default Main