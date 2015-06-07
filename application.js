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
// - tweets are in reverse order we want printed
// - making sure to access ONLY new tweets upon button click (and subsequent fcn call)

// TO DO: create function that only accesses new tweets

/**
 * Filter elements in new array not present in old array. Update old array with new elements.
 * @param  {array} currentArray [array containing new elements]
 * @param  {array} oldArray     [array of archived elements]
 * @return {array}              [elements unique to new array]
 */
var returnNewElements = function(currentArray, oldArray) {
  // use filter fcn to return only new elements
  var newElements = currentArray.filter(function(element) {
    return oldArray.indexOf(element) === -1;
  });
  // update old array to include new elements
  Array.prototype.push.apply(oldArray, newElements);
  // return new elements array
  return newElements;
}

/*
 * Return a new array with reversed values
 * @param  {array} array [input array]
 * @return {array}       [reversed copy of array]
 */
var reverseCopy = function(array) {
  return array.slice().reverse();
}

$(document).ready(function(){
  // setting up HTML structure
  var $body = $('body');
  var $header = $('<header></header>');
  var $main = $('<div class="container"></div>');
  var $refresh = $('<button name="refresh"></button>');
  var $timeline = $('<div class="timeline"></div>');

  $refresh.text('Refresh');
  $header.append('<h1>Twittler</h1>');
  $body.append($header, $main);
  $main.append($refresh, $timeline);

  var archivedTweets = [];

  var printTweet = function() {
    var newTweets = returnNewElements(streams.home, archivedTweets);
    var reversedTweets = reverseCopy(newTweets);
    $.each(newTweets, function(index, tweetObj) {
      var $tweet = $('<div class="tweet"></div>');
      var $message = $('<p class="message"></p>');
      var $user = $('<span class = "user"></span>');
      var $date = $('<span class = "date"></span>');

      $message.text(tweetObj.message);
      $user.text('@' + tweetObj.user + ' ');
      $date.text(tweetObj.created_at + ' ');

      $tweet.append($user, $date, $message);
      $timeline.prepend($tweet);
    });
  };

  printTweet();
  $('button').on('click', printTweet);
});


