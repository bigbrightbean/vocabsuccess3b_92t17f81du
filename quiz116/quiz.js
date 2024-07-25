// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After hearing about her loss, they gathered to __________ with her and offer support.",
        chinese_question: "听说她的失去后，他们聚在一起 __________ 她并提供支持。",
        answers: [
                { option: "A", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
                { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'commiserate' means to express or feel sympathy or pity." +
            "<br><br>" +
            "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(A) '同情' 意味着表达或感受到同情或怜悯。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '批评' 意味着以不赞成的方式指出某人或某物的缺点。"
    },
    {
        id: 2,
        question: "The new policy seeks to __________ the responsibilities of each department clearly.",
        chinese_question: "新政策旨在明确 __________ 每个部门的职责。",
        answers: [
                { option: "A", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" },
                { option: "B", answer: "demarcate", chinese_answer: "划定", chinese_romanization: "huàdìng" },
                { option: "C", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
                { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demarcate' used figuratively means to set the boundaries or limits of something." +
                "<br><br>" +
                "(A) 'obscure' means to make unclear or difficult to understand." +
                "<br><br>" +
                "(C) 'blend' means to mix together." +
                "<br><br>" +
                "(D) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(B) '划定' 在比喻意义上指设置某物的边界或限制。" +
                "<br><br>" +
                "(A) '模糊' 意味着使不清楚或难以理解。" +
                "<br><br>" +
                "(C) '混合' 意味着混合在一起。" +
                "<br><br>" +
                "(D) '迷惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 3,
        question: "His family feared that the community would see him as a __________ due to his occasional forgetfulness.",
        chinese_question: "他的家人担心社区会因为他偶尔的健忘而将他视为 __________。",
        answers: [
                { option: "A", answer: "hero", chinese_answer: "英雄", chinese_romanization: "yīngxióng" },
                { option: "B", answer: "dotard", chinese_answer: "老糊涂", chinese_romanization: "lǎohútú" },
                { option: "C", answer: "savior", chinese_answer: "救世主", chinese_romanization: "jiùshìzhǔ" },
                { option: "D", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchízhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dotard' means an old person, especially one who has become weak or senile." +
                "<br><br>" +
                "(A) 'hero' means a person who is admired for their courage, outstanding achievements, or noble qualities." +
                "<br><br>" +
                "(C) 'savior' means a person who saves someone or something from danger or difficulty." +
                "<br><br>" +
                "(D) 'supporter' means a person who approves of and encourages someone or something.",
        chinese_explanation: "(B) '老糊涂' 意味着一个老年人，尤其是那些变得虚弱或痴呆的人。" +
                "<br><br>" +
                "(A) '英雄' 意味着因其勇气、卓越成就或高尚品质而受人钦佩的人。" +
                "<br><br>" +
                "(C) '救世主' 意味着从危险或困境中拯救某人或某物的人。" +
                "<br><br>" +
                "(D) '支持者' 意味着赞成并鼓励某人或某物的人。"
    },
    {
        id: 4,
question: "The employee would never __________ to unethical practices just to please the boss.",
chinese_question: "这名员工绝不会为了取悦老板而 __________ 于不道德的行为。",
answers: [
        { option: "A", answer: "genuflect", chinese_answer: "屈服", chinese_romanization: "qūfú" },
        { option: "B", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "defy", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" }
],
correctAnswer: "A",
explanation: "(A) 'genuflect' means to show excessive deference or respect, used figuratively here." +
        "<br><br>" +
        "(B) 'confront' means to face up to and deal with a problem or difficult situation." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'defy' means to openly resist or refuse to obey.",
chinese_explanation: "(A) '屈服' 意味着表现出过分的尊敬或敬意，这里是比喻用法。" +
        "<br><br>" +
        "(B) '面对' 意味着直面并处理问题或困难的情况。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '反抗' 意味着公开抵抗或拒绝服从。"
    },
    {
        id: 5,
question: "The ancient ritual required the priest to __________ a lamb as an offering to the gods.",
chinese_question: "古老的仪式要求祭司 __________ 一只羔羊作为对神的祭品。",
answers: [
        { option: "A", answer: "rescue", chinese_answer: "救", chinese_romanization: "jiù" },
        { option: "B", answer: "immolate", chinese_answer: "牺牲", chinese_romanization: "xīshēng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "heal", chinese_answer: "治愈", chinese_romanization: "zhìyù" }
],
correctAnswer: "B",
explanation: "(B) 'immolate' means to kill or offer as a sacrifice, especially by burning." +
        "<br><br>" +
        "(A) 'rescue' means to save someone from a dangerous or distressing situation." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'heal' means to cause a wound, injury, or person to become sound or healthy again.",
chinese_explanation: "(B) '牺牲' 意味着杀死或作为祭品奉献，尤其是通过火烧。" +
        "<br><br>" +
        "(A) '救' 意味着从危险或困境中拯救某人。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '治愈' 意味着使伤口、伤害或人恢复健康。"
    },
    {
        id: 6,
        question: "The constant stress at work began to __________ his spirit, leaving him feeling drained and unmotivated.",
        chinese_question: "工作中的持续压力开始 __________ 他的精神，让他感到疲惫和没有动力。",
        answers: [
            { option: "A", answer: "uplift", chinese_answer: "振奋", chinese_romanization: "zhènfèn" },
            { option: "B", answer: "invigorate", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "C", answer: "inspire", chinese_answer: "启发", chinese_romanization: "qǐfā" },
            { option: "D", answer: "macerate", chinese_answer: "消磨", chinese_romanization: "xiāomó" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'macerate' figuratively means to wear down or weaken." +
            "<br><br>" +
            "(A) 'uplift' means to raise in spirits." +
            "<br><br>" +
            "(B) 'invigorate' means to energize." +
            "<br><br>" +
            "(C) 'inspire' means to fill with motivation.",
        chinese_explanation: "(D) '消磨' 一词在比喻上意味着削弱或削减。" +
            "<br><br>" +
            "(A) '振奋' 意味着提升精神。" +
            "<br><br>" +
            "(B) '激励' 意味着使之充满能量。" +
            "<br><br>" +
            "(C) '启发' 意味着充满动力。"
    },
    {
        id: 7,
question: "She decided to __________ the old traditions and create her own path in life.",
chinese_question: "她决定 __________ 旧传统，开创自己的人生道路。",
answers: [
    { option: "A", answer: "repudiate", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
    { option: "B", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
    { option: "C", answer: "cherish", chinese_answer: "珍惜", chinese_romanization: "zhēnxī" },
    { option: "D", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" }
],
correctAnswer: "A",
explanation: "(A) 'repudiate' means to refuse to accept or be associated with." +
    "<br><br>" +
    "(B) 'uphold' means to support or maintain." +
    "<br><br>" +
    "(C) 'cherish' means to protect and care for lovingly." +
    "<br><br>" +
    "(D) 'continue' means to persist in an activity or process.",
chinese_explanation: "(A) '否认' 意味着拒绝接受或与之相关联。" +
    "<br><br>" +
    "(B) '支持' 意味着支持或维持。" +
    "<br><br>" +
    "(C) '珍惜' 意味着保护和关爱。" +
    "<br><br>" +
    "(D) '继续' 意味着坚持某一活动或过程。"
    },
    {
        id: 8,
        question: "The government was forced to __________ to public pressure and change the law.",
        chinese_question: "政府被迫 __________ 公共压力并修改法律。",
        answers: [
        { option: "A", answer: "accede", chinese_answer: "同意", chinese_romanization: "tóngyì" },
        { option: "B", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
        { option: "C", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" },
        { option: "D", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accede' means to agree to a request or demand." +
            "<br><br>" +
            "(B) 'resist' means to withstand the action or effect of." +
            "<br><br>" +
            "(C) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(D) 'defy' means to openly resist or refuse to obey.",
        chinese_explanation: "(A) '同意' 意味着同意请求或要求。" +
            "<br><br>" +
            "(B) '抵抗' 意味着承受行动或效果。" +
            "<br><br>" +
            "(C) '无视' 意味着不注意；忽视。" +
            "<br><br>" +
            "(D) '违抗' 意味着公开抵抗或拒绝服从。"
    },
    {
        id: 9,
        question: "The villain attempted to __________ the hero into submission using a heavy weapon.",
        chinese_question: "恶棍试图用重武器 __________ 英雄使其屈服。",
        answers: [
        { option: "A", answer: "bludgeon", chinese_answer: "用棍击打", chinese_romanization: "yòng gùn jīdǎ" },
        { option: "B", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bludgeon' means to hit someone repeatedly with a heavy object or to bully someone into doing something." +
            "<br><br>" +
            "(B) 'aid' means to help or support." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'encourage' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(A) '用棍击打' 意味着用重物反复打击某人或威胁某人做某事。" +
            "<br><br>" +
            "(B) '帮助' 意味着帮助或支持。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给某人支持、信心或希望。"
    },
    {
        id: 10,
        question: "The dictator used fear to __________ the population into obedience.",
        chinese_question: "独裁者用恐惧 __________ 人民服从。",
        answers: [
                { option: "A", answer: "coerce", chinese_answer: "强迫", chinese_romanization: "qiángpò" },
                { option: "B", answer: "inspire", chinese_answer: "激励", chinese_romanization: "jīlì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coerce' means to persuade an unwilling person to do something by using force or threats." +
            "<br><br>" +
            "(B) 'inspire' means to fill someone with the urge or ability to do or feel something." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'entertain' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(A) '强迫' 意味着通过使用武力或威胁说服一个不愿意的人做某事。" +
            "<br><br>" +
            "(B) '激励' 意味着激发某人做某事或感受某事的冲动或能力。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '娱乐' 意味着为某人提供娱乐或享受。"
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
