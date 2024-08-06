// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She would often __________ the suggestions of her colleagues by dismissing their ideas without consideration and insisting on her own way, believing she always knew best.",
        chinese_question: "她经常 __________ 她同事的建议，不加考虑地否定他们的想法，坚持自己的方式，认为她自己总是最了解。",
        answers: [
                { option: "A", answer: "contemn", chinese_answer: "蔑视", chinese_romanization: "mièshì" },
                { option: "B", answer: "appreciate", chinese_answer: "感激", chinese_romanization: "gǎnjī" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "follow", chinese_answer: "遵循", chinese_romanization: "zūnxún" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'contemn' means to treat or regard with contempt." +
            "<br><br>" +
            "(B) 'appreciate' means to recognize the full worth of something." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'follow' means to go or come after a person or thing.",
        chinese_explanation: "(A) '蔑视' 意味着以轻蔑的态度对待或看待。" +
            "<br><br>" +
            "(B) '感激' 意味着认识到某物的全部价值。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '遵循' 意味着跟随某人或某物。"
    },
    {
        id: 2,
        question: "The team had to __________ some of their initial ideas and remove unnecessary features to streamline the project.",
        chinese_question: "团队必须 __________ 一些最初的想法，并删除不必要的功能以简化项目。",
        answers: [
                { option: "A", answer: "adopt", chinese_answer: "采用", chinese_romanization: "cǎiyòng" },
                { option: "B", answer: "jettison", chinese_answer: "抛弃", chinese_romanization: "pāoqì" },
                { option: "C", answer: "promote", chinese_answer: "推广", chinese_romanization: "tuīguǎng" },
                { option: "D", answer: "refine", chinese_answer: "精炼", chinese_romanization: "jīngliàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jettison' used figuratively means to discard or get rid of something unnecessary or burdensome." +
            "<br><br>" +
            "(A) 'adopt' means to take up or start to use or follow." +
            "<br><br>" +
            "(C) 'promote' means to advance or raise to a higher position or rank." +
            "<br><br>" +
            "(D) 'refine' means to improve something by making small changes.",
        chinese_explanation: "(B) '抛弃' 在比喻意义上指丢弃或摆脱不必要或累赘的东西。" +
            "<br><br>" +
            "(A) '采用' 意味着开始使用或遵循。" +
            "<br><br>" +
            "(C) '推广' 意味着晋升到更高的位置或级别。" +
            "<br><br>" +
            "(D) '精炼' 意味着通过小的改进来改善某物。"
    },
    {
        id: 3,
        question: "The manager's motivational speech helped to __________ a change in the team's attitude, making them more enthusiastic and collaborative.",
        chinese_question: "经理的鼓舞人心的讲话帮助 __________ 了团队态度的改变，使他们更加热情和合作。",
        answers: [
                { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "B", answer: "catalyze", chinese_answer: "催化", chinese_romanization: "cuīhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'catalyze' means to cause or accelerate a reaction or process." +
            "<br><br>" +
            "(A) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'delay' means to make something late or slow.",
        chinese_explanation: "(B) '催化'一词意味着引起或加速反应或过程。" +
            "<br><br>" +
            "(A) '阻碍' 意味着为某人或某事制造困难，导致延迟或障碍。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '延迟' 意味着使某事变晚或变慢。"
    },
    {
        id: 4,
        question: "The fishermen accidentally __________ a dolphin in their net while trying to catch tuna.",
        chinese_question: "渔民在捕捞金枪鱼时不小心将一只海豚 __________ 在网中。",
        answers: [
                { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
                { option: "B", answer: "enmesh", chinese_answer: "缠住", chinese_romanization: "chánzhù" },
                { option: "C", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" },
                { option: "D", answer: "free", chinese_answer: "解放", chinese_romanization: "jiěfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enmesh' means to catch or entangle in something." +
            "<br><br>" +
            "(A) 'release' means to set free." +
            "<br><br>" +
            "(C) 'exclude' means to keep out or omit." +
            "<br><br>" +
            "(D) 'free' means to release from captivity or confinement.",
        chinese_explanation: "(B) '缠住' 意味着抓住或缠绕在某物中。" +
            "<br><br>" +
            "(A) '释放' 意味着放开。" +
            "<br><br>" +
            "(C) '排除' 意味着排除在外或遗漏。" +
            "<br><br>" +
            "(D) '解放' 意味着从囚禁或限制中解放出来。"
    },
    {
        id: 5,
        question: "The children were happy to __________ themselves in the park on a sunny day by playing games and running around.",
        chinese_question: "孩子们在阳光明媚的日子里很高兴在公园里 __________ 自己，玩游戏和跑来跑去。",
        answers: [
                { option: "A", answer: "disport", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "complain", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "D", answer: "study", chinese_answer: "学习", chinese_romanization: "xuéxí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disport' means to amuse oneself in a lively and energetic way." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'complain' means to express dissatisfaction or annoyance." +
                "<br><br>" +
                "(D) 'study' means to devote time and attention to gaining knowledge.",
        chinese_explanation: "(A) '娱乐' 意味着以生动和充满活力的方式娱乐自己。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '抱怨' 意味着表达不满或烦恼。" +
                "<br><br>" +
                "(D) '学习' 意味着花时间和注意力来获取知识。"
    },
    {
        id: 6,
    question: "After hours of negotiation, tempers began to __________ and everyone became increasingly impatient and irritable.",
    chinese_question: "经过数小时的谈判，脾气开始 __________，每个人都变得越来越不耐烦和易怒。",
    answers: [
            { option: "A", answer: "fray", chinese_answer: "磨损", chinese_romanization: "mósǔn" },
            { option: "B", answer: "cool", chinese_answer: "冷却", chinese_romanization: "lěngquè" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "solidify", chinese_answer: "固化", chinese_romanization: "gùhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fray' means to cause someone to become strained or stressed." +
            "<br><br>" +
            "(B) 'cool' means to make or become less warm or less intense." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'solidify' means to make or become hard or solid.",
    chinese_explanation: "(A) '磨损' 意味着使某人变得紧张或有压力。" +
            "<br><br>" +
            "(B) '冷却' 意味着使某物变得不那么热或不那么强烈。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '固化' 意味着使某物变得坚硬或固体。"
    },
    {
        id: 7,
        question: "The contract will __________ the scope of work to be completed by the contractor, specifying deadlines and deliverables.",
        chinese_question: "合同将 __________ 承包商需要完成的工作范围，并规定截止日期和交付成果。",
        answers: [
            { option: "A", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
            { option: "B", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "C", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "demarcate", chinese_answer: "划定", chinese_romanization: "huàdìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'demarcate' used figuratively means to set the boundaries or limits of something." +
            "<br><br>" +
            "(A) 'blend' means to mix together." +
            "<br><br>" +
            "(B) 'obscure' means to make unclear or difficult to understand." +
            "<br><br>" +
            "(C) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(D) '划定' 在比喻意义上指设置某物的边界或限制。" +
            "<br><br>" +
            "(A) '混合' 意味着混合在一起。" +
            "<br><br>" +
            "(B) '模糊' 意味着使不清楚或难以理解。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 8,
question: "The new policy was __________ by the media, who highlighted every potential flaw.",
chinese_question: "新政策被媒体 __________，他们突出了每一个潜在的缺陷。",
answers: [
        { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "flayed", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "B",
explanation: "(B) 'flayed' used figuratively means to criticize harshly." +
        "<br><br>" +
        "(A) 'praised' means to express warm approval or admiration of." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'supported' means to bear all or part of the weight of something.",
chinese_explanation: "(B) '严厉批评' 在比喻意义上指严厉地批评。" +
        "<br><br>" +
        "(A) '赞美' 意味着表达热烈的认可或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 9,
        question: "She decided to __________ herself in her work to avoid thinking about her troubles.",
        chinese_question: "她决定 __________ 在工作中，以避免思考自己的烦恼。",
        answers: [
                { option: "A", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" },
                { option: "B", answer: "socialize", chinese_answer: "社交", chinese_romanization: "shèjiāo" },
                { option: "C", answer: "interact", chinese_answer: "互动", chinese_romanization: "hùdòng" },
                { option: "D", answer: "publicize", chinese_answer: "宣传", chinese_romanization: "xuānchuán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cloister' means to seclude or shut away, especially in a convent or monastery, used figuratively here." +
            "<br><br>" +
            "(B) 'socialize' means to participate in social activities." +
            "<br><br>" +
            "(C) 'interact' means to communicate or work together." +
            "<br><br>" +
            "(D) 'publicize' means to make something widely known.",
        chinese_explanation: "(A) '隐居' 意味着隔离或关闭，尤其是在修道院中，这里是比喻用法。" +
            "<br><br>" +
            "(B) '社交' 意味着参与社交活动。" +
            "<br><br>" +
            "(C) '互动' 意味着沟通或合作。" +
            "<br><br>" +
            "(D) '宣传' 意味着使某事广为人知。"
    },
    {
        id: 10,
question: "The sudden drop in stock prices might __________ a looming recession.",
chinese_question: "股票价格的突然下跌可能 __________ 迫在眉睫的经济衰退。",
answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "foreshadow", chinese_answer: "预示", chinese_romanization: "yùshì" },
        { option: "C", answer: "improve", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
],
correctAnswer: "B",
explanation: "(B) 'foreshadow' used figuratively means to indicate or hint at a future event." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'improve' means to make or become better." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
chinese_explanation: "(B) '预示' 在比喻意义上指暗示或预示未来的事件。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '改善' 意味着使变得更好。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
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
