// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "To __________ their old friendship, they decided to spend more time together.",
chinese_question: "为了 __________ 旧友谊，他们决定花更多时间在一起。",
answers: [
    { option: "A", answer: "revive", chinese_answer: "恢复", chinese_romanization: "huīfù" },
    { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "sever", chinese_answer: "切断", chinese_romanization: "qiēduàn" },
    { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
],
correctAnswer: "A",
explanation: "(A) 'revive' means to restore to life or consciousness." +
    "<br><br>" +
    "(B) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(C) 'sever' means to put an end to (a connection or relationship); break off." +
    "<br><br>" +
    "(D) 'neglect' means to fail to care for properly.",
chinese_explanation: "(A) '恢复' 意味着恢复生机或意识。" +
    "<br><br>" +
    "(B) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(C) '切断' 意味着终止（连接或关系）；中断。" +
    "<br><br>" +
    "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 2,
question: "Trust is __________ in any strong and lasting relationship.",
chinese_question: "信任在任何牢固而持久的关系中都是 __________ 的。",
answers: [
    { option: "A", answer: "essential", chinese_answer: "必要", chinese_romanization: "bìyào" },
    { option: "B", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
    { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
    { option: "D", answer: "optional", chinese_answer: "可选", chinese_romanization: "kěxuǎn" }
],
correctAnswer: "A",
explanation: "(A) 'essential' means absolutely necessary; extremely important." +
    "<br><br>" +
    "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
    "<br><br>" +
    "(C) 'irrelevant' means not connected with or relevant to something." +
    "<br><br>" +
    "(D) 'optional' means available to be chosen but not obligatory.",
chinese_explanation: "(A) '必要' 意味着绝对必要；极其重要。" +
    "<br><br>" +
    "(B) '微不足道' 意味着太小或不重要而不值得考虑；无关紧要。" +
    "<br><br>" +
    "(C) '无关' 意味着与某事无关或不相关。" +
    "<br><br>" +
    "(D) '可选' 意味着可以选择但不是强制性的。"
    },
    {
        id: 3,
        question: "She was unsure how to __________ the delicate subject of her friend's recent behavior.",
        chinese_question: "她不确定如何 __________ 她朋友最近行为的敏感话题。",
        answers: [
        { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "B", answer: "broach", chinese_answer: "提出", chinese_romanization: "tíchū" },
        { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'broach' means to raise a sensitive or difficult subject for discussion." +
            "<br><br>" +
            "(A) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '提出' 意味着提出一个敏感或困难的话题进行讨论。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
question: "The rebels were captured and __________ within the fortress walls.",
chinese_question: "叛乱分子被捕并 __________ 在堡垒墙内。",
answers: [
        { option: "A", answer: "immured", chinese_answer: "囚禁", chinese_romanization: "qiújìn" },
        { option: "B", answer: "released", chinese_answer: "释放", chinese_romanization: "shìfàng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
],
correctAnswer: "A",
explanation: "(A) 'immured' means to enclose or confine someone against their will." +
        "<br><br>" +
        "(B) 'released' means to set free." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assisted' means to help someone.",
chinese_explanation: "(A) '囚禁' 意味着强行关押或禁闭某人。" +
        "<br><br>" +
        "(B) '释放' 意味着让某人自由。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 5,
        question: "She decided to __________ her closet by donating clothes she no longer wore.",
        chinese_question: "她决定通过捐赠不再穿的衣服来 __________ 她的衣橱。",
        answers: [
                { option: "A", answer: "clutter", chinese_answer: "杂乱", chinese_romanization: "záluàn" },
                { option: "B", answer: "disencumber", chinese_answer: "解脱", chinese_romanization: "jiětuō" },
                { option: "C", answer: "fill", chinese_answer: "装满", chinese_romanization: "zhuāngmǎn" },
                { option: "D", answer: "load", chinese_answer: "装载", chinese_romanization: "zhuāngzài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disencumber' means to free from a burden or impediment." +
                "<br><br>" +
                "(A) 'clutter' means to fill or cover with scattered or disordered things." +
                "<br><br>" +
                "(C) 'fill' means to make full." +
                "<br><br>" +
                "(D) 'load' means to put a large amount of something into or onto something.",
        chinese_explanation: "(B) '解脱' 意味着从负担或障碍中解脱。" +
                "<br><br>" +
                "(A) '杂乱' 意味着用散乱或杂乱的东西填满或覆盖。" +
                "<br><br>" +
                "(C) '装满' 意味着使充满。" +
                "<br><br>" +
                "(D) '装载' 意味着将大量某物放入或放在某物上。"
    },
    {
        id: 6,
        question: "Environmentalists __________ the new law, claiming it would harm wildlife.",
        chinese_question: "环保主义者 __________ 新法律，声称它会伤害野生动物。",
        answers: [
                { option: "A", answer: "decried", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "B", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'decried' means to publicly denounce or criticize." +
                "<br><br>" +
                "(B) 'praised' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'welcomed' means to greet someone in a friendly way.",
        chinese_explanation: "(A) '谴责' 意味着公开谴责或批评。" +
                "<br><br>" +
                "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '欢迎' 意味着以友好的方式迎接某人。"
    },
    {
        id: 7,
question: "The beauty of the sunset __________ everyone’s attention, leaving them speechless.",
chinese_question: "日落的美丽 __________ 了所有人的注意力，让他们无言以对。",
answers: [
    { option: "A", answer: "released", chinese_answer: "释放", chinese_romanization: "shìfàng" },
    { option: "B", answer: "questioned", chinese_answer: "询问", chinese_romanization: "xúnwèn" },
    { option: "C", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
    { option: "D", answer: "arrested", chinese_answer: "吸引", chinese_romanization: "xīyǐn" }
],
correctAnswer: "D",
explanation: "(D) 'arrested' means to capture or hold someone's attention." +
    "<br><br>" +
    "(A) 'released' means to set free from confinement or restraint." +
    "<br><br>" +
    "(B) 'questioned' means to ask questions or interrogate." +
    "<br><br>" +
    "(C) 'avoided' means to keep away from or stop oneself from doing something.",
chinese_explanation: "(D) '吸引' 意味着捕捉或吸引某人的注意力。" +
    "<br><br>" +
    "(A) '释放' 意味着从监禁或约束中释放。" +
    "<br><br>" +
    "(B) '询问' 意味着问问题或审问。" +
    "<br><br>" +
    "(C) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 8,
        question: "The morning mist began to __________ as the sun rose higher in the sky.",
        chinese_question: "晨雾随着太阳升得更高开始 __________ 。",
        answers: [
                { option: "A", answer: "evanesce", chinese_answer: "消散", chinese_romanization: "xiāosàn" },
                { option: "B", answer: "appear", chinese_answer: "出现", chinese_romanization: "chūxiàn" },
                { option: "C", answer: "intensify", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "D", answer: "accumulate", chinese_answer: "积累", chinese_romanization: "jīlěi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evanesce' means to pass out of sight, memory, or existence; to disappear gradually." +
            "<br><br>" +
            "(B) 'appear' means to come into sight or become visible." +
            "<br><br>" +
            "(C) 'intensify' means to become or make more intense." +
            "<br><br>" +
            "(D) 'accumulate' means to gather or collect.",
        chinese_explanation: "(A) '消散' 意味着从视线、记忆或存在中消失；逐渐消失。" +
            "<br><br>" +
            "(B) '出现' 意味着进入视野或变得可见。" +
            "<br><br>" +
            "(C) '加强' 意味着变得更强烈。" +
            "<br><br>" +
            "(D) '积累' 意味着收集或聚集。"
    },
    {
        id: 9,
        question: "When he proposed to her in front of the entire crowd, she was completely __________ and could hardly speak.",
        chinese_question: "当他在全场观众面前向她求婚时，她完全 __________，几乎说不出话来。",
        answers: [
                { option: "A", answer: "amused", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "B", answer: "flabbergasted", chinese_answer: "惊讶", chinese_romanization: "jīngyà" },
                { option: "C", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
                { option: "D", answer: "irritated", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flabbergasted' used figuratively means to shock or surprise someone greatly." +
                "<br><br>" +
                "(A) 'amused' means to cause someone to find something funny or entertaining." +
                "<br><br>" +
                "(C) 'bored' means to make someone feel weary and uninterested." +
                "<br><br>" +
                "(D) 'irritated' means to make someone annoyed or angry.",
        chinese_explanation: "(B) '惊讶' 在比喻意义上指极大地震惊或惊讶某人。" +
                "<br><br>" +
                "(A) '娱乐' 意味着使某人感到有趣或娱乐。" +
                "<br><br>" +
                "(C) '无聊' 意味着使某人感到厌倦和无趣。" +
                "<br><br>" +
                "(D) '激怒' 意味着使某人生气或愤怒。"
    },
    {
        id: 10,
question: "His article __________ against the inefficiencies in the current system, calling for immediate reforms.",
chinese_question: "他的文章对当前制度的低效率 __________，呼吁立即进行改革。",
answers: [
        { option: "A", answer: "celebrates", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "fulminates", chinese_answer: "强烈抗议", chinese_romanization: "qiángliè kàngyì" },
        { option: "C", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "tolerates", chinese_answer: "容忍", chinese_romanization: "róngrěn" }
],
correctAnswer: "B",
explanation: "(B) 'fulminates' used figuratively means to express vehement protest or to speak out angrily and passionately." +
        "<br><br>" +
        "(A) 'celebrates' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignores' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'tolerates' means to allow the existence, occurrence, or practice of something without interference.",
chinese_explanation: "(B) '强烈抗议' 在比喻意义上指强烈抗议或愤怒和热情地发声。" +
        "<br><br>" +
        "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '容忍' 意味着允许某事的存在、发生或实践，而不进行干预。"
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
