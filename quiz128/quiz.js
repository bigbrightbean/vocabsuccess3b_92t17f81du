// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The judge decided to __________ the witness to gather more information about the case.",
        chinese_question: "法官决定 __________ 证人，以收集更多有关案件的信息。",
        answers: [
                { option: "A", answer: "depose", chinese_answer: "宣誓作证", chinese_romanization: "xuānshì zuòzhèng" },
                { option: "B", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'depose' means to testify or give evidence under oath, typically in a written statement." +
                "<br><br>" +
                "(B) 'dismiss' means to send away or allow to leave." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '宣誓作证' 意味着在宣誓下作证或提供证据，通常是书面声明。" +
                "<br><br>" +
                "(B) '解雇' 意味着送走或允许离开。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 2,
question: "Their friendship was __________ with a shared secret that bonded them for life.",
chinese_question: "他们的友谊因一个让他们终生难忘的共同秘密而被 __________。",
answers: [
    { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "sealed", chinese_answer: "确定", chinese_romanization: "quèdìng" },
    { option: "C", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
    { option: "D", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
],
correctAnswer: "B",
explanation: "(B) 'sealed' means confirmed or made certain." +
    "<br><br>" +
    "(A) 'ignored' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(C) 'questioned' means to ask questions or express doubt about something." +
    "<br><br>" +
    "(D) 'dismissed' means to decide that something or someone is not worth considering or giving attention.",
chinese_explanation: "(B) '确定' 意味着确认或确定。" +
    "<br><br>" +
    "(A) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(C) '质疑' 意味着提出问题或对某事表示怀疑。" +
    "<br><br>" +
    "(D) '驳回' 意味着决定某事或某人不值得考虑或给予关注。"
    },
    {
        id: 3,
        question: "The photographer __________ images of urban decay with images of vibrant city life to capture the contrasts within the city.",
        chinese_question: "摄影师将城市衰败的影像与充满活力的城市生活的影像 __________ 以捕捉城市内的对比。",
        answers: [
                { option: "A", answer: "juxtaposed", chinese_answer: "并列", chinese_romanization: "bìngliè" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'juxtaposed' means to place side by side for contrast, used figuratively here." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(D) 'supported' means to give assistance to.",
        chinese_explanation: "(A) '并列' 意味着并排放置以作对比，这里是比喻用法。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 4,
  question: "Despite the potential risks, she did not __________ when offered the challenging assignment.",
  chinese_question: "尽管存在潜在风险，但当被提供挑战性任务时，她没有 __________。",
  answers: [
    { option: "A", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yōngbào" },
    { option: "B", answer: "demur", chinese_answer: "异议", chinese_romanization: "yìyì" },
    { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
    { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
  ],
  correctAnswer: "B",
  explanation: "(B) 'demur' means to raise doubts or objections or show reluctance." +
    "<br><br>" +
    "(A) 'embrace' means to accept or support willingly and enthusiastically." +
    "<br><br>" +
    "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
    "<br><br>" +
    "(D) 'ignore' means to refuse to take notice of or acknowledge.",
  chinese_explanation: "(B) '异议'一词意味着提出疑虑或反对或表现出不情愿。" +
    "<br><br>" +
    "(A) '拥抱' 意味着自愿且热情地接受或支持。" +
    "<br><br>" +
    "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
    "<br><br>" +
    "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "The surveyors needed to __________ the boundaries of the property using their instruments.",
        chinese_question: "测量员需要使用他们的仪器来 __________ 物业的边界。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "B", answer: "alter", chinese_answer: "改变", chinese_romanization: "gǎibiàn" },
            { option: "C", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "triangulate", chinese_answer: "三角测量", chinese_romanization: "sānjiǎo cèliáng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'triangulate' means to determine a location by using the positions of three known points." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'alter' means to change or cause to change in character or composition." +
            "<br><br>" +
            "(C) 'overlook' means to fail to notice something.",
        chinese_explanation: "(D) '三角测量' 意味着使用三个已知点的位置来确定一个位置。" +
            "<br><br>" +
            "(A) '忽略' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '改变' 意味着改变或引起性格或组成的变化。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 6,
        question: "Over time, dust and debris will __________ in the corners of the room if not cleaned regularly.",
        chinese_question: "如果不定期清理，灰尘和碎屑会在房间的角落里 __________ 。",
        answers: [
        { option: "A", answer: "agglomerate", chinese_answer: "聚集", chinese_romanization: "jùjí" },
        { option: "B", answer: "vanish", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
        { option: "C", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'agglomerate' means to collect or form into a mass or group." +
            "<br><br>" +
            "(B) 'vanish' means to disappear suddenly and completely." +
            "<br><br>" +
            "(C) 'reduce' means to make smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(D) 'evaporate' means to turn from liquid into vapor.",
        chinese_explanation: "(A) '聚集' 意味着收集或形成一个团块或群体。" +
            "<br><br>" +
            "(B) '消失' 意味着突然完全消失。" +
            "<br><br>" +
            "(C) '减少' 意味着减少数量、程度或大小。" +
            "<br><br>" +
            "(D) '蒸发' 意味着从液体变成气体。"
    },
    {
        id: 7,
        question: "In the jungle, certain species of primates __________ to travel quickly and efficiently.",
        chinese_question: "在丛林中，某些灵长类动物通过 __________ 来快速高效地旅行。",
        answers: [
        { option: "A", answer: "brachiate", chinese_answer: "摆荡", chinese_romanization: "bǎidàng" },
        { option: "B", answer: "walk", chinese_answer: "走路", chinese_romanization: "zǒulù" },
        { option: "C", answer: "run", chinese_answer: "跑步", chinese_romanization: "pǎobù" },
        { option: "D", answer: "swim", chinese_answer: "游泳", chinese_romanization: "yóuyǒng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brachiate' means to move by swinging with the arms from one hold to another." +
            "<br><br>" +
            "(B) 'walk' means to move at a regular pace by lifting and setting down each foot in turn." +
            "<br><br>" +
            "(C) 'run' means to move at a speed faster than a walk." +
            "<br><br>" +
            "(D) 'swim' means to move through water by using the limbs.",
        chinese_explanation: "(A) '摆荡' 意味着通过用手臂从一个支撑点摆荡到另一个支撑点来移动。" +
            "<br><br>" +
            "(B) '走路' 意味着以规则的步伐移动，通过轮流抬起和放下每只脚。" +
            "<br><br>" +
            "(C) '跑步' 意味着以比走路快的速度移动。" +
            "<br><br>" +
            "(D) '游泳' 意味着通过使用四肢在水中移动。"
    },
    {
        id: 8,
        question: "To meet the increasing demand, the company decided to __________ more units of the popular gadget.",
        chinese_question: "为了满足日益增长的需求，公司决定 __________ 更多受欢迎的小工具。",
        answers: [
            { option: "A", answer: "cease", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "D", answer: "manufacture", chinese_answer: "生产", chinese_romanization: "shēngchǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'manufacture' means to make something, especially on a large scale using machinery." +
            "<br><br>" +
            "(A) 'cease' means to bring or come to an end." +
            "<br><br>" +
            "(B) 'conceal' means to keep something secret or hidden." +
            "<br><br>" +
            "(C) 'purchase' means to acquire something by paying for it.",
        chinese_explanation: "(D) '生产' 意味着制作某物，尤其是使用机械大规模制作。" +
            "<br><br>" +
            "(A) '停止' 意味着使某事物结束。" +
            "<br><br>" +
            "(B) '隐藏' 意味着将某物保密或隐藏。" +
            "<br><br>" +
            "(C) '购买' 意味着通过支付获得某物。"
    },
    {
        id: 9,
        question: "The political movement began to __________ when key leaders left to pursue other interests.",
        chinese_question: "当主要领导人离开追求其他兴趣时，政治运动开始 __________ 。",
        answers: [
                { option: "A", answer: "disband", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
                { option: "B", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "unite", chinese_answer: "联合", chinese_romanization: "liánhé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disband' means to break up or cause to break up and stop functioning, used figuratively here." +
                "<br><br>" +
                "(B) 'strengthen' means to make or become stronger." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'unite' means to come or bring together for a common purpose or action.",
        chinese_explanation: "(A) '解散' 意味着分开或导致分开并停止运作，这里是比喻用法。" +
                "<br><br>" +
                "(B) '加强' 意味着使某物变得更强。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '联合' 意味着为了共同的目的或行动而聚集在一起。"
    },
    {
        id: 10,
question: "In his quest for perfection, he would often __________ himself for not meeting his own high standards.",
chinese_question: "在追求完美的过程中，他经常会因为未达到自己的高标准而 __________ 自己。",
answers: [
        { option: "A", answer: "flagellate", chinese_answer: "自责", chinese_romanization: "zìzé" },
        { option: "B", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
],
correctAnswer: "A",
explanation: "(A) 'flagellate' means to whip or beat someone, used figuratively here to mean punishing oneself." +
        "<br><br>" +
        "(B) 'indulge' means to allow oneself to enjoy the pleasure of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
chinese_explanation: "(A) '自责' 意味着鞭打或击打某人，这里是比喻用法，意思是情感上惩罚自己。" +
        "<br><br>" +
        "(B) '放纵' 意味着允许自己享受快乐。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
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
