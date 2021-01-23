const form = document.getElementById("submit_question");

form.addEventListener("submit", (e) => {
  const submitResearch = document.getElementById("num_questions").value;
  e.preventDefault();
  fetchQuestions();
});