const express = require("express");
const app = express();
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");

app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://afmtoday:OlxwPFCF0rLMnA3e@cluster0.edrrjyh.mongodb.net/langlearn?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// App configuration
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

// Swagger configuration
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LangLearn API",
      version: "1.0.0",
      description: "Langlearn 1.0 API documentation",
    },
  },
  apis: ["./routes/*.js"], // Specify the file(s) where JSDoc annotations are present
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route imports
const userRoutes = require("./routes/userRoutes");
const aiRoutes = require('./routes/aiRoutes');
const authRoutes = require('./routes/authRoutes');

// Route definitions
VERSION = "v1";
app.use(`/api/${VERSION}/users`, userRoutes);
app.use(`/api/${VERSION}/ai`, aiRoutes);
app.use(`/api/${VERSION}/auth`, authRoutes);

app.listen(4000, () => {
  console.log("Connected");
});

module.exports = app;
