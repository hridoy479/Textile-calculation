function clear() {
  const inputs = document.querySelectorAll(".number-input"); // Select all number input fields
  inputs.forEach(input => input.value = ''); // Clear the value of each input
  calculate(); // Recalculate sum and average to reset the displayed values
}


function calculate() {
  const inputs = document.querySelectorAll(".number-input");
  let sum = 0;
  let count = 0;

  inputs.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      sum += value;
      count++;
    }
  });
  
  const average = count > 0 ? (sum / count).toFixed(2) : 0;
  const ag = average/6;

  
  document.getElementById("A.g").textContent= ag;

  document.getElementById("sum").textContent = sum;
  document.getElementById("average").textContent = average;
}

function addInput() {
  const container = document.getElementById("inputs-container");
  const newInput = document.createElement("input");
  newInput.type = "number";
  newInput.className = "number-input";
  newInput.placeholder = "Enter a number";
  newInput.oninput = calculate;
  container.appendChild(newInput);
}

function removeInput() {
  const container = document.getElementById("inputs-container");
  const lastItem = container.lastElementChild;
  if (lastItem) {
    container.removeChild(lastItem);
    calculate(); // Recalculate after removing inputs
  }
}

let mouseX = 0;
let mouseY = 0;

// Update mouse position on mousemove
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Update touch position on touchmove
document.addEventListener('touchmove', (e) => {
  mouseX = e.touches[0].clientX;
  mouseY = e.touches[0].clientY;
});

// Smoothly update the background
function updateBackground() {
  const x = mouseX / window.innerWidth; // Normalize X position
  const y = mouseY / window.innerHeight; // Normalize Y position

  // Update background with a smooth radial gradient
  document.body.style.background = `
    radial-gradient(circle at ${x * 100}% ${y * 100}%, #3a3d5f, #141418)
  `;

  // Request the next frame for continuous updates
  requestAnimationFrame(updateBackground);
}

// Start updating the background
updateBackground();
function exit(){
  location.href='index.html';
}
function countTest(){
  location.href = 'CountTest.html';
}
function CvTest(){
  location.href ="Cv.html";
}

//calculate the cv
function calculateCV() {
  const input = document.getElementById("dataInput").value;
  const resultElement = document.getElementById("result");

  if (!input.trim()) {
    resultElement.textContent = "Please enter valid data.";
    return;
  }

  const numbers = input.split(",").map(Number);
  
  if (numbers.some(isNaN)) {
    resultElement.textContent = "Please enter only numeric values.";
    return;
  }

  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  const stdDev = Math.sqrt(
    numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length
  );

  const cvPercent = (stdDev / mean) * 100;

  resultElement.textContent = `CV%: ${cvPercent.toFixed(2)}%`;
}
function countCalculate(){
  const input = document.getElementById("dataInput").value;
  const resultElement = document.getElementById("result");

  if (!input.trim()) {
    resultElement.textContent = "Please enter valid data.";
    return;
  }
 

  let grain= 64.8/input;
  resultElement.textContent = `Count:${grain.toFixed(2)}`;
}
