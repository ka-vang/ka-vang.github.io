// This sets the current date displayed in the header
var clock = document.querySelector("#clock");
function currentDate (){
    var now = moment().format("dddd, MMMM Do, YYYY");
    clock.textContent = now;
}
currentDate();


// function createRows(){
//     var tables = "";
//     var tableRows = 9;
//     var tableColumns = 3;
//     var tdHour = document.querySelector(".hour");
//     var tdPast = document.querySelector(".past");
//     var tdsaveBtn = document.querySelector(".saveBtn");
    
//     for(var r = 0; r < tableRows; r++){
//         tables += "<tr>";
//             for(var c = 0; c < tableColumns; c++){
//                 tables += "<td> </td>";
//             }
//             tables += "</tr>";
//     }
//     document.querySelector("#tables").textContent="<table>" + tables + "</table>";
// }
// createRows();


var past = document.querySelector(".past");
var present = document.querySelector(".present");
var future = document.querySelector(".future");











// This is the hover effect on the SAVE button
$(".saveBtn").hover(function (){
    $(this).toggleClass("saveBtnHover");
    }
);
//This is the hover effect for the ENTRY field
$(".past").hover(function (){
    $(this).toggleClass("entryHover");
    }
);
