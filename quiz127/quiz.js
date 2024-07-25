// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In the garden, different types of flowers __________ to create a beautiful mosaic of colors.",
        chinese_question: "在花园里，不同种类的花 __________ 在一起，创造出一个美丽的色彩马赛克。",
        answers: [
                { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
                { option: "B", answer: "commingle", chinese_answer: "混合", chinese_romanization: "hùnhé" },
                { option: "C", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
                { option: "D", answer: "stand", chinese_answer: "站立", chinese_romanization: "zhànlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'commingle' means to mix or blend different elements together." +
            "<br><br>" +
            "(A) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(C) 'disappear' means to cease to be visible." +
            "<br><br>" +
            "(D) 'stand' means to be in an upright position on the feet.",
        chinese_explanation: "(B) '混合' 意味着将不同的元素混合在一起。" +
            "<br><br>" +
            "(A) '分开' 意味着使移动或分离。" +
            "<br><br>" +
            "(C) '消失' 意味着不再可见。" +
            "<br><br>" +
            "(D) '站立' 意味着用双脚直立。"
    },
    {
        id: 2,
        question: "The elegant design of the building __________ the architect’s attention to detail.",
        chinese_question: "这座建筑的优雅设计 __________ 了建筑师对细节的关注。",
        answers: [
        { option: "A", answer: "bespeaks", chinese_answer: "显示", chinese_romanization: "xiǎnshì" },
        { option: "B", answer: "hides", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "contradicts", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bespeaks' means to indicate or be evidence of something." +
            "<br><br>" +
            "(B) 'hides' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'ignores' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'contradicts' means to deny the truth of a statement by asserting the opposite.",
        chinese_explanation: "(A) '显示' 意味着表明或作为某事的证据。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使某物不被看到。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '反驳' 意味着通过断言相反的观点来否认某声明的真实性。"
    },
    {
        id: 3,
        question: "Her smile __________ genuine happiness after receiving the good news.",
        chinese_question: "收到好消息后，她的微笑 __________ 出真挚的幸福。",
        answers: [
                { option: "A", answer: "evinced", chinese_answer: "显示出", chinese_romanization: "xiǎnshì chū" },
                { option: "B", answer: "obscured", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "dismissed", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evinced' means to show or express clearly." +
            "<br><br>" +
            "(B) 'obscured' means to keep from being seen; conceal." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'dismissed' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(A) '显示出' 意味着清楚地显示或表达。" +
            "<br><br>" +
            "(B) '遮掩' 意味着防止被看到；隐藏。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '不理会' 意味着认为不值得认真考虑。"
    },
    {
        id: 4,
        question: "The bright streetlights __________ on my ability to sleep peacefully at night.",
        chinese_question: "明亮的路灯 __________ 了我晚上安睡的能力。",
        answers: [
            { option: "A", answer: "illuminate", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "impinge", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impinge' means to have an effect or impact, especially a negative one, used figuratively here." +
            "<br><br>" +
            "(A) 'illuminate' means to light up." +
            "<br><br>" +
            "(B) 'support' means to give assistance to." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '影响' 意味着产生影响或作用，尤其是负面的影响，这里是比喻用法。" +
            "<br><br>" +
            "(A) '照亮' 意味着照亮。" +
            "<br><br>" +
            "(B) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
  question: "The impact of the new regulations began to __________ through the industry, changing the way businesses operated.",
  chinese_question: "新法规的影响开始在行业中 __________，改变了企业的运营方式。",
  answers: [
    { option: "A", answer: "ramify", chinese_answer: "分支", chinese_romanization: "fēnzhī" },
    { option: "B", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
    { option: "C", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
    { option: "D", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'ramify' figuratively means to spread or branch out into different parts." +
    "<br><br>" +
    "(B) 'stagnate' means to cease developing; become inactive or dull." +
    "<br><br>" +
    "(C) 'decrease' means to become smaller or fewer in size, amount, intensity, or degree." +
    "<br><br>" +
    "(D) 'obscure' means to keep from being seen; conceal.",
  chinese_explanation: "(A) '分支' 在此语境下比喻扩展或分支到不同的部分。" +
    "<br><br>" +
    "(B) '停滞' 意味着停止发展；变得不活跃或迟钝。" +
    "<br><br>" +
    "(C) '减少' 意味着变得更小或减少数量、程度或大小。" +
    "<br><br>" +
    "(D) '遮掩' 意味着使看不见；隐藏。"
    },
    {
        id: 6,
  question: "He struggled to __________ his thoughts clearly during the interview, leading to a poor impression.",
  chinese_question: "他在面试中难以清晰地 __________ 自己的想法，导致了不好的印象。",
  answers: [
    { option: "A", answer: "articulate", chinese_answer: "清楚地表达", chinese_romanization: "qīngchǔ de biǎodá" },
    { option: "B", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" },
    { option: "C", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
    { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'articulate' means to express an idea or feeling fluently and coherently." +
    "<br><br>" +
    "(B) 'minimize' means to reduce to the smallest possible amount or degree." +
    "<br><br>" +
    "(C) 'obscure' means to keep from being seen; conceal." +
    "<br><br>" +
    "(D) 'simplify' means to make something simpler or easier to do or understand.",
  chinese_explanation: "(A) '清楚地表达'一词意味着流利而连贯地表达一个想法或感觉。" +
    "<br><br>" +
    "(B) '最小化' 意味着减少到最小可能的数量或程度。" +
    "<br><br>" +
    "(C) '隐藏' 意味着防止被看到；隐藏。" +
    "<br><br>" +
    "(D) '简化' 意味着使某事变得更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "The company’s policy is to __________ any form of harassment among employees.",
        chinese_question: "公司的政策是 __________ 员工之间的任何形式的骚扰。",
        answers: [
                { option: "A", answer: "condone", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
                { option: "B", answer: "discountenance", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'discountenance' means to refuse to approve of something." +
                "<br><br>" +
                "(A) 'condone' means to accept or allow behavior that is considered morally wrong or offensive." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'approve' means to officially agree to or accept as satisfactory.",
        chinese_explanation: "(B) '反对' 意味着拒绝批准某事。" +
                "<br><br>" +
                "(A) '容忍' 意味着接受或允许被认为是道德上错误或令人反感的行为。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '批准' 意味着正式同意或接受为满意。"
    },
    {
        id: 8,
        question: "The craftsman took great care to __________ the surface of the metal until it gleamed.",
        chinese_question: "工匠非常小心地 __________ 金属表面直到它闪闪发光。",
        answers: [
        { option: "A", answer: "burnish", chinese_answer: "磨光", chinese_romanization: "móguāng" },
        { option: "B", answer: "tarnish", chinese_answer: "使暗淡", chinese_romanization: "shǐ àndàn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "roughen", chinese_answer: "使粗糙", chinese_romanization: "shǐ cūcāo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burnish' means to polish something, especially metal, by rubbing." +
            "<br><br>" +
            "(B) 'tarnish' means to lose or cause to lose luster, especially as a result of exposure to air or moisture." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'roughen' means to make or become rough.",
        chinese_explanation: "(A) '磨光' 意味着通过摩擦来抛光某物，尤其是金属。" +
            "<br><br>" +
            "(B) '使暗淡' 意味着失去或导致失去光泽，尤其是由于暴露在空气或湿气中。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '使粗糙' 意味着使变粗糙。"
    },
    {
        id: 9,
        question: "The scam artist __________ the elderly couple out of their life savings.",
        chinese_question: "骗子 __________ 了这对老年夫妇的毕生积蓄。",
        answers: [
        { option: "A", answer: "enlightened", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "B", answer: "aided", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "bamboozled", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bamboozled' means to trick or deceive someone." +
            "<br><br>" +
            "(A) 'enlightened' means to give someone greater knowledge and understanding about a subject or situation." +
            "<br><br>" +
            "(B) 'aided' means to provide support or help." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '欺骗' 意味着欺骗或蒙骗某人。" +
            "<br><br>" +
            "(A) '启发' 意味着给某人更大的知识和理解关于一个主题或情况。" +
            "<br><br>" +
            "(B) '帮助' 意味着提供支持或帮助。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
question: "Despite her attempts to avoid it, she was __________ by her colleagues to take on the additional project.",
chinese_question: "尽管她试图避免，她还是被同事 __________ 承担额外的项目。",
answers: [
    { option: "A", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
    { option: "B", answer: "badgered", chinese_answer: "纠缠", chinese_romanization: "jiūchán" },
    { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
    { option: "D", answer: "thanked", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" }
],
correctAnswer: "B",
explanation: "(B) 'badgered' means repeatedly and annoyingly asked (someone) to do something." +
    "<br><br>" +
    "(A) 'encouraged' means gave support, confidence, or hope to (someone)." +
    "<br><br>" +
    "(C) 'supported' means bore all or part of the weight of; held up." +
    "<br><br>" +
    "(D) 'thanked' means expressed gratitude to someone.",
chinese_explanation: "(B) '纠缠' 意味着反复且恼人地要求（某人）做某事。" +
    "<br><br>" +
    "(A) '鼓励' 意味着给（某人）支持、信心或希望。" +
    "<br><br>" +
    "(C) '支持' 意味着承受全部或部分重量；支撑。" +
    "<br><br>" +
    "(D) '感谢' 意味着向某人表达感激之情。"
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
