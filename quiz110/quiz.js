// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To understand the full picture, one must __________ the past events with the present circumstances to see the patterns and underlying causes.",
        chinese_question: "要理解全貌，必须将过去的事件与当前的情况 __________ 在一起，以看清模式和潜在的原因。",
        answers: [
                { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
                { option: "B", answer: "concatenate", chinese_answer: "连接", chinese_romanization: "liánjiē" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concatenate' means to link things together in a series or chain." +
            "<br><br>" +
            "(A) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(B) '连接' 意味着将事物按顺序或链条连接在一起。" +
            "<br><br>" +
            "(A) '分开' 意味着使移动或分离。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 2,
        question: "He worked hard to __________ his schedule of redundant meetings to increase productivity.",
        chinese_question: "他努力将日程表中的重复会议 __________ 以提高生产力。",
        answers: [
                { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" },
                { option: "B", answer: "disencumber", chinese_answer: "解脱", chinese_romanization: "jiětuō" },
                { option: "C", answer: "fill", chinese_answer: "填满", chinese_romanization: "tiánmǎn" },
                { option: "D", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disencumber' used figuratively means to free from unnecessary elements." +
                "<br><br>" +
                "(A) 'complicate' means to make something more difficult or confusing." +
                "<br><br>" +
                "(C) 'fill' means to make full." +
                "<br><br>" +
                "(D) 'burden' means to load heavily.",
        chinese_explanation: "(B) '解脱' 在比喻意义上指去除不必要的元素。" +
                "<br><br>" +
                "(A) '复杂化' 意味着使某事变得更困难或更混乱。" +
                "<br><br>" +
                "(C) '填满' 意味着使充满。" +
                "<br><br>" +
                "(D) '负担' 意味着重重地装载。"
    },
    {
        id: 3,
        question: "He tends to __________ easily when under pressure.",
        chinese_question: "他在压力下容易 __________。",
        answers: [
                { option: "A", answer: "fluster", chinese_answer: "慌乱", chinese_romanization: "huāngluàn" },
                { option: "B", answer: "excel", chinese_answer: "擅长", chinese_romanization: "shàncháng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "focus", chinese_answer: "集中注意力", chinese_romanization: "jízhōng zhùyì lì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fluster' means to make someone agitated or confused." +
                "<br><br>" +
                "(B) 'excel' means to be exceptionally good at or proficient in an activity or subject." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'focus' means to concentrate attention or effort.",
        chinese_explanation: "(A) '慌乱' 意味着使某人感到不安或困惑。" +
                "<br><br>" +
                "(B) '擅长' 意味着在某个活动或学科上非常出色。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '集中注意力' 意味着集中注意力或努力。"
    },
    {
        id: 4,
question: "She had to __________ with her emotions after the sudden loss of her pet.",
chinese_question: "在宠物突然离世后，她不得不 __________ 自己的情绪。",
answers: [
        { option: "A", answer: "grapple", chinese_answer: "努力应对", chinese_romanization: "nǔlì yìngduì" },
        { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" }
],
correctAnswer: "A",
explanation: "(A) 'grapple' means to struggle or work hard to deal with or overcome something." +
        "<br><br>" +
        "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'rest' means to cease work or movement in order to relax, refresh oneself, or recover strength.",
chinese_explanation: "(A) '努力应对' 意味着努力处理或克服某事。" +
        "<br><br>" +
        "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '休息' 意味着停止工作或活动以放松、恢复自己或恢复体力。"
    },
    {
        id: 5,
        question: "The professor __________ the main points of the upcoming lecture in his email to the students.",
        chinese_question: "教授在给学生的电子邮件中 __________ 了即将到来的讲座的要点。",
        answers: [
        { option: "A", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "B", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "adumbrated", chinese_answer: "概述", chinese_romanization: "gàishù" },
        { option: "D", answer: "ignored", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adumbrated' means to outline or sketch broadly; to foreshadow or prefigure." +
            "<br><br>" +
            "(A) 'clarified' means to make a statement or situation less confused and more comprehensible." +
            "<br><br>" +
            "(B) 'concealed' means to keep something secret; prevent from being known or noticed." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '概述' 意味着大致勾勒或概述；预示或预示。" +
            "<br><br>" +
            "(A) '澄清' 意味着使陈述或情况不再混乱，更易于理解。" +
            "<br><br>" +
            "(B) '隐藏' 意味着保密；防止被知道或注意。" +
            "<br><br>" +
            "(D) '忽略' 意味着拒绝注意或承认。"
    },
    {
        id: 6,
    question: "The heiress liked to __________ her wealth, often boasting about her luxury cars, designer clothes, and extravagant vacations.",
    chinese_question: "那位女继承人喜欢 __________ 她的财富，经常夸耀她的豪车、名牌服装和奢华假期。",
    answers: [
        { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "downplay", chinese_answer: "轻描淡写", chinese_romanization: "qīngmiáo-dànxiě" },
        { option: "C", answer: "understate", chinese_answer: "低调处理", chinese_romanization: "dīdiào chǔlǐ" },
        { option: "D", answer: "vaunt", chinese_answer: "夸耀", chinese_romanization: "kuāyào" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'vaunt' means to boast about or praise something, especially excessively." +
        "<br><br>" +
        "(A) 'conceal' means to hide or keep secret." +
        "<br><br>" +
        "(B) 'downplay' means to make something appear less important than it really is." +
        "<br><br>" +
        "(C) 'understate' means to describe or represent something as being smaller or less important than it actually is.",
    chinese_explanation: "(D) '夸耀' 意味着吹嘘或赞美某事，尤其是过度地。" +
        "<br><br>" +
        "(A) '隐藏' 意味着隐藏或保密。" +
        "<br><br>" +
        "(B) '轻描淡写' 意味着使某事看起来不如实际重要。" +
        "<br><br>" +
        "(C) '低调处理' 意味着将某事描述或表现得比实际小或不重要。"
    },
    {
        id: 7,
        question: "Disregarding its cultural significance for profit, greedy developers sought to __________ the historic neighborhood for their new high-rise project.",
        chinese_question: "无视其文化意义，只为追求利润，贪婪的开发商企图 __________ 这个历史街区来进行他们的新高层项目。",
        answers: [
                { option: "A", answer: "restore", chinese_answer: "恢复", chinese_romanization: "huīfù" },
                { option: "B", answer: "despoil", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
                { option: "C", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "D", answer: "beautify", chinese_answer: "美化", chinese_romanization: "měihuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'despoil' used figuratively means to take away or ruin something valuable." +
                "<br><br>" +
                "(A) 'restore' means to bring back to a former condition." +
                "<br><br>" +
                "(C) 'preserve' means to maintain something in its original or existing state." +
                "<br><br>" +
                "(D) 'beautify' means to make more attractive.",
        chinese_explanation: "(B) '毁坏' 在比喻意义上指夺走或毁坏有价值的东西。" +
                "<br><br>" +
                "(A) '恢复' 意味着恢复到以前的状态。" +
                "<br><br>" +
                "(C) '保护' 意味着维持某物的原始或现有状态。" +
                "<br><br>" +
                "(D) '美化' 意味着使更有吸引力。"
    },
    {
        id: 8,
        question: "The strong wind __________ leaves all over the yard until they covered the lawn and blocked the pathways.",
        chinese_question: "大风把树叶 __________ 在整个院子里，直到它们覆盖了草坪并堵塞了小径。",
        answers: [
        { option: "A", answer: "gathered", chinese_answer: "聚集", chinese_romanization: "jùjí" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "bestrewed", chinese_answer: "散布", chinese_romanization: "sànbù" },
        { option: "D", answer: "cleaned", chinese_answer: "清洁", chinese_romanization: "qīngjié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bestrewed' means to scatter or spread things over a surface." +
            "<br><br>" +
            "(A) 'gathered' means to bring together and take in from scattered places or sources." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'cleaned' means to make (something or someone) free of dirt, marks, or mess, especially by washing, wiping, or brushing.",
        chinese_explanation: "(C) '散布' 意味着将东西散布在表面上。" +
            "<br><br>" +
            "(A) '聚集' 意味着从分散的地方或来源收集在一起。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '清洁' 意味着使某物或某人没有污垢、痕迹或杂乱，特别是通过清洗、擦拭或刷洗。"
    },
    {
        id: 9,
        question: "Recognizing the severity of the situation, the chairman decided to __________ a special meeting with all department heads to address the urgent issues.",
        chinese_question: "认识到事态的严重性，主席决定召集各部门负责人举行一次特别会议来解决紧急问题。",
        answers: [
                { option: "A", answer: "cancel", chinese_answer: "取消", chinese_romanization: "qǔxiāo" },
                { option: "B", answer: "convoke", chinese_answer: "召集", chinese_romanization: "zhàojí" },
                { option: "C", answer: "delay", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convoke' means to call together or summon a meeting or assembly." +
            "<br><br>" +
            "(A) 'cancel' means to decide or announce that an event will not take place." +
            "<br><br>" +
            "(C) 'delay' means to make someone or something late or slow." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '召集' 意味着召集或召唤会议或集会。" +
            "<br><br>" +
            "(A) '取消' 意味着决定或宣布某个事件将不会发生。" +
            "<br><br>" +
            "(C) '推迟' 意味着使某人或某物迟到或缓慢。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
    question: "Years of corruption had __________ the integrity of the political system and left it vulnerable to further exploitation.",
    chinese_question: "多年的腐败已经 __________ 了政治体制的完整性，使其容易受到进一步的剥削。",
    answers: [
        { option: "A", answer: "bolstered", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "restored", chinese_answer: "恢复", chinese_romanization: "huīfù" },
        { option: "C", answer: "corroded", chinese_answer: "腐蚀", chinese_romanization: "fǔshí" },
        { option: "D", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'corroded' means damaged or deteriorated, especially gradually." +
        "<br><br>" +
        "(A) 'bolstered' means supported or strengthened." +
        "<br><br>" +
        "(B) 'restored' means brought back to a previous state." +
        "<br><br>" +
        "(D) 'improved' means made better.",
    chinese_explanation: "(C) '腐蚀' 意味着被损坏或恶化，特别是逐渐地。" +
        "<br><br>" +
        "(A) '支持' 意味着支持或加强。" +
        "<br><br>" +
        "(B) '恢复' 意味着恢复到以前的状态。" +
        "<br><br>" +
        "(D) '改善' 意味着使变得更好。"
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
