// =====================================
// Part 1: Variables & Conditionals
// =====================================
let hour = new Date().getHours();
let greetingMessage = '';

if(hour < 12){
    greetingMessage = "Good morning!";
} else if(hour < 18){
    greetingMessage = "Good afternoon!";
} else {
    greetingMessage = "Good evening!";
}

// Display greeting in HTML
document.getElementById("greeting").textContent = greetingMessage;

// =====================================
// Part 2: Functions
// =====================================

// Function 1: Sum two numbers
function sum(a, b){
    return a + b;
}
document.getElementById("sumResult").textContent = "Sum of 5 + 7 is: " + sum(5,7);

// Function 2: Capitalize a string
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
document.getElementById("capitalizeResult").textContent = capitalize("javascript is fun!");

// =====================================
// Part 3: Loops
// =====================================
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let fruitList = document.getElementById("fruitList");

// Loop 1: for loop to populate list
for(let i=0; i<fruits.length; i++){
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
}

// Loop 2: while loop to create a countdown
let countdownDiv = document.getElementById("countdown");
let count = 5;
let countdownText = "Countdown: ";
while(count > 0){
    countdownText += count + " ";
    count--;
}
countdownDiv.textContent = countdownText;

// =====================================
// Part 4: DOM Interactions
// =====================================

// Interaction 1: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function(){
    document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
});

// Interaction 2: Toggle text visibility
document.getElementById("toggleTextBtn").addEventListener("click", function(){
    let p = document.getElementById("toggleText");
    if(p.textContent !== ""){
        p.textContent = "";
    } else {
        p.textContent = "Click the button to toggle my text!";
    }
});

// Interaction 3: Update fruit list dynamically
fruits.push("Elderberry");
let newLi = document.createElement("li");
newLi.textContent = fruits[fruits.length - 1];
fruitList.appendChild(newLi);
