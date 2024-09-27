import fastify, { FastifyRequest } from 'fastify';

const app = fastify();

// Definir as interfaces para os parâmetros e corpo da requisição
interface GreetParams {
  name: string;
}

interface CreateUserBody {
  name: string;
  age: number;
}

interface UpdateUserParams {
  id: string;
}

interface UpdateUserBody {
  name: string;
  age: number;
}

interface DeleteUserParams {
  id: string;
}

interface SearchQuery {
  query: string;
}

// Rota GET simples
app.get('/hello', (request, reply) => {
  reply.send('Hello World'); // Usando reply
});

// Rota GET com parâmetro
app.get('/greet/:name', (request: FastifyRequest<{ Params: GreetParams }>, reply) => {
  const { name } = request.params;
  reply.send(`Hello, ${name}!`); // Usando reply
});

// Rota POST para criar um recurso
app.post('/create-user', async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
  const { name, age } = request.body;
  reply.send({ message: `User ${name} created!`, name, age }); // Usando reply
});

// Rota PUT para atualizar um recurso
app.put('/update-user/:id', async (request: FastifyRequest<{ Params: UpdateUserParams, Body: UpdateUserBody }>, reply) => {
  const { id } = request.params;
  const { name, age } = request.body;
  reply.send({ message: `User ${id} updated!`, id, name, age }); // Usando reply
});

// Rota DELETE para remover um recurso
app.delete('/delete-user/:id', async (request: FastifyRequest<{ Params: DeleteUserParams }>, reply) => {
  const { id } = request.params;
  reply.send({ message: `User ${id} deleted!` }); // Usando reply
});

// Rota GET com query parameters
app.get('/search', (request: FastifyRequest<{ Querystring: SearchQuery }>, reply) => {
  const { query } = request.query;
  reply.send({ message: `Searching for ${query}` }); // Usando reply
});

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running now');
});

export default app;
