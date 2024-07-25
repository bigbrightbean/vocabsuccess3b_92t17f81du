// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ advice often left people more confused than enlightened.",
    chinese_question: "她的 __________ 建议往往让人们更加困惑而不是启发。",
    answers: [
        { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "B", answer: "oracular", chinese_answer: "神谕般的", chinese_romanization: "shényù bān de" },
        { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "D", answer: "unambiguous", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oracular' means resembling an oracle (as in solemnity of delivery); obscurely prophetic." +
        "<br><br>" +
        "(A) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(C) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(D) 'unambiguous' means not open to more than one interpretation.",
    chinese_explanation: "(B) '神谕般的' 意味着类似于神谕（如庄重的传递）；隐晦的预言。" +
        "<br><br>" +
        "(A) '清晰的' 意味着容易感知、理解或解释的。" +
        "<br><br>" +
        "(C) '简单的' 意味着容易理解或完成的；没有难度的。" +
        "<br><br>" +
        "(D) '明确的' 意味着没有多种解释的可能。"
    },
    {
        id: 2,
        question: "He remained __________ of the dangers ahead, blissfully unaware of the challenges he would soon face.",
        chinese_question: "他对前方的危险仍然 __________，对即将面临的挑战一无所知。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "B", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
            { option: "C", answer: "informed", chinese_answer: "了解的", chinese_romanization: "liǎojiě de" },
            { option: "D", answer: "knowledgeable", chinese_answer: "知识渊博的", chinese_romanization: "zhīshì yuānbó de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." + 
            "<br><br>" +
            "(B) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(C) 'informed' means having or showing knowledge of a particular subject or situation." +
            "<br><br>" +
            "(D) 'knowledgeable' means intelligent and well informed.",
        chinese_explanation: "(A) '无知的' 意味着缺乏一般的知识或意识；未受教育或不成熟的。" + 
            "<br><br>" +
            "(B) '知道的' 意味着对情况或事实有了解或感知的。" +
            "<br><br>" +
            "(C) '了解的' 意味着对特定主题或情况有或表现出知识的。" +
            "<br><br>" +
            "(D) '知识渊博的' 意味着聪明且知识丰富的。"
    },
    {
        id: 3,
        question: "His __________ analysis of the market trends helped the company make informed decisions.",
        chinese_question: "他对市场趋势的 __________ 分析帮助公司做出明智的决定。",
        answers: [
            { option: "A", answer: "uninformed", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "ignorant", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "clueless", chinese_answer: "毫无头绪", chinese_romanization: "háo wú tóuxù" },
            { option: "D", answer: "insightful", chinese_answer: "有见地", chinese_romanization: "yǒu jiàndì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'insightful' means having or showing an accurate and deep understanding; perceptive." + 
            "<br><br>" +
            "(A) 'uninformed' means not having or showing knowledge or awareness of the facts." +
            "<br><br>" +
            "(B) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(C) 'clueless' means having no knowledge, understanding, or ability.",
        chinese_explanation: "(D) '有见地' 意味着具有或展示准确和深入理解的；有洞察力的。" + 
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或意识。" +
            "<br><br>" +
            "(B) '无知' 意味着普遍缺乏知识或意识；未受教育或不成熟的。" +
            "<br><br>" +
            "(C) '毫无头绪' 意味着没有知识、理解或能力。"
    },
    {
        id: 4,
        question: "His __________ habits ensured that he rarely fell ill, always maintaining a clean environment.",
        chinese_question: "他的__________习惯确保他很少生病，总是保持干净的环境。",
        answers: [
            { option: "A", answer: "dirty", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "B", answer: "unhygienic", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" },
            { option: "C", answer: "hygienic", chinese_answer: "卫生的", chinese_romanization: "wèishēng de" },
            { option: "D", answer: "filthy", chinese_answer: "污秽的", chinese_romanization: "wūhuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hygienic' means conducive to maintaining health and preventing disease, especially by being clean. Figuratively, it can mean maintaining cleanliness and health." + 
            "<br><br>" +
            "(A) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(B) 'unhygienic' means not clean or sanitary." +
            "<br><br>" +
            "(D) 'filthy' means disgustingly dirty.",
        chinese_explanation: "(C) '卫生的'一词意味着有助于保持健康和预防疾病，尤其是通过保持清洁。比喻地，它可以表示保持清洁和健康。" + 
            "<br><br>" +
            "(A) '肮脏的' 意味着覆盖或标记着不干净的物质。" +
            "<br><br>" +
            "(B) '不卫生的' 意味着不干净或不卫生的。" +
            "<br><br>" +
            "(D) '污秽的' 意味着肮脏的。"
    },
    {
        id: 5,
        question: "He feels __________ for the success of the project and puts in extra hours to ensure everything goes smoothly.",
        chinese_question: "他觉得 __________ 项目的成功，并加班加点确保一切顺利进行。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "D", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'unreliable' means not able to be relied upon.",
        chinese_explanation: "(B) '负责的' 意味着有义务做某事，或在工作或角色的一部分中控制或照顾某人。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有充分注意或考虑避免伤害或错误。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。" +
            "<br><br>" +
            "(D) '不可靠的' 意味着不能依靠的。"
    },
    {
        id: 6,
        question: "It is __________ for the company to hold an annual picnic for its employees as a way to boost morale.",
        chinese_question: "公司每年为员工举办一次野餐以提高士气是 __________ 的。",
        answers: [
            { option: "A", answer: "extraordinary", chinese_answer: "非常的", chinese_romanization: "fēicháng de" },
            { option: "B", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "C", answer: "prohibited", chinese_answer: "被禁止的", chinese_romanization: "bèi jìnzhǐ de" },
            { option: "D", answer: "customary", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances." +
            "<br><br>" +
            "(A) 'extraordinary' means very unusual or remarkable." +
            "<br><br>" +
            "(B) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'prohibited' means that has been forbidden; banned.",
        chinese_explanation: "(D) '习惯的' 意味着根据特定社会、地方或情况的习俗或惯常做法。" +
            "<br><br>" +
            "(A) '非常的' 意味着非常不寻常或卓越的。" +
            "<br><br>" +
            "(B) '可选的' 意味着可以选择但不是强制性的。" +
            "<br><br>" +
            "(C) '被禁止的' 意味着被禁止的。"
    },
    {
        id: 7,
        question: "The professor's __________ explanation made the complex subject accessible to all students.",
        chinese_question: "教授 __________ 的解释使复杂的主题对所有学生都易于理解。",
        answers: [
            { option: "A", answer: "eloquent", chinese_answer: "雄辩", chinese_romanization: "xióngbiàn" },
            { option: "B", answer: "muddled", chinese_answer: "糊涂", chinese_romanization: "hútú" },
            { option: "C", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "D", answer: "obscure", chinese_answer: "隐晦", chinese_romanization: "yǐnhuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eloquent' means fluent or persuasive in speaking or writing." +
            "<br><br>" +
            "(B) 'muddled' means confused and disordered." +
            "<br><br>" +
            "(C) 'vague' means not clearly expressed or outlined." +
            "<br><br>" +
            "(D) 'obscure' means not well-known or not easily understood.",
        chinese_explanation: "(A) '雄辩' 意味着说话或写作流利且有说服力。" +
            "<br><br>" +
            "(B) '糊涂' 意味着困惑和混乱。" +
            "<br><br>" +
            "(C) '模糊' 意味着表达或轮廓不清晰。" +
            "<br><br>" +
            "(D) '隐晦' 意味着不为人知或不易理解。"
    },
    {
        id: 8,
    question: "The manager's __________ behavior towards the CEO was clear, as he constantly praised her decisions and never voiced any disagreement.",
    chinese_question: "经理对CEO的 __________ 行为显而易见，因为他不断赞扬她的决定，从不表示任何异议。",
    answers: [
        { option: "A", answer: "defiant", chinese_answer: "反抗的", chinese_romanization: "fǎnkàng de" },
        { option: "B", answer: "assertive", chinese_answer: "坚定自信的", chinese_romanization: "jiāndìng zìxìn de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "D", answer: "obsequious", chinese_answer: "奉承的", chinese_romanization: "fèngchéng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'obsequious' means obedient or attentive to an excessive or servile degree." +
        "<br><br>" +
        "(A) 'defiant' means showing open resistance or bold disobedience." +
        "<br><br>" +
        "(B) 'assertive' means having or showing a confident and forceful personality." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(D) '奉承的' 意味着顺从或过度的注意的程度。" +
        "<br><br>" +
        "(A) '反抗的' 意味着表现出公开的抵抗或大胆的不服从。" +
        "<br><br>" +
        "(B) '坚定自信的' 意味着拥有或表现出自信和有力的个性。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情的；不关心的。"
    },
    {
        id: 9,
        question: "Reading a good book by the fireplace on a rainy day is one of life's most __________ experiences.",
        chinese_question: "在雨天靠在壁炉旁读一本好书是人生中最 __________ 的体验之一。",
        answers: [
            { option: "A", answer: "pleasurable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "unpleasant", chinese_answer: "令人不快的", chinese_romanization: "lìng rén bùkuài de" },
            { option: "C", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "troubling", chinese_answer: "令人不安的", chinese_romanization: "lìng rén bù'ān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pleasurable' means giving pleasure; enjoyable." +
            "<br><br>" +
            "(B) 'unpleasant' means causing discomfort, unhappiness, or revulsion." +
            "<br><br>" +
            "(C) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(D) 'troubling' means causing distress or worry.",
        chinese_explanation: "(A) '愉快的' 意味着带来愉悦的；令人享受的。" +
            "<br><br>" +
            "(B) '令人不快的' 意味着引起不适、痛苦或厌恶的。" +
            "<br><br>" +
            "(C) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(D) '令人不安的' 意味着引起痛苦或担忧的。"
    },
    {
        id: 10,
        question: "His __________ speech moved the audience, leaving many in tears.",
        chinese_question: "他的__________演讲感动了观众，让许多人流下了眼泪。",
        answers: [
            { option: "A", answer: "insincere", chinese_answer: "不真诚的", chinese_romanization: "bù zhēnchéng de" },
            { option: "B", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
            { option: "C", answer: "heartfelt", chinese_answer: "真挚的", chinese_romanization: "zhēnzhì de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'heartfelt' means deeply and strongly felt; sincere. Figuratively, it can mean being deeply emotional and genuine." + 
            "<br><br>" +
            "(A) 'insincere' means not expressing genuine feelings." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '真挚的'一词意味着深深和强烈地感受到的；真诚的。比喻地，它可以表示深深的情感和真实的。" + 
            "<br><br>" +
            "(A) '不真诚的' 意味着不表达真实感情的。" +
            "<br><br>" +
            "(B) '肤浅的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
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
