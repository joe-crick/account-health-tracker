import fixture from 'can-fixture';
import projectData from './project.json';

const store = fixture.store(projectData);

fixture({
  'GET /clients/{clientId}/project': store.findAll,
  'GET /clients/{clientId}/project/{id}': store.findOne,
  'POST /clients/{clientId}/project': store.create,
  'PUT /clients/{clientId}/project/{id}': store.update,
  'DELETE /clients/{clientId}/project/{id}': store.destroy
});

export default store;
