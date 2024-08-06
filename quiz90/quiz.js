// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The novel's ending was criticized for its __________, leaving readers feeling manipulated by its overly sweet and sentimental resolution.",
        chinese_question: "这部小说的结尾因其 __________ 而受到批评，让读者觉得被过于甜美和感伤的解决方案操纵了。",
        answers: [
                { option: "A", answer: "treacle", chinese_answer: "甜腻", chinese_romanization: "tián nì" },
                { option: "B", answer: "ambiguity", chinese_answer: "模糊", chinese_romanization: "móhú" },
                { option: "C", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzá xìng" },
                { option: "D", answer: "realism", chinese_answer: "现实主义", chinese_romanization: "xiànshí zhǔyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'treacle' means cloying sentimentality or flattery." +
                "<br><br>" +
                "(B) 'ambiguity' means the quality of being open to more than one interpretation; inexactness." +
                "<br><br>" +
                "(C) 'complexity' means the state or quality of being intricate or complicated." +
                "<br><br>" +
                "(D) 'realism' means the attitude or practice of accepting a situation as it is and being prepared to deal with it accordingly.",
        chinese_explanation: "(A) '甜腻' 意味着令人厌腻的多愁善感或奉承。" +
                "<br><br>" +
                "(B) '模糊' 意味着不止一种解释的质量；不准确。" +
                "<br><br>" +
                "(C) '复杂性' 意味着错综复杂的状态或质量。" +
                "<br><br>" +
                "(D) '现实主义' 意味着接受现实并准备相应处理的态度或做法。"
    },
    {
        id: 2,
        question: "The __________ of the design elements gave the room a balanced and harmonious feel.",
        chinese_question: "设计元素的 __________ 使房间有一种平衡和谐的感觉。",
        answers: [
                { option: "A", answer: "congruity", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
                { option: "B", answer: "disarray", chinese_answer: "杂乱", chinese_romanization: "záluàn" },
                { option: "C", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
                { option: "D", answer: "mismatch", chinese_answer: "不匹配", chinese_romanization: "bù pǐpèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'congruity' figuratively means the quality of being in agreement or harmony." +
                "<br><br>" +
                "(B) 'disarray' means a state of disorganization or untidiness." +
                "<br><br>" +
                "(C) 'chaos' means complete disorder and confusion." +
                "<br><br>" +
                "(D) 'mismatch' means a failure to correspond or match.",
        chinese_explanation: "(A) '一致性' 在此语境下意指协议或和谐的质量。" +
                "<br><br>" +
                "(B) '杂乱' 意味着无组织或不整洁的状态。" +
                "<br><br>" +
                "(C) '混乱' 意味着完全的混乱和混淆。" +
                "<br><br>" +
                "(D) '不匹配' 意味着未能对应或匹配。"
    },
    {
        id: 3,
        question: "The young lawyer showed __________ to the senior partners, always listening attentively to their advice and following their lead.",
        chinese_question: "这位年轻律师对高级合伙人表现出了 __________，总是认真听取他们的建议并跟随他们的领导。",
        answers: [
                { option: "A", answer: "rudeness", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
                { option: "B", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
                { option: "C", answer: "deference", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
                { option: "D", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deference' means humble submission and respect." +
                "<br><br>" +
                "(A) 'rudeness' means lack of manners; discourtesy." +
                "<br><br>" +
                "(B) 'defiance' means open resistance; bold disobedience." +
                "<br><br>" +
                "(D) 'disregard' means lack of consideration or attention.",
        chinese_explanation: "(C) '尊重'一词意味着谦卑的服从和尊敬。" +
                "<br><br>" +
                "(A) '粗鲁' 意味着缺乏礼貌；不礼貌。" +
                "<br><br>" +
                "(B) '反抗' 意味着公开抵抗；大胆的不服从。" +
                "<br><br>" +
                "(D) '无视' 意味着缺乏考虑或关注。"
    },
    {
        id: 4,
        question: "Everyone in the village knew him as a __________ because he had a reputation for tricking people.",
        chinese_question: "村里所有人都知道他是个 __________，因为他有欺骗人们的名声。",
        answers: [
            { option: "A", answer: "hero", chinese_answer: "英雄", chinese_romanization: "yīngxióng" },
            { option: "B", answer: "sage", chinese_answer: "智者", chinese_romanization: "zhìzhě" },
            { option: "C", answer: "guardian", chinese_answer: "守护者", chinese_romanization: "shǒuhù zhě" },
            { option: "D", answer: "knave", chinese_answer: "无赖", chinese_romanization: "wúlài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'knave' means a dishonest or unscrupulous man." +
            "<br><br>" +
            "(A) 'hero' means a person who is admired for their courage, outstanding achievements, or noble qualities." +
            "<br><br>" +
            "(B) 'sage' means a profoundly wise man, especially one who features in ancient history or legend." +
            "<br><br>" +
            "(C) 'guardian' means a person who protects or defends something.",
        chinese_explanation: "(D) '无赖' 意味着一个不诚实或不道德的男人。" +
            "<br><br>" +
            "(A) '英雄' 意味着因其勇气、杰出成就或高尚品质而受到钦佩的人。" +
            "<br><br>" +
            "(B) '智者' 意味着一个深刻智慧的男人，尤其是历史或传说中的人物。" +
            "<br><br>" +
            "(C) '守护者' 意味着保护或捍卫某物的人。"
    },
    {
        id: 5,
        question: "The concert goer's loud __________ about the poor sound quality and seating arrangements annoyed everyone around him.",
        chinese_question: "这位音乐会观众对糟糕的音质和座位安排的响亮__________让周围的人都很恼火。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "applause", chinese_answer: "掌声", chinese_romanization: "zhǎngshēng" },
            { option: "D", answer: "harangue", chinese_answer: "长篇大论", chinese_romanization: "chángpiān dàlùn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'harangue' means a lengthy and aggressive speech." +
            "<br><br>" +
            "(A) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(B) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(C) 'applause' means the approval or praise expressed by clapping.",
        chinese_explanation: "(D) '长篇大论' 意味着冗长而激烈的演讲。" +
            "<br><br>" +
            "(A) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(B) '赞美' 意味着对某人或某物的赞同或钦佩的表达。" +
            "<br><br>" +
            "(C) '掌声' 意味着通过鼓掌表达的赞同或称赞。"
    },
    {
        id: 6,
        question: "The CEO’s __________ included not only a high salary but also various bonuses and stock options.",
        chinese_question: "CEO的 __________ 不仅包括高薪，还包括各种奖金和股票期权。",
        answers: [
            { option: "A", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
            { option: "C", answer: "deficiency", chinese_answer: "缺陷", chinese_romanization: "quēxiàn" },
            { option: "D", answer: "emolument", chinese_answer: "薪酬", chinese_romanization: "xīnchóu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'emolument' means a salary, fee, or profit from employment or office." +
            "<br><br>" +
            "(A) 'criticism' means the expression of disapproval based on perceived faults or mistakes." +
            "<br><br>" +
            "(B) 'reprimand' means a formal expression of disapproval." +
            "<br><br>" +
            "(C) 'deficiency' means a lack or shortage.",
        chinese_explanation: "(D) '薪酬' 一词意味着来自就业或职务的薪水、费用或利润。" +
            "<br><br>" +
            "(A) '批评' 意味着基于被认为的缺点或错误的不赞成表达。" +
            "<br><br>" +
            "(B) '训斥' 意味着正式的不赞成表达。" +
            "<br><br>" +
            "(C) '缺陷' 意味着缺乏或短缺。"
    },
    {
        id: 7,
        question: "The judge was known for his __________, always making decisions based on fairness and morality.",
        chinese_question: "这位法官以他的 __________ 著称，总是根据公平和道德做出决定。",
        answers: [
                { option: "A", answer: "dishonesty", chinese_answer: "不诚实", chinese_romanization: "bùchéngshí" },
                { option: "B", answer: "rectitude", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "C", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
                { option: "D", answer: "corruption", chinese_answer: "腐败", chinese_romanization: "fǔbài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rectitude' means morally correct behavior or thinking; righteousness." +
                "<br><br>" +
                "(A) 'dishonesty' means deceitfulness or fraudulence." +
                "<br><br>" +
                "(C) 'bias' means prejudice in favor of or against one thing, person, or group compared with another." +
                "<br><br>" +
                "(D) 'corruption' means dishonest or fraudulent conduct by those in power.",
        chinese_explanation: "(B) '正直'一词意味着道德上正确的行为或思想；正义。" +
                "<br><br>" +
                "(A) '不诚实' 意味着欺骗或欺诈行为。" +
                "<br><br>" +
                "(C) '偏见' 意味着偏爱或反对某事、某人或某群体。" +
                "<br><br>" +
                "(D) '腐败' 意味着掌权者的不诚实或欺诈行为。"
    },
    {
        id: 8,
        question: "The __________ of additional responsibilities without proper compensation led to dissatisfaction among the employees.",
        chinese_question: "在没有适当补偿的情况下 __________ 额外的责任导致了员工的不满。",
        answers: [
                { option: "A", answer: "imposition", chinese_answer: "强加", chinese_romanization: "qiángjiā" },
                { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
                { option: "C", answer: "alleviation", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
                { option: "D", answer: "endorsement", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'imposition' means the action or process of imposing something, especially a burden or obligation." +
                "<br><br>" +
                "(B) 'reward' means a thing given in recognition of one's service, effort, or achievement." +
                "<br><br>" +
                "(C) 'alleviation' means the action or process of making suffering, deficiency, or a problem less severe." +
                "<br><br>" +
                "(D) 'endorsement' means an act of giving one's public approval or support to someone or something.",
        chinese_explanation: "(A) '强加'一词意味着施加某物的行动或过程，尤其是负担或义务。" +
                "<br><br>" +
                "(B) '奖励' 意味着为表彰某人的服务、努力或成就而给予的事物。" +
                "<br><br>" +
                "(C) '减轻' 意味着使痛苦、缺陷或问题减轻的行为或过程。" +
                "<br><br>" +
                "(D) '支持' 意味着公开表示赞同或支持某人或某事的行为。"
    },
    {
        id: 9,
        question: "The pediatrician announced a __________ from her practice, planning to spend a year volunteering in underserved communities, traveling abroad, and writing a book.",
        chinese_question: "儿科医生宣布暂停行医，计划用一年时间在服务不足的社区做志愿者、出国旅行和写书。",
        answers: [
            { option: "A", answer: "continuation", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "B", answer: "perpetuation", chinese_answer: "永存", chinese_romanization: "yǒngcún" },
            { option: "C", answer: "resumption", chinese_answer: "恢复", chinese_romanization: "huīfù" },
            { option: "D", answer: "hiatus", chinese_answer: "中断", chinese_romanization: "zhōngduàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hiatus' means a pause or gap in a sequence, series, or process." +
            "<br><br>" +
            "(A) 'continuation' means the action of carrying something on over a period of time or the process of being carried on." +
            "<br><br>" +
            "(B) 'perpetuation' means the continuation or preservation of a situation, idea, etc." +
            "<br><br>" +
            "(C) 'resumption' means the action of beginning something again after a pause or interruption.",
        chinese_explanation: "(D) '中断' 意味着序列、系列或过程中的暂停或间隙。" +
            "<br><br>" +
            "(A) '继续' 意味着在一段时间内进行某事的行为或过程。" +
            "<br><br>" +
            "(B) '永存' 意味着情景、想法等的延续或保持。" +
            "<br><br>" +
            "(C) '恢复' 意味着在暂停或中断后再次开始某事的行为。"
    },
    {
        id: 10,
        question: "After years of battling addiction, John's __________ brought a sense of stability and clarity back into his life.",
        chinese_question: "经过多年的成瘾斗争，约翰的 __________ 给他的生活带来了稳定和清晰。",
        answers: [
                { option: "A", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
                { option: "B", answer: "sobriety", chinese_answer: "清醒", chinese_romanization: "qīngxǐng" },
                { option: "C", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
                { option: "D", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sobriety' means the state of being sober, especially after giving up alcohol or drugs." +
                "<br><br>" +
                "(A) 'indulgence' means allowing oneself to enjoy the pleasure of something." +
                "<br><br>" +
                "(C) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
                "<br><br>" +
                "(D) 'negligence' means failure to take proper care over something.",
        chinese_explanation: "(B) '清醒'一词意味着清醒的状态，特别是在戒酒或戒毒之后。" +
                "<br><br>" +
                "(A) '放纵' 意味着让自己享受某事的乐趣。" +
                "<br><br>" +
                "(C) '鲁莽' 意味着对危险或后果的漠视。" +
                "<br><br>" +
                "(D) '疏忽' 意味着未能妥善照顾某事。"
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
