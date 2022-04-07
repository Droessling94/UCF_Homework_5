//** Sets current date and time right below jumbotron.**//
///declares "currentTime" using moment.js API
var currentTimeS = moment().format('h:mm:ss a');
var currentDateS = moment().format('MMMM Do YYYY');
///fills <p> tag on bottom of jumbotron with current time and date
$("#currentTime").text(currentDateS + " " + currentTimeS);
///below shuld be a function that rewrites the time realtime
function updateDateTime() {
    var currentTime = moment().format('h:mm:ss a');
    var currentDate = moment().format('MMMM Do YYYY');
    $("#currentTime").text(currentDate + " " + currentTime);
};
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
        for (var i=9; i <= 20; i++) {
            if(currentHour > i){
            $(`#textArea${i}`).addClass("past");
            } else if( currentHour >= i && currentHour <i+1) {
            $(`#textArea${i}`).addClass("present")
            } else {
            $(`#textArea${i}`).addClass("future")
            };
        };

    };
     


//trying to do a jquery or loop that runs color updater on each timeblock
$(".time-block").each(colorUpdater);

    
 });
