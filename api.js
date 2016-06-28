const Yelp = require('yelp');
const yelpKeys = require('./apiKeys').yelpKeys;

const yelp = new Yelp({
  consumer_key: yelpKeys.consumer_key,
  consumer_secret: yelpKeys.consumer_secret,
  token: yelpKeys.token,
  token_secret: yelpKeys.token_secret
});

yelp.searchYelp = function(searchPreferences, callback) {

  yelp.search(searchPreferences)
  .then(function(jsonData) {
    const randomIndex = Math.floor(Math.random() * jsonData.businesses.length);
    const chosen = jsonData.businesses[randomIndex];
    callback(chosen);
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
};

module.exports = yelp;