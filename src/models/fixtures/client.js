import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /clients': store.findAll,
  'GET /clients/{id}': store.findOne,
  'POST /clients': store.create,
  'PUT /clients/{id}': store.update,
  'DELETE /clients/{id}': store.destroy
});

export default store;
