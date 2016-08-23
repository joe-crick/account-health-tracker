import fixture from 'can-fixture';
import kpiData from './kpi.json';

const store = fixture.store(kpiData);

fixture({
  'GET /clients/{clientId}/projects/{projectId}/kpis': store.findAll,
  'GET /clients/{clientId}/projects/{projectId}/kpis/{id}': store.findOne,
  'POST /clients/{clientId}/projects/{projectId}/kpis': store.create,
  'PUT /clients/{clientId}/projects/{projectId}/kpis/{id}': store.update,
  'DELETE /clients/{clientId}/projects/{projectId}/kpis/{id}': store.destroy
});

export default store;
