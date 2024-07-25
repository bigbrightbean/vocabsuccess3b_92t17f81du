// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "Her intentions were __________ by her colleagues, causing unnecessary tension in the team.",
chinese_question: "她的意图被同事们 __________ 了，导致了团队中不必要的紧张。",
answers: [
    { option: "A", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
    { option: "B", answer: "misconstrued", chinese_answer: "曲解", chinese_romanization: "qūjiě" },
    { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
    { option: "D", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
],
correctAnswer: "B",
explanation: "(B) 'misconstrued' means to interpret something, especially a person's words or actions, wrongly." +
    "<br><br>" +
    "(A) 'clarified' means to make something clear or easier to understand." +
    "<br><br>" +
    "(C) 'supported' means to bear all or part of the weight of something." +
    "<br><br>" +
    "(D) 'dismissed' means to treat something as unworthy of serious consideration.",
chinese_explanation: "(B) '曲解' 意味着错误地解释某事，特别是某人的话或行为。" +
    "<br><br>" +
    "(A) '澄清' 意味着使某事清楚或更容易理解。" +
    "<br><br>" +
    "(C) '支持' 意味着承担某物的全部或部分重量。" +
    "<br><br>" +
    "(D) '驳回' 意味着认为某事不值得认真考虑。"
    },
    {
        id: 2,
        question: "During the festival, people would __________ in the streets, celebrating joyfully.",
        chinese_question: "在节日期间，人们会在街上 __________ ，愉快地庆祝。",
        answers: [
        { option: "A", answer: "caper", chinese_answer: "欢跃", chinese_romanization: "huānyuè" },
        { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "fight", chinese_answer: "打斗", chinese_romanization: "dǎdòu" },
        { option: "D", answer: "mourn", chinese_answer: "哀悼", chinese_romanization: "āidào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'caper' means to skip or dance about in a lively or playful way." +
            "<br><br>" +
            "(B) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'fight' means to take part in a violent struggle involving the exchange of physical blows or the use of weapons." +
            "<br><br>" +
            "(D) 'mourn' means to feel or show deep sorrow or regret for someone or their death.",
        chinese_explanation: "(A) '欢跃' 意味着以活泼或嬉戏的方式跳跃或舞动。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使某物不被看到。" +
            "<br><br>" +
            "(C) '打斗' 意味着参与一场涉及交换拳头或使用武器的暴力斗争。" +
            "<br><br>" +
            "(D) '哀悼' 意味着对某人或他们的死亡感到或表示深深的悲伤或遗憾。"
    },
    {
        id: 3,
        question: "The politician's opponents tried to __________ his reputation with false accusations.",
        chinese_question: "政敌们试图通过虚假指控来 __________ 他的声誉。",
        answers: [
        { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànyáng" },
        { option: "B", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
        { option: "C", answer: "asperse", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'asperse' means to attack or criticize someone's reputation or character." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'honor' means to regard with great respect." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '诽谤' 意味着攻击或批评某人的声誉或品格。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '尊敬' 意味着对某人表示尊敬。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "The sandpaper was used to __________ the rough edges of the wooden table.",
        chinese_question: "砂纸被用来 __________ 木桌的粗糙边缘。",
        answers: [
            { option: "A", answer: "clean", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
            { option: "B", answer: "soften", chinese_answer: "软化", chinese_romanization: "ruǎnhuà" },
            { option: "C", answer: "enlarge", chinese_answer: "放大", chinese_romanization: "fàngdà" },
            { option: "D", answer: "abrade", chinese_answer: "磨平", chinese_romanization: "mó píng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abrade' means to scrape or wear away by friction or erosion." +
            "<br><br>" +
            "(A) 'clean' means to make something free of dirt, marks, or mess." +
            "<br><br>" +
            "(B) 'soften' means to make or become less hard." +
            "<br><br>" +
            "(C) 'enlarge' means to make or become larger.",
        chinese_explanation: "(D) '磨平' 意味着通过摩擦或侵蚀刮掉或磨掉。" +
            "<br><br>" +
            "(A) '清洁' 意味着使某物没有污垢、痕迹或杂乱。" +
            "<br><br>" +
            "(B) '软化' 意味着使变软或变得不那么硬。" +
            "<br><br>" +
            "(C) '放大' 意味着使变大或变得更大。"
    },
    {
        id: 5,
question: "The ability to __________ important information quickly is a valuable skill in any profession.",
chinese_question: "快速 __________ 重要信息的能力在任何职业中都是一项宝贵的技能。",
answers: [
    { option: "A", answer: "recall", chinese_answer: "回忆", chinese_romanization: "huíyì" },
    { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
    { option: "C", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
    { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
],
correctAnswer: "A",
explanation: "(A) 'recall' means to bring a fact, event, or situation back into one's mind; remember." +
    "<br><br>" +
    "(B) 'reject' means to refuse to accept, consider, or submit to." +
    "<br><br>" +
    "(C) 'obscure' means to keep from being seen; conceal." +
    "<br><br>" +
    "(D) 'conceal' means to keep from sight; hide.",
chinese_explanation: "(A) '回忆' 意味着将事实、事件或情况重新带入某人的记忆中；记得。" +
    "<br><br>" +
    "(B) '拒绝' 意味着拒绝接受、考虑或提交。" +
    "<br><br>" +
    "(C) '遮掩' 意味着不让被看到；隐藏。" +
    "<br><br>" +
    "(D) '隐藏' 意味着不让被看到；隐藏。"
    },
    {
        id: 6,
question: "The eerie music in the horror movie seemed to __________ a terrifying scene.",
chinese_question: "恐怖电影中诡异的音乐似乎 __________ 一个恐怖的场景。",
answers: [
        { option: "A", answer: "forebode", chinese_answer: "预示", chinese_romanization: "yùshì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "A",
explanation: "(A) 'forebode' means to act as a warning or indication of a future event, used figuratively here." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'soothe' means to gently calm someone." +
        "<br><br>" +
        "(D) 'support' means to give assistance to.",
chinese_explanation: "(A) '预示' 意味着作为未来事件的警告或指示，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '安抚' 意味着温柔地安抚某人。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 7,
        question: "The bureaucratic red tape began to __________ the entrepreneurs trying to start new businesses.",
        chinese_question: "官僚主义的繁文缛节开始让试图创业的企业家们感到 __________。",
        answers: [
                { option: "A", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
                { option: "B", answer: "madden", chinese_answer: "发狂", chinese_romanization: "fākuáng" },
                { option: "C", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
                { option: "D", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'madden' means to make someone very angry." +
            "<br><br>" +
            "(A) 'soothe' means to gently calm a person or their feelings." +
            "<br><br>" +
            "(C) 'amuse' means to cause someone to find something funny." +
            "<br><br>" +
            "(D) 'calm' means to make someone tranquil and quiet.",
        chinese_explanation: "(B) '发狂' 一词意味着使某人非常生气。" +
            "<br><br>" +
            "(A) '抚慰' 意味着轻轻地使人或他们的感情平静下来。" +
            "<br><br>" +
            "(C) '逗乐' 意味着使某人觉得某事有趣。" +
            "<br><br>" +
            "(D) '冷静' 意味着使某人平静和安静。"
    },
    {
        id: 8,
        question: "He was able to __________ the small business owner by charging exorbitant fees for unnecessary services.",
        chinese_question: "他通过为不必要的服务收取高额费用 __________ 小企业主。",
        answers: [
            { option: "A", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "aid", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "mulct", chinese_answer: "诈骗", chinese_romanization: "zhàpiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mulct' means to defraud or swindle." +
            "<br><br>" +
            "(A) 'assist' means to help." +
            "<br><br>" +
            "(B) 'aid' means to provide support." +
            "<br><br>" +
            "(C) 'protect' means to keep safe from harm.",
        chinese_explanation: "(D) '诈骗' 意味着欺诈或诈骗。" +
            "<br><br>" +
            "(A) '帮助' 意味着提供帮助。" +
            "<br><br>" +
            "(B) '协助' 意味着提供支持。" +
            "<br><br>" +
            "(C) '保护' 意味着使免受伤害。"
    },
    {
        id: 9,
question: "When tensions rose, he did not hesitate to __________ his brother, bringing up past mistakes to win the argument.",
chinese_question: "当紧张局势升级时，他毫不犹豫地 __________ 他的兄弟，提起过去的错误以赢得争论。",
answers: [
    { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
    { option: "B", answer: "vilify", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
    { option: "C", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
    { option: "D", answer: "console", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
],
correctAnswer: "B",
explanation: "(B) 'vilify' means to speak or write about in an abusively disparaging manner." +
    "<br><br>" +
    "(A) 'protect' means to keep safe from harm or injury." +
    "<br><br>" +
    "(C) 'assist' means to help someone." +
    "<br><br>" +
    "(D) 'console' means to comfort someone at a time of grief or disappointment.",
chinese_explanation: "(B) '诋毁' 意味着以辱骂性的贬低方式谈论或写作。" +
    "<br><br>" +
    "(A) '保护' 意味着使某人免受伤害。" +
    "<br><br>" +
    "(C) '帮助' 意味着帮助某人。" +
    "<br><br>" +
    "(D) '安慰' 意味着在悲伤或失望时安慰某人。"
    },
    {
        id: 10,
question: "The artist felt __________ by the strict guidelines imposed by the gallery, which limited his creative freedom.",
chinese_question: "艺术家感到被画廊施加的严格指南 __________，限制了他的创作自由。",
answers: [
    { option: "A", answer: "circumscribed", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
    { option: "B", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
    { option: "C", answer: "unrestricted", chinese_answer: "不受限制", chinese_romanization: "bù shòu xiànzhì" },
    { option: "D", answer: "empowered", chinese_answer: "授权", chinese_romanization: "shòuquán" }
],
correctAnswer: "A",
explanation: "(A) 'circumscribed' means restricted or limited." +
    "<br><br>" +
    "(B) 'liberated' means set free from a situation." +
    "<br><br>" +
    "(C) 'unrestricted' means not limited or restricted." +
    "<br><br>" +
    "(D) 'empowered' means given the authority or power to do something.",
chinese_explanation: "(A) '限制' 意味着受到限制或约束。" +
    "<br><br>" +
    "(B) '解放' 意味着从一种情况下解放出来。" +
    "<br><br>" +
    "(C) '不受限制' 意味着没有限制或约束。" +
    "<br><br>" +
    "(D) '授权' 意味着被赋予做某事的权力或权威。"
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
