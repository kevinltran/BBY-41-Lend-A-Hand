/* Onclick function for selecting the Helper role. */
function selectHelper(){
    document.getElementById("helper-block").addEventListener("click", function (e){
        window.location.href = "createHelper.html"
    })
}

/* Onclick function for selecting the Helpee role. */
function selectHelpee(){
    document.getElementById("helpee-block").addEventListener("click", function(e){
        window.location.href = "createHelpee.html"
    })
}

selectHelpee();
selectHelper();

