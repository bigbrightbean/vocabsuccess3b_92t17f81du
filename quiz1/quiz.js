// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The writer's __________ views were evident in her articles, as she consistently supported the same political ideology.",
        chinese_question: "这位作家的 __________ 观点在她的文章中显而易见，因为她一贯支持同样的政治理念。",
        answers: [
            { option: "A", answer: "partisan", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "B", answer: "objective", chinese_answer: "客观", chinese_romanization: "kèguān" },
            { option: "C", answer: "detached", chinese_answer: "超然", chinese_romanization: "chāorán" },
            { option: "D", answer: "neutral", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'partisan' figuratively means showing strong, and sometimes blind, adherence to a particular party, faction, cause, or person." +
            "<br><br>" +
            "(B) 'objective' means not influenced by personal feelings or opinions in considering and representing facts." +
            "<br><br>" +
            "(C) 'detached' means impartial, disinterested." +
            "<br><br>" +
            "(D) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(A) '偏袒' 在此语境下意指对某个党派、派系、事业或个人表现出强烈的（有时是盲目的）支持。" +
            "<br><br>" +
            "(B) '客观' 意味着在考虑和陈述事实时不受个人感情或意见影响。" +
            "<br><br>" +
            "(C) '超然' 意味着公平，冷漠。" +
            "<br><br>" +
            "(D) '中立' 意味着在冲突或分歧中不支持或帮助任何一方。"
    },
    {
        id: 2,
        question: "The job offer was quite __________, with a high salary and excellent benefits.",
        chinese_question: "这个工作邀请非常 __________，薪水高，福利好。",
        answers: [
            { option: "A", answer: "unattractive", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" },
            { option: "B", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "unappealing", chinese_answer: "无吸引力的", chinese_romanization: "wú xīyǐn lì de" },
            { option: "D", answer: "appealing", chinese_answer: "有吸引力的", chinese_romanization: "yǒu xīyǐn lì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'appealing' means attractive or interesting." +
            "<br><br>" +
            "(A) 'unattractive' means not pleasing or appealing to look at." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(C) 'unappealing' means not attractive or interesting.",
        chinese_explanation: "(D) '有吸引力的' 意味着有吸引力或有趣的。" +
            "<br><br>" +
            "(A) '不吸引人的' 意味着看起来不悦目或没有吸引力。" +
            "<br><br>" +
            "(B) '普通的' 意味着质量一般的；不太好的。" +
            "<br><br>" +
            "(C) '无吸引力的' 意味着不吸引或不有趣的。"
    },
    {
        id: 3,
        question: "Although he held the title of manager, his role was largely __________, with little actual power.",
        chinese_question: "尽管他拥有经理的头衔，但他的角色基本上是 __________ 的，几乎没有实际权力。",
        answers: [
            { option: "A", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "B", answer: "nominal", chinese_answer: "名义上的", chinese_romanization: "míngyì shàng de" },
            { option: "C", answer: "influential", chinese_answer: "有影响力的", chinese_romanization: "yǒu yǐngxiǎng lì de" },
            { option: "D", answer: "substantial", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nominal' means existing in name only; not real or actual." +
            "<br><br>" +
            "(A) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(C) 'influential' means having great influence on someone or something." +
            "<br><br>" +
            "(D) 'substantial' means of considerable importance, size, or worth.",
        chinese_explanation: "(B) '名义上的' 意味着只存在于名义上的；不真实的或实际的。" +
            "<br><br>" +
            "(A) '重要的' 意味着足够大或重要，值得注意的。" +
            "<br><br>" +
            "(C) '有影响力的' 意味着对某人或某事有很大影响的。" +
            "<br><br>" +
            "(D) '大量的' 意味着相当重要、规模或价值的."
    },
    {
        id: 4,
        question: "The scientist's __________ dedication to her research was apparent, as she often worked late into the night and on weekends without complaint.",
        chinese_question: "这位科学家对她研究的 __________ 奉献是显而易见的，因为她经常工作到深夜并且周末也毫无怨言地工作。",
        answers: [
            { option: "A", answer: "doubtful", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "B", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "C", answer: "undeniable", chinese_answer: "不可否认的", chinese_romanization: "bùkě fǒurèn de" },
            { option: "D", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'undeniable' means unable to be denied or disputed." +
            "<br><br>" +
            "(A) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(B) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'unclear' means not easy to see, hear, or understand.",
        chinese_explanation: "(C) '不可否认的' 意味着无法被否认或质疑。" +
            "<br><br>" +
            "(A) '可疑的' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(B) '不确定的' 意味着不能依赖的；未知或不确定的。" +
            "<br><br>" +
            "(D) '不清楚的' 意味着不容易看、听或理解。"
    },
    {
        id: 5,
    question: "Her __________ laughter filled the room with joy, making everyone feel happy and relaxed.",
    chinese_question: "她的__________笑声充满了整个房间，带来了欢乐，使每个人都感到开心和放松。",
    answers: [
        { option: "A", answer: "forced", chinese_answer: "强迫的", chinese_romanization: "qiǎngpò de" },
        { option: "B", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
        { option: "C", answer: "rehearsed", chinese_answer: "排练过的", chinese_romanization: "páiliàn guò de" },
        { option: "D", answer: "controlled", chinese_answer: "克制的", chinese_romanization: "kèzhì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation." +
        "<br><br>" +
        "(A) 'forced' means obtained or imposed by coercion or physical power." +
        "<br><br>" +
        "(C) 'rehearsed' means practiced or prepared in advance." +
        "<br><br>" +
        "(D) 'controlled' means not showing excessive emotion; having one's feelings under control.",
    chinese_explanation: "(B) '自发的'一词意味着由于突然的内心冲动或倾向而发生或表现出来，没有预先计划。" +
        "<br><br>" +
        "(A) '强迫的' 意味着通过强制或体力获得或施加的。" +
        "<br><br>" +
        "(C) '排练过的' 意味着提前练习或准备的。" +
        "<br><br>" +
        "(D) '克制的' 意味着不表现出过度的情感；控制自己的感情。"
    },
    {
        id: 6,
    question: "Success in the competitive market remained __________ for the small startup, despite their innovative ideas and hard work.",
    chinese_question: "尽管有创新的想法和辛勤的工作，小型初创公司的成功在竞争激烈的市场中仍然是 __________ 的。",
    answers: [
        { option: "A", answer: "attainable", chinese_answer: "可实现的", chinese_romanization: "kě shíxiàn de" },
        { option: "B", answer: "elusive", chinese_answer: "难捉摸的", chinese_romanization: "nán zhuōmō de" },
        { option: "C", answer: "accessible", chinese_answer: "可接近的", chinese_romanization: "kě jiējìn de" },
        { option: "D", answer: "achievable", chinese_answer: "可达到的", chinese_romanization: "kě dàodá de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'elusive' means difficult to find, catch, or achieve." +
        "<br><br>" +
        "(A) 'attainable' means able to be attained; achievable." +
        "<br><br>" +
        "(C) 'accessible' means able to be reached or entered." +
        "<br><br>" +
        "(D) 'achievable' means able to be brought about or reached successfully.",
    chinese_explanation: "(B) '难捉摸的' 意味着难以找到、捕捉或实现的。" +
        "<br><br>" +
        "(A) '可实现的' 意味着能够达到的；可实现的。" +
        "<br><br>" +
        "(C) '可接近的' 意味着能够被达到或进入的。" +
        "<br><br>" +
        "(D) '可达到的' 意味着能够成功地实现或达到的。"
    },
    {
        id: 7,
        question: "The philosopher's lecture had a __________ impact on the students, making them reconsider their views on life and existence.",
        chinese_question: "哲学家的讲座对学生产生了 __________ 的影响，使他们重新思考对生活和存在的看法。",
        answers: [
            { option: "A", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "D", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'profound' means having deep insight or understanding." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'shallow' means lacking depth of intellect or knowledge.",
        chinese_explanation: "(A) '深刻的' 意味着具有深刻的见解或理解的。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(C) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '浅薄的' 意味着缺乏深度的智力或知识的。"
    },
    {
        id: 8,
        question: "The __________ task of cleaning the sewers was something no one wanted to do.",
        chinese_question: "清理下水道的__________任务是没有人愿意做的事情。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "C", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "D", answer: "odious", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'odious' means extremely unpleasant; repulsive. Figuratively, it can mean very disagreeable or offensive." + 
            "<br><br>" + 
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." + 
            "<br><br>" + 
            "(B) 'agreeable' means enjoyable and pleasurable; pleasant." + 
            "<br><br>" + 
            "(C) 'delightful' means causing delight; charming.",
        chinese_explanation: "(D) '令人厌恶的'一词意味着极其令人不快的；令人反感的。比喻地，它可以表示非常不愉快或冒犯的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着给予愉快满足或享受的。" +
            "<br><br>" +
            "(B) '令人愉快的' 意味着令人享受和愉快的；愉快的。" +
            "<br><br>" +
            "(C) '令人愉快的' 意味着引起愉快的；迷人的."
    },
    {
        id: 9,
question: "Her role in the project was __________, as she only contributed a small part and wasn't involved in the major decisions.",
chinese_question: "她在项目中的角色是 __________ 的，因为她只贡献了一小部分，并没有参与重大决策。",
answers: [
    { option: "A", answer: "marginal", chinese_answer: "边缘的", chinese_romanization: "biānyuán de" },
    { option: "B", answer: "central", chinese_answer: "中心的", chinese_romanization: "zhōngxīn de" },
    { option: "C", answer: "critical", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
    { option: "D", answer: "pivotal", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" }
],
correctAnswer: "A",
explanation: "(A) 'marginal' means of secondary or minor importance; not central." + 
    "<br><br>" +
    "(B) 'central' means of the greatest importance; principal or essential." +
    "<br><br>" +
    "(C) 'critical' means of crucial importance in relation to the success or failure of something." +
    "<br><br>" +
    "(D) 'pivotal' means of crucial importance in relation to the development or success of something else.",
chinese_explanation: "(A) '边缘的' 意味着次要的或不重要的；不核心的。" + 
    "<br><br>" +
    "(B) '中心的' 意味着最重要的；主要的或必不可少的。" +
    "<br><br>" +
    "(C) '关键的' 意味着对某事的成败至关重要的。" +
    "<br><br>" +
    "(D) '重要的' 意味着对某事的发展或成功至关重要的。"
    },
    {
        id: 10,
        question: "His __________ reason for visiting the city was to attend a conference, but he actually came to see an old friend.",
        chinese_question: "他 __________ 来这座城市的理由是参加一个会议，但实际上是来看一个老朋友。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "covert", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "C", answer: "concealed", chinese_answer: "隐蔽的", chinese_romanization: "yǐnbì de" },
            { option: "D", answer: "ostensible", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ostensible' means stated or appearing to be true, but not necessarily so." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(B) 'covert' means not openly acknowledged or displayed." +
            "<br><br>" +
            "(C) 'concealed' means kept secret or hidden.",
        chinese_explanation: "(D) '表面的' 意味着表明的或看起来是真的，但不一定如此。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着不显眼的；隐藏的。" +
            "<br><br>" +
            "(B) '秘密的' 意味着不公开承认或展示的。" +
            "<br><br>" +
            "(C) '隐蔽的' 意味着保密的或隐藏的。"
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
