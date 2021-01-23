const URL = "https://opentdb.com/api.php?amount=10";
const selector = document.getElementById("questions");

// const fetchQuestions = (question) => {
  
  fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      let questions = response.results
      selector.innerHTML = "";
      console.log(response);
      questions.forEach(question => {question.category, question.question, question.correct_answer,question.incorrect_answers
    });
    console.log(questions);
  })
  .catch(error => {
    console.log(error);
  })
// };