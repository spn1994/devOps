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

// Função 1: Rota GET simples
app.get('/hello', () => {
  return 'Hello World';
});

// Função 2: Rota GET com parâmetro
app.get('/greet/:name', (request: FastifyRequest<{ Params: GreetParams }>, reply) => {
  const { name } = request.params;
  return `Hello, ${name}!`;
});

// Função 3: Rota POST para criar um recurso
app.post('/create-user', async (request: FastifyRequest<{ Body: CreateUserBody }>, reply) => {
  const { name, age } = request.body;
  return { message: `User ${name} created!`, name, age };
});

// Função 4: Rota PUT para atualizar um recurso
app.put('/update-user/:id', async (request: FastifyRequest<{ Params: UpdateUserParams, Body: UpdateUserBody }>, reply) => {
  const { id } = request.params;
  const { name, age } = request.body;
  return { message: `User ${id} updated!`, id, name, age };
});

// Função 5: Rota DELETE para remover um recurso
app.delete('/delete-user/:id', async (request: FastifyRequest<{ Params: DeleteUserParams }>, reply) => {
  const { id } = request.params;
  return { message: `User ${id} deleted!` };
});

// Função 6: Rota GET com query parameters
app.get('/search', (request: FastifyRequest<{ Querystring: SearchQuery }>, reply) => {
  const { query } = request.query;
  return { message: `Searching for ${query}` };
});

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running');
});

export default app;
