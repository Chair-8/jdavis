function init(){
  if($('teamfeed').length && $('teamfeed').html() == "")
  var url = window.location.href + '/team'
  $.getJSON( url + '?format=json-pretty', function( data ) {
    console.log(data);
  })
}
init()
