// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her thoughtful comments during the meeting __________ a sense of respect from her colleagues.",
        chinese_question: "她在会议上的深思熟虑的评论 __________ 了同事们的尊重。",
        answers: [
                { option: "A", answer: "engendered", chinese_answer: "产生了", chinese_romanization: "chǎnshēngle" },
                { option: "B", answer: "ignored", chinese_answer: "忽视了", chinese_romanization: "hūshìle" },
                { option: "C", answer: "diminished", chinese_answer: "减少了", chinese_romanization: "jiǎnshǎole" },
                { option: "D", answer: "concealed", chinese_answer: "隐藏了", chinese_romanization: "yǐncángle" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'engendered' means to cause or give rise to a feeling, situation, or condition." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'diminished' means to make or become less." +
            "<br><br>" +
            "(D) 'concealed' means to keep something secret or hidden.",
        chinese_explanation: "(A) '产生了' 意味着引起或产生一种感觉、情况或条件。" +
            "<br><br>" +
            "(B) '忽视了' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '减少了' 意味着使或变得更少。" +
            "<br><br>" +
            "(D) '隐藏了' 意味着保密或隐藏某物。"
    },
    {
        id: 2,
    question: "Instead of preparing for his exams, he preferred to __________ around the town.",
    chinese_question: "他宁愿在镇上 __________ ，而不是准备考试。",
    answers: [
        { option: "A", answer: "study", chinese_answer: "学习", chinese_romanization: "xuéxí" },
        { option: "B", answer: "gallivant", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'gallivant' means to go around from one place to another in the pursuit of pleasure or entertainment, used figuratively here." +
        "<br><br>" +
        "(A) 'study' means to devote time and attention to acquiring knowledge on an academic subject." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'rest' means to cease work or movement in order to relax, refresh oneself, or recover strength.",
    chinese_explanation: "(B) '闲逛' 意味着为了追求娱乐或享受而到处闲逛，这里是比喻用法。" +
        "<br><br>" +
        "(A) '学习' 意味着花时间和注意力来获取学科知识。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '休息' 意味着停止工作或活动以放松、恢复自己或恢复体力。"
    },
    {
        id: 3,
    question: "The strange behavior of the animals seemed to __________ an earthquake.",
    chinese_question: "动物们的奇怪行为似乎 __________ 地震。",
    answers: [
            { option: "A", answer: "forebode", chinese_answer: "预示", chinese_romanization: "yùshì" },
            { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'forebode' means to act as a warning or indication of a future event." +
            "<br><br>" +
            "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'soothe' means to gently calm someone.",
    chinese_explanation: "(A) '预示' 意味着作为未来事件的警告或指示。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '安抚' 意味着温柔地安抚某人。"
    },
    {
        id: 4,
question: "She tried to __________ her actions by saying it was for the greater good, despite knowing it was wrong.",
chinese_question: "尽管知道这是错误的，她还是试图通过说这是为了更大的利益来 __________ 她的行为。",
answers: [
    { option: "A", answer: "justify", chinese_answer: "证明", chinese_romanization: "zhèngmíng" },
    { option: "B", answer: "rationalize", chinese_answer: "合理化", chinese_romanization: "hélǐhuà" },
    { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
],
correctAnswer: "B",
explanation: "(B) 'rationalize' means to attempt to explain or justify behavior or an attitude with logical reasons, even if these are not appropriate." +
    "<br><br>" +
    "(A) 'justify' means to show or prove to be right or reasonable." +
    "<br><br>" +
    "(C) 'ignore' means to refuse to take notice of." +
    "<br><br>" +
    "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
chinese_explanation: "(B) '合理化' 意味着试图用合理的理由解释或证明行为或态度，即使这些理由并不合适。" +
    "<br><br>" +
    "(A) '证明' 意味着证明是正确的或合理的。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意。" +
    "<br><br>" +
    "(D) '批评' 意味着以不赞成的方式指出某人或某物的错误。"
    },
    {
        id: 5,
question: "The teacher had to __________ the students back into the classroom after recess, as they were reluctant to leave the playground.",
chinese_question: "课间休息后，老师不得不把学生们 __________ 回教室，因为他们不愿意离开操场。",
answers: [
    { option: "A", answer: "corral", chinese_answer: "赶回", chinese_romanization: "gǎn huí" },
    { option: "B", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
    { option: "C", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
    { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "A",
explanation: "(A) 'corral' means gather together and confine (a group of people or things)." +
    "<br><br>" +
    "(B) 'dismiss' means order or allow to leave; send away." +
    "<br><br>" +
    "(C) 'disperse' means distribute or spread over a wide area." +
    "<br><br>" +
    "(D) 'neglect' means fail to care for properly.",
chinese_explanation: "(A) '赶回' 意味着把一群人或物聚集在一起并加以限制。" +
    "<br><br>" +
    "(B) '解散' 意味着命令或允许离开；遣散。" +
    "<br><br>" +
    "(C) '分散' 意味着分布或散布在广泛区域。" +
    "<br><br>" +
    "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 6,
        question: "The test results will __________ whether the new drug is effective.",
        chinese_question: "测试结果将 __________ 新药是否有效。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
            { option: "B", answer: "question", chinese_answer: "质疑", chinese_romanization: "zhìyí" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reveal' means to make known to others." +
            "<br><br>" +
            "(A) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(B) 'question' means to ask questions about something, especially in order to express one's doubts about it or to check its validity or accuracy." +
            "<br><br>" +
            "(C) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(D) '揭示' 意味着让他人知道。" +
            "<br><br>" +
            "(A) '遮掩' 意味着不让被看到；隐藏。" +
            "<br><br>" +
            "(B) '质疑' 意味着对某事提出疑问，尤其是为了表达怀疑或检查其有效性或准确性。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 7,
question: "The two employees __________ to steal company secrets and sell them to a competitor, putting the entire business at risk.",
chinese_question: "这两名员工 __________ 以窃取公司机密并将其出售给竞争对手，从而使整个业务面临风险。",
answers: [
    { option: "A", answer: "cooperated", chinese_answer: "合作", chinese_romanization: "hézuò" },
    { option: "B", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
    { option: "C", answer: "connived", chinese_answer: "共谋", chinese_romanization: "gòngmóu" },
    { option: "D", answer: "planned", chinese_answer: "计划", chinese_romanization: "jìhuà" }
],
correctAnswer: "C",
explanation: "(C) 'connived' means secretly allow (something considered immoral, illegal, wrong, or harmful) to occur." +
    "<br><br>" +
    "(A) 'cooperated' means work jointly towards the same end." +
    "<br><br>" +
    "(B) 'assisted' means help (someone), typically by doing a share of the work." +
    "<br><br>" +
    "(D) 'planned' means decide on and arrange in advance.",
chinese_explanation: "(C) '共谋' 意味着秘密允许（某些被认为不道德、非法、错误或有害的事情）发生。" +
    "<br><br>" +
    "(A) '合作' 意味着共同朝着同一目标努力。" +
    "<br><br>" +
    "(B) '帮助' 意味着帮助（某人），通常是通过分担工作。" +
    "<br><br>" +
    "(D) '计划' 意味着事先决定和安排。"
    },
    {
        id: 8,
        question: "The charity organization __________ people to donate and support their cause.",
        chinese_question: "慈善组织 __________ 人们捐款并支持他们的事业。",
        answers: [
                { option: "A", answer: "deterred", chinese_answer: "威慑", chinese_romanization: "wēishè" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "exhorted", chinese_answer: "力劝", chinese_romanization: "lìquàn" },
                { option: "D", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exhorted' used figuratively means to strongly encourage or urge someone to think or act in a certain way." +
            "<br><br>" +
            "(A) 'deterred' means to discourage someone from doing something by instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'rejected' means to dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(C) '力劝' 在比喻意义上指强烈鼓励或敦促某人以某种方式思考或行动。" +
            "<br><br>" +
            "(A) '威慑' 意味着通过灌输怀疑或对后果的恐惧来阻止某人做某事。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '拒绝' 意味着认为不合格、不接受或有缺陷。"
    },
    {
        id: 9,
        question: "The editor decided to __________ several paragraphs from the final draft to make the article more concise.",
        chinese_question: "编辑决定从终稿中 __________ 几个段落，以使文章更简洁。",
        answers: [
                { option: "A", answer: "elide", chinese_answer: "省略", chinese_romanization: "shěnglüè" },
                { option: "B", answer: "include", chinese_answer: "包括", chinese_romanization: "bāokuò" },
                { option: "C", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
                { option: "D", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'elide' means to omit or leave out." +
            "<br><br>" +
            "(B) 'include' means to comprise or contain as part of a whole." +
            "<br><br>" +
            "(C) 'expand' means to make something larger or more extensive." +
            "<br><br>" +
            "(D) 'emphasize' means to give special importance or prominence to something.",
        chinese_explanation: "(A) '省略' 意味着省略或遗漏。" +
            "<br><br>" +
            "(B) '包括' 意味着作为整体的一部分。" +
            "<br><br>" +
            "(C) '扩展' 意味着使某物更大或更广泛。" +
            "<br><br>" +
            "(D) '强调' 意味着给某事物以特别重要性或突出地位。"
    },
    {
        id: 10,
        question: "The villagers __________ the traitor who betrayed them to the enemy.",
        chinese_question: "村民们 __________ 那个将他们出卖给敌人的叛徒。",
        answers: [
                { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "execrated", chinese_answer: "憎恶", chinese_romanization: "zēngwù" },
                { option: "D", answer: "honored", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'execrated' means to feel or express great loathing for." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'honored' means to regard with great respect.",
        chinese_explanation: "(C) '憎恶' 意味着感到或表达极大的厌恶。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的认可或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '尊敬' 意味着高度尊重。"
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
