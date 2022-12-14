console.clear();

const valiuta = "EUR";
const prekes = [
  {
    name: "Bananas",
    price: 2,
    inStock: 10,
  },
  {
    name: "Agurkas",
    price: 3,
    inStock: 10,
  },
  {
    name: "Pomidoras",
    price: 1.57,
    inStock: 30,
  },
];



function shop(product, currency) {
    console.log("MUSU PARDUOTUVE:");
    console.log("----------------");
    // loop products and order nr
    for (let i = 0; i < product.length; i++) {
    console.log(`${i + 1}) ${product[i].name} kainuoja ${product[i].price.toFixed(2)} ${currency} ir turime ju ${product[i].inStock} vienetu.`);
    }
    console.log("----------------");

    let totalSum = prekes[0].price * prekes[0].inStock + prekes[1].price * prekes[1].inStock + prekes[2].price * prekes[2].inStock

    console.log(`Viso asortimento kaina: ${totalSum.toFixed(2)} ${currency}.`);
}

shop(prekes, valiuta);

// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.

