// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist __________ with confidence that the results of the experiment were conclusive and could not be disputed.",
        chinese_question: "科学家自信地 __________ 实验结果是确凿的，不容置疑。",
        answers: [
        { option: "A", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "B", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
        { option: "C", answer: "averred", chinese_answer: "断言", chinese_romanization: "duàn yán" },
        { option: "D", answer: "disregarded", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'averred' means to assert or affirm with confidence." +
            "<br><br>" +
            "(A) 'doubted' means to feel uncertain about something." +
            "<br><br>" +
            "(B) 'questioned' means to ask questions or interrogate." +
            "<br><br>" +
            "(D) 'disregarded' means to pay no attention to; ignore.",
        chinese_explanation: "(C) '断言' 意味着自信地断言或肯定。" +
            "<br><br>" +
            "(A) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(B) '质疑' 意味着提问或审问。" +
            "<br><br>" +
            "(D) '无视' 意味着不注意；忽略。"
    },
    {
        id: 2,
        question: "The artist felt __________ by the need to conform to commercial expectations, because it meant sacrificing creative freedom and compromising artistic integrity.",
        chinese_question: "艺术家感到被需要迎合商业期望所 __________，因为这意味着牺牲创作自由和妥协艺术完整性。",
        answers: [
                { option: "A", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
                { option: "B", answer: "enfettered", chinese_answer: "束缚", chinese_romanization: "shùfù" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enfettered' used figuratively means to be held back or restrained by something." +
            "<br><br>" +
            "(A) 'liberated' means to set someone free from a situation." +
            "<br><br>" +
            "(C) 'supported' means to bear all or part of the weight of something." +
            "<br><br>" +
            "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '束缚' 在比喻意义上指被某事牵制或限制。" +
            "<br><br>" +
            "(A) '解放' 意味着使某人从某种情况下解脱出来。" +
            "<br><br>" +
            "(C) '支持' 意味着支撑某物的全部或部分重量。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 3,
        question: "The prisoner was __________ by heavy chains, making it impossible for him to escape.",
        chinese_question: "囚犯被沉重的铁链 __________，使他不可能逃脱。",
        answers: [
                { option: "A", answer: "freed", chinese_answer: "释放", chinese_romanization: "shìfàng" },
                { option: "B", answer: "fettered", chinese_answer: "束缚", chinese_romanization: "shùfù" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fettered' means to restrain with chains or manacles, typically around the ankles." +
                "<br><br>" +
                "(A) 'freed' means to release from confinement." +
                "<br><br>" +
                "(C) 'supported' means to bear all or part of the weight of something." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '束缚' 意味着用链条或镣铐（通常是脚镣）约束。" +
                "<br><br>" +
                "(A) '释放' 意味着从监禁中释放。" +
                "<br><br>" +
                "(C) '支持' 意味着支撑某物的全部或部分重量。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
question: "The editor decided to __________ a few sentences into the article to clarify the main point.",
chinese_question: "编辑决定在文章中 __________ 几句话以澄清要点。",
answers: [
        { option: "A", answer: "interpolate", chinese_answer: "插入", chinese_romanization: "chārù" },
        { option: "B", answer: "delete", chinese_answer: "删除", chinese_romanization: "shānchú" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
],
correctAnswer: "A",
explanation: "(A) 'interpolate' means to insert something, often words, into a text or conversation." +
        "<br><br>" +
        "(B) 'delete' means to remove something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
chinese_explanation: "(A) '插入' 意味着将某物插入文本或对话中。" +
        "<br><br>" +
        "(B) '删除' 意味着去除某物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 5,
question: "He apologized sincerely to __________ the damage caused by his earlier remarks.",
chinese_question: "他真诚地道歉以 __________ 之前言论造成的损害。",
answers: [
    { option: "A", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
    { option: "B", answer: "mitigate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
    { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" }
],
correctAnswer: "B",
explanation: "(B) 'mitigate' means to make less severe or intense." +
    "<br><br>" +
    "(A) 'aggravate' means to make something worse." +
    "<br><br>" +
    "(C) 'disregard' means to pay no attention to." +
    "<br><br>" +
    "(D) 'amplify' means to increase in extent or intensity.",
chinese_explanation: "(B) '减轻' 意味着使某事物不那么严重或强烈。" +
    "<br><br>" +
    "(A) '加剧' 意味着使某事变得更糟。" +
    "<br><br>" +
    "(C) '忽视' 意味着不注意。" +
    "<br><br>" +
    "(D) '放大' 意味着在范围或强度上增加。"
    },
    {
        id: 6,
        question: "After the market crash, investors hoped to __________ their losses by the end of the year.",
        chinese_question: "市场崩盘后，投资者希望在年底前 __________ 他们的损失。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "recuperate", chinese_answer: "弥补", chinese_romanization: "míbǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'recuperate' means to recover from illness or exertion, here used figuratively to mean recovering losses." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(B) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
        chinese_explanation: "(D) '弥补' 在这里是比喻意义，指恢复损失。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(B) '增加' 意味着变得更大或更多。" +
            "<br><br>" +
            "(C) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。"
    },
    {
        id: 7,
question: "He __________ the responsibility for the mistake, blaming it on a colleague instead.",
chinese_question: "他 __________ 了对错误的责任，把责任推到了一位同事身上。",
answers: [
    { option: "A", answer: "accepted", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
    { option: "B", answer: "embraced", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
    { option: "C", answer: "dodged", chinese_answer: "躲避", chinese_romanization: "duǒbì" },
    { option: "D", answer: "acknowledged", chinese_answer: "承认", chinese_romanization: "chéngrèn" }
],
correctAnswer: "C",
explanation: "(C) 'dodged' means avoided something, often in a skillful or cunning manner." +
    "<br><br>" +
    "(A) 'accepted' means consented to receive or undertake something offered." +
    "<br><br>" +
    "(B) 'embraced' means accepted or supported willingly and enthusiastically." +
    "<br><br>" +
    "(D) 'acknowledged' means recognized the fact or importance of something.",
chinese_explanation: "(C) '躲避' 意味着避开某事，通常是巧妙或狡猾的方式。" +
    "<br><br>" +
    "(A) '接受' 意味着同意接受或承担提供的东西。" +
    "<br><br>" +
    "(B) '拥抱' 意味着愿意和热情地接受或支持。" +
    "<br><br>" +
    "(D) '承认' 意味着承认某事的事实或重要性。"
    },
    {
        id: 8,
        question: "The activists __________ with the government to take immediate action on climate change because of the urgent need to reduce emissions and protect the environment.",
        chinese_question: "活动家 __________ 政府立即采取行动应对气候变化，因为急需减少排放和保护环境。",
        answers: [
            { option: "A", answer: "refused", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "pleaded", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
            { option: "C", answer: "denied", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pleaded' means to make an emotional appeal." +
            "<br><br>" +
            "(A) 'refused' means to indicate or show that one is not willing to do something." +
            "<br><br>" +
            "(C) 'denied' means to state that one refuses to admit the truth or existence of something." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(B) '请求' 意味着提出情感上的请求。" +
            "<br><br>" +
            "(A) '拒绝' 意味着表示或表明不愿意做某事。" +
            "<br><br>" +
            "(C) '否认' 意味着声明拒绝承认某事的真实性或存在。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认；有意无视。"
    },
    {
        id: 9,
    question: "Facing overwhelming odds, the general had no choice but to __________ and avoid further casualties by negotiating a ceasefire and withdrawing his troops.",
    chinese_question: "面对压倒性的困难，将军别无选择，只能 __________ 以避免进一步的伤亡，通过谈判停火和撤退他的部队。",
    answers: [
    { option: "A", answer: "capitulate", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
    { option: "B", answer: "fight", chinese_answer: "战斗", chinese_romanization: "zhàndòu" },
    { option: "C", answer: "conquer", chinese_answer: "征服", chinese_romanization: "zhēngfú" },
    { option: "D", answer: "dominate", chinese_answer: "支配", chinese_romanization: "zhīpèi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'capitulate' means to cease to resist an opponent or an unwelcome demand; surrender." +
        "<br><br>" +
        "(B) 'fight' means to take part in a violent struggle involving the exchange of physical blows or the use of weapons." +
        "<br><br>" +
        "(C) 'conquer' means to overcome and take control of (a place or people) by use of military force." +
        "<br><br>" +
        "(D) 'dominate' means to have a commanding influence on; exercise control over.",
    chinese_explanation: "(A) '投降' 意味着停止抵抗对手或不受欢迎的要求；投降。" +
        "<br><br>" +
        "(B) '战斗' 意味着参与一场涉及交换拳头或使用武器的暴力斗争。" +
        "<br><br>" +
        "(C) '征服' 意味着通过军事力量克服并控制（一个地方或人）。" +
        "<br><br>" +
        "(D) '支配' 意味着对某事有指挥影响力；行使控制权。"
    },
    {
        id: 10,
    question: "The professor aimed to __________ the principles of mathematics for his students by clearly defining terms and providing practical examples, making them easy to understand and apply.",
    chinese_question: "教授旨在通过明确定义术语和提供实际例子为学生 __________ 数学原理，使其易于理解和应用。",
    answers: [
    { option: "A", answer: "axiomatize", chinese_answer: "公理化", chinese_romanization: "gōnglǐ huà" },
    { option: "B", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
    { option: "C", answer: "mystify", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
    { option: "D", answer: "obfuscate", chinese_answer: "使模糊", chinese_romanization: "shǐ móhū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'axiomatize' means to establish a system of principles or rules as axioms." +
        "<br><br>" +
        "(B) 'complicate' means to make something more difficult or complex." +
        "<br><br>" +
        "(C) 'mystify' means to utterly bewilder or perplex." +
        "<br><br>" +
        "(D) 'obfuscate' means to render obscure, unclear, or unintelligible.",
    chinese_explanation: "(A) '公理化' 意味着将一系列原则或规则确立为公理。" +
        "<br><br>" +
        "(B) '复杂化' 意味着使某事变得更困难或更复杂。" +
        "<br><br>" +
        "(C) '使困惑' 意味着完全迷惑或困惑。" +
        "<br><br>" +
        "(D) '使模糊' 意味着使变得模糊、不清楚或难以理解。"
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
