function selectHelper(){
    document.getElementById("helper-block").addEventListener("click", function (e){
        window.location.href = "confirmHelper.html"
    })
}

function selectHelpee(){
    document.getElementById("helpee-block").addEventListener("click", function(e){
        window.location.href = "confrimHelpee.html"
    })
}

selectHelpee();
selectHelper();