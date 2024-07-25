// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "The constant demands of the job began to __________ on his personal time.",
chinese_question: "工作的不断要求开始 __________ 他的个人时间。",
answers: [
        { option: "A", answer: "impinge", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
        { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
],
correctAnswer: "A",
explanation: "(A) 'impinge' means to have an effect or impact, especially a negative one, used figuratively here." +
        "<br><br>" +
        "(B) 'enhance' means to improve the quality, amount, or strength of something." +
        "<br><br>" +
        "(C) 'support' means to give assistance to." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
chinese_explanation: "(A) '影响' 意味着产生影响或作用，尤其是负面的影响，这里是比喻用法。" +
        "<br><br>" +
        "(B) '增强' 意味着提高某物的质量、数量或强度。" +
        "<br><br>" +
        "(C) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 2,
question: "He didn't want to __________ his opinions on the group, preferring to listen instead.",
chinese_question: "他不想将自己的意见 __________ 给小组，更喜欢倾听。",
answers: [
    { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "obtrude", chinese_answer: "强加", chinese_romanization: "qiángjiā" },
    { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
    { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
],
correctAnswer: "B",
explanation: "(B) 'obtrude' means to impose or force something, especially opinions, on others in an unwelcome or intrusive way." +
    "<br><br>" +
    "(A) 'ignore' means to refuse to take notice of." +
    "<br><br>" +
    "(C) 'conceal' means to hide or keep secret." +
    "<br><br>" +
    "(D) 'neglect' means to fail to care for properly.",
chinese_explanation: "(B) '强加' 意味着以一种不受欢迎或侵扰的方式把某事，尤其是意见，强加给别人。" +
    "<br><br>" +
    "(A) '忽视' 意味着拒绝注意。" +
    "<br><br>" +
    "(C) '隐藏' 意味着隐藏或保密。" +
    "<br><br>" +
    "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 3,
question: "The company had to __________ its decision after receiving public backlash.",
chinese_question: "公司在收到公众强烈反对后不得不 __________ 决定。",
answers: [
    { option: "A", answer: "reverse", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
    { option: "B", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
    { option: "C", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
    { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
],
correctAnswer: "A",
explanation: "(A) 'reverse' means to change to the opposite direction, position, or course of action." +
    "<br><br>" +
    "(B) 'maintain' means to continue in the same way or condition." +
    "<br><br>" +
    "(C) 'uphold' means to support or defend." +
    "<br><br>" +
    "(D) 'dismiss' means to decide that something or someone is not important and not worth considering.",
chinese_explanation: "(A) '撤销' 意味着改变到相反的方向、位置或行动方案。" +
    "<br><br>" +
    "(B) '维持' 意味着以相同的方式或状态继续。" +
    "<br><br>" +
    "(C) '支持' 意味着支持或捍卫。" +
    "<br><br>" +
    "(D) '驳回' 意味着认为某事或某人不重要，不值得考虑。"
    },
    {
        id: 4,
        question: "Through years of hard work, he __________ his reputation as a leading expert in the field.",
        chinese_question: "通过多年的努力，他 __________ 了自己作为该领域顶级专家的声誉。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "chiselled", chinese_answer: "塑造", chinese_romanization: "sùzào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'chiselled' means to shape or define something with effort, used figuratively here." +
            "<br><br>" +
            "(A) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'simplified' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'concealed' means to keep from being seen; hide.",
        chinese_explanation: "(D) '塑造' 意味着用努力来塑造或定义某物，这里是比喻用法。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '隐藏' 意味着使某物不被看到；隐藏。"
    },
    {
        id: 5,
        question: "In order to __________ the feuding neighbors, the mediator proposed a fair compromise that addressed both parties' concerns.",
        chinese_question: "为了 __________ 争吵的邻居，调解员提出了一个公平的折衷方案，解决了双方的担忧。",
        answers: [
                { option: "A", answer: "conciliate", chinese_answer: "调解", chinese_romanization: "tiáojiě" },
                { option: "B", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "obstruct", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conciliate' means to stop someone from being angry or discontented; to placate or pacify." +
            "<br><br>" +
            "(B) 'escalate' means to increase rapidly." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'obstruct' means to block or get in the way of.",
        chinese_explanation: "(A) '调解' 意味着使某人不再生气或不满；安抚或平息。" +
            "<br><br>" +
            "(B) '升级' 意味着快速增加。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '阻碍' 意味着阻挡或妨碍。"
    },
    {
        id: 6,
        question: "The borrower’s decision to __________ on the loan resulted in legal action by the bank.",
        chinese_question: "借款人决定 __________ 贷款，导致银行采取法律行动。",
        answers: [
                { option: "A", answer: "repay", chinese_answer: "还款", chinese_romanization: "huánkuǎn" },
                { option: "B", answer: "default", chinese_answer: "违约", chinese_romanization: "wéiyuē" },
                { option: "C", answer: "manage", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" },
                { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'default' means to fail to fulfill an obligation, especially to repay a loan." +
                "<br><br>" +
                "(A) 'repay' means to pay back money owed." +
                "<br><br>" +
                "(C) 'manage' means to be in charge of or administer." +
                "<br><br>" +
                "(D) 'increase' means to make or become larger or greater.",
        chinese_explanation: "(B) '违约' 意味着未能履行义务，尤其是未能偿还贷款。" +
                "<br><br>" +
                "(A) '还款' 意味着偿还所欠的钱。" +
                "<br><br>" +
                "(C) '管理' 意味着负责或管理。" +
                "<br><br>" +
                "(D) '增加' 意味着使变大或增多。"
    },
    {
        id: 7,
        question: "The long hours of tedious work began to __________ her, affecting her performance.",
        chinese_question: "漫长而乏味的工作时间开始 __________ 她，影响了她的表现。",
        answers: [
                { option: "A", answer: "invigorate", chinese_answer: "振奋", chinese_romanization: "zhènfèn" },
                { option: "B", answer: "enervate", chinese_answer: "使衰弱", chinese_romanization: "shǐ shuāiruò" },
                { option: "C", answer: "stimulate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
                { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enervate' means to cause someone to feel drained of energy or vitality." +
            "<br><br>" +
            "(A) 'invigorate' means to give strength or energy to." +
            "<br><br>" +
            "(C) 'stimulate' means to raise levels of physiological or nervous activity in the body or any biological system." +
            "<br><br>" +
            "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(B) '使衰弱' 意味着使某人感到精力或活力耗尽。" +
            "<br><br>" +
            "(A) '振奋' 意味着给予力量或能量。" +
            "<br><br>" +
            "(C) '刺激' 意味着提高身体或任何生物系统的生理或神经活动水平。" +
            "<br><br>" +
            "(D) '增强' 意味着加强、增加或进一步改善质量、价值或范围。"
    },
    {
        id: 8,
question: "He managed to __________ out the truth despite all the lies.",
chinese_question: "尽管谎言重重，他还是设法 __________ 出真相。",
answers: [
        { option: "A", answer: "ferret", chinese_answer: "搜出", chinese_romanization: "sōuchū" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "D", answer: "fabricate", chinese_answer: "编造", chinese_romanization: "biānzào" }
],
correctAnswer: "A",
explanation: "(A) 'ferret' means to search tenaciously for and find something." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'accept' means to consent to receive or undertake something." +
        "<br><br>" +
        "(D) 'fabricate' means to invent or concoct something, typically with deceitful intent.",
chinese_explanation: "(A) '搜出' 意味着坚韧地搜索并找到某物。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '接受' 意味着同意接收或承担某事。" +
        "<br><br>" +
        "(D) '编造' 意味着发明或编造某物，通常是出于欺骗目的。"
    },
    {
        id: 9,
        question: "Efforts to __________ invasive species in the park have been largely successful.",
        chinese_question: "在公园里 __________ 外来物种的努力已经取得了很大的成功。",
        answers: [
            { option: "A", answer: "introduce", chinese_answer: "引入", chinese_romanization: "yǐnrù" },
            { option: "B", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "extirpate", chinese_answer: "根除", chinese_romanization: "gēnchú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'extirpate' means to root out and destroy completely." +
            "<br><br>" +
            "(A) 'introduce' means to bring something into use or operation for the first time." +
            "<br><br>" +
            "(B) 'protect' means to keep safe from harm or injury." +
            "<br><br>" +
            "(C) 'encourage' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(D) '根除' 意味着彻底根除和消灭。" +
            "<br><br>" +
            "(A) '引入' 意味着首次投入使用或操作。" +
            "<br><br>" +
            "(B) '保护' 意味着使免受伤害或损害。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 10,
        question: "She found it hard to __________ her disappointment when she didn't get the promotion.",
        chinese_question: "当她没有得到升职时，她发现很难 __________ 自己的失望。",
        answers: [
                { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "B", answer: "dissemble", chinese_answer: "掩饰", chinese_romanization: "yǎnshì" },
                { option: "C", answer: "announce", chinese_answer: "宣布", chinese_romanization: "xuānbù" },
                { option: "D", answer: "disclose", chinese_answer: "透露", chinese_romanization: "tòulù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissemble' means to conceal one's true motives, feelings, or beliefs." +
                "<br><br>" +
                "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'announce' means to make a formal public statement about a fact, occurrence, or intention." +
                "<br><br>" +
                "(D) 'disclose' means to make known.",
        chinese_explanation: "(B) '掩饰' 意味着隐藏自己的真实动机、感受或信仰。" +
                "<br><br>" +
                "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。" +
                "<br><br>" +
                "(C) '宣布' 意味着对一个事实、事件或意图做正式的公开声明。" +
                "<br><br>" +
                "(D) '透露' 意味着公开。"
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
