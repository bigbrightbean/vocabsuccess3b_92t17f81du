// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The benefits of the new policy became __________ over time as employees' productivity increased.",
        chinese_question: "随着员工生产力的提高，新政策的好处逐渐变得 __________。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "apparent", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" },
            { option: "C", answer: "negligible", chinese_answer: "可以忽略的", chinese_romanization: "kěyǐ hūlüè de" },
            { option: "D", answer: "ambiguous", chinese_answer: "含糊不清的", chinese_romanization: "hánhú bù qīng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'apparent' means clearly visible or understood; obvious." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; having a double meaning.",
        chinese_explanation: "(B) '显然的' 意味着清晰可见或理解的；明显的。" +
            "<br><br>" +
            "(A) '模糊的' 意味着未被发现或了解的；不确定的。" +
            "<br><br>" +
            "(C) '可以忽略的' 意味着如此小或不重要而不值得考虑的；无关紧要的。" +
            "<br><br>" +
            "(D) '含糊不清的' 意味着可以有不止一种解释；具有双重含义。"
    },
    {
        id: 2,
        question: "The scientist's __________ approach to solving the problem involved techniques that had never been tried before.",
        chinese_question: "科学家解决问题的 __________ 方法涉及以前从未尝试过的技术。",
        answers: [
            { option: "A", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "conventional", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "C", answer: "novel", chinese_answer: "新颖的", chinese_romanization: "xīnyǐng de" },
            { option: "D", answer: "old-fashioned", chinese_answer: "老式的", chinese_romanization: "lǎoshì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'novel' means new or unusual in an interesting way." +
            "<br><br>" +
            "(A) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'old-fashioned' means in or according to styles or types no longer current or common; not modern.",
        chinese_explanation: "(C) '新颖的' 意味着新的或不同寻常的，有趣的。" +
            "<br><br>" +
            "(A) '传统的' 意味着作为传统的一部分存在的；长期建立的。" +
            "<br><br>" +
            "(B) '常规的' 意味着基于或符合一般做法或信念的。" +
            "<br><br>" +
            "(D) '老式的' 意味着按照不再流行或常见的风格或类型的；不现代的."
    },
    {
        id: 3,
        question: "The journalist's __________ take on the political scandal, filled with biting sarcasm, was both insightful and cutting.",
        chinese_question: "这位记者对政治丑闻的 __________ 见解，充满了尖刻的讽刺，既深刻又尖锐。",
        answers: [
            { option: "A", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "B", answer: "gullible", chinese_answer: "易受骗的", chinese_romanization: "yì shòupiàn de" },
            { option: "C", answer: "sardonic", chinese_answer: "讽刺的", chinese_romanization: "fèngcì de" },
            { option: "D", answer: "uninformed", chinese_answer: "无知的", chinese_romanization: "wúzhī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sardonic' means grimly mocking or cynical." +
            "<br><br>" +
            "(A) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(B) 'gullible' means easily persuaded to believe something; credulous." +
            "<br><br>" +
            "(D) 'uninformed' means not having or showing awareness or understanding of the facts.",
        chinese_explanation: "(C) '讽刺的' 意味着冷嘲的或愤世嫉俗的。" +
            "<br><br>" +
            "(A) '天真的' 意味着缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(B) '易受骗的' 意味着容易被说服相信某事的；轻信的。" +
            "<br><br>" +
            "(D) '无知的' 意味着没有或没有显示出对事实的了解或理解的."
    },
    {
        id: 4,
        question: "The author is known for being __________, having published over fifty novels in just two decades.",
        chinese_question: "这位作家以 __________ 而闻名，仅在二十年内就出版了五十多本小说。",
        answers: [
            { option: "A", answer: "prolific", chinese_answer: "多产的", chinese_romanization: "duōchǎn de" },
            { option: "B", answer: "unproductive", chinese_answer: "无成果的", chinese_romanization: "wú chéngguǒ de" },
            { option: "C", answer: "idle", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "D", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prolific' means producing much fruit, foliage, or many offspring; producing many works, results, or ideas." +
            "<br><br>" +
            "(B) 'unproductive' means not producing or able to produce large amounts of goods, crops, or other commodities." +
            "<br><br>" +
            "(C) 'idle' means avoiding work; lazy." +
            "<br><br>" +
            "(D) 'stagnant' means showing no activity; dull and sluggish.",
        chinese_explanation: "(A) '多产的' 意味着产生大量果实、叶子或许多后代；产生许多作品、结果或想法。" +
            "<br><br>" +
            "(B) '无成果的' 意味着不能生产大量商品、作物或其他商品的。" +
            "<br><br>" +
            "(C) '懒惰的' 意味着避免工作；懒惰的。" +
            "<br><br>" +
            "(D) '停滞的' 意味着没有活动；沉闷和迟钝的。"
    },
    {
        id: 5,
        question: "Her __________ approach to the campaign ensured that their message was heard loud and clear.",
        chinese_question: "她对竞选活动的__________态度确保了他们的信息被清楚地听到。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "C", answer: "docile", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "D", answer: "militant", chinese_answer: "好战的", chinese_romanization: "hàozhàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'militant' means combative and aggressive in support of a political or social cause. Figuratively, it can mean being very active and forceful in advocating for a cause." + 
            "<br><br>" + 
            "(A) 'peaceful' means free from disturbance; tranquil." + 
            "<br><br>" + 
            "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." + 
            "<br><br>" + 
            "(C) 'docile' means ready to accept control or instruction; submissive.",
        chinese_explanation: "(D) '好战的'一词意味着以支持政治或社会事业的战斗性和侵略性。比喻地，它可以表示在提倡事业中非常积极和有力的。" +
            "<br><br>" +
            "(A) '和平的' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(B) '被动的' 意味着接受或允许发生的事情或他人所做的事情，没有积极回应或抵抗的。" +
            "<br><br>" +
            "(C) '顺从的' 意味着准备接受控制或指示的；顺从的."
    },
    {
        id: 6,
question: "The startup is still in its __________ stage, working on developing its first product and securing initial funding.",
chinese_question: "这家初创公司仍处于 __________ 阶段，正在开发其第一款产品并争取初步资金。",
answers: [
    { option: "A", answer: "mature", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
    { option: "B", answer: "established", chinese_answer: "已建立的", chinese_romanization: "yǐ jiànlì de" },
    { option: "C", answer: "nascent", chinese_answer: "初期的", chinese_romanization: "chūqī de" },
    { option: "D", answer: "declining", chinese_answer: "下降的", chinese_romanization: "xiàjiàng de" }
],
correctAnswer: "C",
explanation: "(C) 'nascent' means just coming into existence and beginning to display signs of future potential." + 
    "<br><br>" +
    "(A) 'mature' means fully developed." +
    "<br><br>" +
    "(B) 'established' means having been in existence for a long time and therefore recognized and generally accepted." +
    "<br><br>" +
    "(D) 'declining' means becoming smaller, fewer, or less; decreasing.",
chinese_explanation: "(C) '初期的' 意味着刚刚出现并开始显示未来潜力的。" + 
    "<br><br>" +
    "(A) '成熟的' 意味着完全发展的。" +
    "<br><br>" +
    "(B) '已建立的' 意味着存在很长时间并因此被认可和普遍接受的。" +
    "<br><br>" +
    "(D) '下降的' 意味着变得更小、更少或减少的。"
    },
    {
        id: 7,
question: "Her __________ ideas shaped the future direction of the company.",
chinese_question: "她的 __________ 想法决定了公司的未来方向。",
answers: [
    { option: "A", answer: "marginal", chinese_answer: "边缘", chinese_romanization: "biānyuán" },
    { option: "B", answer: "influential", chinese_answer: "有影响力", chinese_romanization: "yǒu yǐngxiǎng lì" },
    { option: "C", answer: "trivial", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" },
    { option: "D", answer: "negligible", chinese_answer: "可忽略", chinese_romanization: "kě hūlüè" }
],
correctAnswer: "B",
explanation: "(B) 'influential' means having great influence on someone or something." + 
    "<br><br>" +
    "(A) 'marginal' means of secondary or minor importance; not central." +
    "<br><br>" +
    "(C) 'trivial' means of little value or importance." +
    "<br><br>" +
    "(D) 'negligible' means so small or unimportant as to be not worth considering; insignificant.",
chinese_explanation: "(B) '有影响力' 意味着对某人或某事有很大影响。" + 
    "<br><br>" +
    "(A) '边缘' 意味着次要或不重要的；非中心的。" +
    "<br><br>" +
    "(C) '微不足道' 意味着价值或重要性很小。" +
    "<br><br>" +
    "(D) '可忽略' 意味着太小或不重要，不值得考虑；不重要的。"
    },
    {
        id: 8,
    question: "The __________ team controlled the game from start to finish, never letting their opponents get ahead.",
    chinese_question: "这支__________的球队从头到尾控制了比赛，从未让对手领先。",
    answers: [
      { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
      { option: "B", answer: "subordinate", chinese_answer: "从属的", chinese_romanization: "cóngshǔ de" },
      { option: "C", answer: "dominant", chinese_answer: "占优势的", chinese_romanization: "zhàn yōushì de" },
      { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'dominant' means most important, powerful, or influential." +
      "<br><br>" +
      "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
      "<br><br>" +
      "(B) 'subordinate' means lower in rank or position." +
      "<br><br>" +
      "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
    chinese_explanation: "(C) '占优势的' 意味着最重要的、最强大的或最有影响力的。" +
      "<br><br>" +
      "(A) '虚弱的' 意味着缺乏执行体力任务的能力；缺乏体力和精力。" +
      "<br><br>" +
      "(B) '从属的' 意味着在等级或职位上较低的。" +
      "<br><br>" +
      "(D) '被动的' 意味着接受或允许发生的事情或他人所做的事情，而没有积极的回应或抵抗。"
    },
    {
        id: 9,
        question: "The __________ business showed great promise, attracting many investors.",
        chinese_question: "这家 __________ 的企业显示出巨大的潜力，吸引了许多投资者。",
        answers: [
            { option: "A", answer: "established", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
            { option: "B", answer: "mature", chinese_answer: "老牌的", chinese_romanization: "lǎopái de" },
            { option: "C", answer: "declining", chinese_answer: "衰退的", chinese_romanization: "shuāituì de" },
            { option: "D", answer: "nascent", chinese_answer: "新兴的", chinese_romanization: "xīnxīng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'nascent' means just coming into existence and beginning to display signs of future potential." +
            "<br><br>" +
            "(A) 'established' means having been in existence for a long time and therefore recognized and generally accepted." +
            "<br><br>" +
            "(B) 'mature' means fully developed physically; full-grown." +
            "<br><br>" +
            "(C) 'declining' means becoming smaller, fewer, or less; decreasing.",
        chinese_explanation: "(D) '新兴的' 意味着刚刚出现并开始显示未来潜力的。" +
            "<br><br>" +
            "(A) '成熟的' 意味着在身体上完全发育；完全长成的。" +
            "<br><br>" +
            "(B) '老牌的' 意味着存在已久的，因此被认可和普遍接受的。" +
            "<br><br>" +
            "(C) '衰退的' 意味着变小、变少或减少的."
    },
    {
        id: 10,
        question: "His __________ arguments during the debate showcased his deep understanding of the subject matter.",
        chinese_question: "他在辩论中的 __________ 论点展示了他对主题的深刻理解。",
        answers: [
            { option: "A", answer: "naive", chinese_answer: "幼稚的", chinese_romanization: "yòuzhì de" },
            { option: "B", answer: "simplistic", chinese_answer: "简单化的", chinese_romanization: "jiǎndān huà de" },
            { option: "C", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "unrefined", chinese_answer: "不文雅的", chinese_romanization: "bù wényǎ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sophisticated' means having a refined knowledge and experience; highly developed or complex." +
            "<br><br>" +
            "(A) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(B) 'simplistic' means treating complex issues and problems as if they were much simpler than they really are." +
            "<br><br>" +
            "(D) 'unrefined' means not elegant or cultured.",
        chinese_explanation: "(C) '复杂的' 意味着具有精致的知识和经验；高度发达或复杂的。" +
            "<br><br>" +
            "(A) '幼稚的' 意味着缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(B) '简单化的' 意味着将复杂的问题和问题视为比实际简单得多。" +
            "<br><br>" +
            "(D) '不文雅的' 意味着不优雅或不文化的."
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
