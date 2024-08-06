// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The gibbons in the zoo __________ from branch to branch with impressive speed, showcasing their agility and strength.",
        chinese_question: "动物园里的长臂猿以惊人的速度在树枝间摆荡，展示了它们的敏捷和力量。",
        answers: [
        { option: "A", answer: "brachiate", chinese_answer: "摆荡", chinese_romanization: "bǎidàng" },
        { option: "B", answer: "walk", chinese_answer: "走路", chinese_romanization: "zǒulù" },
        { option: "C", answer: "crawl", chinese_answer: "爬行", chinese_romanization: "páxíng" },
        { option: "D", answer: "jump", chinese_answer: "跳跃", chinese_romanization: "tiàoyuè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brachiate' means to move by swinging with the arms from one hold to another." +
            "<br><br>" +
            "(B) 'walk' means to move at a regular pace by lifting and setting down each foot in turn." +
            "<br><br>" +
            "(C) 'crawl' means to move on hands and knees." +
            "<br><br>" +
            "(D) 'jump' means to push oneself off a surface and into the air by using the muscles in one's legs and feet.",
        chinese_explanation: "(A) '摆荡' 意味着通过用手臂从一个支撑点摆荡到另一个支撑点来移动。" +
            "<br><br>" +
            "(B) '走路' 意味着以规则的步伐移动，通过轮流抬起和放下每只脚。" +
            "<br><br>" +
            "(C) '爬行' 意味着用手和膝盖移动。" +
            "<br><br>" +
            "(D) '跳跃' 意味着用腿和脚的肌肉将自己从表面推离并跳入空中。"
    },
    {
        id: 2,
        question: "The botanist explained how certain plants __________ their leaves as a response to environmental stress, such as dropping leaves during drought to conserve water.",
        chinese_question: "植物学家解释了某些植物如何通过在干旱时脱落叶子来节约水分等方式应对环境压力。",
        answers: [
        { option: "A", answer: "flourish", chinese_answer: "繁茂", chinese_romanization: "fánmào" },
        { option: "B", answer: "abscise", chinese_answer: "脱落", chinese_romanization: "tuōluò" },
        { option: "C", answer: "adhere", chinese_answer: "粘附", chinese_romanization: "zhānfù" },
        { option: "D", answer: "grow", chinese_answer: "生长", chinese_romanization: "shēngzhǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abscise' means to separate, detach, or shed, typically as part of a natural process." +
            "<br><br>" +
            "(A) 'flourish' means to grow or develop in a healthy or vigorous way." +
            "<br><br>" +
            "(C) 'adhere' means to stick fast to a surface or substance." +
            "<br><br>" +
            "(D) 'grow' means to undergo natural development by increasing in size and changing physically.",
        chinese_explanation: "(B) '脱落' 意味着分离、分离或脱落，通常是作为自然过程的一部分。" +
            "<br><br>" +
            "(A) '繁茂' 意味着以健康或旺盛的方式生长或发展。" +
            "<br><br>" +
            "(C) '粘附' 意味着紧贴在表面或物质上。" +
            "<br><br>" +
            "(D) '生长' 意味着通过增加体积和物理变化进行自然发展。"
    },
    {
        id: 3,
    question: "The deal was __________ with the final signature, marking the beginning of a new partnership.",
    chinese_question: "交易在最后签署后被 __________，标志着新合作伙伴关系的开始。",
    answers: [
        { option: "A", answer: "postponed", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
        { option: "B", answer: "debated", chinese_answer: "辩论", chinese_romanization: "biànlùn" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "sealed", chinese_answer: "确定", chinese_romanization: "quèdìng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sealed' means confirmed or finalized." +
        "<br><br>" +
        "(A) 'postponed' means to arrange for something to take place at a later time." +
        "<br><br>" +
        "(B) 'debated' means discussed or argued about." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(D) '确定' 意味着确认或最终确定。" +
        "<br><br>" +
        "(A) '推迟' 意味着安排某事在较晚时间进行。" +
        "<br><br>" +
        "(B) '辩论' 意味着讨论或争论。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "His actions, such as lying to clients and falsifying reports, __________ the values we strive to uphold in this organization.",
        chinese_question: "他的行为，比如对客户撒谎和伪造报告，违反了我们在这个组织中努力坚持的价值观。",
        answers: [
                { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "contravene", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
                { option: "C", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contravene' means to violate or conflict with a rule or law." +
            "<br><br>" +
            "(A) 'support' means to uphold or defend." +
            "<br><br>" +
            "(C) 'reinforce' means to strengthen or support." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '违反' 意味着违反或与规则或法律相冲突。" +
            "<br><br>" +
            "(A) '支持' 意味着维护或捍卫。" +
            "<br><br>" +
            "(C) '加强' 意味着加强或支持。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
    question: "Repeated failures, such as unsuccessful job interviews and rejected project proposals, began to __________ his confidence.",
    chinese_question: "反复的失败，比如不成功的工作面试和被拒绝的项目提案，开始磨损他的信心。",
    answers: [
            { option: "A", answer: "fray", chinese_answer: "磨损", chinese_romanization: "mósǔn" },
            { option: "B", answer: "boost", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "secure", chinese_answer: "保护", chinese_romanization: "bǎohù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fray' means to strain or cause stress, used figuratively here." +
            "<br><br>" +
            "(B) 'boost' means to increase or improve something." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'secure' means to make safe or protect.",
    chinese_explanation: "(A) '磨损' 意味着使某人变得紧张或有压力，这里是比喻用法。" +
            "<br><br>" +
            "(B) '增强' 意味着增加或改善某物。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '保护' 意味着确保安全或保护。"
    },
    {
        id: 6,
    question: "The retailer launched a big sale to __________ the losses incurred during the slow season, aiming to recover financially.",
    chinese_question: "零售商发起了大促销活动，以弥补在淡季期间遭受的损失，希望在经济上恢复。",
    answers: [
        { option: "A", answer: "exaggerate", chinese_answer: "夸大", chinese_romanization: "kuādà" },
        { option: "B", answer: "recuperate", chinese_answer: "弥补", chinese_romanization: "míbǔ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'recuperate' means to recover from illness or exertion, used figuratively here to mean recovering losses." +
        "<br><br>" +
        "(A) 'exaggerate' means to represent something as being larger, better, or worse than it really is." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'increase' means to become or make greater in size, amount, or degree.",
    chinese_explanation: "(B) '弥补' 在这里是比喻意义，指恢复损失。" +
        "<br><br>" +
        "(A) '夸大' 意味着将某事物描述得比实际更大、更好或更糟。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '增加' 意味着变得更大或更多。"
    },
    {
        id: 7,
  question: "The company aimed to __________ on the growing demand for eco-friendly products by launching a new green product line.",
  chinese_question: "公司旨在通过推出一条新的绿色产品线来 __________ 日益增长的环保产品需求。",
  answers: [
    { option: "A", answer: "capitalize", chinese_answer: "利用", chinese_romanization: "lìyòng" },
    { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
    { option: "D", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'capitalize' means to take advantage of (a situation); make the most of." +
    "<br><br>" +
    "(B) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(C) 'delay' means to make (someone or something) late or slow." +
    "<br><br>" +
    "(D) 'undermine' means to damage or weaken someone or something, especially gradually.",
  chinese_explanation: "(A) '利用' 意味着利用（情况）；充分利用。" +
    "<br><br>" +
    "(B) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
    "<br><br>" +
    "(D) '削弱' 意味着逐渐损害或削弱某人或某物。"
    },
    {
        id: 8,
        question: "After their team won the championship, they decided to __________ all night in celebration, drinking and dancing until dawn.",
        chinese_question: "他们的团队赢得了冠军，他们决定整夜狂欢以示庆祝，喝酒跳舞直到天亮。",
        answers: [
                { option: "A", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
                { option: "B", answer: "work", chinese_answer: "工作", chinese_romanization: "gōngzuò" },
                { option: "C", answer: "carouse", chinese_answer: "狂欢", chinese_romanization: "kuánghuān" },
                { option: "D", answer: "read", chinese_answer: "阅读", chinese_romanization: "yuèdú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'carouse' means to drink plentiful amounts of alcohol and enjoy oneself with others in a noisy, lively way." +
            "<br><br>" +
            "(A) 'sleep' means to rest by sleeping." +
            "<br><br>" +
            "(B) 'work' means to be engaged in physical or mental activity in order to achieve a purpose or result." +
            "<br><br>" +
            "(D) 'read' means to look at and comprehend the meaning of written or printed matter by interpreting the characters or symbols.",
        chinese_explanation: "(C) '狂欢'一词意味着与他人一起大量饮酒和享受喧闹、热闹的方式。" +
            "<br><br>" +
            "(A) '睡觉' 意味着通过睡眠来休息。" +
            "<br><br>" +
            "(B) '工作' 意味着为了达到某个目的或结果而从事体力或脑力活动。" +
            "<br><br>" +
            "(D) '阅读' 意味着通过解读字符或符号来理解书面或印刷材料的意义。"
    },
    {
        id: 9,
    question: "Archaeologists managed to __________ an ancient artifact that had been buried for centuries, unearthing it from beneath layers of soil and rock.",
    chinese_question: "考古学家设法发掘了一件已经埋藏了几个世纪的古代文物，从土层和岩石下挖掘出来。",
    answers: [
        { option: "A", answer: "bury", chinese_answer: "埋葬", chinese_romanization: "máizàng" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
        { option: "D", answer: "disinter", chinese_answer: "发掘", chinese_romanization: "fājué" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'disinter' means to dig up something that has been buried, especially a corpse." +
        "<br><br>" +
        "(A) 'bury' means to place in the ground and cover with earth." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'preserve' means to maintain something in its original or existing state.",
    chinese_explanation: "(D) '发掘' 意味着挖掘出已经埋藏的东西，尤其是尸体。" +
        "<br><br>" +
        "(A) '埋葬' 意味着将其放入地下并用土覆盖。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '保存' 意味着保持某物的原始或现有状态。"
    },
    {
        id: 10,
        question: "The memories of the old days seemed to __________ as time went by, like a mist that fades away under the morning sun.",
        chinese_question: "随着时间的流逝，往日的记忆似乎在 __________ ，就像晨光下消散的薄雾。",
        answers: [
                { option: "A", answer: "evanesce", chinese_answer: "消散", chinese_romanization: "xiāosàn" },
                { option: "B", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "C", answer: "linger", chinese_answer: "徘徊", chinese_romanization: "páihuái" },
                { option: "D", answer: "multiply", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evanesce' means to pass out of sight, memory, or existence; to disappear gradually." +
            "<br><br>" +
            "(B) 'strengthen' means to make or become stronger." +
            "<br><br>" +
            "(C) 'linger' means to stay in a place longer than necessary." +
            "<br><br>" +
            "(D) 'multiply' means to increase in number.",
        chinese_explanation: "(A) '消散' 意味着从视线、记忆或存在中消失；逐渐消失。" +
            "<br><br>" +
            "(B) '加强' 意味着使或变得更强。" +
            "<br><br>" +
            "(C) '徘徊' 意味着在一个地方停留比必要的时间更长。" +
            "<br><br>" +
            "(D) '增加' 意味着数量增加。"
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
