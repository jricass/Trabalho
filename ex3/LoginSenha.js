function conta(){
    var log
    var sen

    log = document.getElementById("login").value
    sen = document.getElementById("senha").value

    if(log == "ale@cesupa.br" && sen == "123123") {
        window.location = "https://www.cesupa.br/"

    } else if(log == "pedro@giroto.com" && sen == "223344"){
        window.location = "https://www.detran.pa.gov.br/index_.php"

    } else if(log == "isaac@java.com" && sen == "asdasd"){
        window.location = "https://www.idopterlabs.com.br/"

    } else if(log == "ale@cesupa.br" || log == "pedro@giroto.com" || log == "isaac@java.com"){
        document.getElementById("senhaErro").style.display = "block";
        
    } else{
        document.getElementById("loginErro").style.display = "block";
    }

}


document.getElementById("login").addEventListener("focus", function(){
    document.getElementById("loginErro").style.display = "none";
})


document.getElementById("senha").addEventListener("focus", function(){
    document.getElementById("senhaErro").style.display = "none";
})