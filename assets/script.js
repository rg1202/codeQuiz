//wait until the HTML document is fully ready before executing javascript
document.addEventListener("DOMContentLoaded", function () {
	var questions = [
		{
			question: "Question 1: What does HTML stand for?",
			choices: [
				"Hyper Text Markup Language",
				"Highly Textured Material Layout",
				"Hyperlink and Text Markup Language",
				"Hyper Transfer Markup Language",
			],
			correctAnswer: "Hyper Text Markup Language",
		},
		{
			question: "Question 2: Which of the following is NOT a valid HTML tag?",
			choices: ["div", "span", "section", "break"],
			correctAnswer: "<break>",
		},
		{
			question: "Question 3: What does CSS stand for?",
			choices: [
				"Cascading Style Sheet",
				"Creative Style Sheet",
				"Computer Style Sheet",
				"Colorful Style Sheet",
			],
			correctAnswer: "Cascading Style Sheet",
		},
		{
			question:
				"Question 4: In CSS, which property is used to change the text color of an element?",
			choices: ["color", "background-color", "text-color", "font-color"],
			correctAnswer: "color",
		},
		{
			question:
				"Question 5: Which of the following is NOT a valid CSS unit of measurement?",
			choices: ["px (pixels)", "em", "in (inches)", "ex"],
			correctAnswer: "in (inches)",
		},
		{
			question: "Question 6: What is the main purpose of JavaScript?",
			choices: [
				"Styling web pages",
				"Creating databases",
				"Enhancing interactivity on websites",
				"Sending emails",
			],
			correctAnswer: "Enhancing interactivity on websites",
		},
		{
			question:
				"Question 7: Which of the following is used to declare a variable in JavaScript?",
			choices: ["let", "var", "const", "both let and var"],
			correctAnswer: "both let and var",
		},
		{
			question:
				"Question 8: What symbol is used to indicate a single-line comment in JavaScript?",
			choices: ["//", "/*", "#", "--"],
			correctAnswer: "//",
		},
		{
			question:
				"Question 9: Which built-in object is used to print content to the console in JavaScript?",
			choices: ["window", "console", "document", "print"],
			correctAnswer: "console",
		},
		{
			question:
				"Question 10: What method is used to add an HTML element to the page using JavaScript?",
			choices: ["appendElement", "insertHTML", "createElement", "addHTML"],
			correctAnswer: "createElement",
		},
		{
			question:
				"Question 11: Which of the following is a valid HTML5 semantic element?",
			choices: ["<div>", "<article>", "<container>", "<block>"],
			correctAnswer: "<article>",
		},
		{
			question:
				"Question 12: Which CSS property is used to control the spacing between the elements' borders?",
			choices: ["border-spacing", "margin", "padding", "border-margin"],
			correctAnswer: "margin",
		},
		{
			question:
				"Question 13: What does the 'onclick' event handler do in JavaScript?",
			choices: [
				"Changes the page's background color",
				"Triggers an action when an element is clicked",
				"Reloads the page",
				"Closes the browser",
			],
			correctAnswer: "Triggers an action when an element is clicked",
		},
		{
			question:
				"Question 14: Which of the following is NOT a valid CSS display property value?",
			choices: ["block", "inline", "fixed", "table-cell"],
			correctAnswer: "fixed",
		},
		{
			question:
				"Question 15: How do you link an external JavaScript file to an HTML document?",
			choices: [
				"<script src='script.js'></script>",
				"<js>script.js</js>",
				"<javascript>script.js</javascript>",
				"<link href='script.js' rel='script'>",
			],
			correctAnswer: "<script src='script.js'></script>",
		},
		{
			question:
				"Question 16: Which operator is used to compare two values for equality in JavaScript?",
			choices: ["==", "===", "!=", "!=="],
			correctAnswer: "===",
		},
		{
			question:
				"Question 17: What does the 'display: flex' property value do in CSS?",
			choices: [
				"Creates a flexbox container",
				"Hides the element",
				"Changes the font style",
				"Underlines text",
			],
			correctAnswer: "Creates a flexbox container",
		},
		{
			question: "Question 18: What is the purpose of the HTML <meta> tag?",
			choices: [
				"Define metadata about the document",
				"Create a hyperlink",
				"Change the font size",
				"Insert images",
			],
			correctAnswer: "Define metadata about the document",
		},
		{
			question:
				"Question 19: Which function is used to schedule a function to run at a later time in JavaScript?",
			choices: ["setTimeout", "setInterval", "setDelay", "wait"],
			correctAnswer: "setTimeout",
		},
		{
			question:
				"Question 20: What is the purpose of the CSS 'z-index' property?",
			choices: [
				"Specifies the font size",
				"Controls the stacking order of elements",
				"Sets the background color",
				"Defines the element's position",
			],
			correctAnswer: "Controls the stacking order of elements",
		},
	];

	var currentQuestionIndex = 0;
	var correctAnswers = 0; // Initialize the correct answers count
	var timeLeft = 180; // Set the initial time (in seconds)

	function displayQuestion() {
		var questionContainer = document.querySelector(".question");
		var question = questions[currentQuestionIndex];

		if (question) {
			questionContainer.style.display = "block";
			questionContainer.querySelector("h2").textContent = question.question;
			var choicesList = questionContainer.querySelector(".choices");
			choicesList.innerHTML = "";

			question.choices.forEach((choice, index) => {
				var listItem = document.createElement("li");
				var label = document.createElement("label");
				label.innerHTML = `<input type="radio" name="q${
					currentQuestionIndex + 1
				}" value="${choice}"> ${choice}`;
				listItem.appendChild(label);
				choicesList.appendChild(listItem);
			});

			// Add event listeners to the radio buttons for the current question
			var answerChoices = document.querySelectorAll(
				`input[name="q${currentQuestionIndex + 1}"]`
			);
			answerChoices.forEach((choice) => {
				choice.addEventListener("change", checkAnswer);
			});
		} else {
			// No more questions, quiz is finished
			questionContainer.style.display = "none";
			displayResult(); // Display the quiz result
		}
	}

	function checkAnswer() {
		var selectedAnswer = document.querySelector(
			`input[name="q${currentQuestionIndex + 1}"]:checked`
		);
		if (selectedAnswer) {
			var userAnswer = selectedAnswer.value;
			var correctAnswer = questions[currentQuestionIndex].correctAnswer;

			if (userAnswer === correctAnswer) {
				// User's answer is correct
				// Increase the correct answers count
				correctAnswers++;
				timeLeft += 3;

				// Update the correct answer count display
				document.querySelector(
					".correct-count"
				).textContent = `Correct: ${correctAnswers}`;
			} else {
				// User's answer is incorrect
				// Deduct 3 seconds from the total time
				timeLeft -= 3;
			}

			// Move to the next question
			currentQuestionIndex++;

			// Check if there are more questions
			if (currentQuestionIndex < questions.length) {
				displayQuestion(); // Display the next question
			} else {
				// No more questions, quiz is finished
				displayResult(); // Display the quiz result
			}
		}
	}

	function displayResult() {
		// Hide the question container
		document.querySelector(".question").style.display = "none";

		// Display the result
		var resultContainer = document.querySelector(".result");
		resultContainer.style.display = "block";
		resultContainer.textContent = `You answered ${correctAnswers} questions correctly.`;

		// Stop the timer (if it's still running)
		clearInterval(countdownInterval);
	}

	function startQuiz() {
		// Hide the "Start Quiz" button
		document.querySelector(".startBtn").style.display = "none";

		// Display the first question
		displayQuestion();

		// Update the time on the page
		var timeElement = document.querySelector(".time");
		timeElement.textContent = timeLeft;

		// Start the countdown timer
		var countdownInterval = setInterval(function () {
			timeLeft--;

			// Update the time on the page
			timeElement.textContent = timeLeft;

			// Check if the timer has reached 0
			if (timeLeft === 0) {
				clearInterval(countdownInterval);
				displayResult(); // Display the result when time is up
			}
		}, 1000); // Update the timer every 1000 milliseconds (1 second)
	}

	// Add an event listener to the "Start Quiz" button
	document.querySelector(".startBtn").addEventListener("click", startQuiz);

	$(document).ready(function () {
		$("#rulesModal").modal("show");
	});
});
