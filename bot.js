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

// retweet function from specific user 

var retweet = function () {
    var params = {
        Name: 'ahmadssb', 
        screen_name: 'ahmadssb',  
        count: 1   //return last tweet
    }
    Twitter.get('statuses/user_timeline', params, function (err, data) {
        if (!err) {
                console.log(data);
                console.log("new line");
                var retweetId = data[0].id_str;
                Twitter.post('statuses/retweet/:id', {
                    id: retweetId
                }, function (err, response) {
                    if (response) {
                        console.log('Retweeted!!!');
                    }
                    if (err) {
                          console.log(err);
                        console.log('Problem when retweeting. Possibly already retweeted this tweet!');
                    }
                });
        }
        else {
            console.log('Error during tweet search call');
        }
    });
};


retweet();