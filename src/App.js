import React, {Component}                                        from 'react'

/* Material-ui imports */
import {withStyles}                                              from 'material-ui/styles'
import {Drawer, AppBar, Toolbar, Grid, List, Typography, Button} from 'material-ui'

/* Router imports */
import {Switch, Route, withRouter}                               from 'react-router-dom'

/* Components imports */
import ProductsList                                              from './components/ProductsList'
import ProductEdit                                               from './components/ProductEdit'
import AddProduct                                                from './components/AddProduct'

const drawerWidth = 240

const styles = theme => ({
    root       : {
        flexGrow: 1,
        height  : '100%',
        zIndex  : 1,
        overflow: 'hidden',
        position: 'relative',
        display : 'flex'
    },
    flex       : {
        flex: 1
    },
    appBar     : {
        zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
        position: 'relative',
        width   : drawerWidth
    },
    content    : {
        flexGrow       : 1,
        backgroundColor: theme.palette.background.default,
        marginTop      : '3%',
        padding        : theme.spacing.unit * 3,
        minWidth       : 0 // So the Typography noWrap works
    },
    toolbar    : theme.mixins.toolbar
})

class App extends Component {

    constructor(props) {
        super(props)
        this.classes = this.props.classes
    }

    render() {
        return (
            <div className={this.classes.root}>
                <AppBar position="absolute" className={this.classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={this.classes.flex} noWrap>
                            POC React
                        </Typography>
                        <Button color="inherit" onClick={() => this.props.history.push('/addProduct')}>Add novo produto</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: this.classes.drawerPaper
                    }}
                >
                    <div className={this.classes.toolbar}/>
                    <List>
                        <ProductsList/>
                    </List>
                </Drawer>
                <Grid container item xs={12} className={this.classes.content}>
                    <Switch>
                        <Route exact path={'/edit/:id'} component={ProductEdit}/>
                        <Route exact path={'/addProduct'} component={AddProduct}/>
                    </Switch>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(App))
