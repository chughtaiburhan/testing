let equal=document.getElementById("equalIcon");
let cross=document.getElementById("crossIcon");
let none=document.getElementById("noneIcon");
let nav=document.getElementById("navList");
let search=document.getElementById("searchIcon");
let searchBar=document.getElementById("searchBar");

equal.addEventListener('click',function showNav(){
    if(nav.style.zIndex==-1){
        
        nav.style.zIndex=1;
        nav.style.width="85vh";
        nav.style.transition="all 0.4s ease";
    }else{
        nav.style.zIndex=-1;
    }
})
none.addEventListener('click',function  noneNav(){
    if(nav.style.zIndex==1){
        nav.style.zIndex=-1;
        nav.style.width="0vh";
        nav.style.transition="all 0.4s ease";
    }else{
        nav.style.zIndex=1;
    }
})

search.addEventListener('click',function showSearch(){
    if(searchBar.style.display=="none"){
        searchBar.style.display="block";
        search.style.display="none";
        cross.style.display="block";
        cross.style.transition="all 0.4s ease";
        cross.style.border="1px solid grey"
    }else{
        cross.style.display="none";
        searchBar.style.display="none";
    }
})

cross.addEventListener('click',function showSearch(){
    if(searchBar.style.display=="block"){
        searchBar.style.display="none";
        search.style.display="block";
        cross.style.display="none";
        searchBar.style.transition="all 0.4s ease";
    }else{
        cross.style.display="none";
        searchBar.style.display="none";
    }
})