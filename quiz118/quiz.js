// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Even after all their hard work, the manager continued to __________ about the smallest imperfections in their project.",
        chinese_question: "即使在他们付出所有努力之后，经理仍然对他们项目中的最小瑕疵 __________。",
        answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" },
        { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carp' means to complain or find fault continually about trivial matters." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(D) 'assist' means to help someone.",
        chinese_explanation: "(B) '吹毛求疵' 意味着对琐事不断地抱怨或挑剔。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
        question: "The author's latest novel is __________ with vivid descriptions of the countryside.",
        chinese_question: "这位作家的最新小说 __________ 了生动的乡村描写。",
        answers: [
            { option: "A", answer: "devoid", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "bestrewed", chinese_answer: "散布", chinese_romanization: "sànbù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bestrewed' means to scatter or spread things over a surface, used figuratively to mean filled or interspersed with." +
            "<br><br>" +
            "(A) 'devoid' means entirely lacking or free from." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'hidden' means to put or keep out of sight; conceal.",
        chinese_explanation: "(D) '散布' 意味着将东西散布在表面上，喻义为充满或夹杂着。" +
            "<br><br>" +
            "(A) '缺乏' 意味着完全没有或不含有。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '隐藏' 意味着放置或保持在视线之外；隐瞒。"
    },
    {
        id: 3,
        question: "The surveyors needed to __________ the boundaries of the new property clearly.",
        chinese_question: "测量员需要清晰地 __________ 新物业的边界。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "B", answer: "demarcate", chinese_answer: "划定", chinese_romanization: "huàdìng" },
            { option: "C", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demarcate' means to set the boundaries or limits of something." +
            "<br><br>" +
            "(A) 'obscure' means to make unclear or difficult to understand." +
            "<br><br>" +
            "(C) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(D) 'blend' means to mix together.",
        chinese_explanation: "(B) '划定' 意味着设置某物的边界或限制。" +
            "<br><br>" +
            "(A) '模糊' 意味着使不清楚或难以理解。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '混合' 意味着混合在一起。"
    },
    {
        id: 4,
        question: "The doctor aimed to __________ the tumor to prevent the spread of cancer.",
        chinese_question: "医生的目标是 __________ 肿瘤，以防止癌症扩散。",
        answers: [
                { option: "A", answer: "cultivate", chinese_answer: "培养", chinese_romanization: "péiyǎng" },
                { option: "B", answer: "extirpate", chinese_answer: "根除", chinese_romanization: "gēnchú" },
                { option: "C", answer: "tolerate", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extirpate' means to root out and destroy completely." +
            "<br><br>" +
            "(A) 'cultivate' means to try to acquire or develop." +
            "<br><br>" +
            "(C) 'tolerate' means to allow the existence, occurrence, or practice of something without interference." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '根除' 意味着彻底根除和消灭。" +
            "<br><br>" +
            "(A) '培养' 意味着试图获得或发展。" +
            "<br><br>" +
            "(C) '容忍' 意味着允许某事物的存在、发生或实践，而不进行干预。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "The charity event aimed to __________ donations from local businesses.",
        chinese_question: "这次慈善活动旨在 __________ 当地企业的捐款。",
        answers: [
                { option: "A", answer: "garner", chinese_answer: "获得", chinese_romanization: "huòdé" },
                { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'garner' means to gather or collect something, especially information or approval, used figuratively here." +
                "<br><br>" +
                "(B) 'reject' means to dismiss or refuse something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(A) '获得' 意味着收集或获取某物，尤其是信息或支持，这里是比喻用法。" +
                "<br><br>" +
                "(B) '拒绝' 意味着驳回或拒绝某事物。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '阻碍' 意味着为某人或某事制造困难，导致延误或阻碍。"
    },
    {
        id: 6,
        question: "The historian explained how invaders would __________ the countryside during times of war.",
        chinese_question: "历史学家解释了入侵者如何在战争期间 __________ 乡村。",
        answers: [
                { option: "A", answer: "depredate", chinese_answer: "掠夺", chinese_romanization: "lüèduó" },
                { option: "B", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "C", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'depredate' means to plunder or lay waste to; to engage in predatory attacks." +
                "<br><br>" +
                "(B) 'protect' means to keep safe from harm or injury." +
                "<br><br>" +
                "(C) 'improve' means to make something better." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '掠夺' 意味着掠夺或摧毁；进行掠夺性攻击。" +
                "<br><br>" +
                "(B) '保护' 意味着使免受伤害或伤害。" +
                "<br><br>" +
                "(C) '改善' 意味着使某物变得更好。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 7,
        question: "Her habit of __________ about every little thing made her difficult to be around.",
        chinese_question: "她对每件小事 __________ 的习惯让她变得难以相处。",
        answers: [
                { option: "A", answer: "enjoying", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
                { option: "B", answer: "kvetching", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "supporting", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "encouraging", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kvetching' used figuratively means to complain persistently." +
            "<br><br>" +
            "(A) 'enjoying' means to take delight or pleasure in something." +
            "<br><br>" +
            "(C) 'supporting' means to bear all or part of the weight of something." +
            "<br><br>" +
            "(D) 'encouraging' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(B) '抱怨' 在比喻意义上指不断抱怨。" +
            "<br><br>" +
            "(A) '享受' 意味着在某事中获得乐趣或喜悦。" +
            "<br><br>" +
            "(C) '支持' 意味着支撑某物的全部或部分重量。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 8,
        question: "As the plan unfolded, her heart began to __________, sensing that something was not right.",
        chinese_question: "随着计划的展开，她的心开始感到 __________，觉得有什么不对劲。",
        answers: [
            { option: "A", answer: "rejoice", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "misgive", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'misgive' means to feel doubt or apprehension." +
            "<br><br>" +
            "(A) 'rejoice' means to feel or show great joy or delight." +
            "<br><br>" +
            "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '怀疑' 一词意味着感到怀疑或担忧。" +
            "<br><br>" +
            "(A) '高兴' 意味着感到或表现出极大的快乐或喜悦。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
        question: "During the war, the government decided to __________ all able-bodied men into the military service.",
        chinese_question: "在战争期间，政府决定 __________ 所有体格健全的男子服兵役。",
        answers: [
                { option: "A", answer: "conscribe", chinese_answer: "征召", chinese_romanization: "zhēngzhào" },
                { option: "B", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conscribe' means to enlist someone compulsorily, typically into the armed forces." +
            "<br><br>" +
            "(B) 'release' means to allow or enable to escape from confinement; to set free." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'promote' means to support or actively encourage.",
        chinese_explanation: "(A) '征召' 意味着强制征募某人，通常是入伍。" +
            "<br><br>" +
            "(B) '释放' 意味着允许或使其摆脱监禁；释放。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '提升' 意味着支持或积极鼓励。"
    },
    {
        id: 10,
        question: "The oppressive heat had __________ the soldiers, making it difficult for them to continue marching.",
        chinese_question: "闷热的天气使士兵们 __________ ，使他们难以继续行军。",
        answers: [
                { option: "A", answer: "enfeebled", chinese_answer: "使虚弱", chinese_romanization: "shǐ xūruò" },
                { option: "B", answer: "invigorated", chinese_answer: "振奋", chinese_romanization: "zhènfèn" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enfeebled' means to make someone very weak." +
            "<br><br>" +
            "(B) 'invigorated' means to give strength or energy to." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'improved' means to make or become better.",
        chinese_explanation: "(A) '使虚弱' 意味着使某人非常虚弱。" +
            "<br><br>" +
            "(B) '振奋' 意味着给予力量或能量。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '改善' 意味着使或变得更好。"
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
