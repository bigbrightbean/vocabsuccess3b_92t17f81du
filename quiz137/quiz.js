// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The discovery of new evidence __________ the police to reopen the case, and it prompted them to act quickly and reassess the investigation.",
        chinese_question: "新证据的发现促使警方 __________ 重启案件，并促使他们迅速行动并重新评估调查。",
        answers: [
            { option: "A", answer: "dissuaded", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "confused", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "galvanized", chinese_answer: "激励", chinese_romanization: "jīlì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'galvanized' used figuratively means to shock or excite someone into taking action." +
            "<br><br>" +
            "(A) 'dissuaded' means to persuade someone not to take a particular course of action." +
            "<br><br>" +
            "(B) 'delayed' means to make something happen at a later time than originally planned or expected." +
            "<br><br>" +
            "(C) 'confused' means to make someone unable to think clearly.",
        chinese_explanation: "(D) '激励' 在比喻意义上指激励或激发某人采取行动。" +
            "<br><br>" +
            "(A) '劝阻' 意味着劝说某人不要采取某种行动。" +
            "<br><br>" +
            "(B) '延迟' 意味着使某事发生的时间比原计划或预期的要晚。" +
            "<br><br>" +
            "(C) '困惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 2,
        question: "The excitement of the crowd began to __________ as the hours went by, and the initial enthusiasm faded compared to the beginning of the event.",
        chinese_question: "随着时间的流逝，观众的兴奋开始 __________，而与活动开始时的热情相比，最初的兴奋感逐渐减退。",
        answers: [
            { option: "A", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
            { option: "B", answer: "pale", chinese_answer: "减退", chinese_romanization: "jiǎntuì" },
            { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "surge", chinese_answer: "激增", chinese_romanization: "jīzēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pale' means to seem less impressive or important when compared to something else." +
            "<br><br>" +
            "(A) 'amplify' means to increase the volume of sound, especially using an amplifier." +
            "<br><br>" +
            "(C) 'escalate' means to increase rapidly." +
            "<br><br>" +
            "(D) 'surge' means a sudden powerful forward or upward movement.",
        chinese_explanation: "(B) '减退' 意味着与某事相比显得不那么令人印象深刻或重要。" +
            "<br><br>" +
            "(A) '放大' 意味着增加声音的音量，特别是使用放大器。" +
            "<br><br>" +
            "(C) '升级' 意味着快速增加。" +
            "<br><br>" +
            "(D) '激增' 意味着突然强大的前进或向上的运动。"
    },
    {
        id: 3,
        question: "The ancient builders __________ large stones, carefully shaping them into precise blocks for stability, to create the foundations of the temple.",
        chinese_question: "古代建筑者 __________ 大石块，仔细地将它们雕刻成精确的块状以确保稳定性，以建造寺庙的地基。",
        answers: [
            { option: "A", answer: "hewed", chinese_answer: "砍", chinese_romanization: "kǎn" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "polished", chinese_answer: "打磨", chinese_romanization: "dǎmó" },
            { option: "D", answer: "destroyed", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hewed' means to chop or cut with an ax, pick, or other tool." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'polished' means to make the surface of something smooth and shiny by rubbing it." +
            "<br><br>" +
            "(D) 'destroyed' means to put an end to the existence of something by damaging or attacking it.",
        chinese_explanation: "(A) '砍' 意味着用斧头、镐或其他工具砍或切。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '打磨' 意味着通过摩擦使某物表面光滑和有光泽。" +
            "<br><br>" +
            "(D) '毁坏' 意味着通过损坏或攻击使某物不存在。"
    },
    {
        id: 4,
        question: "The satirical show often __________ celebrities for their outlandish behavior, such as making fun of their extravagant lifestyles.",
        chinese_question: "这部讽刺剧经常 __________ 名人古怪的行为，比如嘲弄他们奢华的生活方式。",
        answers: [
            { option: "A", answer: "respects", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "B", answer: "avoids", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "lampoons", chinese_answer: "讽刺", chinese_romanization: "fěngcì" },
            { option: "D", answer: "justifies", chinese_answer: "辩解", chinese_romanization: "biànjiě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lampoons' means to publicly criticize (someone or something) by using ridicule, irony, or sarcasm." +
            "<br><br>" +
            "(A) 'respects' means to admire (someone or something) deeply, as a result of their abilities, qualities, or achievements." +
            "<br><br>" +
            "(B) 'avoids' means to keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(D) 'justifies' means to show or prove to be right or reasonable.",
        chinese_explanation: "(C) '讽刺' 意味着通过使用嘲讽、讽刺或讽刺来公开批评（某人或某事）。" +
            "<br><br>" +
            "(A) '尊敬' 意味着由于（某人或某事）的能力、品质或成就而深深钦佩。" +
            "<br><br>" +
            "(B) '避免' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(D) '辩解' 意味着显示或证明是正确或合理的。"
    },
    {
        id: 5,
        question: "The bully would __________ his classmates by making demeaning remarks and intimidating them, making them feel scared and insecure.",
        chinese_question: "那个恶霸经常通过贬低的言辞和威吓行为 __________ 同学们，让他们感到害怕和不安。",
        answers: [
            { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "hector", chinese_answer: "恐吓", chinese_romanization: "kǒnghè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hector' means to talk to someone in a bullying way." +
            "<br><br>" +
            "(A) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'support' means to give assistance to.",
        chinese_explanation: "(D) '恐吓' 意味着以一种欺凌的方式对某人说话。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给予支持、信心或希望。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '支持' 意味着给予帮助。"
    },
    {
        id: 6,
        question: "The CEO was quick to __________ the company's commitment to sustainability by making a public statement at the annual meeting.",
        chinese_question: "首席执行官迅速 __________ 公司对可持续发展的承诺，通过在年度会议上做出公开声明。",
        answers: [
        { option: "A", answer: "avow", chinese_answer: "公开承认", chinese_romanization: "gōngkāi chéngrèn" },
        { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "question", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
        { option: "D", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avow' means to assert or confess openly." +
            "<br><br>" +
            "(B) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'question' means to ask questions about something." +
            "<br><br>" +
            "(D) 'undermine' means to damage or weaken someone or something.",
        chinese_explanation: "(A) '公开承认' 意味着公开断言或承认。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使某物不被看到。" +
            "<br><br>" +
            "(C) '质疑' 意味着对某事提出问题。" +
            "<br><br>" +
            "(D) '削弱' 意味着损害或削弱某人或某物。"
    },
    {
        id: 7,
question: "To better understand the market needs, the company __________ customer feedback regularly.",
chinese_question: "为了更好地了解市场需求，公司定期 __________ 客户反馈。",
answers: [
    { option: "A", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "surveys", chinese_answer: "调查", chinese_romanization: "diàochá" },
    { option: "C", answer: "dismisses", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
    { option: "D", answer: "enhances", chinese_answer: "提高", chinese_romanization: "tígāo" }
],
correctAnswer: "B",
explanation: "(B) 'surveys' means to examine and record the opinions or experiences of individuals." +
    "<br><br>" +
    "(A) 'ignores' means to refuse to take notice of or acknowledge; disregard intentionally." +
    "<br><br>" +
    "(C) 'dismisses' means to decide that something or someone is not important and not worth considering." +
    "<br><br>" +
    "(D) 'enhances' means to intensify, increase, or further improve the quality, value, or extent of something.",
chinese_explanation: "(B) '调查' 意味着检查和记录个人的意见或经历。" +
    "<br><br>" +
    "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
    "<br><br>" +
    "(C) '驳回' 意味着决定某事或某人不重要且不值得考虑。" +
    "<br><br>" +
    "(D) '提高' 意味着增强、增加或进一步改善某物的质量、价值或范围。"
    },
    {
        id: 8,
  question: "The teacher wanted to __________ the value of honesty in her students.",
  chinese_question: "老师希望在学生中 __________ 诚实的价值。",
  answers: [
    { option: "A", answer: "promulgate", chinese_answer: "宣传", chinese_romanization: "xuānchuán" },
    { option: "B", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
    { option: "C", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
    { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'promulgate' figuratively means to promote or make widely known (an idea or cause)." +
    "<br><br>" +
    "(B) 'obscure' means to keep from being seen; conceal." +
    "<br><br>" +
    "(C) 'suppress' means to forcibly put an end to." +
    "<br><br>" +
    "(D) 'diminish' means to make or become less.",
  chinese_explanation: "(A) '宣传' 在此语境下比喻推广或广泛传播（一个想法或事业）。" +
    "<br><br>" +
    "(B) '遮掩' 意味着使看不见；隐藏。" +
    "<br><br>" +
    "(C) '抑制' 意味着强行终止。" +
    "<br><br>" +
    "(D) '减少' 意味着使或变得更少。"
    },
    {
        id: 9,
        question: "The series of events __________ to form a complex and intriguing plot.",
        chinese_question: "一系列事件 __________ 形成了一个复杂而有趣的情节。",
        answers: [
                { option: "A", answer: "fragmented", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
                { option: "B", answer: "concatenated", chinese_answer: "连接", chinese_romanization: "liánjiē" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "separated", chinese_answer: "分开", chinese_romanization: "fēnkāi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concatenated' means to link things together in a series or chain." +
            "<br><br>" +
            "(A) 'fragmented' means to break into pieces." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'separated' means to cause to move or be apart.",
        chinese_explanation: "(B) '连接' 意味着将事物按顺序或链条连接在一起。" +
            "<br><br>" +
            "(A) '分裂' 意味着分成碎片。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '分开' 意味着使移动或分离。"
    },
    {
        id: 10,
        question: "The variety of options on the menu will __________ diners who are indecisive.",
        chinese_question: "菜单上的各种选择会让优柔寡断的食客 __________ 。",
        answers: [
        { option: "A", answer: "boggle", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
        { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "C", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'boggle' means to overwhelm or bewilder." +
            "<br><br>" +
            "(B) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'amuse' means to cause someone to find something funny." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '迷惑' 意味着使不知所措或迷惑。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '逗乐' 意味着让某人觉得有趣。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
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
