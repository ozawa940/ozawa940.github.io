// initialization
function  init() {

    document.getElementsByTagName("section")[0].className = "fadein";

    preview_contents_ajax("../md/profile/my_profile.md");


}


function init_view_click(){

    var menu_ = document.getElementsByClassName("preview");




    // Object.keys(menu_).forEach(function(key_){
    //     menu_[key_].addEventListener("click", function(){
    //         preview_contents(menu_[key_].value)
    //     }, false);

    // })


}


// return markdown
function preview_contents_ajax(url_){

    var r_ = new XMLHttpRequest();

    r_.onreadystatechange = function(){
        if(r_.readyState != 4 || r_.status != 200){ return; }
        //success 
        var md_ = marked(r_.responseText);
        var menu_ = document.getElementById("contents").appendChild(md_);
        
        
    }

    r_.open("GET", url_, true);
    r_.send(null);

}



window.addEventListener("DOMContentLoaded", init, false);
