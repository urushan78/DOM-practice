function runPractice(){
  //getElementById
  let heading = document.getElementById("mainHeading"); // This selects the element with the ID "mainHeading". Stores it in the variable heading. getElementById("id") selects one single element by its ID
  heading.textContent = "Hello from JavaScript!" //Changes only the text, not HTML
  heading.style.color = "green";

  //querySelector
  let firstParagraph = document.querySelector(".info"); //Selects the first element with the class "info" (your first <p>) 
  //querySelector() returns only the first match from the top of the HTML
  firstParagraph.innerHTML = "<em>First Paragraph updated!</em>"; //.innerHTML lets you use real HTML tags inside
  firstParagraph.classList.add("highlight");

  //querySelectorAll
  let allParagraphs = document.querySelectorAll(".info"); //Selects all elements with the class "info" (both <p> tags)
  allParagraphs.forEach(p => {
    p.classList.remove("text-gray-700");
    p.classList.add("text-blue-500");
  });

  //input.value
  let userInput = document.getElementById("nameInput").value; //Selects the <input> field with ID "nameInput". Here .value gets whatever the user typed in
  alert("You typed: " + userInput); //Pops up an alert showing what the user typed
}