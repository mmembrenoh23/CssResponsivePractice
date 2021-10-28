var addClassMobile = function() {
    var element=document.getElementsByClassName("nav-item");
    for(var i=0; i < element.length; i++) {
        element[i].classList.toggle('open');
       
    }
}