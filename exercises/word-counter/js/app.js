// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textarea = document.getElementById("text");
const stats = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
textarea.addEventListener("input", function() {
  
  const value = document.getElementById("text").value;

  stats.innerHTML = "You've written " + value.split(" ").length + " words and " + value.split("").length + " characters.";
});