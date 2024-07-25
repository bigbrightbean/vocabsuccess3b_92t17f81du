// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
  question: "The teacher asked the student to __________ the chapter to help the class remember the key concepts.",
  chinese_question: "老师要求学生 __________ 这一章，以帮助全班记住关键概念。",
  answers: [
    { option: "A", answer: "recapitulate", chinese_answer: "概述", chinese_romanization: "gàishù" },
    { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
    { option: "C", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
    { option: "D", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'recapitulate' means to summarize and restate the main points." +
    "<br><br>" +
    "(B) 'forget' means to fail to remember." +
    "<br><br>" +
    "(C) 'obscure' means to keep from being seen; conceal." +
    "<br><br>" +
    "(D) 'extend' means to cause to cover a larger area; make longer or wider.",
  chinese_explanation: "(A) '概述' 意味着总结并重述主要观点。" +
    "<br><br>" +
    "(B) '忘记' 意味着未能记住。" +
    "<br><br>" +
    "(C) '遮掩' 意味着使看不见；隐藏。" +
    "<br><br>" +
    "(D) '延长' 意味着使覆盖更大的区域；变长或变宽。"
    },
    {
        id: 2,
question: "The emergency team had to remove the fallen tree that __________ the road.",
chinese_question: "应急小组必须移走阻塞道路的倒树。",
answers: [
    { option: "A", answer: "cleared", chinese_answer: "清除", chinese_romanization: "qīngchú" },
    { option: "B", answer: "occluded", chinese_answer: "阻塞", chinese_romanization: "zǔsè" },
    { option: "C", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
    { option: "D", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
],
correctAnswer: "B",
explanation: "(B) 'occluded' means to block or obstruct." +
    "<br><br>" +
    "(A) 'cleared' means to remove obstructions." +
    "<br><br>" +
    "(C) 'revealed' means to make something known." +
    "<br><br>" +
    "(D) 'simplified' means to make something easier to do or understand.",
chinese_explanation: "(B) '阻塞' 意味着阻挡或阻碍。" +
    "<br><br>" +
    "(A) '清除' 意味着去除障碍。" +
    "<br><br>" +
    "(C) '揭示' 意味着使某事为人所知。" +
    "<br><br>" +
    "(D) '简化' 意味着使某事更易做或理解。"
    },
    {
        id: 3,
        question: "After a few minutes, the sauce began to __________, thickening to the perfect consistency.",
        chinese_question: "几分钟后，酱汁开始 __________，变得厚实至完美的一致性。",
        answers: [
                { option: "A", answer: "dissolve", chinese_answer: "溶解", chinese_romanization: "róngjiě" },
                { option: "B", answer: "coagulate", chinese_answer: "凝结", chinese_romanization: "níngjié" },
                { option: "C", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
                { option: "D", answer: "dilute", chinese_answer: "稀释", chinese_romanization: "xīshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coagulate' means to change to a solid or semi-solid state." +
            "<br><br>" +
            "(A) 'dissolve' means to become incorporated into a liquid so as to form a solution." +
            "<br><br>" +
            "(C) 'evaporate' means to turn from liquid into vapor." +
            "<br><br>" +
            "(D) 'dilute' means to make a liquid thinner or weaker by adding water or another solvent to it.",
        chinese_explanation: "(B) '凝结' 意味着变成固态或半固态。" +
            "<br><br>" +
            "(A) '溶解' 意味着融入液体中以形成溶液。" +
            "<br><br>" +
            "(C) '蒸发' 意味着从液态变成气态。" +
            "<br><br>" +
            "(D) '稀释' 意味着通过加入水或其他溶剂使液体变薄或变弱。"
    },
    {
        id: 4,
        question: "The politician was quick to __________ his opponent’s policies during the debate.",
        chinese_question: "在辩论中，这位政治家迅速 __________ 对手的政策。",
        answers: [
        { option: "A", answer: "castigate", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "B", answer: "endorse", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'castigate' means to reprimand someone severely." +
            "<br><br>" +
            "(B) 'endorse' means to declare one's public approval or support of." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '严厉批评' 意味着严厉地斥责某人。" +
            "<br><br>" +
            "(B) '支持' 意味着公开赞同或支持。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 5,
        question: "In preparation for the presentation, he decided to __________ his speaking skills.",
        chinese_question: "为了准备演讲，他决定 __________ 自己的演讲技巧。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūlüè" },
            { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "D", answer: "burnish", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'burnish' means to enhance or improve something, often through effort." +
            "<br><br>" +
            "(A) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(B) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(D) '提升' 意味着通过努力增强或改善某物。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '混淆' 意味着使某人无法清晰思考。"
    },
    {
        id: 6,
        question: "The alliance fell apart after one of the members decided to __________ the others for personal gain.",
        chinese_question: "联盟在其中一个成员决定为了个人利益 __________ 其他成员后崩溃了。",
        answers: [
                { option: "A", answer: "double-cross", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'double-cross' means to betray or deceive someone after initially pretending to support them, used figuratively here." +
                "<br><br>" +
                "(B) 'support' means to give assistance to." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help someone.",
        chinese_explanation: "(A) '欺骗' 意味着在最初假装支持某人后背叛或欺骗某人，这里是比喻用法。" +
                "<br><br>" +
                "(B) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 7,
        question: "The architect's design needed to __________ to the city's building codes.",
        chinese_question: "建筑师的设计需要 __________ 城市的建筑规范。",
        answers: [
            { option: "A", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dispute", chinese_answer: "争议", chinese_romanization: "zhēngyì" },
            { option: "D", answer: "hew", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hew' means to conform or adhere to." +
            "<br><br>" +
            "(A) 'defy' means to openly resist or refuse to obey." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dispute' means to argue about something.",
        chinese_explanation: "(D) '遵守' 意味着符合或遵守。" +
            "<br><br>" +
            "(A) '违抗' 意味着公开抵抗或拒绝服从。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '争议' 意味着对某事进行辩论。"
    },
    {
        id: 8,
question: "The coach often __________ personal anecdotes into his team talks to motivate the players.",
chinese_question: "教练经常在团队讲话中 __________ 个人轶事，以激励球员。",
answers: [
        { option: "A", answer: "interpolates", chinese_answer: "插入", chinese_romanization: "chārù" },
        { option: "B", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "criticizes", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "D", answer: "supports", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "A",
explanation: "(A) 'interpolates' means to insert something, often words, into a text or conversation, used figuratively here." +
        "<br><br>" +
        "(B) 'ignores' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'criticizes' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(D) 'supports' means to give assistance to.",
chinese_explanation: "(A) '插入' 意味着将某物插入文本或对话中，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 9,
question: "The community began to __________ the firefighter for his heroic actions during the rescue, praising him in local news and social media.",
chinese_question: "社区开始因为消防员在救援中的英勇行为而 __________ 他，称赞他在当地新闻和社交媒体上。",
answers: [
    { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
    { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "lionize", chinese_answer: "崇拜", chinese_romanization: "chóngbài" },
    { option: "D", answer: "ridicule", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
],
correctAnswer: "C",
explanation: "(C) 'lionize' means to give a lot of public attention and approval to someone; to treat someone as a celebrity." +
    "<br><br>" +
    "(A) 'criticize' means to express disapproval of someone or something." +
    "<br><br>" +
    "(B) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(D) 'ridicule' means to make fun of someone or something in a cruel or harsh way.",
chinese_explanation: "(C) '崇拜' 一词意味着给予某人很多公众的关注和认可；把某人视为名人。" +
    "<br><br>" +
    "(A) '批评' 意味着对某人或某事表示不满。" +
    "<br><br>" +
    "(B) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(D) '嘲笑' 意味着以残酷或严厉的方式取笑某人或某事。"
    },
    {
        id: 10,
question: "By addressing the root causes, we can __________ many of the recurring problems that plague our organization.",
chinese_question: "通过解决根本原因，我们可以 __________ 困扰我们组织的许多重复性问题。",
answers: [
    { option: "A", answer: "create", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
    { option: "B", answer: "obviate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
    { option: "C", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
    { option: "D", answer: "replicate", chinese_answer: "复制", chinese_romanization: "fùzhì" }
],
correctAnswer: "B",
explanation: "(B) 'obviate' figuratively means to remove a need or difficulty." +
    "<br><br>" +
    "(A) 'create' means to bring into existence." +
    "<br><br>" +
    "(C) 'intensify' means to make stronger." +
    "<br><br>" +
    "(D) 'replicate' means to copy.",
chinese_explanation: "(B) '消除' 一词在比喻上意味着去除需要或困难。" +
    "<br><br>" +
    "(A) '创造' 意味着带来存在。" +
    "<br><br>" +
    "(C) '加剧' 意味着使更强烈。" +
    "<br><br>" +
    "(D) '复制' 意味着复制。"
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
