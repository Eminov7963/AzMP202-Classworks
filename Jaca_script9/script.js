function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);
  if (answer.style.height === "0px" || answer.style.height === "") {
    answer.style.height = "auto"; 
    answer.style.padding = "10px"; 
    answer.style.transition = "height 0.3s ease, padding 0.3s ease"; 
  } else {
    answer.style.height = "0px"; 
    answer.style.padding = "0"; 
  }
}
