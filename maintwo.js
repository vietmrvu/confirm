function loadData(){
    total = 0
    var confirm_name = document.getElementById("confirm_name")
    var confirm_email = document.getElementById("confirm_email")
    var confirm_age = document.getElementById("confirm_age")
    var confirm_phone_number = document.getElementById("confirm_phone_number")
	var confirm_discuss = document.getElementById("confirm_discuss")
    var confirm_courses = document.getElementById("confirm_courses")
    var confirm_payment = document.getElementById("confirm_payment")
    var confirm_total = document.getElementById("confirm_total")
    confirm_name.textContent = sessionStorage.lastname + " " + sessionStorage.firstname
    confirm_age.textContent = sessionStorage.age
    confirm_email.textContent = sessionStorage.email
    confirm_phone_number.textContent = sessionStorage.phone_number
	confirm_discuss.textContent = sessionStorage.radio
    confirm_payment.textContent = sessionStorage.payment
    

    var yourCourses = ""
    if(sessionStorage.python == "true"){
        total += 899 
        yourCourses += "Python, "
    }
    if(sessionStorage.vs == "true"){
        total += 2000 
        yourCourses += "C,C++,C#, "
    }
    if(sessionStorage.ruby == "true"){
        total += 800
        yourCourses += "Ruby, "
    }
    if(sessionStorage.dev == "true"){
        total += 870
        yourCourses += "Developer, "
    }
    if(sessionStorage.player_chess == "true"){
        total += 499
        yourCourses += "Player chess, "
    }
    if(sessionStorage.youtuber == "true"){
        total += 789
        yourCourses += "Youtuber, "
    }
    if(sessionStorage.tiktoker == "true"){
        total += 779
        yourCourses += "Tiktoker, "
    }
    totalString = total.toString() 
    totalAll = totalString + "k" 
    confirm_total.textContent = totalAll 
    yourCourses = yourCourses.substring(0, yourCourses.length - 2)
    confirm_courses.textContent = yourCourses
}
function easy (){
    window.location = "indexfour.html"
}
function init (){
    loadData();
    var button = document.getElementById("btn_1")
    button.onclick =  easy;
}
window.onload = init;