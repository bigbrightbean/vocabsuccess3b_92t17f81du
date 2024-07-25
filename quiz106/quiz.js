// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The quality of the craftsmanship __________ the skill of the artisan.",
        chinese_question: "工艺的质量 __________ 工匠的技能。",
        answers: [
        { option: "A", answer: "bespeaks", chinese_answer: "表明", chinese_romanization: "biǎomíng" },
        { option: "B", answer: "questions", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
        { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "diminishes", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bespeaks' means to indicate or be evidence of something." +
            "<br><br>" +
            "(B) 'questions' means to ask questions about something." +
            "<br><br>" +
            "(C) 'ignores' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'diminishes' means to make or become less.",
        chinese_explanation: "(A) '表明' 意味着表明或作为某事的证据。" +
            "<br><br>" +
            "(B) '质疑' 意味着对某事提出问题。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '减少' 意味着使变少或变少。"
    },
    {
        id: 2,
        question: "After hours of negotiation, the opposing side finally decided to __________ and sign the agreement.",
        chinese_question: "经过数小时的谈判，对方终于决定 __________ 并签署协议。",
        answers: [
        { option: "A", answer: "capitulate", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
        { option: "B", answer: "argue", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capitulate' means to cease to resist an opponent or an unwelcome demand; surrender." +
            "<br><br>" +
            "(B) 'argue' means to exchange or express diverging or opposite views, typically in a heated or angry way." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '投降' 意味着停止抵抗对手或不受欢迎的要求；投降。" +
            "<br><br>" +
            "(B) '争论' 意味着交换或表达不同或相反的观点，通常是激烈或愤怒的方式。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 3,
    question: "Her sudden interest in health and fitness could __________ her desire to make significant life changes.",
    chinese_question: "她对健康和健身的突然兴趣可能 __________ 她想做重大生活改变的愿望。",
    answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "foreshadow", chinese_answer: "预示", chinese_romanization: "yùshì" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'foreshadow' used figuratively means to indicate or hint at a future event." +
            "<br><br>" +
            "(A) 'conceal' means to hide or keep something secret." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
    chinese_explanation: "(B) '预示' 在比喻意义上指暗示或预示未来的事件。" +
            "<br><br>" +
            "(A) '隐藏' 意味着隐藏或保守秘密。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '阻碍' 意味着为某人或某事制造困难，导致延误或障碍。"
    },
    {
        id: 4,
        question: "Her decision to __________ all previous agreements with the company shocked everyone.",
        chinese_question: "她决定 __________ 与公司的所有先前协议，这让所有人都感到震惊。",
        answers: [
        { option: "A", answer: "annul", chinese_answer: "废除", chinese_romanization: "fèichú" },
        { option: "B", answer: "honor", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "uphold", chinese_answer: "维持", chinese_romanization: "wéichí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'annul' means to declare invalid (an official agreement, decision, or result)." +
            "<br><br>" +
            "(B) 'honor' means to regard with great respect." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'uphold' means to confirm or support (something that has been questioned).",
        chinese_explanation: "(A) '废除' 意味着宣布无效（正式协议、决定或结果）。" +
            "<br><br>" +
            "(B) '尊重' 意味着以极大的尊重对待。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '维持' 意味着确认或支持（已被质疑的事情）。"
    },
    {
        id: 5,
        question: "The kittens would often __________ with each other, chasing and pouncing around the room.",
        chinese_question: "小猫们常常互相 __________ ，在房间里追逐和扑腾。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
            { option: "C", answer: "hide", chinese_answer: "躲藏", chinese_romanization: "duǒcáng" },
            { option: "D", answer: "disport", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disport' means to amuse oneself in a lively and energetic way." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'sleep' means to be in a state of rest where consciousness is suspended." +
            "<br><br>" +
            "(C) 'hide' means to put or keep out of sight.",
        chinese_explanation: "(D) '娱乐' 意味着以生动和充满活力的方式娱乐自己。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '睡觉' 意味着处于意识暂停的休息状态。" +
            "<br><br>" +
            "(C) '躲藏' 意味着放置或保持在视线之外。"
    },
    {
        id: 6,
question: "The company aims to __________ its brand by launching a new advertising campaign.",
chinese_question: "公司计划通过启动一项新的广告活动来 __________ 其品牌。",
answers: [
    { option: "A", answer: "revive", chinese_answer: "复兴", chinese_romanization: "fùxīng" },
    { option: "B", answer: "dissolve", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
    { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
],
correctAnswer: "A",
explanation: "(A) 'revive' means to restore to life or consciousness." +
    "<br><br>" +
    "(B) 'dissolve' means to close down or dismiss." +
    "<br><br>" +
    "(C) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(D) 'diminish' means to make or become less.",
chinese_explanation: "(A) '复兴' 意味着恢复生机或意识。" +
    "<br><br>" +
    "(B) '解散' 意味着关闭或解散。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(D) '减少' 意味着使变少或变少。"
    },
    {
        id: 7,
        question: "Over the years, the riverbed began to __________ due to mineral deposits.",
        chinese_question: "多年来，由于矿物沉积，河床开始 __________ 。",
        answers: [
        { option: "A", answer: "calcify", chinese_answer: "钙化", chinese_romanization: "gàihuà" },
        { option: "B", answer: "erode", chinese_answer: "侵蚀", chinese_romanization: "qīnshí" },
        { option: "C", answer: "soften", chinese_answer: "软化", chinese_romanization: "ruǎnhuà" },
        { option: "D", answer: "wash", chinese_answer: "冲洗", chinese_romanization: "chōngxǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'calcify' means to become hardened by the deposition of calcium salts." +
            "<br><br>" +
            "(B) 'erode' means to gradually wear away." +
            "<br><br>" +
            "(C) 'soften' means to make or become less hard." +
            "<br><br>" +
            "(D) 'wash' means to clean with water.",
        chinese_explanation: "(A) '钙化' 意味着通过钙盐的沉积变硬。" +
            "<br><br>" +
            "(B) '侵蚀' 意味着逐渐磨损。" +
            "<br><br>" +
            "(C) '软化' 意味着使变得不那么硬。" +
            "<br><br>" +
            "(D) '冲洗' 意味着用水清洗。"
    },
    {
        id: 8,
        question: "She decided to __________ a minimalist lifestyle, getting rid of unnecessary possessions.",
        chinese_question: "她决定 __________ 极简主义的生活方式，摆脱不必要的物品。",
        answers: [
                { option: "A", answer: "accumulate", chinese_answer: "积累", chinese_romanization: "jīlěi" },
                { option: "B", answer: "espouse", chinese_answer: "采用", chinese_romanization: "cǎiyòng" },
                { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'espouse' used figuratively means to adopt or embrace a new way of living or thinking." +
            "<br><br>" +
            "(A) 'accumulate' means to gather together or acquire an increasing number or quantity of." +
            "<br><br>" +
            "(C) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(D) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(B) '采用' 在比喻意义上指采用或接受一种新的生活或思维方式。" +
            "<br><br>" +
            "(A) '积累' 意味着收集或获得越来越多的数量。" +
            "<br><br>" +
            "(C) '忽视' 意味着不注意；忽视。" +
            "<br><br>" +
            "(D) '拒绝' 意味着认为不合格、不接受或有缺陷。"
    },
    {
        id: 9,
        question: "Her insightful question during the meeting helped to __________ a deeper discussion on the topic.",
        chinese_question: "她在会议上的深刻问题帮助 __________ 了对该主题的深入讨论。",
        answers: [
                { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "B", answer: "catalyze", chinese_answer: "催化", chinese_romanization: "cuīhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "stifle", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'catalyze' means to cause or accelerate a reaction or process." +
            "<br><br>" +
            "(A) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'stifle' means to restrain or stop oneself from acting on an emotion.",
        chinese_explanation: "(B) '催化'一词意味着引起或加速反应或过程。" +
            "<br><br>" +
            "(A) '阻碍' 意味着为某人或某事制造困难，导致延迟或障碍。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '抑制' 意味着约束或阻止某人表达情感。"
    },
    {
        id: 10,
        question: "The philosopher liked to __________ for hours in his study.",
        chinese_question: "这位哲学家喜欢在他的书房里 __________ 数小时。",
        answers: [
                { option: "A", answer: "cogitate", chinese_answer: "深思", chinese_romanization: "shēnsī" },
                { option: "B", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "disturb", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cogitate' means to think deeply about something." +
            "<br><br>" +
            "(B) 'rush' means to move with urgent haste." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'disturb' means to interfere with the normal arrangement or functioning of.",
        chinese_explanation: "(A) '深思' 意味着对某事进行深入思考。" +
            "<br><br>" +
            "(B) '匆忙' 意味着紧急快速地移动。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '打扰' 意味着干扰正常安排或功能。"
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
