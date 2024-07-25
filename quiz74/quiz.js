// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "As a __________, he rarely concerned himself with the mundane tasks of daily life, focusing instead on his next extravagant vacation.",
        chinese_question: "作为一个 __________，他很少关心日常生活中的琐事，而是专注于他的下一个奢华假期。",
        answers: [
                { option: "A", answer: "miser", chinese_answer: "守财奴", chinese_romanization: "shǒucáinú" },
                { option: "B", answer: "puritan", chinese_answer: "清教徒", chinese_romanization: "qīngjiàotú" },
                { option: "C", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" },
                { option: "D", answer: "sybarite", chinese_answer: "享乐主义者", chinese_romanization: "xiǎnglè zhǔyì zhě" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sybarite' means a person who is self-indulgent in their fondness for sensuous luxury." +
                "<br><br>" +
                "(A) 'miser' means a person who hoards wealth and spends as little money as possible." +
                "<br><br>" +
                "(B) 'puritan' means a person with censorious moral beliefs, especially about self-indulgence and sex." +
                "<br><br>" +
                "(C) 'pragmatist' means a person who is guided more by practical considerations than by ideals.",
        chinese_explanation: "(D) '享乐主义者'一词意味着一个沉溺于感官奢华的人。" +
                "<br><br>" +
                "(A) '守财奴' 意味着一个囤积财富并尽可能少花钱的人。" +
                "<br><br>" +
                "(B) '清教徒' 意味着一个具有严苛道德信仰的人，尤其是关于自我放纵和性。" +
                "<br><br>" +
                "(C) '实用主义者' 意味着一个更多地受到实际考虑而不是理想指导的人。"
    },
    {
        id: 2,
        question: "The seasoned executives were not pleased with the __________, who quickly climbed the corporate ladder despite his lack of experience.",
        chinese_question: "资深高管们对这位 __________ 感到不满，他尽管缺乏经验，却迅速攀升到公司高层。",
        answers: [
                { option: "A", answer: "upstart", chinese_answer: "暴发户", chinese_romanization: "bàofāhù" },
                { option: "B", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
                { option: "C", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
                { option: "D", answer: "authority", chinese_answer: "权威", chinese_romanization: "quánwēi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'upstart' means a person who has risen suddenly to wealth or high position, especially one who behaves arrogantly." +
                "<br><br>" +
                "(B) 'veteran' means a person who has had long experience in a particular field." +
                "<br><br>" +
                "(C) 'expert' means a person who is very knowledgeable about or skillful in a particular area." +
                "<br><br>" +
                "(D) 'authority' means a person or organization having power or control in a particular, typically political or administrative, sphere.",
        chinese_explanation: "(A) '暴发户' 意味着一个突然变得富有或地位很高的人，尤其是那些行为傲慢的人。" +
                "<br><br>" +
                "(B) '老手' 意味着在某一领域有长期经验的人。" +
                "<br><br>" +
                "(C) '专家' 意味着在某一领域非常有知识或技能的人。" +
                "<br><br>" +
                "(D) '权威' 意味着在特定领域（通常是政治或行政领域）拥有权力或控制的个人或组织。"
    },
    {
        id: 3,
        question: "He operated under the __________ that his business was thriving, despite evidence to the contrary.",
        chinese_question: "尽管有相反的证据，他仍以为他的生意蒸蒸日上，这是一个 __________。",
        answers: [
                { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
                { option: "B", answer: "delusion", chinese_answer: "错觉", chinese_romanization: "cuòjué" },
                { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
                { option: "D", answer: "ambition", chinese_answer: "野心", chinese_romanization: "yěxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'delusion' means a false belief or judgment about external reality." +
                "<br><br>" +
                "(A) 'success' means the accomplishment of an aim or purpose." +
                "<br><br>" +
                "(C) 'failure' means lack of success." +
                "<br><br>" +
                "(D) 'ambition' means a strong desire to do or achieve something.",
        chinese_explanation: "(B) '错觉'一词意味着对外部现实的错误信念或判断。" +
                "<br><br>" +
                "(A) '成功' 意味着目标或目的的实现。" +
                "<br><br>" +
                "(C) '失败' 意味着缺乏成功。" +
                "<br><br>" +
                "(D) '野心' 意味着做某事或实现某事的强烈愿望。"
    },
    {
        id: 4,
        question: "The philosopher's __________ on living a meaningful life resonated with many readers, prompting deep reflection.",
        chinese_question: "哲学家关于过有意义生活的 __________ 引起了许多读者的共鸣，促使他们深思。",
        answers: [
                { option: "A", answer: "precepts", chinese_answer: "准则", chinese_romanization: "zhǔnzé" },
                { option: "B", answer: "dilemmas", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
                { option: "C", answer: "stories", chinese_answer: "故事", chinese_romanization: "gùshì" },
                { option: "D", answer: "guesses", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precepts' figuratively means general rules intended to regulate behavior or thought." +
                "<br><br>" +
                "(B) 'dilemmas' means situations in which difficult choices have to be made between two or more alternatives." +
                "<br><br>" +
                "(C) 'stories' means accounts of imaginary or real people and events told for entertainment." +
                "<br><br>" +
                "(D) 'guesses' means estimates or supposes something without sufficient information to be sure of being correct.",
        chinese_explanation: "(A) '准则' 在此语境下意指用于规范行为或思想的一般规则。" +
                "<br><br>" +
                "(B) '困境' 意味着在两种或多种选择之间做出困难选择的情况。" +
                "<br><br>" +
                "(C) '故事' 意味着为娱乐而讲述的关于虚构或真实人物和事件的描述。" +
                "<br><br>" +
                "(D) '猜测' 意味着在没有足够信息确定正确的情况下估计或假设某事。"
    },
    {
        id: 5,
        question: "The researchers are investigating new __________ for treating the disease, including experimental drugs and gene therapy.",
        chinese_question: "研究人员正在调查治疗这种疾病的新 __________，包括实验药物和基因疗法。",
        answers: [
                { option: "A", answer: "hindrances", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "B", answer: "complications", chinese_answer: "复杂情况", chinese_romanization: "fùzá qíngkuàng" },
                { option: "C", answer: "setbacks", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
                { option: "D", answer: "avenues", chinese_answer: "途径", chinese_romanization: "tújìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'avenues' means ways of approaching a problem or making progress toward something." +
                "<br><br>" +
                "(A) 'hindrances' means things that provide resistance, delay, or obstruction to something or someone." +
                "<br><br>" +
                "(B) 'complications' means circumstances that complicate something; a difficulty." +
                "<br><br>" +
                "(C) 'setbacks' means reversals or checks in progress.",
        chinese_explanation: "(D) '途径' 意味着解决问题或取得进展的方法。" +
                "<br><br>" +
                "(A) '障碍' 意味着提供抵抗、延迟或阻碍某事物或某人的事物。" +
                "<br><br>" +
                "(B) '复杂情况' 意味着使某事复杂化的情况；困难。" +
                "<br><br>" +
                "(C) '挫折' 意味着进展中的逆转或检查。"
    },
    {
        id: 6,
        question: "The team's __________ was palpable after losing the championship game they had expected to win.",
        chinese_question: "在输掉他们本以为会赢得的冠军赛后，团队的 __________ 是显而易见的。",
        answers: [
                { option: "A", answer: "pride", chinese_answer: "自豪", chinese_romanization: "zìháo" },
                { option: "B", answer: "chagrin", chinese_answer: "懊恼", chinese_romanization: "àonǎo" },
                { option: "C", answer: "anticipation", chinese_answer: "期待", chinese_romanization: "qídài" },
                { option: "D", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chagrin' figuratively means feeling distressed or humiliated because of a disappointment or setback." +
                "<br><br>" +
                "(A) 'pride' means a feeling of deep pleasure or satisfaction derived from one's own achievements." +
                "<br><br>" +
                "(C) 'anticipation' means the action of anticipating something; expectation or prediction." +
                "<br><br>" +
                "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs.",
        chinese_explanation: "(B) '懊恼' 在此语境下意指因为失望或挫折而感到苦恼或羞辱。" +
                "<br><br>" +
                "(A) '自豪' 意味着因自己的成就而感到的深深的愉悦或满足感。" +
                "<br><br>" +
                "(C) '期待' 意味着预期或预测的行为。" +
                "<br><br>" +
                "(D) '满足' 意味着实现自己的愿望、期望或需要的状态。"
    },
    {
        id: 7,
        question: "The relationship between the two countries has reached a __________, with no significant changes in recent years.",
        chinese_question: "两国之间的关系已经达到 __________，近年来没有显著变化。",
        answers: [
                { option: "A", answer: "zenith", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
                { option: "B", answer: "plateau", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
                { option: "C", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
                { option: "D", answer: "incline", chinese_answer: "倾斜", chinese_romanization: "qīngxié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plateau' figuratively means a period or state of little or no growth or decline." +
                "<br><br>" +
                "(A) 'zenith' means the highest point reached by a celestial or other object." +
                "<br><br>" +
                "(C) 'nadir' means the lowest point in the fortunes of a person or organization." +
                "<br><br>" +
                "(D) 'incline' means a slope or slant.",
        chinese_explanation: "(B) '停滞' 在此语境下意指几乎没有增长或下降的时期或状态。" +
                "<br><br>" +
                "(A) '顶点' 意味着天体或其他物体所达到的最高点。" +
                "<br><br>" +
                "(C) '最低点' 意味着一个人或组织命运中的最低点。" +
                "<br><br>" +
                "(D) '倾斜' 意味着一个斜坡或倾斜。"
    },
    {
        id: 8,
    question: "Her boss's __________ about company policies became a background noise she learned to ignore.",
    chinese_question: "她老板关于公司政策的 __________ 成了她学会忽略的背景噪音。",
    answers: [
        { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "C", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
        { option: "D", answer: "drone", chinese_answer: "单调", chinese_romanization: "dāndiào" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'drone' used figuratively means to talk in a monotonous tone, making it boring or repetitive." +
                "<br><br>" +
                "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
                "<br><br>" +
                "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
                "<br><br>" +
                "(C) 'silence' means the absence of sound.",
    chinese_explanation: "(D) '单调' 在比喻意义上指以单调的语调说话，使其变得无聊或重复。" +
                "<br><br>" +
                "(A) '兴奋' 意味着极大的热情和渴望。" +
                "<br><br>" +
                "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
                "<br><br>" +
                "(C) '安静' 意味着没有声音。"
    },
    {
        id: 9,
        question: "The __________ of change in the industry has accelerated due to technological advancements.",
        chinese_question: "由于技术进步，行业变化的 __________ 加快了。",
        answers: [
            { option: "A", answer: "rate", chinese_answer: "速度", chinese_romanization: "sùdù" },
            { option: "B", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rate' means a measure, quantity, or frequency, typically one measured against another quantity or measure." +
                "<br><br>" +
                "(B) 'error' means a mistake." +
                "<br><br>" +
                "(C) 'delay' means a period of time by which something is late or postponed." +
                "<br><br>" +
                "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(A) '速度' 意味着一种度量、数量或频率，通常与另一数量或度量相比较。" +
                "<br><br>" +
                "(B) '错误' 意味着错误。" +
                "<br><br>" +
                "(C) '延迟' 意味着某事迟到或推迟的一段时间。" +
                "<br><br>" +
                "(D) '犹豫' 意味着在说或做某事之前暂停或犹豫的行为。"
    },
    {
        id: 10,
        question: "The __________ in the marketplace was overwhelming, making it hard to focus on any one vendor.",
        chinese_question: "市场上的 __________ 令人难以承受，让人难以专注于任何一个商贩。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "hubbub", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "C", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hubbub' means a chaotic noise caused by a crowd of people or confusion." +
                "<br><br>" +
                "(A) 'quiet' means the absence of noise." +
                "<br><br>" +
                "(C) 'order' means the arrangement or disposition of people or things in relation to each other." +
                "<br><br>" +
                "(D) 'calm' means the absence of violent or confrontational activity.",
        chinese_explanation: "(B) '喧闹' 意味着由一群人或混乱引起的混乱噪音。" +
                "<br><br>" +
                "(A) '安静' 意味着没有噪音。" +
                "<br><br>" +
                "(C) '秩序' 意味着人与物之间的排列或布置。" +
                "<br><br>" +
                "(D) '平静' 意味着没有暴力或对抗活动。"
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
