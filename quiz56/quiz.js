// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ attempt at the presentation left the audience unimpressed.",
        chinese_question: "他在演讲中的 __________ 尝试让观众印象不深。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "B", answer: "energetic", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
            { option: "C", answer: "limp", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "D", answer: "forceful", chinese_answer: "有力的", chinese_romanization: "yǒulì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'limp' means lacking strength or energy; weak." +
            "<br><br>" +
            "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'forceful' means strong and assertive; vigorous and powerful.",
        chinese_explanation: "(C) '无力的' 意味着缺乏力量或能量；虚弱的。" +
            "<br><br>" +
            "(A) '强壮的' 意味着有能力移动重物或执行其他体力要求高的任务。" +
            "<br><br>" +
            "(B) '充满活力的' 意味着显示或涉及很大的活动或活力。" +
            "<br><br>" +
            "(D) '有力的' 意味着强壮且自信的；有力且强大的。"
    },
    {
        id: 2,
        question: "The __________ nature of the software made it popular among different types of users.",
        chinese_question: "软件的__________特性使其在不同类型的用户中很受欢迎。",
        answers: [
            { option: "A", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "B", answer: "versatile", chinese_answer: "多功能的", chinese_romanization: "duō gōngnéng de" },
            { option: "C", answer: "inflexible", chinese_answer: "不灵活的", chinese_romanization: "bù línghuó de" },
            { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'versatile' means able to adapt or be adapted to many different functions or activities." +
            "<br><br>" +
            "(A) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(C) 'inflexible' means unwilling to change or compromise." +
            "<br><br>" +
            "(D) 'limited' means restricted in size, amount, or extent.",
        chinese_explanation: "(B) '多功能的' 意味着能够适应或被适应于许多不同的功能或活动的。" +
            "<br><br>" +
            "(A) '僵硬的' 意味着不能弯曲或被迫变形的；不灵活的。" +
            "<br><br>" +
            "(C) '不灵活的' 意味着不愿意改变或妥协的。" +
            "<br><br>" +
            "(D) '有限的' 意味着在大小、数量或范围上受到限制的。"
    },
    {
        id: 3,
        question: "The atmosphere in the room was __________ with anticipation.",
        chinese_question: "房间里的气氛__________，充满了期待。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "taut", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "D", answer: "peaceful", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'taut' means stretched or pulled tight; tense." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'peaceful' means free from disturbance; tranquil.",
        chinese_explanation: "(B) '紧张的'一词意味着被拉紧或拉紧的；紧张的。" +
            "<br><br>" +
            "(A) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(C) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈的情感。" +
            "<br><br>" +
            "(D) '宁静的' 意味着没有干扰的；宁静的."
    },
    {
        id: 4,
        question: "The actor's voice was ______ as he delivered his emotional speech during the award ceremony.",
        chinese_question: "在颁奖典礼上，当演员发表情感演讲时，他的声音______。",
        answers: [
            { option: "A", answer: "brave", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "B", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "tremulous", chinese_answer: "颤抖", chinese_romanization: "chàndǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tremulous' means shaking or quivering slightly; timid or nervous." +
            "<br><br>" +
            "(A) 'brave' means ready to face and endure danger or pain; showing courage." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(C) 'stable' means not likely to change or fail; firmly established.",
        chinese_explanation: "(D) '颤抖' 意味着轻微地颤抖；胆小或紧张。" +
            "<br><br>" +
            "(A) '勇敢' 意味着准备面对和忍受危险或痛苦；表现出勇气。" +
            "<br><br>" +
            "(B) '自信' 意味着对自己有信心或表现出信心；自信。" +
            "<br><br>" +
            "(C) '稳定' 意味着不易改变或失败；稳固建立。"
    },
    {
        id: 5,
        question: "The investment is considered __________, with a high chance of stable returns.",
        chinese_question: "这项投资被认为是 __________ 的，有很高的稳定回报机会。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "B", answer: "speculative", chinese_answer: "投机", chinese_romanization: "tóujī" },
            { option: "C", answer: "hazardous", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
            { option: "D", answer: "insecure", chinese_answer: "不安全", chinese_romanization: "bù ānquán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'speculative' means involving high risk of loss." +
            "<br><br>" +
            "(C) 'hazardous' means risky or dangerous." +
            "<br><br>" +
            "(D) 'insecure' means not firmly fixed; liable to give way or break.",
        chinese_explanation: "(A) '安全' 意味着受到保护或不暴露于危险或风险；不太可能受到伤害或丢失。" +
            "<br><br>" +
            "(B) '投机' 意味着涉及高风险的损失。" +
            "<br><br>" +
            "(C) '危险' 意味着风险或危险。" +
            "<br><br>" +
            "(D) '不安全' 意味着没有牢固固定；容易给出或破裂。"
    },
    {
        id: 6,
        question: "Her __________ remarks during the meeting showed a lack of understanding of the topic.",
        chinese_question: "她在会议上的 __________ 言论显示出对该话题缺乏理解。",
        answers: [
            { option: "A", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
            { option: "B", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "C", answer: "vacuous", chinese_answer: "空洞的", chinese_romanization: "kōngdòng de" },
            { option: "D", answer: "intelligent", chinese_answer: "聪明的", chinese_romanization: "cōngmíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vacuous' means having or showing a lack of thought or intelligence." +
            "<br><br>" +
            "(A) 'insightful' means having or showing an accurate and deep understanding." +
            "<br><br>" +
            "(B) 'profound' means very great or intense; having or showing great knowledge or insight." +
            "<br><br>" +
            "(D) 'intelligent' means having or showing intelligence, especially of a high level.",
        chinese_explanation: "(C) '空洞的' 意味着缺乏思想或智慧的。" +
            "<br><br>" +
            "(A) '有见地的' 意味着有或显示出准确和深刻的理解的。" +
            "<br><br>" +
            "(B) '深刻的' 意味着非常伟大或强烈的；有或显示出伟大知识或洞察力的。" +
            "<br><br>" +
            "(D) '聪明的' 意味着有或显示出高水平的智慧的。"
    },
    {
        id: 7,
        question: "The artist's __________ style, such as using coffee instead of paint and incorporating digital elements with traditional canvases, made his work stand out in the exhibition.",
        chinese_question: "艺术家__________的风格，例如用咖啡代替油漆并将数字元素与传统画布结合，使他的作品在展览中脱颖而出。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "unconventional", chinese_answer: "非传统的", chinese_romanization: "fēi chuántǒng de" },
            { option: "C", answer: "commonplace", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "usual", chinese_answer: "通常的", chinese_romanization: "tōngcháng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unconventional' means not based on or conforming to what is generally done or believed." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'commonplace' means not unusual; ordinary." +
            "<br><br>" +
            "(D) 'usual' means habitually or typically occurring or done; customary.",
        chinese_explanation: "(B) '非传统的' 意味着不基于或不符合普遍做法或信仰的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特殊或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着不寻常的；普通的。" +
            "<br><br>" +
            "(D) '通常的' 意味着习惯性或典型发生的；习惯的。"
    },
    {
        id: 8,
        question: "She was so __________ that she believed every exaggerated story her friends told her, no matter how outlandish.",
        chinese_question: "她非常 __________，无论朋友们讲的故事多么离奇，她都相信。",
        answers: [
            { option: "A", answer: "gullible", chinese_answer: "容易上当的", chinese_romanization: "róngyì shàngdàng de" },
            { option: "B", answer: "discerning", chinese_answer: "有辨别力的", chinese_romanization: "yǒu biànbiélì de" },
            { option: "C", answer: "astute", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" },
            { option: "D", answer: "wary", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gullible' means easily persuaded to believe something; credulous." + 
            "<br><br>" +
            "(B) 'discerning' means having or showing good judgment." +
            "<br><br>" +
            "(C) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage." +
            "<br><br>" +
            "(D) 'wary' means feeling or showing caution about possible dangers or problems.",
        chinese_explanation: "(A) '容易上当的' 意味着容易被说服相信某事；轻信的。" + 
            "<br><br>" +
            "(B) '有辨别力的' 意味着有或表现出良好的判断力的。" +
            "<br><br>" +
            "(C) '敏锐的' 意味着有或表现出准确评估情况或人的能力，并将其转化为自己的优势的。" +
            "<br><br>" +
            "(D) '警惕的' 意味着对可能的危险或问题感到或表现出谨慎的。"
    },
    {
        id: 9,
        question: "Her __________ attitude after the argument showed that she truly regretted her actions.",
        chinese_question: "争吵后的__________态度表明她真的为自己的行为感到后悔。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "unapologetic", chinese_answer: "不道歉的", chinese_romanization: "bù dàoqiàn de" },
            { option: "C", answer: "remorseful", chinese_answer: "懊悔的", chinese_romanization: "àohuǐ de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'remorseful' means filled with regret or guilt. Figuratively, it can mean showing deep regret and sorrow for one's actions." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'unapologetic' means not acknowledging or expressing regret." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '懊悔的' 一词意味着充满悔恨或内疚的。比喻地，它可以表示对自己的行为表现出深深的遗憾和悲伤。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '不道歉的' 意味着不承认或表达遗憾的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误的。"
    },
    {
        id: 10,
        question: "The detective was known for his __________ instincts, often solving cases others couldn't.",
        chinese_question: "这位侦探以他的 __________ 本能而闻名，常常解决其他人解决不了的案件。",
        answers: [
            { option: "A", answer: "shrewd", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
            { option: "B", answer: "gullible", chinese_answer: "容易受骗", chinese_romanization: "róngyì shòupiàn" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'shrewd' means having or showing sharp powers of judgment; astute." +
            "<br><br>" +
            "(B) 'gullible' means easily persuaded to believe something; credulous." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'hesitant' means lacking decisiveness; uncertain or unwilling to make a decision.",
        chinese_explanation: "(A) '精明' 意味着拥有或表现出敏锐的判断力；精明。" +
            "<br><br>" +
            "(B) '容易受骗' 意味着容易被说服相信某事；轻信。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '犹豫' 意味着缺乏决断力；不确定或不愿做出决定。"
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
