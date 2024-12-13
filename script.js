// Get the element
const appDiv = document.getElementById('app');

// Add content
appDiv.innerHTML = '<p>Welcome to the world of Vanilla JavaScript!</p>';

// Create a button
const button = document.createElement('button');
button.textContent = 'Click Me';
button.onclick = () => {
  alert('You clicked the button!');
};

// Append button to DOM
appDiv.appendChild(button);
