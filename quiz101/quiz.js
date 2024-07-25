// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The dolphins __________ in the water, delighting the spectators with their playful antics.",
        chinese_question: "海豚在水中 __________，用它们的嬉戏动作让观众感到愉悦。",
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
        question: "The children mischievously planned to __________ their toys out of the treehouse window.",
        chinese_question: "孩子们顽皮地计划把他们的玩具 __________ 出树屋的窗户。",
        answers: [
            { option: "A", answer: "keep", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "B", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "C", answer: "clean", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
            { option: "D", answer: "defenestrate", chinese_answer: "扔出窗外", chinese_romanization: "rēng chū chuāngwài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'defenestrate' means to throw someone or something out of a window." +
            "<br><br>" +
            "(A) 'keep' means to retain possession of." +
            "<br><br>" +
            "(B) 'repair' means to fix or mend something." +
            "<br><br>" +
            "(C) 'clean' means to make something free from dirt or mess.",
        chinese_explanation: "(D) '扔出窗外' 意味着将某人或某物从窗户扔出去。" +
            "<br><br>" +
            "(A) '保留' 意味着保留拥有权。" +
            "<br><br>" +
            "(B) '修理' 意味着修补或修理某物。" +
            "<br><br>" +
            "(C) '清洁' 意味着使某物摆脱污垢或杂乱。"
    },
    {
        id: 3,
        question: "The writer aimed to __________ her manuscript of unnecessary details to improve clarity.",
        chinese_question: "作家打算将手稿中的不必要细节 __________ 以提高清晰度。",
        answers: [
                { option: "A", answer: "embellish", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
                { option: "B", answer: "disencumber", chinese_answer: "解脱", chinese_romanization: "jiětuō" },
                { option: "C", answer: "lengthen", chinese_answer: "延长", chinese_romanization: "yáncháng" },
                { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disencumber' used figuratively means to remove unnecessary elements." +
                "<br><br>" +
                "(A) 'embellish' means to make something more attractive by adding decorative details." +
                "<br><br>" +
                "(C) 'lengthen' means to make longer." +
                "<br><br>" +
                "(D) 'obscure' means to make unclear or difficult to understand.",
        chinese_explanation: "(B) '解脱' 在比喻意义上指去除不必要的元素。" +
                "<br><br>" +
                "(A) '装饰' 意味着通过添加装饰细节使某物更有吸引力。" +
                "<br><br>" +
                "(C) '延长' 意味着使变长。" +
                "<br><br>" +
                "(D) '模糊' 意味着使不清楚或难以理解。"
    },
    {
        id: 4,
question: "During the meeting, they began to __________ ideas for the new project.",
chinese_question: "在会议期间，他们开始 __________ 新项目的想法。",
answers: [
        { option: "A", answer: "gestate", chinese_answer: "酝酿", chinese_romanization: "yùnniàng" },
        { option: "B", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "hasten", chinese_answer: "加速", chinese_romanization: "jiāsù" }
],
correctAnswer: "A",
explanation: "(A) 'gestate' means to develop over a long period." +
        "<br><br>" +
        "(B) 'discard' means to get rid of something as no longer useful or desirable." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'hasten' means to be quick to do something.",
chinese_explanation: "(A) '酝酿' 意味着长时间发展。" +
        "<br><br>" +
        "(B) '丢弃' 意味着把某物视为不再有用或不需要而扔掉。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '加速' 意味着快速做某事。"
    },
    {
        id: 5,
question: "The manager tried to __________ the upset customer by offering a refund and a sincere apology.",
chinese_question: "经理试图通过提供退款和真诚的道歉来 __________ 生气的客户。",
answers: [
    { option: "A", answer: "anger", chinese_answer: "激怒", chinese_romanization: "jīnù" },
    { option: "B", answer: "mollify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
    { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "provoke", chinese_answer: "挑衅", chinese_romanization: "tiǎoxìn" }
],
correctAnswer: "B",
explanation: "(B) 'mollify' means to soothe or calm someone's anger or anxiety." +
    "<br><br>" +
    "(A) 'anger' means to make someone feel strong annoyance or displeasure." +
    "<br><br>" +
    "(C) 'ignore' means to refuse to take notice of." +
    "<br><br>" +
    "(D) 'provoke' means to stimulate or incite someone to feel anger or irritation.",
chinese_explanation: "(B) '安抚' 意味着安慰或平息某人的愤怒或焦虑。" +
    "<br><br>" +
    "(A) '激怒' 意味着使某人感到强烈的不满或愤怒。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意。" +
    "<br><br>" +
    "(D) '挑衅' 意味着刺激或煽动某人感到愤怒或恼火。"
    },
    {
        id: 6,
        question: "His silence was __________ as agreement to the proposal.",
        chinese_question: "他的沉默被 __________ 为同意该提议。",
        answers: [
                { option: "A", answer: "construed", chinese_answer: "解释", chinese_romanization: "jiěshì" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "D", answer: "forgotten", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'construed' means to interpret (a word or action) in a particular way." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'criticized' means to indicate the faults of (someone or something) in a disapproving way." +
            "<br><br>" +
            "(D) 'forgotten' means to fail to remember.",
        chinese_explanation: "(A) '解释' 意味着以特定方式解释（一个词或一个行为）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '批评' 意味着以不赞成的方式指出（某人或某事）的错误。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 7,
question: "The ancient warriors would __________ their enemies on sharp stakes as a form of execution.",
chinese_question: "古代战士会将敌人 __________ 在尖桩上作为一种处决方式。",
answers: [
        { option: "A", answer: "impale", chinese_answer: "刺穿", chinese_romanization: "cìchuān" },
        { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "A",
explanation: "(A) 'impale' means to pierce or transfix with a sharp instrument." +
        "<br><br>" +
        "(B) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'assist' means to help someone." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
chinese_explanation: "(A) '刺穿' 意味着用锋利的工具刺穿或穿透。" +
        "<br><br>" +
        "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '帮助' 意味着帮助某人。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
        question: "She managed to __________ out the information she needed from the cluttered files.",
        chinese_question: "她设法从杂乱的文件中 __________ 出她需要的信息。",
        answers: [
                { option: "A", answer: "misplace", chinese_answer: "误放", chinese_romanization: "wùfàng" },
                { option: "B", answer: "ferret", chinese_answer: "搜索", chinese_romanization: "sōusuǒ" },
                { option: "C", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
                { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ferret' means to search tenaciously for and find something." +
            "<br><br>" +
            "(A) 'misplace' means to put in the wrong place and lose temporarily." +
            "<br><br>" +
            "(C) 'discard' means to get rid of something as no longer useful or desirable." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(B) '搜索' 意味着坚韧地寻找并找到某物。" +
            "<br><br>" +
            "(A) '误放' 意味着放在错误的位置，暂时丢失。" +
            "<br><br>" +
            "(C) '丢弃' 意味着将某物丢弃，因为它不再有用或不再需要。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能注意到某物。"
    },
    {
        id: 9,
        question: "Before submitting the report, he took time to carefully __________ any factual inaccuracies.",
        chinese_question: "在提交报告之前，他花时间仔细 __________ 任何事实上的不准确之处。",
        answers: [
                { option: "A", answer: "create", chinese_answer: "创建", chinese_romanization: "chuàngjiàn" },
                { option: "B", answer: "emend", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
                { option: "C", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emend' means to make corrections or improvements to a text." +
            "<br><br>" +
            "(A) 'create' means to bring something into existence." +
            "<br><br>" +
            "(C) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(B) '修改' 意味着对文本进行更正或改进。" +
            "<br><br>" +
            "(A) '创建' 意味着将某物带入存在。" +
            "<br><br>" +
            "(C) '隐藏' 意味着不让看到；隐藏。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 10,
        question: "The company's financial report was designed to __________ investors into thinking it was profitable.",
        chinese_question: "公司的财务报告旨在 __________ 投资者，让他们认为公司是盈利的。",
        answers: [
        { option: "A", answer: "enlighten", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "B", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "bamboozle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bamboozle' means to trick or deceive someone." +
            "<br><br>" +
            "(A) 'enlighten' means to give someone greater knowledge and understanding about a subject or situation." +
            "<br><br>" +
            "(B) 'aid' means to provide support or help." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight; hold up.",
        chinese_explanation: "(C) '欺骗' 意味着欺骗或蒙骗某人。" +
            "<br><br>" +
            "(A) '启发' 意味着给某人更大的知识和理解关于一个主题或情况。" +
            "<br><br>" +
            "(B) '帮助' 意味着提供支持或帮助。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
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
