$(function(){
  $('.js-form').on('submit', function(e){
    e.preventDefault();
    console.log(this);
  });
});
