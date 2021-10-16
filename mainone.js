function saveData (){
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var phone_number = document.getElementById("phone_number").value
    var age = document.getElementById("age").value
    sessionStorage.firstname = firstname  
    sessionStorage.lastname = lastname 
    sessionStorage.age = age
    sessionStorage.email = email
    sessionStorage.phone_number = phone_number
    var radio = document.getElementById("radio").getElementsByTagName("input")
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            sessionStorage.radio = radio[i].value
        }    
    }
    var python = document.getElementById("python").checked
    var vs = document.getElementById("vs").checked
    var ruby = document.getElementById("ruby").checked
    var dev = document.getElementById("dev").checked
    var player_chess = document.getElementById("player_chess").checked
    var youtuber = document.getElementById("youtuber").checked
    var tiktoker = document.getElementById("tiktoker").checked
    sessionStorage.python = python
    sessionStorage.vs = vs
    sessionStorage.ruby = ruby
    sessionStorage.dev = dev 
    sessionStorage.player_chess = player_chess
    sessionStorage.youtuber = youtuber
    sessionStorage.tiktoker = tiktoker
    var payment = document.getElementById("payment").value
    sessionStorage.payment = payment
}
function prefillData(){
    if(sessionStorage.firstname != null){
        document.getElementById("firstname").value = sessionStorage.firstname
        document.getElementById("lastname").value = sessionStorage.lastname
        document.getElementById("email").value = sessionStorage.email
        document.getElementById("age").value = sessionStorage.age
        document.getElementById("phone_number").value = sessionStorage.phone_number
        document.getElementById("payment").value = sessionStorage.payment
        switch (sessionStorage.radio){
            case "game":
                document.getElementById("game").checked = true
                break
            case "chess":
                document.getElementById("chess").checked = true 
                break
            case "youtube":
                document.getElementById("youtube").checked = true
                break
            case "tiktok": 
                document.getElementById("tiktok").checked = true
                break
            case "it_industry":
                document.getElementById("it_industry").checked = true
                break
        }
        if(sessionStorage.python == "true"){
            document.getElementById("python").checked = true 
        }
        if(sessionStorage.vs == "true"){
            document.getElementById("vs").checked = true 
        }
        if(sessionStorage.ruby == "true"){
            document.getElementById("ruby").checked = true 
        }
        if(sessionStorage.dev == "true"){
            document.getElementById("dev").checked = true 
        }
        if(sessionStorage.player_chess == "true"){
            document.getElementById("player_chess").checked = true 
        }
        if(sessionStorage.youtuber == "true"){
            document.getElementById("youtuber").checked = true 
        }
        if(sessionStorage.tiktoker == "true"){
            document.getElementById("tiktoker").checked = true 
        }
        document.getElementById("payment").value = sessionStorage.payment
    }
}
function init (){
    var form = document.getElementById("form")
    form.onclick = saveData; 
    prefillData()
}
window.onload = init;
