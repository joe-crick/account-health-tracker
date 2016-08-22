import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /clients/{clientId}/projects/{projectId}/kpis': store.findAll,
  'GET /clients/{clientId}/projects/{projectId}/kpis/{id}': store.findOne,
  'POST /clients/{clientId}/projects/{projectId}/kpis': store.create,
  'PUT /clients/{clientId}/projects/{projectId}/kpis/{id}': store.update,
  'DELETE /clients/{clientId}/projects/{projectId}/kpis/{id}': store.destroy
});

export default store;
