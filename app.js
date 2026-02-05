const express = require('express');
const mocksRouter = require('./src/routers/mocks.router.js');
const adoptionsRouter = require('./src/routers/adoption.router.js');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger.js');
const usersRouter = require('./src/routers/users.routes.js');
const connectDB = require('./src/config/db.js');

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("hola")
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/mocks', mocksRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/users', usersRouter);

module.exports = app;