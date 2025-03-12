const request = require('supertest');
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

beforeAll((done) => {
    server.listen(port, hostname, () => {
        done();
    });
});

afterAll((done) => {
    server.close(() => {
        done();
    });
});

test('GET / should return Hello, World!', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!\n');
});
