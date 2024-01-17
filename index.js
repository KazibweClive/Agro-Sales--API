// Import the Express library
const express = require('express');
// Import the different Routers ... NB: you can only import it if you had already exported it
const productsRouter = require('./routes/productsRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const userRouter = require('./routes/userRouter');
// Create an Express application
const server = express();

//  Middleware
server.use('/api/v1/users',userRouter)
server.use('/api/v1/products', productsRouter)
server.use('/api/v1/categories',categoriesRouter)

// Define a route
server.get('/api/v1/', (req, res) => {
  res.send('Hello, World!');
});


// Set the server to listen on port 1339
const port = 1339;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
