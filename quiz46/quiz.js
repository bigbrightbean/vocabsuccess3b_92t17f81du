// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ gossip she spread about her colleague damaged his reputation and career prospects.",
        chinese_question: "她散布的 __________ 流言损害了同事的声誉和职业前景。",
        answers: [
            { option: "A", answer: "malevolent", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "C", answer: "innocuous", chinese_answer: "无伤大雅的", chinese_romanization: "wúshāngdàyǎ de" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'malevolent' means having or showing a wish to do evil to others." + 
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(C) 'innocuous' means not harmful or offensive." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(A) '恶意的' 意味着怀有或表现出对他人作恶的愿望。" + 
            "<br><br>" +
            "(B) '无害的' 意味着不能或不太可能造成伤害的。" +
            "<br><br>" +
            "(C) '无伤大雅的' 意味着无害或无冒犯的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着价值或重要性很小的。"
    },
    {
        id: 2,
    question: "His passion for painting lay __________ for years until he finally picked up a brush again.",
    chinese_question: "他对绘画的热情 __________ 了多年，直到他再次拿起画笔。",
    answers: [
      { option: "A", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" },
      { option: "B", answer: "thriving", chinese_answer: "兴盛的", chinese_romanization: "xīngshèng de" },
      { option: "C", answer: "evident", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
      { option: "D", answer: "expressed", chinese_answer: "表达的", chinese_romanization: "biǎodá de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dormant' means having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep." +
      "<br><br>" +
      "(B) 'thriving' means prosperous and growing; flourishing." +
      "<br><br>" +
      "(C) 'evident' means clearly seen or understood; obvious." +
      "<br><br>" +
      "(D) 'expressed' means conveyed a thought or feeling in words or by gestures and conduct.",
    chinese_explanation: "(A) '休眠的' 意味着正常的生理功能暂停或减慢一段时间；如同在深度睡眠中。" +
      "<br><br>" +
      "(B) '兴盛的' 意味着繁荣和成长；蓬勃发展。" +
      "<br><br>" +
      "(C) '明显的' 意味着清楚地看到或理解的；明显的。" +
      "<br><br>" +
      "(D) '表达的' 意味着用言语或手势和行为传达一种思想或感觉的。"
    },
    {
        id: 3,
        question: "With the right resources, achieving our ambitious goals is __________.",
        chinese_question: "有了合适的资源，实现我们的雄心勃勃的目标是 __________ 的。",
        answers: [
            { option: "A", answer: "impractical", chinese_answer: "不切实际", chinese_romanization: "bù qiè shíjì" },
            { option: "B", answer: "practicable", chinese_answer: "可行", chinese_romanization: "kěxíng" },
            { option: "C", answer: "far-fetched", chinese_answer: "牵强", chinese_romanization: "qiānqiǎng" },
            { option: "D", answer: "improbable", chinese_answer: "不太可能", chinese_romanization: "bù tài kěnéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'practicable' means capable of being done or put into practice successfully." +
            "<br><br>" +
            "(A) 'impractical' means not sensible or realistic." +
            "<br><br>" +
            "(C) 'far-fetched' means unlikely and unconvincing." +
            "<br><br>" +
            "(D) 'improbable' means not likely to be true or to happen.",
        chinese_explanation: "(B) '可行' 意味着能够成功地完成或付诸实践。" +
            "<br><br>" +
            "(A) '不切实际' 意味着不合理或不现实。" +
            "<br><br>" +
            "(C) '牵强' 意味着不太可能和不可信。" +
            "<br><br>" +
            "(D) '不太可能' 意味着不太可能是真的或发生。"
    },
    {
        id: 4,
        question: "The evening was __________, with soft music and candlelight creating a magical atmosphere.",
        chinese_question: "那个夜晚是 __________ 的，柔和的音乐和烛光营造出一种神奇的氛围。",
        answers: [
            { option: "A", answer: "enchanting", chinese_answer: "迷人", chinese_romanization: "mí rén" },
            { option: "B", answer: "unremarkable", chinese_answer: "平凡", chinese_romanization: "píngfán" },
            { option: "C", answer: "harsh", chinese_answer: "刺耳", chinese_romanization: "cì'ěr" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enchanting' means delightfully charming or attractive." +
            "<br><br>" +
            "(B) 'unremarkable' means not particularly interesting or surprising." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '迷人' 意味着令人愉快地迷人或有吸引力的。" +
            "<br><br>" +
            "(B) '平凡' 意味着没有特别有趣或令人惊讶的。" +
            "<br><br>" +
            "(C) '刺耳' 意味着不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(D) '普通' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 5,
        question: "The members of the club shared a __________ spirit, always ready to help each other and work together.",
        chinese_question: "俱乐部的成员们分享着 __________ 的精神，总是准备好互相帮助和一起工作。",
        answers: [
            { option: "A", answer: "competitive", chinese_answer: "竞争的", chinese_romanization: "jìngzhēng de" },
            { option: "B", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "solitary", chinese_answer: "孤独的", chinese_romanization: "gūdú de" },
            { option: "D", answer: "fraternal", chinese_answer: "兄弟般的", chinese_romanization: "xiōngdì bān de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fraternal' means relating to brothers; brotherly." + 
            "<br><br>" +
            "(A) 'competitive' means having a strong desire to compete or to succeed." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'solitary' means done or existing alone.",
        chinese_explanation: "(D) '兄弟般的' 意味着与兄弟有关的；兄弟般的。" + 
            "<br><br>" +
            "(A) '竞争的' 意味着有强烈竞争或成功欲望的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
            "<br><br>" +
            "(C) '孤独的' 意味着独自完成或存在的。"
    },
    {
        id: 6,
        question: "Her role in the project was __________ to its success, coordinating all the teams and ensuring deadlines were met.",
        chinese_question: "她在项目中的角色对成功至关 __________，负责协调所有团队并确保完成截止日期。",
        answers: [
            { option: "A", answer: "central", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "supplementary", chinese_answer: "补充的", chinese_romanization: "bǔchōng de" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'central' means of the greatest importance; principal or essential." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'supplementary' means completing or enhancing something." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(A) '重要的' 意味着最重要的；主要或必不可少的。" +
            "<br><br>" +
            "(B) '次要的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(C) '补充的' 意味着完成或增强某物的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着小到或不重要到不值得考虑的。"
    },
    {
        id: 7,
        question: "His plans to build a castle in the air were __________, but with no practical foundation or realistic chance of success.",
        chinese_question: "他空中楼阁的计划是 __________ 的，但没有实际基础或现实的成功机会。",
        answers: [
            { option: "A", answer: "fanciful", chinese_answer: "幻想的", chinese_romanization: "huànxiǎng de" },
            { option: "B", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" },
            { option: "C", answer: "sensible", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "D", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fanciful' means over-imaginative and unrealistic." +
            "<br><br>" +
            "(B) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
            "<br><br>" +
            "(C) 'sensible' means chosen in accordance with wisdom or prudence." +
            "<br><br>" +
            "(D) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas.",
        chinese_explanation: "(A) '幻想的' 意味着过度想象和不现实的。" +
            "<br><br>" +
            "(B) '务实的' 意味着以实际而不是理论上的考虑处理事情。" +
            "<br><br>" +
            "(C) '明智的' 意味着根据智慧或谨慎选择的。" +
            "<br><br>" +
            "(D) '实际的' 意味着关心实际操作或使用某物的，而不是理论和想法的."
    },
    {
        id: 8,
        question: "She was very __________, always making new friends and engaging in conversations.",
        chinese_question: "她非常__________，总是交新朋友并参与对话。",
        answers: [
            { option: "A", answer: "antisocial", chinese_answer: "反社会的", chinese_romanization: "fǎn shèhuì de" },
            { option: "B", answer: "social", chinese_answer: "善于社交的", chinese_romanization: "shànyú shèjiāo de" },
            { option: "C", answer: "isolated", chinese_answer: "孤立的", chinese_romanization: "gūlì de" },
            { option: "D", answer: "reclusive", chinese_answer: "隐居的", chinese_romanization: "yǐnjū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'social' means relating to society or its organization." +
            "<br><br>" +
            "(A) 'antisocial' means not sociable or wanting the company of others." +
            "<br><br>" +
            "(C) 'isolated' means far away from other places, buildings, or people; remote." +
            "<br><br>" +
            "(D) 'reclusive' means avoiding the company of other people; solitary.",
        chinese_explanation: "(B) '善于社交的'一词意味着与社会或其组织有关的。" +
            "<br><br>" +
            "(A) '反社会的' 意味着不善于交际或不愿与他人在一起的。" +
            "<br><br>" +
            "(C) '孤立的' 意味着远离其他地方、建筑物或人的；偏远的。" +
            "<br><br>" +
            "(D) '隐居的' 意味着避免与他人在一起的；孤独的。"
    },
    {
        id: 9,
        question: "The doctor's expression was __________ as he delivered the news, indicating the seriousness of the patient's condition.",
        chinese_question: "医生的表情很 __________，当他传达消息时，表明患者的病情非常严重。",
        answers: [
            { option: "A", answer: "grave", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "lighthearted", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grave' means giving cause for alarm; serious." + 
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'lighthearted' means cheerful and carefree.",
        chinese_explanation: "(A) '严肃的' 意味着引起警觉的；严重的。" + 
            "<br><br>" +
            "(B) '愉快的' 意味着明显快乐和乐观的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '轻松的' 意味着愉快和无忧无虑的。"
    },
    {
        id: 10,
        question: "Her speech was full of __________ expressions that native speakers understood instantly but confused the non-native audience.",
        chinese_question: "她的演讲充满了 __________ 的表达，母语者立刻明白，但让非母语观众感到困惑。",
        answers: [
            { option: "A", answer: "literal", chinese_answer: "字面的", chinese_romanization: "zìmiàn de" },
            { option: "B", answer: "straightforward", chinese_answer: "简单明了的", chinese_romanization: "jiǎndān míngliǎo de" },
            { option: "C", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "D", answer: "idiomatic", chinese_answer: "惯用的", chinese_romanization: "guànyòng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'idiomatic' means using, containing, or denoting expressions that are natural to a native speaker." +
            "<br><br>" +
            "(A) 'literal' means taking words in their usual or most basic sense without metaphor or allegory." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to understand." +
            "<br><br>" +
            "(C) 'plain' means simple or ordinary in character.",
        chinese_explanation: "(D) '惯用的' 意味着使用、包含或表示对母语者来说自然的表达。" +
            "<br><br>" +
            "(A) '字面的' 意味着用词按其通常或最基本的意义，没有比喻或寓言。" +
            "<br><br>" +
            "(B) '简单明了的' 意味着简单和容易理解的。" +
            "<br><br>" +
            "(C) '朴素的' 意味着在性格上简单或普通的。"
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
