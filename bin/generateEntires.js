var fs = require('fs-extra');

const kpiData = fs.readJsonSync('src/models/fixtures/kpi.json');
const projectData = fs.readJsonSync('src/models/fixtures/project.json');

let id = 0;
const entryData = [];
const intervals = ['2016-06-23T16:41:47.918Z', '2016-07-23T16:41:47.918Z', '2016-08-23T16:41:47.918Z'];
const values = ['danger', 'warning', 'healthy'];

function getValue () {
  return values[Math.random() * 3 | 0]
}

projectData.forEach((project) => {
  kpiData.forEach((kpi) => {
    intervals.forEach((timestamp) => {
      entryData.push({  
        id: ++id,
        projectId: project.id,
        clientId: project.clientId,
        kpiId: kpi.id,
        name: kpi.name, // ?
        timestamp: timestamp,
        value: getValue()
      });
    });
  });
});

fs.writeJsonSync('src/models/fixtures/entry.json', entryData);
