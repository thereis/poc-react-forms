import {observable, computed} from 'mobx'

export const productsStore = observable({
    selectedProduct: null,
    value          : 10,
    quantity       : 20,
    products       : [{
        id      : 1,
        name    : 'NVIDIA 1050TI',
        desc    : '4GB OC',
        model   : 'ASUS',
        price   : 1050,
        quantity: 1
    }, {
        id      : 2,
        name    : 'NVIDIA 1060TI',
        desc    : '6GB OC',
        model   : 'EVGA',
        price   : 1050,
        quantity: 1
    }, {
        id      : 3,
        name    : 'NVIDIA 1070TI',
        desc    : '8GB OC',
        model   : 'MSI',
        price   : 1050,
        quantity: 1
    }, {
        id      : 4,
        name    : 'NVIDIA 1080TI',
        desc    : '11GB OC',
        model   : 'FOUNDERS EDITION',
        price   : 1050,
        quantity: 1
    }],
    total          : computed(function () {
        let total = 0
        this.products.map((item) => total += item.price)
        return total
    })
})

// @action updateProduct(index, value) {
//     this.productsList.toJS()[index] = value
// }