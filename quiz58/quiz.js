// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist was recognized as an __________ authority in the field of genetics.",
        chinese_question: "这位科学家被公认为遗传学领域的 __________ 权威。",
        answers: [
            { option: "A", answer: "eminent", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "B", answer: "unknown", chinese_answer: "未知", chinese_romanization: "wèizhī" },
            { option: "C", answer: "inferior", chinese_answer: "劣等", chinese_romanization: "lièděng" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eminent' means famous and respected within a particular sphere or profession." +
            "<br><br>" +
            "(B) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(C) 'inferior' means lower in rank, status, or quality." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '杰出' 意味着在某个领域或职业中著名且受人尊敬。" +
            "<br><br>" +
            "(B) '未知' 意味着不为人知或不熟悉的。" +
            "<br><br>" +
            "(C) '劣等' 意味着地位、地位或质量较低的。" +
            "<br><br>" +
            "(D) '普通' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 2,
        question: "Her __________ past came to light, revealing years of deceit and betrayal.",
        chinese_question: "她 __________ 的过去被曝光，揭示了多年的欺骗和背叛。",
        answers: [
            { option: "A", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìng rén qīnpèi de" },
            { option: "B", answer: "illustrious", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "C", answer: "sordid", chinese_answer: "卑鄙的", chinese_romanization: "bēibǐ de" },
            { option: "D", answer: "reputable", chinese_answer: "有声望的", chinese_romanization: "yǒu shēngwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sordid' means involving immoral or dishonorable actions and motives; arousing moral distaste and contempt." +
            "<br><br>" +
            "(A) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(B) 'illustrious' means well known, respected, and admired for past achievements." +
            "<br><br>" +
            "(D) 'reputable' means having a good reputation.",
        chinese_explanation: "(C) '卑鄙的' 意味着涉及不道德或不光彩的行为和动机；引起道德上的厌恶和蔑视。" +
            "<br><br>" +
            "(A) '令人钦佩的' 意味着引起或值得尊重和认可的。" +
            "<br><br>" +
            "(B) '著名的' 意味着以往的成就而闻名、受人尊敬和钦佩的。" +
            "<br><br>" +
            "(D) '有声望的' 意味着有好名声的."
    },
    {
        id: 3,
    question: "The reviewer's __________ comments about the book, criticizing its lack of character development and predictable plot, made it clear that he didn't appreciate the author's style.",
    chinese_question: "评论者对这本书的 __________ 评论，批评其缺乏人物发展和情节可预测性，表明他不喜欢作者的风格。",
    answers: [
        { option: "A", answer: "complimentary", chinese_answer: "称赞的", chinese_romanization: "chēngzàn de" },
        { option: "B", answer: "snide", chinese_answer: "讽刺的", chinese_romanization: "fěngcì de" },
        { option: "C", answer: "flattering", chinese_answer: "恭维的", chinese_romanization: "gōngwéi de" },
        { option: "D", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'snide' means derogatory or mocking in an indirect way." +
        "<br><br>" +
        "(A) 'complimentary' means expressing praise or admiration." +
        "<br><br>" +
        "(C) 'flattering' means full of praise and compliments." +
        "<br><br>" +
        "(D) 'respectful' means showing deference and respect.",
    chinese_explanation: "(B) '讽刺的' 意味着以间接方式贬低或嘲弄。" +
        "<br><br>" +
        "(A) '称赞的' 意味着表示赞扬或钦佩。" +
        "<br><br>" +
        "(C) '恭维的' 意味着充满赞美和恭维。" +
        "<br><br>" +
        "(D) '尊重的' 意味着表示敬意和尊重。"
    },
    {
        id: 4,
        question: "Her __________ outlook on life made her a joy to be around, always bringing positivity to those she met.",
        chinese_question: "她对生活的 __________ 态度使她成为一个令人愉快的人，总是给遇到的人带来积极的影响。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
            { option: "B", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "C", answer: "gloomy", chinese_answer: "阴郁的", chinese_romanization: "yīnyù de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(C) 'gloomy' means causing or feeling depression or despondency." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '欢乐的' 意味着显著的快乐和乐观。" +
            "<br><br>" +
            "(B) '悲观的' 意味着倾向于看到事物的最坏方面或认为最坏的情况将会发生的。" +
            "<br><br>" +
            "(C) '阴郁的' 意味着引起或感到沮丧或绝望的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "Despite her constant support and kindness, her __________ friend revealed her secrets to others and spread false rumors about her.",
        chinese_question: "尽管她一直支持和善待她的朋友，但她那 __________ 的朋友把她的秘密透露给了别人，并散布了关于她的虚假谣言。",
        answers: [
            { option: "A", answer: "trustworthy", chinese_answer: "可信赖的", chinese_romanization: "kě xìnlài de" },
            { option: "B", answer: "perfidious", chinese_answer: "背信弃义的", chinese_romanization: "bèixìn qìyì de" },
            { option: "C", answer: "loyal", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" },
            { option: "D", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perfidious' means deceitful and untrustworthy." +
            "<br><br>" +
            "(A) 'trustworthy' means able to be relied on as honest or truthful." +
            "<br><br>" +
            "(C) 'loyal' means giving or showing firm and constant support or allegiance to a person or institution." +
            "<br><br>" +
            "(D) 'reliable' means consistently good in quality or performance; able to be trusted.",
        chinese_explanation: "(B) '背信弃义的' 意味着欺骗和不值得信任的。" +
            "<br><br>" +
            "(A) '可信赖的' 意味着可以依赖为诚实或真实的。" +
            "<br><br>" +
            "(C) '忠诚的' 意味着对一个人或机构给予或表现出坚定和持续的支持或忠诚的。" +
            "<br><br>" +
            "(D) '可靠的' 意味着质量或性能始终如一的；可以信赖的."
    },
    {
        id: 6,
        question: "The forest is home to __________ wildlife, making it a popular destination for nature enthusiasts.",
        chinese_question: "这片森林有 __________ 的野生动物，是自然爱好者的热门目的地。",
        answers: [
            { option: "A", answer: "plentiful", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "extinct", chinese_answer: "灭绝", chinese_romanization: "mièjué" },
            { option: "C", answer: "endangered", chinese_answer: "濒危", chinese_romanization: "bīnwēi" },
            { option: "D", answer: "uncommon", chinese_answer: "不常见", chinese_romanization: "bù chángjiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plentiful' means existing in or yielding great quantities; abundant." +
            "<br><br>" +
            "(B) 'extinct' means no longer in existence." +
            "<br><br>" +
            "(C) 'endangered' means at serious risk of extinction." +
            "<br><br>" +
            "(D) 'uncommon' means out of the ordinary; unusual.",
        chinese_explanation: "(A) '丰富' 意味着存在或产生大量的；丰富的。" +
            "<br><br>" +
            "(B) '灭绝' 意味着不再存在。" +
            "<br><br>" +
            "(C) '濒危' 意味着面临严重的灭绝风险。" +
            "<br><br>" +
            "(D) '不常见' 意味着不寻常的；不常见的。"
    },
    {
        id: 7,
        question: "The __________ software frequently crashed, making it frustrating to complete any task.",
        chinese_question: "这款 __________ 的软件经常崩溃，使得完成任何任务都变得令人沮丧。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "C", answer: "temperamental", chinese_answer: "喜怒无常的", chinese_romanization: "xǐnù wúcháng de" },
            { option: "D", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'temperamental' means liable to unreasonable changes of mood, often causing problems." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(D) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate.",
        chinese_explanation: "(C) '喜怒无常的' 意味着容易出现不合理的情绪变化，常常引起问题。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能改变或失败的；牢固确立的。" +
            "<br><br>" +
            "(B) '可靠的' 意味着质量或性能始终如一的；值得信赖的。" +
            "<br><br>" +
            "(D) '一致的' 意味着行为或做事方式在一段时间内保持不变，尤其是公平或准确的."
    },
    {
        id: 8,
    question: "The CEO's salary was __________ to the company's performance, ensuring fair compensation for his leadership.",
    chinese_question: "首席执行官的薪酬与公司的表现是 __________ 的，确保了对其领导力的公平补偿。",
    answers: [
        { option: "A", answer: "proportional", chinese_answer: "成比例的", chinese_romanization: "chéng bǐlì de" },
        { option: "B", answer: "excessive", chinese_answer: "过多的", chinese_romanization: "guòdū de" },
        { option: "C", answer: "minimal", chinese_answer: "最低的", chinese_romanization: "zuìdī de" },
        { option: "D", answer: "arbitrary", chinese_answer: "任意的", chinese_romanization: "rènyì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'proportional' means corresponding in size or amount to something else." +
        "<br><br>" +
        "(B) 'excessive' means more than is necessary, normal, or desirable." +
        "<br><br>" +
        "(C) 'minimal' means of a minimum amount, quantity, or degree." +
        "<br><br>" +
        "(D) 'arbitrary' means based on random choice or personal whim, rather than any reason or system.",
    chinese_explanation: "(A) '成比例的' 意味着在大小或数量上与其他事物相对应的。" +
        "<br><br>" +
        "(B) '过多的' 意味着超过必要、正常或理想的。" +
        "<br><br>" +
        "(C) '最低的' 意味着数量、数量或程度的最小。" +
        "<br><br>" +
        "(D) '任意的' 意味着基于随机选择或个人的心意，而不是任何理由或系统。"
    },
    {
        id: 9,
        question: "Despite the many rumors and accusations, her __________ reputation remained intact because she consistently demonstrated integrity and kindness to everyone around her.",
        chinese_question: "尽管有很多谣言和指控，她那 __________ 的声誉依然完好无损，因为她一贯对周围的每个人表现出诚信和善良。",
        answers: [
            { option: "A", answer: "tarnished", chinese_answer: "被玷污的", chinese_romanization: "bèi diànwū de" },
            { option: "B", answer: "questionable", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "C", answer: "dubious", chinese_answer: "令人怀疑的", chinese_romanization: "lìng rén huáiyí de" },
            { option: "D", answer: "immaculate", chinese_answer: "完美无瑕的", chinese_romanization: "wánměi wúxiá de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'immaculate' means free from flaws or mistakes; perfect." + 
            "<br><br>" +
            "(A) 'tarnished' means to have lost or caused to lose luster, especially as a result of exposure to air or moisture." +
            "<br><br>" +
            "(B) 'questionable' means doubtful as regards truth or quality." +
            "<br><br>" +
            "(C) 'dubious' means hesitating or doubting.",
        chinese_explanation: "(D) '完美无瑕的' 意味着没有瑕疵或错误的；完美的。" + 
            "<br><br>" +
            "(A) '被玷污的' 意味着失去光泽的或导致失去光泽的，特别是由于暴露在空气或湿气中。" +
            "<br><br>" +
            "(B) '可疑的' 意味着在真相或质量方面值得怀疑的。" +
            "<br><br>" +
            "(C) '令人怀疑的' 意味着犹豫或怀疑的。"
    },
    {
        id: 10,
        question: "In the often bustling library, the librarian was always __________, maintaining a calm and polite demeanor even during the busiest hours.",
        chinese_question: "在常常熙熙攘攘的图书馆里，图书管理员总是 __________，即使在最繁忙的时间也保持着冷静和礼貌的态度。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "disorderly", chinese_answer: "无序的", chinese_romanization: "wúxù de" },
            { option: "C", answer: "tumultuous", chinese_answer: "喧嚣的", chinese_romanization: "xuānxiāo de" },
            { option: "D", answer: "decorous", chinese_answer: "端庄的", chinese_romanization: "duānzhuāng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'decorous' means in keeping with good taste and propriety; polite and restrained." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'disorderly' means lacking organization; untidy." +
            "<br><br>" +
            "(C) 'tumultuous' means making a loud, confused noise; uproarious.",
        chinese_explanation: "(D) '端庄的' 意味着符合良好的品味和礼仪；礼貌和克制的。" +
            "<br><br>" +
            "(A) '混乱的' 意味着完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '无序的' 意味着缺乏组织；不整洁。" +
            "<br><br>" +
            "(C) '喧嚣的' 意味着发出响亮、混乱的声音；喧闹。"
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
