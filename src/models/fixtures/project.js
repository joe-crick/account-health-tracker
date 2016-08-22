import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /clients/{clientId}/project': store.findAll,
  'GET /clients/{clientId}/project/{id}': store.findOne,
  'POST /clients/{clientId}/project': store.create,
  'PUT /clients/{clientId}/project/{id}': store.update,
  'DELETE /clients/{clientId}/project/{id}': store.destroy
});

export default store;
