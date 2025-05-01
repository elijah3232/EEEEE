import ShoppingCart from '/script';

describe('ShoppingCart class', () => {
  it('should add item to cart', () => {
    const shoppingCart = new ShoppingCart();
    const product = { id: 1, name: 'Product 1', price: 10.99 };
    shoppingCart.addItem(product);
    expect(shoppingCart.items.length).toBe(1);
  });

  it('should remove item from cart', () => {
    const shoppingCart = new ShoppingCart();
    const product = { id: 1, name: 'Product 1', price: 10.99 };
    shoppingCart.addItem(product);
    shoppingCart.removeItem(1);
    expect(shoppingCart.items.length).toBe(0);
  });

  it('should calculate total', () => {
