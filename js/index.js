// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const inputQuantity = product.querySelector('.quantity input');
  const inputPrice = product.querySelector('.price span');

  const subTotalChanges = inputQuantity.value * inputPrice.innerHTML;
  
  const subtotal = product.querySelector('.subtotal');

  subtotal.innerHTML = `$${subTotalChanges}`;
  return subTotalChanges; // do we need?

  console.dir(inputQuantity)
  console.dir(inputPrice)

}

  // const calculateButton = product.getElementById('calculate');
  // const subTotalChanges = product.querySelector('.subtotal span');
  // calculateButton.addEventListener ('click', (event) => {
  //  const inputValue = inputQuantity.innerHTML * inputPrice.value;
  //  subTotalChanges.innerHTML = `<span>${inputValue}</span>`; })
  
  // when we click 'calculate prices' the unit price * quantity = subtotal changes


function calculateAll() {
  // code in the following two lines is added just for testing purposes - it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
 

 // ITERATION 2   and 
// ITERATION 3
  // forEach instead of for of loops is ideal
  // call the UpdateSubtotal(product) function upon every tr.product in the table #cart
  //... your code goes here

  const allProducts = document.querySelectorAll('.product'); // select alllllll products
  let total = 0;
  allProducts.forEach((product) => {
    let eachSubtotal = updateSubtotal(product);
    total += eachSubtotal;
  })

  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = `${total}`;


// you cant change a const - has to be let to add each variable


  // will it create single Subtotal or an array?
  //create an array of all the DOM products - // you can use array methods on .querySelectorAll

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


  const listElement = document.querySelectorAll('tr')
  const thisProduct = document.querySelectorAll('.product')
  const removeButton = document.querySelectorAll('.btn btn-remove')
  
  removeButton.forEach((button) => {
    button.addEventListener('click', () => {
      listElement.removeChild();
    })
  })

}

// ITERATION 5

function createProduct() {

  const newRow = document.querySelectorAll('.create-product')
  const createButton = document.querySelectorAll('#create btn')

  

  createButton.addEventListener ('click', (event) => {

    const productName = document.createElement('productName')
    const productPrice = document.createElement('productPrice')
    const newButton = document.createElement('newButton')
    productName.innerHTML = <input type="text" placeholder="Product Name" />;
    productPrice.innerHTML = <input type="number" min="0" value="0" placeholder="Product Price" />;
    newButton.innerHTML = <button id="create" class="btn">Create Product</button>;
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
