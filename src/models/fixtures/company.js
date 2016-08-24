import fixture from 'can-fixture';

const store = fixture.store([{
  id: 1,
  name: 'Bitovi'
}]);

fixture({
  'GET /company/{id}': store.findOne,
  'POST /company/{id}': store.create,
  'PUT /company/{id}': store.update,
  'DELETE /company/{id}': store.destroy
});

export default store;
