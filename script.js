var host = 'https://node-slack-christopherjkim.c9.io';
var sendRoute = host + '/send';
var messagesRoute = host + '/messages';

function sendMessage (user, content, callback) {
  $.post(sendRoute, {user: user, content: content})
  .done(callback);
}

function getMessages (callback) {
  $.get(messagesRoute)
  .done(callback);
}


$('#submit-message').submit(function (e) {
  e.preventDefault();

  /* TODO: send message to server */
  //. is for class and # is for id
  var user = $('#submit-user').val()
  var content = $('#submit-content').val()
  var callback = function () {
    //do whatever's here when sendMessage completes
    $('#submit-content').val("")
  }
  sendMessage(user, content, callback);
    
});


/* use setInterval to periodically get new messages and update the list */

window.setInterval(function () {

  getMessages(function (messages) {
    // messages is an array of messages
    // empty message log
    $('.messages').empty();

    // TODO: append messages to <ul class="messages">
    for (var i = 0; i < messages.length; i++) {
      
      //message.user
      //message.content
      // put thoes things in between li tags
      
      
      //output --> <li> James: uiadvuyaebfvhieabvioebvuoiwbvu </li>
      $('.messages').append(produceMessage(messages[i].user, messages[i].content));
    }
    
  });

}, 300);

function produceMessage(user, content) {
  return '<li>' + user + ": " + content + '</li>';
}
