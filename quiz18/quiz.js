// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ look made it hard to believe she could be involved in the scandal.",
        chinese_question: "她 __________ 的表情让人难以相信她会卷入丑闻。",
        answers: [
            { option: "A", answer: "guilty", chinese_answer: "有罪", chinese_romanization: "yǒuzuì" },
            { option: "B", answer: "mischievous", chinese_answer: "调皮", chinese_romanization: "tiáopí" },
            { option: "C", answer: "innocent", chinese_answer: "无辜", chinese_romanization: "wúgū" },
            { option: "D", answer: "deceptive", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'innocent' means free from moral wrong; not corrupted." + 
            "<br><br>" +
            "(A) 'guilty' means responsible for a specified wrongdoing." +
            "<br><br>" +
            "(B) 'mischievous' means causing or showing a fondness for causing trouble in a playful way." +
            "<br><br>" +
            "(D) 'deceptive' means giving an appearance or impression different from the true one; misleading.",
        chinese_explanation: "(C) '无辜' 意味着没有道德错误；不腐败。" + 
            "<br><br>" +
            "(A) '有罪' 意味着对指定的错误行为负责。" +
            "<br><br>" +
            "(B) '调皮' 意味着喜欢惹麻烦的顽皮方式。" +
            "<br><br>" +
            "(D) '欺骗' 意味着呈现与真实情况不同的外观或印象；误导。"
    },
    {
        id: 2,
        question: "His __________ thinking allowed him to solve the problem in an innovative way.",
        chinese_question: "他 __________ 的思维方式使他能够以创新的方式解决问题。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" },
            { option: "B", answer: "rigid", chinese_answer: "僵硬", chinese_romanization: "jiāngyìng" },
            { option: "C", answer: "closed", chinese_answer: "封闭", chinese_romanization: "fēngbì" },
            { option: "D", answer: "narrow", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'flexible' means able to be easily modified to respond to altered circumstances or conditions." +
            "<br><br>" +
            "(B) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(C) 'closed' means not open." +
            "<br><br>" +
            "(D) 'narrow' means limited in extent, amount, or scope.",
        chinese_explanation: "(A) '灵活' 意味着能够轻松地修改以应对变化的情况或条件。" +
            "<br><br>" +
            "(B) '僵硬' 意味着无法弯曲或被迫变形；不灵活。" +
            "<br><br>" +
            "(C) '封闭' 意味着不开放。" +
            "<br><br>" +
            "(D) '狭窄' 意味着在范围、数量或范围上受到限制。"
    },
    {
        id: 3,
        question: "Solving the environmental crisis is a __________ challenge that requires global cooperation.",
        chinese_question: "解决环境危机是一项 __________ 的挑战，需要全球合作。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "C", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "D", answer: "mammoth", chinese_answer: "巨大", chinese_romanization: "jùdà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mammoth' means huge or enormous." + 
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(D) '巨大' 意味着庞大或巨大的。" + 
            "<br><br>" +
            "(A) '次要' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(B) '琐碎' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(C) '简单' 意味着容易理解或完成；没有什么困难。"
    },
    {
        id: 4,
        question: "The company's __________ approach to budgeting helped it survive during the economic downturn.",
        chinese_question: "公司在预算上的 __________ 方法帮助它在经济低迷时期存活下来。",
        answers: [
            { option: "A", answer: "lavish", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
            { option: "B", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "C", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "D", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(A) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(C) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(D) 'extravagant' means lacking restraint in spending money or using resources.",
        chinese_explanation: "(B) '节俭的' 意味着对金钱或食物方面节约或经济的。" +
            "<br><br>" +
            "(A) '豪华的' 意味着极其丰富、精美或奢华的。" +
            "<br><br>" +
            "(C) '鲁莽的' 意味着在做某事时不考虑或不在乎后果的。" +
            "<br><br>" +
            "(D) '奢侈的' 意味着在花钱或使用资源方面缺乏约束的。"
    },
    {
        id: 5,
    question: "The manager's __________ criticism left the employee feeling demoralized and upset.",
    chinese_question: "经理的__________批评让员工感到士气低落和沮丧。",
    answers: [
        { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "B", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
        { option: "C", answer: "severe", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
        { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'severe' means (of something bad or undesirable) very great; intense. Figuratively, it can mean being very harsh and strict." +
        "<br><br>" +
        "(A) 'mild' means not severe, serious, or harsh." +
        "<br><br>" +
        "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
        "<br><br>" +
        "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
    chinese_explanation: "(C) '严厉的'一词意味着（某事坏的或不受欢迎的）非常大的；强烈的。比喻地，它可以表示非常苛刻和严格的。" +
        "<br><br>" +
        "(A) '温和的' 意味着不严重、严重或严厉的。" +
        "<br><br>" +
        "(B) '温柔的' 意味着具有或表现出温和、善良或温柔的性格。" +
        "<br><br>" +
        "(D) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力。"
    },
    {
        id: 6,
        question: "The recovery of the patient was nothing short of __________, as he overcame a life-threatening illness against all odds.",
        chinese_question: "病人的恢复堪称 __________，他战胜了所有困难，从危及生命的疾病中康复。",
        answers: [
                { option: "A", answer: "miraculous", chinese_answer: "奇迹般的", chinese_romanization: "qíjì bān de" },
                { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
                { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
                { option: "D", answer: "predictable", chinese_answer: "可预见的", chinese_romanization: "kě yùjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'miraculous' means occurring through divine or supernatural intervention, or manifesting such power." + 
            "<br><br>" + 
            "(B) 'ordinary' means with no special or distinctive features; normal." + 
            "<br><br>" + 
            "(C) 'mundane' means lacking interest or excitement; dull." + 
            "<br><br>" + 
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(A) '奇迹般的' 意味着通过神圣或超自然干预发生的，或表现出这种力量的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
            "<br><br>" +
            "(D) '可预见的' 意味着能够预测的."
    },
    {
        id: 7,
        question: "Her __________ silence after the argument was more telling than any words she could have spoken.",
        chinese_question: "争论后的 __________ 沉默比她可能说出的任何话都更有说服力。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "sullen", chinese_answer: "闷闷不乐的", chinese_romanization: "mènmènbùlè de" },
            { option: "C", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "D", answer: "animated", chinese_answer: "生气勃勃的", chinese_romanization: "shēngqìbóbó de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sullen' means bad-tempered and sulky; gloomy." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'lively' means full of life and energy." +
            "<br><br>" +
            "(D) 'animated' means full of life or excitement.",
        chinese_explanation: "(B) '闷闷不乐的' 意味着脾气暴躁和阴郁的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着明显感到高兴和乐观的。" +
            "<br><br>" +
            "(C) '活泼的' 意味着充满生命和能量的。" +
            "<br><br>" +
            "(D) '生气勃勃的' 意味着充满生命或兴奋的."
    },
    {
        id: 8,
        question: "Her __________ enthusiasm for new projects often faded after a few weeks.",
        chinese_question: "她对新项目的 __________ 热情通常在几周后就会消退。",
        answers: [
            { option: "A", answer: "lasting", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "B", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" },
            { option: "C", answer: "unwavering", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "D", answer: "perishable", chinese_answer: "易消退的", chinese_romanization: "yì xiāotuì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'perishable' means likely to decay or go bad quickly." +
            "<br><br>" +
            "(A) 'lasting' means enduring or existing for a long time." +
            "<br><br>" +
            "(B) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(C) 'unwavering' means steady or resolute; not wavering.",
        chinese_explanation: "(D) '易消退的' 意味着容易腐烂或很快变质。" +
            "<br><br>" +
            "(A) '持久的' 意味着持续或存在很长时间的。" +
            "<br><br>" +
            "(B) '持续的' 意味着在一段时间内连续发生的。" +
            "<br><br>" +
            "(C) '坚定的' 意味着稳固的或坚定的；不动摇的."
    },
    {
        id: 9,
        question: "She felt __________ after hearing the terrible news, unable to find comfort or hope.",
        chinese_question: "听到这个可怕的消息后，她感到 __________，无法找到安慰或希望。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
            { option: "C", answer: "wretched", chinese_answer: "悲惨的", chinese_romanization: "bēicǎn de" },
            { option: "D", answer: "ecstatic", chinese_answer: "狂喜的", chinese_romanization: "kuángxǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wretched' means in a very unhappy or unfortunate state." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(D) 'ecstatic' means feeling or expressing overwhelming happiness or joyful excitement.",
        chinese_explanation: "(C) '悲惨的' 意味着处于非常不快乐或不幸的状态。" +
            "<br><br>" +
            "(A) '快乐的' 意味着感到、表达或引起极大的快乐和幸福。" +
            "<br><br>" +
            "(B) '满足的' 意味着处于平静的幸福状态。" +
            "<br><br>" +
            "(D) '狂喜的' 意味着感到或表现出极大的幸福或喜悦。"
    },
    {
        id: 10,
        question: "Her __________ nature earned her the respect of her peers, as she was always diligent and hardworking in every task.",
        chinese_question: "她 __________ 的性格赢得了同龄人的尊重，因为她在每一项任务中总是勤奋努力。",
        answers: [
            { option: "A", answer: "industrious", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "B", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "C", answer: "idle", chinese_answer: "懒散的", chinese_romanization: "lǎnsǎn de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'industrious' means diligent and hardworking." + 
            "<br><br>" +
            "(B) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(C) 'idle' means avoiding work; lazy." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(A) '勤奋的' 意味着勤勉和努力工作的。" + 
            "<br><br>" +
            "(B) '懒惰的' 意味着不愿意工作或使用能量的。" +
            "<br><br>" +
            "(C) '懒散的' 意味着避免工作的；懒惰的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着未能妥善照顾某事的。"
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
