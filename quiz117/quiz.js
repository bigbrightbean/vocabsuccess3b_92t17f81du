// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The manager decided to __________ the employee for repeated tardiness.",
        chinese_question: "经理决定 __________ 员工多次迟到。",
        answers: [
        { option: "A", answer: "castigate", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'castigate' means to reprimand someone severely." +
            "<br><br>" +
            "(B) 'reward' means to give something to someone in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'promote' means to further the progress of something, especially a cause, venture, or aim; support or actively encourage.",
        chinese_explanation: "(A) '严厉批评' 意味着严厉地斥责某人。" +
            "<br><br>" +
            "(B) '奖励' 意味着因其服务、努力或成就而给予某人某物。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '提升' 意味着推动某事物的发展，尤其是某项事业、冒险或目标；支持或积极鼓励。"
    },
    {
        id: 2,
        question: "The unexpected question from the audience seemed to __________ the speaker for a moment.",
        chinese_question: "观众的意外问题似乎让演讲者 __________ 了一会儿。",
        answers: [
                { option: "A", answer: "discombobulate", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
                { option: "B", answer: "inspire", chinese_answer: "激发", chinese_romanization: "jīfā" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'discombobulate' means to confuse or disconcert; to upset." +
                "<br><br>" +
                "(B) 'inspire' means to fill someone with the urge or ability to do or feel something, especially to do something creative." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '使困惑' 意味着使困惑或不安；使心烦意乱。" +
                "<br><br>" +
                "(B) '激发' 意味着给某人以冲动或能力去做某事，尤其是做一些创造性的事情。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 3,
        question: "The family chose to __________ the remains for a proper burial in the family plot.",
        chinese_question: "家人选择 __________ 遗体，以便在家庭墓地进行正式的安葬。",
        answers: [
                { option: "A", answer: "bury", chinese_answer: "埋葬", chinese_romanization: "mái zàng" },
                { option: "B", answer: "disinter", chinese_answer: "发掘", chinese_romanization: "fā jué" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hū shì" },
                { option: "D", answer: "preserve", chinese_answer: "保存", chinese_romanization: "bǎo cún" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disinter' means to dig up something that has been buried, especially a body." +
                "<br><br>" +
                "(A) 'bury' means to place something in the ground and cover it." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'preserve' means to maintain something in its original or existing state.",
        chinese_explanation: "(B) '发掘' 意味着挖出已经埋葬的东西，尤其是尸体。" +
                "<br><br>" +
                "(A) '埋葬' 意味着将某物放入地下并覆盖。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '保存' 意味着维持某物的原始或现有状态。"
    },
    {
        id: 4,
question: "The student's charm and politeness __________ the teacher into giving him an extension on the assignment.",
chinese_question: "学生的魅力和礼貌 __________ 老师给他延长了作业期限。",
answers: [
        { option: "A", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "B", answer: "inveigled", chinese_answer: "哄骗", chinese_romanization: "hǒngpiàn" },
        { option: "C", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
        { option: "D", answer: "overlooked", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "B",
explanation: "(B) 'inveigled' used figuratively means to persuade someone to do something by means of deception or flattery." +
        "<br><br>" +
        "(A) 'rejected' means to dismiss as inadequate, unacceptable, or faulty." +
        "<br><br>" +
        "(C) 'praised' means to express warm approval or admiration of." +
        "<br><br>" +
        "(D) 'overlooked' means to fail to notice or consider something.",
chinese_explanation: "(B) '哄骗' 在比喻意义上指通过欺骗或奉承来劝说某人做某事。" +
        "<br><br>" +
        "(A) '拒绝' 意味着认为不合格、不接受或有缺陷。" +
        "<br><br>" +
        "(C) '赞扬' 意味着表达热烈的认可或钦佩。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能注意或考虑某事。"
    },
    {
        id: 5,
        question: "His heart __________ when he heard the unsettling news, unsure of what it would mean for his future.",
        chinese_question: "当他听到那个令人不安的消息时，他的心 __________ ，不确定这对他的未来意味着什么。",
        answers: [
            { option: "A", answer: "leaped", chinese_answer: "跳跃", chinese_romanization: "tiàoyuè" },
            { option: "B", answer: "rejoiced", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "C", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "misgave", chinese_answer: "不安", chinese_romanization: "bù'ān" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'misgave' means to have a sense of worry or doubt." +
            "<br><br>" +
            "(A) 'leaped' means to jump or move suddenly." +
            "<br><br>" +
            "(B) 'rejoiced' means to feel or show great joy." +
            "<br><br>" +
            "(C) 'calmed' means to become tranquil and quiet.",
        chinese_explanation: "(D) '不安' 意味着感到担忧或怀疑。" +
            "<br><br>" +
            "(A) '跳跃' 意味着突然跳动或移动。" +
            "<br><br>" +
            "(B) '高兴' 意味着感到或表现出极大的喜悦。" +
            "<br><br>" +
            "(C) '平静' 意味着变得安静和平和。"
    },
    {
        id: 6,
        question: "In an attempt to __________ his angry friend, he apologized sincerely for his mistake.",
        chinese_question: "为了 __________ 他生气的朋友，他真诚地为自己的错误道歉。",
        answers: [
                { option: "A", answer: "conciliate", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
                { option: "D", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conciliate' means to stop someone from being angry or discontented; to placate or pacify." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'insult' means to speak to or treat with disrespect or scornful abuse." +
            "<br><br>" +
            "(D) 'complicate' means to make something more difficult or confusing.",
        chinese_explanation: "(A) '安抚' 意味着使某人不再生气或不满；安抚或平息。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '侮辱' 意味着以不尊重或轻蔑的方式说话或对待。" +
            "<br><br>" +
            "(D) '复杂化' 意味着使某事更加困难或令人困惑。"
    },
    {
        id: 7,
        question: "The letter __________ him to forgive her mistakes and start anew.",
        chinese_question: "信中 __________ 他原谅她的错误，重新开始。",
        answers: [
                { option: "A", answer: "entreated", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "mocked", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'entreated' means to ask someone earnestly or anxiously to do something, used figuratively here." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'mocked' means to tease or laugh at in a scornful or contemptuous manner." +
            "<br><br>" +
            "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '恳求' 意味着诚恳或焦急地请求某人做某事，这里是比喻用法。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '嘲笑' 意味着以轻蔑或蔑视的方式戏弄或嘲笑。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 8,
question: "Despite the harsh criticism, she managed to __________ from responding angrily.",
chinese_question: "尽管受到严厉批评，她还是设法 __________ 不愤怒地回应。",
answers: [
        { option: "A", answer: "retaliate", chinese_answer: "报复", chinese_romanization: "bàofù" },
        { option: "B", answer: "forbear", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "C", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
        { option: "D", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" }
],
correctAnswer: "B",
explanation: "(B) 'forbear' means to refrain from doing something, especially from responding with anger or impatience." +
        "<br><br>" +
        "(A) 'retaliate' means to make an attack or assault in return for a similar attack." +
        "<br><br>" +
        "(C) 'agree' means to have the same opinion about something; concur." +
        "<br><br>" +
        "(D) 'surrender' means to cease resistance to an enemy or opponent and submit to their authority.",
chinese_explanation: "(B) '克制' 意味着避免做某事，尤其是避免愤怒或不耐烦地回应。" +
        "<br><br>" +
        "(A) '报复' 意味着进行报复性的攻击或袭击。" +
        "<br><br>" +
        "(C) '同意' 意味着对某事有相同的意见；一致。" +
        "<br><br>" +
        "(D) '投降' 意味着停止对敌人或对手的抵抗并服从其权威。"
    },
    {
        id: 9,
        question: "During the debate, he began to __________ against the proposed policy, highlighting its flaws passionately.",
        chinese_question: "在辩论中，他开始对提议的政策 __________，激烈地指出其缺陷。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "fulminate", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fulminate' means to express vehement protest." +
            "<br><br>" +
            "(A) 'support' means to bear all or part of the weight of something or to hold up." +
            "<br><br>" +
            "(B) 'accept' means to consent to receive or undertake something offered." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '谴责' 意味着强烈抗议。" +
            "<br><br>" +
            "(A) '支持' 意味着支撑某物的全部或部分重量或支持。" +
            "<br><br>" +
            "(B) '接受' 意味着同意接受或承担提供的东西。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
question: "The novel's climax involves the heroine's decision to __________ herself to save her loved ones.",
chinese_question: "小说的高潮是女主角决定 __________ 自己来拯救她的亲人。",
answers: [
        { option: "A", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "immolate", chinese_answer: "牺牲", chinese_romanization: "xīshēng" },
        { option: "C", answer: "liberate", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
        { option: "D", answer: "escape", chinese_answer: "逃脱", chinese_romanization: "táotuō" }
],
correctAnswer: "B",
explanation: "(B) 'immolate' means to kill or offer as a sacrifice, especially by burning." +
        "<br><br>" +
        "(A) 'abandon' means to give up completely." +
        "<br><br>" +
        "(C) 'liberate' means to set someone free from a situation, especially imprisonment or oppression." +
        "<br><br>" +
        "(D) 'escape' means to break free from confinement or control.",
chinese_explanation: "(B) '牺牲' 意味着杀死或作为祭品奉献，尤其是通过火烧。" +
        "<br><br>" +
        "(A) '放弃' 意味着完全放弃。" +
        "<br><br>" +
        "(C) '解放' 意味着使某人从某种情况中解放出来，特别是监禁或压迫。" +
        "<br><br>" +
        "(D) '逃脱' 意味着摆脱束缚或控制。"
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
