// app.js — entrypoint
const express = require('express');
const path = require('path');
const appController = require('./app-controller');


const app = express();
const PORT = process.env.PORT || 3000;


// JSON middleware
app.use(express.json());


// Static serve index.html (optional)
app.use('/', express.static(path.join(__dirname)));


// API route
app.use('/products', appController);


// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));


if (require.main === module) {
app.listen(PORT, () => {
console.log(`Shopping App listening on http://localhost:${PORT}`);
});
}


module.exports = app;
