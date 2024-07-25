// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her smile was __________, lighting up the entire room and making everyone feel warm and welcomed.",
    chinese_question: "她的笑容非常 __________，照亮了整个房间，让每个人都感到温暖和受欢迎。",
    answers: [
        { option: "A", answer: "radiant", chinese_answer: "光芒四射的", chinese_romanization: "guāngmáng sìshè de" },
        { option: "B", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
        { option: "C", answer: "gloomy", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
        { option: "D", answer: "dim", chinese_answer: "模糊的", chinese_romanization: "móhu de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'radiant' means sending out light; shining or glowing brightly." +
        "<br><br>" +
        "(B) 'dull' means lacking brightness, vividness, or sheen." +
        "<br><br>" +
        "(C) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
        "<br><br>" +
        "(D) 'dim' means not shining brightly or clearly.",
    chinese_explanation: "(A) '光芒四射的' 意味着发出光；明亮或光辉灿烂的。" +
        "<br><br>" +
        "(B) '暗淡的' 意味着缺乏亮度、鲜艳或光泽的。" +
        "<br><br>" +
        "(C) '昏暗的' 意味着黑暗或照明不足，特别是显得令人沮丧或害怕的。" +
        "<br><br>" +
        "(D) '模糊的' 意味着不明亮或不清晰的。"
    },
    {
        id: 2,
        question: "Her __________ lifestyle involved commuting by subway, dining at trendy cafes, and attending art exhibitions.",
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
        id: 3,
        question: "The company's decision to invest in the new market was __________, with potential for great loss.",
        chinese_question: "公司决定投资新市场是 __________ 的，可能会带来巨大的损失。",
        answers: [
            { option: "A", answer: "secure", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "perilous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "prudent", chinese_answer: "明智的", chinese_romanization: "míngzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perilous' means full of danger or risk." +
            "<br><br>" +
            "(A) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(B) 'cautious' means (of a person) careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(C) '危险的' 意味着充满危险或风险的。" +
            "<br><br>" +
            "(A) '可靠的' 意味着固定或牢固，以至于不会让步、变松或丢失的。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着（指人）小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(D) '明智的' 意味着表现出对未来的关心和思考的."
    },
    {
        id: 4,
        question: "Despite losing the competition, she was __________ and congratulated the winner with a warm smile.",
        chinese_question: "尽管输了比赛，她还是 __________ 地微笑着祝贺获胜者。",
        answers: [
            { option: "A", answer: "petty", chinese_answer: "小气的", chinese_romanization: "xiǎoqì de" },
            { option: "B", answer: "magnanimous", chinese_answer: "宽宏大量的", chinese_romanization: "kuānhóngdàliàng de" },
            { option: "C", answer: "spiteful", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "D", answer: "resentful", chinese_answer: "愤恨的", chinese_romanization: "fèn hèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful." +
            "<br><br>" +
            "(A) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(C) 'spiteful' means showing or caused by malice." +
            "<br><br>" +
            "(D) 'resentful' means feeling or expressing bitterness or indignation at having been treated unfairly.",
        chinese_explanation: "(B) '宽宏大量的' 意味着非常慷慨或宽容的，尤其是对竞争对手或权力较小的人。" +
            "<br><br>" +
            "(A) '小气的' 意味着不重要的；琐碎的。" +
            "<br><br>" +
            "(C) '恶意的' 意味着表现出或由恶意引起的。" +
            "<br><br>" +
            "(D) '愤恨的' 意味着对被不公平对待感到或表现出愤怒的。"
    },
    {
        id: 5,
        question: "The possibilities presented by the new technology were __________, opening doors to innovations never seen before.",
        chinese_question: "新技术带来的可能性是 __________ 的，为前所未见的创新打开了大门。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "B", answer: "foreseeable", chinese_answer: "可预见", chinese_romanization: "kě yùjiàn" },
            { option: "C", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" },
            { option: "D", answer: "unimaginable", chinese_answer: "难以想象", chinese_romanization: "nányǐ xiǎngxiàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unimaginable' means difficult or impossible to comprehend." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'foreseeable' means able to be predicted." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted.",
        chinese_explanation: "(D) '难以想象' 意味着难以或不可能理解。" +
            "<br><br>" +
            "(A) '有限' 意味着在大小、数量或范围上有限。" +
            "<br><br>" +
            "(B) '可预见' 意味着能够预测的。" +
            "<br><br>" +
            "(C) '可预测' 意味着能够预测的。"
    },
    {
        id: 6,
        question: "The promised benefits of the new policy were __________, leaving many employees disappointed.",
        chinese_question: "新政策承诺的福利__________，让许多员工感到失望。",
        answers: [
                { option: "A", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
                { option: "B", answer: "plentiful", chinese_answer: "充足的", chinese_romanization: "chōngzú de" },
                { option: "C", answer: "nonexistent", chinese_answer: "不存在的", chinese_romanization: "bù cúnzài de" },
                { option: "D", answer: "copious", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nonexistent' means not existing or not real." + 
            "<br><br>" + 
            "(A) 'abundant' means existing or available in large quantities; plentiful." + 
            "<br><br>" + 
            "(B) 'plentiful' means existing in or yielding great quantities; abundant." + 
            "<br><br>" + 
            "(D) 'copious' means abundant in supply or quantity.",
        chinese_explanation: "(C) '不存在的'一词意味着不存在或不真实的。" +
            "<br><br>" +
            "(A) '丰富的' 意味着存在或可用的大量；丰富的。" +
            "<br><br>" +
            "(B) '充足的' 意味着存在或产出的大量；丰富的。" +
            "<br><br>" +
            "(D) '大量的' 意味着供应或数量充足的."
    },
    {
        id: 7,
    question: "In her research paper, she emphasized the need for __________ evidence to support the theories, arguing that numerical data is essential for validating results.",
    chinese_question: "在她的研究论文中，她强调了需要 __________ 证据来支持这些理论，认为数字数据对于验证结果是必不可少的。",
    answers: [
        { option: "A", answer: "quantitative", chinese_answer: "定量的", chinese_romanization: "dìngliàng de" },
        { option: "B", answer: "descriptive", chinese_answer: "描述的", chinese_romanization: "miáoshù de" },
        { option: "C", answer: "theoretical", chinese_answer: "理论的", chinese_romanization: "lǐlùn de" },
        { option: "D", answer: "narrative", chinese_answer: "叙述的", chinese_romanization: "xùshù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'quantitative' means relating to, measuring, or measured by the quantity of something rather than its quality." +
        "<br><br>" +
        "(B) 'descriptive' means serving or seeking to describe." +
        "<br><br>" +
        "(C) 'theoretical' means concerned with or involving the theory of a subject or area of study rather than its practical application." +
        "<br><br>" +
        "(D) 'narrative' means a spoken or written account of connected events; a story.",
    chinese_explanation: "(A) '定量的' 意味着与数量相关的、测量的或通过数量测量的。" +
        "<br><br>" +
        "(B) '描述的' 意味着服务于或试图描述的。" +
        "<br><br>" +
        "(C) '理论的' 意味着关注或涉及一个学科或研究领域的理论，而不是其实践应用。" +
        "<br><br>" +
        "(D) '叙述的' 意味着连接事件的口头或书面叙述；一个故事。"
    },
    {
        id: 8,
        question: "The __________ response from the audience made it clear that the performance was not well-received.",
        chinese_question: "观众 __________ 的反应清楚地表明这场演出没有受到好评。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "B", answer: "listless", chinese_answer: "无精打采的", chinese_romanization: "wújīngdǎcǎi de" },
            { option: "C", answer: "vibrant", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
            { option: "D", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'listless' means lacking energy or enthusiasm." +
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'vibrant' means full of energy and life." +
            "<br><br>" +
            "(D) 'excited' means very enthusiastic and eager.",
        chinese_explanation: "(B) '无精打采的' 意味着缺乏能量或热情的。" +
            "<br><br>" +
            "(A) '热情的' 意味着有或表现出强烈和热切的享受、兴趣或赞同的。" +
            "<br><br>" +
            "(C) '充满活力的' 意味着充满活力和生命的。" +
            "<br><br>" +
            "(D) '兴奋的' 意味着非常热情和渴望的。"
    },
    {
        id: 9,
        question: "The __________ statements of the ancient priest were difficult for the villagers to interpret.",
        chinese_question: "古代祭司的 __________ 陈述让村民们难以理解。",
        answers: [
            { option: "A", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéliǎodāng de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "oracular", chinese_answer: "神谕般的", chinese_romanization: "shényù bān de" },
            { option: "D", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'oracular' means resembling an oracle (as in solemnity of delivery); obscurely prophetic." +
            "<br><br>" +
            "(A) 'straightforward' means uncomplicated and easy to understand." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt.",
        chinese_explanation: "(C) '神谕般的' 意味着类似于神谕（如庄重的传递）；隐晦的预言。" +
            "<br><br>" +
            "(A) '直截了当的' 意味着不复杂且易于理解的。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '明确的' 意味着明确地、详细地陈述，没有混淆或疑问的余地."
    },
    {
        id: 10,
        question: "To some fans, changing the classic logo of the team was nothing short of __________.",
        chinese_question: "对一些粉丝来说，更改球队的经典标志简直是 __________。",
        answers: [
            { option: "A", answer: "sacred", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" },
            { option: "B", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "C", answer: "sacrilegious", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" },
            { option: "D", answer: "revered", chinese_answer: "受尊敬的", chinese_romanization: "shòu zūnjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sacrilegious' means showing disrespect or violation of something considered sacred." +
            "<br><br>" +
            "(A) 'sacred' means regarded with great respect and reverence by a particular religion, group, or individual." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'revered' means deeply respected or admired.",
        chinese_explanation: "(C) '亵渎的' 意味着对被视为神圣的事物表现出不尊重或侵犯。" +
            "<br><br>" +
            "(A) '神圣的' 意味着被某个宗教、群体或个人视为极为尊重和崇敬的。" +
            "<br><br>" +
            "(B) '尊敬的' 意味着感到或表现出敬意和尊重的。" +
            "<br><br>" +
            "(D) '受尊敬的' 意味着受到深深的尊重或钦佩的."
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
