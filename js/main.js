var mG
var d


var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var miasiento = urlParams.get('user_num');

localStorage.setItem('user_num', miasiento);

/*
d = new clsDebug();
d.log("que tal");
d.openurl("https://www.w3schools.com");
*/


window.onload= function(){
    if (document.readyState=="complete"){
        mG = new clsCinemaCompany(); 
        //alert(miasiento);
    }
}