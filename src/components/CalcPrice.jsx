import React, {Component} from 'react'

import {Input, FormControl, FormHelperText} from 'material-ui'

import {observer}      from 'mobx-react'
import {productsStore} from '../store'

import _ from 'lodash'

@observer
class CalcPrice extends Component {

    handleChange = (event) => {

        _.merge(this.props.saveAt, {[event.target.name]: Number(event.target.value)})

        // productsStore.productsList = {[event.target.name]: event.target.value}
        console.log(productsStore.total)

        // console.log(productsStore.teste(this.props.saveAt, {a: 'oiea'}))
        // let newObj        = Object.assign({}, this.props.saveAt, {[event.target.name]: event.target.value})
        // this.props.saveAt = newObj
    }

    render() {
        return (
            <FormControl>
                <FormHelperText>Value: </FormHelperText> <Input name={'price'} type="number" defaultValue={this.props.price} onChange={this.handleChange}/>
                <FormHelperText>Quantity: </FormHelperText> <Input name={'quantity'} type="number" defaultValue={this.props.quantity} onChange={this.handleChange}/>
                <FormHelperText>Total: {this.props.quantity * this.props.price} <br/></FormHelperText>
            </FormControl>
        )
    }
}

export default CalcPrice
