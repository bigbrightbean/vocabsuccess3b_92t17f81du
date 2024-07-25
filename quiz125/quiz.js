// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "In order to keep the peace, he chose to __________ rather than argue further.",
chinese_question: "为了保持和平，他选择 __________ 而不是进一步争论。",
answers: [
    { option: "A", answer: "dominate", chinese_answer: "支配", chinese_romanization: "zhīpèi" },
    { option: "B", answer: "acquiesce", chinese_answer: "默许", chinese_romanization: "mòxǔ" },
    { option: "C", answer: "lead", chinese_answer: "领导", chinese_romanization: "lǐngdǎo" },
    { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "B",
explanation: "(B) 'acquiesce' means to accept something reluctantly but without protest." +
    "<br><br>" +
    "(A) 'dominate' means to have a commanding influence on." +
    "<br><br>" +
    "(C) 'lead' means to guide or direct." +
    "<br><br>" +
    "(D) 'ignore' means to refuse to take notice of.",
chinese_explanation: "(B) '默许' 意味着不情愿地接受某事但不抗议。" +
    "<br><br>" +
    "(A) '支配' 意味着对某物具有指挥影响力。" +
    "<br><br>" +
    "(C) '领导' 意味着引导或指导。" +
    "<br><br>" +
    "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 2,
question: "During the holiday season, sales typically __________ as people buy gifts.",
chinese_question: "在假期期间，销售量通常会 __________，因为人们会购买礼物。",
answers: [
    { option: "A", answer: "peak", chinese_answer: "达到顶峰", chinese_romanization: "dádào dǐngfēng" },
    { option: "B", answer: "drop", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
    { option: "C", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
    { option: "D", answer: "fluctuate", chinese_answer: "波动", chinese_romanization: "bōdòng" }
],
correctAnswer: "A",
explanation: "(A) 'peak' means to reach the highest point." +
    "<br><br>" +
    "(B) 'drop' means to fall or descend." +
    "<br><br>" +
    "(C) 'stabilize' means to make or become unlikely to change, fail, or decline." +
    "<br><br>" +
    "(D) 'fluctuate' means to rise and fall irregularly in number or amount.",
chinese_explanation: "(A) '达到顶峰' 意味着达到最高点。" +
    "<br><br>" +
    "(B) '下降' 意味着下降或下降。" +
    "<br><br>" +
    "(C) '稳定' 意味着使或变得不太可能变化、失败或下降。" +
    "<br><br>" +
    "(D) '波动' 意味着数量或金额不规则地上升和下降。"
    },
    {
        id: 3,
        question: "The conversation at the party seemed to __________ from one topic to another without any logical flow.",
        chinese_question: "聚会上的对话似乎在不同话题间 __________ ，没有任何逻辑顺序。",
        answers: [
        { option: "A", answer: "brachiate", chinese_answer: "摆荡", chinese_romanization: "bǎidàng" },
        { option: "B", answer: "focus", chinese_answer: "聚焦", chinese_romanization: "jùjiāo" },
        { option: "C", answer: "streamline", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brachiate' means to move or swing from one place to another." +
            "<br><br>" +
            "(B) 'focus' means to concentrate on one thing." +
            "<br><br>" +
            "(C) 'streamline' means to make an organization or system more efficient and effective by employing faster or simpler working methods." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '摆荡' 意味着从一个地方移动或摆动到另一个地方。" +
            "<br><br>" +
            "(B) '聚焦' 意味着专注于一件事。" +
            "<br><br>" +
            "(C) '简化' 意味着通过采用更快或更简单的工作方法使组织或系统更高效。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "As they worked on the project, their ideas began to __________ into a coherent plan.",
        chinese_question: "当他们进行项目时，他们的想法开始 __________ 成为一个连贯的计划。",
        answers: [
                { option: "A", answer: "dissipate", chinese_answer: "消散", chinese_romanization: "xiāosàn" },
                { option: "B", answer: "coagulate", chinese_answer: "凝聚", chinese_romanization: "níngjù" },
                { option: "C", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
                { option: "D", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coagulate' figuratively means to come together to form a whole or a unified mass." +
            "<br><br>" +
            "(A) 'dissipate' means to disappear or cause to disappear." +
            "<br><br>" +
            "(C) 'scatter' means to throw in various random directions." +
            "<br><br>" +
            "(D) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(B) '凝聚' 在比喻意义上意味着结合在一起形成一个整体或一个统一的整体。" +
            "<br><br>" +
            "(A) '消散' 意味着消失或使消失。" +
            "<br><br>" +
            "(C) '分散' 意味着向各个随机方向抛撒。" +
            "<br><br>" +
            "(D) '混淆' 意味着使某人无法清晰思考。"
    },
    {
        id: 5,
        question: "The controversial book was accused of trying to __________ the minds of young readers.",
        chinese_question: "这本有争议的书被指试图 __________ 年轻读者的思想。",
        answers: [
                { option: "A", answer: "enlighten", chinese_answer: "启发", chinese_romanization: "qǐfā" },
                { option: "B", answer: "deprave", chinese_answer: "腐化", chinese_romanization: "fǔhuà" },
                { option: "C", answer: "educate", chinese_answer: "教育", chinese_romanization: "jiàoyù" },
                { option: "D", answer: "inspire", chinese_answer: "激励", chinese_romanization: "jīlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deprave' means to make someone morally corrupt or wicked." +
                "<br><br>" +
                "(A) 'enlighten' means to give someone greater knowledge and understanding about a subject or situation." +
                "<br><br>" +
                "(C) 'educate' means to give intellectual, moral, and social instruction to someone." +
                "<br><br>" +
                "(D) 'inspire' means to fill someone with the urge or ability to do or feel something.",
        chinese_explanation: "(B) '腐化' 意味着使某人道德堕落或邪恶。" +
                "<br><br>" +
                "(A) '启发' 意味着给某人更大的知识和理解。" +
                "<br><br>" +
                "(C) '教育' 意味着对某人进行智力、道德和社会方面的教育。" +
                "<br><br>" +
                "(D) '激励' 意味着激发某人去做或感受某事。"
    },
    {
        id: 6,
        question: "The report __________ the company for its poor handling of the environmental crisis.",
        chinese_question: "报告 __________ 该公司对环境危机的处理不当。",
        answers: [
                { option: "A", answer: "excoriated", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
                { option: "B", answer: "applauded", chinese_answer: "称赞", chinese_romanization: "chēngzàn" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'excoriated' means to criticize severely, used figuratively here." +
            "<br><br>" +
            "(B) 'applauded' means to show approval or praise." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'concealed' means to keep from being seen; hide.",
        chinese_explanation: "(A) '严厉批评' 意味着严厉批评，这里是比喻用法。" +
            "<br><br>" +
            "(B) '称赞' 意味着表示赞同或赞美。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '隐藏' 意味着防止被看到；隐藏。"
    },
    {
        id: 7,
        question: "He would often __________ at the buffet, eating far more than his stomach could comfortably hold.",
        chinese_question: "他经常在自助餐上 __________，吃得比他的胃能舒适容纳的多得多。",
        answers: [
            { option: "A", answer: "nibble", chinese_answer: "小口吃", chinese_romanization: "xiǎokǒu chī" },
            { option: "B", answer: "sip", chinese_answer: "小口喝", chinese_romanization: "xiǎokǒu hē" },
            { option: "C", answer: "fast", chinese_answer: "禁食", chinese_romanization: "jìnshí" },
            { option: "D", answer: "gormandize", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gormandize' means to eat greedily or ravenously." +
            "<br><br>" +
            "(A) 'nibble' means to take small bites of food." +
            "<br><br>" +
            "(B) 'sip' means to drink slowly in small quantities." +
            "<br><br>" +
            "(C) 'fast' means to abstain from all or some kinds of food or drink.",
        chinese_explanation: "(D) '狼吞虎咽' 意味着贪婪或狼吞虎咽地吃。" +
            "<br><br>" +
            "(A) '小口吃' 意味着小口地吃食物。" +
            "<br><br>" +
            "(B) '小口喝' 意味着慢慢地小口喝。" +
            "<br><br>" +
            "(C) '禁食' 意味着戒除所有或某些种类的食物或饮料。"
    },
    {
        id: 8,
question: "They tried to __________ the intern for the mistake, but it was actually their fault.",
chinese_question: "他们试图将错误 __________ 给实习生，但实际上是他们的错。",
answers: [
        { option: "A", answer: "inculpate", chinese_answer: "归罪", chinese_romanization: "guīzuì" },
        { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
],
correctAnswer: "A",
explanation: "(A) 'inculpate' means to accuse or blame someone, used figuratively here." +
        "<br><br>" +
        "(B) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
chinese_explanation: "(A) '归罪' 意味着指责或归咎于某人，这里是比喻用法。" +
        "<br><br>" +
        "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 9,
        question: "The winemaker carefully __________ the wine to separate it from the sediment.",
        chinese_question: "酿酒师小心翼翼地 __________ 酒，以便将其与沉淀物分离。",
        answers: [
                { option: "A", answer: "mix", chinese_answer: "混合", chinese_romanization: "hùnhé" },
                { option: "B", answer: "decant", chinese_answer: "倒出", chinese_romanization: "dàochū" },
                { option: "C", answer: "stir", chinese_answer: "搅拌", chinese_romanization: "jiǎobàn" },
                { option: "D", answer: "shake", chinese_answer: "摇动", chinese_romanization: "yáodòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decant' means to gradually pour liquid from one container into another, especially without disturbing the sediment." +
            "<br><br>" +
            "(A) 'mix' means to combine or blend." +
            "<br><br>" +
            "(C) 'stir' means to move a liquid or other substance with an implement." +
            "<br><br>" +
            "(D) 'shake' means to move something up and down or from side to side with rapid, forceful movements.",
        chinese_explanation: "(B) '倒出' 意味着将液体从一个容器逐渐倒入另一个容器，特别是不打扰沉淀物。" +
            "<br><br>" +
            "(A) '混合' 意味着结合或混合。" +
            "<br><br>" +
            "(C) '搅拌' 意味着用工具移动液体或其他物质。" +
            "<br><br>" +
            "(D) '摇动' 意味着快速、有力地上下或左右移动某物。"
    },
    {
        id: 10,
        question: "The intense scrutiny did not __________ the candidate, who maintained a calm demeanor throughout the interview.",
        chinese_question: "严格的审查并没有 __________ 候选人，他在整个面试过程中保持冷静的态度。",
        answers: [
                { option: "A", answer: "faze", chinese_answer: "使慌乱", chinese_romanization: "shǐ huāngluàn" },
                { option: "B", answer: "inspire", chinese_answer: "激励", chinese_romanization: "jīlì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "confuse", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'faze' means to disturb or disconcert someone, used figuratively here." +
            "<br><br>" +
            "(B) 'inspire' means to fill someone with the urge or ability to do or feel something." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(A) '使慌乱' 意味着使某人不安或困扰，这里是比喻用法。" +
            "<br><br>" +
            "(B) '激励' 意味着激发某人做某事的冲动或能力。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '困惑' 意味着使某人无法清晰思考。"
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
