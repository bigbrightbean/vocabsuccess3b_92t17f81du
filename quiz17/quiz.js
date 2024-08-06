// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's __________ decision to expand without proper research led to its downfall.",
        chinese_question: "公司在没有适当研究的情况下 __________ 扩张的决定导致了其倒闭。",
        answers: [
            { option: "A", answer: "prudent", chinese_answer: "慎重的", chinese_romanization: "shènzhòng de" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "D", answer: "sensible", chinese_answer: "明智的", chinese_romanization: "míngzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(A) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(B) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'sensible' means chosen in accordance with wisdom or prudence; likely to be of benefit.",
        chinese_explanation: "(C) '鲁莽的' 意味着不考虑或不在乎行为的后果。" +
            "<br><br>" +
            "(A) '慎重的' 意味着行动时表现出关心和考虑未来的。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着小心避免潜在的问题或危险的。" +
            "<br><br>" +
            "(D) '明智的' 意味着根据智慧或审慎选择的；可能有利的."
    },
    {
        id: 2,
    question: "His __________ vision for the company's future helped guide them through difficult times.",
    chinese_question: "他对公司未来的 __________ 远见帮助他们渡过了困难时期。",
    answers: [
        { option: "A", answer: "shortsighted", chinese_answer: "目光短浅的", chinese_romanization: "mùguāng duǎnqiǎn de" },
        { option: "B", answer: "prophetic", chinese_answer: "预言的", chinese_romanization: "yùyán de" },
        { option: "C", answer: "reactive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
        { option: "D", answer: "unplanned", chinese_answer: "未计划的", chinese_romanization: "wèi jìhuà de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'prophetic' means accurately describing or predicting what will happen in the future." +
        "<br><br>" +
        "(A) 'shortsighted' means lacking imagination or foresight." +
        "<br><br>" +
        "(C) 'reactive' means showing a response to a stimulus." +
        "<br><br>" +
        "(D) 'unplanned' means not planned.",
    chinese_explanation: "(B) '预言的' 意味着准确描述或预测未来将要发生的事情。" +
        "<br><br>" +
        "(A) '目光短浅的' 意味着缺乏想象力或远见的。" +
        "<br><br>" +
        "(C) '被动的' 意味着对刺激表现出反应的。" +
        "<br><br>" +
        "(D) '未计划的' 意味着没有计划的。"
    },
    {
        id: 3,
    question: "The politician was known for his __________ views, always opposing progressive reforms and advocating for a return to traditional values.",
    chinese_question: "这位政治家以 __________ 观点著称，总是反对进步改革，提倡回归传统价值观。",
    answers: [
        { option: "A", answer: "reactionary", chinese_answer: "反动的", chinese_romanization: "fǎndòng de" },
        { option: "B", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" },
        { option: "C", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
        { option: "D", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reactionary' means wanting to go back to the old ways and not liking new changes. It’s like preferring old rules and being against new ideas." +
        "<br><br>" +
        "(B) 'progressive' means favoring or advocating progress, change, improvement, or reform, as opposed to wishing to maintain things as they are, especially in political matters." +
        "<br><br>" +
        "(C) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
        "<br><br>" +
        "(D) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough.",
    chinese_explanation: "(A) '反动的' 意味着想回到过去的方式，不喜欢新的变化。这就像更喜欢旧规则，并反对新想法。" +
        "<br><br>" +
        "(B) '进步的' 意味着支持或倡导进步、变革、改进或改革的，而不是希望保持现状，尤其是在政治事务上。" +
        "<br><br>" +
        "(C) '自由的' 意味着对新的行为或意见持开放态度，并愿意摒弃传统价值观的。" +
        "<br><br>" +
        "(D) '激进的' 意味着关系到或影响某事物的根本性质的；深远或彻底的。"
    },
    {
        id: 4,
        question: "The __________ entrepreneur's rapid ascent in the business world drew both admiration and jealousy from his peers.",
        chinese_question: "这位 __________ 企业家在商业世界的迅速崛起引起了同行的钦佩和嫉妒。",
        answers: [
            { option: "A", answer: "upstart", chinese_answer: "暴发户", chinese_romanization: "bàofāhù" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "consultant", chinese_answer: "顾问", chinese_romanization: "gùwèn" },
            { option: "D", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'upstart' means a person who has risen suddenly to wealth or high position, especially one who behaves arrogantly." +
            "<br><br>" +
            "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(C) 'consultant' means a person who provides expert advice professionally." +
            "<br><br>" +
            "(D) 'ally' means a state formally cooperating with another for a military or other purpose.",
        chinese_explanation: "(A) '暴发户'一词指突然变得富有或高职位的人，尤其是那些行为傲慢的人。" +
            "<br><br>" +
            "(B) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
            "<br><br>" +
            "(C) '顾问' 意味着提供专业建议的人。" +
            "<br><br>" +
            "(D) '盟友' 意味着正式与另一方合作的国家，目的是军事或其他目的。"
    },
    {
        id: 5,
    question: "She communicated her displeasure in __________ ways, such as a slight frown or a raised eyebrow.",
    chinese_question: "她用 __________ 的方式表达不满，例如轻微皱眉或扬眉。",
    answers: [
        { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "B", answer: "blunt", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
        { option: "C", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
        { option: "D", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'subtle' means delicate or precise as to be difficult to analyze or describe." +
        "<br><br>" +
        "(A) 'obvious' means easily perceived or understood." +
        "<br><br>" +
        "(B) 'blunt' means straightforward and frank." +
        "<br><br>" +
        "(D) 'overt' means done or shown openly.",
    chinese_explanation: "(C) '微妙的' 意味着细腻或精确，以至于难以分析或描述的。" +
        "<br><br>" +
        "(A) '明显的' 意味着容易察觉或理解的。" +
        "<br><br>" +
        "(B) '直率的' 意味着直截了当和坦率的。" +
        "<br><br>" +
        "(D) '公开的' 意味着公开进行或展示的。"
    },
    {
        id: 6,
        question: "His performance was __________, sometimes excellent and other times subpar.",
        chinese_question: "他的表现__________，有时非常出色，有时却不尽如人意。",
        answers: [
            { option: "A", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yízhì de" },
            { option: "C", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yízhì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inconsistent' means not staying the same throughout." +
            "<br><br>" +
            "(A) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(B) 'consistent' means acting or done in the same way over time." +
            "<br><br>" +
            "(C) 'reliable' means consistently good in quality or performance; able to be trusted.",
        chinese_explanation: "(D) '不一致的'一词意味着不始终如一的。" +
            "<br><br>" +
            "(A) '稳定的' 意味着牢固地固定、支撑或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(B) '一致的' 意味着以相同的方式行动或完成。" +
            "<br><br>" +
            "(C) '可靠的' 意味着在质量或性能上一贯良好的；可以信赖的。"
    },
    {
        id: 7,
        question: "The manager's __________ behavior stifled creativity and innovation among the team members, as he constantly micromanaged, dismissed their ideas, and imposed his own solutions.",
        chinese_question: "经理的__________行为扼杀了团队成员的创造力和创新，因为他经常对他们进行微观管理，忽视他们的想法，并强加自己的解决方案。",
        answers: [
                { option: "A", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
                { option: "B", answer: "meek", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
                { option: "C", answer: "overbearing", chinese_answer: "专横的", chinese_romanization: "zhuānhèng de" },
                { option: "D", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'overbearing' means unpleasantly or arrogantly domineering. Figuratively, it can mean being excessively controlling and authoritative." + 
            "<br><br>" + 
            "(A) 'humble' means having or showing a modest or low estimate of one's importance." + 
            "<br><br>" + 
            "(B) 'meek' means quiet, gentle, and easily imposed on; submissive." + 
            "<br><br>" + 
            "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
        chinese_explanation: "(C) '专横的'一词意味着令人不愉快地或傲慢地专横的。比喻地，它可以表示过于控制和权威的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的重要性有或表现出谦逊或低估的。" +
            "<br><br>" +
            "(B) '温顺的' 意味着安静的、温和的和容易被强加的；顺从的。" +
            "<br><br>" +
            "(D) '顺从的' 意味着准备服从他人权威或意志的；温顺地服从的或被动的."
    },
    {
        id: 8,
        question: "The new policy had a __________ impact on the company's operations, leading to major changes.",
        chinese_question: "新政策对公司的运营产生了 __________ 的影响，导致了重大变化。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "C", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" },
            { option: "D", answer: "massive", chinese_answer: "巨大", chinese_romanization: "jùdà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'massive' means large and heavy or solid." + 
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth considering.",
        chinese_explanation: "(D) '巨大' 意味着大而重或坚固的。" + 
            "<br><br>" +
            "(A) '次要' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(B) '琐碎' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(C) '无关紧要' 意味着太小或不重要，不值得考虑。"
    },
    {
        id: 9,
        question: "Her confidence made her feel __________ in any challenging situation, like she could handle anything that came her way.",
        chinese_question: "她的自信让她在任何挑战性情况下都感到__________，就像她可以应对任何困难一样。",
        answers: [
            { option: "A", answer: "vulnerable", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "fragile", chinese_answer: "易受伤的", chinese_romanization: "yìshòushāng de" },
            { option: "C", answer: "invincible", chinese_answer: "无敌的", chinese_romanization: "wúdí de" },
            { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'invincible' means too powerful to be defeated or overcome. Figuratively, it can mean feeling unbeatable and confident." + 
            "<br><br>" +
            "(A) 'vulnerable' means susceptible to physical or emotional attack or harm." +
            "<br><br>" +
            "(B) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
        chinese_explanation: "(C) '无敌的'一词意味着太强大而无法被击败或克服的。比喻地，它可以表示感到不可战胜和自信的。" + 
            "<br><br>" +
            "(A) '脆弱的' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(B) '易受伤的' 意味着易受身体或情感攻击或伤害的。" +
            "<br><br>" +
            "(D) '虚弱的' 意味着缺乏执行体力活的能力；缺乏体力和能量的。"
    },
    {
        id: 10,
    question: "Her __________ efforts to build a strong team and ensure everyone's involvement paid off in the long run.",
    chinese_question: "她 __________ 地努力建立一个强大的团队，并确保每个人的参与，从长远来看取得了成功。",
    answers: [
      { option: "A", answer: "negligent", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
      { option: "B", answer: "half-hearted", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
      { option: "C", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
      { option: "D", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
      "<br><br>" +
      "(A) 'negligent' means failing to take proper care in doing something." +
      "<br><br>" +
      "(B) 'half-hearted' means without enthusiasm or energy." +
      "<br><br>" +
      "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(C) '勤奋' 意味着在工作或职责上表现出关心和认真。" +
      "<br><br>" +
      "(A) '疏忽' 意味着未能妥善照顾某事。" +
      "<br><br>" +
      "(B) '不情愿' 意味着没有热情或精力。" +
      "<br><br>" +
      "(D) '冷漠' 意味着表现出或感到没有兴趣、热情或关心。"
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
