import fixture from 'can-fixture';

const store = fixture.store([{
  id: 1,
  name: 'Bitovi'
}]);

fixture({
<<<<<<< HEAD
  'GET /': store.findOne,
  'POST /': store.create,
  'PUT /': store.update,
  'DELETE /': store.destroy
=======
  'GET /company/{id}': store.findOne,
  'POST /company/{id}': store.create,
  'PUT /company/{id}': store.update,
  'DELETE /company/{id}': store.destroy
>>>>>>> origin
});

export default store;
