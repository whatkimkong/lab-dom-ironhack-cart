// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const inputQuantity = product.querySelector('.quantity');
  const inputPrice = product.querySelector('.price span');
  const calculateButton = product.getElementById('calculate');
  const subTotalChanges = product.querySelector('.subtotal span');

  calculateButton.addEventListener ('click', (event) => {
    const inputValue = inputQuantity.value * inputPrice.value;
    subTotalChanges.innerHTML = `<span>${inputValue}</span>`;
  })
}

  // when we click 'calculate prices' the unit price * quantity = subtotal changes


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
