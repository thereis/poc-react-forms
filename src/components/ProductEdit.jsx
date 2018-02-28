import React, {Component} from 'react'

import {observer} from 'mobx-react'

import {productsStore} from '../store'
import CalcPrice       from './CalcPrice'

import {withRouter} from 'react-router-dom'

import {
    Grid,
    ListItem,
    ListItemText,
    List,
    FormGroup,
    Button,
    FormControl,
    Input, InputLabel
} from 'material-ui'

import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle
} from 'material-ui/Dialog'

import Typography from 'material-ui/Typography'

let _ = require('lodash')

@observer
class ProductEdit extends Component {

    constructor(props) {
        super(props)

        console.log(props)
    }


    state = {
        open: false
    }

    handleChange(event, product) {

        let index = _.findIndex(productsStore.products, (o) => {
            return o.id === product.id
        })

        productsStore.products[index][event.target.name] = event.target.value
    }

    handleClickOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render() {

        if (productsStore.selectedProduct === null && this.props.match.params) {

            let id                        = this.props.match.params.id
            productsStore.selectedProduct = productsStore.products.find((product) => product.id == id)
        }

        const product = productsStore.selectedProduct

        return (
            <Grid direction={'row'} container item xs={12} md={12}>
                <Grid item xs={12} md={6}>
                    <Typography variant={'headline'} component={'h3'}>Detalhes</Typography>

                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Nome"
                                secondary={`${product.name} ${product.desc}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Modelo"
                                secondary={`${product.model}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Preço"
                                secondary={`R$ ${product.price}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Total"
                                secondary={`R$ ${product.price * product.quantity}`}
                            />
                        </ListItem>
                        <ListItem>
                            <Button color={'primary'} onClick={this.handleClickOpen}>
                                Comprar
                            </Button>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormGroup>
                        <Typography variant={'headline'} component={'h3'}>Editar informações</Typography>
                        {
                            Object.keys(product).map((key, index) => {
                                return (
                                    <FormControl key={index}>
                                        <InputLabel htmlFor={index}>{key}</InputLabel>
                                        <Input type="text" name={key} value={product[key]} onChange={e => this.handleChange(e, product)}/>
                                    </FormControl>
                                )
                            })
                        }
                    </FormGroup>
                </Grid>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{`Adquirir ${product.name}`}</DialogTitle>
                    <DialogContent>
                        {
                            (product.quantity === 0) ? `Não possui estoque.` : <CalcPrice
                                price={product.price}
                                quantity={product.quantity}
                                saveAt={product}
                            />
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        {
                            (product.quantity !== 0) ? <Button onClick={this.handleClose} color="primary" autoFocus>
                                Comprar
                            </Button> : ``
                        }
                    </DialogActions>
                </Dialog>
            </Grid>
        )
    }
}

export default withRouter(ProductEdit)