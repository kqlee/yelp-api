#yelpsearch

Simple Yelp Search Module for http://yelp.com/

### Usage
Obtain api "keys" from https://www.yelp.com/developers/ after registration. You may load it as an environment variable or include it as an optional parameter. 
```js

// Returns search data from Yelp based on parameters passed in

const defaultParams = {
  location: 'San Francisco',
  term: 'food',
  limit: 1,
  sort: 0,
  radius_filter: 3200,

// Example data from result:

{ 
  region: { 
  span: { latitude_delta: 0, longitude_delta: 0 },
  center: { latitude: 37.7811510761365, longitude: -122.40636505138 } },
  total: 4665,
  businesses: [ 
    {
      is_claimed: true,
      rating: 4.5,
      mobile_url: 'http://m.yelp.com/biz/box-kitchen-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=5_w70QtwQthl75voBKhR8w',
      rating_img_url: 'https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png',
      review_count: 367,
      name: 'Box Kitchen',
      rating_img_url_small: 'https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png',
      url: 'http://www.yelp.com/biz/box-kitchen-san-francisco?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=5_w70QtwQthl75voBKhR8w',
      categories: [Object],
      phone: '4155807170',
      snippet_text: 'Absolutely delivers with great taste and quality ingredients. We\'re staying in a hotel nearby and my teen daughter wanted a burger. I refused to go to a...',
      image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/9gBzSxLhmjZZPW_VjsHJDQ/ms.jpg',
      snippet_image_url: 'http://s3-media1.fl.yelpcdn.com/photo/PJrhdxMoqTqU8fK-5p6oRg/ms.jpg',
      display_phone: '+1-415-580-7170',
      rating_img_url_large: 'https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png',
      id: 'box-kitchen-san-francisco',
      is_closed: false,
      location: [Object] 
    }
  ]
}

```    

License
----
MIT