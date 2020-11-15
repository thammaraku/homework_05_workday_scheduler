// add date to the jumbotron
$('#currentDay').text(moment().format('dddd') +", "+ moment().format('MMMM Do YYYY'));

// THINGS CAN BE IMPROVED
// funtion check if it's still on the same date by
// save date as an variable in local storage
// compare if it's the same exeute function update task
//otherwise put new workHour to blank
//then save new date to the variable

// how to make clock keep running
// use settime interval to push the variable moment current date on every seconds


var workHour = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};

updateTask();

function updateTask() {

    if(!localStorage.getItem('workHour')) {
        localStorage.setItem('workHour', JSON.stringify(workHour));
    }

//     // get workHour JSON string from localstorage convert to js object
    // workHour = localStorage.getItem('workHour');
    workHour = JSON.parse(localStorage.getItem('workHour'));

    console.log(workHour);
    // console.log("workHour11PM =" + workHour["11 PM"]);
    // $('#textEntry16').text(workHour["11 PM"]);
    // console.log("workHour12PM =" + workHour["12 AM"]);
    // $('#textEntry17').text(workHour["12 AM"]);

    for (i = 1; i <=17; i++) {

        timeId = "#time" + i;
        textEntryId = "#textEntry" + i;
        var x = $(timeId).text();
        // var y = textEntryId;

        // console.log("textEntryId = " + textEntryId);
        // console.log("timeId = " + timeId);
        // console.log("x =" + x);
        // console.log("workHourx = " + workHour[x]);

        $(textEntryId).text(workHour[x]);

    }

    // workHourObj = JSON.parse(localStorage.getItem('workHour'));
    // console.log(workHourObj);

    // console.log(workHourObj["11 PM"]);
    // $('#textEntry16').text(workHourObj["11 PM"]);

//     localStorage.setItem('workHour', JSON.stringify(workHourObj));

}






// save button then get value from text area and hour
$(".saveBtn").click(function(e) {
// console.log(e);
    // get userTodo input from textarea tag which is siblings of button
    userTodo = $(this).siblings("textarea").val();
    // get hourTodo input from div tag which is siblings of button
    hourTodo = $(this).siblings("div").text();

    // the save both value into local storage
    saveSchedule(hourTodo, userTodo);

});


function saveSchedule() {

    // in case workHour is not set on local storage yet
    // if(!localStorage.getItem('workHour')) {
    //     localStorage.setItem('workHour', JSON.stringify(workHour));
    // }
    
    // get workHour JSON string from localstorage convert to js object
    workdayJSON = JSON.parse(localStorage.getItem('workHour'));
    // update js object with new item
    workHour[hourTodo] = userTodo
    // convert back to JSON sting before set back to local storage
    localStorage.setItem('workHour', JSON.stringify(workHour));
    
}



// color code hour

// 12H time output as string
// var present = moment().format('h');
// military time output as string
// var present = moment().format('H');

//correct one military time output as number
var present = moment().hour();

// console.log(present);
// console.log(typeof present);

// var x = "8 AM"


for (i = 1; i <= 10; i++) {

    timeId = "#time" + i;
    textEntryId = "#textEntry" + i;

    // console.log(timeId);

    var x = $(timeId).text();
    
    // console.log("before " + x);
    // console.log("before type " + typeof x);

    convertTimeStringToNumber(x);
    
    function convertTimeStringToNumber() {
    
        if (x === "9 AM") {
            x = 9;
        } else if (x === "10 AM") {
            x = 10;
        } else if (x === "11 AM") {
            x = 11;
        } else if (x === "12 PM") {
            x = 12;
        } else if (x === "1 PM") {
            x = 13;
        } else if (x === "2 PM") {
            x = 14;
        } else if (x === "3 PM") {
            x = 15;
        } else if (x === "4 PM") {
            x = 16;
        } else if (x === "5 PM") {
            x = 17;
        }
    
    }
    // console.log("after " + x);
    // console.log("after type " + typeof x);
    
    
    if (present < x) {
    
        // console.log("present future =" + present)

        $(textEntryId).addClass("future-hour");
    
    } else if (present === x) {
        // console.log("present =" + present)

        $(textEntryId).addClass("present-hour");
    
    } else if (present > x) {
    
        // console.log("present past =" + present)

        $(textEntryId).addClass("past-hour");
    
    }
    

}



