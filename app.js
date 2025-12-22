const express = require('express');
const mocksRouter = require('./src/routers/mocks.router.js');
const connectDB = require('./src/config/db.js');

const PORT = 8080;
const app = express();

app.use(express.json());

connectDB();

app.use('/api/mocks', mocksRouter)

app.listen(PORT, () => {
    console.log(`Listening the server in http://localhost:${PORT}`)
});

