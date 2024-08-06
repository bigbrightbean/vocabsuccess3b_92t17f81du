// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The tabloid was known to __________ celebrities with scandalous stories, often attacking their reputation and character.",
    chinese_question: "这家小报以用丑闻故事 __________ 名人而闻名，经常攻击他们的声誉和品格。",
    answers: [
        { option: "A", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
        { option: "B", answer: "asperse", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "C", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "adore", chinese_answer: "崇拜", chinese_romanization: "chóngbài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'asperse' means to attack or criticize someone's reputation or character." +
        "<br><br>" +
        "(A) 'honor' means to regard with great respect." +
        "<br><br>" +
        "(C) 'uphold' means to maintain or support." +
        "<br><br>" +
        "(D) 'adore' means to love and respect deeply.",
    chinese_explanation: "(B) '诽谤' 意味着攻击或批评某人的声誉或品格。" +
        "<br><br>" +
        "(A) '尊敬' 意味着对某人表示尊敬。" +
        "<br><br>" +
        "(C) '支持' 意味着维持或支持。" +
        "<br><br>" +
        "(D) '崇拜' 意味着深深地爱和尊敬。"
    },
    {
        id: 2,
    question: "He was known to __________ his friends by constantly borrowing money and never repaying it.",
    chinese_question: "他以不断借钱却从不归还而 __________ 朋友而闻名。",
    answers: [
        { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "enrich", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "D", answer: "mulct", chinese_answer: "诈骗", chinese_romanization: "zhàpiàn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'mulct' means to defraud or swindle." +
        "<br><br>" +
        "(A) 'support' means to bear all or part of the weight." +
        "<br><br>" +
        "(B) 'assist' means to help." +
        "<br><br>" +
        "(C) 'enrich' means to improve or enhance the quality or value.",
    chinese_explanation: "(D) '诈骗' 意味着欺诈或诈骗。" +
        "<br><br>" +
        "(A) '支持' 意味着承担全部或部分重量。" +
        "<br><br>" +
        "(B) '帮助' 意味着提供帮助。" +
        "<br><br>" +
        "(C) '丰富' 意味着改善或增强质量或价值。"
    },
    {
        id: 3,
    question: "It's difficult to __________ how people will react to the new policy changes, such as whether they will support it, oppose it, or remain indifferent.",
    chinese_question: "很难 __________ 人们对新政策变化的反应，比如他们是否会支持、反对或保持冷漠。",
    answers: [
        { option: "A", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
        { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
        { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'predict' means to say what will happen in the future." +
        "<br><br>" +
        "(B) 'forget' means to fail to remember." +
        "<br><br>" +
        "(C) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(D) 'confuse' means to make someone unable to think clearly.",
    chinese_explanation: "(A) '预测' 意味着说出将来会发生什么。" +
        "<br><br>" +
        "(B) '忘记' 意味着未能记住。" +
        "<br><br>" +
        "(C) '忽视' 意味着不注意；忽略。" +
        "<br><br>" +
        "(D) '混淆' 意味着使某人无法清晰思考。"
    },
    {
        id: 4,
question: "The defendant decided to __________ guilty to the charges in hopes of receiving a lighter sentence.",
chinese_question: "被告决定 __________ 有罪，希望能获得较轻的判决。",
answers: [
    { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "plead", chinese_answer: "认罪", chinese_romanization: "rènzuì" },
    { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
    { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
],
correctAnswer: "B",
explanation: "(B) 'plead' means to make an emotional appeal or to state formally in court whether one is guilty or not guilty of a charge." +
    "<br><br>" +
    "(A) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
    "<br><br>" +
    "(C) 'conceal' means to keep something secret; to hide." +
    "<br><br>" +
    "(D) 'deny' means to state that one refuses to admit the truth or existence of something.",
chinese_explanation: "(B) '认罪' 意味着提出情感上的请求或在法庭上正式声明自己是否对指控有罪。" +
    "<br><br>" +
    "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
    "<br><br>" +
    "(C) '隐藏' 意味着保密某事；隐藏。" +
    "<br><br>" +
    "(D) '否认' 意味着声明拒绝承认某事的真实性或存在。"
    },
    {
        id: 5,
    question: "The blogger aimed to __________ on her large following by launching her own merchandise, turning her popularity into profit.",
    chinese_question: "博主打算通过推出自己的商品来 __________ 她的大量粉丝，将她的受欢迎程度转化为利润。",
    answers: [
        { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "B", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
        { option: "D", answer: "capitalize", chinese_answer: "利用", chinese_romanization: "lìyòng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'capitalize' means to take advantage of (a situation); make the most of." +
        "<br><br>" +
        "(A) 'diminish' means to make or become less." +
        "<br><br>" +
        "(B) 'overlook' means to fail to notice something." +
        "<br><br>" +
        "(C) 'suppress' means to forcibly put an end to.",
    chinese_explanation: "(D) '利用' 意味着利用（情况）；充分利用。" +
        "<br><br>" +
        "(A) '减少' 意味着使或变得更少。" +
        "<br><br>" +
        "(B) '忽视' 意味着未能注意到某事。" +
        "<br><br>" +
        "(C) '抑制' 意味着强行终止。"
    },
    {
        id: 6,
    question: "The scientist added a chemical to __________ the reaction and produce results faster, speeding up the entire process.",
    chinese_question: "科学家加入了一种化学物质以 __________ 反应并更快地产生结果，加快整个过程。",
    answers: [
        { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
        { option: "B", answer: "catalyze", chinese_answer: "催化", chinese_romanization: "cuīhuà" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'catalyze' means to cause or accelerate a reaction." +
        "<br><br>" +
        "(A) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'delay' means to make something late or slow.",
    chinese_explanation: "(B) '催化'一词意味着引起或加速反应。" +
        "<br><br>" +
        "(A) '阻碍' 意味着为某人或某事制造困难，导致延迟或障碍。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '延迟' 意味着使某事变晚或变慢。"
    },
    {
        id: 7,
        question: "She feared she would __________ her chances of getting the job by saying the wrong thing.",
        chinese_question: "她担心说错话会 __________ 她得到这份工作的机会。",
        answers: [
        { option: "A", answer: "bungle", chinese_answer: "搞砸", chinese_romanization: "gǎo zá" },
        { option: "B", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bungle' means to carry out a task clumsily or incompetently." +
            "<br><br>" +
            "(B) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(A) '搞砸' 意味着笨拙或无能地完成一项任务。" +
            "<br><br>" +
            "(B) '提高' 意味着加强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '澄清' 意味着使声明或情况不再混乱并更容易理解。"
    },
    {
        id: 8,
question: "Economists try to __________ future market trends to advise their clients and help businesses make informed decisions.",
chinese_question: "经济学家试图 __________ 未来的市场趋势，以便为客户提供建议，并帮助企业做出明智的决策。",
answers: [
    { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "delay", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
    { option: "C", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
    { option: "D", answer: "disrupt", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
],
correctAnswer: "C",
explanation: "(C) 'predict' means to say or estimate that a specified thing will happen in the future or will be a consequence of something." +
    "<br><br>" +
    "(A) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
    "<br><br>" +
    "(B) 'delay' means to make something late or slow." +
    "<br><br>" +
    "(D) 'disrupt' means to interrupt or disturb an event, activity, or process.",
chinese_explanation: "(C) '预测' 意味着说或估计未来会发生某事或某事将是某种结果。" +
    "<br><br>" +
    "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
    "<br><br>" +
    "(B) '推迟' 意味着使某事变晚或变慢。" +
    "<br><br>" +
    "(D) '干扰' 意味着中断或打扰一个事件、活动或过程。"
    },
    {
        id: 9,
    question: "In his anger, he began to __________ curses upon his enemies, wishing them misfortune and suffering.",
    chinese_question: "在愤怒中，他开始 __________ 诅咒他的敌人，希望他们不幸和痛苦。",
    answers: [
        { option: "A", answer: "imprecate", chinese_answer: "咒骂", chinese_romanization: "zhòumà" },
        { option: "B", answer: "bless", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'imprecate' means to utter a curse or invoke evil against someone." +
        "<br><br>" +
        "(B) 'bless' means to invoke divine favor upon someone." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(A) '咒骂' 意味着诅咒或祈求对某人降祸。" +
        "<br><br>" +
        "(B) '祝福' 意味着祈求神的恩宠降临在某人身上。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 10,
        question: "She tends to __________ her job responsibilities when talking to friends, making them seem more impressive.",
        chinese_question: "她在和朋友谈话时倾向于 __________ 她的工作职责，使它们显得更令人印象深刻。",
        answers: [
                { option: "A", answer: "downplay", chinese_answer: "轻描淡写", chinese_romanization: "qīngmiáodànxiě" },
                { option: "B", answer: "embellish", chinese_answer: "夸大", chinese_romanization: "kuādà" },
                { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'embellish' means to make a story or achievement more interesting by adding extra details that are often untrue." +
            "<br><br>" +
            "(A) 'downplay' means to make something seem less important or significant." +
            "<br><br>" +
            "(C) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'forget' means to fail to remember.",
        chinese_explanation: "(B) '夸大'一词意味着通过添加通常不真实的额外细节使故事或成就更有趣。" +
            "<br><br>" +
            "(A) '轻描淡写' 意味着使某事显得不那么重要或不显著。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
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
