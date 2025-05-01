class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const products = [
  new Product(1, 'Product 1', 10.99),
  new Product(2, 'Product 2', 5.99),
  new Product(3, 'Product 3', 7.99)
];

const shoppingCart = new ShoppingCart();

const productListElement = document.getElementById('product-list');
const shoppingCartElement = document.getElementById('shopping-cart');

products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');
  productElement.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    <button>Add to Cart</button>
  `;

  productElement.querySelector('button').addEventListener('click', () => {
    shoppingCart.addItem(product);
    updateShoppingCart();
  });

  productListElement.appendChild(productElement);
});

function updateShoppingCart() {
  shoppingCartElement.innerHTML = '';
  shoppingCartElement.innerHTML += '<h2>Shopping Cart</h2>';
  shoppingCart.items.forEach(item => {
    shoppingCartElement.innerHTML += `
      <p>${item.name} - $${item.price}</p>
    `;
  });
  shoppingCartElement.innerHTML += `<p>Total: $${shoppingCart.getTotal()}</p>`;
}
