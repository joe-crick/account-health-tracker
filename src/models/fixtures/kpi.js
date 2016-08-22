import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /dashboard/kpis': store.findAll,
  'GET /dashboard/kpis/{id}': store.findOne,
  'POST /dashboard/kpis': store.create,
  'PUT /dashboard/kpis/{id}': store.update,
  'DELETE /dashboard/kpis/{id}': store.destroy
});

export default store;
