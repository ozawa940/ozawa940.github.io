// initialization
function  init() {

    document.getElementsByTagName("section")[0].className = "fadein";

    preview_contents("../md/profile/my_profile.md");


}


function init_view_click(){

    var menu_ = document.getElementsByClassName("preview");




    // Object.keys(menu_).forEach(function(key_){
    //     menu_[key_].addEventListener("click", function(){
    //         preview_contents(menu_[key_].value)
    //     }, false);

    // })


}


function preview_contents (url_) {

    var md_ = marked(ajax(url_));
    var menu_ = document.getElementById("contents").appendChild(md_);


}


// return markdown
function ajax(url_){

    var r_ = new XMLHttpRequest();

    r_.onreadystatechange = function(){
        if(r_.readyState != 4 || r_.status != 200){ return; }
        
        return r_.responseText;
    }

    r_.open("GET", url_, true);
    r_.send(null);

}



window.addEventListener("DOMContentLoaded", init, false);
