// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ comments, like making cutting remarks about his abilities and questioning his decisions, were meant to undermine his colleague's confidence.",
        chinese_question: "他的 __________ 评论，比如对他同事的能力进行尖刻评论和质疑他的决定，旨在削弱他同事的信心。",
        answers: [
            { option: "A", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "encouraging", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "malicious", chinese_answer: "恶意", chinese_romanization: "èyì" },
            { option: "D", answer: "uplifting", chinese_answer: "振奋", chinese_romanization: "zhènfèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malicious' means characterized by malice; intending or intended to do harm." + 
            "<br><br>" +
            "(A) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(B) 'encouraging' means giving someone support or confidence; supportive." +
            "<br><br>" +
            "(D) 'uplifting' means morally or spiritually elevating; inspiring happiness or hope.",
        chinese_explanation: "(C) '恶意' 意味着具有恶意的；打算或意图造成伤害。" + 
            "<br><br>" +
            "(A) '支持' 意味着提供鼓励或情感帮助。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给予某人支持或信心；支持的。" +
            "<br><br>" +
            "(D) '振奋' 意味着在道德上或精神上提升；激发幸福或希望。"
    },
    {
        id: 2,
            question: "Her explanation with clear examples and straightforward language made the complex topic easy to understand for everyone.",
            chinese_question: "她的解释通过清晰的例子和直白的语言，让每个人都能轻松理解这个复杂的话题。",
        answers: [
            { option: "A", answer: "murky", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
            { option: "B", answer: "turbid", chinese_answer: "浑浊的", chinese_romanization: "húnzhuó de" },
            { option: "C", answer: "limpid", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "cloudy", chinese_answer: "多云的", chinese_romanization: "duō yún de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'limpid' means clear, transparent. Figuratively, it can mean clear and easily understood." +
            "<br><br>" +
            "(A) 'murky' means dark and gloomy, especially due to thick mist." +
            "<br><br>" +
            "(B) 'turbid' means (of a liquid) cloudy, opaque, or thick with suspended matter." +
            "<br><br>" +
            "(D) 'cloudy' means (of a liquid) not transparent or clear.",
        chinese_explanation: "(C) '清晰的'一词意味着清澈透明的。比喻地，它可以表示清晰和容易理解的。" +
            "<br><br>" +
            "(A) '昏暗的' 意味着黑暗和阴沉的，尤其是由于浓雾。" +
            "<br><br>" +
            "(B) '浑浊的' 意味着（液体）浑浊、不透明或因悬浮物质而浓厚的。" +
            "<br><br>" +
            "(D) '多云的' 意味着（液体）不透明或不清晰的."
    },
    {
        id: 3,
    question: "The old mansion had a __________ atmosphere, with its dark hallways, creaking floors, and eerie silence, making visitors feel like they were in a tomb.",
    chinese_question: "这座老宅有一种 __________ 的氛围，黑暗的走廊、吱吱作响的地板和诡异的寂静让来访者感觉像在坟墓里。",
    answers: [
        { option: "A", answer: "vivacious", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
        { option: "B", answer: "buoyant", chinese_answer: "轻快的", chinese_romanization: "qīngkuài de" },
        { option: "C", answer: "jovial", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
        { option: "D", answer: "sepulchral", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sepulchral' means gloomy, dismal, or relating to a tomb." +
        "<br><br>" +
        "(A) 'vivacious' means lively and animated." +
        "<br><br>" +
        "(B) 'buoyant' means cheerful and optimistic." +
        "<br><br>" +
        "(C) 'jovial' means cheerful and friendly.",
    chinese_explanation: "(D) '阴沉的' 意思是阴暗、沉闷或与坟墓有关。" +
        "<br><br>" +
        "(A) '活泼的' 意思是生机勃勃的。" +
        "<br><br>" +
        "(B) '轻快的' 意思是愉快和乐观的。" +
        "<br><br>" +
        "(C) '快乐的' 意思是愉快和友好的。"
    },
    {
        id: 4,
        question: "The employee felt __________ by the constant criticism from his boss, which led to decreased morale.",
        chinese_question: "员工对老板的不断批评感到 __________ ，导致士气下降。",
        answers: [
            { option: "A", answer: "aggrieved", chinese_answer: "感到痛苦", chinese_romanization: "gǎndào tòngkǔ" },
            { option: "B", answer: "uplifted", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "C", answer: "satisfied", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aggrieved' means feeling resentment at having been unfairly treated." +
            "<br><br>" +
            "(B) 'uplifted' means morally or spiritually elevated." +
            "<br><br>" +
            "(C) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(D) 'ignored' means to have refused to take notice of or acknowledge.",
        chinese_explanation: "(A) '感到痛苦' 意味着感到被不公平对待的怨恨。" +
            "<br><br>" +
            "(B) '提升' 意味着在道德或精神上得到提升。" +
            "<br><br>" +
            "(C) '满意' 意味着满足；高兴。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "The teacher emphasized the __________ sources for the research paper, which included textbooks and scholarly articles, and secondary sources like news reports and interviews.",
        chinese_question: "老师强调了研究论文的 __________ 来源，包括教科书和学术文章，以及新闻报道和访谈等二手资料。",
        answers: [
            { option: "A", answer: "primary", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
            { option: "B", answer: "supplementary", chinese_answer: "补充", chinese_romanization: "bǔchōng" },
            { option: "C", answer: "auxiliary", chinese_answer: "辅助", chinese_romanization: "fǔzhù" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'primary' means of chief importance; principal." +
            "<br><br>" +
            "(B) 'supplementary' means completing or enhancing something." +
            "<br><br>" +
            "(C) 'auxiliary' means providing additional help or support." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(A) '主要' 意味着最重要的；主要的。" +
            "<br><br>" +
            "(B) '补充' 意味着完成或增强某物。" +
            "<br><br>" +
            "(C) '辅助' 意味着提供额外的帮助或支持。" +
            "<br><br>" +
            "(D) '微不足道' 意味着价值或重要性很小。"
    },
    {
        id: 6,
        question: "His __________ remarks during the meeting offended many of his colleagues, who were taken aback by his audacity.",
        chinese_question: "他在会议上的 __________ 言论冒犯了许多同事，他们对他的胆大妄为感到吃惊。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "insolent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'insolent' means showing a rude and arrogant lack of respect." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(B) '无礼的' 意味着表现出粗鲁和傲慢的缺乏尊重。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己重要性的估计谦虚或低的。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己的能力或成就不自负或适度的。" +
            "<br><br>" +
            "(D) '尊重的' 意味着感到或表现出敬意和尊重。"
    },
    {
        id: 7,
        question: "Her opinions were __________, often shifting depending on who she was talking to.",
        chinese_question: "她的意见非常__________，常常根据谈话对象而变化。",
        answers: [
            { option: "A", answer: "constant", chinese_answer: "恒定的", chinese_romanization: "héngdìng de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "unchanging", chinese_answer: "不变的", chinese_romanization: "bù biàn de" },
            { option: "D", answer: "mutable", chinese_answer: "多变的", chinese_romanization: "duōbiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mutable' means liable to change. Figuratively, it can mean being inconsistent or easily influenced." +
            "<br><br>" +
            "(A) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(C) 'unchanging' means not changing; remaining the same.",
        chinese_explanation: "(D) '多变的'一词意味着容易变化的。比喻地，它可以表示不一致或容易受影响的。" +
            "<br><br>" +
            "(A) '恒定的' 意味着在一段时间内持续发生的。" +
            "<br><br>" +
            "(B) '稳定的' 意味着不容易变化或失败的；稳固建立的。" +
            "<br><br>" +
            "(C) '不变的' 意味着不变化的；保持不变的."
    },
    {
        id: 8,
        question: "The __________ deer cautiously approached the clearing, ready to bolt at the slightest sound.",
        chinese_question: "__________ 的鹿小心翼翼地接近空地，准备在听到任何响声时迅速逃跑。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "aggressive", chinese_answer: "侵略性的", chinese_romanization: "qīnlüè xìng de" },
            { option: "C", answer: "timorous", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" },
            { option: "D", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'timorous' means showing or suffering from nervousness, fear, or a lack of confidence." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(B) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression." +
            "<br><br>" +
            "(D) 'bold' means showing a willingness to take risks; confident and courageous.",
        chinese_explanation: "(C) '胆怯的' 意味着表现出或因紧张、恐惧或缺乏信心而受苦。" +
            "<br><br>" +
            "(A) '自信的' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(B) '侵略性的' 意味着准备或可能攻击或对抗；由侵略引起的或产生的。" +
            "<br><br>" +
            "(D) '大胆的' 意味着愿意冒险的；自信和勇敢的."
    },
    {
        id: 9,
        question: "Her __________ claim about having seen a UFO was met with skepticism by her friends.",
        chinese_question: "她声称看到UFO的 __________ 言论受到了朋友们的怀疑。",
        answers: [
          { option: "A", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
          { option: "B", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
          { option: "C", answer: "straightforward", chinese_answer: "简单明了的", chinese_romanization: "jiǎndān míngliǎo de" },
          { option: "D", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dubious' means hesitating or doubting." +
          "<br><br>" +
          "(B) 'credible' means able to be believed; convincing." +
          "<br><br>" +
          "(C) 'straightforward' means uncomplicated and easy to understand." +
          "<br><br>" +
          "(D) 'authentic' means of undisputed origin and not a copy; genuine.",
        chinese_explanation: "(A) '可疑的' 意味着犹豫或怀疑的。" +
          "<br><br>" +
          "(B) '可信的' 意味着可以被相信的；令人信服的。" +
          "<br><br>" +
          "(C) '简单明了的' 意味着不复杂且容易理解的。" +
          "<br><br>" +
          "(D) '真实的' 意味着来源无可争议的，不是复制品的；真实的。"
    },
    {
        id: 10,
            question: "Her __________ spirit inspired others to volunteer and support local causes.",
            chinese_question: "她的 __________ 精神激励了其他人去志愿服务和支持本地的事业。",
            answers: [
                    { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
                    { option: "B", answer: "philanthropic", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
                    { option: "C", answer: "indifferent", chinese_answer: "不关心的", chinese_romanization: "bù guānxīn de" },
                    { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
            ],
            correctAnswer: "B",
            explanation: "(B) 'philanthropic' means seeking to promote the welfare of others, especially by donating money to good causes; generous and benevolent." + 
                "<br><br>" + 
                "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." + 
                "<br><br>" + 
                "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." + 
                "<br><br>" + 
                "(D) 'negligent' means failing to take proper care in doing something.",
            chinese_explanation: "(B) '慈善的' 意味着寻求促进他人福利的，特别是通过捐赠钱给好的事业；慷慨和仁慈的。" +
                "<br><br>" +
                "(A) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
                "<br><br>" +
                "(C) '不关心的' 意味着没有特别兴趣或同情的；不关心的。" +
                "<br><br>" +
                "(D) '疏忽的' 意味着在做某事时未能采取适当的照顾的."
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
