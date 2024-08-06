// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ during the meeting annoyed her colleagues, as she insisted on correcting every minor error.",
        chinese_question: "她在会议上的 __________ 惹恼了同事，因为她坚持纠正每一个小错误。",
        answers: [
                { option: "A", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" },
                { option: "B", answer: "pedantry", chinese_answer: "卖弄学问", chinese_romanization: "màinòng xuéwèn" },
                { option: "C", answer: "leniency", chinese_answer: "宽大", chinese_romanization: "kuāndà" },
                { option: "D", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pedantry' means excessive concern with minor details and rules." +
                "<br><br>" +
                "(A) 'flexibility' means the quality of bending easily without breaking." +
                "<br><br>" +
                "(C) 'leniency' means the fact or quality of being more merciful or tolerant than expected." +
                "<br><br>" +
                "(D) 'generosity' means the quality of being kind and generous.",
        chinese_explanation: "(B) '卖弄学问'一词意味着过分关注细枝末节和规则。" +
                "<br><br>" +
                "(A) '灵活性' 意味着容易弯曲而不折断的品质。" +
                "<br><br>" +
                "(C) '宽大' 意味着比预期更仁慈或更宽容的事实或品质。" +
                "<br><br>" +
                "(D) '慷慨' 意味着善良和慷慨的品质。"
    },
    {
        id: 2,
        question: "Her __________ made her seem aloof and detached, even when others were clearly stressed and worried.",
        chinese_question: "她的 __________ 让她显得冷漠疏离，即使在别人明显紧张和担忧的时候。",
        answers: [
                { option: "A", answer: "insouciance", chinese_answer: "漫不经心", chinese_romanization: "mànbùjīngxīn" },
                { option: "B", answer: "concern", chinese_answer: "关心", chinese_romanization: "guānxīn" },
                { option: "C", answer: "engagement", chinese_answer: "参与", chinese_romanization: "cānyù" },
                { option: "D", answer: "tension", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'insouciance' means casual lack of concern; indifference." +
                "<br><br>" +
                "(B) 'concern' means a matter of interest or importance to someone." +
                "<br><br>" +
                "(C) 'engagement' means participation or involvement." +
                "<br><br>" +
                "(D) 'tension' means the state of being stretched tight.",
        chinese_explanation: "(A) '漫不经心'一词意味着随意缺乏关心；冷漠。" +
                "<br><br>" +
                "(B) '关心' 意味着对某人感兴趣或重要的事物。" +
                "<br><br>" +
                "(C) '参与' 意味着参与或介入。" +
                "<br><br>" +
                "(D) '紧张' 意味着被拉紧的状态。"
    },
    {
        id: 3,
        question: "The investor's __________ allowed him to predict market trends accurately, resulting in substantial profits.",
        chinese_question: "这位投资者的 __________ 使他能够准确预测市场趋势，从而获得可观的利润。",
        answers: [
                { option: "A", answer: "prescience", chinese_answer: "预见", chinese_romanization: "yùjiàn" },
                { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "C", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
                { option: "D", answer: "impulsiveness", chinese_answer: "冲动", chinese_romanization: "chōngdòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prescience' means the fact of knowing something before it takes place; foreknowledge." +
                "<br><br>" +
                "(B) 'ignorance' means lack of knowledge or information." +
                "<br><br>" +
                "(C) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
                "<br><br>" +
                "(D) 'impulsiveness' means acting or done without forethought.",
        chinese_explanation: "(A) '预见' 意味着在事情发生之前知道某事的事实；预知。" +
                "<br><br>" +
                "(B) '无知' 意味着缺乏知识或信息。" +
                "<br><br>" +
                "(C) '鲁莽' 意味着对危险或后果不予理会。" +
                "<br><br>" +
                "(D) '冲动' 意味着在没有深思熟虑的情况下行动或完成的。"
    },
    {
        id: 4,
        question: "The company's __________ involved creating fake reviews to boost their product's ratings online.",
        chinese_question: "这家公司的 __________ 涉及创建虚假评论以提高其产品的在线评级。",
        answers: [
            { option: "A", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "C", answer: "forthrightness", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "D", answer: "subterfuge", chinese_answer: "诡计", chinese_romanization: "guǐjì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'subterfuge' figuratively means deceit used in order to achieve one's goal." +
            "<br><br>" +
            "(A) 'transparency' means the quality of being easy to see through." +
            "<br><br>" +
            "(B) 'integrity' means the quality of being honest and having strong moral principles." +
            "<br><br>" +
            "(C) 'forthrightness' means directness in manner or speech.",
        chinese_explanation: "(D) '诡计' 在此语境下意指为了达到目的而使用的欺骗。" +
            "<br><br>" +
            "(A) '透明' 意味着容易看穿的品质。" +
            "<br><br>" +
            "(B) '正直' 意味着诚实并具有强烈道德原则的品质。" +
            "<br><br>" +
            "(C) '直率' 意味着在方式或言语上的直接性。"
    },
    {
        id: 5,
        question: "She felt a strong __________ towards the idea of moving to a new city, as she had grown attached to her current home.",
        chinese_question: "她对搬到新城市的想法有强烈的 __________，因为她已经对目前的家产生了感情。",
        answers: [
                { option: "A", answer: "antipathy", chinese_answer: "反感", chinese_romanization: "fǎngǎn" },
                { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "curiosity", chinese_answer: "好奇", chinese_romanization: "hàoqí" },
                { option: "D", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'antipathy' means a deep-seated feeling of dislike; aversion." +
                "<br><br>" +
                "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
                "<br><br>" +
                "(C) 'curiosity' means a strong desire to know or learn something." +
                "<br><br>" +
                "(D) 'excitement' means a feeling of great enthusiasm and eagerness.",
        chinese_explanation: "(A) '反感' 意味着深深的厌恶感；反感。" +
                "<br><br>" +
                "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
                "<br><br>" +
                "(C) '好奇' 意味着强烈的想知道或学习某事的愿望。" +
                "<br><br>" +
                "(D) '兴奋' 意味着极大的热情和渴望的感觉。"
    },
    {
        id: 6,
    question: "The blooming flowers are a __________ of spring.",
    chinese_question: "盛开的花朵是春天的 __________ 。",
    answers: [
        { option: "A", answer: "harbinger", chinese_answer: "预兆", chinese_romanization: "yùzhào" },
        { option: "B", answer: "result", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
        { option: "C", answer: "aftermath", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
        { option: "D", answer: "consequence", chinese_answer: "结果", chinese_romanization: "jiéguǒ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harbinger' means a person or thing that announces or signals the approach of another." +
                "<br><br>" +
                "(B) 'result' means a consequence, effect, or outcome of something." +
                "<br><br>" +
                "(C) 'aftermath' means the consequences or aftereffects of a significant unpleasant event." +
                "<br><br>" +
                "(D) 'consequence' means a result or effect, typically one that is unwelcome or unpleasant.",
    chinese_explanation: "(A) '预兆' 意味着预示或信号另一件事情即将来临的人或事物。" +
                "<br><br>" +
                "(B) '结果' 意味着某事的后果、效果或结果。" +
                "<br><br>" +
                "(C) '后果' 意味着重要的不愉快事件的后果或余波。" +
                "<br><br>" +
                "(D) '结果' 意味着后果或效果，通常是一个不受欢迎或不愉快的。"
    },
    {
        id: 7,
    question: "The athlete's career hit its __________ after several injuries prevented him from competing.",
    chinese_question: "多次受伤使他无法参赛后，这位运动员的职业生涯达到了 __________。",
    answers: [
        { option: "A", answer: "pinnacle", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
        { option: "B", answer: "threshold", chinese_answer: "门槛", chinese_romanization: "ménkǎn" },
        { option: "C", answer: "surge", chinese_answer: "激增", chinese_romanization: "jīzēng" },
        { option: "D", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'nadir' means the lowest point in the fortunes of a person or organization." +
        "<br><br>" +
        "(A) 'pinnacle' means the most successful point; the culmination." +
        "<br><br>" +
        "(B) 'threshold' means the point of entry or beginning." +
        "<br><br>" +
        "(C) 'surge' means a sudden powerful forward or upward movement.",
    chinese_explanation: "(D) '最低点' 意味着一个人或组织财富的最低点。" +
        "<br><br>" +
        "(A) '顶点' 意味着最成功的点；高潮。" +
        "<br><br>" +
        "(B) '门槛' 意味着进入或开始的点。" +
        "<br><br>" +
        "(C) '激增' 意味着突然强劲的前进或上升运动。"
    },
    {
        id: 8,
        question: "The __________ between the two scientists over the research findings caused a rift in the academic community.",
        chinese_question: "两位科学家对研究结果的 __________ 导致学术界出现了裂痕。",
        answers: [
                { option: "A", answer: "schism", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
                { option: "B", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
                { option: "C", answer: "collaboration", chinese_answer: "合作", chinese_romanization: "hézuò" },
                { option: "D", answer: "concord", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'schism' means a split or division between strongly opposed sections or parties, caused by differences in opinion or belief." +
                "<br><br>" +
                "(B) 'unity' means the state of being united or joined as a whole." +
                "<br><br>" +
                "(C) 'collaboration' means the action of working with someone to produce or create something." +
                "<br><br>" +
                "(D) 'concord' means agreement or harmony between people or groups.",
        chinese_explanation: "(A) '分裂'一词意味着由于意见或信仰的分歧而在强烈反对的部分或政党之间的分裂或分裂。" +
                "<br><br>" +
                "(B) '团结' 意味着联合或作为一个整体的状态。" +
                "<br><br>" +
                "(C) '合作' 意味着与某人合作以生产或创造某物的行为。" +
                "<br><br>" +
                "(D) '和谐' 意味着人与人之间的协议或和谐。"
    },
    {
        id: 9,
        question: "Her __________ was a significant obstacle to her academic success, as she frequently skipped studying in favour of watching TV.",
        chinese_question: "她的 __________ 是她学业成功的重大障碍，因为她经常逃避学习而选择看电视。",
        answers: [
                { option: "A", answer: "industriousness", chinese_answer: "勤劳", chinese_romanization: "qínláo" },
                { option: "B", answer: "indolence", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
                { option: "C", answer: "zeal", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "D", answer: "productivity", chinese_answer: "生产力", chinese_romanization: "shēngchǎnlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indolence' means avoidance of activity or exertion; laziness." +
                "<br><br>" +
                "(A) 'industriousness' means diligence and hard work." +
                "<br><br>" +
                "(C) 'zeal' means great energy or enthusiasm in pursuit of a cause or an objective." +
                "<br><br>" +
                "(D) 'productivity' means the state or quality of producing something, especially crops.",
        chinese_explanation: "(B) '懒惰'一词意味着避免活动或努力；懒惰。" +
                "<br><br>" +
                "(A) '勤劳' 意味着勤奋和努力工作。" +
                "<br><br>" +
                "(C) '热情' 意味着追求某一事业或目标的巨大能量或热情。" +
                "<br><br>" +
                "(D) '生产力' 意味着生产某物，尤其是农作物的状态或质量。"
    },
    {
        id: 10,
        question: "The film's __________ made the fictional story feel incredibly real, immersing the audience in its world.",
        chinese_question: "这部电影的 __________ 使得虚构的故事感觉非常真实，让观众沉浸在其世界中。",
        answers: [
                { option: "A", answer: "verisimilitude", chinese_answer: "逼真", chinese_romanization: "bīzhēn" },
                { option: "B", answer: "fantasy", chinese_answer: "幻想", chinese_romanization: "huànxiǎng" },
                { option: "C", answer: "absurdity", chinese_answer: "荒谬", chinese_romanization: "huāngmiù" },
                { option: "D", answer: "artificiality", chinese_answer: "人工", chinese_romanization: "réngōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'verisimilitude' means the appearance of being true or real." +
                "<br><br>" +
                "(B) 'fantasy' means the faculty or activity of imagining things, especially things that are impossible or improbable." +
                "<br><br>" +
                "(C) 'absurdity' means the quality or state of being ridiculous or wildly unreasonable." +
                "<br><br>" +
                "(D) 'artificiality' means the quality of being made or produced by human beings rather than occurring naturally.",
        chinese_explanation: "(A) '逼真' 意味着看起来真实。" +
                "<br><br>" +
                "(B) '幻想' 意味着想象事物的能力或活动，特别是那些不可能或不大可能发生的事物。" +
                "<br><br>" +
                "(C) '荒谬' 意味着荒谬或极其不合理的状态或质量。" +
                "<br><br>" +
                "(D) '人工' 意味着由人类制造或生产而不是自然发生的质量。"
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
