// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's __________ management led to its financial downfall.",
        chinese_question: "公司的 __________ 管理导致了其财务的崩溃。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
            { option: "B", answer: "responsible", chinese_answer: "负责任", chinese_romanization: "fù zérèn" },
            { option: "C", answer: "irresponsible", chinese_answer: "不负责任", chinese_romanization: "bù fù zérèn" },
            { option: "D", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irresponsible' means not showing a proper sense of responsibility." + 
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm." +
            "<br><br>" +
            "(B) 'responsible' means having an obligation to do something as part of a job or role." +
            "<br><br>" +
            "(D) 'diligent' means having or showing care and conscientiousness in one's work or duties.",
        chinese_explanation: "(C) '不负责任' 意味着不表现出应有的责任感。" + 
            "<br><br>" +
            "(A) '小心' 意味着确保避免潜在的危险、事故或伤害。" +
            "<br><br>" +
            "(B) '负责任' 意味着有义务作为工作或角色的一部分做某事。" +
            "<br><br>" +
            "(D) '勤奋' 意味着在工作或职责上表现出关心和认真。"
    },
    {
        id: 2,
        question: "He navigated the complex negotiations with a __________ finesse, leaving both parties satisfied.",
        chinese_question: "他以 __________ 的手法处理复杂的谈判，使双方都感到满意。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "sleek", chinese_answer: "流畅的", chinese_romanization: "liúchàng de" },
            { option: "C", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "D", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sleek' means smooth and glossy; having an elegant, streamlined shape, often used figuratively to mean polished and well-executed." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(D) 'rigid' means unable to bend or be forced out of shape; not flexible.",
        chinese_explanation: "(B) '流畅的' 意味着光滑和有光泽的；具有优雅的流线型外形，通常用作比喻意指精致和执行良好的。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着动作或处理事情时笨拙的。" +
            "<br><br>" +
            "(C) '粗糙的' 意味着表面不平整的；不光滑或不平的。" +
            "<br><br>" +
            "(D) '僵硬的' 意味着不能弯曲或被迫变形的；不灵活的."
    },
    {
        id: 3,
        question: "The retired couple often reminisced about the __________ days of their youth, filled with carefree adventures and happiness.",
        chinese_question: "这对退休夫妇常常怀念他们 __________ 的青春时光，那段时光充满了无忧无虑的冒险和快乐。",
        answers: [
            { option: "A", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
            { option: "B", answer: "halcyon", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "D", answer: "stressful", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'halcyon' means denoting a period of time in the past that was idyllically happy and peaceful." +
            "<br><br>" +
            "(A) 'turbulent' means characterized by conflict, disorder, or confusion; not stable or calm." +
            "<br><br>" +
            "(C) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(D) 'stressful' means causing mental or emotional stress.",
        chinese_explanation: "(B) '平静的'一词指过去一段时间，理想地快乐和平静。" +
            "<br><br>" +
            "(A) '动荡的' 意味着以冲突、混乱或困惑为特征；不稳定或不平静。" +
            "<br><br>" +
            "(C) '混乱的' 意味着完全混乱和无序的状态。" +
            "<br><br>" +
            "(D) '紧张的' 意味着引起精神或情绪压力。"
    },
    {
        id: 4,
    question: "Her __________ presence made everyone feel at ease, as if they were at home.",
    chinese_question: "她 __________ 的存在让每个人都感到安心，就像在家一样。",
    answers: [
      { option: "A", answer: "cozy", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
      { option: "B", answer: "intimidating", chinese_answer: "令人生畏的", chinese_romanization: "lìngrén shēngwèi de" },
      { option: "C", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
      { option: "D", answer: "unsettling", chinese_answer: "令人不安的", chinese_romanization: "lìngrén bù'ān de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cozy' means giving a feeling of comfort, warmth, and relaxation." +
      "<br><br>" +
      "(B) 'intimidating' means frightening or overawing someone, especially in order to make them do what one wants." +
      "<br><br>" +
      "(C) 'distant' means far away in space or time." +
      "<br><br>" +
      "(D) 'unsettling' means causing anxiety or uneasiness; disturbing.",
    chinese_explanation: "(A) '舒适的' 意味着给予舒适、温暖和放松的感觉。" +
      "<br><br>" +
      "(B) '令人生畏的' 意味着使某人感到害怕或敬畏的，尤其是为了让他们做某事。" +
      "<br><br>" +
      "(C) '遥远的' 意味着在空间或时间上很远的。" +
      "<br><br>" +
      "(D) '令人不安的' 意味着引起焦虑或不安的；令人不安的。"
    },
    {
        id: 5,
        question: "The __________ nature of the regulations left many employees confused about the correct procedures.",
        chinese_question: "规定的 __________ 性质让许多员工对正确的程序感到困惑。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéliǎodàng de" },
            { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to understand." +
            "<br><br>" +
            "(D) 'basic' means forming an essential foundation or starting point.",
        chinese_explanation: "(B) '复杂的' 意味着极其复杂且难以跟随。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成。" +
            "<br><br>" +
            "(C) '直截了当的' 意味着不复杂且容易理解。" +
            "<br><br>" +
            "(D) '基本的' 意味着形成基础或起点。"
    },
    {
        id: 6,
        question: "She was hired for the job because she is __________ and can communicate fluently in both English and Spanish.",
        chinese_question: "她因为 __________ 而被雇佣，可以流利地用英语和西班牙语交流。",
        answers: [
            { option: "A", answer: "monolingual", chinese_answer: "单语的", chinese_romanization: "dānyǔ de" },
            { option: "B", answer: "unilingual", chinese_answer: "单语言的", chinese_romanization: "dān yǔyán de" },
            { option: "C", answer: "bilingual", chinese_answer: "双语的", chinese_romanization: "shuāngyǔ de" },
            { option: "D", answer: "linguistically-challenged", chinese_answer: "语言能力受限的", chinese_romanization: "yǔyán nénglì shòuxiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bilingual' means able to speak two languages fluently." +
            "<br><br>" +
            "(A) 'monolingual' means speaking only one language." +
            "<br><br>" +
            "(B) 'unilingual' means of, relating to, or involving only one language." +
            "<br><br>" +
            "(D) 'linguistically-challenged' means having difficulty with language skills.",
        chinese_explanation: "(C) '双语的' 意味着能够流利地说两种语言。" +
            "<br><br>" +
            "(A) '单语的' 意味着只说一种语言。" +
            "<br><br>" +
            "(B) '单语言的' 意味着与仅涉及一种语言有关的。" +
            "<br><br>" +
            "(D) '语言能力受限的' 意味着在语言技能上有困难的。"
    },
    {
        id: 7,
        question: "His approach to solving the conflict was __________, leading to further misunderstandings.",
        chinese_question: "他解决冲突的方法是 __________ 的，导致了进一步的误解。",
        answers: [
            { option: "A", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "B", answer: "effective", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" },
            { option: "C", answer: "constructive", chinese_answer: "建设性的", chinese_romanization: "jiànshè xìng de" },
            { option: "D", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'problematic' means presenting a problem or difficulty." +
            "<br><br>" +
            "(B) 'effective' means successful in producing a desired or intended result." +
            "<br><br>" +
            "(C) 'constructive' means serving a useful purpose; tending to build up." +
            "<br><br>" +
            "(D) 'positive' means consisting in or characterized by the presence rather than the absence of distinguishing features.",
        chinese_explanation: "(A) '有问题的' 意味着提出一个问题或困难。" +
            "<br><br>" +
            "(B) '有效的' 意味着成功地产生预期或意图的结果。" +
            "<br><br>" +
            "(C) '建设性的' 意味着有用的目的；倾向于建立的。" +
            "<br><br>" +
            "(D) '积极的' 意味着存在的特点而不是缺乏的特点."
    },
    {
        id: 8,
        question: "Her instructions were very __________, making it simple for everyone to understand the new procedure without any confusion.",
        chinese_question: "她的说明非常 __________，使每个人都能简单地理解新的程序而不会感到困惑。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "B", answer: "misleading", chinese_answer: "误导的", chinese_romanization: "wùdǎo de" },
            { option: "C", answer: "perplexing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "D", answer: "user-friendly", chinese_answer: "用户友好的", chinese_romanization: "yònghù yǒuhǎo de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'user-friendly' means easy to use or understand." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'misleading' means giving the wrong idea or impression." +
            "<br><br>" +
            "(C) 'perplexing' means completely baffling; very puzzling.",
        chinese_explanation: "(D) '用户友好的' 意味着易于使用或理解的。" +
            "<br><br>" +
            "(A) '模糊的' 意味着性质或意义不确定、不明确的。" +
            "<br><br>" +
            "(B) '误导的' 意味着给人错误的想法或印象的。" +
            "<br><br>" +
            "(C) '令人困惑的' 意味着完全使人困惑的；非常令人困惑的。"
    },
    {
        id: 9,
    question: "The stock market showed __________ patterns, with prices rising and falling unpredictably.",
    chinese_question: "股市显示出 __________ 的模式，价格不可预测地起伏波动。",
    answers: [
        { option: "A", answer: "steady", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "B", answer: "linear", chinese_answer: "线性", chinese_romanization: "xiànxìng" },
        { option: "C", answer: "undulating", chinese_answer: "起伏", chinese_romanization: "qǐfú" },
        { option: "D", answer: "constant", chinese_answer: "恒定", chinese_romanization: "héngdìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'undulating' means having a smoothly rising and falling form or outline." +
        "<br><br>" +
        "(A) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
        "<br><br>" +
        "(B) 'linear' means arranged in or extending along a straight or nearly straight line." +
        "<br><br>" +
        "(D) 'constant' means occurring continuously over a period of time.",
    chinese_explanation: "(C) '起伏' 意味着具有平滑的起伏形态或轮廓。" +
        "<br><br>" +
        "(A) '稳定' 意味着牢固固定、支撑或平衡；不摇晃或移动。" +
        "<br><br>" +
        "(B) '线性' 意味着沿直线或几乎直线排列或延伸。" +
        "<br><br>" +
        "(D) '恒定' 意味着在一段时间内连续发生。"
    },
    {
        id: 10,
        question: "Charging such a high price for basic necessities is __________, especially when so many people are struggling financially.",
        chinese_question: "对基本必需品收取如此高的价格是 __________ 的，尤其是在如此多人在经济上挣扎的时候。",
        answers: [
            { option: "A", answer: "acceptable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
            { option: "B", answer: "reasonable", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "C", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "D", answer: "unconscionable", chinese_answer: "昧良心的", chinese_romanization: "mèi liángxīn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unconscionable' means not right or reasonable; unreasonably excessive." +
            "<br><br>" +
            "(A) 'acceptable' means able to be tolerated or allowed." +
            "<br><br>" +
            "(B) 'reasonable' means having sound judgment; fair and sensible." +
            "<br><br>" +
            "(C) 'fair' means in accordance with the rules or standards; legitimate.",
        chinese_explanation: "(D) '昧良心的' 意味着不正确或不合理的；过度的。" +
            "<br><br>" +
            "(A) '可接受的' 意味着能够被容忍或允许的。" +
            "<br><br>" +
            "(B) '合理的' 意味着具有合理判断的；公平和明智的。" +
            "<br><br>" +
            "(C) '公平的' 意味着符合规则或标准的；合法的。"
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
