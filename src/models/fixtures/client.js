import fixture from 'can-fixture';
import _ from 'lodash';

import clientData from './client.json';
import entryData from './entry.json';

const store = fixture.store(clientData);

function filterEntries(clientId) {
  const kpis = entryData.filter((entry) => {
    return entry.clientId === clientId && entry.timestamp === '2016-08-23T16:41:47.918Z';
  });
  const byValue = _.groupBy(kpis, 'value');
  return {
    healthy: byValue.healthy ? byValue.healthy.length : 0,
    warning: byValue.warning ? byValue.warning.length : 0,
    danger: byValue.danger ? byValue.danger.length : 0
  };
}

fixture({
  'GET /clients': function getEntries(request, response) {
    clientData.map((client) => {
      const entries = filterEntries(client.id);
      return Object.assign(client, entries);
    });
    response(clientData);
  },
  'GET /clients/{id}': function getEntries(request, response) {
    const clientId = +request.data.id;
    const client = clientData.filter((c) => {
      return c.id === clientId;
    })[0];
    const entries = filterEntries(client.id);
    response(Object.assign(client, entries));
  },
  'POST /clients': store.create,
  'PUT /clients/{id}': store.update,
  'DELETE /clients/{id}': store.destroy
});

export default store;
