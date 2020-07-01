function init(){
  if($('teamfeed').length && $('teamfeed').html() == "")
  var url = 'https://' + window.location.host + '/team'
  $.getJSON( url + '?format=json-pretty', function( data ) {
    console.log(data);
    data.items.forEach(function(e, i){
      $('teamfeed').append('<div class="teamItem"><div class="teamItem_content"><div class="teamItem_image" style="backgrond-image:url('+e.assetUrl+')"></div><div class="teamItem_name">'+e.title+'</div><div class="teamItem_certifications">'+e.customContent.certifications+'</div><div class="teamItem_title">'+e.customContent.jobTitle+'</div></div><div class="teamItem_lightbox"><div class="teamItem_lightbox--name">'+e.title+'</div><div class="teamItem_lightbox--email">'+e.customContent.email+'</div><div class="teamItem_lightbox--bio">'+e.customContent.bio+'</div></div></div>')
    })
  })
}
init()
