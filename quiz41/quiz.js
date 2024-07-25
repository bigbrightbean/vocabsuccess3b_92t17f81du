// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ demeanour made it difficult for him to assert his opinions during team meetings.",
        chinese_question: "他的 __________ 举止使他在团队会议上难以表达自己的意见。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "B", answer: "aggressive", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" },
            { option: "C", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "D", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(B) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(D) 'assertive' means having or showing a confident and forceful personality.",
        chinese_explanation: "(C) '被动的' 意味着接受或允许发生的事情或别人做的事情，而没有积极的回应或抵抗。" +
            "<br><br>" +
            "(A) '积极的' 意味着从事或准备从事体力活动的。" +
            "<br><br>" +
            "(B) '好斗的' 意味着准备或可能攻击或对抗的。" +
            "<br><br>" +
            "(D) '自信的' 意味着有或表现出自信和有力的个性."
    },
    {
        id: 2,
    question: "The __________ corruption in the government led to public outcry and demands for reform.",
    chinese_question: "政府中__________的腐败导致了公众的强烈抗议和对改革的要求。",
    answers: [
        { option: "A", answer: "controlled", chinese_answer: "受控制的", chinese_romanization: "shòu kòngzhì de" },
        { option: "B", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
        { option: "C", answer: "contained", chinese_answer: "受限制的", chinese_romanization: "shòu xiànzhì de" },
        { option: "D", answer: "rampant", chinese_answer: "猖獗的", chinese_romanization: "chāngjué de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'rampant' means (especially of something unwelcome or unpleasant) flourishing or spreading unchecked. Figuratively, it can mean being widespread and unrestrained." +
        "<br><br>" +
        "(A) 'controlled' means maintained influence or authority over." +
        "<br><br>" +
        "(B) 'limited' means restricted in size, amount, or extent." +
        "<br><br>" +
        "(C) 'contained' means having or holding (someone or something) within.",
    chinese_explanation: "(D) '猖獗的'一词意味着（尤指不受欢迎或不愉快的事物）猖獗或不受控制地蔓延。比喻地，它可以表示广泛和不受限制的。" +
        "<br><br>" +
        "(A) '受控制的' 意味着保持影响力或权威的。" +
        "<br><br>" +
        "(B) '有限的' 意味着在大小、数量或范围上受到限制的。" +
        "<br><br>" +
        "(C) '受限制的' 意味着在某物或某人之内的。"
    },
    {
        id: 3,
        question: "Being __________ to detail is crucial for a successful architect.",
        chinese_question: "注意细节对于成功的建筑师至关重要。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "inattentive", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
            { option: "C", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "D", answer: "sloppy", chinese_answer: "马虎的", chinese_romanization: "mǎhǔ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'inattentive' means not paying attention to something." +
            "<br><br>" +
            "(D) 'sloppy' means careless and unsystematic; excessively casual.",
        chinese_explanation: "(C) '注意的' 意味着密切注意某事。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(B) '不注意的' 意味着不注意某事。" +
            "<br><br>" +
            "(D) '马虎的' 意味着粗心和不系统的；过于随意的。"
    },
    {
        id: 4,
        question: "The __________ competition in the tech industry forces companies to innovate constantly or be left behind.",
        chinese_question: "科技行业的 __________ 竞争迫使公司不断创新，否则就会被淘汰。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "ruthless", chinese_answer: "激烈的", chinese_romanization: "jīliè de" },
            { option: "D", answer: "easygoing", chinese_answer: "随和的", chinese_romanization: "suíhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ruthless' means having or showing no pity or compassion for others, often used figuratively to describe harsh and intense competition." +
            "<br><br>" +
            "(A) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(D) 'easygoing' means relaxed and casual.",
        chinese_explanation: "(C) '激烈的' 意味着对他人没有怜悯或同情心的，通常用作比喻来描述激烈和强烈的竞争。" +
            "<br><br>" +
            "(A) '温和的' 意味着温柔且不容易被激怒的。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(D) '随和的' 意味着放松和随意的."
    },
    {
        id: 5,
        question: "The activist's __________ speech stirred the crowd, igniting their passion for the cause.",
        chinese_question: "活动家的 __________ 演讲激起了人群的热情，点燃了他们对这一事业的激情。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "C", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "D", answer: "vehement", chinese_answer: "激烈的", chinese_romanization: "jīliè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vehement' means showing strong feeling; forceful, passionate, or intense." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'mild' means gentle and not easily provoked.",
        chinese_explanation: "(D) '激烈的' 意味着表现出强烈的情感；有力的，充满激情的或激烈的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有表现出或感受到兴趣、热情或关心。" +
            "<br><br>" +
            "(B) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(C) '温和的' 意味着温柔且不易激动的。"
    },
    {
        id: 6,
    question: "His __________ sense of humor often left people either laughing hysterically or completely confused.",
    chinese_question: "他 __________ 的幽默感常常让人们要么狂笑不止，要么完全困惑。",
    answers: [
        { option: "A", answer: "mainstream", chinese_answer: "主流的", chinese_romanization: "zhǔliú de" },
        { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "C", answer: "quirky", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
        { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'quirky' means characterized by peculiar or unexpected traits." +
        "<br><br>" +
        "(A) 'mainstream' means belonging to or characteristic of the dominant trend in opinion, fashion, or the arts." +
        "<br><br>" +
        "(B) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(D) 'predictable' means able to be predicted.",
    chinese_explanation: "(C) '古怪的' 意味着具有独特或出乎意料的特点。" +
        "<br><br>" +
        "(A) '主流的' 意味着属于或具有主流趋势的特点，在意见、时尚或艺术中占主导地位。" +
        "<br><br>" +
        "(B) '普通的' 意味着没有特别或独特的特征的；正常的。" +
        "<br><br>" +
        "(D) '可预测的' 意味着能够预测的。"
    },
    {
        id: 7,
    question: "His opinion on the matter is __________ by his extensive research and expertise in the field.",
    chinese_question: "由于他在该领域的广泛研究和专业知识，他对这个问题的意见是 __________ 的。",
    answers: [
        { option: "A", answer: "baseless", chinese_answer: "无根据的", chinese_romanization: "wú gēnjù de" },
        { option: "B", answer: "qualified", chinese_answer: "有根据的", chinese_romanization: "yǒu gēnjù de" },
        { option: "C", answer: "unsubstantiated", chinese_answer: "未经证实的", chinese_romanization: "wèi jīng zhèngshí de" },
        { option: "D", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'qualified' means officially recognized as being trained to perform a particular job; certified." +
        "<br><br>" +
        "(A) 'baseless' means without foundation in fact." +
        "<br><br>" +
        "(C) 'unsubstantiated' means not supported or proven by evidence." +
        "<br><br>" +
        "(D) 'irrelevant' means not connected with or relevant to something.",
    chinese_explanation: "(B) '有根据的' 意味着被正式承认为经过培训可以从事某项工作；有资质的。" +
        "<br><br>" +
        "(A) '无根据的' 意味着没有事实依据的。" +
        "<br><br>" +
        "(C) '未经证实的' 意味着没有得到证据支持或证明的。" +
        "<br><br>" +
        "(D) '不相关的' 意味着与某事物无关的。"
    },
    {
        id: 8,
        question: "Her __________ speech about her childhood struggles moved everyone deeply.",
        chinese_question: "她关于童年奋斗的 __________ 演讲深深打动了每个人。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "lighthearted", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" },
            { option: "C", answer: "poignant", chinese_answer: "感人的", chinese_romanization: "gǎnrén de" },
            { option: "D", answer: "uplifting", chinese_answer: "振奋人心的", chinese_romanization: "zhènfèn rénxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'poignant' means evoking a keen sense of sadness or regret. Figuratively, it can mean being deeply touching or moving." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'lighthearted' means cheerful and carefree." +
            "<br><br>" +
            "(D) 'uplifting' means morally or spiritually elevating; inspiring happiness or hope.",
        chinese_explanation: "(C) '感人的' 一词意味着引起强烈的悲伤或遗憾的。比喻地，它可以表示非常感人或动人的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着明显快乐和乐观的。" +
            "<br><br>" +
            "(B) '轻松的' 意味着愉快和无忧无虑的。" +
            "<br><br>" +
            "(D) '振奋人心的' 意味着道德上或精神上提升的；激发幸福或希望的。"
    },
    {
        id: 9,
        question: "The artist used __________ shades of color to create a sense of depth and complexity in the painting, making it both intriguing and nuanced.",
        chinese_question: "这位艺术家使用 __________ 的色调来营造画面的深度和复杂性，使其既引人入胜又富有细微差别。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "glaring", chinese_answer: "刺眼的", chinese_romanization: "cìyǎn de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "blunt", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subtle' means delicately complex and understated." +
            "<br><br>" +
            "(B) 'glaring' means giving out or reflecting a strong or dazzling light." +
            "<br><br>" +
            "(C) 'obvious' means easily perceived or understood; clear, self-evident." +
            "<br><br>" +
            "(D) 'blunt' means uncompromisingly forthright.",
        chinese_explanation: "(A) '微妙的' 意味着细腻复杂且低调的。" +
            "<br><br>" +
            "(B) '刺眼的' 意味着发出或反射强光的。" +
            "<br><br>" +
            "(C) '明显的' 意味着容易察觉或理解的；清楚的，不言自明的。" +
            "<br><br>" +
            "(D) '直率的' 意味着不妥协地直言不讳的。"
    },
    {
        id: 10,
        question: "The athlete's __________ fear of failure pushed him to train harder every day.",
        chinese_question: "这位运动员对失败的 __________ 恐惧促使他每天更努力地训练。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "C", answer: "mortal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mortal' means causing or liable to cause death; very serious." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth considering." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '致命的' 意味着引起或可能引起死亡的；非常严重的。" +
            "<br><br>" +
            "(A) '微不足道的' 意味着如此之小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(B) '不重要的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的."
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
