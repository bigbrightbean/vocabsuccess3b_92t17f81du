// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The artist was known for his __________ of fellow painters and sculptors, who would gather regularly to share their work and inspire each other.",
        chinese_question: "这位艺术家以其由画家和雕塑家组成的__________而闻名，他们会定期聚会分享作品并互相激励。",
        answers: [
            { option: "A", answer: "crowd", chinese_answer: "人群", chinese_romanization: "rénqún" },
            { option: "B", answer: "horde", chinese_answer: "一大群", chinese_romanization: "yī dà qún" },
            { option: "C", answer: "multitude", chinese_answer: "众多", chinese_romanization: "zhòngduō" },
            { option: "D", answer: "coterie", chinese_answer: "小圈子", chinese_romanization: "xiǎoquānzi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'coterie' means a small group of people with shared interests or tastes, especially one that is exclusive of other people." +
            "<br><br>" +
            "(A) 'crowd' means a large number of people gathered together." +
            "<br><br>" +
            "(B) 'horde' means a large group of people." +
            "<br><br>" +
            "(C) 'multitude' means a large number of people or things.",
        chinese_explanation: "(D) '小圈子' 意味着有共同兴趣或品味的一小群人，尤其是一个排他性的小圈子。" +
            "<br><br>" +
            "(A) '人群' 意味着聚集在一起的大量人。" +
            "<br><br>" +
            "(B) '一大群' 意味着一大群人。" +
            "<br><br>" +
            "(C) '众多' 意味着大量的人或事物。"
    },
    {
        id: 2,
        question: "The author's __________ for mystery novels is evident in his own writing style, which often includes intricate plots and suspenseful twists.",
        chinese_question: "这位作者对推理小说的 __________ 在他的写作风格中很明显，经常包括复杂的情节和悬疑的转折。",
        answers: [
                { option: "A", answer: "detachment", chinese_answer: "超然", chinese_romanization: "chāorán" },
                { option: "B", answer: "predilection", chinese_answer: "偏爱", chinese_romanization: "piān'ài" },
                { option: "C", answer: "disinterest", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" },
                { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'predilection' means a preference or special liking for something; a bias in favor of something." +
                "<br><br>" +
                "(A) 'detachment' means the state of being objective or aloof." +
                "<br><br>" +
                "(C) 'disinterest' means lack of interest in something." +
                "<br><br>" +
                "(D) 'disregard' means the action or state of ignoring something.",
        chinese_explanation: "(B) '偏爱'一词意味着对某事物的偏好或特别喜欢；对某事物的偏见。" +
                "<br><br>" +
                "(A) '超然' 意味着客观或冷漠的状态。" +
                "<br><br>" +
                "(C) '不感兴趣' 意味着对某事物缺乏兴趣。" +
                "<br><br>" +
                "(D) '忽视' 意味着忽视某事物的行为或状态。"
    },
    {
        id: 3,
        question: "Her success in the male-dominated industry was seen as an __________, breaking barriers and setting new standards.",
        chinese_question: "她在男性主导行业中的成功被视为一个 __________，打破了障碍并设立了新的标准。",
        answers: [
                { option: "A", answer: "anomaly", chinese_answer: "异常现象", chinese_romanization: "yìcháng xiànxiàng" },
                { option: "B", answer: "tradition", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
                { option: "C", answer: "expectation", chinese_answer: "预期", chinese_romanization: "yùqī" },
                { option: "D", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anomaly' means something that deviates from what is standard, normal, or expected." +
                "<br><br>" +
                "(B) 'tradition' means the transmission of customs or beliefs from generation to generation." +
                "<br><br>" +
                "(C) 'expectation' means a strong belief that something will happen or be the case." +
                "<br><br>" +
                "(D) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness.",
        chinese_explanation: "(A) '异常现象' 意味着偏离标准、正常或预期的事物。" +
                "<br><br>" +
                "(B) '传统' 意味着习俗或信仰从一代传到下一代。" +
                "<br><br>" +
                "(C) '预期' 意味着强烈相信某事会发生或成真。" +
                "<br><br>" +
                "(D) '一致性' 意味着在应用某事物时的符合性，通常是出于逻辑、准确性或公平的需要。"
    },
    {
        id: 4,
    question: "After the busy holiday season, the store returned to its usual __________.",
    chinese_question: "在繁忙的假期季节之后，商店恢复了往常的 __________。",
    answers: [
        { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "B", answer: "bustle", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
        { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "D", answer: "quiescence", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'quiescence' means the state of being quiet or inactive." +
        "<br><br>" +
        "(A) 'chaos' means complete disorder and confusion." +
        "<br><br>" +
        "(B) 'bustle' means excited activity and movement." +
        "<br><br>" +
        "(C) 'excitement' means a feeling of great enthusiasm and eagerness.",
    chinese_explanation: "(D) '平静' 意味着安静或不活动的状态。" +
        "<br><br>" +
        "(A) '混乱' 意味着完全的混乱和混淆。" +
        "<br><br>" +
        "(B) '喧闹' 意味着兴奋的活动和运动。" +
        "<br><br>" +
        "(C) '兴奋' 意味着极大的热情和渴望的感觉。"
    },
    {
        id: 5,
        question: "Her speech had a lasting __________ on the audience, leaving them motivated and inspired.",
        chinese_question: "她的演讲对观众产生了持久的 __________ ，让他们充满动力和灵感。",
        answers: [
            { option: "A", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
            { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impact' means the strong effect or influence that something has on a situation or person." +
                "<br><br>" +
                "(B) 'delay' means a period of time by which something is late or postponed." +
                "<br><br>" +
                "(C) 'distraction' means a thing that prevents someone from giving full attention to something else." +
                "<br><br>" +
                "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(A) '影响' 意味着某物对情况或人的强烈效果或影响。" +
                "<br><br>" +
                "(B) '延迟' 意味着某事迟到或推迟的一段时间。" +
                "<br><br>" +
                "(C) '分心' 意味着阻止某人全神贯注于某事的事物。" +
                "<br><br>" +
                "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 6,
        question: "The __________ of new skills is essential for career growth and development.",
        chinese_question: "新技能的 __________ 对于职业成长和发展至关重要。",
        answers: [
            { option: "A", answer: "loss", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "acquisition", chinese_answer: "获得", chinese_romanization: "huòdé" },
            { option: "D", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acquisition' means the act of obtaining or gaining possession, particularly in learning or skill development." +
            "<br><br>" +
            "(A) 'loss' means the fact or process of losing something or someone." +
            "<br><br>" +
            "(B) 'neglect' means the state or fact of being uncared for." +
            "<br><br>" +
            "(D) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(C) '获得' 意味着获取或获得所有权的行为，特别是在学习或技能发展方面。" +
            "<br><br>" +
            "(A) '失去' 意味着失去某物或某人的事实或过程。" +
            "<br><br>" +
            "(B) '忽视' 意味着无人照顾的状态或事实。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或不做某事的行为。"
    },
    {
        id: 7,
        question: "The customer took __________ at the poor service, demanding to speak to the manager.",
        chinese_question: "顾客对糟糕的服务感到 __________，要求与经理谈话。",
        answers: [
                { option: "A", answer: "umbrage", chinese_answer: "生气", chinese_romanization: "shēngqì" },
                { option: "B", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
                { option: "C", answer: "tolerance", chinese_answer: "容忍", chinese_romanization: "róngrěn" },
                { option: "D", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'umbrage' figuratively means offense or annoyance." +
                "<br><br>" +
                "(B) 'satisfaction' means fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this." +
                "<br><br>" +
                "(C) 'tolerance' means the ability or willingness to tolerate something, in particular the existence of opinions or behavior that one does not necessarily agree with." +
                "<br><br>" +
                "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '生气' 在此语境下意指冒犯或恼怒。" +
                "<br><br>" +
                "(B) '满意' 意味着实现一个人的愿望、期望或需求，或从中获得的快乐。" +
                "<br><br>" +
                "(C) '容忍' 意味着容忍某事物的能力或意愿，尤其是存在的意见或行为，而这些意见或行为不一定同意。" +
                "<br><br>" +
                "(D) '无动于衷' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 8,
    question: "The severe weather conditions put the __________ on their outdoor wedding plans.",
    chinese_question: "恶劣的天气条件给他们的户外婚礼计划来了个 __________。",
    answers: [
        { option: "A", answer: "approval", chinese_answer: "许可", chinese_romanization: "xǔkě" },
        { option: "B", answer: "advancement", chinese_answer: "进展", chinese_romanization: "jìnzhǎn" },
        { option: "C", answer: "hope", chinese_answer: "希望", chinese_romanization: "xīwàng" },
        { option: "D", answer: "kibosh", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'kibosh' figuratively means to put an end to; dispose of decisively." +
        "<br><br>" +
        "(A) 'approval' means the action of officially agreeing to something or accepting something as satisfactory." +
        "<br><br>" +
        "(B) 'advancement' means the process of promoting a cause or plan." +
        "<br><br>" +
        "(C) 'hope' means a feeling of expectation and desire for a certain thing to happen.",
    chinese_explanation: "(D) '停止' 在此语境下比喻结束；果断地处置。" +
        "<br><br>" +
        "(A) '许可' 意味着正式同意某事或接受某事为令人满意的行为。" +
        "<br><br>" +
        "(B) '进展' 意味着促进某个事业或计划的过程。" +
        "<br><br>" +
        "(C) '希望' 意味着期望某事发生的感觉。"
    },
    {
        id: 9,
                question: "Her __________ was evident when she paid for the entire family's vacation.",
                chinese_question: "当她为全家人的假期买单时，她的 __________ 显而易见。",
                answers: [
                    { option: "A", answer: "largesse", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
                    { option: "B", answer: "miserliness", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
                    { option: "C", answer: "selfishness", chinese_answer: "自私", chinese_romanization: "zìsī" },
                    { option: "D", answer: "thrift", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" }
                ],
                correctAnswer: "A",
                explanation: "(A) 'largesse' means generosity in bestowing money or gifts upon others." +
                    "<br><br>" +
                    "(B) 'miserliness' means excessive desire to save money; extreme meanness." +
                    "<br><br>" +
                    "(C) 'selfishness' means lack of consideration for other people." +
                    "<br><br>" +
                    "(D) 'thrift' means the quality of using money and other resources carefully and not wastefully.",
                chinese_explanation: "(A) '慷慨' 意味着慷慨地赠送金钱或礼物给他人。" +
                    "<br><br>" +
                    "(B) '吝啬' 意味着过度节省钱财；极端吝啬。" +
                    "<br><br>" +
                    "(C) '自私' 意味着缺乏对他人的考虑。" +
                    "<br><br>" +
                    "(D) '节俭' 意味着谨慎而不浪费地使用金钱和其他资源的品质。"
    },
    {
        id: 10,
        question: "During the period of __________, many families had to forgo vacations and dining out to save money.",
        chinese_question: "在 __________ 期间，许多家庭不得不放弃度假和外出就餐以节省开支。",
        answers: [
                { option: "A", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
                { option: "B", answer: "austerity", chinese_answer: "紧缩", chinese_romanization: "jǐnsuō" },
                { option: "C", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" },
                { option: "D", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'austerity' means conditions characterized by severity, sternness, or asceticism." +
                "<br><br>" +
                "(A) 'prosperity' means the state of being prosperous." +
                "<br><br>" +
                "(C) 'wealth' means an abundance of valuable possessions or money." +
                "<br><br>" +
                "(D) 'abundance' means a very large quantity of something.",
        chinese_explanation: "(B) '紧缩'一词意味着以严厉、严格或禁欲主义为特征的条件。" +
                "<br><br>" +
                "(A) '繁荣' 意味着繁荣的状态。" +
                "<br><br>" +
                "(C) '财富' 意味着大量的有价值的财产或金钱。" +
                "<br><br>" +
                "(D) '丰富' 意味着大量的某物。"
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
