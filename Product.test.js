import Product from '/script';

describe('Product class', () => {
  it('should create a new product', () => {
    const product = new Product(1, 'Product 1', 10.99);
    expect(product.id).toBe(1);
    expect(product.name).toBe('Product 1');
    expect(product.price).toBe(10.99);
  });
});