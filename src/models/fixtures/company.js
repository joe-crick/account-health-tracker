import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /dashboard': store.findAll,
  'GET /dashboard/{id}': store.findOne,
  'POST /dashboard': store.create,
  'PUT /dashboard/{id}': store.update,
  'DELETE /dashboard/{id}': store.destroy
});

export default store;
