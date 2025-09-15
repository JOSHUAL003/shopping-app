// app-test.js
const request = require('supertest');
const app = require('./app');


describe('GET /products', () => {
test('should return 200 and array of products', async () => {
const res = await request(app).get('/products');
expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
expect(res.body.length).toBeGreaterThan(0);
expect(res.body[0]).toHaveProperty('id');
expect(res.body[0]).toHaveProperty('name');
expect(res.body[0]).toHaveProperty('price');
});
});


describe('GET /products/:id', () => {
test('existing id returns product', async () => {
const res = await request(app).get('/products/1');
expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('id', 1);
});


test('non-existing id returns 404', async () => {
const res = await request(app).get('/products/9999');
expect(res.statusCode).toBe(404);
});
});
