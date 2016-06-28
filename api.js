// Yelp API starter module in ES6
import Yelp from 'yelp';
import dotenv from 'dotenv';

// Invoke our env file
dotenv.config();

// Create a Yelp object, passing in required parameters
const yelp = new Yelp({
  consumer_key: process.env.YELP_CONSUMER_KEY,
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET,
});

const YelpSearch = {

  // Restaurant Search
  Restaurant: (searchParams, callback) => {
    // Pass in search parameters
    yelp.search(searchParams)
      .then(data => {
        if (callback) {
          callback(data);
        }
      })
      .catch(err => {
        if (err) {
          console.error('Error searching Yelp Restaurants: ', err);
        }
      });
  },

  // Business Search
  Business: (searchParams) => {
    yelp.business(searchParams, callback)
      .then(data => {
        if (callback) {
          callback(data);
        }
      })
      .catch(err => {
        if (err) {
          console.error('Error searching Yelp Businesses: ', err);
        }
      });
  },

  // Phone Number Search
  Phone: (phoneNumber) => {
    yelp.phoneSearch(phoneNumber, callback)
      .then(number => {
        if (callback) {
          callback(number);
        }
      })
      .catch(err => {
        console.error('Error searching Yelp Phone Number: ', err);
      });
  }
};

export default YelpSearch;