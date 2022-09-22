var pizza = [];

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    pizza.push({crustType, sauceType, cheeses, toppings})
    return pizza;
}

console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]));

console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]));

console.log(pizzaOven("thin crust", "marinara", ["mozzarella", "feta", "chedar"], ["mushrooms", "olives", "onions", "pineapples"]));

console.log(pizzaOven("thin crust", "marinara", ["mozzarella", "feta", "chedar"], ["mushrooms", "onions", "pepperoni", "bacon"]));
