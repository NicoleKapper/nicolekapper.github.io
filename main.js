$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a','f','t','y','e','r','c','v' ) {
    // img = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Love_or_Heart_transparent.png';
  } else if ( key == 'b' ) {
    // img = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Love_or_Heart_transparent.png';
  } else if ( key == 'c' ) {
    // img = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Love_or_Heart_transparent.png';
  }  else if ( key == 'd' ) {
    // img = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Love_or_Heart_transparent.png';
  }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});
