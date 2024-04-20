const express = require('express');
const { connectToMongoDb } = require("./helper_functions")
const productRoutes = require('./routes/product.routes')


const app = express();


// middlewares
app.use(express.json())

//routes
app.use('/api/products/',productRoutes)


// Connect to Database
connectToMongoDb().then(() => {
    app.listen(3000, () => {
        console.log('Server started on port 3000')
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
}
);
