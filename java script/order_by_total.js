const sales = [ //Input Array
    { amount: 4000, quantity: 10 },
    { amount: 8000, quantity: 5 },
    { amount: 10000, quantity: 3 },
    { amount: 3000, quantity: 1 }
];

const orderd_sales = [];

for (let i = 0; i < sales.length; i++) {
    orderd_sales.push(sales[i]);
    orderd_sales[i].Total = sales[i].amount * sales[i].quantity;
}

orderd_sales.sort(function (a, b) { return a.Total - b.Total });

console.log(orderd_sales) // Display ordered sales array with Total