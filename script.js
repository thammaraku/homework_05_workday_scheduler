// add date to the jumbotron
$('#currentDay').text(moment().format('dddd') +", "+ moment().format('MMMM Do YYYY,h:mm:ss a'));

var workHour = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
    "6 PM": "",
    "7 PM": "",
    "8 PM": "",
    "9 PM": "",
    "10 PM": "",
    "11 PM": "",
    "12 AM": "",
};

// save button then get value from text area and hour
$(".saveBtn").click(function(e) {
console.log(e);
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

console.log(present);
console.log(typeof present);

// var x = "8 AM"


for (i = 1; i <=17; i++) {

    timeId = "#time" + i;
    textEntryId = "#textEntry" + i;

    console.log(timeId);

    var x = $(timeId).text();
    
    console.log("before " + x);
    console.log("before type " + typeof x);

    convertTimeStringToNumber(x);
    
    function convertTimeStringToNumber() {
    
        if (x === "8 AM") {
            x = 8;
        } else if (x === "9 AM") {
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
        } else if (x === "6 PM") {
            x = 18;
        } else if (x === "7 PM") {
            x = 19;
        } else if (x === "8 PM") {
            x = 20;
        } else if (x === "9 PM") {
            x = 21;
        } else if (x === "10 PM") {
            x = 22;
        } else if (x === "11 PM") {
            x = 23;
        } else if (x === "12 AM") {
            x = 24;
        }
    
    }
    
    console.log("after " + x);
    console.log("after type " + typeof x);
    
    
    if (present < x) {
    
        $(textEntryId).addClass("future-hour");
    
    } else if (present === x) {
    
        $(textEntryId).addClass("present-hour");
    
    } else if (present > x) {
    
        $(textEntryId).addClass("past-hour");
    
    }
    

}





// function convertHourToNumber(x) {

//     switch(workHour) {
//         case "8 AM": return 8;
//         case "9 AM": return 9;
//         case "10 AM": return 10;
//         case "11 AM": return 11;
//         case "12 PM": return 12;
//         case "1 PM": return 13;
//         case "2 PM": return 14;
//         case "3 PM": return 15;
//         case "4 PM": return 16;
//         case "5 PM": return 17;
//         case "6 PM": return 18;
//         case "7 PM": return 19;
//         case "8 PM": return 20;
//         case "9 PM": return 21;
//         case "10 PM": return 22;
//         case "11 PM": return 23;
//         case "12 PM": return 24;
//     }

// }

