// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her anger began to __________ after she heard his sincere apology.",
        chinese_question: "在听到他的真诚道歉后，她的愤怒开始 __________。",
        answers: [
            { option: "A", answer: "grow", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "B", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "remain", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "D", answer: "abate", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abate' means to become less intense or widespread." +
            "<br><br>" +
            "(A) 'grow' means to increase in size, number, or importance." +
            "<br><br>" +
            "(B) 'intensify' means to become more intense." +
            "<br><br>" +
            "(C) 'remain' means to continue to exist, especially after other similar or related people or things have ceased to exist.",
        chinese_explanation: "(D) '减弱'一词意味着变得不那么强烈或广泛。" +
            "<br><br>" +
            "(A) '增长' 意味着在规模、数量或重要性上增加。" +
            "<br><br>" +
            "(B) '加剧' 意味着变得更强烈。" +
            "<br><br>" +
            "(C) '保持' 意味着继续存在，特别是在其他类似或相关的人或事物已经停止存在之后。"
    },
    {
        id: 2,
        question: "His parents always __________ his artistic aspirations, preferring he focus on academics.",
        chinese_question: "他的父母总是 __________ 他的艺术抱负，更希望他专注于学术。",
        answers: [
                { option: "A", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
                { option: "B", answer: "discountenanced", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
                { option: "C", answer: "nurtured", chinese_answer: "培育", chinese_romanization: "péiyù" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'discountenanced' used figuratively means to disapprove of or discourage something." +
                "<br><br>" +
                "(A) 'encouraged' means to give support, confidence, or hope to someone." +
                "<br><br>" +
                "(C) 'nurtured' means to care for and encourage the growth or development of." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '反对' 在比喻意义上指不赞成或阻止某事。" +
                "<br><br>" +
                "(A) '鼓励' 意味着给予某人支持、信心或希望。" +
                "<br><br>" +
                "(C) '培育' 意味着照料和促进生长或发展。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 3,
        question: "She found herself __________ in office politics, unable to stay neutral any longer.",
        chinese_question: "她发现自己被办公室政治 __________，无法再保持中立。",
        answers: [
                { option: "A", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
                { option: "B", answer: "enmeshed", chinese_answer: "卷入", chinese_romanization: "juǎnrù" },
                { option: "C", answer: "uninvolved", chinese_answer: "未参与", chinese_romanization: "wèi cānyù" },
                { option: "D", answer: "freed", chinese_answer: "释放", chinese_romanization: "shìfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enmeshed' means to be entangled or involved in something difficult to escape." +
            "<br><br>" +
            "(A) 'liberated' means to set free." +
            "<br><br>" +
            "(C) 'uninvolved' means not taking part in something." +
            "<br><br>" +
            "(D) 'freed' means to release from captivity or confinement.",
        chinese_explanation: "(B) '卷入' 意味着被缠住或牵涉在某件难以逃脱的事情中。" +
            "<br><br>" +
            "(A) '解放' 意味着放开。" +
            "<br><br>" +
            "(C) '未参与' 意味着不参与某事。" +
            "<br><br>" +
            "(D) '释放' 意味着从囚禁或限制中解放出来。"
    },
    {
        id: 4,
question: "The young entrepreneur was determined not to let anyone __________ him in his business dealings.",
chinese_question: "这位年轻的企业家决心不让任何人在他的业务交易中 __________ 他。",
answers: [
        { option: "A", answer: "fleece", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "guide", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
],
correctAnswer: "A",
explanation: "(A) 'fleece' means to deceive or swindle someone out of money." +
        "<br><br>" +
        "(B) 'guide' means to show or indicate the way to someone." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
chinese_explanation: "(A) '欺骗' 意味着骗取或诈骗某人钱财。" +
        "<br><br>" +
        "(B) '指导' 意味着为某人指示或引导方向。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 5,
        question: "The nervous speaker was __________ by a few disruptive attendees.",
        chinese_question: "这位紧张的演讲者被一些捣乱的听众 __________ 。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "heckled", chinese_answer: "起哄", chinese_romanization: "qǐhòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'heckled' means to be interrupted by derisive or aggressive comments or abuse." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'assisted' means to help someone.",
        chinese_explanation: "(D) '起哄' 意味着用嘲弄或攻击性的评论或谩骂打断公众演讲者。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助某人。"
    },
    {
        id: 6,
        question: "The biologist's __________ of the water sample revealed high levels of contamination.",
        chinese_question: "生物学家对水样的 __________ 显示出高水平的污染。",
        answers: [
        { option: "A", answer: "assay", chinese_answer: "化验", chinese_romanization: "huàyàn" },
        { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assay' means to analyze a substance to determine its composition or quality." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(A) '化验' 意味着分析物质以确定其成分或质量。" +
            "<br><br>" +
            "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着不注意；忽视。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 7,
        question: "The ancient ruins were __________ by treasure hunters looking for valuable artifacts.",
        chinese_question: "古代遗址被寻找珍贵文物的寻宝者 __________ 。",
        answers: [
                { option: "A", answer: "depredated", chinese_answer: "掠夺", chinese_romanization: "lüèduó" },
                { option: "B", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "cleaned", chinese_answer: "清理", chinese_romanization: "qīnglǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'depredated' means to plunder or lay waste to; to engage in predatory attacks." +
                "<br><br>" +
                "(B) 'protected' means to keep safe from harm or injury." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'cleaned' means to make something free of dirt, marks, or mess.",
        chinese_explanation: "(A) '掠夺' 意味着掠夺或摧毁；进行掠夺性攻击。" +
                "<br><br>" +
                "(B) '保护' 意味着使免受伤害或伤害。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '清理' 意味着使某物没有污垢、痕迹或杂乱。"
    },
    {
        id: 8,
        question: "The slogan was __________ on banners all around the city for the upcoming event.",
        chinese_question: "标语在整个城市的横幅上被 __________ ，为即将到来的活动做宣传。",
        answers: [
                { option: "A", answer: "emblazoned", chinese_answer: "醒目地展示", chinese_romanization: "xǐngmù dì zhǎnshì" },
                { option: "B", answer: "removed", chinese_answer: "移除", chinese_romanization: "yíchú" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emblazoned' means to display a design prominently or vividly." +
            "<br><br>" +
            "(B) 'removed' means to take something away or off." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'simplified' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '醒目地展示' 意味着突出或生动地展示设计。" +
            "<br><br>" +
            "(B) '移除' 意味着将某物移走或拿开。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 9,
        question: "To innovate, sometimes you need to __________ conventional thinking and explore new ideas.",
        chinese_question: "为了创新，有时你需要 __________ 常规思维，探索新想法。",
        answers: [
                { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                { option: "B", answer: "defenestrate", chinese_answer: "抛弃", chinese_romanization: "pāoqì" },
                { option: "C", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'defenestrate' used figuratively means to remove or discard something forcefully." +
                "<br><br>" +
                "(A) 'embrace' means to accept or support willingly and enthusiastically." +
                "<br><br>" +
                "(C) 'maintain' means to keep something at the same level or rate." +
                "<br><br>" +
                "(D) 'support' means to bear all or part of the weight of something; hold up.",
        chinese_explanation: "(B) '抛弃' 在比喻意义上指强制性地移除或丢弃某物。" +
                "<br><br>" +
                "(A) '接受' 意味着愿意并热情地接受或支持。" +
                "<br><br>" +
                "(C) '维持' 意味着保持在同一水平或速度。" +
                "<br><br>" +
                "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 10,

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
