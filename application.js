// NOTE: jQuery .each fcn takes in index first THEN value! Reverse of in vanilla JS
// $.each(streams.home, function(index, value) {
//   $('.container').append('<div>' + value + '</div>');
// });

$(document).ready(function(){
  var $body = $('body');
  // setting up HTML structure
  var $container = $('<div class="container"></div>');
  $body.append($container);
  $container.append('<button>Refresh Tweets</button>');
  var printTweet = function() {
    $.each(streams.home, function(index, tweetObj) {
    var $tweet = $('<div class="tweet"></div>');
    $tweet.text('@' + tweetObj.user + ': ' + tweetObj.message);
    $tweet.appendTo($container);
  });

  };
  $('button').on('click', function(){
    // need to create fcn that loads new tweets on click
    // alert('I have been clicked!')
    printTweet();
  });
  // var index = streams.home.length - 1;
  // while(index >= 0){
  //   var tweet = streams.home[index];
  //   var $tweet = $('<div></div>');
  //   $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //   $tweet.appendTo($body);
  //   index -= 1;
  // }
});