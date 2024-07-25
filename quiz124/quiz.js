// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company decided to __________ a significant budget for the new project.",
        chinese_question: "公司决定为新项目 __________ 一笔可观的预算。",
        answers: [
        { option: "A", answer: "allocate", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
        { option: "B", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "C", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'allocate' means to distribute resources or duties for a particular purpose." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'reduce' means to make smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(D) 'conceal' means to keep something secret; prevent from being known or noticed.",
        chinese_explanation: "(A) '分配' 意味着为特定目的分配资源或职责。" +
            "<br><br>" +
            "(B) '忽略' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '减少' 意味着在数量、程度或大小上变小或减少。" +
            "<br><br>" +
            "(D) '隐藏' 意味着保密；防止被知道或注意。"
    },
    {
        id: 2,
question: "She was nervous to __________ her true feelings to him.",
chinese_question: "她紧张地 __________ 对他的真实感受。",
answers: [
    { option: "A", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
    { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
    { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
],
correctAnswer: "A",
explanation: "(A) 'reveal' means to make known to others." +
    "<br><br>" +
    "(B) 'conceal' means to keep from sight; hide." +
    "<br><br>" +
    "(C) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(D) 'reject' means to refuse to accept, consider, or submit to.",
chinese_explanation: "(A) '揭示' 意味着让他人知道。" +
    "<br><br>" +
    "(B) '隐藏' 意味着不让被看到；隐藏。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(D) '拒绝' 意味着拒绝接受、考虑或提交。"
    },
    {
        id: 3,
question: "Her achievements were __________ proudly for everyone to see.",
chinese_question: "她的成就被 __________ 给大家看，令人自豪。",
answers: [
    { option: "A", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
    { option: "B", answer: "paraded", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
    { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "concealed", chinese_answer: "隐瞒", chinese_romanization: "yǐnmán" }
],
correctAnswer: "B",
explanation: "(B) 'paraded' means to show something in a way that is intended to attract attention and admiration." +
    "<br><br>" +
    "(A) 'hidden' means kept out of sight." +
    "<br><br>" +
    "(C) 'ignored' means refused to take notice of or acknowledge." +
    "<br><br>" +
    "(D) 'concealed' means kept secret or hidden.",
chinese_explanation: "(B) '炫耀' 意味着以吸引注意和赞美的方式展示某物。" +
    "<br><br>" +
    "(A) '隐藏' 意味着使不被看到。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(D) '隐瞒' 意味着保密或隐藏。"
    },
    {
        id: 4,
question: "The overwhelming amount of paperwork required by the new policy served to __________ the employees, leading to a decrease in productivity.",
chinese_question: "新政策要求的繁琐文书工作 __________ 了员工，导致生产力下降。",
answers: [
    { option: "A", answer: "empower", chinese_answer: "授权", chinese_romanization: "shòuquán" },
    { option: "B", answer: "stultify", chinese_answer: "使乏味", chinese_romanization: "shǐ fáwèi" },
    { option: "C", answer: "motivate", chinese_answer: "激励", chinese_romanization: "jīlì" },
    { option: "D", answer: "inspire", chinese_answer: "启发", chinese_romanization: "qǐfā" }
],
correctAnswer: "B",
explanation: "(B) 'stultify' figuratively means to cause to lose enthusiasm and initiative." +
    "<br><br>" +
    "(A) 'empower' means to give authority or power." +
    "<br><br>" +
    "(C) 'motivate' means to provide a reason to act." +
    "<br><br>" +
    "(D) 'inspire' means to fill with the urge to do something.",
chinese_explanation: "(B) '使乏味' 一词在比喻上意味着导致失去热情和主动性。" +
    "<br><br>" +
    "(A) '授权' 意味着给予权力或力量。" +
    "<br><br>" +
    "(C) '激励' 意味着提供行动的理由。" +
    "<br><br>" +
    "(D) '启发' 意味着激发做某事的冲动。"
    },
    {
        id: 5,
question: "Good hygiene practices can help __________ the spread of infectious diseases.",
chinese_question: "良好的卫生习惯可以帮助 __________ 传染病的传播。",
answers: [
    { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "cause", chinese_answer: "导致", chinese_romanization: "dǎozhì" },
    { option: "C", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
    { option: "D", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" }
],
correctAnswer: "C",
explanation: "(C) 'prevent' means to stop something from happening or arising." +
    "<br><br>" +
    "(A) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
    "<br><br>" +
    "(B) 'cause' means to make something happen, especially something bad." +
    "<br><br>" +
    "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
chinese_explanation: "(C) '防止' 意味着阻止某事发生或出现。" +
    "<br><br>" +
    "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
    "<br><br>" +
    "(B) '导致' 意味着使某事发生，特别是指不好的事情。" +
    "<br><br>" +
    "(D) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。"
    },
    {
        id: 6,
        question: "The slaves hoped that their master would eventually __________ them, granting them freedom.",
        chinese_question: "奴隶们希望主人最终会 __________ 他们，赋予他们自由。",
        answers: [
                { option: "A", answer: "sell", chinese_answer: "卖掉", chinese_romanization: "màidiào" },
                { option: "B", answer: "manumit", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
                { option: "C", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
                { option: "D", answer: "threaten", chinese_answer: "威胁", chinese_romanization: "wēixié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'manumit' means to release from slavery." +
            "<br><br>" +
            "(A) 'sell' means to exchange for money." +
            "<br><br>" +
            "(C) 'reprimand' means to scold or criticize." +
            "<br><br>" +
            "(D) 'threaten' means to express a threat.",
        chinese_explanation: "(B) '解放' 意味着从奴役中释放。" +
            "<br><br>" +
            "(A) '卖掉' 意味着换取金钱。" +
            "<br><br>" +
            "(C) '训斥' 意味着责骂或批评。" +
            "<br><br>" +
            "(D) '威胁' 意味着表达威胁。"
    },
    {
        id: 7,
        question: "Despite the luxury, he felt __________ in his lavish mansion.",
        chinese_question: "尽管生活奢华，他在豪宅中感到 __________ 。",
        answers: [
            { option: "A", answer: "free", chinese_answer: "自由", chinese_romanization: "zìyóu" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "D", answer: "immured", chinese_answer: "囚禁", chinese_romanization: "qiújìn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'immured' means to be enclosed or confined, used figuratively here." +
            "<br><br>" +
            "(A) 'free' means not under the control or in the power of another." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'entertained' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(D) '囚禁' 意味着被关押或禁闭，这里是比喻用法。" +
            "<br><br>" +
            "(A) '自由' 意味着不受他人控制或掌控。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 8,
question: "He was able to __________ the information from his colleague by pretending to be interested in his work.",
chinese_question: "他通过假装对同事的工作感兴趣来 __________ 信息。",
answers: [
        { option: "A", answer: "inveigle", chinese_answer: "哄骗", chinese_romanization: "hǒngpiàn" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
],
correctAnswer: "A",
explanation: "(A) 'inveigle' means to persuade someone to do something by means of deception or flattery." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
chinese_explanation: "(A) '哄骗' 意味着通过欺骗或奉承说服某人做某事。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 9,
question: "The groundbreaking research __________ old theories, changing the way scientists view the phenomenon.",
chinese_question: "这项开创性的研究 __________ 了旧理论，改变了科学家们对这一现象的看法。",
answers: [
    { option: "A", answer: "confirmed", chinese_answer: "证实", chinese_romanization: "zhèngshí" },
    { option: "B", answer: "ousted", chinese_answer: "推翻", chinese_romanization: "tuīfān" },
    { option: "C", answer: "upheld", chinese_answer: "支持", chinese_romanization: "zhīchí" },
    { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "B",
explanation: "(B) 'ousted' figuratively means to replace or remove." +
    "<br><br>" +
    "(A) 'confirmed' means to establish the truth." +
    "<br><br>" +
    "(C) 'upheld' means to maintain." +
    "<br><br>" +
    "(D) 'supported' means to back or help.",
chinese_explanation: "(B) '推翻' 一词在比喻上意味着替代或移除。" +
    "<br><br>" +
    "(A) '证实' 意味着确立真相。" +
    "<br><br>" +
    "(C) '支持' 意味着保持。" +
    "<br><br>" +
    "(D) '支持' 意味着支持或帮助。"
    },
    {
        id: 10,
question: "She could __________ a future where she was successful and happy, motivating her to work harder.",
chinese_question: "她可以 __________ 一个成功和幸福的未来，这激励她更加努力工作。",
answers: [
    { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "envisage", chinese_answer: "设想", chinese_romanization: "shèxiǎng" },
    { option: "C", answer: "dismiss", chinese_answer: "摒弃", chinese_romanization: "bìngqì" },
    { option: "D", answer: "negate", chinese_answer: "否定", chinese_romanization: "fǒudìng" }
],
correctAnswer: "B",
explanation: "(B) 'envisage' means to contemplate or conceive of as a possibility or a desirable future event." +
    "<br><br>" +
    "(A) 'disregard' means to pay no attention to." +
    "<br><br>" +
    "(C) 'dismiss' means to decide something or someone is not important." +
    "<br><br>" +
    "(D) 'negate' means to nullify or make ineffective.",
chinese_explanation: "(B) '设想' 一词意味着设想或构思作为可能性或理想的未来事件。" +
    "<br><br>" +
    "(A) '忽视' 意味着不注意。" +
    "<br><br>" +
    "(C) '摒弃' 意味着认为不重要而放弃。" +
    "<br><br>" +
    "(D) '否定' 意味着使无效。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
