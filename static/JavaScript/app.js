// import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printhello() {
    console.log("Hello there!");
    }

// Converted into Arrow function
printHello = () => "Hello there!";

// takes 2 numbers and adds them
function addition(a,b) {
    return a+b
    }

// converted into arrow function 
addition = (a,b) => a+b;

// functions can call other functions
function doubleAddition(c,d) {
    var total = addition(c,d) * 2;
    return total;
}

// converted into arrow function 
doubleAddition = (c,d) => addition(c,d) * 2;


//define array
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 //define list
 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

//build function
function buildTable(data) {
    // clear out data
    tbody.html("");

    //Loop data and add data
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        
        //Loop each row and add as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}