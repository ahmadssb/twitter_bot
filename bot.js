// import twit Library
var twit = require("twit");

// set up an instance of the Twit API credentials 

var Twitter = new twit({
    consumer_key:  'xxxxxxxxxxxx',
    consumer_secret:  'xxxxxxxxxx',
    access_token: 'xxxxxxxxxxxxx',
    access_token_secret: 'xxxxxxxxxxxx',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
});


// post twit to my accout

/*
Twitter.post('statuses/update', { status: 'test twitter post API!' }, function(err, data, response) {
    console.log(data)
  });

*/
