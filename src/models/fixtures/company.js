import fixture from 'can-fixture';
import _ from 'lodash';

import kpiData from './kpi.json';
import entryData from './entry.json';

const companyData = [{
  id: 1,
  name: 'Bitovi'
}];

const store = fixture.store(companyData);

function getKPIName(kpiId) {
  const id = +kpiId;
  return kpiData.filter((kpi) => {
    return kpi.id === id;
  })[0].name;
}

function filterEntries(companyId) {
  let entries = entryData.filter((entry) => {
    return entry.companyId === companyId && entry.timestamp === '2016-08-23T16:41:47.918Z';
  });
  const byKpi = _.groupBy(entries, 'kpiId');
  entries = _.map(byKpi, (kpiGroup) => {
    return _.groupBy(kpiGroup, 'value');
  });
  const kpiNames = Object.keys(byKpi).map((kpiId) => {
    return getKPIName(kpiId);
  });
  const ret = [
    ['healthy'],
    ['warning'],
    ['danger'],
    ['label']
  ];
  kpiNames.forEach((name, idx) => {
    ret[0].push(entries[idx].healthy ? entries[idx].healthy.length : 0);
    ret[1].push(entries[idx].warning ? entries[idx].warning.length : 0);
    ret[2].push(entries[idx].danger ? entries[idx].danger.length : 0);
    ret[3].push(name);
  });
  return ret;
}

fixture({
  'GET /company/{id}': function getCompany(request, response) {
    const company = companyData[0];
    const entries = filterEntries(company.id);
    response(Object.assign(company, {
      columns: entries
    }));
  },
  'POST /company/{id}': store.create,
  'PUT /company/{id}': store.update,
  'DELETE /company/{id}': store.destroy
});

export default store;
