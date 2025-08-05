const navIcon= document.querySelector('#header')
    navIcon.style.maxHeight = '0px'
    function showSidebar(){
      if( navIcon.style.maxHeight == '0px'){
        navIcon.style.maxHeight = '600px';
      }
      else{
        navIcon.style.maxHeight = '0px';
      }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
 new Swiper('.card-wraper', {
 
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

 
breakpoints:{
  0:{
    slidesPerView:1
  },
  768:{
    slidesPerView:3
  },
  102:{
    slidesPerView:1
  }
}
 
});