console.log("i'm in")



//removing the drop down nav bar at desktop resolution
//attempt:101
//progress:-10%

function closeTab(x){
   ham2.click()=false;
    if (x.matches ){
        ham2.click()= true;
        console.log("the screen is laptop resolution");
    }
}
 var ham2= document.getElementById("menu-bar2") 
var x= window.matchMedia("(min-width:850px)")

closeTab(x);
x.addListener(closeTab);