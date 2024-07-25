// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He tried to __________ his true feelings by putting on a brave face.",
        chinese_question: "他试图通过装出勇敢的样子来 __________ 自己的真实感受。",
        answers: [
                { option: "A", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
                { option: "B", answer: "dissemble", chinese_answer: "掩饰", chinese_romanization: "yǎnshì" },
                { option: "C", answer: "display", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
                { option: "D", answer: "express", chinese_answer: "表达", chinese_romanization: "biǎodá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissemble' means to conceal one's true motives, feelings, or beliefs." +
                "<br><br>" +
                "(A) 'reveal' means to make known." +
                "<br><br>" +
                "(C) 'display' means to show or exhibit." +
                "<br><br>" +
                "(D) 'express' means to convey a thought or feeling in words or by gestures and conduct.",
        chinese_explanation: "(B) '掩饰' 意味着隐藏自己的真实动机、感受或信仰。" +
                "<br><br>" +
                "(A) '揭示' 意味着公开某事。" +
                "<br><br>" +
                "(C) '展示' 意味着展示或展览。" +
                "<br><br>" +
                "(D) '表达' 意味着用言语或通过姿势和行为传达一个想法或感受。"
    },
    {
        id: 2,
        question: "The media coverage tended to __________ the truth, leading to widespread misinformation.",
        chinese_question: "媒体报道倾向于 __________ 事实，导致广泛的误导。",
        answers: [
                { option: "A", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
                { option: "B", answer: "contort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contort' means to twist or bend out of its normal shape, used figuratively to mean misrepresent or distort." +
            "<br><br>" +
            "(A) 'clarify' means to make a statement or situation less confused and more comprehensible." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight; hold up." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '扭曲' 意味着将某物扭曲或弯曲至其正常形状之外，比喻意义上指歪曲或扭曲事实。" +
            "<br><br>" +
            "(A) '澄清' 意味着使陈述或情况变得不那么混乱、更易理解。" +
            "<br><br>" +
            "(C) '支持' 意味着承担全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
question: "The company decided to __________ to the new environmental regulations to avoid penalties.",
chinese_question: "公司决定 __________ 新的环保法规以避免处罚。",
answers: [
        { option: "A", answer: "hew", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
],
correctAnswer: "A",
explanation: "(A) 'hew' means to conform or adhere to." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'oppose' means to disapprove of and attempt to prevent, especially by argument." +
        "<br><br>" +
        "(D) 'reject' means to dismiss or refuse something.",
chinese_explanation: "(A) '遵守' 意味着符合或遵守。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '反对' 意味着不赞成并试图阻止，特别是通过辩论。" +
        "<br><br>" +
        "(D) '拒绝' 意味着驳回或拒绝某事物。"
    },
    {
        id: 4,
        question: "The editor had to __________ several errors in the manuscript before it could be published.",
        chinese_question: "编辑在手稿出版前不得不 __________ 几处错误。",
        answers: [
                { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "emend", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
                { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "D", answer: "highlight", chinese_answer: "突出", chinese_romanization: "tūchū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emend' means to make corrections or improvements to a text." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(D) 'highlight' means to emphasize or make prominent.",
        chinese_explanation: "(B) '修改' 意味着对文本进行更正或改进。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '赞美' 意味着表达热烈的认可或钦佩。" +
            "<br><br>" +
            "(D) '突出' 意味着强调或使显眼。"
    },
    {
        id: 5,
        question: "The writer felt __________ by the publisher's strict guidelines, limiting his creative expression.",
        chinese_question: "作家觉得被出版商的严格指导方针 __________，限制了他的创作表达。",
        answers: [
            { option: "A", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
            { option: "B", answer: "inspired", chinese_answer: "启发", chinese_romanization: "qǐfā" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "fettered", chinese_answer: "束缚", chinese_romanization: "shùfù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fettered' used figuratively means to be held back or restrained by something." +
            "<br><br>" +
            "(A) 'liberated' means to set someone free from a situation." +
            "<br><br>" +
            "(B) 'inspired' means to fill someone with the urge or ability to do or feel something." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '束缚' 在比喻意义上指被某事牵制或限制。" +
            "<br><br>" +
            "(A) '解放' 意味着从某种情况下解脱。" +
            "<br><br>" +
            "(B) '启发' 意味着给某人以做某事的冲动或能力。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 6,
question: "The authorities decided to __________ him for violating the terms of his parole.",
chinese_question: "当局决定因为他违反假释条款而 __________ 他。",
answers: [
        { option: "A", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "incarcerate", chinese_answer: "监禁", chinese_romanization: "jiānjìn" },
        { option: "C", answer: "excuse", chinese_answer: "原谅", chinese_romanization: "yuánliàng" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
],
correctAnswer: "B",
explanation: "(B) 'incarcerate' means to imprison or confine someone." +
        "<br><br>" +
        "(A) 'promote' means to advance someone to a higher position or rank." +
        "<br><br>" +
        "(C) 'excuse' means to forgive someone for a fault or offense." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
chinese_explanation: "(B) '监禁' 意味着监禁或限制某人。" +
        "<br><br>" +
        "(A) '提升' 意味着将某人晋升到更高的位置或级别。" +
        "<br><br>" +
        "(C) '原谅' 意味着宽恕某人的过错或罪行。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 7,
  question: "He tried to __________ on the opportunity to learn from the experienced chef by volunteering at the restaurant.",
  chinese_question: "他试图通过在餐馆做志愿者来 __________ 向有经验的厨师学习的机会。",
  answers: [
    { option: "A", answer: "capitalize", chinese_answer: "利用", chinese_romanization: "lìyòng" },
    { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
    { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'capitalize' means to take advantage of (a situation); make the most of." +
    "<br><br>" +
    "(B) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(C) 'dismiss' means to order or allow to leave; send away." +
    "<br><br>" +
    "(D) 'neglect' means to fail to care for properly.",
  chinese_explanation: "(A) '利用' 意味着利用（情况）；充分利用。" +
    "<br><br>" +
    "(B) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(C) '驳回' 意味着命令或允许离开；送走。" +
    "<br><br>" +
    "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 8,
  question: "The passing of time did not __________ his memory of the joyful event.",
  chinese_question: "时间的流逝并没有 __________ 他对那场欢乐事件的记忆。",
  answers: [
    { option: "A", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
    { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
    { option: "C", answer: "erase", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
    { option: "D", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
  ],
  correctAnswer: "B",
  explanation: "(B) 'diminish' means to make or become less." +
    "<br><br>" +
    "(A) 'intensify' means to become or make more intense." +
    "<br><br>" +
    "(C) 'erase' means to remove all traces of something." +
    "<br><br>" +
    "(D) 'strengthen' means to make or become stronger.",
  chinese_explanation: "(B) '减少'一词意味着使变少或变小。" +
    "<br><br>" +
    "(A) '加剧' 意味着变得或使更强烈。" +
    "<br><br>" +
    "(C) '抹去' 意味着去除某物的所有痕迹。" +
    "<br><br>" +
    "(D) '加强' 意味着使变得更强。"
    },
    {
        id: 9,
question: "In making critical decisions, one should not __________, but act swiftly and confidently.",
chinese_question: "在做关键决策时，不应该 __________，而应该迅速且自信地行动。",
answers: [
    { option: "A", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
    { option: "B", answer: "tarry", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
    { option: "C", answer: "decide", chinese_answer: "决定", chinese_romanization: "juédìng" },
    { option: "D", answer: "initiate", chinese_answer: "发起", chinese_romanization: "fāqǐ" }
],
correctAnswer: "B",
explanation: "(B) 'tarry' figuratively means to delay or linger." +
    "<br><br>" +
    "(A) 'hesitate' means to pause before acting." +
    "<br><br>" +
    "(C) 'decide' means to make a choice." +
    "<br><br>" +
    "(D) 'initiate' means to begin.",
chinese_explanation: "(B) '拖延' 一词在比喻上意味着延迟或停留。" +
    "<br><br>" +
    "(A) '犹豫' 意味着行动前的停顿。" +
    "<br><br>" +
    "(C) '决定' 意味着做出选择。" +
    "<br><br>" +
    "(D) '发起' 意味着开始。"
    },
    {
        id: 10,
question: "The team needed more time to __________ their strategy for the competition.",
chinese_question: "团队需要更多的时间来 __________ 他们的比赛策略。",
answers: [
        { option: "A", answer: "gestate", chinese_answer: "酝酿", chinese_romanization: "yùnniàng" },
        { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "expedite", chinese_answer: "加速", chinese_romanization: "jiāsù" }
],
correctAnswer: "A",
explanation: "(A) 'gestate' means to develop over a long period." +
        "<br><br>" +
        "(B) 'abandon' means to give up completely." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'expedite' means to make an action or process happen sooner or be accomplished more quickly.",
chinese_explanation: "(A) '酝酿' 意味着长时间发展。" +
        "<br><br>" +
        "(B) '放弃' 意味着完全放弃。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '加速' 意味着让一个行动或过程更快地发生或完成。"
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
