const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Entrega Final",
      version: "1.0.0",
      description: "Documentación de la API (Users, adoptions, etc.)",
    },

    components: {
      schemas: {

        SuccessResponse: {
          type: "object",
          properties: {
            status: { type: "string", example: "success" },
            payload: {},
          },
        },

        ErrorResponse: {
          type: "object",
          properties: {
            status: { type: "string", example: "error" },
            message: { type: "string", example: "User not found" },
          },
        },

        User: {
          type: "object",
          properties: {
            _id: { type: "string", description: "ID del usuario (MongoDB)" },
            first_name: { type: "string" },
            last_name: { type: "string" },
            email: { type: "string" },
            role: { type: "string", example: "user" },
          },
        },

        UserInput: {
          type: "object",
          required: ["first_name", "last_name", "email"],
          properties: {
            first_name: { type: "string", example: "Dante" },
            last_name: { type: "string", example: "Bueno" },
            email: { type: "string", example: "dante@mail.com" },
            role: { type: "string", example: "user" },
          },
        },

        UserUpdate: {
          type: "object",
          properties: {
            first_name: { type: "string" },
            last_name: { type: "string" },
            email: { type: "string" },
            role: { type: "string" },
          },
        },
      },
    },
  },

  apis: [path.join(__dirname, "..", "routers", "*.js")],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
