// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
      question: "The issues that __________ to the project’s success were discussed in detail, ensuring all relevant factors were considered.",
      chinese_question: "与项目成功有关的问题进行了详细讨论，确保所有相关因素都得到了考虑。",
      answers: [
        { option: "A", answer: "pertain", chinese_answer: "涉及", chinese_romanization: "shèjí" },
        { option: "B", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
      ],
      correctAnswer: "A",
      explanation: "(A) 'pertain' means to be appropriate, related, or applicable." +
        "<br><br>" +
        "(B) 'contradict' means to deny the truth of (a statement) by asserting the opposite." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'simplify' means to make (something) simpler or easier to do or understand.",
      chinese_explanation: "(A) '涉及' 意味着相关或适用。" +
        "<br><br>" +
        "(B) '反驳' 意味着通过断言相反来否认（陈述）的真实性。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事物更简单或更容易做或理解。"
    },
    {
        id: 2,
        question: "He was fined for actions that __________ the company's policy on employee conduct because they breached the rules and caused significant concern.",
        chinese_question: "他因违反公司员工行为政策的行为而被罚款，因为这些行为违反了规定并引起了严重关注。",
        answers: [
                { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "B", answer: "contravene", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contravene' means to violate or conflict with a rule or law." +
            "<br><br>" +
            "(A) 'support' means to uphold or defend." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'follow' means to act according to an instruction or rule.",
        chinese_explanation: "(B) '违反' 意味着违反或与规则或法律相冲突。" +
            "<br><br>" +
            "(A) '支持' 意味着维护或捍卫。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '遵循' 意味着按照指示或规则行事。"
    },
    {
        id: 3,
        question: "He was able to __________ the committee members into agreeing with his proposal by using persuasive tactics and flattery.",
        chinese_question: "他设法通过使用说服策略和奉承来 __________ 委员会成员同意他的提案。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "offend", chinese_answer: "冒犯", chinese_romanization: "màofàn" },
            { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "cajole", chinese_answer: "劝诱", chinese_romanization: "quànyòu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cajole' means to persuade someone to do something by sustained coaxing or flattery." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'offend' means to cause someone to feel upset, annoyed, or resentful." +
            "<br><br>" +
            "(C) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(D) '劝诱' 意味着通过持续的劝说或奉承来让某人做某事。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '冒犯' 意味着使某人感到不安、恼怒或愤慨。" +
            "<br><br>" +
            "(C) '拒绝' 意味着认为不充分、不合适或有缺陷而驳回。"
    },
    {
        id: 4,
        question: "The executive's decision to __________ control over the entire department without consulting others was controversial.",
        chinese_question: "高管决定在未经他人协商的情况下 __________ 整个部门的控制权，这引起了争议。",
        answers: [
        { option: "A", answer: "arrogate", chinese_answer: "冒领", chinese_romanization: "màolǐng" },
        { option: "B", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" },
        { option: "C", answer: "delegate", chinese_answer: "委托", chinese_romanization: "wěituō" },
        { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arrogate' means to take or claim something without justification." +
            "<br><br>" +
            "(B) 'share' means to have a portion of something with others." +
            "<br><br>" +
            "(C) 'delegate' means to entrust a task or responsibility to another person." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(A) '冒领' 意味着未经正当理由而占有或声称某物。" +
            "<br><br>" +
            "(B) '分享' 意味着与他人共同拥有某物的一部分。" +
            "<br><br>" +
            "(C) '委托' 意味着将任务或责任交给他人。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 5,
        question: "In times of uncertainty, people often __________ to their most comfortable routines for a sense of stability.",
        chinese_question: "在不确定的时期，人们经常 __________ 于他们最舒适的常规，以获得稳定感。",
        answers: [
                { option: "A", answer: "innovate", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
                { option: "B", answer: "default", chinese_answer: "默认", chinese_romanization: "mòrèn" },
                { option: "C", answer: "explore", chinese_answer: "探索", chinese_romanization: "tànsuǒ" },
                { option: "D", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'default' used figuratively means to revert to a usual or expected pattern of behavior." +
                "<br><br>" +
                "(A) 'innovate' means to make changes in something established by introducing new methods, ideas, or products." +
                "<br><br>" +
                "(C) 'explore' means to travel through an unfamiliar area to learn about it." +
                "<br><br>" +
                "(D) 'dismiss' means to order or allow to leave; send away.",
        chinese_explanation: "(B) '默认' 在比喻意义上指恢复到通常或预期的行为模式。" +
                "<br><br>" +
                "(A) '创新' 意味着通过引入新方法、想法或产品对既定事物进行更改。" +
                "<br><br>" +
                "(C) '探索' 意味着通过不熟悉的区域旅行以了解它。" +
                "<br><br>" +
                "(D) '解散' 意味着命令或允许离开；遣散。"
    },
    {
        id: 6,
        question: "He __________ any form of injustice, always standing up for those who are wronged.",
        chinese_question: "他 __________ 任何形式的不公，总是为那些被冤枉的人挺身而出。",
        answers: [
                { option: "A", answer: "condones", chinese_answer: "宽恕", chinese_romanization: "kuānshù" },
                { option: "B", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "execrates", chinese_answer: "憎恶", chinese_romanization: "zēngwù" },
                { option: "D", answer: "encourages", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'execrates' used figuratively means to feel or express great loathing for." +
            "<br><br>" +
            "(A) 'condones' means to accept and allow behavior that is considered morally wrong or offensive to continue." +
            "<br><br>" +
            "(B) 'ignores' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'encourages' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(C) '憎恶' 在比喻意义上指感到或表达极大的厌恶。" +
            "<br><br>" +
            "(A) '宽恕' 意味着接受并允许被认为道德上错误或冒犯的行为继续。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 7,
    question: "He started to __________ when he realized the enormous responsibility of his new role, feeling overwhelmed by the pressure and stress.",
    chinese_question: "当他意识到新角色的巨大责任时，他开始 __________ ，感到被压力和紧张压倒。",
    answers: [
        { option: "A", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "B", answer: "hyperventilate", chinese_answer: "过度换气", chinese_romanization: "guòdù huànqì" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "ponder", chinese_answer: "深思", chinese_romanization: "shēnsī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hyperventilate' means to breathe at an abnormally rapid rate, often due to stress or anxiety." +
        "<br><br>" +
        "(A) 'relax' means to become less tense." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy event." +
        "<br><br>" +
        "(D) 'ponder' means to think about something carefully.",
    chinese_explanation: "(B) '过度换气' 意味着以异常快速的速度呼吸，通常由于压力或焦虑。" +
        "<br><br>" +
        "(A) '放松' 意味着变得不那么紧张。" +
        "<br><br>" +
        "(C) '庆祝' 意味着承认重要或愉快的事件。" +
        "<br><br>" +
        "(D) '深思' 意味着仔细考虑某事。"
    },
    {
        id: 8,
        question: "He was known to __________ those he considered beneath him, never showing them any respect.",
        chinese_question: "他以 __________ 他认为低于自己的人而闻名，从不尊重他们。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "contemn", chinese_answer: "蔑视", chinese_romanization: "mièshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contemn' means to treat or regard with contempt." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'admire' means to regard with respect or warm approval." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '蔑视' 意味着以轻蔑的态度对待或看待。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '钦佩' 意味着以尊重或热烈的赞同态度对待。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
        question: "Journalists were quick to __________ the new policy, arguing it infringed on press freedom.",
        chinese_question: "记者们迅速 __________ 这项新政策，认为它侵犯了新闻自由。",
        answers: [
                { option: "A", answer: "decry", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "endorse", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'decry' means to publicly denounce or criticize, used figuratively here." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'endorse' means to declare one's public approval or support of." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '谴责' 意味着公开谴责或批评，这里是比喻用法。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着公开表明赞同或支持。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 10,
        question: "The constant exposure to violence in media can __________ the innocence of children, corrupting their perceptions and damaging their sense of right and wrong.",
        chinese_question: "媒体中持续暴露的暴力可能会 __________ 孩子的纯真，腐蚀他们的观念并损害他们的是非观。",
        answers: [
                { option: "A", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
                { option: "B", answer: "deprave", chinese_answer: "腐化", chinese_romanization: "fǔhuà" },
                { option: "C", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
                { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deprave' used figuratively means to corrupt or damage someone's innocence." +
                "<br><br>" +
                "(A) 'preserve' means to maintain something in its original or existing state." +
                "<br><br>" +
                "(C) 'nurture' means to care for and encourage the growth or development of." +
                "<br><br>" +
                "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(B) '腐化' 在比喻意义上指腐蚀或损害某人的纯真。" +
                "<br><br>" +
                "(A) '保存' 意味着维持某物的原始或现有状态。" +
                "<br><br>" +
                "(C) '培育' 意味着照料和促进生长或发展。" +
                "<br><br>" +
                "(D) '保护' 意味着保护免受伤害或损害。"
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
