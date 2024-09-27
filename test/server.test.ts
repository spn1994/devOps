// tests/server.test.ts
import tap from 'tap';
import server from '../src/server'; // Caminho relativo para o arquivo do servidor

// Testes
tap.test('GET /hello', async t => {
  const response = await server.inject({
    method: 'GET',
    url: '/hello'
  });
  t.equal(response.statusCode, 200, 'Deve retornar status 200');
  t.equal(response.body, 'Hello World', 'Deve retornar a mensagem correta');
});

tap.test('GET /greet/:name', async t => {
  const response = await server.inject({
    method: 'GET',
    url: '/greet/Sergio'
  });
  t.equal(response.statusCode, 200, 'Deve retornar status 200');
  t.equal(response.body, 'Hello, Sergio!', 'Deve retornar a saudação correta');
  t.end();
});
// Fechar o servidor após os testes
tap.teardown(() => {
  server.close();
});

tap.test('POST /create-user', async t => {
  const response = await server.inject({
    method: 'POST',
    url: '/create-user',
    payload: {
      name: 'Alice',
      age: 25
    }
  });
  t.equal(response.statusCode, 200, 'Deve retornar status 200');
  t.same(JSON.parse(response.body), {
    message: 'User Alice created!',
    name: 'Alice',
    age: 25
  }, 'Deve criar o usuário corretamente');
});

tap.test('PUT /update-user/:id', async t => {
  const response = await server.inject({
    method: 'PUT',
    url: '/update-user/123',
    payload: {
      name: 'Bob',
      age: 30
    }
  });
  t.equal(response.statusCode, 200, 'Deve retornar status 200');
  t.same(JSON.parse(response.body), {
    message: 'User 123 updated!',
    id: '123',
    name: 'Bob',
    age: 30
  }, 'Deve atualizar o usuário corretamente');
});

tap.test('DELETE /delete-user/:id', async t => {
  const response = await server.inject({
    method: 'DELETE',
    url: '/delete-user/123'
  });
  t.equal(response.statusCode, 200, 'Deve retornar status 200');
  t.same(JSON.parse(response.body), {
    message: 'User 123 deleted!'
  }, 'Deve deletar o usuário corretamente');
});

tap.test('GET /search', async t => {
  const response = await server.inject({
    method: 'GET',
    url: '/search?query=nodejs'
  });
  t.equal(response.statusCode, 200, 'Deve retornar status 200');
  t.same(JSON.parse(response.body), {
    message: 'Searching for nodejs'
  }, 'Deve retornar a mensagem de busca corretamente');
});
