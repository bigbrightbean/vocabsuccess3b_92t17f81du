// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The priest began to __________ the prayer in a solemn voice that echoed through the church, creating a calm and reverent atmosphere.",
        chinese_question: "牧师开始用庄重的声音 __________ 祷告，那声音在教堂中回荡，营造出一种平静而庄严的氛围。",
        answers: [
                { option: "A", answer: "intone", chinese_answer: "吟诵", chinese_romanization: "yínsòng" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intone' means to say or recite with little rise and fall of the pitch of the voice." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(D) 'assist' means to help someone.",
        chinese_explanation: "(A) '吟诵' 意味着用平稳的声调说或背诵。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
        question: "In a fit of rage, he threatened to __________ the old, broken television out of the window.",
        chinese_question: "一怒之下，他威胁要把旧的、坏掉的电视 __________ 出窗外。",
        answers: [
                { option: "A", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
                { option: "B", answer: "defenestrate", chinese_answer: "扔出窗外", chinese_romanization: "rēng chū chuāngwài" },
                { option: "C", answer: "decorate", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
                { option: "D", answer: "store", chinese_answer: "存放", chinese_romanization: "cúnfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'defenestrate' means to throw someone or something out of a window." +
                "<br><br>" +
                "(A) 'repair' means to fix or mend something." +
                "<br><br>" +
                "(C) 'decorate' means to make something look more attractive by adding items." +
                "<br><br>" +
                "(D) 'store' means to keep or accumulate something for future use.",
        chinese_explanation: "(B) '扔出窗外' 意味着将某人或某物从窗户扔出去。" +
                "<br><br>" +
                "(A) '修理' 意味着修补或修理某物。" +
                "<br><br>" +
                "(C) '装饰' 意味着通过添加物品使某物看起来更有吸引力。" +
                "<br><br>" +
                "(D) '存放' 意味着保存或积累某物以备将来使用。"
    },
    {
        id: 3,
        question: "The treasure hunters hoped to __________ the ancient tomb and retrieve its priceless artifacts, despite the warnings from archaeologists not to disturb the site.",
        chinese_question: "尽管考古学家警告不要打扰该遗址，寻宝者仍希望 __________ 古墓并取回其无价的文物。",
        answers: [
                { option: "A", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
                { option: "B", answer: "despoil", chinese_answer: "掠夺", chinese_romanization: "luèduó" },
                { option: "C", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
                { option: "D", answer: "restore", chinese_answer: "恢复", chinese_romanization: "huīfù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'despoil' means to steal or violently remove valuable or attractive possessions from; plunder." +
                "<br><br>" +
                "(A) 'preserve' means to maintain something in its original or existing state." +
                "<br><br>" +
                "(C) 'repair' means to fix or mend something." +
                "<br><br>" +
                "(D) 'restore' means to bring back to a former condition.",
        chinese_explanation: "(B) '掠夺' 意味着偷窃或暴力移除有价值或吸引人的财物；掠夺。" +
                "<br><br>" +
                "(A) '保存' 意味着维持某物的原始或现有状态。" +
                "<br><br>" +
                "(C) '修理' 意味着修补或修理某物。" +
                "<br><br>" +
                "(D) '恢复' 意味着恢复到以前的状态。"
    },
    {
        id: 4,
    question: "It was unfair to __________ the project's failure solely to John's mistake, because many factors contributed to the outcome.",
    chinese_question: "仅将项目的失败 __________ 于约翰的错误是不公平的，因为有许多因素导致了这个结果。",
    answers: [
            { option: "A", answer: "impute", chinese_answer: "归因于", chinese_romanization: "guī yīn yú" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'impute' means to attribute or ascribe something, especially a fault or misconduct, to someone or something." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(D) 'support' means to give assistance to.",
    chinese_explanation: "(A) '归因于' 意味着将某事，特别是过错或不当行为，归咎于某人或某物。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 5,
        question: "When entering the temple, they would __________ to the altar as a sign of devotion.",
        chinese_question: "进入寺庙时，他们会向祭坛 __________ 以示虔诚。",
        answers: [
            { option: "A", answer: "rise", chinese_answer: "起立", chinese_romanization: "qǐlì" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "shout", chinese_answer: "喊叫", chinese_romanization: "hǎnjiào" },
            { option: "D", answer: "genuflect", chinese_answer: "跪拜", chinese_romanization: "guìbài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'genuflect' means to lower one's body briefly by bending one knee to the ground, typically in worship or as a sign of respect." +
            "<br><br>" +
            "(A) 'rise' means to move from a lower position to a higher one." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'shout' means to speak or cry out loudly and vehemently.",
        chinese_explanation: "(D) '跪拜' 意味着通过弯曲一膝下跪来短暂地降低身体，通常是表示敬意或崇拜。" +
            "<br><br>" +
            "(A) '起立' 意味着从低处移动到高处。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '喊叫' 意味着大声和激烈地说话或喊叫。"
    },
    {
        id: 6,
        question: "To lighten the load, the crew had to __________ some of the cargo overboard by throwing the heaviest items and unnecessary supplies into the sea.",
        chinese_question: "为了减轻负荷，船员们不得不通过将最重的物品和不必要的供应品抛入海中来 __________ 一些货物过船舷。",
        answers: [
                { option: "A", answer: "keep", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
                { option: "B", answer: "jettison", chinese_answer: "抛弃", chinese_romanization: "pāoqì" },
                { option: "C", answer: "organize", chinese_answer: "整理", chinese_romanization: "zhěnglǐ" },
                { option: "D", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jettison' means to throw or drop something from an aircraft or ship." +
            "<br><br>" +
            "(A) 'keep' means to retain possession of." +
            "<br><br>" +
            "(C) 'organize' means to arrange systematically." +
            "<br><br>" +
            "(D) 'acquire' means to buy or obtain.",
        chinese_explanation: "(B) '抛弃' 意味着从飞机或船上扔下或丢弃某物。" +
            "<br><br>" +
            "(A) '保留' 意味着保留所有权。" +
            "<br><br>" +
            "(C) '整理' 意味着系统地安排。" +
            "<br><br>" +
            "(D) '获得' 意味着购买或获得。"
    },
    {
        id: 7,
        question: "Her best friend loves to __________ about their favorite books, often engaging in long conversations while they walk in the park.",
        chinese_question: "她最好的朋友喜欢 __________ 他们最喜欢的书，经常在公园里散步时进行长时间的讨论。",
        answers: [
            { option: "A", answer: "mutter", chinese_answer: "喃喃自语", chinese_romanization: "nán nán zì yǔ" },
            { option: "B", answer: "whisper", chinese_answer: "低声说", chinese_romanization: "dī shēng shuō" },
            { option: "C", answer: "mumble", chinese_answer: "含糊地说", chinese_romanization: "hán hú de shuō" },
            { option: "D", answer: "discourse", chinese_answer: "讨论", chinese_romanization: "tǎo lùn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'discourse' means to talk about something for a long time." +
            "<br><br>" +
            "(A) 'mutter' means to speak quietly and indistinctly." +
            "<br><br>" +
            "(B) 'whisper' means to speak very softly." +
            "<br><br>" +
            "(C) 'mumble' means to speak in a way that is not clear.",
        chinese_explanation: "(D) '讨论' 意味着长时间地谈论某事。" +
            "<br><br>" +
            "(A) '喃喃自语' 意味着说话轻声且模糊。" +
            "<br><br>" +
            "(B) '低声说' 意味着非常轻声地说话。" +
            "<br><br>" +
            "(C) '含糊地说' 意味着说话不清楚。"
    },
    {
        id: 8,
        question: "The salesman tried to __________ customers with false promises and exaggerated benefits.",
        chinese_question: "销售员试图用虚假的承诺和夸大的好处来 __________ 顾客。",
        answers: [
        { option: "A", answer: "beguile", chinese_answer: "诱骗", chinese_romanization: "yòupiàn" },
        { option: "B", answer: "inform", chinese_answer: "告知", chinese_romanization: "gàozhī" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enlighten", chinese_answer: "启迪", chinese_romanization: "qǐdí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'beguile' means to charm or enchant someone in a deceptive way." +
            "<br><br>" +
            "(B) 'inform' means to give someone facts or information." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'enlighten' means to give someone greater knowledge and understanding about a subject or situation.",
        chinese_explanation: "(A) '诱骗' 意味着以欺骗的方式迷住或吸引某人。" +
            "<br><br>" +
            "(B) '告知' 意味着给予某人事实或信息。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '启迪' 意味着给予某人对某个主题或情况的更大知识和理解。"
    },
    {
        id: 9,
        question: "Her classmate chose to __________ when everyone else agreed with the teacher's idea, expressing a different opinion.",
        chinese_question: "当其他人都同意老师的想法时，她的同学选择 __________ ，表达了不同的意见。",
        answers: [
            { option: "A", answer: "conform", chinese_answer: "遵从", chinese_romanization: "zūn cóng" },
            { option: "B", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóng yì" },
            { option: "C", answer: "comply", chinese_answer: "遵守", chinese_romanization: "zūn shǒu" },
            { option: "D", answer: "dissent", chinese_answer: "不同意", chinese_romanization: "bù tóng yì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'dissent' means to have a different opinion or disagree." +
            "<br><br>" +
            "(A) 'conform' means to follow rules or standards." +
            "<br><br>" +
            "(B) 'agree' means to have the same opinion." +
            "<br><br>" +
            "(C) 'comply' means to follow rules or directions.",
        chinese_explanation: "(D) '不同意' 意味着有不同的意见或不同意。" +
            "<br><br>" +
            "(A) '遵从' 意味着遵守规则或标准。" +
            "<br><br>" +
            "(B) '同意' 意味着有相同的意见。" +
            "<br><br>" +
            "(C) '遵守' 意味着遵守规则或指示。"
    },
    {
        id: 10,
        question: "The pastor's sermon aimed to __________ the congregation, teaching them important lessons like honesty and kindness.",
        chinese_question: "牧师的布道旨在 __________ 会众，教导他们诚实和善良等重要课程。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùn huò" },
            { option: "B", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wù dǎo" },
            { option: "C", answer: "bewilder", chinese_answer: "使迷惑", chinese_romanization: "shǐ mí huò" },
            { option: "D", answer: "edify", chinese_answer: "启发", chinese_romanization: "qǐ fā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'edify' means to teach in a way that improves the mind or character." +
            "<br><br>" +
            "(A) 'confuse' means to make someone unable to understand something." +
            "<br><br>" +
            "(B) 'mislead' means to give someone the wrong idea or impression." +
            "<br><br>" +
            "(C) 'bewilder' means to make someone very confused.",
        chinese_explanation: "(D) '启发' 意味着以改善心智或品格的方式进行教育。" +
            "<br><br>" +
            "(A) '使困惑' 意味着使某人无法理解某事。" +
            "<br><br>" +
            "(B) '误导' 意味着给某人错误的想法或印象。" +
            "<br><br>" +
            "(C) '使迷惑' 意味着使某人非常困惑。"
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
