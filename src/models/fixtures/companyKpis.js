import fixture from 'can-fixture';
import kpiData from './kpi.json';

const store = fixture.store(kpiData);

fixture({
  'GET /company/kpis': store.findAll,
  'GET /company/kpis/{id}': store.findOne,
  'POST /company/kpis': store.create,
  'PUT /company/kpis/{id}': store.update,
  'DELETE /company/kpis/{id}': store.destroy
});

export default store;
