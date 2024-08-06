// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He used every opportunity to __________ himself with the company's top executives and gain their favor by offering compliments and assistance.",
        chinese_question: "他利用每一个机会 __________ 自己与公司的高管们的关系，并通过提供赞美和帮助来获得他们的好感。",
        answers: [
                { option: "A", answer: "distance", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" },
                { option: "B", answer: "ingratiate", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" },
                { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "D", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ingratiate' used figuratively means to gain favor or approval by deliberate efforts." +
                "<br><br>" +
                "(A) 'distance' means to make someone or something far off or remote in position or relationship." +
                "<br><br>" +
                "(C) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
                "<br><br>" +
                "(D) 'insult' means to speak to or treat with disrespect or scornful abuse.",
        chinese_explanation: "(B) '讨好' 在比喻意义上指通过刻意的努力获得某人的喜欢或认可。" +
                "<br><br>" +
                "(A) '疏远' 意味着使某人或某物在位置或关系上变得遥远或远离。" +
                "<br><br>" +
                "(C) '拒绝' 意味着认为不合格、不接受或有缺陷。" +
                "<br><br>" +
                "(D) '侮辱' 意味着以不尊重或轻蔑的方式说话或对待。"
    },
    {
        id: 2,
    question: "The economic downturn __________ the government to implement new financial policies that will stabilize the market and support struggling businesses.",
    chinese_question: "经济衰退 __________ 政府实施新的金融政策，以稳定市场并支持陷入困境的企业。",
    answers: [
        { option: "A", answer: "spurred", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "B", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
        { option: "C", answer: "dissuaded", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'spurred' figuratively means to encourage or prompt someone to take action or make a greater effort." +
        "<br><br>" +
        "(B) 'hindered' means to create difficulties, resulting in delay or obstruction." +
        "<br><br>" +
        "(C) 'dissuaded' means to persuade someone not to take a particular course of action." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(A) '激励' 在此语境下比喻鼓励或促使某人采取行动或更加努力。" +
        "<br><br>" +
        "(B) '阻碍' 意味着制造困难，导致延误或障碍。" +
        "<br><br>" +
        "(C) '劝阻' 意味着劝说某人不采取某个特定的行动。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
question: "The criminals __________ with some corrupt officials to smuggle the goods across the border.",
chinese_question: "罪犯与一些腐败的官员 __________ 以将货物偷运过境。",
answers: [
    { option: "A", answer: "complied", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
    { option: "B", answer: "connived", chinese_answer: "共谋", chinese_romanization: "gòngmóu" },
    { option: "C", answer: "conformed", chinese_answer: "符合", chinese_romanization: "fúhé" },
    { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
],
correctAnswer: "B",
explanation: "(B) 'connived' means secretly allow (something considered immoral, illegal, wrong, or harmful) to occur." +
    "<br><br>" +
    "(A) 'complied' means act in accordance with a wish or command." +
    "<br><br>" +
    "(C) 'conformed' means comply with rules, standards, or laws." +
    "<br><br>" +
    "(D) 'assisted' means help (someone), typically by doing a share of the work.",
chinese_explanation: "(B) '共谋' 意味着秘密允许（某些被认为不道德、非法、错误或有害的事情）发生。" +
    "<br><br>" +
    "(A) '遵守' 意味着按照愿望或命令行事。" +
    "<br><br>" +
    "(C) '符合' 意味着遵守规则、标准或法律。" +
    "<br><br>" +
    "(D) '帮助' 意味着帮助（某人），通常是通过分担工作。"
    },
    {
        id: 4,
        question: "The pampered cat was __________ by its owner, receiving gourmet meals and constant attention that made it spoiled and demanding.",
        chinese_question: "这只被宠坏的猫被它的主人 __________，享受美食和持续的关注，这使它变得娇惯和挑剔。",
        answers: [
                { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "coddled", chinese_answer: "溺爱", chinese_romanization: "nì'ài" },
                { option: "C", answer: "ignore", chinese_answer: "不理", chinese_romanization: "bùlǐ" },
                { option: "D", answer: "scold", chinese_answer: "责骂", chinese_romanization: "zémà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coddled' means to treat with excessive indulgence and care." +
            "<br><br>" +
            "(A) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'scold' means to reprimand or criticize angrily.",
        chinese_explanation: "(B) '溺爱' 意味着过度宠爱和关怀。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(C) '不理' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '责骂' 意味着愤怒地斥责或批评。"
    },
    {
        id: 5,
        question: "The artist's talent began to __________ during her time at the academy, leading her to gain recognition and admiration from her peers.",
        chinese_question: "艺术家的才华在学院期间开始 __________ ，并因此获得了同龄人的认可和赞赏。",
        answers: [
                { option: "A", answer: "effloresce", chinese_answer: "绽放", chinese_romanization: "zhànfàng" },
                { option: "B", answer: "fade", chinese_answer: "消退", chinese_romanization: "xiāotuì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'effloresce' means to blossom or come into full bloom." +
                "<br><br>" +
                "(B) 'fade' means to gradually grow faint and disappear." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'diminish' means to make or become less.",
        chinese_explanation: "(A) '绽放' 意味着开花或进入全盛期。" +
                "<br><br>" +
                "(B) '消退' 意味着逐渐变得模糊和消失。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '减少' 意味着使某物减少或变少。"
    },
    {
        id: 6,
        question: "He would __________ on compliments, always craving more praise from others.",
        chinese_question: "他总是渴望得到更多的赞美， __________ 恭维。",
        answers: [
            { option: "A", answer: "dismiss", chinese_answer: "无视", chinese_romanization: "wúshì" },
            { option: "B", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "gormandize", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gormandize' used figuratively means to consume something greedily or ravenously." +
            "<br><br>" +
            "(A) 'dismiss' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(D) '狼吞虎咽' 在比喻意义上指贪婪或狼吞虎咽地消耗某物。" +
            "<br><br>" +
            "(A) '无视' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(B) '忽略' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '拒绝' 意味着认为不合格、不接受或有缺陷。"
    },
    {
        id: 7,
question: "The new medical treatment will __________ the need for surgery in many cases, making recovery easier for patients.",
chinese_question: "这种新医疗方法将 __________ 许多情况下进行手术的需要，使患者的恢复更容易。",
answers: [
    { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
    { option: "B", answer: "obviate", chinese_answer: "消除", chinese_romanization: "xiāochú" },
    { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
    { option: "D", answer: "necessitate", chinese_answer: "使必要", chinese_romanization: "shǐ bìyào" }
],
correctAnswer: "B",
explanation: "(B) 'obviate' means to remove a need or difficulty." +
    "<br><br>" +
    "(A) 'hinder' means to obstruct." +
    "<br><br>" +
    "(C) 'complicate' means to make more complex." +
    "<br><br>" +
    "(D) 'necessitate' means to make necessary.",
chinese_explanation: "(B) '消除' 一词意味着去除需要或困难。" +
    "<br><br>" +
    "(A) '阻碍' 意味着妨碍。" +
    "<br><br>" +
    "(C) '复杂化' 意味着使变得更复杂。" +
    "<br><br>" +
    "(D) '使必要' 意味着使变得必要。"
    },
    {
        id: 8,
        question: "Before the medical examination, the patient was asked to __________.",
        chinese_question: "在体检前，患者被要求 __________ 。",
        answers: [
                { option: "A", answer: "disrobe", chinese_answer: "脱衣", chinese_romanization: "tuōyī" },
                { option: "B", answer: "eat", chinese_answer: "吃", chinese_romanization: "chī" },
                { option: "C", answer: "wait", chinese_answer: "等待", chinese_romanization: "děngdài" },
                { option: "D", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disrobe' means to remove one's clothes." +
                "<br><br>" +
                "(B) 'eat' means to put food into the mouth, chew, and swallow it." +
                "<br><br>" +
                "(C) 'wait' means to stay where one is or delay action until a particular time or event." +
                "<br><br>" +
                "(D) 'sleep' means to be in a state of rest where consciousness is suspended.",
        chinese_explanation: "(A) '脱衣' 意味着脱掉衣服。" +
                "<br><br>" +
                "(B) '吃' 意味着将食物放入口中，咀嚼并吞咽。" +
                "<br><br>" +
                "(C) '等待' 意味着留在原地或延迟行动直到特定时间或事件。" +
                "<br><br>" +
                "(D) '睡觉' 意味着处于意识暂停的休息状态。"
    },
    {
        id: 9,
        question: "The witness's testimony seemed to __________ the facts, leading to doubts about the case.",
        chinese_question: "证人的证词似乎 __________ 了事实，导致对案件的怀疑。",
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
        id: 10,
        question: "During the lecture, the professor would often __________ from the main topic, making it hard for students to follow.",
        chinese_question: "在讲座期间，教授经常 __________ 主题，使学生难以跟上。",
        answers: [
                { option: "A", answer: "divagate", chinese_answer: "偏离", chinese_romanization: "piānlí" },
                { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'divagate' means to stray or wander from a course or subject." +
                "<br><br>" +
                "(B) 'focus' means to concentrate on a particular subject or task." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '偏离' 意味着偏离或游离于一个过程或主题。" +
                "<br><br>" +
                "(B) '专注' 意味着集中于特定的主题或任务。" +
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
