import fixture from 'can-fixture';
import entryData from './entry.json';

const store = fixture.store(entryData);

// Company Level
// const kpis = _.groupBy(list, 'kpiId');
// console.log(_.map(kpis, (kpi) => {
//   return kpi.reduce((acc, k) => {
//     const key = k.value;
//     acc[key] = acc[key] ? acc[key]+1 : 1;
//     return acc;
//   }, {})
// }, {}));

// TODO: /latest, /trend
fixture({
  'GET /entries': store.findAll,
  'GET /entries/{id}': store.findOne,
  'POST /entries': store.create,
  'PUT /entries/{id}': store.update,
  'DELETE /entries/{id}': store.destroy
});

export default store;
