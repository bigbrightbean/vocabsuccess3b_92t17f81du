// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The student noticed that the old textbooks had __________ due to years of neglect, causing the pages to detach from the binding.",
        chinese_question: "学生注意到，由于多年的疏忽，旧课本已经 __________，导致书页从装订处脱落。",
        answers: [
            { option: "A", answer: "adhered", chinese_answer: "粘附", chinese_romanization: "zhānfù" },
            { option: "B", answer: "grown", chinese_answer: "生长", chinese_romanization: "shēngzhǎng" },
            { option: "C", answer: "abscised", chinese_answer: "脱落", chinese_romanization: "tuōluò" },
            { option: "D", answer: "flourished", chinese_answer: "繁茂", chinese_romanization: "fánmào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abscised' means to separate, detach, or shed, typically as part of a natural process." +
            "<br><br>" +
            "(A) 'adhered' means to stick fast to a surface or substance." +
            "<br><br>" +
            "(B) 'grown' means to undergo natural development by increasing in size and changing physically." +
            "<br><br>" +
            "(D) 'flourished' means to grow or develop in a healthy or vigorous way.",
        chinese_explanation: "(C) '脱落' 意味着分离、分离或脱落，通常是作为自然过程的一部分。" +
            "<br><br>" +
            "(A) '粘附' 意味着紧贴在表面或物质上。" +
            "<br><br>" +
            "(B) '生长' 意味着通过增加体积和物理变化进行自然发展。" +
            "<br><br>" +
            "(D) '繁茂' 意味着以健康或旺盛的方式生长或发展。"
    },
    {
        id: 2,
        question: "To resolve the conflict and improve overall efficiency, the company decided to __________ control of the smaller division, transferring its management to another entity.",
        chinese_question: "为了解决冲突并提高整体效率，公司决定 __________ 小部门的控制权，将其管理转移给另一个实体。",
        answers: [
        { option: "A", answer: "cede", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "seize", chinese_answer: "抓住", chinese_romanization: "zhuāzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cede' means to give up power or territory." +
            "<br><br>" +
            "(B) 'seize' means to take hold of suddenly and forcibly." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of.",
        chinese_explanation: "(A) '放弃' 意味着放弃权力或领土。" +
            "<br><br>" +
            "(B) '抓住' 意味着突然和强行抓住。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '增强' 意味着加强、增加或进一步改善质量、价值或程度。"
    },
    {
        id: 3,
    question: "The activist __________ passionately against the new policy during a public speech, arguing it would harm the environment and undermine years of conservation efforts.",
    chinese_question: "活动家在公开演讲中 __________ 强烈反对新政策，认为它会对环境造成危害，并破坏多年的保护工作。",
    answers: [
        { option: "A", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "accepted", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "D", answer: "inveighed", chinese_answer: "抨击", chinese_romanization: "pēngjí" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'inveighed' means to speak or write about something with great hostility." +
        "<br><br>" +
        "(A) 'praised' means to express warm approval or admiration of." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'accepted' means to consent to receive or undertake something offered.",
    chinese_explanation: "(D) '抨击' 意味着以强烈的敌意谈论或写作某事。" +
        "<br><br>" +
        "(A) '赞扬' 意味着表达热烈的认可或钦佩。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '接受' 意味着同意接受或承担所提供的东西。"
    },
    {
        id: 4,
        question: "She was always quick to __________ whenever things didn’t go her way, constantly criticizing minor issues and making teamwork difficult.",
        chinese_question: "每当事情不如她意时，她总是很快地 __________，不断地批评小问题，使团队合作变得困难。",
        answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "carp", chinese_answer: "吹毛求疵", chinese_romanization: "chuīmáoqiúcī" },
        { option: "C", answer: "applaud", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
        { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carp' means to complain or find fault continually about trivial matters." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'applaud' means to show approval or praise by clapping." +
            "<br><br>" +
            "(D) 'assist' means to help someone.",
        chinese_explanation: "(B) '吹毛求疵' 意味着对琐事不断地抱怨或挑剔。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '鼓掌' 意味着通过拍手来表示赞同或赞美。" +
            "<br><br>" +
            "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 5,
        question: "The president's speech was meant to __________ public concern about the new policy, aiming to calm fears and provide reassurance.",
        chinese_question: "总统的演讲旨在 __________ 公众对新政策的担忧，目的是平息恐惧并提供保证。",
        answers: [
        { option: "A", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'assuage' means to make an unpleasant feeling less intense." +
            "<br><br>" +
            "(B) 'intensify' means to become or make more intense." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'worsen' means to make or become worse.",
        chinese_explanation: "(A) '缓解' 意味着使不愉快的感觉变得不那么强烈。" +
            "<br><br>" +
            "(B) '加剧' 意味着变得或使变得更强烈。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '恶化' 意味着使或变得更糟。"
    },
    {
        id: 6,
    question: "She had to __________ on her wits to solve the problem quickly, using her sharp intellect and quick thinking to find a solution.",
    chinese_question: "她不得不 __________ 她的智慧迅速解决问题，运用她敏锐的智慧和快速的思维找到解决方案。",
    answers: [
        { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "rely", chinese_answer: "依赖", chinese_romanization: "yīlài" },
        { option: "C", answer: "distract", chinese_answer: "分散注意力", chinese_romanization: "fēnsàn zhùyìlì" },
        { option: "D", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rely' means to depend on with full trust or confidence." +
        "<br><br>" +
        "(A) 'abandon' means to leave someone or something behind." +
        "<br><br>" +
        "(C) 'distract' means to prevent someone from giving full attention to something." +
        "<br><br>" +
        "(D) 'avoid' means to keep away from or stop oneself from doing something.",
    chinese_explanation: "(B) '依赖' 意味着完全信任或依赖。" +
        "<br><br>" +
        "(A) '放弃' 意味着离开某人或某物。" +
        "<br><br>" +
        "(C) '分散注意力' 意味着阻止某人全神贯注于某事。" +
        "<br><br>" +
        "(D) '避开' 意味着远离某事或阻止自己做某事。"
    },
    {
        id: 7,
        question: "The actor was able to __________ his voice to match the different characters he played, adjusting his pitch, tone, and accent to suit each role.",
        chinese_question: "演员能够 __________ 他的声音以配合他扮演的不同角色，调整音高、音调和口音以适应每个角色。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "inflect", chinese_answer: "改变", chinese_romanization: "gǎibiàn" },
            { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inflect' means to change the pitch or tone of the voice." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'support' means to give assistance to." +
            "<br><br>" +
            "(D) 'assist' means to help someone.",
        chinese_explanation: "(C) '改变' 意味着改变声音的音高或音调。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 8,
        question: "The various political factions decided to __________ into a single party to increase their influence, uniting their efforts and resources for a common goal.",
        chinese_question: "各个政治派系决定 __________ 成一个政党，以增加他们的影响力，联合他们的努力和资源以实现共同的目标。",
        answers: [
                { option: "A", answer: "coalesce", chinese_answer: "合并", chinese_romanization: "hébìng" },
                { option: "B", answer: "divide", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xiāoruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coalesce' means to come together to form one mass or whole." +
            "<br><br>" +
            "(B) 'divide' means to separate or be separated into parts." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'weaken' means to make or become less strong.",
        chinese_explanation: "(A) '合并' 意味着聚集在一起形成一个整体。" +
            "<br><br>" +
            "(B) '分裂' 意味着分离或被分离成部分。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '削弱' 意味着使变得不那么强。"
    },
    {
        id: 9,
    question: "He was __________ by a stranger who demanded money late at night, catching him off guard and leaving him frightened.",
    chinese_question: "他深夜被一个陌生人 __________ ，对方要求钱，这让他措手不及，感到害怕。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
        { option: "C", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "D", answer: "accosted", chinese_answer: "搭讪", chinese_romanization: "dāshàn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'accosted' means to approach and address someone boldly or aggressively." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(B) 'welcomed' means to greet someone in a friendly way." +
        "<br><br>" +
        "(C) 'assisted' means to help someone.",
    chinese_explanation: "(D) '搭讪' 意味着大胆或攻击性地接近并与某人交谈。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(B) '欢迎' 意味着友好地迎接某人。" +
        "<br><br>" +
        "(C) '帮助' 意味着帮助某人。"
    },
    {
        id: 10,
    question: "The philosopher would __________ on ethical dilemmas for hours in his mind, seeking deeper understanding and examining all possible angles.",
    chinese_question: "哲学家会在心里 __________ 伦理困境数小时，寻求更深的理解，并审视所有可能的角度。",
    answers: [
        { option: "A", answer: "skim", chinese_answer: "略读", chinese_romanization: "lüèdú" },
        { option: "B", answer: "ruminate", chinese_answer: "沉思", chinese_romanization: "chénsī" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "interrupt", chinese_answer: "打断", chinese_romanization: "dǎduàn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ruminate' means to think deeply about something." +
        "<br><br>" +
        "(A) 'skim' means to read or glance through quickly." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'interrupt' means to stop the continuous progress of an activity.",
    chinese_explanation: "(B) '沉思' 意味着深入思考某事。" +
        "<br><br>" +
        "(A) '略读' 意味着快速阅读或浏览。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '打断' 意味着停止某活动的连续进程。"
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
