// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "As the years passed, the vibrant colors of the painting began to __________, fading slowly and losing their original brilliance.",
        chinese_question: "随着岁月的流逝，画作的鲜艳颜色开始 __________ ，逐渐褪色并失去其原有的光彩。",
        answers: [
                { option: "A", answer: "evanesce", chinese_answer: "消退", chinese_romanization: "xiāotuì" },
                { option: "B", answer: "darken", chinese_answer: "变暗", chinese_romanization: "biàn àn" },
                { option: "C", answer: "intensify", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "D", answer: "brighten", chinese_answer: "变亮", chinese_romanization: "biàn liàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evanesce' means to pass out of sight, memory, or existence; to disappear gradually." +
            "<br><br>" +
            "(B) 'darken' means to make or become dark." +
            "<br><br>" +
            "(C) 'intensify' means to become or make more intense." +
            "<br><br>" +
            "(D) 'brighten' means to make or become more light or cheerful.",
        chinese_explanation: "(A) '消退' 意味着从视线、记忆或存在中消失；逐渐消失。" +
            "<br><br>" +
            "(B) '变暗' 意味着使或变得更暗。" +
            "<br><br>" +
            "(C) '加强' 意味着变得更强烈。" +
            "<br><br>" +
            "(D) '变亮' 意味着使或变得更明亮或更愉快。"
    },
    {
        id: 2,
        question: "The Pope decided to __________ the martyr, acknowledging his virtuous life and declaring him worthy of public veneration.",
        chinese_question: "教皇决定 __________ 这位殉道者，承认他的美德，并宣布他值得公众尊敬。",
        answers: [
        { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "beatify", chinese_answer: "宣福", chinese_romanization: "xuānfú" },
        { option: "D", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'beatify' means to declare a deceased person to be among the blessed and thus worthy of public veneration in a particular region or religious congregation." +
            "<br><br>" +
            "(A) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'condemn' means to express complete disapproval of.",
        chinese_explanation: "(C) '宣福' 意味着宣布某已故人士为圣徒，并因此值得在特定地区或宗教团体中受到公众尊敬。" +
            "<br><br>" +
            "(A) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '谴责' 意味着完全反对。"
    },
    {
        id: 3,
    question: "The powerful story of the survivors __________ many to donate to the relief efforts.",
    chinese_question: "幸存者的感人故事 __________ 了许多人捐款赈灾。",
    answers: [
        { option: "A", answer: "bored", chinese_answer: "使无聊", chinese_romanization: "shǐ wúliáo" },
        { option: "B", answer: "discouraged", chinese_answer: "使沮丧", chinese_romanization: "shǐ jǔsàng" },
        { option: "C", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "D", answer: "inspired", chinese_answer: "激励", chinese_romanization: "jīlì" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'inspired' means to fill someone with the urge or ability to do or feel something, especially to do something creative." +
        "<br><br>" +
        "(A) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
        "<br><br>" +
        "(B) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
        "<br><br>" +
        "(C) 'confused' means to make someone unable to think clearly or understand.",
    chinese_explanation: "(D) '激励' 意味着让某人有做某事的冲动或能力，特别是做一些创造性的事情。" +
        "<br><br>" +
        "(A) '使无聊' 意味着因为无所事事或对当前活动缺乏兴趣而感到厌倦和不耐烦。" +
        "<br><br>" +
        "(B) '使沮丧' 意味着使某人失去信心或热情。" +
        "<br><br>" +
        "(C) '使困惑' 意味着使某人无法清晰地思考或理解。"
    },
    {
        id: 4,
        question: "To protect her mental health, she had to __________ from the constant negativity in her social circle, distancing herself from toxic influences.",
        chinese_question: "为了保护自己的心理健康，她不得不 __________ 她社交圈中的不断消极情绪，远离有害的影响。",
        answers: [
                { option: "A", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
                { option: "B", answer: "dissociate", chinese_answer: "脱离", chinese_romanization: "tuōlí" },
                { option: "C", answer: "engage", chinese_answer: "参与", chinese_romanization: "cānyù" },
                { option: "D", answer: "connect", chinese_answer: "连接", chinese_romanization: "liánjiē" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissociate' used figuratively means to mentally or emotionally separate oneself from a situation." +
                "<br><br>" +
                "(A) 'embrace' means to accept or support willingly and enthusiastically." +
                "<br><br>" +
                "(C) 'engage' means to participate or become involved in." +
                "<br><br>" +
                "(D) 'connect' means to join or link together.",
        chinese_explanation: "(B) '脱离' 在比喻意义上指在心理或情感上将自己与某种情况分开。" +
                "<br><br>" +
                "(A) '拥抱' 意味着愿意并热情地接受或支持。" +
                "<br><br>" +
                "(C) '参与' 意味着参与或涉入。" +
                "<br><br>" +
                "(D) '连接' 意味着连接在一起。"
    },
    {
        id: 5,
        question: "The critics __________ the director for his latest film, calling it a complete failure and pointing out numerous flaws.",
        chinese_question: "评论家 __________ 这位导演的最新电影，称其为彻底的失败，并指出了许多缺陷。",
        answers: [
                { option: "A", answer: "excoriated", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
                { option: "B", answer: "praised", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "embraced", chinese_answer: "拥抱", chinese_romanization: "yōngbào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'excoriated' means to criticize severely." +
            "<br><br>" +
            "(B) 'praised' means to express warm approval or admiration." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'embraced' means to accept or support willingly and enthusiastically.",
        chinese_explanation: "(A) '严厉批评' 意味着严厉批评。" +
            "<br><br>" +
            "(B) '表扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '拥抱' 意味着愿意和热情地支持。"
    },
    {
        id: 6,
    question: "Instead of __________ about the difficulties, she faced them head-on with courage and determination, refusing to complain or show weakness.",
    chinese_question: "她没有对困难 __________，而是勇敢地面对它们，表现出勇气和决心，拒绝抱怨或表现出软弱。",
    answers: [
        { option: "A", answer: "praising", chinese_answer: "称赞", chinese_romanization: "chēngzàn" },
        { option: "B", answer: "whispering", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "C", answer: "mewling", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
        { option: "D", answer: "cheering", chinese_answer: "欢呼", chinese_romanization: "huānhū" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mewling' means to cry feebly or querulously like a kitten." +
        "<br><br>" +
        "(A) 'praising' means to express admiration or approval." +
        "<br><br>" +
        "(B) 'whispering' means to speak very softly." +
        "<br><br>" +
        "(D) 'cheering' means to shout for joy or in encouragement.",
    chinese_explanation: "(C) '抱怨' 一词意味着像小猫一样微弱或抱怨地哭泣。" +
        "<br><br>" +
        "(A) '称赞' 意味着表达钦佩或赞同。" +
        "<br><br>" +
        "(B) '低语' 意味着非常轻声地说话。" +
        "<br><br>" +
        "(D) '欢呼' 意味着因高兴或鼓励而喊叫。"
    },
    {
        id: 7,
    question: "The scandal was so damaging that the company wished it could __________ all evidence of it from public records, erasing any trace of the incident.",
    chinese_question: "丑闻如此有害，公司希望能够 __________ 所有公共记录中的证据，抹去任何关于此事件的痕迹。",
    answers: [
        { option: "A", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
        { option: "B", answer: "expunge", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
        { option: "C", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'expunge' figuratively means to erase or remove completely from the record." +
        "<br><br>" +
        "(A) 'reveal' means to make known." +
        "<br><br>" +
        "(C) 'highlight' means to emphasize." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge with honor or festivities.",
    chinese_explanation: "(B) '抹去' 一词在比喻上意味着从记录中完全抹去或移除。" +
        "<br><br>" +
        "(A) '揭示' 意味着使知道。" +
        "<br><br>" +
        "(C) '强调' 意味着突出。" +
        "<br><br>" +
        "(D) '庆祝' 意味着以荣誉或庆祝活动来承认。"
    },
    {
        id: 8,
      question: "The journalist needed more sources to __________ the information before publishing the article, ensuring that all details were accurate and well-supported.",
      chinese_question: "记者需要更多的消息来源来 __________ 这些信息，然后再发表文章，以确保所有细节都准确且有充分依据。",
      answers: [
        { option: "A", answer: "corroborate", chinese_answer: "证实", chinese_romanization: "zhèngshí" },
        { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "dispute", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
      ],
      correctAnswer: "A",
      explanation: "(A) 'corroborate' means to confirm or give support to (a statement, theory, or finding)." +
        "<br><br>" +
        "(B) 'hide' means to keep from being seen; conceal." +
        "<br><br>" +
        "(C) 'dispute' means to argue about (something); discuss heatedly." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
      chinese_explanation: "(A) '证实' 意味着确认或支持（陈述、理论或发现）。" +
        "<br><br>" +
        "(B) '隐藏' 意味着使看不见；隐藏。" +
        "<br><br>" +
        "(C) '争论' 意味着对（某事）进行辩论；激烈讨论。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
        question: "The company managed to __________ the economic downturn by cutting costs and diversifying its products.",
        chinese_question: "公司通过削减成本和产品多样化设法 __________ 经济衰退。",
        answers: [
            { option: "A", answer: "collapse", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
            { option: "B", answer: "thrive", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "C", answer: "survive", chinese_answer: "生存", chinese_romanization: "shēngcún" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'survive' means to continue to live or exist, especially in spite of danger or hardship." +
            "<br><br>" +
            "(A) 'collapse' means to fall down or in; give way." +
            "<br><br>" +
            "(B) 'thrive' means to grow or develop well or vigorously." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '生存' 意味着继续活着或存在，尤其是尽管有危险或困难。" +
            "<br><br>" +
            "(A) '崩溃' 意味着倒下或向内倒塌；让步。" +
            "<br><br>" +
            "(B) '繁荣' 意味着生长或发展得很好或蓬勃发展。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
    question: "The academic study __________ the impact of social media on mental health by gathering data from various sources to understand its effects.",
    chinese_question: "这项学术研究通过收集不同来源的数据 __________ 了社交媒体对心理健康的影响，以了解其影响。",
    answers: [
        { option: "A", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "surveyed", chinese_answer: "调查", chinese_romanization: "diàochá" },
        { option: "C", answer: "enhanced", chinese_answer: "提高", chinese_romanization: "tígāo" },
        { option: "D", answer: "ignored", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'surveyed' means to examine and record the opinions or experiences of individuals." +
        "<br><br>" +
        "(A) 'neglected' means to fail to care for properly." +
        "<br><br>" +
        "(C) 'enhanced' means to intensify, increase, or further improve the quality, value, or extent of something." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(B) '调查' 意味着检查和记录个人的意见或经历。" +
        "<br><br>" +
        "(A) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(C) '提高' 意味着增强、增加或进一步改善某物的质量、价值或范围。" +
        "<br><br>" +
        "(D) '忽略' 意味着拒绝注意或承认；有意无视。"
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
