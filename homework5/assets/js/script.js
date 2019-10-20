$(".tdPast").html("hi");
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

function entryFields (){
    
}

// This is the hover effect on the SAVE button
$(".saveBtn").hover(function (){
    $(this).toggleClass("saveBtnHover");
    }
);
// This is the hover effect for the ENTRY field
$(".past").hover(function (){
    $(this).toggleClass("entryHover");
    }
);

var entries = [];

$(".saveBtn").click(function(){
    // alert("omg");
    var entry = $(this).siblings(".time").children("textarea").val();

    console.log(entry)


    localStorage.setItem("entries", entry)

    // entries.push(entry);
    // // console.warn("added", {entries});
    // var pre = document.querySelector(".time");
    // pre.textContent = JSON.stringify(entry);
    // // set items in local storage
    // localStorage.setItem("myEntries", JSON.stringify(entry));
    }
);

// -------- START -----------

// var addEntry = (ev) => {
//     // ev.preventDefault();
//     var entry = document.querySelector("#userInput").value
//     entries.push(entry);
//     // console.warn("added", {entries});
//     var pre = document.querySelector(".time");
//     pre.textContent = JSON.stringify(entries);
//     // set items in local storage
//     localStorage.setItem("myEntries", JSON.stringify(entries));
// }
// get item from local storage
// var data = JSON.parse(localStorage.getItem("myEntries"));
// // check if data is empty
//     if(data){
//         entries = JSON.parse(data);
//         // addEntry(entries);
//     } else {
//         // if data isn't empty
//         entries = [];
//     }

$(".time").children("textarea").val(localStorage.getItem("entries"));

console.log(localStorage)

// document.addEventListener("DOMContentLoaded", ()=>{
//     document.querySelector(".saveBtn").addEventListener("click", addEntry);
//     // document.getElementById("userInput").innerHTML=localStorage.getItem("MyEntries");
// });
