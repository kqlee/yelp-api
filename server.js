// Sample server file to test API calls
import express from 'express';
import bodyParser from 'body-parser';
import YelpSearch from './api';
import dotenv from 'dotenv';

// Invoke our env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//Add middleware to the application stack
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// Checks to make sure server is working
app.get('/', (req, res) => {
  res.send('Yelp Search API');
});

// Post request that links to restaurant search
app.post('/restaurants', (req, res) => {
  const defaultParams = {
    location: req.body.location || 'San Francisco',
    term: req.body.term || 'food',
    limit: req.body.limit || 1,
    sort: req.body.sort || 0,
    radius_filter: req.body.radius_filter || 3200,
  };
  YelpSearch.Restaurant(defaultParams, (err, restaurants) => {
    if (err) {
      console.log(err);
    }
    res.send(restaurants);
  });
});

app.listen(port, () => {
  console.log('Server is listening on port:', port);
});
