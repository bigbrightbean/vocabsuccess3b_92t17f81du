// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "He had a knack for __________ out the best deals in town.",
chinese_question: "他擅长在城里 __________ 出最好的交易。",
answers: [
        { option: "A", answer: "losing", chinese_answer: "失去", chinese_romanization: "shīqù" },
        { option: "B", answer: "ferreting", chinese_answer: "搜索", chinese_romanization: "sōusuǒ" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "rejecting", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
],
correctAnswer: "B",
explanation: "(B) 'ferreting' means to search tenaciously for and find something." +
        "<br><br>" +
        "(A) 'losing' means to be deprived of or cease to have or retain something." +
        "<br><br>" +
        "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'rejecting' means to dismiss as inadequate, unacceptable, or faulty.",
chinese_explanation: "(B) '搜索' 意味着坚韧地寻找并找到某物。" +
        "<br><br>" +
        "(A) '失去' 意味着被剥夺或不再拥有或保留某物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '拒绝' 意味着认为不合格、不接受或有缺陷。"
    },
    {
        id: 2,
        question: "During the debate, different viewpoints began to __________, leading to a more comprehensive understanding of the issue.",
        chinese_question: "在辩论期间，不同的观点开始 __________，导致对问题有了更全面的理解。",
        answers: [
            { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
            { option: "B", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "C", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "D", answer: "commingle", chinese_answer: "混合", chinese_romanization: "hùnhé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'commingle' means to mix or blend different elements together." +
            "<br><br>" +
            "(A) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(B) 'disappear' means to cease to be visible." +
            "<br><br>" +
            "(C) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(D) '混合' 意味着将不同的元素混合在一起。" +
            "<br><br>" +
            "(A) '分开' 意味着使移动或分离。" +
            "<br><br>" +
            "(B) '消失' 意味着不再可见。" +
            "<br><br>" +
            "(C) '混淆' 意味着使某人无法清晰思考。"
    },
    {
        id: 3,
question: "The writer __________ with writer's block for weeks before finally completing the novel.",
chinese_question: "作家 __________ 了几个星期的创作瓶颈，最后完成了这本小说。",
answers: [
    { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
    { option: "B", answer: "struggled", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
    { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "thrived", chinese_answer: "繁荣", chinese_romanization: "fánróng" }
],
correctAnswer: "B",
explanation: "(B) 'struggled' means to make forceful or violent efforts to get free of restraint or constriction." +
    "<br><br>" +
    "(A) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
    "<br><br>" +
    "(C) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
    "<br><br>" +
    "(D) 'thrived' means to grow or develop well or vigorously.",
chinese_explanation: "(B) '挣扎' 意味着做出强烈或激烈的努力以摆脱束缚或限制。" +
    "<br><br>" +
    "(A) '庆祝' 意味着以社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意或承认；有意无视。" +
    "<br><br>" +
    "(D) '繁荣' 意味着良好或旺盛地生长或发展。"
    },
    {
        id: 4,
question: "The writer aims to __________ thought-provoking stories that challenge societal norms.",
chinese_question: "这位作家旨在 __________ 引人深思的故事，挑战社会规范。",
answers: [
    { option: "A", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
    { option: "B", answer: "purvey", chinese_answer: "传播", chinese_romanization: "chuánbō" },
    { option: "C", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
    { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "B",
explanation: "(B) 'purvey' means to supply or spread information or ideas." +
    "<br><br>" +
    "(A) 'suppress' means to forcibly put an end to." +
    "<br><br>" +
    "(C) 'obscure' means to keep from being seen." +
    "<br><br>" +
    "(D) 'ignore' means to refuse to take notice of.",
chinese_explanation: "(B) '传播' 意味着提供或传播信息或观点。" +
    "<br><br>" +
    "(A) '压制' 意味着强行结束。" +
    "<br><br>" +
    "(C) '遮掩' 意味着防止被看到。" +
    "<br><br>" +
    "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 5,
        question: "The monks decided to __________ themselves in the monastery to focus on their spiritual practices.",
        chinese_question: "僧侣们决定 __________ 在修道院中，专注于他们的灵修。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery." +
            "<br><br>" +
            "(B) 'reveal' means to make something known." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'expose' means to make something visible by uncovering it.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中。" +
            "<br><br>" +
            "(B) '揭示' 意味着使某事为人所知。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '暴露' 意味着通过揭开某物使其可见。"
    },
    {
        id: 6,
        question: "The scientist had to __________ the chemical solution to ensure it was free of impurities.",
        chinese_question: "科学家必须 __________ 化学溶液，以确保其无杂质。",
        answers: [
                { option: "A", answer: "filter", chinese_answer: "过滤", chinese_romanization: "guòlǜ" },
                { option: "B", answer: "decant", chinese_answer: "倒出", chinese_romanization: "dàochū" },
                { option: "C", answer: "agitate", chinese_answer: "搅动", chinese_romanization: "jiǎodòng" },
                { option: "D", answer: "combine", chinese_answer: "结合", chinese_romanization: "jiéhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decant' means to gradually pour liquid from one container into another, especially without disturbing the sediment." +
                "<br><br>" +
                "(A) 'filter' means to remove impurities by passing through a device." +
                "<br><br>" +
                "(C) 'agitate' means to stir or disturb briskly." +
                "<br><br>" +
                "(D) 'combine' means to join or merge to form a single unit.",
        chinese_explanation: "(B) '倒出' 意味着将液体从一个容器逐渐倒入另一个容器，特别是不打扰沉淀物。" +
                "<br><br>" +
                "(A) '过滤' 意味着通过设备去除杂质。" +
                "<br><br>" +
                "(C) '搅动' 意味着快速搅拌或扰动。" +
                "<br><br>" +
                "(D) '结合' 意味着合并形成一个单一单位。"
    },
    {
        id: 7,
        question: "The relentless heatwave had __________ the town's water supply, causing severe shortages.",
        chinese_question: "持续的热浪使镇上的水供应 __________ ，导致严重短缺。",
        answers: [
                { option: "A", answer: "enfeebled", chinese_answer: "使虚弱", chinese_romanization: "shǐ xūruò" },
                { option: "B", answer: "replenished", chinese_answer: "补充", chinese_romanization: "bǔchōng" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enfeebled' means to make very weak, used figuratively here." +
            "<br><br>" +
            "(B) 'replenished' means to fill something up again." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'improved' means to make or become better.",
        chinese_explanation: "(A) '使虚弱' 意味着使非常虚弱，这里是比喻用法。" +
            "<br><br>" +
            "(B) '补充' 意味着再次填满某物。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '改善' 意味着使或变得更好。"
    },
    {
        id: 8,
question: "The detective found evidence that could __________ the suspect in the crime.",
chinese_question: "侦探找到了可能 __________ 嫌犯犯罪的证据。",
answers: [
        { option: "A", answer: "inculpate", chinese_answer: "归罪", chinese_romanization: "guīzuì" },
        { option: "B", answer: "absolve", chinese_answer: "赦免", chinese_romanization: "shèmiǎn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
],
correctAnswer: "A",
explanation: "(A) 'inculpate' means to accuse or blame someone." +
        "<br><br>" +
        "(B) 'absolve' means to free someone from blame or guilt." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
chinese_explanation: "(A) '归罪' 意味着指责或归咎于某人。" +
        "<br><br>" +
        "(B) '赦免' 意味着使某人免于责备或罪责。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 9,
  question: "The program aims to __________ young entrepreneurs with the skills they need to succeed.",
  chinese_question: "该项目旨在 __________ 年轻企业家所需的技能，使他们能够成功。",
  answers: [
    { option: "A", answer: "endow", chinese_answer: "赋予", chinese_romanization: "fùyǔ" },
    { option: "B", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
    { option: "C", answer: "restrict", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
    { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'endow' figuratively means to provide with a quality, ability, or asset." +
    "<br><br>" +
    "(B) 'confuse' means to make (someone) unable to think clearly." +
    "<br><br>" +
    "(C) 'restrict' means to put a limit on; keep under control." +
    "<br><br>" +
    "(D) 'neglect' means to fail to care for properly.",
  chinese_explanation: "(A) '赋予' 在此语境下比喻提供一种品质、能力或资产。" +
    "<br><br>" +
    "(B) '迷惑' 意味着使某人无法清晰思考。" +
    "<br><br>" +
    "(C) '限制' 意味着对某物进行限制；控制。" +
    "<br><br>" +
    "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 10,
question: "She managed to __________ the project through various challenges to success.",
chinese_question: "她设法将项目 __________ 通过各种挑战实现成功。",
answers: [
    { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
    { option: "B", answer: "steer", chinese_answer: "引导", chinese_romanization: "yǐndǎo" },
    { option: "C", answer: "disrupt", chinese_answer: "扰乱", chinese_romanization: "rǎoluàn" },
    { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "B",
explanation: "(B) 'steer' means to guide or control the movement or course of something." +
    "<br><br>" +
    "(A) 'abandon' means to leave someone or something behind." +
    "<br><br>" +
    "(C) 'disrupt' means to interrupt or disturb an event, activity, or process by causing a problem." +
    "<br><br>" +
    "(D) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally.",
chinese_explanation: "(B) '引导' 意味着引导或控制某物的运动或进程。" +
    "<br><br>" +
    "(A) '放弃' 意味着离开某人或某物。" +
    "<br><br>" +
    "(C) '扰乱' 意味着通过引起问题来中断或打扰一个事件、活动或过程。" +
    "<br><br>" +
    "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
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
