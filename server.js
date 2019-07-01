import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// ROUTES...
const user = require('./routes/user.route');

app.get('/', function(req, res) {
  res.json({
    status: 200,
    message: 'Hello World'
  });
});

app.use('/user', user);


const PORT = 1234;
const server = app.listen(PORT, () => {
  console.log('server started on port: 1234');
})