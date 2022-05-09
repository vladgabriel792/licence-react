$(document).ready(function(){
    var sneaker_wrapper = document.getElementById("sneaker-wrapper");
    var search_text = document.getElementById("search-text");
    var search_bar = document.getElementById("search-bar");
    var search_btn = document.getElementById("search-btn");
    var rectangle_one = document.getElementById("rectangle-one")
    var rectangle_two = document.getElementById("rectangle-two")

    var phone_media = window.matchMedia("(max-width:1024px)");

    // elements visual transitions for pc

    
        if(phone_media.matches)
        {
            // sneaker_wrapper.style.setProperty("justify-content","center","important"); 
            // sneaker_wrapper.style.right = "12px";  
            sneaker_wrapper.style.setProperty("right","12px","important");   
        }
        if(!(phone_media.matches))
        {
            sneaker_wrapper.style.setProperty("justify-content","center","important"); 
            sneaker_wrapper.style.right = "0px";
        }
        
        search_text.style.opacity = "1";
        setTimeout(()=> {
            search_bar.style.opacity = "1";
            search_btn.style.opacity = "1";
        },500)

        rectangle_one.style.backgroundColor = "black";
        rectangle_one.style.backgroundPosition = "100% 0";
        rectangle_two.style.backgroundColor = "black";
        rectangle_two.style.backgroundPosition = "0 100%";

        window.addEventListener("resize",function(event){
            
            if(phone_media.matches)
            {
                sneaker_wrapper.style.setProperty("right","12px","important");   
            }
            
            if(!(phone_media.matches))
            {
                sneaker_wrapper.style.setProperty("justify-content","center","important"); 
                sneaker_wrapper.style.right = "0px";
            }
            
            search_text.style.opacity = "1";
            setTimeout(()=> {
                search_bar.style.opacity = "1";
                search_btn.style.opacity = "1";
            },500)

            rectangle_one.style.backgroundColor = "black";
            rectangle_one.style.backgroundPosition = "100% 0";
            rectangle_two.style.backgroundColor = "black";
            rectangle_two.style.backgroundPosition = "0 100%";
        })

    // elements visual transitions for phone !!!
    
})

