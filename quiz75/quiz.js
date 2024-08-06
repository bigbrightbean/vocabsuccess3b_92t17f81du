// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Despite the chaos around her, she maintained a serene __________, projecting calm and control.",
    chinese_question: "尽管周围一片混乱，她仍保持着宁静的 __________，表现出冷静和控制。",
    answers: [
        { option: "A", answer: "disturbance", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
        { option: "B", answer: "countenance", chinese_answer: "面容", chinese_romanization: "miànróng" },
        { option: "C", answer: "agitation", chinese_answer: "激动", chinese_romanization: "jīdòng" },
        { option: "D", answer: "action", chinese_answer: "行动", chinese_romanization: "xíngdòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'countenance' means a person's face or facial expression, especially as an indicator of mood or emotion." +
            "<br><br>" +
            "(A) 'disturbance' means the interruption of a settled and peaceful condition." +
            "<br><br>" +
            "(C) 'agitation' means a state of anxiety or nervous excitement." +
            "<br><br>" +
            "(D) 'action' means the fact or process of doing something.",
    chinese_explanation: "(B) '面容' 意味着一个人的脸或面部表情，特别是作为情绪或心情的指示。" +
            "<br><br>" +
            "(A) '干扰' 意味着中断安定和平静的状态。" +
            "<br><br>" +
            "(C) '激动' 意味着焦虑或紧张兴奋的状态。" +
            "<br><br>" +
            "(D) '行动' 意味着做某事的事实或过程。"
    },
    {
        id: 2,
    question: "In her role as team leader, she was the __________ between the employees and upper management, ensuring smooth communication and understanding.",
    chinese_question: "作为团队领导，她是员工与高层管理之间的 __________，确保沟通和理解的顺畅。",
    answers: [
        { option: "A", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
        { option: "B", answer: "barrier", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
        { option: "C", answer: "hindrance", chinese_answer: "妨碍", chinese_romanization: "fáng'ài" },
        { option: "D", answer: "liaison", chinese_answer: "联络员", chinese_romanization: "liánluòyuán" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'liaison' means communication or cooperation that facilitates a close working relationship between people or organizations." +
        "<br><br>" +
        "(A) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
        "<br><br>" +
        "(B) 'barrier' means a fence or other obstacle that prevents movement or access." +
        "<br><br>" +
        "(C) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone.",
    chinese_explanation: "(D) '联络员'一词意味着促进人或组织之间紧密工作关系的沟通或合作。" +
        "<br><br>" +
        "(A) '障碍' 意味着阻挡某人道路或阻止或妨碍进步的事物。" +
        "<br><br>" +
        "(B) '障碍' 意味着阻止移动或进入的栅栏或其他障碍物。" +
        "<br><br>" +
        "(C) '妨碍' 意味着对某物或某人提供阻力、延迟或阻碍的事物。"
    },
    {
        id: 3,
        question: "The novel's __________ detracted from its plot, making it a tedious read for many.",
        chinese_question: "这部小说的 __________ 使得其情节失色，令许多人觉得枯燥乏味。",
        answers: [
                { option: "A", answer: "action", chinese_answer: "行动", chinese_romanization: "xíngdòng" },
                { option: "B", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
                { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
                { option: "D", answer: "conciseness", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'verbosity' means the quality of using more words than needed; wordiness." +
                "<br><br>" +
                "(A) 'action' means the fact or process of doing something." +
                "<br><br>" +
                "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
                "<br><br>" +
                "(D) 'conciseness' means the quality of being brief and to the point.",
        chinese_explanation: "(B) '冗长'一词意味着使用比需要更多的词；多话。" +
                "<br><br>" +
                "(A) '行动' 意味着做某事的事实或过程。" +
                "<br><br>" +
                "(C) '兴奋' 意味着极大的热情和渴望。" +
                "<br><br>" +
                "(D) '简洁' 意味着简明扼要的品质。"
    },
    {
        id: 4,
        question: "The manager’s decisions often touched on matters outside her __________, causing tension with other departments.",
        chinese_question: "经理的决定经常涉及她 __________ 之外的事务，引起了与其他部门的紧张关系。",
        answers: [
                { option: "A", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
                { option: "B", answer: "purview", chinese_answer: "范围", chinese_romanization: "fànwéi" },
                { option: "C", answer: "management", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" },
                { option: "D", answer: "jurisdiction", chinese_answer: "管辖", chinese_romanization: "guǎnxiá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'purview' means the scope of the influence or concerns of something." +
                "<br><br>" +
                "(A) 'control' means the power to influence or direct people's behavior or the course of events." +
                "<br><br>" +
                "(C) 'management' means the process of dealing with or controlling things or people." +
                "<br><br>" +
                "(D) 'jurisdiction' means the official power to make legal decisions and judgments.",
        chinese_explanation: "(B) '范围'一词指的是影响或关注的范围。" +
                "<br><br>" +
                "(A) '控制' 意味着影响或指导人们行为或事件过程的力量。" +
                "<br><br>" +
                "(C) '管理' 意味着处理或控制事物或人的过程。" +
                "<br><br>" +
                "(D) '管辖' 意味着做出法律决定和判断的官方权力。"
    },
    {
        id: 5,
        question: "The novel chronicles the __________ of a family over several generations, highlighting their struggles and triumphs.",
        chinese_question: "这部小说记录了一个家庭几代人的 __________，突出了他们的奋斗和胜利。",
        answers: [
                { option: "A", answer: "vicissitudes", chinese_answer: "变迁", chinese_romanization: "biànqiān" },
                { option: "B", answer: "stabilities", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
                { option: "C", answer: "constants", chinese_answer: "不变", chinese_romanization: "bùbiàn" },
                { option: "D", answer: "certainties", chinese_answer: "确定", chinese_romanization: "quèdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vicissitudes' means changes or variations, typically ones that are unwelcome or unpleasant." +
                "<br><br>" +
                "(B) 'stabilities' means the quality, state, or degree of being stable." +
                "<br><br>" +
                "(C) 'constants' means a situation or state of affairs that does not change." +
                "<br><br>" +
                "(D) 'certainties' means things that are known or proved to be true.",
        chinese_explanation: "(A) '变迁' 意味着变化或变动，通常是指不受欢迎或不愉快的变化。" +
                "<br><br>" +
                "(B) '稳定' 意味着稳定的质量、状态或程度。" +
                "<br><br>" +
                "(C) '不变' 意味着不变的情况或状态。" +
                "<br><br>" +
                "(D) '确定' 意味着已知或被证明为真的事情。"
    },
    {
        id: 6,
        question: "The politician's __________ during the debate showcased his sharp mind and sense of humor, leading him to win over many undecided voters.",
        chinese_question: "这位政治家在辩论中的 __________ 展示了他的机智和幽默感，使他赢得了许多未决定选民的支持。",
        answers: [
                { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "D", answer: "witticism", chinese_answer: "妙语", chinese_romanization: "miàoyǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'witticism' figuratively means a clever or witty remark." +
                "<br><br>" +
                "(A) 'ignorance' means lack of knowledge or information." +
                "<br><br>" +
                "(B) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(D) '妙语' 在此语境下意指聪明或机智的话语。" +
                "<br><br>" +
                "(A) '无知' 意味着缺乏知识或信息。" +
                "<br><br>" +
                "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(C) '犹豫' 意味着在说或做某事之前的暂停或犹豫。"
    },
    {
        id: 7,
        question: "The __________ of the monk's lifestyle was evident in his simple clothing and sparse living quarters.",
        chinese_question: "这位僧侣生活方式的 __________ 明显体现在他的简朴衣着和简陋的居住环境中。",
        answers: [
                { option: "A", answer: "luxury", chinese_answer: "豪华", chinese_romanization: "háohuá" },
                { option: "B", answer: "austerity", chinese_answer: "简朴", chinese_romanization: "jiǎnpǔ" },
                { option: "C", answer: "opulence", chinese_answer: "富裕", chinese_romanization: "fùyù" },
                { option: "D", answer: "extravagance", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'austerity' means extreme plainness and simplicity of style or appearance; conditions characterized by severity, sternness, or asceticism." +
                "<br><br>" +
                "(A) 'luxury' means the state of great comfort and extravagant living." +
                "<br><br>" +
                "(C) 'opulence' means great wealth or luxuriousness." +
                "<br><br>" +
                "(D) 'extravagance' means lack of restraint in spending money or using resources.",
        chinese_explanation: "(B) '简朴'一词意味着风格或外观的极端朴素；以严厉、严格或禁欲主义为特征的条件。" +
                "<br><br>" +
                "(A) '豪华' 意味着极度舒适和奢华的生活状态。" +
                "<br><br>" +
                "(C) '富裕' 意味着极大的财富或奢侈。" +
                "<br><br>" +
                "(D) '奢侈' 意味着在花钱或使用资源时缺乏节制。"
    },
    {
        id: 8,
        question: "Before finalizing the acquisition, the company performed thorough due __________ to identify any potential risks.",
        chinese_question: "在完成收购之前，公司进行了彻底的尽 __________ 以识别任何潜在风险。",
        answers: [
                { option: "A", answer: "diligence", chinese_answer: "勤", chinese_romanization: "qín" },
                { option: "B", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
                { option: "C", answer: "haste", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
                { option: "D", answer: "oversight", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diligence' means careful and persistent work or effort, particularly in the context of assessing a business or investment opportunity." +
                "<br><br>" +
                "(B) 'negligence' means failure to take proper care in doing something." +
                "<br><br>" +
                "(C) 'haste' means excessive speed or urgency of movement or action; hurry." +
                "<br><br>" +
                "(D) 'oversight' means an unintentional failure to notice or do something.",
        chinese_explanation: "(A) '尽勤' 意味着仔细和持续的工作或努力，特别是在评估业务或投资机会时。" +
                "<br><br>" +
                "(B) '疏忽' 意味着未能妥善处理某事。" +
                "<br><br>" +
                "(C) '匆忙' 意味着过度的速度或行动的紧迫性；急忙。" +
                "<br><br>" +
                "(D) '忽略' 意味着无意中未能注意或做某事。"
    },
    {
        id: 9,
        question: "The __________ of their interests made them perfect partners for the project, as they both shared a passion for environmental conservation.",
        chinese_question: "他们兴趣的 __________ 使他们成为项目的完美合作伙伴，因为他们都对环境保护充满热情。",
        answers: [
                { option: "A", answer: "congruity", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
                { option: "B", answer: "disparity", chinese_answer: "差异", chinese_romanization: "chāyì" },
                { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
                { option: "D", answer: "divergence", chinese_answer: "分歧", chinese_romanization: "fēnqí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'congruity' means the quality of being in agreement or harmony." +
                "<br><br>" +
                "(B) 'disparity' means a great difference." +
                "<br><br>" +
                "(C) 'conflict' means a serious disagreement or argument." +
                "<br><br>" +
                "(D) 'divergence' means the process or state of diverging.",
        chinese_explanation: "(A) '一致性' 意味着协议或和谐的质量。" +
                "<br><br>" +
                "(B) '差异' 意味着巨大的差异。" +
                "<br><br>" +
                "(C) '冲突' 意味着严重的分歧或争论。" +
                "<br><br>" +
                "(D) '分歧' 意味着分歧的过程或状态。"
    },
    {
        id: 10,
    question: "He was a __________ at hiking, so he chose an easy trail for his first adventure.",
    chinese_question: "他是徒步旅行的 __________，所以他选择了一条简单的小径作为他的首次冒险。",
    answers: [
        { option: "A", answer: "professional", chinese_answer: "专业人士", chinese_romanization: "zhuānyè rénshì" },
        { option: "B", answer: "seasoned", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" },
        { option: "C", answer: "neophyte", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
        { option: "D", answer: "instructor", chinese_answer: "教练", chinese_romanization: "jiàoliàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'neophyte' means a person who is new to a subject, skill, or belief." +
        "<br><br>" +
        "(A) 'professional' means a person engaged or qualified in a profession." +
        "<br><br>" +
        "(B) 'seasoned' means having a lot of experience of doing something and therefore knowing how to do it well." +
        "<br><br>" +
        "(D) 'instructor' means a person who teaches something.",
    chinese_explanation: "(C) '新手' 意味着在某一学科、技能或信仰方面的新手。" +
        "<br><br>" +
        "(A) '专业人士' 意味着从事或有资格从事某职业的人。" +
        "<br><br>" +
        "(B) '老练的' 意味着有很多经验，因此知道如何做得很好。" +
        "<br><br>" +
        "(D) '教练' 意味着教授某事的人。"
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
