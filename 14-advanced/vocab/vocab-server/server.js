const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

// Details:
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  // coming soon
);

const port = process.env.PORT || 3000;
const app = express();

app(cors());
app.use(bodyParser.urlencode({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

// 404
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` })
});

console.log(`Server started on port ${ port }`);
