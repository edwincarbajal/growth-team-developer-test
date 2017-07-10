$(function() {
  if(window.location.href == 'http://localhost:3000/') {
   $(".search-li").addClass("active");
  } else {
   $(".favorites-li").addClass("active");
  }
})
