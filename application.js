// NOTE: jQuery .each fcn takes in index first THEN value! Reverse of in vanilla JS
$.each(streams.home, function(index, value) {
  console.log(value.message);
});

$(document).ready(function(){
  var $body = $('body');
  // setting up HTML structure
  $body.append('<div class="container"></div>');
  $('.container').append('<button>Refresh Tweets</button>');

  // var index = streams.home.length - 1;
  // while(index >= 0){
  //   var tweet = streams.home[index];
  //   // console.log(tweet);
  //   var $tweet = $('<div></div>');
  //   $tweet.text('@' + tweet.user + ': ' + tweet.message);
  //   $tweet.appendTo($body);
  //   index -= 1;
  // }
// };
});