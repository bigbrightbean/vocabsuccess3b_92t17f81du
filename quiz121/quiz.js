// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician's opponents attempted to __________ him during the campaign.",
        chinese_question: "政敌们试图在竞选期间 __________ 他。",
        answers: [
        { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "calumniate", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'calumniate' means to make false and defamatory statements about someone." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'assist' means to help someone.",
        chinese_explanation: "(C) '诽谤' 意味着对某人做出虚假和诽谤性的陈述。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
        question: "Introducing flexible work hours can __________ the work-life balance for employees.",
        chinese_question: "引入灵活的工作时间可以 __________ 员工的工作与生活平衡。",
        answers: [
        { option: "A", answer: "ameliorate", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
        { option: "B", answer: "harm", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
        { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "ignore", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ameliorate' means to make something better or improve." +
            "<br><br>" +
            "(B) 'harm' means to cause physical injury or damage to someone or something." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '改善' 意味着使某事变得更好或改进。" +
            "<br><br>" +
            "(B) '损害' 意味着对某人或某物造成物理伤害或损坏。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '无视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
        question: "The revolutionary government sought to __________ the assets of the old regime's leaders.",
        chinese_question: "革命政府试图 __________ 旧政权领导人的资产。",
        answers: [
            { option: "A", answer: "distribute", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "admire", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "D", answer: "expropriate", chinese_answer: "征用", chinese_romanization: "zhēngyòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'expropriate' means to take away property or resources from its owner for public use, used figuratively here." +
            "<br><br>" +
            "(A) 'distribute' means to give shares of something." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'admire' means to regard with respect or warm approval.",
        chinese_explanation: "(D) '征用' 意味着为了公共用途而从其所有者手中夺走财产或资源，这里是比喻用法。" +
            "<br><br>" +
            "(A) '分配' 意味着分发某物的份额。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '钦佩' 意味着以尊重或热烈的赞同来看待。"
    },
    {
        id: 4,
question: "The comedian struggled to continue his performance as the audience began to __________ him.",
chinese_question: "当观众开始 __________ 他时，喜剧演员很难继续表演。",
answers: [
        { option: "A", answer: "heckle", chinese_answer: "起哄", chinese_romanization: "qǐhòng" },
        { option: "B", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "A",
explanation: "(A) 'heckle' means to interrupt a public speaker with derisive or aggressive comments or abuse." +
        "<br><br>" +
        "(B) 'cheer' means to shout for joy or in praise or encouragement." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to give assistance to.",
chinese_explanation: "(A) '起哄' 意味着用嘲弄或攻击性的评论或谩骂打断公众演讲者。" +
        "<br><br>" +
        "(B) '欢呼' 意味着为愉快或赞扬或鼓励而大声喊叫。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 5,
        question: "The invasive species began to __________ the native plant population, upsetting the ecosystem balance.",
        chinese_question: "入侵物种开始 __________ 本地植物群，破坏了生态系统的平衡。",
        answers: [
                { option: "A", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
                { option: "B", answer: "decimate", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decimate' means to destroy a large percentage of something." +
                "<br><br>" +
                "(A) 'nurture' means to care for and encourage the growth or development of." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help or support.",
        chinese_explanation: "(B) '摧毁' 意味着摧毁大部分的某物。" +
                "<br><br>" +
                "(A) '培育' 意味着照料和促进生长或发展。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助或支持。"
    },
    {
        id: 6,
        question: "She was shocked to find out that her supposed friend had been __________ her behind her back.",
        chinese_question: "她震惊地发现，她所谓的朋友一直在背后 __________她。",
        answers: [
        { option: "A", answer: "praising", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "supporting", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "calumniating", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "D", answer: "respecting", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'calumniating' means to make false and defamatory statements about someone." +
            "<br><br>" +
            "(A) 'praising' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'supporting' means to bear all or part of the weight; hold up." +
            "<br><br>" +
            "(D) 'respecting' means to admire someone deeply, as a result of their abilities, qualities, or achievements.",
        chinese_explanation: "(C) '诽谤' 意味着对某人做出虚假和诽谤性的陈述。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '尊敬' 意味着深深地钦佩某人，因为他们的能力、品质或成就。"
    },
    {
        id: 7,
        question: "The researchers decided to __________ their findings into a set of foundational principles.",
        chinese_question: "研究人员决定将他们的发现 __________ 为一组基础原则。",
        answers: [
        { option: "A", answer: "axiomatize", chinese_answer: "公理化", chinese_romanization: "gōnglǐ huà" },
        { option: "B", answer: "confuse", chinese_answer: "使混乱", chinese_romanization: "shǐ hǔnluàn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'axiomatize' means to establish a system of principles or rules as axioms." +
            "<br><br>" +
            "(B) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '公理化' 意味着将一系列原则或规则确立为公理。" +
            "<br><br>" +
            "(B) '使混乱' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 8,
        question: "The hot sun managed to __________ the grapes, turning them into raisins.",
        chinese_question: "炎热的太阳把葡萄 __________，使它们变成葡萄干。",
        answers: [
                { option: "A", answer: "hydrate", chinese_answer: "水合", chinese_romanization: "shuǐhé" },
                { option: "B", answer: "desiccate", chinese_answer: "干燥", chinese_romanization: "gānzào" },
                { option: "C", answer: "soak", chinese_answer: "浸泡", chinese_romanization: "jìnpào" },
                { option: "D", answer: "freeze", chinese_answer: "冷冻", chinese_romanization: "lěngdòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'desiccate' means to remove the moisture from something, typically in order to preserve it." +
                "<br><br>" +
                "(A) 'hydrate' means to cause to absorb water." +
                "<br><br>" +
                "(C) 'soak' means to immerse in liquid." +
                "<br><br>" +
                "(D) 'freeze' means to become hardened into ice.",
        chinese_explanation: "(B) '干燥' 意味着除去某物的水分，通常是为了保存它。" +
                "<br><br>" +
                "(A) '水合' 意味着使吸收水分。" +
                "<br><br>" +
                "(C) '浸泡' 意味着浸入液体中。" +
                "<br><br>" +
                "(D) '冷冻' 意味着变硬成冰。"
    },
    {
        id: 9,
        question: "Despite their efforts, the volunteers felt demoralized when their work was __________ by some local officials.",
        chinese_question: "尽管他们努力了，志愿者们感到士气低落，因为他们的工作被一些当地官员 __________ 了。",
        answers: [
                { option: "A", answer: "denigrated", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
                { option: "B", answer: "applauded", chinese_answer: "赞赏", chinese_romanization: "zànshǎng" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "praised", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'denigrated' means to criticize unfairly or disparage, used figuratively here." +
                "<br><br>" +
                "(B) 'applauded' means to show approval or praise by clapping." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'praised' means to express warm approval or admiration.",
        chinese_explanation: "(A) '诋毁' 意味着不公平地批评或贬低，这里是比喻用法。" +
                "<br><br>" +
                "(B) '赞赏' 意味着通过鼓掌表示赞同或赞扬。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '表扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 10,
        question: "Her eyes seemed to __________ with excitement as she talked about her new project.",
        chinese_question: "当她谈论她的新项目时，她的眼睛似乎因为兴奋而 __________ 。",
        answers: [
                { option: "A", answer: "dilate", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
                { option: "B", answer: "darken", chinese_answer: "变暗", chinese_romanization: "biànàn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dilate' means to expand upon or elaborate, used figuratively here." +
                "<br><br>" +
                "(B) 'darken' means to make or become dark or darker." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '扩展' 意味着展开或详细说明，这里是比喻用法。" +
                "<br><br>" +
                "(B) '变暗' 意味着使某物变暗或更暗。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
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
