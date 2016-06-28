// Yelp API starter module in ES6

import Yelp from 'yelp';
import yelpKeys from './yelpKeys'; // Create a file that includes Yelp keys

// Create a Yelp object, passing in required parameters
const yelp = new Yelp({
  consumer_key: yelpKeys.consumer_key,
  consumer_secret: yelpKeys.consumer_secret,
  token: yelpKeys.token,
  token_secret: yelpKeys.token_secret
});

const YelpSearch = {

  // Restaurant Search
  SearchRestaurants: (searchParams, callback) => {
    // Pass in search parameters
    yelp.search(searchParams)
      .then(data => {
        if (callback) {
          callback(data);
        }
        res.send(JSON.stringify(data));
      })
      .catch(err => {
        if (err) {
          console.err('Error searching Yelp: ', err);
        }
      });
  },

};

export default YelpSearch;