$(document).ready(function(){

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

  

  var navbar = document.getElementById("navbar");
  var navitems = document.getElementsByClassName("nav-item");
  var hamburger = document.getElementById("hamburger");

  var upper_text_wrapper = document.getElementById("upper-text-wrapper");
  var upper_search_btn = document.getElementById("upper-search-btn");
  var scroll_arrow = document.getElementById("scroll-arrow");

  var sneaker_prod = document.getElementById("sneaker_prod");
  var upper_page = document.getElementById("upper-page");
  var main_page = document.getElementById("main-page");
  var final_bar = document.getElementById("final-bar")

  var search_icon = document.getElementById("upper-search-btn");
  var search_wrapper = document.getElementById("search-wrapper");
  var close_search = document.getElementById("close-search");
  var search_input = document.getElementById("search-product");
  var search_confirm = document.getElementById("btn-search")

  search_wrapper.style.height = "0px";
  close_search.style.display = "none";
  search_input.style.display = "none";
  search_confirm.style.display = "none";


  search_icon.onclick = () => {
    // if(search_wrapper.style.height == "0em")
    if(search_wrapper.style.height == "0px")
    {
      // search_wrapper.style.height = "100em";
      search_wrapper.style.height = "100vh";
      close_search.style.display = "block";
      search_input.style.display = "block";
      search_confirm.style.display = "flex";
    }
  }

  close_search.onclick = () => {
    // if(search_wrapper.style.height == "100em")
    if(search_wrapper.style.height == "100vh")
    {
      search_wrapper.style.height = "0px";
      close_search.style.display = "none";
      search_input.style.display = "none";
      search_confirm.style.display = "none";
    }
  }

  if(document.documentElement.scrollTop==0)
  {
    final_bar.style.bottom = "-4em";
    hamburger.style.filter = "invert(0%) sepia(100%) \
    saturate(0%) hue-rotate(338deg) brightness(200%) contrast(200%)";

    navbar.style.setProperty("background-color","transparent","important");
    document.body.style.setProperty("--top-border-dist","0px");
  }
  window.onscroll = function(e) { 
    setTimeout(() => {
      scroll_arrow.style.opacity = "0";
    },700)
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    scroll_arrow.style.opacity = "1";

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      scroll_arrow.style.opacity = "0";
  }

    if(document.documentElement.scrollTop > 0)
    {
      main_page.style.height = "80em";
      upper_text_wrapper.style.opacity = "0";
      upper_search_btn.style.display = "none";
      sneaker_prod.style.display = "none";
      upper_page.style.height="30vw";
    }

    if(document.documentElement.scrollTop == 0)
    {
      final_bar.style.bottom = "-4em";
      main_page.style.height = "30em";
      upper_page.style.height= "60vw";
      sneaker_prod.style.display = "block";
      for ( var i = 0; i < navitems.length ; i ++ )
        navitems[i].style.setProperty('filter', 'none', 'important');
        scroll_arrow.style.opacity = "0";

      
      upper_text_wrapper.style.opacity = "1";
      upper_search_btn.style.display = "block";

      hamburger.style.filter = "invert(0%) sepia(100%) \
        saturate(0%) hue-rotate(338deg) brightness(200%) contrast(200%)";

      document.body.style.setProperty("--top-border-dist","0px");
      navbar.style.setProperty("background-color","transparent","important");

      document.getElementById("favourites").style.filter="invert(0%) sepia(100%) \
      saturate(0%) hue-rotate(338deg) brightness(200%) contrast(200%)";
      document.getElementById("search").style.filter="invert(100%) sepia(0%) saturate(616%) \
      hue-rotate(62deg) brightness(93%) contrast(91%)";
      
    }
    else{
      final_bar.style.bottom = "0px";
      navbar.style.setProperty("background-color","white","important");
      hamburger.style.filter = "invert(0%) sepia(100%) \
      saturate(0%) hue-rotate(338deg) brightness(200%) contrast(200%)";
      
      for ( var i = 0; i < navitems.length ; i ++ )
      navitems[i].style.filter = "invert(0%) sepia(7%) saturate(100%) \
      hue-rotate(175deg) brightness(0%) contrast(105%)";
      document.getElementById("favourites").style.filter="invert(100%) sepia(0%) saturate(616%) \
      hue-rotate(62deg) brightness(93%) contrast(91%)";
      document.getElementById("search").style.filter="invert(0%) sepia(100%) \
      saturate(0%) hue-rotate(338deg) brightness(200%) contrast(200%)";
    }

    if(scrollY <= this.lastScroll)
    {
      navbar.style.top = '0';
      if(document.documentElement.scrollTop != 0)
        document.body.style.setProperty("--top-border-dist","80px");
      scroll_arrow.style.transform = "rotate(180deg)"
    }
    else{
      scroll_arrow.style.transform = "rotate(0deg)"
      scroll_arrow.style.bottom = "3%";
      navbar.style.top = '-80px'; 

      document.body.style.setProperty("--top-border-dist","0px");
    }

    this.lastScroll = scrollY ;
  }
});