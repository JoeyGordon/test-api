const express = require('express');
const peopleRoutes = require('./views/v1/people');
const statusRoutes = require('./views/status');
const timersRoutes = require('./views/v1/timers');
const jobsRoutes = require('./views/v1/jobs');

const PORT = 1234;

const app = express();

app.listen(process.env.PORT || PORT, () => console.log(`Server listening on port ${process.env.PORT || PORT}!`),);

app.use(express.json());

app.use('/', statusRoutes);
app.use('/v1/', jobsRoutes);
app.use('/v1/', peopleRoutes);
app.use('/v1/', timersRoutes);
