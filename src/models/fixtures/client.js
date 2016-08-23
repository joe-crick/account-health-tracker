import fixture from 'can-fixture';
import clientData from './client.json';

const store = fixture.store(clientData);

fixture({
  'GET /clients': store.findAll,
  'GET /clients/{id}': store.findOne,
  'POST /clients': store.create,
  'PUT /clients/{id}': store.update,
  'DELETE /clients/{id}': store.destroy
});

export default store;
