import React, {Component} from 'react'

import {observer} from 'mobx-react'

import {productsStore} from '../store/index'

import {withRouter, Link} from 'react-router-dom'

import {withStyles}                                 from 'material-ui/styles'
import {Grid, Divider, Typography}                  from 'material-ui'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import StarIcon                                     from 'material-ui-icons/Star'

import ProductEdit from './ProductEdit'

@observer
class ProductsList extends Component {

    render() {

        return (
            <div>
                <Typography variant='headline' style={{textAlign: 'center'}}>
                    Produtos
                </Typography>
                <Divider/>
                <List>
                    {
                        productsStore.products.map((product) =>
                            <ListItem button
                                      key={product.id}
                                      to={`/edit/${product.id}`}
                                      component={props => <Link {...props}/>}
                                      onClick={() => productsStore.selectedProduct = product}>
                                <ListItemIcon>
                                    <StarIcon/>
                                </ListItemIcon>
                                <ListItemText primary={product.name}/>
                            </ListItem>
                        )
                    }
                </List>
                {/*<Grid item xs={12} md={9}>*/}
                {/*{*/}
                {/*productsStore.selectedProduct && (<ProductEdit/>)*/}
                {/*}*/}
                {/*</Grid>*/}
            </div>
        )
    }
}

export default withRouter(ProductsList)