const { Router } = require('express');
const app = Router();

const Jobs = require('../controllers/jobs/jobs');

//jobs routes
app.get('/jobs', Jobs.index);
app.post('/jobs', Jobs.create);
app.get('/jobs/:id', Jobs.findBy);
app.delete('/jobs/:id', Jobs.deleteBy);
app.put('/jobs/:id', Jobs.update);

module.exports = app;
