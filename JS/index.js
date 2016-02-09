// initialization
function  init() {


    preview_contents_ajax("../md/profile/my_profile.md");
    init_view_click();
    setTimeout(function(){
        document.getElementsByTagName("section")[0].className = "fadein";
    }, 500);
}


function init_view_click(){

    var menu_ = document.getElementsByClassName("preview");
    // contact
    menu_[0].addEventListener("click", function(){
        if(menu_[0].className == "preview"){        

            active_class(menu_[0], menu_[1]);
            document.getElementById("contents").removeChild();
            preview_contents_ajax("../md/profile/my_profile.md");

        }

    })
    // repository
    menu_[1].addEventListener("click", function(){
        if(menu_[1].className == "preview"){        

            active_class(menu_[1], menu_[0]);
            document.getElementById("contents").removeChild();
            preview_contents_ajax("../md/repo/head.md");

        }
    })

}

// TODO: 拡張時作りなおす 
function active_class(act_elm_, pas_elm_){
    act_elm_.className = "preview active";
    pas_elm_.className = "preview";
}

// return markdown
function preview_contents_ajax(url_){

    var r_ = new XMLHttpRequest();

    r_.onreadystatechange = function(){
        if(r_.readyState != 4 || r_.status != 200){ return; }
        //success 
        var md_ = marked(r_.responseText);
        document.getElementById("contents").innerHTML = md_;


    }

    r_.open("GET", url_, true);
    r_.send(null);

}



window.addEventListener("DOMContentLoaded", init, false);
