import fixture from 'can-fixture';

const store = fixture.store([{
  id: 1,
  name: 'Bitovi'
}]);

fixture({
  'GET /': store.findOne,
  'POST /': store.create,
  'PUT /': store.update,
  'DELETE /': store.destroy
});

export default store;
