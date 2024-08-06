// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Over time, the constant rubbing of the rope against the tree bark began to __________ it, gradually wearing it away and causing visible damage.",
    chinese_question: "随着时间的推移，绳子不断地摩擦树皮，开始 __________ 树皮，逐渐磨损并造成明显的损害。",
    answers: [
        { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
        { option: "C", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
        { option: "D", answer: "abrade", chinese_answer: "磨损", chinese_romanization: "mósǔn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'abrade' means to scrape or wear away by friction or erosion." +
        "<br><br>" +
        "(A) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(B) 'preserve' means to maintain something in its original or existing state." +
        "<br><br>" +
        "(C) 'nurture' means to care for and encourage the growth or development of.",
    chinese_explanation: "(D) '磨损' 意味着通过摩擦或侵蚀刮掉或磨掉。" +
        "<br><br>" +
        "(A) '保护' 意味着保护免受伤害或损害。" +
        "<br><br>" +
        "(B) '保存' 意味着保持某物的原始或现有状态。" +
        "<br><br>" +
        "(C) '培育' 意味着照料和鼓励生长或发展。"
    },
    {
        id: 2,
        question: "His creativity began to __________ after he started attending the art workshops, flourishing as he explored new techniques and ideas.",
        chinese_question: "在他开始参加艺术工作坊后，他的创造力开始 __________ ，随着他探索新的技术和想法而绽放。",
        answers: [
                { option: "A", answer: "effloresce", chinese_answer: "绽放", chinese_romanization: "zhànfàng" },
                { option: "B", answer: "fade", chinese_answer: "消退", chinese_romanization: "xiāotuì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "wither", chinese_answer: "枯萎", chinese_romanization: "kūwěi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'effloresce' means to blossom or come into full bloom, used figuratively here." +
                "<br><br>" +
                "(B) 'fade' means to gradually grow faint and disappear." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'wither' means to become dry and shriveled.",
        chinese_explanation: "(A) '绽放' 意味着开花或进入全盛期，这里是比喻用法。" +
                "<br><br>" +
                "(B) '消退' 意味着逐渐变得模糊和消失。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '枯萎' 意味着变干和枯萎。"
    },
    {
        id: 3,
        question: "To enhance the flavor, the recipe advises to __________ the berries in sugar and lemon juice, allowing them to soak and soften.",
        chinese_question: "为了增强风味，食谱建议将浆果在糖和柠檬汁中 __________，让它们浸泡和变软。",
        answers: [
                { option: "A", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
                { option: "B", answer: "macerate", chinese_answer: "浸泡", chinese_romanization: "jìnpào" },
                { option: "C", answer: "cook", chinese_answer: "烹饪", chinese_romanization: "pēngrèn" },
                { option: "D", answer: "freeze", chinese_answer: "冷冻", chinese_romanization: "lěngdòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'macerate' means to soak something to soften it." +
            "<br><br>" +
            "(A) 'blend' means to mix thoroughly." +
            "<br><br>" +
            "(C) 'cook' means to prepare food by heating." +
            "<br><br>" +
            "(D) 'freeze' means to make something solid by cooling.",
        chinese_explanation: "(B) '浸泡' 一词意味着浸泡某物以使其变软。" +
            "<br><br>" +
            "(A) '混合' 意味着彻底混合。" +
            "<br><br>" +
            "(C) '烹饪' 意味着通过加热准备食物。" +
            "<br><br>" +
            "(D) '冷冻' 意味着通过冷却使某物变固体。"
    },
    {
        id: 4,
        question: "She __________ that their success was due to a combination of hard work and good fortune, suggesting this as a basis for their remarkable achievements.",
        chinese_question: "她 __________ 他们的成功是由于勤奋和好运的结合，提出这是他们显著成就的基础。",
        answers: [
            { option: "A", answer: "negated", chinese_answer: "否定", chinese_romanization: "fǒudìng" },
            { option: "B", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "C", answer: "postulated", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "overlooked", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'postulated' means to suggest or assume the existence, fact, or truth of something as a basis for reasoning, discussion, or belief." +
            "<br><br>" +
            "(A) 'negated' means to nullify or make ineffective." +
            "<br><br>" +
            "(B) 'dismissed' means to treat something as unworthy of serious consideration." +
            "<br><br>" +
            "(D) 'overlooked' means to fail to notice something.",
        chinese_explanation: "(C) '假设' 意味着建议或假定某事物的存在、事实或真实性作为推理、讨论或信仰的基础。" +
            "<br><br>" +
            "(A) '否定' 意味着使无效或无效。" +
            "<br><br>" +
            "(B) '驳回' 意味着认为某事不值得认真考虑。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 5,
  question: "She didn't want to __________ his efforts, but she felt the need to offer constructive criticism.",
  chinese_question: "她不想 __________ 他的努力，但她觉得有必要提出建设性的批评。",
  answers: [
    { option: "A", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
    { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
    { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'disparage' means to regard or represent as being of little worth." +
    "<br><br>" +
    "(B) 'praise' means to express warm approval or admiration of." +
    "<br><br>" +
    "(C) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(D) 'support' means to give assistance to.",
  chinese_explanation: "(A) '贬低' 意味着认为或表现出某事物没有价值。" +
    "<br><br>" +
    "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 6,
        question: "The changes to the train schedule will __________ travelers, making it difficult for them to plan their journeys.",
        chinese_question: "火车时刻表的变动会 __________ 旅客，使他们难以计划行程。",
        answers: [
                { option: "A", answer: "facilitate", chinese_answer: "便利", chinese_romanization: "biànlì" },
                { option: "B", answer: "discommode", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
                { option: "C", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'discommode' means to cause inconvenience or trouble to someone." +
                "<br><br>" +
                "(A) 'facilitate' means to make an action or process easy or easier." +
                "<br><br>" +
                "(C) 'assist' means to help someone, typically by doing a share of the work." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(B) '打扰' 意味着给某人带来不便或麻烦。" +
                "<br><br>" +
                "(A) '便利' 意味着使一个动作或过程变得简单或更简单。" +
                "<br><br>" +
                "(C) '帮助' 意味着帮助某人，通常是分担一些工作。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "She had to __________ her way through the crowded market to reach the vendor, pushing and squeezing through the throngs of people.",
        chinese_question: "她不得不 __________ 穿过拥挤的市场才能到达小贩处，推挤穿过人群。",
        answers: [
                { option: "A", answer: "stroll", chinese_answer: "漫步", chinese_romanization: "mànbù" },
                { option: "B", answer: "slide", chinese_answer: "滑动", chinese_romanization: "huádòng" },
                { option: "C", answer: "clamber", chinese_answer: "费力前行", chinese_romanization: "fèilì qiánxíng" },
                { option: "D", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'clamber' figuratively means to move with difficulty or effort through a challenging environment." +
            "<br><br>" +
            "(A) 'stroll' means to walk in a leisurely way." +
            "<br><br>" +
            "(B) 'slide' means to move smoothly along a surface." +
            "<br><br>" +
            "(D) 'descend' means to move or fall downward.",
        chinese_explanation: "(C) '费力前行' 在比喻意义上意味着通过具有挑战性的环境艰难或费力地移动。" +
            "<br><br>" +
            "(A) '漫步' 意味着悠闲地走。" +
            "<br><br>" +
            "(B) '滑动' 意味着沿着表面平滑移动。" +
            "<br><br>" +
            "(D) '下降' 意味着向下移动或落下。"
    },
    {
        id: 8,
    question: "The new job __________ relocating to another city, which was a big decision for her.",
    chinese_question: "新工作 __________ 搬到另一个城市，这对她来说是一个重大决定。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "C", answer: "excluded", chinese_answer: "排除", chinese_romanization: "páichú" },
        { option: "D", answer: "entailed", chinese_answer: "需要", chinese_romanization: "xūyào" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'entailed' means to involve something as a necessary or inevitable part or consequence." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(B) 'avoided' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(C) 'excluded' means to deny someone access to or bar someone from a place, group, or privilege.",
    chinese_explanation: "(D) '需要'一词意味着作为必要或不可避免的一部分或结果而涉及某事。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(B) '避免' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(C) '排除' 意味着拒绝某人进入某个地方、群体或特权。"
    },
    {
        id: 9,
        question: "Her explanation only served to __________ the issue, making it even harder to understand.",
        chinese_question: "她的解释只会 __________ 问题，使其更难理解。",
        answers: [
                { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
                { option: "B", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'complicate' means to make something more difficult or confusing." +
            "<br><br>" +
            "(B) 'clarify' means to make a statement or situation less confused and more comprehensible." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'conceal' means to keep something from being seen; hide.",
        chinese_explanation: "(A) '复杂化' 意味着使某事更加困难或令人困惑。" +
            "<br><br>" +
            "(B) '澄清' 意味着使声明或情况不再混乱并更容易理解。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '隐藏' 意味着使某物不被看到；隐藏。"
    },
    {
        id: 10,
        question: "The artist's sketch beautifully __________ the contours of the mountain range, capturing every curve and detail with precision.",
        chinese_question: "这位艺术家的素描美丽地 __________ 出了山脉的轮廓，精确地捕捉到每一个曲线和细节。",
        answers: [
                { option: "A", answer: "obliterated", chinese_answer: "涂掉", chinese_romanization: "túdiào" },
                { option: "B", answer: "exaggerated", chinese_answer: "夸大", chinese_romanization: "kuādà" },
                { option: "C", answer: "limned", chinese_answer: "勾画", chinese_romanization: "gōuhuà" },
                { option: "D", answer: "obscured", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'limned' means to outline or describe." +
            "<br><br>" +
            "(A) 'obliterated' means to destroy completely." +
            "<br><br>" +
            "(B) 'exaggerated' means to represent as larger or more significant than is true." +
            "<br><br>" +
            "(D) 'obscured' means to hide or make unclear.",
        chinese_explanation: "(C) '勾画' 一词意味着勾勒或描述。" +
            "<br><br>" +
            "(A) '涂掉' 意味着完全摧毁。" +
            "<br><br>" +
            "(B) '夸大' 意味着表现得比实际更大或更重要。" +
            "<br><br>" +
            "(D) '遮掩' 意味着隐藏或使不清楚。"
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
