function init(){
  if($('teamfeed').length && $('teamfeed').html() == "")
  var url = 'https://' + window.location.host + '/team'
  $.getJSON( url + '?format=json-pretty', function( data ) {
    console.log(data);
  })
}
init()
