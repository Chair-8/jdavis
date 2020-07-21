function init(){
  if($('teamfeed').length && $('teamfeed').html() == ""){
    var url = 'https://' + window.location.host + '/team'
    $.getJSON( url + '?format=json-pretty', function( data ) {
      console.log(data);
      data.items.forEach(function(e, i){
        var cats = '';
            if(a.categories){
              if(a.categories.length > 1){
                a.categories.forEach(function(a){
                  console.log(a)
                  cats = cats + a.toLowerCase().replace(/\s/g,'').replace(/[^a-z0-9\s]/gi, '') + ' ';
                })
              }else if(a.categories.length == 1){
                  console.log(a.categories[0])
                cats = a.categories[0]
              }
            }else{
             cats = ' ';
            }
        $('teamfeed').append('<div class="teamItem '+cats+'"><div class="teamItem_content"><div class="teamItem_image" style="background-image:url('+e.assetUrl+')"></div><div class="teamItem_name">'+e.title+'</div><div class="teamItem_certifications">'+e.customContent.certifications.html+'</div><div class="teamItem_title">'+e.customContent.jobTitle.html+'</div></div><div class="teamItem_lightbox"><div class="teamItem_lightbox--name">'+e.title+'</div><div class="teamItem_lightbox--email">'+e.customContent.email+'</div><div class="teamItem_lightbox--bio">'+e.customContent.bio.html+'</div></div></div>')
      })
    })

    $('body').on('click', '.teamItem', function(e){
      console.log('clicked')
      console.log($(e.currentTarget))
      console.log($(e.currentTarget.offsetLeft)[0] + $(e.currentTarget.offsetWidth)[0])
      console.log($(window).width())
      if($(e.currentTarget.offsetLeft)[0] + $(e.currentTarget.offsetWidth)[0] + $(e.currentTarget.offsetWidth)[0] + parseInt($(e.currentTarget).css('margin-right')) > $('teamfeed').width()){
        //lightbox goes to the left
        $(e.currentTarget).find('.teamItem_lightbox').addClass('rightAlign')
      }else{
        //lightbox goes to the right
        $(e.currentTarget).find('.teamItem_lightbox').addClass('leftAlign')
      }
      $(e.currentTarget).find('.teamItem_lightbox').css('width', (parseInt($(e.currentTarget).css('width')) * 2 + parseInt($(e.currentTarget).css('margin-right'))) + 'px')
      $(e.currentTarget).find('.teamItem_lightbox').css('height', parseInt($(e.currentTarget).css('height')) + 'px')
    })
  }
}
init()
