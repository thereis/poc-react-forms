import React, {Component} from 'react'

/* Store imports */
import {observer} from 'mobx-react'
import {productsStore} from '../store/index'

/* Router imports */
import {withRouter, Link} from 'react-router-dom'

/* Material-UI imports */
import {
    Divider, Typography, ListItem,
    ListItemText, ListItemIcon, List
}               from 'material-ui'
import StarIcon from 'material-ui-icons/Star'

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
            </div>
        )
    }
}

export default withRouter(ProductsList)