// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ ambitions drove her to work tirelessly towards her goals, aiming for achievements that few could imagine.",
        chinese_question: "她的 __________ 抱负驱使她不懈地朝着目标努力，追求少数人能想象到的成就。",
        answers: [
            { option: "A", answer: "lofty", chinese_answer: "崇高的", chinese_romanization: "chónggāo de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "humble", chinese_answer: "谦卑的", chinese_romanization: "qiānbēi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'lofty' means of imposing height; of a noble or exalted nature." + 
            "<br><br>" +
            "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's importance.",
        chinese_explanation: "(A) '崇高的' 意味着高度宏伟的；具有高贵或崇高性质的。" + 
            "<br><br>" +
            "(B) '谦虚的' 意味着对自己的能力或成就持谦逊态度的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(D) '谦卑的' 意味着对自己的重要性有或表现出谦虚或低估的态度。"
    },
    {
        id: 2,
        question: "His __________ pursuit of knowledge has led him to become one of the most well-respected scholars in his field.",
        chinese_question: "他对知识的 __________ 追求使他成为该领域最受尊敬的学者之一。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "disinterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎnxìngqù de" },
            { option: "C", answer: "avid", chinese_answer: "热衷的", chinese_romanization: "rèzhōng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'avid' means having or showing a keen interest in or enthusiasm for something. Figuratively, it can mean a passionate pursuit of a goal." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'disinterested' means not influenced by considerations of personal advantage." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '热衷的' 意味着对某事有或表现出浓厚兴趣或热情。比喻地，它可以表示对目标的热情追求。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
            "<br><br>" +
            "(B) '不感兴趣的' 意味着不受个人利益考虑影响的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别兴趣或同情的；不关心的。"
    },
    {
        id: 3,
    question: "His experience in finance was __________ to his new role as the company's CFO.",
    chinese_question: "他的金融经验对他担任公司首席财务官的新角色是__________的。",
    answers: [
        { option: "A", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" },
        { option: "B", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
        { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "D", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'relevant' means closely connected or appropriate to the matter at hand. Figuratively, it can mean being applicable and useful in a given context." +
        "<br><br>" +
        "(A) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(B) 'unrelated' means not related or linked." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance.",
    chinese_explanation: "(D) '相关的'一词意味着与当前问题紧密相关或适当的。比喻地，它可以表示在特定情况下适用和有用的。" +
        "<br><br>" +
        "(A) '不相关的' 意味着与某事没有联系或不相关的。" +
        "<br><br>" +
        "(B) '无关的' 意味着没有联系或连接的。" +
        "<br><br>" +
        "(C) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 4,
        question: "Her __________ stance on the issue made negotiations difficult.",
        chinese_question: "她在这个问题上的__________立场使谈判变得困难。",
        answers: [
                { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
                { option: "B", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
                { option: "C", answer: "obstinate", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
                { option: "D", answer: "agreeable", chinese_answer: "同意的", chinese_romanization: "tóngyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obstinate' means stubbornly refusing to change one's opinion or chosen course of action, despite attempts to persuade one to do so. Figuratively, it can mean being inflexible and unyielding." + 
            "<br><br>" + 
            "(A) 'flexible' means capable of bending easily without breaking." + 
            "<br><br>" + 
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." + 
            "<br><br>" + 
            "(D) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(C) '固执的'一词意味着固执地拒绝改变自己的观点或选择的行动，尽管有人试图说服他这样做。比喻地，它可以表示不灵活和顽固的。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻易弯曲而不折断的。" +
            "<br><br>" +
            "(B) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度的；顺从的。" +
            "<br><br>" +
            "(D) '同意的' 意味着令人愉快的和令人满意的；愉快的."
    },
    {
        id: 5,
        question: "The judge spoke in a __________ tone, emphasizing the importance of the decision that was about to be made.",
        chinese_question: "法官用 __________ 的语气讲话，强调即将作出的决定的重要性。",
        answers: [
            { option: "A", answer: "grave", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "playful", chinese_answer: "玩笑的", chinese_romanization: "wánxiào de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grave' means giving cause for alarm; serious." + 
            "<br><br>" +
            "(B) 'playful' means fond of games and amusement; lighthearted." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(A) '严肃的' 意味着引起警觉的；严重的。" + 
            "<br><br>" +
            "(B) '玩笑的' 意味着喜欢游戏和娱乐的；轻松的。" +
            "<br><br>" +
            "(C) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(D) '肤浅的' 意味着存在或发生在表面上的。"
    },
    {
        id: 6,
        question: "Despite the exciting opportunities, his __________ attitude kept him from taking any risks in his career.",
        chinese_question: "尽管有令人兴奋的机会，他的 __________ 态度使他无法在职业生涯中冒任何风险。",
        answers: [
            { option: "A", answer: "ambitious", chinese_answer: "有雄心的", chinese_romanization: "yǒu xióngxīn de" },
            { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "C", answer: "proactive", chinese_answer: "积极主动的", chinese_romanization: "jījí zhǔdòng de" },
            { option: "D", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(A) 'ambitious' means having or showing a strong desire and determination to succeed." +
            "<br><br>" +
            "(C) 'proactive' means creating or controlling a situation by causing something to happen rather than responding to it after it has happened." +
            "<br><br>" +
            "(D) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(B) '被动的' 意味着接受或允许发生的事情或别人做的事情，而没有积极的回应或抵抗。" +
            "<br><br>" +
            "(A) '有雄心的' 意味着有或表现出强烈的成功欲望和决心的。" +
            "<br><br>" +
            "(C) '积极主动的' 意味着通过引起某事而不是在它发生后做出反应来创造或控制一个情况。" +
            "<br><br>" +
            "(D) '热情的' 意味着有或表现出强烈和渴望的享受、兴趣或赞同的."
    },
    {
        id: 7,
    question: "She felt __________ before the big presentation, her nerves causing her hands to shake and her mind to race.",
    chinese_question: "她在大演讲前感到非常 __________，紧张使她的手发抖，思绪飞速运转。",
    answers: [
        { option: "A", answer: "skittish", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
        { option: "B", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
        { option: "C", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
        { option: "D", answer: "assured", chinese_answer: "确定的", chinese_romanization: "quèdìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'skittish' means nervous or easily frightened." +
        "<br><br>" +
        "(B) 'confident' means feeling or showing certainty about something." +
        "<br><br>" +
        "(C) 'relaxed' means free from tension and anxiety." +
        "<br><br>" +
        "(D) 'assured' means confident and not worried.",
    chinese_explanation: "(A) '紧张的' 意味着紧张的或容易受惊的。" +
        "<br><br>" +
        "(B) '自信的' 意味着对某事感到或表现出确定性的。" +
        "<br><br>" +
        "(C) '放松的' 意味着没有紧张和焦虑的。" +
        "<br><br>" +
        "(D) '确定的' 意味着自信且不担忧的。"
    },
    {
        id: 8,
    question: "The weather in this region is highly __________, changing from sunny to stormy within a matter of hours.",
    chinese_question: "这个地区的天气高度 __________，在几个小时内就会从晴朗变为暴风雨。",
    answers: [
        { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
        { option: "B", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
        { option: "C", answer: "mutable", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
        { option: "D", answer: "unchanging", chinese_answer: "不变的", chinese_romanization: "bù biàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mutable' means liable to change." +
        "<br><br>" +
        "(A) 'stable' means not likely to change or fail; firmly established." +
        "<br><br>" +
        "(B) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
        "<br><br>" +
        "(D) 'unchanging' means not changing; remaining the same.",
    chinese_explanation: "(C) '易变的' 意味着容易改变的。" +
        "<br><br>" +
        "(A) '稳定的' 意味着不容易改变或失败的；牢固建立的。" +
        "<br><br>" +
        "(B) '一致的' 意味着在一段时间内以同样的方式行事或完成的，尤其是为了公平或准确。" +
        "<br><br>" +
        "(D) '不变的' 意味着不改变；保持不变的。"
    },
    {
        id: 9,
        question: "The company's return policy is quite __________, allowing customers to return products within 90 days without any questions asked.",
        chinese_question: "公司的退货政策相当 __________，允许客户在90天内无条件退货。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" },
            { option: "B", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "C", answer: "inflexible", chinese_answer: "不灵活的", chinese_romanization: "bù línghuó de" },
            { option: "D", answer: "stringent", chinese_answer: "严格的", chinese_romanization: "yángé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'lenient' means more merciful or tolerant than expected." + 
            "<br><br>" +
            "(B) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(C) 'inflexible' means unwilling to change or compromise." +
            "<br><br>" +
            "(D) 'stringent' means strict, precise, and exacting.",
        chinese_explanation: "(A) '宽松的' 意味着比预期更仁慈或宽容。" + 
            "<br><br>" +
            "(B) '僵硬的' 意味着不能弯曲或被强迫改变形状的；不灵活的。" +
            "<br><br>" +
            "(C) '不灵活的' 意味着不愿意改变或妥协的。" +
            "<br><br>" +
            "(D) '严格的' 意味着严格、精确和苛刻的。"
    },
    {
        id: 10,
    question: "Her __________ attitude during the meeting disrupted the otherwise productive discussion.",
    chinese_question: "她在会议上 __________ 的态度打断了原本富有成效的讨论。",
    answers: [
        { option: "A", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
        { option: "B", answer: "querulous", chinese_answer: "爱抱怨的", chinese_romanization: "ài bàoyuàn de" },
        { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
        { option: "D", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'querulous' means complaining in a petulant or whining manner." +
        "<br><br>" +
        "(A) 'cooperative' means involving mutual assistance in working toward a common goal." +
        "<br><br>" +
        "(C) 'supportive' means providing encouragement or emotional help." +
        "<br><br>" +
        "(D) 'constructive' means serving a useful purpose; tending to build up.",
    chinese_explanation: "(B) '爱抱怨的' 意味着以任性或抱怨的方式抱怨的。" +
        "<br><br>" +
        "(A) '合作的' 意味着在共同目标的实现中相互帮助的。" +
        "<br><br>" +
        "(C) '支持的' 意味着提供鼓励或情感帮助的。" +
        "<br><br>" +
        "(D) '建设性的' 意味着起有用作用的；倾向于建立的。"
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
