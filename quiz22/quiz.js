// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After the long flight, she felt __________ on her feet, struggling to walk in a straight line.",
        chinese_question: "长途飞行后，她感到站立不稳，难以走直线。",
        answers: [
            { option: "A", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "wobbly", chinese_answer: "摇晃的", chinese_romanization: "yáohuàng de" },
            { option: "C", answer: "balanced", chinese_answer: "平衡的", chinese_romanization: "pínghéng de" },
            { option: "D", answer: "surefooted", chinese_answer: "步伐稳健的", chinese_romanization: "bùfá wěnjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wobbly' means tending to move unsteadily from side to side." +
            "<br><br>" +
            "(A) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(C) 'balanced' means being in a state of proper equilibrium." +
            "<br><br>" +
            "(D) 'surefooted' means not likely to stumble or slip.",
        chinese_explanation: "(B) '摇晃的' 意味着倾向于从一侧不稳地移动到另一侧。" +
            "<br><br>" +
            "(A) '稳定的' 意味着牢固地固定、支撑或平衡；不摇晃或移动。" +
            "<br><br>" +
            "(C) '平衡的' 意味着处于适当的平衡状态。" +
            "<br><br>" +
            "(D) '步伐稳健的' 意味着不太可能绊倒或滑倒。"
    },
    {
        id: 2,
    question: "Her __________ behavior in the office, like constantly flattering her superiors and volunteering for menial tasks, made her colleagues see her as someone who would do anything to please the higher-ups.",
    chinese_question: "她在办公室的 __________ 行为，例如不断拍上司的马屁，主动承担琐碎的任务，让同事们认为她是一个会不惜一切取悦上司的人。",
    answers: [
        { option: "A", answer: "servile", chinese_answer: "奴性的", chinese_romanization: "núxìng de" },
        { option: "B", answer: "autonomous", chinese_answer: "自主的", chinese_romanization: "zìzhǔ de" },
        { option: "C", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" },
        { option: "D", answer: "self-reliant", chinese_answer: "自力更生的", chinese_romanization: "zìlì gēngshēng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'servile' means having or showing an excessive willingness to serve or please others." +
        "<br><br>" +
        "(B) 'autonomous' means having the freedom to govern itself or control its own affairs." +
        "<br><br>" +
        "(C) 'rebellious' means showing a desire to resist authority, control, or convention." +
        "<br><br>" +
        "(D) 'self-reliant' means reliant on one's own powers and resources rather than those of others.",
    chinese_explanation: "(A) '奴性的' 意味着表现出过度愿意服务或取悦他人的。" +
        "<br><br>" +
        "(B) '自主的' 意味着有自由管理自己或控制自己事务的。" +
        "<br><br>" +
        "(C) '叛逆的' 意味着表现出抵抗权威、控制或惯例的欲望。" +
        "<br><br>" +
        "(D) '自力更生的' 意味着依靠自己的力量和资源而不是他人的。"
    },
    {
        id: 3,
        question: "His __________ praise made the employees feel unappreciated because it was so rare, begrudging, and insincere.",
        chinese_question: "他 __________ 的赞美让员工们感到不被重视，因为它是如此稀少、勉强且不真诚。",
        answers: [
                { option: "A", answer: "abundant", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
                { option: "B", answer: "effusive", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "miserly", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
                { option: "D", answer: "generous", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'miserly' means unwilling to spend or share." + 
            "<br><br>" + 
            "(A) 'abundant' means existing or available in large quantities." + 
            "<br><br>" + 
            "(B) 'effusive' means expressing feelings of gratitude, pleasure, or approval in an unrestrained or heartfelt manner." + 
            "<br><br>" + 
            "(D) 'generous' means showing a readiness to give more of something than is strictly necessary or expected.",
        chinese_explanation: "(C) '吝啬' 意味着不愿意花费或分享。" +
            "<br><br>" +
            "(A) '丰富' 意味着存在或可用的大量。" +
            "<br><br>" +
            "(B) '热情' 意味着以不受约束或真诚的方式表达感激、愉快或赞同的情感。" +
            "<br><br>" +
            "(D) '慷慨' 意味着愿意给予比严格必要或预期更多的东西."
    },
    {
        id: 4,
        question: "His __________ attitude towards his new job, like greeting everyone with a smile and eagerly tackling tasks, made every day at work enjoyable.",
        chinese_question: "他对新工作的 __________ 态度，例如微笑着迎接每个人并热情地处理任务，使得每天的工作都很愉快。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "gleeful", chinese_answer: "欢欣", chinese_romanization: "huānxīn" },
            { option: "C", answer: "disheartened", chinese_answer: "灰心", chinese_romanization: "huīxīn" },
            { option: "D", answer: "reluctant", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gleeful' means exuberantly or triumphantly joyful." + 
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'disheartened' means having lost determination or confidence." +
            "<br><br>" +
            "(D) 'reluctant' means unwilling and hesitant.",
        chinese_explanation: "(B) '欢欣' 意味着非常开心或胜利地快乐。" + 
            "<br><br>" +
            "(A) '冷漠' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(C) '灰心' 意味着失去决心或信心。" +
            "<br><br>" +
            "(D) '不情愿' 意味着不愿意和犹豫的。"
    },
    {
        id: 5,
        question: "His actions were clearly __________ and well-calculated, as he had planned every detail meticulously to achieve his goal.",
        chinese_question: "他的行为显然是 __________ 且经过精心计算的，因为他为了实现目标，精心计划了每一个细节。",
        answers: [
            { option: "A", answer: "intentional", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "B", answer: "accidental", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" },
            { option: "C", answer: "incidental", chinese_answer: "附带的", chinese_romanization: "fùdài de" },
            { option: "D", answer: "unintended", chinese_answer: "无意的", chinese_romanization: "wúyì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intentional' means done on purpose; deliberate." +
            "<br><br>" +
            "(B) 'accidental' means happening by chance, unintentionally, or unexpectedly." +
            "<br><br>" +
            "(C) 'incidental' means accompanying but not a major part of something." +
            "<br><br>" +
            "(D) 'unintended' means not planned or meant.",
        chinese_explanation: "(A) '故意的' 意味着有意地做的；故意的。" +
            "<br><br>" +
            "(B) '偶然的' 意味着偶然发生的、非故意的或意外的。" +
            "<br><br>" +
            "(C) '附带的' 意味着伴随的，但不是某事的主要部分。" +
            "<br><br>" +
            "(D) '无意的' 意味着不是计划或故意的。"
    },
    {
        id: 6,
        question: "His __________ discipline in managing the team, like enforcing punctuality and ensuring rigorous training, led to their outstanding performance.",
        chinese_question: "他在管理团队时的 __________ 纪律，例如强制准时和确保严格训练，导致了他们的出色表现。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "B", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "martial", chinese_answer: "军事", chinese_romanization: "jūnshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'martial' means related to fighting or war, often implying strict discipline." + 
            "<br><br>" +
            "(A) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(D) '军事' 意味着与战斗或战争有关，通常意味着严格的纪律。" + 
            "<br><br>" +
            "(A) '宽容' 意味着比预期的更仁慈或宽容。" +
            "<br><br>" +
            "(B) '放松' 意味着没有紧张和焦虑。" +
            "<br><br>" +
            "(C) '冷漠' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 7,
        question: "The trust between them was __________ after the betrayal, and they could never be close again.",
        chinese_question: "背叛后他们之间的信任是 __________ 的，他们再也无法亲近了。",
        answers: [
            { option: "A", answer: "fixable", chinese_answer: "可修复", chinese_romanization: "kě xiūfù" },
            { option: "B", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "C", answer: "irreparable", chinese_answer: "无法修复", chinese_romanization: "wúfǎ xiūfù" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irreparable' means impossible to repair or rectify." +
            "<br><br>" +
            "(A) 'fixable' means capable of being repaired." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(C) '无法修复' 意味着无法修复或纠正的。" +
            "<br><br>" +
            "(A) '可修复' 意味着可以修复的。" +
            "<br><br>" +
            "(B) '轻微' 意味着不太重要的、严重的或显著的。" +
            "<br><br>" +
            "(D) '微不足道' 意味着如此之小或不重要以至于不值得考虑。"
    },
    {
        id: 8,
        question: "The __________ candidate for the job had both the required qualifications and extensive experience, making him the obvious choice to hire.",
        chinese_question: "那位 __________ 的求职者既具备所需的资格又有丰富的经验，使他成为明显的聘用选择。",
        answers: [
            { option: "A", answer: "suitable", chinese_answer: "合适", chinese_romanization: "héshì" },
            { option: "B", answer: "inappropriate", chinese_answer: "不合适", chinese_romanization: "bù héshì" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "D", answer: "inadequate", chinese_answer: "不足", chinese_romanization: "bùzú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'suitable' means right or appropriate for a particular person, purpose, or situation." +
            "<br><br>" +
            "(B) 'inappropriate' means not suitable or proper in the circumstances." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'inadequate' means lacking the quality or quantity required; insufficient.",
        chinese_explanation: "(A) '合适' 意味着对特定的人、目的或情况是合适的。" +
            "<br><br>" +
            "(B) '不合适' 意味着在情况下不合适或不恰当。" +
            "<br><br>" +
            "(C) '无关' 意味着与某事无关。" +
            "<br><br>" +
            "(D) '不足' 意味着缺乏所需的质量或数量；不足。"
    },
    {
        id: 9,
        question: "The scandal left many voters feeling __________ about their leaders and the promises they made, because it revealed widespread corruption and dishonesty.",
        chinese_question: "丑闻让许多选民对他们的领导人和他们所做的承诺感到 __________，因为它揭露了广泛的腐败和不诚实。",
        answers: [
            { option: "A", answer: "encouraged", chinese_answer: "鼓舞的", chinese_romanization: "gǔwǔ de" },
            { option: "B", answer: "inspired", chinese_answer: "受到启发的", chinese_romanization: "shòudào qǐfā de" },
            { option: "C", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "D", answer: "disillusioned", chinese_answer: "幻灭的", chinese_romanization: "huànmiè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disillusioned' means disappointed in someone or something that one discovers to be less good than one had believed." +
            "<br><br>" +
            "(A) 'encouraged' means given support, confidence, or hope to." +
            "<br><br>" +
            "(B) 'inspired' means of extraordinary quality, as if arising from some external creative impulse." +
            "<br><br>" +
            "(C) 'trusting' means showing or tending to have a belief in a person's honesty or sincerity; not suspicious.",
        chinese_explanation: "(D) '幻灭的' 意味着对被发现不如所信的那么好的人或事物感到失望的。" +
            "<br><br>" +
            "(A) '鼓舞的' 意味着给予支持、信心或希望的。" +
            "<br><br>" +
            "(B) '受到启发的' 意味着具有非凡品质的，好像来自某种外部的创造性冲动。" +
            "<br><br>" +
            "(C) '信任的' 意味着表现或倾向于相信一个人的诚实或真诚；不怀疑的。"
    },
    {
        id: 10,
    question: "Her __________ remarks to the influential guests, such as excessively praising their minor achievements and constantly agreeing with their opinions, were intended to secure a promotion, but they only served to embarrass her colleagues.",
    chinese_question: "她对有影响力的客人们的 __________ 言辞，例如过度赞扬他们的微小成就和不断赞同他们的意见，意在确保升职，但只让她的同事们感到尴尬。",
    answers: [
        { option: "A", answer: "sycophantic", chinese_answer: "谄媚的", chinese_romanization: "chǎnmèi de" },
        { option: "B", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "C", answer: "straightforward", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
        { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'sycophantic' means behaving or done in an obsequious way in order to gain advantage." +
        "<br><br>" +
        "(B) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
        "<br><br>" +
        "(C) 'straightforward' means uncomplicated and easy to do or understand." +
        "<br><br>" +
        "(D) 'modest' means unassuming in the estimation of one's abilities or achievements.",
    chinese_explanation: "(A) '谄媚的' 意味着以奉承的方式行事或做事以获得好处。" +
        "<br><br>" +
        "(B) '真诚的' 意味着没有伪装或欺骗的；出于真挚的感情。" +
        "<br><br>" +
        "(C) '直率的' 意味着简单和容易做或理解的。" +
        "<br><br>" +
        "(D) '谦虚的' 意味着对自己的能力或成就不自以为是的。"
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
