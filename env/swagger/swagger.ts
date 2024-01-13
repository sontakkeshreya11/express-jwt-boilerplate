import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    info: {
      title: 'JWt Authorization',
      version: '1.0',
    },
    servers: [{ url: 'http://localhost:3000/' }],
  },
  apis: ['./dist/routes/example-route.js'], //need to update this later
};

export const swaggerSpec = swaggerJSDoc(options);
