import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /': store.findAll,
  'GET /': store.findOne,
  'POST /': store.create,
  'PUT /': store.update,
  'DELETE /': store.destroy
});

export default store;
