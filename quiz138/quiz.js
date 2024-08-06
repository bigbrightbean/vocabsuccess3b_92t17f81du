// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "As a leader, he learned to __________ on his team's strengths, by trusting their expertise and assigning tasks based on their skills, and delegating tasks accordingly.",
        chinese_question: "作为领导者，他学会了通过信任他们的专业知识并根据他们的技能分配任务来 __________ 团队的优势，并相应地分配任务。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "rely", chinese_answer: "依赖", chinese_romanization: "yīlài" },
            { option: "D", answer: "disrupt", chinese_answer: "扰乱", chinese_romanization: "rǎoluàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rely' means to depend on with full trust or confidence." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'doubt' means to feel uncertain about something." +
            "<br><br>" +
            "(D) 'disrupt' means to interrupt or disturb an event, activity, or process by causing a problem.",
        chinese_explanation: "(C) '依赖' 意味着完全信任或依赖。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
            "<br><br>" +
            "(B) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '扰乱' 意味着通过引起问题来中断或打扰一个事件、活动或过程。"
    },
    {
        id: 2,
        question: "The committee will __________ all members, by sending out official invitations and scheduling a venue, to discuss the new policy changes.",
        chinese_question: "委员会将通过发送正式邀请并安排场地来 __________ 所有成员，以讨论新政策的变化。",
        answers: [
                { option: "A", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
                { option: "B", answer: "convoke", chinese_answer: "召集", chinese_romanization: "zhàojí" },
                { option: "C", answer: "postpone", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
                { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convoke' means to call together or summon a meeting or assembly." +
            "<br><br>" +
            "(A) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(C) 'postpone' means to cause or arrange for something to take place at a time later than that first scheduled." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice or consider.",
        chinese_explanation: "(B) '召集' 意味着召集或召唤会议或集会。" +
            "<br><br>" +
            "(A) '解散' 意味着命令或允许离开；遣散。" +
            "<br><br>" +
            "(C) '推迟' 意味着安排或安排某事在原定时间之后进行。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能注意到或考虑。"
    },
    {
        id: 3,
        question: "The company had to __________ with declining sales, by analyzing market trends and adjusting their business model, to find new strategies.",
        chinese_question: "公司不得不通过分析市场趋势和调整商业模式来 __________ 销售下降，以寻找新的策略。",
        answers: [
                { option: "A", answer: "grapple", chinese_answer: "努力应对", chinese_romanization: "nǔlì yìngduì" },
                { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grapple' means to struggle or work hard to deal with or overcome something, used figuratively here." +
                "<br><br>" +
                "(B) 'abandon' means to give up completely." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '努力应对' 意味着努力处理或克服某事，这里是比喻用法。" +
                "<br><br>" +
                "(B) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 4,
    question: "In the spring, the cherry blossoms __________ beautifully, creating a stunning display of pink flowers.",
    chinese_question: "在春天，樱花 __________ ，形成了美丽的粉色花朵展示。",
    answers: [
        { option: "A", answer: "wither", chinese_answer: "枯萎", chinese_romanization: "kūwěi" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "D", answer: "effloresce", chinese_answer: "盛开", chinese_romanization: "shèngkāi" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'effloresce' means to blossom or bloom." +
        "<br><br>" +
        "(A) 'wither' means to become dry and shriveled." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'conceal' means to keep something secret or hidden.",
    chinese_explanation: "(D) '盛开' 意味着开花或绽放。" +
        "<br><br>" +
        "(A) '枯萎' 意味着变干和枯萎。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '隐藏' 意味着保密或隐藏某物。"
    },
    {
        id: 5,
        question: "In an attempt to intimidate his opponent, he began to __________ his prowess in martial arts by performing complex moves and showing off his strength.",
        chinese_question: "为了威胁对手，他开始通过展示复杂的动作和炫耀自己的力量来 __________ 自己的武术才能。",
        answers: [
        { option: "A", answer: "brandish", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
        { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "downplay", chinese_answer: "淡化", chinese_romanization: "dànhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brandish' means to display something ostentatiously, especially in order to gain attention." +
            "<br><br>" +
            "(B) 'conceal' means to keep something secret." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'downplay' means to make something appear less important than it really is.",
        chinese_explanation: "(A) '炫耀' 意味着夸耀地展示某物，特别是为了吸引注意。" +
            "<br><br>" +
            "(B) '隐藏' 意味着保密某事。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '淡化' 意味着使某物显得不那么重要。"
    },
    {
        id: 6,
question: "He managed to __________ the corporate ladder quickly, becoming a top executive in just a few years.",
chinese_question: "他设法迅速 __________ 企业阶梯，仅在几年内就成为高管。",
answers: [
    { option: "A", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
    { option: "B", answer: "fall", chinese_answer: "落下", chinese_romanization: "luòxià" },
    { option: "C", answer: "ascend", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
    { option: "D", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" }
],
correctAnswer: "C",
explanation: "(C) 'ascend' means to rise to a higher level or position." +
    "<br><br>" +
    "(A) 'descend' means to move or fall downward." +
    "<br><br>" +
    "(B) 'fall' means to move downward, typically rapidly and freely without control." +
    "<br><br>" +
    "(D) 'stagnate' means to cease to flow or move.",
chinese_explanation: "(C) '上升' 意味着上升到更高的水平或职位。" +
    "<br><br>" +
    "(A) '下降' 意味着向下移动或掉落。" +
    "<br><br>" +
    "(B) '落下' 意味着快速而自由地向下移动，通常是失去控制的。" +
    "<br><br>" +
    "(D) '停滞' 意味着停止流动或移动。"
    },
    {
        id: 7,
        question: "As people age, their joints can sometimes __________, causing stiffness and pain.",
        chinese_question: "随着年龄增长，人们的关节有时会 __________ ，导致僵硬和疼痛。",
        answers: [
        { option: "A", answer: "calcify", chinese_answer: "钙化", chinese_romanization: "gàihuà" },
        { option: "B", answer: "lubricate", chinese_answer: "润滑", chinese_romanization: "rùnhuá" },
        { option: "C", answer: "heal", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
        { option: "D", answer: "swell", chinese_answer: "肿胀", chinese_romanization: "zhǒngzhàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'calcify' means to become hardened by the deposition of calcium salts." +
            "<br><br>" +
            "(B) 'lubricate' means to apply a substance to minimize friction." +
            "<br><br>" +
            "(C) 'heal' means to become healthy again." +
            "<br><br>" +
            "(D) 'swell' means to become larger or rounder in size.",
        chinese_explanation: "(A) '钙化' 意味着通过钙盐的沉积变硬。" +
            "<br><br>" +
            "(B) '润滑' 意味着应用一种物质来减少摩擦。" +
            "<br><br>" +
            "(C) '治愈' 意味着再次健康。" +
            "<br><br>" +
            "(D) '肿胀' 意味着变得更大或更圆。"
    },
    {
        id: 8,
        question: "The court decided to __________ the company from using misleading advertisements, by issuing a legal injunction and imposing fines for any violations.",
        chinese_question: "法院决定通过发布法律禁令并对任何违规行为处以罚款来 __________ 该公司使用误导性广告。",
        answers: [
            { option: "A", answer: "permit", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "enjoin", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enjoin' means to instruct or urge someone to do something, or legally prohibit someone from doing something." +
            "<br><br>" +
            "(A) 'permit' means to allow." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'encourage' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(D) '禁止' 意味着指示或敦促某人做某事，或法律上禁止某人做某事。" +
            "<br><br>" +
            "(A) '允许' 意味着允许。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予支持、信心或希望。"
    },
    {
        id: 9,
  question: "The political movement began to __________ into various factions, each with its own agenda.",
  chinese_question: "政治运动开始 __________ 成不同的派别，每个派别都有自己的议程。",
  answers: [
    { option: "A", answer: "ramify", chinese_answer: "分支", chinese_romanization: "fēnzhī" },
    { option: "B", answer: "consolidate", chinese_answer: "巩固", chinese_romanization: "gǒnggù" },
    { option: "C", answer: "restrict", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
    { option: "D", answer: "eliminate", chinese_answer: "消除", chinese_romanization: "xiāochú" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'ramify' figuratively means to spread or branch out into different parts." +
    "<br><br>" +
    "(B) 'consolidate' means to make something physically stronger or more solid." +
    "<br><br>" +
    "(C) 'restrict' means to put a limit on; keep under control." +
    "<br><br>" +
    "(D) 'eliminate' means to completely remove or get rid of something.",
  chinese_explanation: "(A) '分支' 在此语境下比喻扩展或分支到不同的部分。" +
    "<br><br>" +
    "(B) '巩固' 意味着使某物更强或更坚固。" +
    "<br><br>" +
    "(C) '限制' 意味着对某物进行限制；控制。" +
    "<br><br>" +
    "(D) '消除' 意味着完全移除或摆脱某物。"
    },
    {
        id: 10,
        question: "The manager tried to __________ the employees' dissatisfaction by addressing their grievances and offering solutions.",
        chinese_question: "经理试图通过解决员工的不满并提出解决方案来 __________ 员工的不满。",
        answers: [
            { option: "A", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "conciliate", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "D", answer: "provoke", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'conciliate' means to stop someone from being angry or discontented; to placate or pacify." +
            "<br><br>" +
            "(A) 'dismiss' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'provoke' means to stimulate or give rise to a reaction or emotion in someone.",
        chinese_explanation: "(C) '安抚' 意味着使某人不再生气或不满；安抚或平息。" +
            "<br><br>" +
            "(A) '驳回' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '激怒' 意味着刺激或引起某人的反应或情绪。"
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
