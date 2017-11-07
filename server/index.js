const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => console.log(`Waiting for requests on port ${PORT}`));
