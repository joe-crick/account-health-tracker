import fixture from 'can-fixture';
import kpiData from './kpi.json';

const store = fixture.store(kpiData);

fixture({
  'GET /kpis': store.findAll,
  'GET /kpis/{id}': store.findOne,
  'POST /kpis': store.create,
  'PUT /kpis/{id}': store.update,
  'DELETE /kpis/{id}': store.destroy
});

export default store;
