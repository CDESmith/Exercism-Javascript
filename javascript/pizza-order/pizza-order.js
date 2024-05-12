/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let total = 0;
  switch (pizza) {
    case "Margherita":
      total = 7;
      break;
    case "Caprese":
      total = 9;
      break;
    case "Formaggio":
      total = 10;
      break;
  }
  for (let i = 0; i < extras.length; i++) {
    if (extras[i] === "ExtraSauce") {
      total = total + 1;
    }
    if (extras[i] === "ExtraToppings") {
      total = total + 2;
    }
  }
  return total;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  throw new Error('Please implement the orderPrice function');
}
