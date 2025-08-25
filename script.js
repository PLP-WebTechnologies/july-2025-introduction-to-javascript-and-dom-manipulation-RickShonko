
// Part 1: Basics (Variables, Conditionals)
document.getElementById("btn-basics").addEventListener("click", () => {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("basic-output").textContent = "✅ You are an adult.";
  } else {
    document.getElementById("basic-output").textContent = "❌ You are underage.";
  }
});

// Part 2: Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

function calculateTotal(price, qty) {
  return price * qty;
}

document.getElementById("btn-function").addEventListener("click", () => {
  const greeting = greetUser("Rick");
  const total = calculateTotal(200, 3);

  document.getElementById("function-output").textContent = 
    `${greeting} Total price = ${total}`;
});

// Part 3: Loops
document.getElementById("btn-loop").addEventListener("click", () => {
  const list = document.getElementById("loop-list");
  list.innerHTML = ""; // clear old items

  // Example 1: for loop
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }

  // Example 2: while loop
  let countdown = 3;
  while (countdown > 0) {
    const li = document.createElement("li");
    li.textContent = "Countdown: " + countdown;
    list.appendChild(li);
    countdown--;
  }
});

// Part 4: DOM Manipulation
document.getElementById("btn-change").addEventListener("click", () => {
  document.getElementById("dom-text").textContent = "🎉 Text has been changed!";
});

document.getElementById("btn-toggle").addEventListener("click", () => {
  document.getElementById("dom-text").classList.toggle("highlight");
});
