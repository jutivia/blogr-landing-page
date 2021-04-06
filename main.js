console.log("i'm in")



// removing the drop down nav bar at desktop resolution
// attempt:150
// progress:it finally works!
var clicked=0
function clickedTab(){
   return clicked++;

}

function closeTab(x){
    clickedTab();
    if (x.matches && clicked>=0){
        document.getElementById("menu-bar2").click();
        console.log("the screen is laptop resolution");
    }

}
 function ifWindow(){
     if (window.innerWidth>=850){
         closeTab(x)
          
     }
 }
var x= window.matchMedia("(min-width:850px)")
 x.addListener(closeTab);


window.onload= function(){closeTab(x)};
ifWindow();

