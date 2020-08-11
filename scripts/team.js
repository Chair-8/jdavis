function init(){
  if($('teamfeed').length && $('teamfeed').html() == ""){
    var url = 'https://' + window.location.host + '/team'
    $.getJSON( url + '?format=json-pretty', function( data ) {
      console.log(data);
      data.items.forEach(function(e, i){
        var cats = '';
        if(e.categories){
          if(e.categories.length > 1){
            e.categories.forEach(function(a){
              console.log(a)
              cats = cats + a.toLowerCase().replace(/\s/g,'').replace(/[^a-z0-9\s]/gi, '') + ' ';
            })
          }else if(e.categories.length == 1){
            console.log(e.categories[0])
            cats = e.categories[0]
          }
        }else{
          cats = ' ';
        }
        $('teamfeed').append('<div class="teamItem '+cats+'"><div class="teamItem_content"><div class="teamItem_image" style="background-image:url('+e.assetUrl+')"></div><div class="teamItem_name">'+e.title+'</div><div class="teamItem_certifications">'+e.customContent.certifications.html+'</div><div class="teamItem_title">'+e.customContent.jobTitle.html+'</div></div><div class="teamItem_lightbox"><span class="close">X</span><div class="teamItem_lightbox--name">'+e.title+'</div><div class="teamItem_lightbox--email">'+e.customContent.email+'</div><div class="teamItem_lightbox--bio">'+e.customContent.bio.html+'</div></div></div>')
      })

      console.log($('.teamItem'))
      $('.teamItem').click(function(e){
        console.log(e)
        if($('.teamItem_lightbox.rightAlign').length || $('.teamItem_lightbox.leftAlign').length){

        }else{
          console.log($(e))
          if($(e.currentTarget.offsetLeft)[0] + $(e.currentTarget.offsetWidth)[0] + $(e.currentTarget.offsetWidth)[0] + parseInt($(e.currentTarget).css('margin-right')) > $('teamfeed').width()){
            //lightbox goes to the left
            $(e.currentTarget).find('.teamItem_lightbox').addClass('rightAlign')
          }else{
            //lightbox goes to the right
            $(e.currentTarget).find('.teamItem_lightbox').addClass('leftAlign')
          }
          $(e.currentTarget).find('.teamItem_lightbox').css('width', (parseInt($(e.currentTarget).css('width')) * 2 + 50 + parseInt($(e.currentTarget).css('margin-right'))) + 'px')
          $(e.currentTarget).find('.teamItem_lightbox').css('height', parseInt($(e.currentTarget).css('height')) + 'px')
        }
      })

      var $grid = $('teamfeed').isotope({
        // options
        itemSelector: '.teamItem',
        layoutMode: 'fitRows',
        fitRows: {
          gutter: 40
        }
      });
      // filter items on button click
      $('.filter_cat').click(function() {
        $('.reset').addClass('active')
        console.log($(this))
        $('.filter_cat.active').removeClass('active')
        $(this).addClass('active')
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        if($(window).width() < 850){
          $('html, body').stop().animate({
            scrollTop: $("teamfeed").offset().top - 30
          }, 500);
        }
      });

      $('.reset').click(function(){
      $grid.isotope({ filter: '*' });
        $('.reset').removeClass('active')
        $('.filter_cat').removeClass('active')
      })
    })

    //$('body').on('click', '.teamItem', function(e){

    $('body').on('click', '.close', function(e){
      console.log('close')
      $('.teamItem_lightbox').removeClass('rightAlign').removeClass('leftAlign')
    })
  }



}
init()
