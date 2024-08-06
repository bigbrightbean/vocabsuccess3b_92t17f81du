// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He was __________ in his efforts to improve the community, working day and night.",
        chinese_question: "他在改善社区的努力中__________，日夜工作。",
        answers: [
            { option: "A", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "B", answer: "zealous", chinese_answer: "热心的", chinese_romanization: "rèxīn de" },
            { option: "C", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "D", answer: "unmotivated", chinese_answer: "缺乏动力的", chinese_romanization: "quēfá dònglì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zealous' means having or showing great energy or enthusiasm in pursuit of a cause or objective." +
            "<br><br>" +
            "(A) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(C) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(D) 'unmotivated' means lacking enthusiasm or interest.",
        chinese_explanation: "(B) '热心的' 意味着对追求某一事业或目标表现出极大的精力或热情。" +
            "<br><br>" +
            "(A) '被动的' 意味着接受或允许发生的事情或别人所做的事情，没有积极的回应或反抗。" +
            "<br><br>" +
            "(C) '懒惰的' 意味着不愿工作或使用能量的。" +
            "<br><br>" +
            "(D) '缺乏动力的' 意味着缺乏热情或兴趣的。"
    },
    {
        id: 2,
        question: "Her __________ demeanor helped calm everyone around her during the crisis.",
        chinese_question: "她的 __________ 举止在危机期间帮助平静了周围的所有人。",
        answers: [
            { option: "A", answer: "agitated", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "B", answer: "anxious", chinese_answer: "忧虑的", chinese_romanization: "yōulǜ de" },
            { option: "C", answer: "tranquil", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "D", answer: "frantic", chinese_answer: "狂乱的", chinese_romanization: "kuángluàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tranquil' means free from disturbance; calm." +
            "<br><br>" +
            "(A) 'agitated' means feeling or appearing troubled or nervous." +
            "<br><br>" +
            "(B) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(D) 'frantic' means wild or distraught with fear, anxiety, or other emotion.",
        chinese_explanation: "(C) '宁静的' 意味着没有干扰；平静的。" +
            "<br><br>" +
            "(A) '焦虑的' 意味着感到或显得不安或紧张的。" +
            "<br><br>" +
            "(B) '忧虑的' 意味着经历担忧、不安或紧张的。" +
            "<br><br>" +
            "(D) '狂乱的' 意味着因恐惧、焦虑或其他情感而疯狂或发狂的。"
    },
    {
        id: 3,
        question: "His __________ approach to business negotiations earned him respect but also some enemies.",
        chinese_question: "他在商业谈判中的__________方法赢得了尊重，但也树立了一些敌人。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "C", answer: "ambiguous", chinese_answer: "含糊的", chinese_romanization: "hánhú de" },
            { option: "D", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'forthright' means direct and outspoken; straightforward and honest." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning.",
        chinese_explanation: "(D) '直率的'一词意味着直接和直言不讳的；坦率和诚实的。" +
            "<br><br>" +
            "(A) '模糊的' 意味着不确定的、无限定的或不清楚的性格或意义。" +
            "<br><br>" +
            "(B) '微妙的' 意味着如此精细或精确以至于难以分析或描述的。" +
            "<br><br>" +
            "(C) '含糊的' 意味着有多种解释的；没有一个明显的意义。"
    },
    {
        id: 4,
    question: "Corruption is __________ in many parts of the world, making it a significant barrier to progress.",
    chinese_question: "腐败在世界的许多地方都很__________，成为进步的重要障碍。",
    answers: [
        { option: "A", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
        { option: "B", answer: "prevalent", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" },
        { option: "C", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
        { option: "D", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'prevalent' means widespread in a particular area or at a particular time. Figuratively, it can mean very common or widespread." +
        "<br><br>" +
        "(A) 'rare' means not occurring very often." +
        "<br><br>" +
        "(C) 'unusual' means not habitually or commonly occurring or done." +
        "<br><br>" +
        "(D) 'scarce' means insufficient for the demand.",
    chinese_explanation: "(B) '普遍的'一词意味着在特定地区或特定时间内广泛存在的。比喻地，它可以表示非常常见或广泛的。" +
        "<br><br>" +
        "(A) '罕见的' 意味着不经常发生的。" +
        "<br><br>" +
        "(C) '不寻常的' 意味着不习惯或不常见的。" +
        "<br><br>" +
        "(D) '稀缺的' 意味着不足以满足需求的。"
    },
    {
        id: 5,
        question: "The politician's __________ remarks during the interview made it difficult to understand his true position on the issue.",
        chinese_question: "这位政治家在采访中的 __________ 言论使人难以理解他在这个问题上的真实立场。",
        answers: [
                { option: "A", answer: "oblique", chinese_answer: "间接的", chinese_romanization: "jiànjiē de" },
                { option: "B", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
                { option: "C", answer: "straightforward", chinese_answer: "简单明了的", chinese_romanization: "jiǎndān míngliǎo de" },
                { option: "D", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'oblique' means not explicit or done in a direct way." + 
            "<br><br>" + 
            "(B) 'direct' means moving from one place to another by the shortest way without changing direction or stopping." + 
            "<br><br>" + 
            "(C) 'straightforward' means uncomplicated and easy to understand." + 
            "<br><br>" + 
            "(D) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt.",
        chinese_explanation: "(A) '间接的' 意味着不明确或不直接进行的。" +
            "<br><br>" +
            "(B) '直接的' 意味着从一个地方到另一个地方最短的方式移动，没有改变方向或停下。" +
            "<br><br>" +
            "(C) '简单明了的' 意味着不复杂的，容易理解的。" +
            "<br><br>" +
            "(D) '明确的' 意味着清楚详细地陈述的，没有混淆或怀疑的余地."
    },
    {
        id: 6,
        question: "Their relationship had a __________ start but eventually settled into stability.",
        chinese_question: "他们的关系有一个__________的开始，但最终稳定下来。",
        answers: [
            { option: "A", answer: "smooth", chinese_answer: "平稳的", chinese_romanization: "píngwěn de" },
            { option: "B", answer: "tumultuous", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
            { option: "C", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "stable", chinese_answer: "稳固的", chinese_romanization: "wěngù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tumultuous' means excited, confused, or disorderly." +
            "<br><br>" +
            "(A) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
            "<br><br>" +
            "(C) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'stable' means not likely to change or fail; firmly established.",
        chinese_explanation: "(B) '动荡的' 意味着激动、困惑或混乱的。" +
            "<br><br>" +
            "(A) '平稳的' 意味着具有均匀和规则的表面或一致性；没有可察觉的凸起、团块或凹痕。" +
            "<br><br>" +
            "(C) '稳定的' 意味着牢固固定、支撑或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(D) '稳固的' 意味着不太可能改变或失败；稳固建立的。"
    },
    {
        id: 7,
        question: "Her __________ attitude was contagious, lifting everyone's spirits during the tough project.",
        chinese_question: "她的 __________ 态度是有感染力的，在艰难的项目中提升了每个人的精神。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "B", answer: "gloomy", chinese_answer: "阴郁的", chinese_romanization: "yīnyù de" },
            { option: "C", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'upbeat' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'morose' means sullen and ill-tempered.",
        chinese_explanation: "(C) '乐观的' 意味着开朗和乐观的。" +
            "<br><br>" +
            "(A) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情会发生。" +
            "<br><br>" +
            "(B) '阴郁的' 意味着黑暗或光线不足，尤其是看起来令人沮丧或可怕的。" +
            "<br><br>" +
            "(D) '忧郁的' 意味着郁郁寡欢的，脾气暴躁的。"
    },
    {
        id: 8,
        question: "His __________ habits caused his work to be consistently late and poorly done.",
        chinese_question: "他__________的习惯导致他的工作总是迟到且质量差。",
        answers: [
            { option: "A", answer: "slovenly", chinese_answer: "邋遢", chinese_romanization: "lāta" },
            { option: "B", answer: "efficient", chinese_answer: "高效", chinese_romanization: "gāoxiào" },
            { option: "C", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "D", answer: "punctual", chinese_answer: "准时", chinese_romanization: "zhǔnshí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'slovenly' means careless; excessively casual." +
            "<br><br>" +
            "(B) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(C) 'diligent' means showing care and effort in one's work or duties." +
            "<br><br>" +
            "(D) 'punctual' means happening or doing something at the agreed or proper time.",
        chinese_explanation: "(A) '邋遢'一词意味着粗心大意；过分随便。" +
            "<br><br>" +
            "(B) '高效' 意味着以最少的浪费努力或费用实现最大生产力。" +
            "<br><br>" +
            "(C) '勤奋' 意味着在工作或职责上表现出关心和努力。" +
            "<br><br>" +
            "(D) '准时' 意味着在约定或适当时间发生或做某事."
    },
    {
        id: 9,
        question: "The artist was __________ for inspiration, searching desperately for a new idea.",
        chinese_question: "这位艺术家 __________ 于寻找灵感，拼命寻找一个新想法。",
        answers: [
            { option: "A", answer: "thriving", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "starved", chinese_answer: "挨饿", chinese_romanization: "ái'è" },
            { option: "C", answer: "flourishing", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
            { option: "D", answer: "nourished", chinese_answer: "营养充足", chinese_romanization: "yíngyǎng chōngzú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'starved' means to suffer from a severe lack of something necessary." +
            "<br><br>" +
            "(A) 'thriving' means growing or developing well or vigorously." +
            "<br><br>" +
            "(C) 'flourishing' means developing rapidly and successfully; thriving." +
            "<br><br>" +
            "(D) 'nourished' means provided with the food or other substances necessary for growth, health, and good condition.",
        chinese_explanation: "(B) '挨饿' 意味着严重缺乏某些必要的东西。" +
            "<br><br>" +
            "(A) '繁荣' 意味着良好或旺盛地生长或发展。" +
            "<br><br>" +
            "(C) '兴旺' 意味着快速发展并取得成功；繁荣的。" +
            "<br><br>" +
            "(D) '营养充足' 意味着提供生长、健康和良好状况所需的食物或其他物质。"
    },
    {
        id: 10,
    question: "Despite his __________ demeanor, he had a wealth of interesting stories to share.",
    chinese_question: "尽管他的举止 __________，但他有很多有趣的故事可以分享。",
    answers: [
        { option: "A", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
        { option: "B", answer: "charismatic", chinese_answer: "有魅力的", chinese_romanization: "yǒu mèilì de" },
        { option: "C", answer: "prosaic", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
        { option: "D", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'prosaic' means having the style or diction of prose; lacking poetic beauty; commonplace; unromantic." +
        "<br><br>" +
        "(A) 'lively' means full of life and energy." +
        "<br><br>" +
        "(B) 'charismatic' means exercising a compelling charm that inspires devotion in others." +
        "<br><br>" +
        "(D) 'dynamic' means characterized by constant change, activity, or progress.",
    chinese_explanation: "(C) '平凡的' 意味着具有散文的风格或措辞；缺乏诗意美；平凡的；不浪漫的。" +
        "<br><br>" +
        "(A) '活泼的' 意味着充满活力的。" +
        "<br><br>" +
        "(B) '有魅力的' 意味着行使一种吸引人的魅力，激发他人的忠诚。" +
        "<br><br>" +
        "(D) '动态的' 意味着以不断变化、活动或进步为特征的。"
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
