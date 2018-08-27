window.onload = function(){
    
    
    function setClass(yourElement, yourClass){
        var element = document.getElementById(yourElement);
        element.classList.toggle(yourClass); //metoda dodawania i usuwania klasy.
    };
   
    
    document.getElementById("nav-hamburger").onclick = function(){
    setClass("pageNavigation", "visible")};
   
    
}