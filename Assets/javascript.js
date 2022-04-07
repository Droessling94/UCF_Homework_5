//** Sets current date and time right below jumbotron.**//
///declares "currentTime" using moment.js API
var currentTime = moment().format('h:mm:ss a');
var currentDate = moment().format('MMMM Do YYYY');
///fills <p> tag on bottom of jumbotron with current time and date
$("#currentTime").text(currentDate + " " + currentTime);
///below shuld be a function that rewrites the time realtime
function updateDateTime() {
    $("#currentTime").text(currentDate + "" + currentTime);
}
///below sets the interval to update every second, is not currently working///
setInterval (updateDateTime, 1000);
//******************************************************//


//**Onclick of text area, run a function that rewrites prompted input as that particular textarea's text value.**//
$('textarea').click( function(event){
    ///stop child from bubbling the event to aprent and breaking code
    event.stopPropagation();
    ///asks what you want to rewrite and saves that value as variable "plan"
    plan = prompt("What do you need to do at this time?");
    ///rewrites text area with your input. $(this) make it dynamic based on what area you click on.
    $(this).text(plan);
});
//***************************************************************************************************************//

//**Below is function that starts on page load**//
$(document).ready(function(){
///onclick of savebutton, saves current values to local storage
    $("#saveBtn").click(function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")
       localStorage.setItem(time, value)

    });
///function that will check current hour vs block hour and change color depending on time
    function colorUpdater() {
        var currentHour = moment().hours();
        if(currentHour > 9){
            $("#textArea9a").addClass("past");
            } else if( currentHour >= 9 && currentHour <10){
            $("#textArea9a").addClass("present")
            } else {
            $("#textArea9a").addClass("future")
        };
        if (currentHour >10){
            $("#textArea10a").addClass("past");
            }  else if (currentHour >=10 && currentHour < 11){
            $("#textArea10a").addClass("present")
            } else {
            $("#textArea10a").addClass("future")
        };
        if (currentHour >11){
            $("#textArea11a").addClass("past");
            }  else if (currentHour >=11 && currentHour < 12){
            $("#textArea11a").addClass("present")
            } else {
            $("#textArea11a").addClass("future")
        };
        if (currentHour >12){
            $("#textArea12p").addClass("past");
            }  else if (currentHour >=12 && currentHour < 13){
            $("#textArea12p").addClass("present")
            } else {
            $("#textArea12p").addClass("future")
        };
        if (currentHour >13){
            $("#textArea1p").addClass("past");
            }  else if (currentHour >=13 && currentHour < 14){
            $("#textArea1p").addClass("present")
            } else {
            $("#textArea1p").addClass("future")
        };
        if (currentHour >14){
            $("#textArea2p").addClass("past");
            }  else if (currentHour >=14 && currentHour < 15){
            $("#textArea2p").addClass("present")
            } else {
            $("#textArea2p").addClass("future")
        };
        if (currentHour >15){
            $("#textArea3p").addClass("past");
            }  else if (currentHour >=15 && currentHour < 16){
            $("#textArea3p").addClass("present")
            } else {
            $("#textArea3p").addClass("future")
        };
        if (currentHour >16){
            $("#textArea4p").addClass("past");
            }  else if (currentHour >=16 && currentHour < 17){
            $("#textArea4p").addClass("present")
            } else {
            $("#textArea4p").addClass("future")
        };
        if (currentHour >17){
            $("#textArea5p").addClass("past");
            }  else if (currentHour >=17 && currentHour < 18){
            $("#textArea5p").addClass("present")
            } else {
            $("#textArea5p").addClass("future")
        };
        if (currentHour >18){
            $("#textArea6p").addClass("past");
            }  else if (currentHour >=18 && currentHour < 19){
            $("#textArea6p").addClass("present")
            } else {
            $("#textArea6p").addClass("future")
        };
        if (currentHour >19){
            $("#textArea7p").addClass("past");
            }  else if (currentHour >=19 && currentHour < 20){
            $("#textArea7p").addClass("present")
            } else {
            $("#textArea7p").addClass("future")
        };
        if (currentHour >20){
            $("#textArea8p").addClass("past");
            }  else if (currentHour >=20 && currentHour < 21){
            $("#textArea8p").addClass("present")
            } else {
            $("#textArea8p").addClass("future")
        };


    };
//trying to do a jquery or loop that runs color updater on each timeblock
$(".time-block").each(colorUpdater);
    
 });
///calling colorupdater function for each timeblock

       
       


//*************************************//
