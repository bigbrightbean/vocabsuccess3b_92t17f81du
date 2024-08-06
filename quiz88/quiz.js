// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician was known for his __________, often misleading voters with false promises and manipulative tactics.",
        chinese_question: "这位政客以其 __________ 而闻名，经常用虚假的承诺和操纵手段误导选民。",
        answers: [
                { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
                { option: "B", answer: "chicanery", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "D", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chicanery' means the use of trickery to achieve a political, financial, or legal purpose." +
                "<br><br>" +
                "(A) 'honesty' means the quality of being honest." +
                "<br><br>" +
                "(C) 'transparency' means the condition of being transparent." +
                "<br><br>" +
                "(D) 'integrity' means the quality of being honest and having strong moral principles.",
        chinese_explanation: "(B) '欺骗'一词意味着使用诡计来实现政治、经济或法律目的。" +
                "<br><br>" +
                "(A) '诚实' 意味着诚实的品质。" +
                "<br><br>" +
                "(C) '透明' 意味着透明的状态。" +
                "<br><br>" +
                "(D) '正直' 意味着诚实并具有强烈道德原则的品质。"
    },
    {
        id: 2,
    question: "The early frost was a __________ of the harsh winter ahead.",
    chinese_question: "早霜是即将到来的严冬的 __________ 。",
    answers: [
        { option: "A", answer: "harbinger", chinese_answer: "预兆", chinese_romanization: "yùzhào" },
        { option: "B", answer: "remnant", chinese_answer: "残余", chinese_romanization: "cányú" },
        { option: "C", answer: "echo", chinese_answer: "回声", chinese_romanization: "huíshēng" },
        { option: "D", answer: "relic", chinese_answer: "遗迹", chinese_romanization: "yíjì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harbinger' means a person or thing that announces or signals the approach of another, used figuratively here." +
                "<br><br>" +
                "(B) 'remnant' means a small remaining quantity of something." +
                "<br><br>" +
                "(C) 'echo' means a sound or series of sounds caused by the reflection of sound waves from a surface back to the listener." +
                "<br><br>" +
                "(D) 'relic' means an object surviving from an earlier time, especially one of historical or sentimental interest.",
    chinese_explanation: "(A) '预兆' 意味着预示或信号另一件事情即将来临的人或事物，这里是比喻用法。" +
                "<br><br>" +
                "(B) '残余' 意味着剩余的一小部分。" +
                "<br><br>" +
                "(C) '回声' 意味着由于声波从表面反射回听者而引起的声音或一系列声音。" +
                "<br><br>" +
                "(D) '遗迹' 意味着从早期时代遗留下来的物体，尤指具有历史或感情意义的物体。"
    },
    {
        id: 3,
        question: "The president's fascination with __________ led him to hire experts to meticulously map out his family tree, revealing connections to historical figures.",
        chinese_question: "总统对__________的着迷使他雇佣专家细致地绘制家谱，揭示了与历史人物的联系。",
        answers: [
            { option: "A", answer: "amnesia", chinese_answer: "失忆症", chinese_romanization: "shīyì zhèng" },
            { option: "B", answer: "oblivion", chinese_answer: "遗忘", chinese_romanization: "yíwàng" },
            { option: "C", answer: "forgetfulness", chinese_answer: "健忘", chinese_romanization: "jiànwàng" },
            { option: "D", answer: "genealogy", chinese_answer: "家谱学", chinese_romanization: "jiāpǔ xué" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'genealogy' means the study and tracing of lines of descent or development." +
            "<br><br>" +
            "(A) 'amnesia' means a partial or total loss of memory." +
            "<br><br>" +
            "(B) 'oblivion' means the state of being unaware or unconscious of what is happening." +
            "<br><br>" +
            "(C) 'forgetfulness' means the quality of being apt to forget things.",
        chinese_explanation: "(D) '家谱学' 意味着研究和追踪血统或发展的学科。" +
            "<br><br>" +
            "(A) '失忆症' 意味着部分或完全失去记忆。" +
            "<br><br>" +
            "(B) '遗忘' 意味着对发生的事情没有意识或无意识的状态。" +
            "<br><br>" +
            "(C) '健忘' 意味着容易忘事的品质。"
    },
    {
        id: 4,
        question: "There was a great __________ in the market after the announcement of the new policy, with traders scrambling to adjust.",
        chinese_question: "在宣布新政策后，市场上出现了巨大的 __________，交易员们争相调整。",
        answers: [
            { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "commotion", chinese_answer: "骚动", chinese_romanization: "sāodòng" },
            { option: "C", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'commotion' means a state of confused and noisy disturbance." +
                "<br><br>" +
                "(A) 'celebration' means the action of marking one's pleasure at an important event or occasion." +
                "<br><br>" +
                "(C) 'agreement' means harmony or accordance in opinion or feeling." +
                "<br><br>" +
                "(D) 'calm' means a state of peace and quiet.",
        chinese_explanation: "(B) '骚动' 意味着一种混乱和吵闹的状态。" +
                "<br><br>" +
                "(A) '庆祝' 意味着标志着对重要事件或场合的愉快行为。" +
                "<br><br>" +
                "(C) '同意' 意味着在意见或感觉上的和谐或一致。" +
                "<br><br>" +
                "(D) '平静' 意味着一种和平和安静的状态。"
    },
    {
        id: 5,
        question: "Her __________ for social justice was evident in her tireless advocacy and activism.",
        chinese_question: "她对社会正义的 __________ 显而易见，体现在她不知疲倦的倡导和行动中。",
        answers: [
                { option: "A", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "B", answer: "passivity", chinese_answer: "被动", chinese_romanization: "bèidòng" },
                { option: "C", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" },
                { option: "D", answer: "detachment", chinese_answer: "超脱", chinese_romanization: "chāotuō" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fervour' figuratively means intense and passionate feeling." +
                "<br><br>" +
                "(B) 'passivity' means acceptance of what happens, without active response or resistance." +
                "<br><br>" +
                "(C) 'neutrality' means the state of not supporting or helping either side in a conflict." +
                "<br><br>" +
                "(D) 'detachment' means the state of being objective or aloof.",
        chinese_explanation: "(A) '热情' 在此语境下意指强烈而热情的感情。" +
                "<br><br>" +
                "(B) '被动' 意味着接受发生的事情，没有积极的反应或抵抗。" +
                "<br><br>" +
                "(C) '中立' 意味着在冲突中不支持或帮助任何一方的状态。" +
                "<br><br>" +
                "(D) '超脱' 意味着客观或冷漠的状态。"
    },
    {
        id: 6,
    question: "His __________ in business matters often led him to make unwise investments based on the advice of unscrupulous advisors.",
    chinese_question: "他在商业事务上的 __________ 常常导致他根据不道德顾问的建议做出不明智的投资。",
    answers: [
            { option: "A", answer: "sophistication", chinese_answer: "世故", chinese_romanization: "shìgù" },
            { option: "B", answer: "prudence", chinese_answer: "审慎", chinese_romanization: "shěnshèn" },
            { option: "C", answer: "foresight", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" },
            { option: "D", answer: "naivete", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'naivete' means a lack of experience, wisdom, or judgment; innocence or gullibility." +
            "<br><br>" +
            "(A) 'sophistication' means the quality of being sophisticated." +
            "<br><br>" +
            "(B) 'prudence' means the quality of being prudent; cautiousness." +
            "<br><br>" +
            "(C) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future.",
    chinese_explanation: "(D) '天真'一词意味着缺乏经验、智慧或判断；天真或轻信。" +
            "<br><br>" +
            "(A) '世故' 意味着世故的品质。" +
            "<br><br>" +
            "(B) '审慎' 意味着审慎的品质；谨慎。" +
            "<br><br>" +
            "(C) '远见' 意味着预测或预测未来会发生什么或需要什么的能力。"
    },
    {
        id: 7,
    question: "The manager's constant __________ made the team dread coming to work.",
    chinese_question: "经理不断的 __________ 让团队害怕来上班。",
    answers: [
        { option: "A", answer: "hectoring", chinese_answer: "威吓", chinese_romanization: "wēihè" },
        { option: "B", answer: "praising", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assisting", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hectoring' means to talk to someone in a bullying way, used figuratively here." +
                "<br><br>" +
                "(B) 'praising' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assisting' means to help someone.",
    chinese_explanation: "(A) '威吓' 意味着以一种欺凌的方式对某人说话，这里是比喻用法。" +
                "<br><br>" +
                "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 8,
        question: "The release of the influential album marked the __________ of a new trend in pop culture, inspiring countless artists and shaping the music industry.",
        chinese_question: "这张具有影响力的专辑的发行标志着流行文化新趋势的__________，激励了无数艺术家并塑造了音乐产业。",
        answers: [
            { option: "A", answer: "demise", chinese_answer: "终结", chinese_romanization: "zhōngjié" },
            { option: "B", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "C", answer: "termination", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" },
            { option: "D", answer: "genesis", chinese_answer: "起源", chinese_romanization: "qǐyuán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'genesis' means the origin or mode of formation of something." +
            "<br><br>" +
            "(A) 'demise' means the end or failure of an enterprise or institution." +
            "<br><br>" +
            "(B) 'end' means the final part of something." +
            "<br><br>" +
            "(C) 'termination' means the action of bringing something to an end.",
        chinese_explanation: "(D) '起源' 意味着某物的起源或形成方式。" +
            "<br><br>" +
            "(A) '终结' 意味着企业或机构的结束或失败。" +
            "<br><br>" +
            "(B) '结束' 意味着某事的最后部分。" +
            "<br><br>" +
            "(C) '终止' 意味着使某事结束的行为。"
    },
    {
        id: 9,
        question: "His __________ about the safety of the new procedure were justified when several complications arose during the trial.",
        chinese_question: "当试验中出现几起并发症时，他对新程序安全性的 __________ 得到了证实。",
        answers: [
                { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "B", answer: "convictions", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
                { option: "C", answer: "satisfactions", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
                { option: "D", answer: "assurances", chinese_answer: "保证", chinese_romanization: "bǎozhèng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' figuratively means uneasy feelings of doubt, worry, or fear, especially about one's own conduct; misgivings." +
                "<br><br>" +
                "(B) 'convictions' means firmly held beliefs or opinions." +
                "<br><br>" +
                "(C) 'satisfactions' means fulfillment of one's wishes, expectations, or needs." +
                "<br><br>" +
                "(D) 'assurances' means confidence or certainty in one's own abilities.",
        chinese_explanation: "(A) '不安' 在此语境下意指对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
                "<br><br>" +
                "(B) '信念' 意味着坚定的信仰或观点。" +
                "<br><br>" +
                "(C) '满足' 意味着满足某人的愿望、期望或需求。" +
                "<br><br>" +
                "(D) '保证' 意味着对自己能力的信心或确定性。"
    },
    {
        id: 10,
        question: "The city center was filled with the __________ of holiday shoppers and street performers.",
        chinese_question: "市中心充满了节日购物者和街头艺人的 __________。",
        answers: [
            { option: "A", answer: "hubbub", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "B", answer: "solitude", chinese_answer: "孤独", chinese_romanization: "gūdú" },
            { option: "C", answer: "peace", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "stillness", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hubbub' means a chaotic noise caused by a crowd of people." +
                "<br><br>" +
                "(B) 'solitude' means the state of being alone." +
                "<br><br>" +
                "(C) 'peace' means freedom from disturbance." +
                "<br><br>" +
                "(D) 'stillness' means the absence of movement or sound.",
        chinese_explanation: "(A) '喧闹' 意味着由一群人引起的混乱噪音。" +
                "<br><br>" +
                "(B) '孤独' 意味着独处的状态。" +
                "<br><br>" +
                "(C) '平静' 意味着没有干扰。" +
                "<br><br>" +
                "(D) '静止' 意味着没有运动或声音。"
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
