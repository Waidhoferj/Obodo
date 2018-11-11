
class Product {
    constructor (name, business, location, link, price) {
        this.name = name
        this.business = business   
        this.location = location
        this.link = link
        this.price = price

        this.el = document.createElement('div')
        this.el.classList.add("product")

    
    }
}

module.exports = {Product}