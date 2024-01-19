/* ------------------------------ TASK 6 -----------------------------------
Turimas "products" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getAveragePrice" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" vidutinę kainą kaip skaičių.
2. funkcija "getProductsNames" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" pavadinimus naujame masyve pvz., ['Product 1', 'Product 2', ...].
3. funkcija "getUniqueCategories" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų unikalių "products" kategorijų sąrašą.
-------------------------------------------------------------------------- */

const products = [
  { id: '1', name: 'Product 1', price: 10, category: 'Electronics' },
  { id: '2', name: 'Product 2', price: 20, category: 'Books' },
  { id: '3', name: 'Product 3', price: 30, category: 'Clothing' },
  { id: '4', name: 'Product 4', price: 40, category: 'Electronics' },
  { id: '5', name: 'Product 5', price: 50, category: 'Books' },
];

function getAveragePrice(products){

  let total=0

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productPrice = product.price;
    total = total + productPrice;

  }

  let avgPrice=total/products.length

  return avgPrice
}
console.log("Average product price: "+getAveragePrice(products)+" Euros")

function getProductsNames(products){
  let productNames=[]
  for (let i = 0; i < products.length; i++){
    productNames.push(products[i].name)
  }
  return productNames
}
console.log(getProductsNames(products))

function getUniqueCategories(products) {
  let productCategories = [];
  for (let i = 0; i < products.length; i++) {
    if (!productCategories.includes(products[i].category)) {
      productCategories.push(products[i].category);
    }
  }
  return productCategories;
}

console.log(getUniqueCategories(products));
