// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The fans __________ in joy as their team scored the winning goal in the final seconds of the game.",
        chinese_question: "当他们的球队在比赛的最后几秒钟进球获胜时，球迷们 __________ 在喜悦中。",
        answers: [
        { option: "A", answer: "sulked", chinese_answer: "生闷气", chinese_romanization: "shēng mèn qì" },
        { option: "B", answer: "cavorted", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cavorted' means to jump or dance around excitedly." +
            "<br><br>" +
            "(A) 'sulked' means to be silent, morose, and bad-tempered out of annoyance or disappointment." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(B) '欢跃' 意味着兴奋地跳跃或舞蹈。" +
            "<br><br>" +
            "(A) '生闷气' 意味着因为恼怒或失望而沉默、阴郁和坏脾气。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
    },
    {
        id: 2,
        question: "The accountant was caught trying to __________ funds from the company’s accounts.",
        chinese_question: "会计被抓到试图从公司的账户中 __________ 资金。",
        answers: [
                { option: "A", answer: "manage", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" },
                { option: "B", answer: "defalcate", chinese_answer: "挪用", chinese_romanization: "nuóyòng" },
                { option: "C", answer: "invest", chinese_answer: "投资", chinese_romanization: "tóuzī" },
                { option: "D", answer: "audit", chinese_answer: "审计", chinese_romanization: "shěnjì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'defalcate' means to embezzle or misappropriate funds." +
                "<br><br>" +
                "(A) 'manage' means to be in charge of or administer." +
                "<br><br>" +
                "(C) 'invest' means to allocate money in the expectation of some benefit in the future." +
                "<br><br>" +
                "(D) 'audit' means to conduct an official financial examination.",
        chinese_explanation: "(B) '挪用' 意味着贪污或挪用资金。" +
                "<br><br>" +
                "(A) '管理' 意味着负责或管理。" +
                "<br><br>" +
                "(C) '投资' 意味着在未来预期某些收益的情况下分配资金。" +
                "<br><br>" +
                "(D) '审计' 意味着进行官方财务审查。"
    },
    {
        id: 3,
        question: "The conversation began to __________ as they started discussing unrelated topics.",
        chinese_question: "他们开始讨论无关的话题，谈话逐渐 __________ 。",
        answers: [
                { option: "A", answer: "divagate", chinese_answer: "偏离", chinese_romanization: "piānlí" },
                { option: "B", answer: "align", chinese_answer: "对齐", chinese_romanization: "duìqí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'divagate' means to stray or wander from a course or subject, used figuratively here." +
                "<br><br>" +
                "(B) 'align' means to place or arrange things in a straight line." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '偏离' 意味着偏离或游离于一个过程或主题，这里是比喻用法。" +
                "<br><br>" +
                "(B) '对齐' 意味着将事物排列在一条直线上。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 4,
      question: "Their schedules __________ perfectly, allowing them to spend more time together.",
      chinese_question: "他们的日程安排 __________，使他们能够有更多的时间在一起。",
      answers: [
        { option: "A", answer: "disagree", chinese_answer: "不同意", chinese_romanization: "bù tóngyì" },
        { option: "B", answer: "coincide", chinese_answer: "一致", chinese_romanization: "yīzhì" },
        { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
        { option: "D", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" }
      ],
      correctAnswer: "B",
      explanation: "(B) 'coincide' means to occur at the same time or to be in agreement or harmony." +
        "<br><br>" +
        "(A) 'disagree' means to have or express a different opinion." +
        "<br><br>" +
        "(C) 'conflict' means to be incompatible or at variance; clash." +
        "<br><br>" +
        "(D) 'separate' means to cause to move or be apart.",
      chinese_explanation: "(B) '一致'一词意味着在同一时间发生或意见或观点一致。" +
        "<br><br>" +
        "(A) '不同意' 意味着有或表达不同的意见。" +
        "<br><br>" +
        "(C) '冲突' 意味着不相容或有差异；冲突。" +
        "<br><br>" +
        "(D) '分离' 意味着使分开或分离。"
    },
    {
        id: 5,
        question: "The scandal __________ his career in darkness, leaving him with little hope of recovery.",
        chinese_question: "丑闻让他的职业生涯 __________ 在黑暗中，使他几乎没有恢复的希望。",
        answers: [
            { option: "A", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "B", answer: "illuminated", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
            { option: "C", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "D", answer: "enshrouded", chinese_answer: "笼罩", chinese_romanization: "lǒngzhào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enshrouded' used figuratively means to cover or envelop completely and hide from view, often with a negative connotation." +
            "<br><br>" +
            "(A) 'revealed' means to make known to others." +
            "<br><br>" +
            "(B) 'illuminated' means to light up." +
            "<br><br>" +
            "(C) 'clarified' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(D) '笼罩' 在比喻意义上指完全覆盖或包围，使其隐藏不见，通常带有负面含义。" +
            "<br><br>" +
            "(A) '揭示' 意味着让别人知道。" +
            "<br><br>" +
            "(B) '照亮' 意味着点亮。" +
            "<br><br>" +
            "(C) '澄清' 意味着使声明或情况不那么混乱，更容易理解。"
    },
    {
        id: 6,
        question: "Adding too many features can __________ the software, making it harder to use.",
        chinese_question: "添加太多功能会 __________ 软件，使其更难使用。",
        answers: [
                { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
                { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "advertise", chinese_answer: "宣传", chinese_romanization: "xuānchuán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'complicate' means to make something more difficult or confusing." +
            "<br><br>" +
            "(B) 'enhance' means to improve the quality, value, or extent of something." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'advertise' means to describe or draw attention to a product, service, or event in a public medium to promote sales or attendance.",
        chinese_explanation: "(A) '复杂化' 意味着使某事更加困难或令人困惑。" +
            "<br><br>" +
            "(B) '增强' 意味着改善某物的质量、价值或程度。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '宣传' 意味着在公共媒体中描述或引起对产品、服务或活动的关注以促进销售或出席。"
    },
    {
        id: 7,
        question: "Her humour helped to __________ the otherwise tense meeting.",
        chinese_question: "她的幽默帮助 __________ 了原本紧张的会议。",
        answers: [
                { option: "A", answer: "leaven", chinese_answer: "调剂", chinese_romanization: "tiáojì" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
                { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'leaven' means to permeate and modify or transform something for the better." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'escalate' means to increase rapidly." +
            "<br><br>" +
            "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(A) '调剂' 意味着渗透和改变或改善某事物。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '升级' 意味着迅速增加。" +
            "<br><br>" +
            "(D) '批评' 意味着以不赞成的方式指出某人或某物的错误。"
    },
    {
        id: 8,
        question: "The author felt that her latest book was unfairly __________ to the back shelves of the bookstore.",
        chinese_question: "作者觉得她的最新书被不公平地 __________ 到书店的后架上。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "relegated", chinese_answer: "降级", chinese_romanization: "jiàngjí" },
            { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "promoted", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'relegated' means to assign an inferior rank or position to someone or something." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration." +
            "<br><br>" +
            "(C) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(D) 'promoted' means to raise someone to a higher rank or position.",
        chinese_explanation: "(B) '降级'一词意味着将某人或某物分配到较低的级别或职位。" +
            "<br><br>" +
            "(A) '赞美' 意味着表示热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(D) '提升' 意味着将某人提升到更高的职位或级别。"
    },
    {
        id: 9,
        question: "The miners had to __________ through the night to ensure they met the production quota.",
        chinese_question: "矿工们必须整夜辛苦 __________，以确保他们达到生产配额。",
        answers: [
            { option: "A", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
            { option: "B", answer: "moil", chinese_answer: "辛劳", chinese_romanization: "xīnláo" },
            { option: "C", answer: "chat", chinese_answer: "聊天", chinese_romanization: "liáotiān" },
            { option: "D", answer: "wander", chinese_answer: "漫步", chinese_romanization: "mànbù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'moil' means to work hard or drudge." +
            "<br><br>" +
            "(A) 'sleep' means to rest by sleeping." +
            "<br><br>" +
            "(C) 'chat' means to talk in a friendly manner." +
            "<br><br>" +
            "(D) 'wander' means to move about without a fixed course.",
        chinese_explanation: "(B) '辛劳' 一词意味着努力工作或做苦工。" +
            "<br><br>" +
            "(A) '睡觉' 意味着通过睡眠休息。" +
            "<br><br>" +
            "(C) '聊天' 意味着以友好的方式交谈。" +
            "<br><br>" +
            "(D) '漫步' 意味着没有固定路线地移动。"
    },
    {
        id: 10,
        question: "The company was fined for attempting to __________ customers by overcharging for services.",
        chinese_question: "公司因试图通过过度收费来 __________ 客户而被罚款。",
        answers: [
        { option: "A", answer: "bilk", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bilk' means to cheat or defraud someone." +
            "<br><br>" +
            "(B) 'reward' means to give something to someone in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'assist' means to help or support.",
        chinese_explanation: "(A) '欺骗' 意味着欺骗或诈骗某人。" +
            "<br><br>" +
            "(B) '奖励' 意味着因其服务、努力或成就而给予某人某物。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '帮助' 意味着帮助或支持。"
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
