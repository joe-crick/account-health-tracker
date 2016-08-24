import fixture from 'can-fixture';
import entryData from './entry.json';

const store = fixture.store(entryData);

// TODO: /latest, /trend
fixture({
  'GET /clients/{clientId}/projects/{projectId}/entries': store.findAll,
  'GET /clients/{clientId}/projects/{projectId}/entries/{id}': store.findOne,
  'POST /clients/{clientId}/projects/{projectId}/entries': store.create,
  'PUT /clients/{clientId}/projects/{projectId}/entries/{id}': store.update,
  'DELETE /clients/{clientId}/projects/{projectId}/entries/{id}': store.destroy
});

export default store;
