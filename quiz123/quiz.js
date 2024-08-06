// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She felt embarrassed when she realized she had been __________ by a fake news article, thinking it was real.",
        chinese_question: "当她意识到自己被一篇假新闻 __________ 时，她感到很尴尬，以为它是真的。",
        answers: [
                { option: "A", answer: "duped", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "B", answer: "informed", chinese_answer: "通知", chinese_romanization: "tōngzhī" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'duped' means to be deceived or tricked." +
                "<br><br>" +
                "(B) 'informed' means to give someone facts or information." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '欺骗' 意味着被欺骗或捉弄。" +
                "<br><br>" +
                "(B) '通知' 意味着向某人提供事实或信息。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 2,
        question: "Despite their different paths, the old friends continued to __________ to their shared memories, reminiscing about the times they spent together.",
        chinese_question: "尽管各奔前程，这些老朋友依然 __________ 他们共同的记忆，回忆他们一起度过的时光。",
        answers: [
            { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dispute", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "D", answer: "cleave", chinese_answer: "坚守", chinese_romanization: "jiānshǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cleave' means to adhere strongly to a particular pursuit or belief, or to stick closely to something." +
            "<br><br>" +
            "(A) 'abandon' means to give up completely." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dispute' means to argue about something.",
        chinese_explanation: "(D) '坚守' 意味着坚决追求或信奉某个信念，或紧密依附于某物。" +
            "<br><br>" +
            "(A) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '争论' 意味着对某事进行争论。"
    },
    {
        id: 3,
        question: "In the meeting, she had to __________ a solution when the original plan fell apart, quickly coming up with a new idea.",
        chinese_question: "在会议中，当原计划失败时，她不得不 __________ 一个解决方案，迅速想出一个新主意。",
        answers: [
                { option: "A", answer: "extemporize", chinese_answer: "即兴发挥", chinese_romanization: "jíxìng fāhuī" },
                { option: "B", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'extemporize' means to compose, perform, or produce something such as music or a speech without preparation; improvise, used figuratively here." +
            "<br><br>" +
            "(B) 'follow' means to go or come after." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'abandon' means to give up completely.",
        chinese_explanation: "(A) '即兴发挥' 意味着在没有准备的情况下创作、表演或制作某物，如音乐或演讲；即兴发挥，这里是比喻用法。" +
            "<br><br>" +
            "(B) '遵循' 意味着跟随或紧随其后。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃。"
    },
    {
        id: 4,
        question: "The rapid changes in technology can __________ even the most tech-savvy individuals, leaving them puzzled.",
        chinese_question: "快速的技术变化甚至会让最懂技术的人感到 __________，让他们感到困惑。",
        answers: [
                { option: "A", answer: "fuddle", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
                { option: "B", answer: "enhance", chinese_answer: "提高", chinese_romanization: "tígāo" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fuddle' means to confuse or stupefy someone, used figuratively here." +
                "<br><br>" +
                "(B) 'enhance' means to improve the quality, value, or extent of something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '困惑' 意味着使某人迷惑或发呆，这里是比喻用法。" +
                "<br><br>" +
                "(B) '提高' 意味着改善某物的质量、价值或程度。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事变得更简单或更容易做或理解。"
    },
    {
        id: 5,
question: "His friends tried to __________ his sudden anger to stress at work.",
chinese_question: "他的朋友们试图将他突然的愤怒 __________ 于工作压力。",
answers: [
        { option: "A", answer: "impute", chinese_answer: "归因于", chinese_romanization: "guī yīn yú" },
        { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "A",
explanation: "(A) 'impute' means to attribute or ascribe something, especially a fault or misconduct, to someone or something, used figuratively here." +
        "<br><br>" +
        "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to give assistance to.",
chinese_explanation: "(A) '归因于' 意味着将某事，特别是过错或不当行为，归咎于某人或某物，这里是比喻用法。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 6,
        question: "His laid-back style didn't __________ with the company's strict dress code, leading to disagreements.",
        chinese_question: "他的随意风格与公司的严格着装规定不 __________ ，导致了分歧。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "jibe", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'jibe' means to be in accord or agreement with, used figuratively here." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'support' means to give assistance to." +
            "<br><br>" +
            "(C) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(D) '一致' 意味着与某事物一致或和谐，这里是比喻用法。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(C) '批评' 意味着以不赞成的方式指出某人或某物的错误。"
    },
    {
        id: 7,
question: "With age, some people's attitudes can __________, making them resistant to new ideas.",
chinese_question: "随着年龄的增长，有些人的态度会 __________ ，使他们对新观点产生抵触。",
answers: [
    { option: "A", answer: "diversify", chinese_answer: "多样化", chinese_romanization: "duōyànghuà" },
    { option: "B", answer: "ossify", chinese_answer: "僵化", chinese_romanization: "jiānghuà" },
    { option: "C", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
    { option: "D", answer: "lighten", chinese_answer: "变轻", chinese_romanization: "biàn qīng" }
],
correctAnswer: "B",
explanation: "(B) 'ossify' means to become rigid or inflexible in habits or attitudes." +
    "<br><br>" +
    "(A) 'diversify' means to make or become more diverse." +
    "<br><br>" +
    "(C) 'expand' means to increase in size, number, or importance." +
    "<br><br>" +
    "(D) 'lighten' means to make or become lighter in weight or mood.",
chinese_explanation: "(B) '僵化' 意味着在习惯或态度上变得僵硬或不灵活。" +
    "<br><br>" +
    "(A) '多样化' 意味着使某物变得更加多样化。" +
    "<br><br>" +
    "(C) '扩展' 意味着增加尺寸、数量或重要性。" +
    "<br><br>" +
    "(D) '变轻' 意味着在重量或心情上变得更轻。"
    },
    {
        id: 8,
        question: "The contractor was accused of trying to __________ the homeowners by inflating prices.",
        chinese_question: "承包商被指控试图通过抬高价格来 __________ 房主。",
        answers: [
        { option: "A", answer: "bilk", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
        { option: "C", answer: "appreciate", chinese_answer: "感激", chinese_romanization: "gǎnjī" },
        { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bilk' means to cheat or defraud someone." +
            "<br><br>" +
            "(B) 'assist' means to help or support." +
            "<br><br>" +
            "(C) 'appreciate' means to recognize the full worth of." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '欺骗' 意味着欺骗或诈骗某人。" +
            "<br><br>" +
            "(B) '协助' 意味着帮助或支持。" +
            "<br><br>" +
            "(C) '感激' 意味着认识到全部价值。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 9,
question: "The sudden shift in the storyline __________ the viewers, who didn't see it coming.",
chinese_question: "故事情节的突然变化让观众 __________，他们没有预料到。",
answers: [
        { option: "A", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
        { option: "B", answer: "flummoxed", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "C", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "D", answer: "reassured", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
],
correctAnswer: "B",
explanation: "(B) 'flummoxed' used figuratively means to confuse or bewilder someone." +
        "<br><br>" +
        "(A) 'bored' means to make someone feel weary and uninterested." +
        "<br><br>" +
        "(C) 'delighted' means to cause someone to feel very pleased." +
        "<br><br>" +
        "(D) 'reassured' means to set someone's mind at rest or dispel their fears.",
chinese_explanation: "(B) '困惑' 在比喻意义上指使某人困惑或迷惑。" +
        "<br><br>" +
        "(A) '无聊' 意味着使某人感到厌倦和无趣。" +
        "<br><br>" +
        "(C) '高兴' 意味着使某人感到非常高兴。" +
        "<br><br>" +
        "(D) '安慰' 意味着使某人放心或消除他们的恐惧。"
    },
    {
        id: 10,
        question: "The intense heat of the midday sun seemed to __________ the workers, slowing their progress significantly.",
        chinese_question: "正午的烈日似乎 __________ 了工人们，显著地减慢了他们的进度。",
        answers: [
                { option: "A", answer: "energize", chinese_answer: "激励", chinese_romanization: "jīlì" },
                { option: "B", answer: "enervate", chinese_answer: "使衰弱", chinese_romanization: "shǐ shuāiruò" },
                { option: "C", answer: "inspire", chinese_answer: "启发", chinese_romanization: "qǐfā" },
                { option: "D", answer: "motivate", chinese_answer: "激发", chinese_romanization: "jīfā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enervate' means to cause someone to feel drained of energy or vitality." +
            "<br><br>" +
            "(A) 'energize' means to give energy or enthusiasm." +
            "<br><br>" +
            "(C) 'inspire' means to fill someone with the urge or ability to do or feel something." +
            "<br><br>" +
            "(D) 'motivate' means to provide someone with a reason for doing something.",
        chinese_explanation: "(B) '使衰弱' 意味着使某人感到精力或活力耗尽。" +
            "<br><br>" +
            "(A) '激励' 意味着给予能量或热情。" +
            "<br><br>" +
            "(C) '启发' 意味着使某人有做某事的冲动或能力。" +
            "<br><br>" +
            "(D) '激发' 意味着给某人提供做某事的理由。"
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
