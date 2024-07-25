// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The constant stress from work began to __________ his mental health, causing frequent anxiety attacks.",
        chinese_question: "工作的持续压力开始 __________ 他的心理健康，导致频繁的焦虑发作。",
        answers: [
                { option: "A", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "B", answer: "debilitate", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'debilitate' means to make someone weak and infirm, used figuratively to mean undermine or weaken." +
            "<br><br>" +
            "(A) 'improve' means to make or become better." +
            "<br><br>" +
            "(C) 'support' means to give assistance to." +
            "<br><br>" +
            "(D) 'enhance' means to intensify or increase in quality.",
        chinese_explanation: "(B) '削弱' 意味着使某人虚弱和衰弱，比喻意义上指削弱或削弱。" +
            "<br><br>" +
            "(A) '改善' 意味着使或变得更好。" +
            "<br><br>" +
            "(C) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(D) '提高' 意味着增强或提高质量。"
    },
    {
        id: 2,
        question: "She decided to __________ the topic of salary increases at the next team meeting.",
        chinese_question: "她决定在下次团队会议上 __________ 涨工资的话题。",
        answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "broach", chinese_answer: "提出", chinese_romanization: "tíchū" },
        { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'broach' means to raise a sensitive or difficult subject for discussion." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dismiss' means to decide that something or someone is not important and not worth considering." +
            "<br><br>" +
            "(D) 'conceal' means to keep something secret or prevent it from being known.",
        chinese_explanation: "(B) '提出' 意味着提出一个敏感或困难的话题进行讨论。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '驳回' 意味着认为某事或某人不重要且不值得考虑。" +
            "<br><br>" +
            "(D) '隐藏' 意味着保密或防止被知道。"
    },
    {
        id: 3,
        question: "The general decided to __________ his army's strength to intimidate the enemy.",
        chinese_question: "将军决定 __________ 他的军队实力以威胁敌人。",
        answers: [
        { option: "A", answer: "brandish", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
        { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brandish' means to display something ostentatiously, especially in order to gain attention." +
            "<br><br>" +
            "(B) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'diminish' means to make or become less.",
        chinese_explanation: "(A) '炫耀' 意味着夸耀地展示某物，特别是为了吸引注意。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使某物不被看到。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '减少' 意味着使变少或变少。"
    },
    {
        id: 4,
        question: "The flashy graphics on the website might __________ from the user experience by making it harder to navigate.",
        chinese_question: "网站上的华丽图形可能会 __________ 用户体验，因为它使导航变得更加困难。",
        answers: [
            { option: "A", answer: "add", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "detract", chinese_answer: "贬低", chinese_romanization: "bǎndī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'detract' means to reduce or take away the worth or value of something." +
            "<br><br>" +
            "(A) 'add' means to join something to something else to increase the size, number, or amount." +
            "<br><br>" +
            "(B) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '贬低' 意味着减少或降低某物的价值或价值。" +
            "<br><br>" +
            "(A) '增加' 意味着将某物加入到另一物中以增加大小、数量或金额。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "The evidence presented in court helped to __________ the defendant of all charges.",
        chinese_question: "法庭上提供的证据帮助 __________ 被告所有的指控。",
        answers: [
                { option: "A", answer: "exonerate", chinese_answer: "免除", chinese_romanization: "miǎnchú" },
                { option: "B", answer: "implicate", chinese_answer: "牵连", chinese_romanization: "qiānlián" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "convict", chinese_answer: "定罪", chinese_romanization: "dìngzuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exonerate' means to absolve someone from blame for a fault or wrongdoing." +
            "<br><br>" +
            "(B) 'implicate' means to show someone to be involved in a crime." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'convict' means to declare someone to be guilty of a criminal offense.",
        chinese_explanation: "(A) '免除' 意味着使某人免于承担过错或错误的责任。" +
            "<br><br>" +
            "(B) '牵连' 意味着显示某人参与了犯罪。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '定罪' 意味着宣布某人犯有刑事罪。"
    },
    {
        id: 6,
        question: "Her account of the events was __________ by several other witnesses.",
        chinese_question: "她对事件的描述得到了几位其他证人的 __________。",
        answers: [
            { option: "A", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "corroborated", chinese_answer: "证实", chinese_romanization: "zhèngshí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'corroborated' means to confirm or give support to (a statement, theory, or finding)." +
            "<br><br>" +
            "(A) 'denied' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dismissed' means to order or allow to leave; send away.",
        chinese_explanation: "(D) '证实' 意味着确认或支持（陈述、理论或发现）。" +
            "<br><br>" +
            "(A) '否认' 意味着表示拒绝承认事实或存在。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 7,
question: "The knight would __________ before the king as a sign of respect.",
chinese_question: "骑士会在国王面前 __________ 以示尊敬。",
answers: [
        { option: "A", answer: "genuflect", chinese_answer: "跪拜", chinese_romanization: "guìbài" },
        { option: "B", answer: "stand", chinese_answer: "站立", chinese_romanization: "zhànlì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" }
],
correctAnswer: "A",
explanation: "(A) 'genuflect' means to lower one's body briefly by bending one knee to the ground, typically in worship or as a sign of respect." +
        "<br><br>" +
        "(B) 'stand' means to be in an upright position on the feet." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'applaud' means to show approval or praise by clapping.",
chinese_explanation: "(A) '跪拜' 意味着通过弯曲一膝下跪来短暂地降低身体，通常是表示敬意或崇拜。" +
        "<br><br>" +
        "(B) '站立' 意味着用脚站立。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '鼓掌' 意味着通过拍手表示赞同或称赞。"
    },
    {
        id: 8,
question: "The monk chose to __________ worldly possessions for a life of simplicity.",
chinese_question: "这位僧侣选择 __________ 世俗财物，过简单的生活。",
answers: [
        { option: "A", answer: "forswear", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "gather", chinese_answer: "收集", chinese_romanization: "shōují" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "flaunt", chinese_answer: "炫耀", chinese_romanization: "xuànyào" }
],
correctAnswer: "A",
explanation: "(A) 'forswear' means to agree to give up or do without something, used figuratively here." +
        "<br><br>" +
        "(B) 'gather' means to bring together or collect." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'flaunt' means to display something ostentatiously.",
chinese_explanation: "(A) '放弃' 意味着同意放弃或不做某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '收集' 意味着聚集或收集。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '炫耀' 意味着炫耀地展示某物。"
    },
    {
        id: 9,
    question: "She would __________ her teeth in frustration every time her plans fell apart.",
    chinese_question: "每次计划失败时，她都会 __________ 牙齿，感到沮丧。",
    answers: [
        { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "gnash", chinese_answer: "咬牙", chinese_romanization: "yǎoyá" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'gnash' means to grind one's teeth together, used figuratively here to show frustration." +
        "<br><br>" +
        "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'comfort' means to soothe or console someone who is unhappy or distressed.",
    chinese_explanation: "(B) '咬牙' 意味着磨牙，这里是比喻用法，表示沮丧。" +
        "<br><br>" +
        "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '安慰' 意味着安抚或安慰不开心或不安的人。"
    },
    {
        id: 10,
        question: "The detailed report __________ the complexity of the situation.",
        chinese_question: "详细的报告 __________ 出情况的复杂性。",
        answers: [
                { option: "A", answer: "evinced", chinese_answer: "表现出", chinese_romanization: "biǎoxiàn chū" },
                { option: "B", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evinced' means to show or express clearly, used figuratively here." +
            "<br><br>" +
            "(B) 'simplified' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'concealed' means to keep something secret or hidden.",
        chinese_explanation: "(A) '表现出' 意味着清楚地显示或表达，这里是比喻用法。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '隐藏' 意味着保密或隐藏某物。"
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
