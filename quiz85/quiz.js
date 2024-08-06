// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The negotiations were hindered by the __________ between the two parties, stemming from past conflicts.",
        chinese_question: "谈判因双方之间的 __________ 而受阻，源于过去的冲突。",
        answers: [
                { option: "A", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
                { option: "B", answer: "rancour", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
                { option: "C", answer: "understanding", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
                { option: "D", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rancour' means a feeling of deep and bitter anger and ill-will." +
                "<br><br>" +
                "(A) 'harmony' means the state of being in agreement or concord." +
                "<br><br>" +
                "(C) 'understanding' means sympathetic awareness or tolerance." +
                "<br><br>" +
                "(D) 'cooperation' means the process of working together to the same end.",
        chinese_explanation: "(B) '怨恨'一词意味着深刻而苦涩的愤怒和恶意。" +
                "<br><br>" +
                "(A) '和谐' 意味着一致或和睦的状态。" +
                "<br><br>" +
                "(C) '理解' 意味着同情的意识或宽容。" +
                "<br><br>" +
                "(D) '合作' 意味着为了同一个目的而一起工作的过程。"
    },
    {
        id: 2,
    question: "Growing up in an academic __________, she developed a love for learning and intellectual pursuits.",
    chinese_question: "在学术 __________ 中长大，她培养了对学习和智力追求的热爱。",
    answers: [
            { option: "A", answer: "wasteland", chinese_answer: "荒地", chinese_romanization: "huāngdì" },
            { option: "B", answer: "desert", chinese_answer: "沙漠", chinese_romanization: "shāmò" },
            { option: "C", answer: "void", chinese_answer: "空虚", chinese_romanization: "kōngxū" },
            { option: "D", answer: "milieu", chinese_answer: "环境", chinese_romanization: "huánjìng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'milieu' means a person's social environment." +
            "<br><br>" +
            "(A) 'wasteland' means an unused area of land that has become barren or overgrown." +
            "<br><br>" +
            "(B) 'desert' means a barren area of land where little precipitation occurs and consequently living conditions are hostile for plant and animal life." +
            "<br><br>" +
            "(C) 'void' means a completely empty space.",
    chinese_explanation: "(D) '环境'一词意味着一个人的社会环境。" +
            "<br><br>" +
            "(A) '荒地' 意味着一块未使用的土地，已变得荒芜或杂草丛生。" +
            "<br><br>" +
            "(B) '沙漠' 意味着降水很少的贫瘠土地，因此生活条件对植物和动物来说是恶劣的。" +
            "<br><br>" +
            "(C) '空虚' 意味着一个完全空的空间。"
    },
    {
        id: 3,
        question: "The senator met with his __________ to discuss their concerns about the new legislation.",
        chinese_question: "参议员与他的 __________ 会面，讨论他们对新立法的担忧。",
        answers: [
                { option: "A", answer: "audience", chinese_answer: "观众", chinese_romanization: "guānzhòng" },
                { option: "B", answer: "constituents", chinese_answer: "选民", chinese_romanization: "xuǎnmín" },
                { option: "C", answer: "opponents", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
                { option: "D", answer: "friends", chinese_answer: "朋友", chinese_romanization: "péngyǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'constituents' means people who are represented by someone in a governmental or organizational position." +
                "<br><br>" +
                "(A) 'audience' means the assembled spectators or listeners at a public event." +
                "<br><br>" +
                "(C) 'opponents' means people who compete against or fight each other in a contest, game, or argument." +
                "<br><br>" +
                "(D) 'friends' means people whom one knows and with whom one has a bond of mutual affection.",
        chinese_explanation: "(B) '选民'一词意味着由某人代表的政府或组织中的人们。" +
                "<br><br>" +
                "(A) '观众' 意味着在公共活动中的观众或听众。" +
                "<br><br>" +
                "(C) '对手' 意味着在比赛、游戏或争论中互相竞争或对抗的人。" +
                "<br><br>" +
                "(D) '朋友' 意味着一个人认识并与之有相互感情联系的人。"
    },
    {
        id: 4,
        question: "The brand's __________ in the fashion industry was evident as its styles set the trends each season.",
        chinese_question: "该品牌在时尚行业的 __________ 很明显，因为它的风格每季都引领潮流。",
        answers: [
                { option: "A", answer: "hegemony", chinese_answer: "霸权", chinese_romanization: "bàquán" },
                { option: "B", answer: "obscurity", chinese_answer: "默默无闻", chinese_romanization: "mòmò wú wén" },
                { option: "C", answer: "inferiority", chinese_answer: "劣势", chinese_romanization: "lièshì" },
                { option: "D", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hegemony' figuratively means leadership or dominance, especially by one social group over others." +
                "<br><br>" +
                "(B) 'obscurity' means the state of being unknown, inconspicuous, or unimportant." +
                "<br><br>" +
                "(C) 'inferiority' means the condition of being lower in status or quality than another or others." +
                "<br><br>" +
                "(D) 'neutrality' means the state of not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(A) '霸权' 在此语境下意指一个社会团体对他人的领导或支配。" +
                "<br><br>" +
                "(B) '默默无闻' 意味着未知、不显眼或不重要的状态。" +
                "<br><br>" +
                "(C) '劣势' 意味着地位或质量低于他人或其他人的状态。" +
                "<br><br>" +
                "(D) '中立' 意味着在冲突或争执中不支持或帮助任何一方的状态。"
    },
    {
        id: 5,
    question: "As a __________ in the world of cooking, she often relied on simple recipes and step-by-step guides.",
    chinese_question: "作为烹饪界的 __________，她经常依赖简单的食谱和分步指南。",
    answers: [
        { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
        { option: "B", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" },
        { option: "C", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
        { option: "D", answer: "neophyte", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'neophyte' means a person who is new to a subject, skill, or belief." +
        "<br><br>" +
        "(A) 'expert' means a person who has a comprehensive and authoritative knowledge of or skill in a particular area." +
        "<br><br>" +
        "(B) 'mentor' means an experienced and trusted adviser." +
        "<br><br>" +
        "(C) 'veteran' means a person who has had long experience in a particular field.",
    chinese_explanation: "(D) '新手' 意味着在某一学科、技能或信仰方面的新手。" +
        "<br><br>" +
        "(A) '专家' 意味着在特定领域拥有全面和权威知识或技能的人。" +
        "<br><br>" +
        "(B) '导师' 意味着有经验和值得信赖的顾问。" +
        "<br><br>" +
        "(C) '老手' 意味着在特定领域有长期经验的人。"
    },
    {
        id: 6,
        question: "The journalist's report highlighted the __________ of the migrant workers' living conditions, prompting calls for reform.",
        chinese_question: "记者的报道突显了移民工人的生活条件的 __________，引发了改革呼声。",
        answers: [
                { option: "A", answer: "luxury", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
                { option: "B", answer: "squalour", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
                { option: "C", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
                { option: "D", answer: "refinement", chinese_answer: "精炼", chinese_romanization: "jīngliàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'squalour' means a state of being extremely dirty and unpleasant, especially as a result of poverty or neglect." +
                "<br><br>" +
                "(A) 'luxury' means great comfort and extravagant living." +
                "<br><br>" +
                "(C) 'comfort' means a state of physical ease and freedom from pain or constraint." +
                "<br><br>" +
                "(D) 'refinement' means the process of removing impurities or unwanted elements from a substance.",
        chinese_explanation: "(B) '肮脏'一词意味着极度肮脏和不愉快的状态，尤其是由于贫穷或忽视所致。" +
                "<br><br>" +
                "(A) '奢华' 意味着极大的舒适和奢侈的生活。" +
                "<br><br>" +
                "(C) '舒适' 意味着身体轻松自在的状态。" +
                "<br><br>" +
                "(D) '精炼' 意味着从物质中去除杂质或不需要的元素的过程。"
    },
    {
        id: 7,
question: "His parents quickly put the __________ on his idea of dropping out of college to travel the world.",
chinese_question: "他的父母迅速给他辍学环游世界的想法来了个 __________。",
answers: [
    { option: "A", answer: "kibosh", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
    { option: "B", answer: "encouragement", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
    { option: "C", answer: "approval", chinese_answer: "认可", chinese_romanization: "rènkě" },
    { option: "D", answer: "applause", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" }
],
correctAnswer: "A",
explanation: "(A) 'kibosh' means to put an end to; dispose of decisively." +
    "<br><br>" +
    "(B) 'encouragement' means the action of giving someone support, confidence, or hope." +
    "<br><br>" +
    "(C) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
    "<br><br>" +
    "(D) 'applause' means approval or praise expressed by clapping.",
chinese_explanation: "(A) '停止' 意味着结束；果断地处置。" +
    "<br><br>" +
    "(B) '鼓励' 意味着给予某人支持、信心或希望的行为。" +
    "<br><br>" +
    "(C) '认可' 意味着正式同意某事或接受某事为令人满意的行为。" +
    "<br><br>" +
    "(D) '鼓掌' 意味着通过拍手表达的赞成或赞扬。"
    },
    {
        id: 8,
        question: "Investing in the stock market can present significant __________ if one is not careful and informed.",
        chinese_question: "如果不小心和不知情，投资股市可能会带来重大 __________。",
        answers: [
            { option: "A", answer: "opportunities", chinese_answer: "机会", chinese_romanization: "jīhuì" },
            { option: "B", answer: "hazards", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
            { option: "C", answer: "rewards", chinese_answer: "回报", chinese_romanization: "huíbào" },
            { option: "D", answer: "profits", chinese_answer: "利润", chinese_romanization: "lìrùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hazards' means dangers or risks." +
                "<br><br>" +
                "(A) 'opportunities' means sets of circumstances that make it possible to do something." +
                "<br><br>" +
                "(C) 'rewards' means things given in recognition of service, effort, or achievement." +
                "<br><br>" +
                "(D) 'profits' means financial gains, especially the difference between the amount earned and the amount spent.",
        chinese_explanation: "(B) '危险' 意味着危险或风险。" +
                "<br><br>" +
                "(A) '机会' 意味着使做某事成为可能的情况。" +
                "<br><br>" +
                "(C) '回报' 意味着对服务、努力或成就的认可给予的东西。" +
                "<br><br>" +
                "(D) '利润' 意味着财务收益，特别是赚取的金额和花费的金额之间的差额。"
    },
    {
        id: 9,
    question: "In a world where corporate greed often dominates, his __________ stood out, making him a role model for many.",
    chinese_question: "在一个企业贪婪常常占主导地位的世界里，他的 __________ 脱颖而出，使他成为许多人的榜样。",
    answers: [
        { option: "A", answer: "avarice", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
        { option: "B", answer: "cunning", chinese_answer: "狡猾", chinese_romanization: "jiǎohuá" },
        { option: "C", answer: "probity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
        { option: "D", answer: "deceit", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'probity' means the quality of having strong moral principles; honesty and decency." +
        "<br><br>" +
        "(A) 'avarice' means extreme greed for wealth or material gain." +
        "<br><br>" +
        "(B) 'cunning' means having or showing skill in achieving one's ends by deceit or evasion." +
        "<br><br>" +
        "(D) 'deceit' means the action or practice of deceiving someone by concealing or misrepresenting the truth.",
    chinese_explanation: "(C) '正直'一词意味着具有强烈道德原则的品质；诚实和正派。" +
        "<br><br>" +
        "(A) '贪婪' 意味着对财富或物质利益的极度贪婪。" +
        "<br><br>" +
        "(B) '狡猾' 意味着通过欺骗或逃避来实现某人目标的技巧或表现。" +
        "<br><br>" +
        "(D) '欺骗' 意味着通过隐瞒或歪曲事实来欺骗某人的行为或做法。"
    },
    {
        id: 10,
        question: "Their opinions were in complete __________, allowing them to make decisions quickly and efficiently without any disagreements.",
        chinese_question: "他们的意见完全 __________，使他们能够快速有效地做出决定，没有任何分歧。",
        answers: [
                { option: "A", answer: "congruity", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
                { option: "B", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
                { option: "C", answer: "inconsistency", chinese_answer: "不一致", chinese_romanization: "bù yīzhì" },
                { option: "D", answer: "variation", chinese_answer: "变化", chinese_romanization: "biànhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'congruity' means the quality of being in agreement or harmony." +
                "<br><br>" +
                "(B) 'discord' means disagreement between people." +
                "<br><br>" +
                "(C) 'inconsistency' means the fact or state of being inconsistent." +
                "<br><br>" +
                "(D) 'variation' means a change or difference in condition, amount, or level, typically with certain limits.",
        chinese_explanation: "(A) '一致性' 意味着协议或和谐的质量。" +
                "<br><br>" +
                "(B) '不和' 意味着人们之间的分歧。" +
                "<br><br>" +
                "(C) '不一致' 意味着不一致的事实或状态。" +
                "<br><br>" +
                "(D) '变化' 意味着在条件、数量或水平上的变化或差异，通常在某些限制范围内。"
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
