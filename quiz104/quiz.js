// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The doctor warned that a blockage in the artery could __________ blood flow, leading to serious health issues.",
        chinese_question: "医生警告说动脉阻塞可能会 __________ 血流，导致严重的健康问题。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "occlude", chinese_answer: "阻塞", chinese_romanization: "zǔsè" },
            { option: "C", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
            { option: "D", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'occlude' means to block or obstruct." +
            "<br><br>" +
            "(A) 'increase' means to make something larger or greater." +
            "<br><br>" +
            "(C) 'enhance' means to improve the quality of." +
            "<br><br>" +
            "(D) 'promote' means to further the progress of.",
        chinese_explanation: "(B) '阻塞' 意味着阻挡或阻碍。" +
            "<br><br>" +
            "(A) '增加' 意味着使某物变得更大或更强。" +
            "<br><br>" +
            "(C) '提高' 意味着改善质量。" +
            "<br><br>" +
            "(D) '促进' 意味着推进进展。"
    },
    {
        id: 2,
  question: "The article __________ to the recent political scandal without mentioning any names.",
  chinese_question: "这篇文章 __________ 最近的政治丑闻，但没有提及任何名字。",
  answers: [
    { option: "A", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
    { option: "B", answer: "alluded", chinese_answer: "暗示", chinese_romanization: "ànshì" },
    { option: "C", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
    { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
  ],
  correctAnswer: "B",
  explanation: "(B) 'alluded' means to hint at or mention indirectly." +
    "<br><br>" +
    "(A) 'revealed' means to make known to others." +
    "<br><br>" +
    "(C) 'denied' means to state that one refuses to admit the truth or existence of." +
    "<br><br>" +
    "(D) 'ignored' means to refuse to take notice of or acknowledge.",
  chinese_explanation: "(B) '暗示'一词意味着间接提及或提到。" +
    "<br><br>" +
    "(A) '揭示' 意味着让他人知道。" +
    "<br><br>" +
    "(C) '否认' 意味着表示拒绝承认事实或存在。" +
    "<br><br>" +
    "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
        question: "When offered the promotion and new responsibilities, she decided to __________ the opportunity with a scoff, believing it wasn't the right fit for her.",
        chinese_question: "当被提供晋升和新职责时，她带着轻蔑决定 __________ 这个机会，认为这不适合她。",
        answers: [
            { option: "A", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yōng bào" },
            { option: "B", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huān yíng" },
            { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiē shòu" },
            { option: "D", answer: "spurn", chinese_answer: "拒绝", chinese_romanization: "jù jué" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'spurn' means to reject something or someone with disdain." +
            "<br><br>" +
            "(A) 'embrace' means to hold someone closely in your arms or to gladly accept something." +
            "<br><br>" +
            "(B) 'welcome' means to greet someone warmly or to accept something with pleasure." +
            "<br><br>" +
            "(C) 'accept' means to agree to take something offered.",
        chinese_explanation: "(D) '拒绝' 意味着轻蔑地拒绝某物或某人。" +
            "<br><br>" +
            "(A) '拥抱' 意味着把某人紧紧抱在怀里或高兴地接受某事。" +
            "<br><br>" +
            "(B) '欢迎' 意味着热情地迎接某人或愉快地接受某事。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接受提供的东西。"
    },
    {
        id: 4,
        question: "The court decided to __________ the marriage due to evidence of fraud and declared it null and void.",
        chinese_question: "由于欺诈证据，法院决定 __________ 这桩婚姻，宣布其无效。",
        answers: [
        { option: "A", answer: "annul", chinese_answer: "废除", chinese_romanization: "fèichú" },
        { option: "B", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
        { option: "C", answer: "sustain", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'annul' means to declare invalid (an official agreement, decision, or result)." +
            "<br><br>" +
            "(B) 'approve' means to officially agree to or accept as satisfactory." +
            "<br><br>" +
            "(C) 'sustain' means to strengthen or support physically or mentally." +
            "<br><br>" +
            "(D) 'endorse' means to declare one's public approval or support of.",
        chinese_explanation: "(A) '废除' 意味着宣布无效（正式协议、决定或结果）。" +
            "<br><br>" +
            "(B) '批准' 意味着正式同意或接受为满意的。" +
            "<br><br>" +
            "(C) '支持' 意味着在身体上或精神上给予支持或支持。" +
            "<br><br>" +
            "(D) '认可' 意味着公开宣布某人的支持。"
    },
    {
        id: 5,
        question: "His meticulous work __________ his dedication to perfection.",
        chinese_question: "他一丝不苟的工作 __________ 他对完美的追求。",
        answers: [
        { option: "A", answer: "bespeaks", chinese_answer: "显示", chinese_romanization: "xiǎnshì" },
        { option: "B", answer: "hides", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "contradicts", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "D", answer: "undermines", chinese_answer: "削弱", chinese_romanization: "xuēruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bespeaks' means to indicate or be evidence of something." +
            "<br><br>" +
            "(B) 'hides' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'contradicts' means to deny the truth of a statement by asserting the opposite." +
            "<br><br>" +
            "(D) 'undermines' means to weaken or damage something.",
        chinese_explanation: "(A) '显示' 意味着表明或作为某事的证据。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使某物不被看到。" +
            "<br><br>" +
            "(C) '反驳' 意味着通过断言相反的观点来否认某声明的真实性。" +
            "<br><br>" +
            "(D) '削弱' 意味着削弱或损害某事。"
    },
    {
        id: 6,
    question: "The coach was known to __________ his star player, often overlooking his mistakes in favor of his talents.",
    chinese_question: "教练以 __________ 他最好的球员而闻名，经常忽略他的错误而偏爱他的才能。",
    answers: [
        { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "B", answer: "coddle", chinese_answer: "溺爱", chinese_romanization: "nì'ài" },
        { option: "C", answer: "ignore", chinese_answer: "不理", chinese_romanization: "bùlǐ" },
        { option: "D", answer: "scold", chinese_answer: "责骂", chinese_romanization: "zémà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'coddle' means to treat with excessive indulgence and care." +
        "<br><br>" +
        "(A) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'scold' means to reprimand or criticize angrily.",
    chinese_explanation: "(B) '溺爱' 意味着过度宠爱和关怀。" +
        "<br><br>" +
        "(A) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
        "<br><br>" +
        "(C) '不理' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '责骂' 意味着愤怒地斥责或批评。"
    },
    {
        id: 7,
        question: "Protesters were accused of trying to __________ the national flag during the demonstration by trampling on it and burning it.",
        chinese_question: "抗议者被指控在示威期间试图通过践踏和焚烧国旗来 __________ 它。",
        answers: [
                { option: "A", answer: "desecrate", chinese_answer: "亵渎", chinese_romanization: "xièdú" },
                { option: "B", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'desecrate' means to treat a sacred place or thing with violent disrespect; to violate." +
                "<br><br>" +
                "(B) 'honor' means to regard with great respect." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'preserve' means to maintain something in its original or existing state.",
        chinese_explanation: "(A) '亵渎' 意味着用暴力的不敬对待一个神圣的地方或事物；亵渎。" +
                "<br><br>" +
                "(B) '尊敬' 意味着对某人或某物表示很高的尊重。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '保存' 意味着保持某物的原始或现有状态。"
    },
    {
        id: 8,
        question: "She decided to __________ herself from the controversial project to avoid damaging her reputation.",
        chinese_question: "她决定 __________ 自己与有争议的项目，以避免损害自己的声誉。",
        answers: [
                { option: "A", answer: "associate", chinese_answer: "关联", chinese_romanization: "guānlián" },
                { option: "B", answer: "dissociate", chinese_answer: "脱离", chinese_romanization: "tuōlí" },
                { option: "C", answer: "unite", chinese_answer: "团结", chinese_romanization: "tuánjié" },
                { option: "D", answer: "join", chinese_answer: "加入", chinese_romanization: "jiārù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissociate' means to separate oneself from a group or activity." +
                "<br><br>" +
                "(A) 'associate' means to connect someone or something with something else in one's mind." +
                "<br><br>" +
                "(C) 'unite' means to come or bring together for a common purpose or action." +
                "<br><br>" +
                "(D) 'join' means to connect or become a part of something.",
        chinese_explanation: "(B) '脱离' 意味着将自己与某个团体或活动分离。" +
                "<br><br>" +
                "(A) '关联' 意味着在脑海中将某人或某物与其他事物联系起来。" +
                "<br><br>" +
                "(C) '团结' 意味着为共同的目的或行动而联合或聚集在一起。" +
                "<br><br>" +
                "(D) '加入' 意味着连接或成为某事的一部分。"
    },
    {
        id: 9,
        question: "As the day ended, they would __________ the tent to prepare for the next journey.",
        chinese_question: "一天结束时，他们会 __________ 帐篷，为下一次旅程做准备。",
        answers: [
                { option: "A", answer: "furl", chinese_answer: "收起", chinese_romanization: "shōuqǐ" },
                { option: "B", answer: "open", chinese_answer: "打开", chinese_romanization: "dǎkāi" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'furl' means to roll or fold up neatly and securely." +
                "<br><br>" +
                "(B) 'open' means to make something accessible or available." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'repair' means to fix something that is broken or damaged.",
        chinese_explanation: "(A) '收起' 意味着整齐地卷起或折叠起来。" +
                "<br><br>" +
                "(B) '打开' 意味着使某物可进入或可使用。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '修理' 意味着修理破损或损坏的东西。"
    },
    {
        id: 10,
question: "Historians often __________ the contributions of lesser-known figures in favor of more famous ones.",
chinese_question: "历史学家经常 __________ 不太出名的人物的贡献，而更倾向于强调更有名的人物。",
answers: [
    { option: "A", answer: "document", chinese_answer: "记录", chinese_romanization: "jìlù" },
    { option: "B", answer: "misprize", chinese_answer: "低估", chinese_romanization: "dīgū" },
    { option: "C", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
    { option: "D", answer: "explore", chinese_answer: "探索", chinese_romanization: "tànsuǒ" }
],
correctAnswer: "B",
explanation: "(B) 'misprize' means to undervalue or fail to appreciate." +
    "<br><br>" +
    "(A) 'document' means to record in detail." +
    "<br><br>" +
    "(C) 'highlight' means to emphasize." +
    "<br><br>" +
    "(D) 'explore' means to investigate or examine.",
chinese_explanation: "(B) '低估' 意味着低估或未能欣赏。" +
    "<br><br>" +
    "(A) '记录' 意味着详细记录。" +
    "<br><br>" +
    "(C) '强调' 意味着强调。" +
    "<br><br>" +
    "(D) '探索' 意味着调查或检查。"
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
