const menuicon=document.getElementById("menu-icon");
const slideoutmenu=document.getElementById("slideout-menu");
const searchicon=document.getElementById("search-icon");
const searchbox=document.getElementById("search-box");

searchicon.addEventListener('click',function(){
    if(searchbox.style.top=='72px'){
        searchbox.style.top='24px';
        searchbox.style.pointerEvents='none';
    } else{
        searchbox.style.top='72px';
        searchbox.style.pointerEvents='auto';
    }
});


menuicon.addEventListener('click',function(){
    if(slideoutmenu.style.opacity=="1"){
        slideoutmenu.style.opacity='0';
        slideoutmenu.style.pointerEvents='none';
    }
    else{
        slideoutmenu.style.opacity='1';
        slideoutmenu.style.pointerEvents='auto';
    }
});