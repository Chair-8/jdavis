function init(){
  if($('teamfeed').length && $('teamfeed').html() == "")
  var url = 'https://' + window.location.host + '/team'
  $.getJSON( url + '?format=json-pretty', function( data ) {
    console.log(data);
    data.items.forEach(function(e, i){
      $('teamfeed').append('<div class="teamItem"><div class="teamItem_content"><div class="teamItem_image" style="backgrond-image:url('+e.assetUrl+')"></div><div class="teamItem_name">'+e.title+'</div><div class="teamItem_certifications">'+e.customContent.certifications.html+'</div><div class="teamItem_title">'+e.customContent.jobTitle.html+'</div></div><div class="teamItem_lightbox"><div class="teamItem_lightbox--name">'+e.title+'</div><div class="teamItem_lightbox--email">'+e.customContent.email+'</div><div class="teamItem_lightbox--bio">'+e.customContent.bio.html+'</div></div></div>')
    })
  })

  $('body').on('click', '.teamItem', function(e){
    console.log('clicked')
    console.log($(e.target).css('width'))
    console.log($(e.target).find('.teamItem_lightbox'))
    $(e.target).find('.teamItem_lightbox').css('width', $(e.target).css('width') * 2 + $(e.target).css('margin-right') + 'px')
  })
}
init()
