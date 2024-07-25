// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "At the retirement party, her colleagues delivered a heartfelt __________, praising her dedication and contributions over the years.",
        chinese_question: "在退休晚会上，她的同事们发表了真挚的 __________，赞扬了她多年来的奉献和贡献。",
        answers: [
                { option: "A", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "B", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "panegyric", chinese_answer: "颂词", chinese_romanization: "sòngcí" },
                { option: "D", answer: "admonition", chinese_answer: "警告", chinese_romanization: "jǐnggào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'panegyric' means a public speech or published text in praise of someone or something." +
                "<br><br>" +
                "(A) 'critique' means a detailed analysis and assessment of something." +
                "<br><br>" +
                "(B) 'complaint' means an expression of dissatisfaction or annoyance about something." +
                "<br><br>" +
                "(D) 'admonition' means a firm warning or reprimand.",
        chinese_explanation: "(C) '颂词'一词意味着公开的演讲或出版的文本，赞美某人或某物。" +
                "<br><br>" +
                "(A) '批评' 意味着对某事的详细分析和评估。" +
                "<br><br>" +
                "(B) '抱怨' 意味着对某事的不满或恼怒的表达。" +
                "<br><br>" +
                "(D) '警告' 意味着坚定的警告或训诫。"
    },
    {
        id: 2,
        question: "His reputation suffered due to the __________ cast by his rivals during the election campaign.",
        chinese_question: "由于对手在竞选期间的 __________，他的名誉受到了影响。",
        answers: [
                { option: "A", answer: "endorsements", chinese_answer: "代言", chinese_romanization: "dàiyán" },
                { option: "B", answer: "aspersions", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "accolades", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
                { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aspersions' means an attack on the reputation or integrity of someone or something." +
                "<br><br>" +
                "(A) 'endorsements' means an act of giving one's public approval or support to someone or something." +
                "<br><br>" +
                "(C) 'accolades' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
                "<br><br>" +
                "(D) 'praise' means the expression of approval or admiration for someone or something.",
        chinese_explanation: "(B) '诽谤'一词意味着对某人或某事的名誉或诚信的攻击。" +
                "<br><br>" +
                "(A) '代言' 意味着公开表示赞同或支持某人或某事的行为。" +
                "<br><br>" +
                "(C) '荣誉' 意味着作为特殊荣誉或对优点的认可而授予的奖项或特权。" +
                "<br><br>" +
                "(D) '赞美' 意味着对某人或某事表达赞同或钦佩。"
    },
    {
        id: 3,
        question: "The government decided to impose economic __________ on the country as a response to its aggressive actions.",
        chinese_question: "政府决定对该国实施经济 __________ 以回应其侵略行为。",
        answers: [
                { option: "A", answer: "sanctions", chinese_answer: "制裁", chinese_romanization: "zhìcái" },
                { option: "B", answer: "treaties", chinese_answer: "条约", chinese_romanization: "tiáoyuē" },
                { option: "C", answer: "agreements", chinese_answer: "协议", chinese_romanization: "xiéyì" },
                { option: "D", answer: "negotiations", chinese_answer: "谈判", chinese_romanization: "tánpàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sanctions' means measures taken by a country to restrict trade and official contact with another country to force it to obey international law." +
                "<br><br>" +
                "(B) 'treaties' means formally concluded and ratified agreements between countries." +
                "<br><br>" +
                "(C) 'agreements' means negotiated and typically legally binding arrangements between parties." +
                "<br><br>" +
                "(D) 'negotiations' means discussions aimed at reaching an agreement.",
        chinese_explanation: "(A) '制裁' 意味着一个国家采取的措施，限制与另一个国家的贸易和官方联系，以迫使其遵守国际法。" +
                "<br><br>" +
                "(B) '条约' 意味着国家之间正式缔结并批准的协议。" +
                "<br><br>" +
                "(C) '协议' 意味着当事方之间协商并通常具有法律约束力的安排。" +
                "<br><br>" +
                "(D) '谈判' 意味着旨在达成协议的讨论。"
    },
    {
        id: 4,
question: "The small boat was caught in the __________, struggling to stay afloat in the violent waters.",
chinese_question: "小船被困在 __________ 中，挣扎着在汹涌的水中保持漂浮。",
answers: [
    { option: "A", answer: "maelstrom", chinese_answer: "漩涡", chinese_romanization: "xuánwō" },
    { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
    { option: "C", answer: "puddle", chinese_answer: "水坑", chinese_romanization: "shuǐkēng" },
    { option: "D", answer: "breeze", chinese_answer: "微风", chinese_romanization: "wēifēng" }
],
correctAnswer: "A",
explanation: "(A) 'maelstrom' means a powerful whirlpool in the sea or a river, or figuratively, a situation or state of confused movement or violent turmoil." +
    "<br><br>" +
    "(B) 'calm' means the absence of violent or confrontational activity within a place or group." +
    "<br><br>" +
    "(C) 'puddle' means a small pool of liquid, especially of rainwater on the ground." +
    "<br><br>" +
    "(D) 'breeze' means a gentle wind.",
chinese_explanation: "(A) '漩涡' 意味着海洋或河流中的强大漩涡，或比喻一种混乱的运动或暴力动荡状态。" +
    "<br><br>" +
    "(B) '平静' 意味着一个地方或团体内没有暴力或对抗活动。" +
    "<br><br>" +
    "(C) '水坑' 意味着地上的小水池，特别是雨水。" +
    "<br><br>" +
    "(D) '微风' 意味着轻风。"
    },
    {
        id: 5,
        question: "Her poetry is known for its __________ and emotional depth, touching the hearts of many readers.",
        chinese_question: "她的诗歌以其 __________ 和情感深度而著称，打动了许多读者的心。",
        answers: [
                { option: "A", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" },
                { option: "B", answer: "lightness", chinese_answer: "轻盈", chinese_romanization: "qīngyíng" },
                { option: "C", answer: "profundity", chinese_answer: "深刻", chinese_romanization: "shēnkè" },
                { option: "D", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'profundity' means deep insight; great depth of knowledge or thought." +
                "<br><br>" +
                "(A) 'humor' means the quality of being amusing or comic." +
                "<br><br>" +
                "(B) 'lightness' means the quality of being light in weight." +
                "<br><br>" +
                "(D) 'brevity' means concise and exact use of words in writing or speech.",
        chinese_explanation: "(C) '深刻' 意味着深刻的见解；伟大的知识或思想深度。" +
                "<br><br>" +
                "(A) '幽默' 意味着有趣或滑稽的品质。" +
                "<br><br>" +
                "(B) '轻盈' 意味着轻重量的质量。" +
                "<br><br>" +
                "(D) '简洁' 意味着在写作或讲话中使用简明和准确的词语。"
    },
    {
        id: 6,
        question: "The __________ of the management team led to the company's decline, as they failed to innovate or adapt to market changes.",
        chinese_question: "管理团队的 __________ 导致了公司的衰退，因为他们未能创新或适应市场变化。",
        answers: [
                { option: "A", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
                { option: "B", answer: "indolence", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
                { option: "C", answer: "dynamism", chinese_answer: "活力", chinese_romanization: "huólì" },
                { option: "D", answer: "foresight", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indolence' means avoidance of activity or exertion; laziness." +
                "<br><br>" +
                "(A) 'innovation' means the action or process of innovating." +
                "<br><br>" +
                "(C) 'dynamism' means the quality of being characterized by vigorous activity and progress." +
                "<br><br>" +
                "(D) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future.",
        chinese_explanation: "(B) '懒惰'一词意味着避免活动或努力；懒惰。" +
                "<br><br>" +
                "(A) '创新' 意味着创新的行动或过程。" +
                "<br><br>" +
                "(C) '活力' 意味着以充满活力的活动和进步为特征的品质。" +
                "<br><br>" +
                "(D) '远见' 意味着预测或预测未来会发生什么或需要什么的能力。"
    },
    {
        id: 7,
        question: "The architect designed the building as an __________ to the classical styles of ancient Greece.",
        chinese_question: "建筑师设计这座建筑是为了向古希腊的古典风格致以 __________。",
        answers: [
                { option: "A", answer: "homage", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
                { option: "B", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
                { option: "D", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'homage' figuratively means showing respect or honor to someone or something, often by imitating or referencing them in one's own work." +
                "<br><br>" +
                "(B) 'critique' means a detailed analysis and assessment of something." +
                "<br><br>" +
                "(C) 'aversion' means a strong dislike or disinclination." +
                "<br><br>" +
                "(D) 'anomaly' means something that deviates from what is standard, normal, or expected.",
        chinese_explanation: "(A) '致敬' 在此语境下意指通过在自己的作品中模仿或引用某人或某事来表示尊敬或荣誉。" +
                "<br><br>" +
                "(B) '批评' 意味着对某事进行详细分析和评估。" +
                "<br><br>" +
                "(C) '厌恶' 意味着强烈的厌恶或不情愿。" +
                "<br><br>" +
                "(D) '异常' 意味着偏离标准、正常或预期的事物。"
    },
    {
        id: 8,
        question: "The peace talks maintained a __________ of progress, but little was actually achieved.",
        chinese_question: "和平谈判保持了一种进展的 __________，但实际上没有取得什么成果。",
        answers: [
            { option: "A", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" },
            { option: "B", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
            { option: "C", answer: "resolution", chinese_answer: "决议", chinese_romanization: "juéyì" },
            { option: "D", answer: "semblance", chinese_answer: "表象", chinese_romanization: "biǎoxiàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'semblance' means the outward appearance or apparent form of something, especially when the reality is different." +
                    "<br><br>" +
                    "(A)'breakthrough' means a sudden, dramatic, and important discovery or development." +
                    "<br><br>" +
                    "(B)'consensus' means general agreement." +
                    "<br><br>" +
                    "(C)'resolution' means a firm decision to do or not to do something.",
        chinese_explanation: "(D) '表象'一词意味着某物的外在外观或表面形式，尤其是当现实不同的时候。" +
                    "<br><br>" +
                    "(A)'突破' 意味着突然、戏剧性和重要的发现或发展。" +
                    "<br><br>" +
                    "(B)'共识' 意味着普遍的同意。" +
                    "<br><br>" +
                    "(C)'决议' 意味着做某事或不做某事的坚定决定。"
    },
    {
        id: 9,
        question: "The politician promised an __________ in funding for education if elected.",
        chinese_question: "这位政治家承诺如果当选，将 __________ 教育经费。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "elimination", chinese_answer: "消除", chinese_romanization: "xiāochú" },
            { option: "C", answer: "withdrawal", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "D", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'increase' means a rise in the amount, number, or value of something." +
                "<br><br>" +
                "(B) 'elimination' means the complete removal or destruction of something." +
                "<br><br>" +
                "(C) 'withdrawal' means the action of withdrawing something." +
                "<br><br>" +
                "(D) 'decrease' means to make or become smaller or fewer in size, amount, intensity, or degree.",
        chinese_explanation: "(A) '增加' 意味着某物的数量、数目或价值的上升。" +
                "<br><br>" +
                "(B) '消除' 意味着某物的完全移除或毁灭。" +
                "<br><br>" +
                "(C) '撤回' 意味着撤回某物的行为。" +
                "<br><br>" +
                "(D) '减少' 意味着在大小、数量、强度或程度上变小或变少。"
    },
    {
        id: 10,
        question: "Her __________ to criticism shows her maturity and professionalism.",
        chinese_question: "她对批评的 __________ 显示了她的成熟和专业精神。",
        answers: [
            { option: "A", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
            { option: "C", answer: "anger", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "D", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'response' means a reaction to something." +
                "<br><br>" +
                "(A) 'ignorance' means lack of knowledge or information." +
                "<br><br>" +
                "(C) 'anger' means a strong feeling of annoyance, displeasure, or hostility." +
                "<br><br>" +
                "(D) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(B) '反应' 意味着对某事的反应。" +
                "<br><br>" +
                "(A) '无知' 意味着缺乏知识或信息。" +
                "<br><br>" +
                "(C) '愤怒' 意味着强烈的恼怒、不悦或敌意。" +
                "<br><br>" +
                "(D) '避免' 意味着远离或不做某事的行为。"
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
