class Shop {
    constructor (title, currency) {
        this.title = title;
        this.currency = currency;

    }

    intro () {
        console.log(`Hi we are "${this.title}". \nUse .items() method to get list of items to purchase. \n.order() method to get your order details.`);
    }

    addItem (product, price) {
        console.log(`"${this.title}" sell ${product} for ${(price / 100).toFixed(2)} ${this.currency} now!`);
    }

    items () {
        
    }

}

export { Shop }