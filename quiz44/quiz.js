// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The proposal was __________ enough to gain the interest of major investors.",
        chinese_question: "这个提案足够 __________，吸引了主要投资者的兴趣。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "无趣的", chinese_romanization: "wúqù de" },
            { option: "B", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "C", answer: "unimpressive", chinese_answer: "无印象的", chinese_romanization: "wú yìnxiàng de" },
            { option: "D", answer: "unappealing", chinese_answer: "无吸引力的", chinese_romanization: "wú xīyǐn lì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'attractive' means pleasing or appealing to the senses." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'unimpressive' means not arousing admiration or respect." +
            "<br><br>" +
            "(D) 'unappealing' means not attractive or interesting.",
        chinese_explanation: "(B) '吸引人的' 意味着让感官愉悦或吸引人的。" +
            "<br><br>" +
            "(A) '无趣的' 意味着没有兴趣或兴奋。" +
            "<br><br>" +
            "(C) '无印象的' 意味着没有引起钦佩或尊重。" +
            "<br><br>" +
            "(D) '无吸引力的' 意味着不吸引或不有趣的。"
    },
    {
        id: 2,
        question: "Her __________ insights into the market trends helped the company stay ahead of its competitors.",
        chinese_question: "她对市场趋势的 __________ 洞察力帮助公司领先于竞争对手。",
        answers: [
            { option: "A", answer: "uninformed", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "ignorant", chinese_answer: "不知情", chinese_romanization: "bù zhīqíng" },
            { option: "C", answer: "knowledgeable", chinese_answer: "知识渊博", chinese_romanization: "zhīshì yuānbó" },
            { option: "D", answer: "clueless", chinese_answer: "毫无头绪", chinese_romanization: "háo wú tóuxù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'knowledgeable' means intelligent and well informed." + 
            "<br><br>" +
            "(A) 'uninformed' means not having or showing knowledge or awareness of the facts." +
            "<br><br>" +
            "(B) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(D) 'clueless' means having no knowledge, understanding, or ability.",
        chinese_explanation: "(C) '知识渊博' 意味着聪明和见多识广。" + 
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或意识；未受教育或不成熟的。" +
            "<br><br>" +
            "(B) '不知情' 意味着没有事实的知识或意识。" +
            "<br><br>" +
            "(D) '毫无头绪' 意味着没有知识、理解或能力。"
    },
    {
        id: 3,
        question: "His __________ behavior during negotiations damaged his reputation and trust with clients.",
        chinese_question: "他在谈判中的 __________ 行为损害了他的声誉和客户的信任。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "upright", chinese_answer: "正直的", chinese_romanization: "zhèngzhí de" },
            { option: "C", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" },
            { option: "D", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unethical' means not morally correct." +
            "<br><br>" +
            "(A) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(B) 'upright' means strictly honorable or honest." +
            "<br><br>" +
            "(D) 'transparent' means easy to perceive or detect.",
        chinese_explanation: "(C) '不道德的' 意味着不符合道德原则的。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗和不诚实的；真诚的。" +
            "<br><br>" +
            "(B) '正直的' 意味着严格的光荣或诚实的。" +
            "<br><br>" +
            "(D) '透明的' 意味着容易感知或检测的。"
    },
    {
        id: 4,
    question: "The __________ entrepreneur turned a small idea into a successful business by making the most of limited resources.",
    chinese_question: "这位 __________ 的企业家通过充分利用有限的资源，将一个小想法变成了一个成功的企业。",
    answers: [
        { option: "A", answer: "resourceful", chinese_answer: "足智多谋的", chinese_romanization: "zúzhì duōmóu de" },
        { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "C", answer: "unimaginative", chinese_answer: "缺乏想象力的", chinese_romanization: "quēfá xiǎngxiàng lì de" },
        { option: "D", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'resourceful' means having the ability to find quick and clever ways to overcome difficulties." +
        "<br><br>" +
        "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(C) 'unimaginative' means not having or showing creativity or inventiveness." +
        "<br><br>" +
        "(D) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose.",
    chinese_explanation: "(A) '足智多谋的' 意味着有能力找到快速和聪明的方法来克服困难。" +
        "<br><br>" +
        "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
        "<br><br>" +
        "(C) '缺乏想象力的' 意味着没有或没有表现出创造力或独创性的。" +
        "<br><br>" +
        "(D) '浪费的' 意味着随意、奢侈或无目的地使用或花费有价值的东西。"
    },
    {
        id: 5,
        question: "The billionaire threw a __________ party at his mansion, complete with gourmet food, live music, and extravagant decorations.",
        chinese_question: "亿万富翁在他的豪宅里举办了一场 __________ 的派对，有美食、现场音乐和奢华的装饰。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'lavish' means sumptuously rich, elaborate, or luxurious." + 
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(D) '奢华的' 意味着极其富裕、精致或豪华的。" + 
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就持谦逊态度的。" +
            "<br><br>" +
            "(B) '节俭的' 意味着在花钱或食物方面节省或经济的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有困难的。"
    },
    {
        id: 6,
        question: "Her financial situation was __________ after losing her job, as she struggled to pay her bills and support her family.",
        chinese_question: "失去工作后，她的财务状况变得 __________，她努力支付账单并养家糊口。",
        answers: [
            { option: "A", answer: "dire", chinese_answer: "严峻的", chinese_romanization: "yánjùn de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" },
            { option: "D", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dire' means extremely serious or urgent." + 
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(C) 'prosperous' means successful in material terms; flourishing financially." +
            "<br><br>" +
            "(D) 'secure' means fixed or fastened so as not to give way, become loose, or be lost.",
        chinese_explanation: "(A) '严峻的' 意味着非常严重或紧急的。" + 
            "<br><br>" +
            "(B) '稳定的' 意味着不太可能改变或失败的；牢固建立的。" +
            "<br><br>" +
            "(C) '繁荣的' 意味着物质上成功的；经济上兴旺的。" +
            "<br><br>" +
            "(D) '安全的' 意味着固定或紧固的，以免让位、松动或丢失。"
    },
    {
        id: 7,
        question: "Her once vibrant personality had become __________ after years of stress and hardship.",
        chinese_question: "多年的压力和困苦使她曾经充满活力的性格变得 __________。",
        answers: [
            { option: "A", answer: "lively", chinese_answer: "活泼", chinese_romanization: "huópō" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "C", answer: "lusterless", chinese_answer: "无生气", chinese_romanization: "wú shēngqì" },
            { option: "D", answer: "dynamic", chinese_answer: "动态", chinese_romanization: "dòngtài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lusterless' means lacking in vitality, force, or conviction; uninspired or uninspiring." + 
            "<br><br>" +
            "(A) 'lively' means full of life and energy." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'dynamic' means characterized by constant change, activity, or progress.",
        chinese_explanation: "(C) '无生气' 意味着缺乏活力、力量或信念；毫无灵感或感染力。" + 
            "<br><br>" +
            "(A) '活泼' 意味着充满生命和能量。" +
            "<br><br>" +
            "(B) '精力充沛' 意味着表现出或涉及极大的活动性或活力。" +
            "<br><br>" +
            "(D) '动态' 意味着不断变化、活动或进步的特征。"
    },
    {
        id: 8,
            question: "Her __________ skills allowed her to navigate different cultural settings with ease, making her an invaluable asset to the international team.",
            chinese_question: "她的 __________ 技能使她能够轻松应对不同的文化环境，使她成为国际团队中无价的资产。",
            answers: [
                    { option: "A", answer: "monolingual", chinese_answer: "单语的", chinese_romanization: "dānyǔ de" },
                    { option: "B", answer: "unilingual", chinese_answer: "单语言的", chinese_romanization: "dān yǔyán de" },
                    { option: "C", answer: "bilingual", chinese_answer: "双语的", chinese_romanization: "shuāngyǔ de" },
                    { option: "D", answer: "linguistically-challenged", chinese_answer: "语言能力受限的", chinese_romanization: "yǔyán nénglì shòuxiàn de" }
            ],
            correctAnswer: "C",
            explanation: "(C) 'bilingual' means able to speak two languages fluently." + 
                "<br><br>" + 
                "(A) 'monolingual' means speaking only one language." + 
                "<br><br>" + 
                "(B) 'unilingual' means of, relating to, or involving only one language." + 
                "<br><br>" + 
                "(D) 'linguistically-challenged' means having difficulty with language skills.",
            chinese_explanation: "(C) '双语的' 意味着能够流利地说两种语言。" +
                "<br><br>" +
                "(A) '单语的' 意味着只说一种语言。" +
                "<br><br>" +
                "(B) '单语言的' 意味着与仅涉及一种语言有关的。" +
                "<br><br>" +
                "(D) '语言能力受限的' 意味着在语言技能上有困难的."
    },
    {
        id: 9,
        question: "The poet's words were as __________ as the garden flowers, filling the reader's mind with beauty and delight.",
        chinese_question: "这位诗人的话语如花园里的花朵般 __________，在读者的脑海中充满了美丽和愉悦。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "B", answer: "dull", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "C", answer: "bitter", chinese_answer: "苦涩的", chinese_romanization: "kǔsè de" },
            { option: "D", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fragrant' means pleasant and sweet-smelling, often used figuratively to describe something very pleasing." + 
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'bitter' means having a sharp, pungent taste or smell; not sweet.",
        chinese_explanation: "(D) '芳香的' 意味着愉快和甜美的气味，通常用来比喻描述非常令人愉快的事物。" + 
            "<br><br>" +
            "(A) '刺耳的' 意味着令人不快的粗糙或刺耳的。" +
            "<br><br>" +
            "(B) '乏味的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '苦涩的' 意味着有尖锐、辛辣的味道或气味；不甜的。"
    },
    {
        id: 10,
        question: "The company's __________ response to the market changes cost them significant losses.",
        chinese_question: "公司对市场变化的 __________ 反应让他们蒙受了重大损失。",
        answers: [
            { option: "A", answer: "belated", chinese_answer: "迟来的", chinese_romanization: "chí lái de" },
            { option: "B", answer: "swift", chinese_answer: "迅速的", chinese_romanization: "xùnsù de" },
            { option: "C", answer: "proactive", chinese_answer: "积极主动的", chinese_romanization: "jījí zhǔdòng de" },
            { option: "D", answer: "immediate", chinese_answer: "立即的", chinese_romanization: "lìjí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'belated' means coming or happening later than should have been the case." +
                "<br><br>" +
                "(B) 'swift' means happening quickly or promptly." +
                "<br><br>" +
                "(C) 'proactive' means creating or controlling a situation rather than just responding to it after it has happened." +
                "<br><br>" +
                "(D) 'immediate' means occurring or done at once.",
        chinese_explanation: "(A) '迟来的' 意味着比应有的时间更晚发生的。" +
                "<br><br>" +
                "(B) '迅速的' 意味着快速或及时发生的。" +
                "<br><br>" +
                "(C) '积极主动的' 意味着创造或控制一个情况，而不仅仅是在它发生后做出反应。" +
                "<br><br>" +
                "(D) '立即的' 意味着立刻发生的。"
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
