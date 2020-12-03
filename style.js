var x =  document.getElementsByClassName('menu-mobile');


function MenuShowsUp(){
    if(x[0].style.display=="grid"){
        return  x[0].style.display="none";
    }else{
        return  x[0].style.display="grid";
    }
    

}