import fastify from 'fastify';

const app = fastify();

app.get('/hello', (request, reply) => {
  return 'Hello World';
});

app.listen({
  port: 3333
}).then(() => {
  console.log('Server is running on http://localhost:3333');
}).catch(err => {
  console.error('Erro no servidor', err);
  process.exit(1);
});