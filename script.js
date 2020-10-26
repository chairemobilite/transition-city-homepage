$(function(){

  var doorsOpened = false;
  
  $('.ema').attr('href', 'ma' + 'il' + 'to' + ':' + 'in' + 'fo' + '@' + 'tr' + 'ansit' + 'ion' + '.' + 'ci' + 'ty')
  
  
  //var actualRightPadding = parseInt($('section#intro').css('paddingRight').replace(/[^-\d\.]/g, ''));
  //if (actualRightPadding < 476 + 300)
  //{
  //  $('section#intro').css('paddingRight', 476 + 300);
  //}
  //
  //$(window).scroll(function (event) {
  //  var scroll = $(window).scrollTop();
  //  if (scroll >= 0 && scroll < 400)
  //  {
  //    var newLeftPosition  = Math.min(476 + scroll / 1.2, 680);
  //    var newRightPosition = Math.max(200 - scroll / 1.2, 0);
  //    $('.tram_door.left').css('right', newLeftPosition);
  //    $('.tram_door.right').css('right', newRightPosition);
  //    var actualRightPadding = parseInt($('section#intro').css('paddingRight').replace(/[^-\d\.]/g, ''));
  //    if (actualRightPadding < newLeftPosition + 300)
  //    {
  //      $('section#intro').css('paddingRight', newLeftPosition + 300);
  //    }
  //    //if (newLeftPosition >= 450)
  //    //{
  //    //  doorsOpened = true;
  //    //}
  //  }
  //});
  
  $('p.more').click(function(){
    var section_name = $(this).attr('data-section');
    $('div.more.' + section_name).show('slow');
    $(this).hide('slow');
  });
  

});
