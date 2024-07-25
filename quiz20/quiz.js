// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ potential as a leader emerged during the crisis.",
        chinese_question: "在危机期间，他作为领导者的__________潜力显现出来。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "manifest", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "evident", chinese_answer: "显而易见的", chinese_romanization: "xiǎn'éryìjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hidden' means existing but not yet developed or manifest; hidden or concealed. Figuratively, it can mean potential that is not yet realized." + 
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(C) 'manifest' means clear or obvious to the eye or mind." +
            "<br><br>" +
            "(D) 'evident' means plain or obvious; clearly seen or understood.",
        chinese_explanation: "(B) '隐藏的'一词意味着存在但尚未开发或表现出来的；隐藏的或隐蔽的。比喻地，它可以表示尚未实现的潜力。" + 
            "<br><br>" +
            "(A) '明显的' 意味着容易察觉或理解的；清晰的、自明的或显而易见的。" +
            "<br><br>" +
            "(C) '明显的' 意味着对眼睛或头脑来说清楚的或显而易见的。" +
            "<br><br>" +
            "(D) '显而易见的' 意味着显然的或显而易见的。"
    },
    {
        id: 2,
        question: "She had __________ opportunities to advance her career in the growing company.",
        chinese_question: "在这家不断发展的公司里，她有 __________ 的机会提升自己的职业生涯。",
        answers: [
            { option: "A", answer: "cramped", chinese_answer: "狭小的", chinese_romanization: "xiáxiǎo de" },
            { option: "B", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
            { option: "D", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ample' means enough or more than enough; plentiful. Figuratively, it can mean having plenty of opportunities or resources." + 
            "<br><br>" +
            "(A) 'cramped' means feeling or causing someone to feel uncomfortably confined or hemmed in by lack of space." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'scarce' means insufficient for the demand.",
        chinese_explanation: "(C) '充足的'一词意味着足够或超过足够；丰富的。比喻地，它可以表示有很多机会或资源。" + 
            "<br><br>" +
            "(A) '狭小的' 意味着感觉或导致某人感觉因缺乏空间而不舒服地被限制或束缚。" +
            "<br><br>" +
            "(B) '有限的' 意味着在大小、数量或程度上受限制的。" +
            "<br><br>" +
            "(D) '稀缺的' 意味着不足以满足需求的。"
    },
    {
        id: 3,
    question: "The small town's __________ attitude made it difficult for new ideas to take root.",
    chinese_question: "这个小镇的 __________ 态度使得新思想难以扎根。",
    answers: [
        { option: "A", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" },
        { option: "B", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
        { option: "C", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
        { option: "D", answer: "provincial", chinese_answer: "狭隘的", chinese_romanization: "xiá'ài de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'provincial' means of or concerning a province of a country or empire; narrow-minded or unsophisticated." +
        "<br><br>" +
        "(A) 'progressive' means happening or developing gradually or in stages." +
        "<br><br>" +
        "(B) 'innovative' means (of a product, idea, etc.) featuring new methods; advanced and original." +
        "<br><br>" +
        "(C) 'liberal' means open to new behavior or opinions and willing to discard traditional values.",
    chinese_explanation: "(D) '狭隘的' 意味着与国家或帝国的一个省有关的；狭隘的或不复杂的。" +
        "<br><br>" +
        "(A) '进步的' 意味着逐渐或分阶段发生或发展的。" +
        "<br><br>" +
        "(B) '创新的' 意味着（产品、想法等）采用新方法的；先进和原创的。" +
        "<br><br>" +
        "(C) '自由的' 意味着对新行为或观点开放，并愿意抛弃传统价值观的。"
    },
    {
        id: 4,
        question: "Her __________ memory of the event made it difficult to recall the details accurately.",
        chinese_question: "她对事件的 __________ 记忆使得难以准确回忆细节。",
        answers: [
                { option: "A", answer: "vivid", chinese_answer: "生动", chinese_romanization: "shēngdòng" },
                { option: "B", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "C", answer: "misty", chinese_answer: "模糊", chinese_romanization: "móhú" },
                { option: "D", answer: "sharp", chinese_answer: "清楚", chinese_romanization: "qīngchǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'misty' means not clear or detailed in one's memory." + 
            "<br><br>" + 
            "(A) 'vivid' means producing powerful feelings or strong, clear images in the mind." + 
            "<br><br>" + 
            "(B) 'clear' means easy to perceive, understand, or interpret." + 
            "<br><br>" + 
            "(D) 'sharp' means having an edge or point that is able to cut or pierce something.",
        chinese_explanation: "(C) '模糊' 意味着在记忆中不清楚或不详细。" +
            "<br><br>" +
            "(A) '生动' 意味着在脑海中产生强烈的感情或清晰的形象。" +
            "<br><br>" +
            "(B) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(D) '清楚' 意味着有锋利的边缘或点，能够切割或穿透某物."
    },
    {
        id: 5,
        question: "His __________ interest in politics made him a passionate debater.",
        chinese_question: "他对政治的 __________ 兴趣使他成为一个充满热情的辩论者。",
        answers: [
            { option: "A", answer: "lukewarm", chinese_answer: "冷淡", chinese_romanization: "lěngdàn" },
            { option: "B", answer: "keen", chinese_answer: "强烈", chinese_romanization: "qiángliè" },
            { option: "C", answer: "uninterested", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" },
            { option: "D", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'keen' means having or showing eagerness or enthusiasm." + 
            "<br><br>" +
            "(A) 'lukewarm' means only moderately warm; not enthusiastic." +
            "<br><br>" +
            "(C) 'uninterested' means not interested in or concerned about something or someone." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(B) '强烈' 意味着有或表现出热情或热心。" + 
            "<br><br>" +
            "(A) '冷淡' 意味着只有适度的温暖；不热心。" +
            "<br><br>" +
            "(C) '不感兴趣' 意味着对某事或某人不感兴趣或不关心。" +
            "<br><br>" +
            "(D) '被动' 意味着接受或允许发生的事情或他人所做的事情，没有积极回应或抵抗。"
    },
    {
        id: 6,
        question: "The poor artist grew up in an __________ environment, but his creativity knew no bounds.",
        chinese_question: "这位贫穷的艺术家在一个 __________ 的环境中长大，但他的创造力无穷无尽。",
        answers: [
            { option: "A", answer: "prosperous", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "B", answer: "impoverished", chinese_answer: "贫困", chinese_romanization: "pínkùn" },
            { option: "C", answer: "flourishing", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "D", answer: "thriving", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impoverished' means made poor." + 
            "<br><br>" +
            "(A) 'prosperous' means successful in material terms; flourishing financially." +
            "<br><br>" +
            "(C) 'flourishing' means developing rapidly and successfully; thriving." +
            "<br><br>" +
            "(D) 'thriving' means prosperous and growing; flourishing.",
        chinese_explanation: "(B) '贫困' 意味着变得贫穷。" + 
            "<br><br>" +
            "(A) '繁荣' 意味着在物质方面成功；经济上繁荣。" +
            "<br><br>" +
            "(C) '繁荣' 意味着迅速发展并成功；兴旺。" +
            "<br><br>" +
            "(D) '兴旺' 意味着繁荣和成长；兴旺。"
    },
    {
        id: 7,
        question: "She remained __________ to her principles, never compromising on her beliefs.",
        chinese_question: "她对自己的原则非常 __________，从不在信仰上妥协。",
        answers: [
            { option: "A", answer: "disloyal", chinese_answer: "不忠诚的", chinese_romanization: "bù zhōngchéng de" },
            { option: "B", answer: "untrustworthy", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "C", answer: "fickle", chinese_answer: "反复无常的", chinese_romanization: "fǎnfù wúcháng de" },
            { option: "D", answer: "faithful", chinese_answer: "忠实的", chinese_romanization: "zhōngshí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'faithful' means loyal, constant, and steadfast. Figuratively, it can mean being true to one's principles and values." + 
            "<br><br>" +
            "(A) 'disloyal' means failing to be loyal to a person, country, or body to which one has obligations." +
            "<br><br>" +
            "(B) 'untrustworthy' means not able to be relied on as honest or truthful." +
            "<br><br>" +
            "(C) 'fickle' means changing frequently, especially as regards one's loyalties, interests, or affection.",
        chinese_explanation: "(D) '忠实的'一词意味着忠诚、恒常和坚定的。比喻地，它可以表示对自己的原则和价值观忠诚。" + 
            "<br><br>" +
            "(A) '不忠诚的' 意味着未能对某人、国家或有义务的团体忠诚的。" +
            "<br><br>" +
            "(B) '不可靠的' 意味着不能作为诚实或真实的人依赖的。" +
            "<br><br>" +
            "(C) '反复无常的' 意味着经常变化的，尤其是在忠诚、兴趣或感情方面。"
    },
    {
        id: 8,
        question: "It was __________ of her to plan for potential risks before embarking on the project.",
        chinese_question: "她在开始项目之前计划潜在风险是__________的。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "B", answer: "imprudent", chinese_answer: "不谨慎的", chinese_romanization: "bù jǐnshèn de" },
            { option: "C", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prudent' means acting with or showing care and thought for the future. Figuratively, it can mean being wise and judicious in practical affairs." +
            "<br><br>" +
            "(A) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous." +
            "<br><br>" +
            "(B) 'imprudent' means not showing care for the consequences of an action; rash." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '谨慎的'一词意味着为未来表现出谨慎和深思熟虑的行动。比喻地，它可以表示在实际事务中明智和有见识的。" +
            "<br><br>" +
            "(A) '鲁莽的' 意味着对危险或后果不顾；轻率或鲁莽的。" +
            "<br><br>" +
            "(B) '不谨慎的' 意味着对行为的后果不关心的；轻率的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误的."
    },
    {
        id: 9,
        question: "Even in the midst of the heated debate, his __________ language set a tone of respect and civility.",
        chinese_question: "即使在激烈的辩论中，他的 __________ 言辞也设定了尊重和礼貌的基调。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "aggressive", chinese_answer: "攻击性的", chinese_romanization: "gōngjī xìng de" },
            { option: "C", answer: "decorous", chinese_answer: "端庄的", chinese_romanization: "duānzhuāng de" },
            { option: "D", answer: "disrespectful", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'decorous' means in keeping with good taste and propriety; polite and restrained." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly or antagonistic." +
            "<br><br>" +
            "(B) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(D) 'disrespectful' means showing a lack of respect or courtesy.",
        chinese_explanation: "(C) '端庄的' 意味着符合良好的品味和礼仪；礼貌和克制的。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好或对抗。" +
            "<br><br>" +
            "(B) '攻击性的' 意味着准备或可能攻击或对抗。" +
            "<br><br>" +
            "(D) '无礼的' 意味着缺乏尊重或礼貌。"
    },
    {
        id: 10,
        question: "His __________ ability to solve complex problems made him an invaluable member of the research team.",
        chinese_question: "他解决复杂问题的 __________ 能力使他成为研究团队中无价的成员。",
        answers: [
            { option: "A", answer: "singular", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "B", answer: "average", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "D", answer: "unremarkable", chinese_answer: "不显著的", chinese_romanization: "bù xiǎnzhù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'singular' means exceptionally good or great; remarkable." +
            "<br><br>" +
            "(B) 'average' means having qualities that are seen as typical or usual." +
            "<br><br>" +
            "(C) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly interesting or surprising.",
        chinese_explanation: "(A) '非凡的' 意味着异常好或伟大的；卓越的。" +
            "<br><br>" +
            "(B) '普通的' 意味着具有典型或通常的品质的。" +
            "<br><br>" +
            "(C) '平庸的' 意味着质量一般的；不太好的。" +
            "<br><br>" +
            "(D) '不显著的' 意味着不特别有趣或令人惊讶的。"
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
