// This sets the current date displayed in the header
var clock = document.querySelector("#clock");
function currentDate (){
    var now = moment().format("dddd, MMMM Do, YYYY");
    clock.textContent = now;
}
currentDate();

var past = document.querySelector(".past");
var present = document.querySelector(".present");
var future = document.querySelector(".future");

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
    var entry = $(this).siblings(".time").children("textarea").val();
        // console.log(entry)
    localStorage.setItem("entries", entry)
    }
);

$(".time").children("textarea").val(localStorage.getItem("entries"));

// console.log(localStorage)