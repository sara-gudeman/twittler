// Twittler functionality
// 1. show user new tweets
// 2. display time stamps
// 3. design interface
// 4. allow user to click on username & see that user's timeline

// 1. show user new tweets
// what we have: existing set of tweets
// what happens: new tweets are added to global var stream
// what we want
//  - display existing tweets on loading from newest to oldest
//  - have a button that prints ONLY the newly added tweets
// Issues facing:
// - tweets are in reverse order we want pritned
// - making sure to access ONLY new tweets upon button click (and subsequent fcn call)

// TO DO: create function that only accesses new tweets

/**
 * Filter elements in new array not present in old array. Update old array with new elements.
 * @param  {array} currentArray [array containing new elements]
 * @param  {array} oldArray     [array of archived elements]
 * @return {array}              [elements unique to new array]
 */
function returnNewElements(currentArray, oldArray) {
}

function reverseCopy(array) {
  return array.slice();
}

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


