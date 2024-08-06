// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "Her perseverance through difficult times __________ others to stay strong in the face of adversity.",
chinese_question: "她在艰难时期的坚持 __________ 了其他人在逆境中保持坚强。",
answers: [
    { option: "A", answer: "discouraged", chinese_answer: "使沮丧", chinese_romanization: "shǐ jǔsàng" },
    { option: "B", answer: "bored", chinese_answer: "使无聊", chinese_romanization: "shǐ wúliáo" },
    { option: "C", answer: "inspired", chinese_answer: "激励", chinese_romanization: "jīlì" },
    { option: "D", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
],
correctAnswer: "C",
explanation: "(C) 'inspired' means to fill someone with the urge or ability to do or feel something, especially to do something creative." +
    "<br><br>" +
    "(A) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
    "<br><br>" +
    "(B) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
    "<br><br>" +
    "(D) 'confused' means to make someone unable to think clearly or understand.",
chinese_explanation: "(C) '激励' 意味着让某人有做某事的冲动或能力，特别是做一些创造性的事情。" +
    "<br><br>" +
    "(A) '使沮丧' 意味着使某人失去信心或热情。" +
    "<br><br>" +
    "(B) '使无聊' 意味着因为无所事事或对当前活动缺乏兴趣而感到厌倦和不耐烦。" +
    "<br><br>" +
    "(D) '使困惑' 意味着使某人无法清晰地思考或理解。"
    },
    {
        id: 2,
        question: "The politician decided to __________ a new environmental policy, advocating for sustainable practices and green technologies.",
        chinese_question: "这位政治家决定__________一项新的环境政策，倡导可持续做法和绿色技术。",
        answers: [
                { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "B", answer: "espouse", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'espouse' means to adopt or support a cause, belief, or way of life." +
            "<br><br>" +
            "(A) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(C) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '支持' 意味着采用或支持某个事业、信仰或生活方式。" +
            "<br><br>" +
            "(A) '拒绝' 意味着认为不合格、不接受或有缺陷。" +
            "<br><br>" +
            "(C) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
question: "He constantly __________ against modern technology, believing it is ruining society.",
chinese_question: "他不断 __________ 抨击现代技术，认为它正在毁掉社会。",
answers: [
        { option: "A", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "B", answer: "inveighed", chinese_answer: "抨击", chinese_romanization: "pēngjí" },
        { option: "C", answer: "embraced", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
        { option: "D", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
],
correctAnswer: "B",
explanation: "(B) 'inveighed' used figuratively means to speak or write about something with great hostility." +
        "<br><br>" +
        "(A) 'praised' means to express warm approval or admiration of." +
        "<br><br>" +
        "(C) 'embraced' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(D) 'encouraged' means to give support, confidence, or hope to someone.",
chinese_explanation: "(B) '抨击' 在比喻意义上指以强烈的敌意谈论或写作某事。" +
        "<br><br>" +
        "(A) '赞扬' 意味着表达热烈的认可或钦佩。" +
        "<br><br>" +
        "(C) '拥抱' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 4,
        question: "The project manager had to __________ the team members to keep the project on track and meet the deadlines.",
        chinese_question: "项目经理不得不 __________ 团队成员，以保持项目进度并按时完成。",
        answers: [
            { option: "A", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "corral", chinese_answer: "聚集", chinese_romanization: "jùjí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'corral' means to gather and direct people towards a specific goal." +
            "<br><br>" +
            "(A) 'disperse' means to distribute or spread over a wide area." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to acknowledge." +
            "<br><br>" +
            "(C) 'reject' means to dismiss as inadequate or unacceptable.",
        chinese_explanation: "(D) '聚集' 意味着聚集和引导人们朝着特定目标前进。" +
            "<br><br>" +
            "(A) '分散' 意味着分布或传播在广泛区域。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝承认。" +
            "<br><br>" +
            "(C) '拒绝' 意味着认为不够好或不可接受。"
    },
    {
        id: 5,
        question: "The team leader was able to __________ the group into working extra hours by emphasizing the importance of the project.",
        chinese_question: "团队领导通过强调项目的重要性 __________ 团队加班。",
        answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "C", answer: "cajole", chinese_answer: "劝诱", chinese_romanization: "quànyòu" },
        { option: "D", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cajole' means to persuade someone to do something by sustained coaxing or flattery." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(D) 'demand' means to ask authoritatively or brusquely.",
        chinese_explanation: "(C) '劝诱' 意味着通过持续的劝说或奉承来让某人做某事。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
            "<br><br>" +
            "(D) '要求' 意味着以权威或粗鲁的方式要求。"
    },
    {
        id: 6,
        question: "The government plans to __________ private land to create a national park.",
        chinese_question: "政府计划 __________ 私人土地以创建一个国家公园。",
        answers: [
                { option: "A", answer: "expropriate", chinese_answer: "征用", chinese_romanization: "zhēngyòng" },
                { option: "B", answer: "privatize", chinese_answer: "私有化", chinese_romanization: "sīyǒuhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'expropriate' means to take away property from its owner for public use, used figuratively here." +
            "<br><br>" +
            "(B) 'privatize' means to transfer from public or government control to private ownership." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'destroy' means to cause damage to something so that it no longer exists.",
        chinese_explanation: "(A) '征用' 意味着为了公共用途而从其所有者手中夺走财产，这里是比喻用法。" +
            "<br><br>" +
            "(B) '私有化' 意味着从公共或政府控制转移到私人所有。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '破坏' 意味着对某物造成损害，使其不复存在。"
    },
    {
        id: 7,
      question: "The new software aims to __________ the outdated system currently in use.",
      chinese_question: "新软件旨在 __________ 当前使用的过时系统。",
      answers: [
        { option: "A", answer: "supplant", chinese_answer: "取代", chinese_romanization: "qǔdài" },
        { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "C", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
        { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
      ],
      correctAnswer: "A",
      explanation: "(A) 'supplant' means to replace or take the place of." +
        "<br><br>" +
        "(B) 'support' means to give assistance to." +
        "<br><br>" +
        "(C) 'maintain' means to keep in an existing state." +
        "<br><br>" +
        "(D) 'overlook' means to fail to notice something.",
      chinese_explanation: "(A) '取代' 意味着替换或取代。" +
        "<br><br>" +
        "(B) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(C) '维持' 意味着保持现有状态。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 8,
        question: "The company __________ its marketing strategy by using data analysis and customer feedback to better appeal to its target audience.",
        chinese_question: "公司通过使用数据分析和客户反馈__________了其营销策略，以更好地吸引目标受众。",
        answers: [
                { option: "A", answer: "abandoned", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "B", answer: "honed", chinese_answer: "改进", chinese_romanization: "gǎijìn" },
                { option: "C", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
                { option: "D", answer: "destroyed", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'honed' used figuratively means to refine or perfect a plan or strategy." +
                "<br><br>" +
                "(A) 'abandoned' means to give up completely." +
                "<br><br>" +
                "(C) 'concealed' means to keep something secret or hidden." +
                "<br><br>" +
                "(D) 'destroyed' means to put an end to the existence of something by damaging or attacking it.",
        chinese_explanation: "(B) '改进' 在比喻意义上指改进或完善计划或策略。" +
                "<br><br>" +
                "(A) '放弃' 意味着完全放弃。" +
                "<br><br>" +
                "(C) '隐藏' 意味着保守秘密或隐藏某事。" +
                "<br><br>" +
                "(D) '毁坏' 意味着通过损坏或攻击使某物不存在。"
    },
    {
        id: 9,
        question: "In many cultures, ancient rulers were often __________ and worshipped as gods.",
        chinese_question: "在许多文化中，古代统治者常常被 __________ 并被当作神来崇拜。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "punished", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
            { option: "D", answer: "deified", chinese_answer: "神化", chinese_romanization: "shénhuà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'deified' means to worship or regard someone as a god." +
            "<br><br>" +
            "(A) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(C) 'punished' means to inflict a penalty or sanction on someone for an offense.",
        chinese_explanation: "(D) '神化' 意味着把某人当作神来崇拜或视为神。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出某人或某物的缺点。" +
            "<br><br>" +
            "(C) '惩罚' 意味着对某人施加处罚或制裁。"
    },
    {
        id: 10,
  question: "Her tendency to __________ her children's efforts by criticizing their mistakes and comparing them to others often left them feeling discouraged.",
  chinese_question: "她通过批评孩子们的错误和将他们与他人比较来__________他们的努力，这常常让他们感到气馁。",
  answers: [
    { option: "A", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
    { option: "B", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
    { option: "C", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
    { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'disparage' figuratively means to regard or represent as being of little worth." +
    "<br><br>" +
    "(B) 'validate' means to check or prove the validity or accuracy of (something)." +
    "<br><br>" +
    "(C) 'promote' means to further the progress of (something, especially a cause, venture, or aim); support or actively encourage." +
    "<br><br>" +
    "(D) 'simplify' means to make (something) simpler or easier to do or understand.",
  chinese_explanation: "(A) '贬低' 在此语境下比喻认为或表现出某事物没有价值。" +
    "<br><br>" +
    "(B) '验证' 意味着检查或证明（某事）的有效性或准确性。" +
    "<br><br>" +
    "(C) '促进' 意味着推进（某事，特别是事业、风险或目标）；支持或积极鼓励。" +
    "<br><br>" +
    "(D) '简化' 意味着使（某事物）更简单或更容易做或理解。"
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
