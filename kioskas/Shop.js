class Shop {
    constructor (title, currency) {
        this.title = title;
        this.currency = currency;
        this.products = [];
    }

    intro () {
		const resp = `Hi, we are "${this.title}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`;
        
        console.log(resp);
        return resp
	}

    formattedPrice(price) {
        return (price / 100).toFixed(2);
    }
    
    addItem(product, price) {
        this.products.push({
            name: product,
            price: price
        })
        const resp = `"${this.title}" sells ${product} for ${this.formattedPrice(price)} ${this.currency} now!`;

        console.log(resp);
        return resp
    }

    items () {
		const label = `Items for sale at "${this.title}":`;
		const divider = `====================`;
		let list = '';
        let i = 0;
        
        for (const product of this.products) {
            const formattedPrice = (product.price / 100).toFixed(2);
            const formattedName = (product.name[0].toUpperCase()+product.name.slice(1))
            i ++
            list += `${i}) ${formattedName} - ${formattedPrice} ${this.currency}\n`;
        }

		const resp = `${label} \n${divider}\n${list}${divider}`;

		console.log(resp);
		return resp;
	}

    
}

export { Shop }