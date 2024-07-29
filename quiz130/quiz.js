// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He tried to __________ the shame of his past mistakes by working hard and achieving success.",
        chinese_question: "他试图通过努力工作和取得成功来 __________ 过去错误的羞耻。",
        answers: [
                { option: "A", answer: "highlight", chinese_answer: "突出", chinese_romanization: "tūchū" },
                { option: "B", answer: "efface", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
                { option: "C", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'efface' used figuratively means to erase or remove something from memory." +
            "<br><br>" +
            "(A) 'highlight' means to emphasize or make prominent." +
            "<br><br>" +
            "(C) 'emphasize' means to give special importance or prominence to something in speaking or writing." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '抹去' 在比喻意义上指从记忆中擦除或去除某物。" +
            "<br><br>" +
            "(A) '突出' 意味着强调或使显眼。" +
            "<br><br>" +
            "(C) '强调' 意味着在说话或写作中对某事给予特别重要或显著的位置。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 2,
        question: "In order to protect his reputation, he decided to __________ the allegations publicly, denying any wrongdoing and distancing himself from the accusations.",
        chinese_question: "为了保护自己的声誉，他决定公开 __________ 这些指控，否认任何不当行为并与这些指控保持距离。",
        answers: [
            { option: "A", answer: "affirm", chinese_answer: "肯定", chinese_romanization: "kěndìng" },
            { option: "B", answer: "contemplate", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
            { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "D", answer: "repudiate", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'repudiate' means to refuse to accept or be associated with." +
            "<br><br>" +
            "(A) 'affirm' means to state as a fact; assert strongly and publicly." +
            "<br><br>" +
            "(B) 'contemplate' means to look thoughtfully for a long time at." +
            "<br><br>" +
            "(C) 'accept' means to consent to receive or undertake something.",
        chinese_explanation: "(D) '否认' 意味着拒绝接受或与之相关。" +
            "<br><br>" +
            "(A) '肯定' 意味着作为事实陈述；强烈和公开地断言。" +
            "<br><br>" +
            "(B) '考虑' 意味着长时间深思熟虑地看待。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接收或承担某事。"
    },
    {
        id: 3,
    question: "She tried to __________ her guilt by doing volunteer work in the community, hoping that helping others would ease her conscience.",
    chinese_question: "她试图通过在社区做志愿工作来 __________ 她的内疚，希望帮助他人能减轻她的良心不安。",
    answers: [
        { option: "A", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "B", answer: "palliate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'palliate' means to make less severe or unpleasant without removing the cause." +
        "<br><br>" +
        "(A) 'intensify' means to become or make more intense." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'worsen' means to make or become worse.",
    chinese_explanation: "(B) '缓解'一词意味着在不消除原因的情况下减轻严重性或不愉快。" +
        "<br><br>" +
        "(A) '加剧' 意味着变得或使更强烈。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(D) '恶化' 意味着使变得更糟。"
    },
    {
        id: 4,
        question: "The old man was often dismissed as a __________, despite his sharp mind and wit.",
        chinese_question: "尽管这位老人头脑敏锐且机智，但他常被视为一个 __________。",
        answers: [
            { option: "A", answer: "genius", chinese_answer: "天才", chinese_romanization: "tiāncái" },
            { option: "B", answer: "prodigy", chinese_answer: "神童", chinese_romanization: "shéntóng" },
            { option: "C", answer: "dotard", chinese_answer: "老糊涂", chinese_romanization: "lǎohútú" },
            { option: "D", answer: "scholar", chinese_answer: "学者", chinese_romanization: "xuézhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dotard' means an old person, especially one who has become weak or senile." +
            "<br><br>" +
            "(A) 'genius' means a person with exceptional intellectual or creative power." +
            "<br><br>" +
            "(B) 'prodigy' means a person, especially a young one, endowed with exceptional qualities or abilities." +
            "<br><br>" +
            "(D) 'scholar' means a specialist in a particular branch of study, especially the humanities; a distinguished academic.",
        chinese_explanation: "(C) '老糊涂' 意味着一个老年人，尤其是那些变得虚弱或痴呆的人。" +
            "<br><br>" +
            "(A) '天才' 意味着具有非凡智力或创造力的人。" +
            "<br><br>" +
            "(B) '神童' 意味着一个有非凡品质或能力的人，尤其是年轻人。" +
            "<br><br>" +
            "(D) '学者' 意味着某一学科的专家，尤其是人文学科的专家；杰出的学者。"
    },
    {
        id: 5,
    question: "The strong drink seemed to __________ his senses, making him dizzy and disoriented.",
    chinese_question: "烈酒似乎 __________ 了他的感官，使他感到头晕和迷失方向。",
    answers: [
            { option: "A", answer: "fuddle", chinese_answer: "使迷糊", chinese_romanization: "shǐ míhú" },
            { option: "B", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fuddle' means to confuse or stupefy someone, especially with alcohol." +
            "<br><br>" +
            "(B) 'clear' means to make something free of confusion or obstruction." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'enhance' means to improve the quality, value, or extent of something.",
    chinese_explanation: "(A) '使迷糊' 意味着使某人迷惑或发呆，尤其是因酒精作用。" +
            "<br><br>" +
            "(B) '清晰' 意味着使某物不再困惑或阻塞。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '增强' 意味着改善某物的质量、价值或程度。"
    },
    {
        id: 6,
question: "The harsh winter wind seemed to __________ the skin from his face as he walked through the blizzard.",
chinese_question: "寒冬的风似乎要把他的脸皮 __________ 掉，当他在暴风雪中行走时。",
answers: [
        { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "flay", chinese_answer: "剥", chinese_romanization: "bāo" },
        { option: "C", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
        { option: "D", answer: "heal", chinese_answer: "治愈", chinese_romanization: "zhìyù" }
],
correctAnswer: "B",
explanation: "(B) 'flay' means to strip the skin off, often used to describe extreme harshness." +
        "<br><br>" +
        "(A) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'soothe' means to gently calm or reduce pain." +
        "<br><br>" +
        "(D) 'heal' means to become sound or healthy again.",
chinese_explanation: "(B) '剥' 意味着剥去皮肤，通常用于形容极端的严厉。" +
        "<br><br>" +
        "(A) '保护' 意味着使免受伤害或损害。" +
        "<br><br>" +
        "(C) '抚慰' 意味着轻轻地安抚或减轻疼痛。" +
        "<br><br>" +
        "(D) '治愈' 意味着变得健康或康复。"
    },
    {
        id: 7,
    question: "The company must __________ employees to work remotely during the pandemic, allowing them to stay safe and continue their tasks from home.",
    chinese_question: "公司必须 __________ 员工在疫情期间远程工作，允许他们在家中保持安全并继续工作。",
    answers: [
        { option: "A", answer: "restrict", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
        { option: "B", answer: "prohibit", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
        { option: "C", answer: "permit", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
        { option: "D", answer: "deny", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'permit' means to allow someone to do something." +
        "<br><br>" +
        "(A) 'restrict' means to put a limit on; keep under control." +
        "<br><br>" +
        "(B) 'prohibit' means to formally forbid something by law, rule, or other authority." +
        "<br><br>" +
        "(D) 'deny' means to refuse to give or grant something to someone.",
    chinese_explanation: "(C) '允许' 意味着允许某人做某事。" +
        "<br><br>" +
        "(A) '限制' 意味着对某事设定限制；控制。" +
        "<br><br>" +
        "(B) '禁止' 意味着通过法律、规则或其他权威正式禁止某事。" +
        "<br><br>" +
        "(D) '拒绝' 意味着拒绝给予或授予某人某事。"
    },
    {
        id: 8,
    question: "The public was quick to __________ the politician for his controversial remarks.",
    chinese_question: "公众迅速 __________ 那名政治家的争议言论。",
    answers: [
        { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "B", answer: "chastise", chinese_answer: "责罚", chinese_romanization: "zéfá" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'chastise' means to rebuke or reprimand severely." +
        "<br><br>" +
        "(A) 'reward' means to give something to someone in recognition of their service, effort, or achievement." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(B) '责罚' 意味着严厉地斥责或谴责。" +
        "<br><br>" +
        "(A) '奖励' 意味着因服务、努力或成就给予某人某物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 9,
        question: "The government decided to __________ the import of hazardous materials to protect public health.",
        chinese_question: "政府决定 __________ 危险物质的进口以保护公众健康。",
        answers: [
            { option: "A", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "interdict", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'interdict' means to prohibit or forbid something officially." +
            "<br><br>" +
            "(A) 'allow' means to give permission for something to happen." +
            "<br><br>" +
            "(B) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '禁止' 意味着官方禁止或禁止某事。" +
            "<br><br>" +
            "(A) '允许' 意味着允许某事发生。" +
            "<br><br>" +
            "(B) '鼓励' 意味着给予某人支持、信心或希望。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
        question: "The unexpected success of the project __________ a new sense of confidence within the team, boosting their morale and encouraging further innovation.",
        chinese_question: "项目的意外成功在团队内 __________ 了一种新的信心，提升了他们的士气并鼓励了进一步的创新。",
        answers: [
                { option: "A", answer: "engendered", chinese_answer: "产生了", chinese_romanization: "chǎnshēngle" },
                { option: "B", answer: "suppressed", chinese_answer: "压制了", chinese_romanization: "yāzhìle" },
                { option: "C", answer: "ignored", chinese_answer: "忽视了", chinese_romanization: "hūshìle" },
                { option: "D", answer: "diminished", chinese_answer: "减少了", chinese_romanization: "jiǎnshǎole" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'engendered' means to cause or give rise to a feeling, situation, or condition, used figuratively here." +
            "<br><br>" +
            "(B) 'suppressed' means to forcibly put an end to." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'diminished' means to make or become less.",
        chinese_explanation: "(A) '产生了' 意味着引起或产生一种感觉、情况或条件，这里是比喻用法。" +
            "<br><br>" +
            "(B) '压制了' 意味着强行结束。" +
            "<br><br>" +
            "(C) '忽视了' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '减少了' 意味着使或变得更少。"
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
