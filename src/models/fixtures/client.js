import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /dashboard/clients': store.findAll,
  'GET /dashboard/clients/{id}': store.findOne,
  'POST /dashboard/clients': store.create,
  'PUT /dashboard/clients/{id}': store.update,
  'DELETE /dashboard/clients/{id}': store.destroy
});

export default store;
