const fs = require('fs-extra');

const kpiData = fs.readJsonSync('src/models/fixtures/kpi.json');
const projectData = fs.readJsonSync('src/models/fixtures/project.json');
const clientData = fs.readJsonSync('src/models/fixtures/client.json');

let id = 0;
const entryData = [];
const intervals = ['2016-06-23T16:41:47.918Z', '2016-07-23T16:41:47.918Z', '2016-08-23T16:41:47.918Z'];
const values = ['danger', 'warning', 'healthy'];

function getClient(clientId) {
  return clientData.filter((client) => {
    return client.id === clientId;
  })[0];
}

function getValue() {
  return values[Math.random() * 3 | 0]
}

projectData.forEach((project) => {
  const client = getClient(project.clientId);
  kpiData.forEach((kpi) => {
    intervals.forEach((timestamp) => {
      entryData.push({
        id: ++id,
        projectId: project.id,
        clientId: project.clientId,
        companyId: client.companyId,
        kpiId: kpi.id,
        name: kpi.name, // ?
        timestamp,
        value: getValue()
      });
    });
  });
});

fs.writeJsonSync('src/models/fixtures/entry.json', entryData);
