// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Breaking from his usual __________, he decided to take a different route to work.",
        chinese_question: "打破了他通常的 __________ ，他决定走另一条路线去上班。",
        answers: [
            { option: "A", answer: "disaster", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "B", answer: "surprise", chinese_answer: "惊喜", chinese_romanization: "jīngxǐ" },
            { option: "C", answer: "shock", chinese_answer: "震惊", chinese_romanization: "zhènjīng" },
            { option: "D", answer: "routine", chinese_answer: "例行程序", chinese_romanization: "lìxíng chéngxù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(A) 'disaster' means a sudden event, such as an accident or a natural catastrophe, that causes great damage or loss of life." +
            "<br><br>" +
            "(B) 'surprise' means an unexpected or astonishing event, fact, or thing." +
            "<br><br>" +
            "(C) 'shock' means a sudden upsetting or surprising event or experience.",
        chinese_explanation: "(D) '例行程序' 意味着定期遵循的一系列行动；固定程序。" +
            "<br><br>" +
            "(A) '灾难' 意味着造成巨大损失或生命损失的突然事件，如事故或自然灾害。" +
            "<br><br>" +
            "(B) '惊喜' 意味着意想不到的或令人惊讶的事件、事实或事物。" +
            "<br><br>" +
            "(C) '震惊' 意味着突然令人不安或惊讶的事件或经历。"
    },
    {
        id: 2,
        question: "The company's recent __________ of a smaller tech firm will help expand its product line and customer base.",
        chinese_question: "公司最近 __________ 一家小型科技公司，这将有助于扩大其产品线和客户群。",
        answers: [
                { option: "A", answer: "acquisition", chinese_answer: "收购", chinese_romanization: "shōugòu" },
                { option: "B", answer: "sale", chinese_answer: "销售", chinese_romanization: "xiāoshòu" },
                { option: "C", answer: "donation", chinese_answer: "捐赠", chinese_romanization: "juānzèng" },
                { option: "D", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquisition' means the act of obtaining or gaining possession, especially for a company." +
                "<br><br>" +
                "(B) 'sale' means the exchange of a commodity for money; the action of selling something." +
                "<br><br>" +
                "(C) 'donation' means something that is given to a charity, especially a sum of money." +
                "<br><br>" +
                "(D) 'abandonment' means the action or fact of abandoning or being abandoned.",
        chinese_explanation: "(A) '收购' 意味着获取或获得所有权的行为，尤其是对公司的收购。" +
                "<br><br>" +
                "(B) '销售' 意味着用金钱交换商品的行为；销售某物的行为。" +
                "<br><br>" +
                "(C) '捐赠' 意味着捐赠给慈善机构的东西，尤其是一笔钱。" +
                "<br><br>" +
                "(D) '放弃' 意味着放弃或被放弃的行为或事实。"
    },
    {
        id: 3,
    question: "He gave a __________ on the importance of discipline to his children.",
    chinese_question: "他给孩子们作了一次关于纪律重要性的 __________ 。",
    answers: [
        { option: "A", answer: "harangue", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
        { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "C", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harangue' means a lengthy and aggressive speech." +
                "<br><br>" +
                "(B) 'whisper' means to speak very softly using one's breath without one's vocal cords." +
                "<br><br>" +
                "(C) 'compliment' means a polite expression of praise or admiration." +
                "<br><br>" +
                "(D) 'suggestion' means an idea or plan put forward for consideration.",
    chinese_explanation: "(A) '训斥' 意味着冗长而激烈的讲话。" +
                "<br><br>" +
                "(B) '低语' 意味着用气声非常轻柔地说话。" +
                "<br><br>" +
                "(C) '赞美' 意味着礼貌的赞扬或钦佩。" +
                "<br><br>" +
                "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 4,
        question: "The company gained __________ in the industry by consistently delivering quality products.",
        chinese_question: "公司通过持续提供优质产品赢得了行业的 __________。",
        answers: [
            { option: "A", answer: "disrespect", chinese_answer: "不尊重", chinese_romanization: "bù zūnzhòng" },
            { option: "B", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'respect' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements." +
                "<br><br>" +
                "(A) 'disrespect' means lack of respect or courtesy." +
                "<br><br>" +
                "(C) 'ignorance' means lack of knowledge or information." +
                "<br><br>" +
                "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(B) '尊重' 意味着因某人的能力、品质或成就而深深钦佩他们。" +
                "<br><br>" +
                "(A) '不尊重' 意味着缺乏尊重或礼貌。" +
                "<br><br>" +
                "(C) '无知' 意味着缺乏知识或信息。" +
                "<br><br>" +
                "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 5,
        question: "His __________ with finances led to his eventual bankruptcy.",
        chinese_question: "他对财务的 __________ 最终导致了他的破产。",
        answers: [
            { option: "A", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "B", answer: "frugality", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" },
            { option: "C", answer: "thriftiness", chinese_answer: "节约", chinese_romanization: "jiéyuē" },
            { option: "D", answer: "carefulness", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
                "<br><br>" +
                "(B) 'frugality' means the quality of being economical with money or food." +
                "<br><br>" +
                "(C) 'thriftiness' means the quality of using money and other resources carefully and not wastefully." +
                "<br><br>" +
                "(D) 'carefulness' means the quality of being careful to avoid danger or mistakes.",
        chinese_explanation: "(A) '鲁莽' 意味着对危险或后果缺乏关注。" +
                "<br><br>" +
                "(B) '节俭' 意味着在金钱或食物上节俭的品质。" +
                "<br><br>" +
                "(C) '节约' 意味着仔细而不浪费地使用金钱和其他资源的品质。" +
                "<br><br>" +
                "(D) '小心' 意味着避免危险或错误的小心品质。"
    },
    {
        id: 6,
        question: "The film's __________ was remarkable, making the audience feel as though they were witnessing real events.",
        chinese_question: "这部电影的 __________ 非常出色，让观众感觉自己在见证真实事件。",
        answers: [
            { option: "A", answer: "fantasy", chinese_answer: "幻想", chinese_romanization: "huànxiǎng" },
            { option: "B", answer: "implausibility", chinese_answer: "不可信", chinese_romanization: "bù kěxìn" },
            { option: "C", answer: "artificiality", chinese_answer: "人工", chinese_romanization: "réngōng" },
            { option: "D", answer: "verisimilitude", chinese_answer: "逼真", chinese_romanization: "bīzhēn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'verisimilitude' means the appearance of being true or real." +
            "<br><br>" +
            "(A) 'fantasy' means the faculty or activity of imagining things, especially things that are impossible or improbable." +
            "<br><br>" +
            "(B) 'implausibility' means not having the appearance of truth or credibility." +
            "<br><br>" +
            "(C) 'artificiality' means the quality of being made or produced by human beings rather than occurring naturally.",
        chinese_explanation: "(D) '逼真'一词意味着看起来真实的外观。" +
            "<br><br>" +
            "(A) '幻想' 意味着想象事物的能力或活动，尤其是不可能或不大可能的事物。" +
            "<br><br>" +
            "(B) '不可信' 意味着没有真实或可信的外观。" +
            "<br><br>" +
            "(C) '人工' 意味着由人类制造或生产的品质，而不是自然发生的。"
    },
    {
        id: 7,
        question: "The hiring __________ at the company includes several rounds of interviews.",
        chinese_question: "公司的招聘 __________ 包括几轮面试。",
        answers: [
            { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
            { option: "C", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
            { option: "D", answer: "event", chinese_answer: "事件", chinese_romanization: "shìjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'process' means a series of actions or steps taken in order to achieve a particular end." +
                "<br><br>" +
                "(A) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
                "<br><br>" +
                "(C) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." +
                "<br><br>" +
                "(D) 'event' means a thing that happens, especially one of importance.",
        chinese_explanation: "(B) '过程' 意味着为了实现特定目标而采取的一系列行动或步骤。" +
                "<br><br>" +
                "(A) '庆祝' 意味着通过参与愉快的、通常是社交活动来标记对重要事件或场合的喜悦。" +
                "<br><br>" +
                "(C) '事故' 意味着意外且无意中发生的不幸事件。" +
                "<br><br>" +
                "(D) '事件' 意味着发生的事情，尤其是重要的事情。"
    },
    {
        id: 8,
        question: "The report was criticized for its __________, which obscured the main findings and made it hard to follow.",
        chinese_question: "该报告因其 __________ 而受到批评，这掩盖了主要发现并使其难以理解。",
        answers: [
                { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "B", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
                { option: "C", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchálì" },
                { option: "D", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'verbosity' means the quality of using more words than needed; wordiness." +
                "<br><br>" +
                "(A) 'clarity' means the quality of being clear." +
                "<br><br>" +
                "(C) 'insight' means the capacity to gain an accurate and deep understanding of someone or something." +
                "<br><br>" +
                "(D) 'brevity' means concise and exact use of words in writing or speech.",
        chinese_explanation: "(B) '冗长'一词意味着使用比需要更多的词；多话。" +
                "<br><br>" +
                "(A) '清晰' 意味着清晰的质量。" +
                "<br><br>" +
                "(C) '洞察力' 意味着获得准确和深入了解某人或某事的能力。" +
                "<br><br>" +
                "(D) '简洁' 意味着在写作或讲话中使用简明准确的词语。"
    },
    {
        id: 9,
        question: "The __________ of an office romance created a lot of gossip among the staff.",
        chinese_question: "办公室恋情的 __________ 在员工中引起了很多闲话。",
        answers: [
            { option: "A", answer: "rumour", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
            { option: "B", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "C", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "D", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rumour' means a currently circulating story or report of uncertain or doubtful truth." +
                "<br><br>" +
                "(B) 'reality' means the world or the state of things as they actually exist." +
                "<br><br>" +
                "(C) 'fact' means a thing that is known or proved to be true." +
                "<br><br>" +
                "(D) 'truth' means that which is true or in accordance with fact or reality.",
        chinese_explanation: "(A) '谣言' 意味着目前流传的关于不确定或可疑真相的故事或报告。" +
                "<br><br>" +
                "(B) '现实' 意味着事物实际上存在的状态。" +
                "<br><br>" +
                "(C) '事实' 意味着已知或被证明为真的事情。" +
                "<br><br>" +
                "(D) '真相' 意味着符合事实或现实的东西。"
    },
    {
        id: 10,
    question: "The book provided a rich __________ of knowledge on ancient civilizations.",
    chinese_question: "这本书提供了丰富的 __________ 古代文明知识的来源。",
    answers: [
        { option: "A", answer: "outcome", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
        { option: "B", answer: "distraction", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
        { option: "C", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng ài" },
        { option: "D", answer: "source", chinese_answer: "来源", chinese_romanization: "láiyuán" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'source' means a place, person, or thing from which something comes or can be obtained." +
            "<br><br>" +
            "(A) 'outcome' means the way a thing turns out; a consequence." +
            "<br><br>" +
            "(B) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(C) 'obstacle' means a thing that blocks one's way or prevents or hinders progress.",
    chinese_explanation: "(D) '来源' 意味着某物来自或可以从中获得的地方、人物或事物。" +
            "<br><br>" +
            "(A) '结果' 意味着事情的结果；后果。" +
            "<br><br>" +
            "(B) '干扰' 意味着阻止某人全神贯注于某事的事物。" +
            "<br><br>" +
            "(C) '障碍' 意味着挡住某人去路或阻止或妨碍进展的事物。"
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
