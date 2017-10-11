$(document).ready(function () {
  $('.sites').slick({
    arrows: false,
    autoplay:true,
    autoplaySpeed: 10000
  });
});
setTimeout(function(){
  window.location.reload(1);
}, 600000);//600000);