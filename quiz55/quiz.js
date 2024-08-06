// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ stance against the policy set him apart from his colleagues.",
        chinese_question: "他对这项政策的 __________ 立场使他与同事们不同。",
        answers: [
            { option: "A", answer: "united", chinese_answer: "团结", chinese_romanization: "tuánjié" },
            { option: "B", answer: "group", chinese_answer: "团体", chinese_romanization: "tuántǐ" },
            { option: "C", answer: "collective", chinese_answer: "集体", chinese_romanization: "jítǐ" },
            { option: "D", answer: "lone", chinese_answer: "独自", chinese_romanization: "dúzì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'lone' means standing alone or being the only one." +
            "<br><br>" +
            "(A) 'united' means joined together." +
            "<br><br>" +
            "(B) 'group' means a number of people or things that are together." +
            "<br><br>" +
            "(C) 'collective' means done by people acting as a group.",
        chinese_explanation: "(D) '独自' 意味着独立或唯一的一个。" +
            "<br><br>" +
            "(A) '团结' 意味着联合在一起。" +
            "<br><br>" +
            "(B) '团体' 意味着一群人在一起。" +
            "<br><br>" +
            "(C) '集体' 意味着由一群人一起做的。"
    },
    {
        id: 2,
        question: "Their __________ conversation about the latest fashion trends left me feeling unfulfilled and uninterested.",
        chinese_question: "他们关于最新时尚趋势的 __________ 谈话让我感到不满足和不感兴趣。",
        answers: [
            { option: "A", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "B", answer: "engaging", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "C", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
            { option: "D", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'shallow' means not exhibiting, requiring, or capable of serious thought." +
            "<br><br>" +
            "(A) 'profound' means very great or intense; having or showing great knowledge or insight." +
            "<br><br>" +
            "(B) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(D) 'meaningful' means having a serious, important, or useful quality or purpose.",
        chinese_explanation: "(C) '浅薄的' 意味着没有表现出、要求或能够进行认真思考。" +
            "<br><br>" +
            "(A) '深刻的' 意味着非常大的或强烈的；具有或表现出伟大的知识或见解。" +
            "<br><br>" +
            "(B) '迷人的' 意味着迷人和有吸引力的。" +
            "<br><br>" +
            "(D) '有意义的' 意味着具有严肃、重要或有用的质量或目的。"
    },
    {
        id: 3,
        question: "He was __________ by the sudden change in company policy.",
        chinese_question: "公司政策的突然变化让他感到__________。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "befuddled", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
            { option: "C", answer: "understanding", chinese_answer: "理解的", chinese_romanization: "lǐjiě de" },
            { option: "D", answer: "knowledgeable", chinese_answer: "知识渊博的", chinese_romanization: "zhīshí yuānbó de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'befuddled' means unable to think clearly; confused. Figuratively, it can mean being perplexed by unexpected events or changes." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'understanding' means sympathetically aware of other people's feelings; tolerant and forgiving." +
            "<br><br>" +
            "(D) 'knowledgeable' means intelligent and well informed.",
        chinese_explanation: "(B) '困惑的' 一词意味着无法清晰思考；困惑的。比喻地，它可以表示因意外事件或变化而感到困惑。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(C) '理解的' 意味着同情地意识到他人的感受；宽容和原谅的。" +
            "<br><br>" +
            "(D) '知识渊博的' 意味着聪明且知识渊博的。"
    },
    {
        id: 4,
        question: "His __________ support during difficult times made all the difference for the struggling team.",
        chinese_question: "在困难时期，他的 __________ 支持对挣扎中的团队产生了巨大的影响。",
        answers: [
            { option: "A", answer: "fickle", chinese_answer: "善变的", chinese_romanization: "shànbiàn de" },
            { option: "B", answer: "changing", chinese_answer: "变化的", chinese_romanization: "biànhuà de" },
            { option: "C", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "D", answer: "unwavering", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unwavering' means steady or resolute; not wavering." +
            "<br><br>" +
            "(A) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
            "<br><br>" +
            "(B) 'changing' means making or becoming different." +
            "<br><br>" +
            "(C) 'unreliable' means not able to be relied upon.",
        chinese_explanation: "(D) '坚定的' 意味着稳固或坚定；不动摇的。" +
            "<br><br>" +
            "(A) '善变的' 意味着经常变化的，尤其是指一个人的忠诚或情感的。" +
            "<br><br>" +
            "(B) '变化的' 意味着使或变得不同的。" +
            "<br><br>" +
            "(C) '不可靠的' 意味着不能依赖的。"
    },
    {
        id: 5,
        question: "His __________ reaction to the news showed he couldn't believe what he was hearing.",
        chinese_question: "他对消息的__________反应表明他无法相信自己听到的。",
        answers: [
            { option: "A", answer: "believing", chinese_answer: "相信的", chinese_romanization: "xiāngxìn de" },
            { option: "B", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "C", answer: "incredulous", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "D", answer: "convinced", chinese_answer: "确信的", chinese_romanization: "quèxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incredulous' means unwilling or unable to believe something. Figuratively, it can mean being very surprised or skeptical." + 
            "<br><br>" +
            "(A) 'believing' means accepting that something is true, especially without proof." +
            "<br><br>" +
            "(B) 'trusting' means showing or tending to have a belief in a person's honesty or sincerity; not suspicious." +
            "<br><br>" +
            "(D) 'convinced' means completely certain about something.",
        chinese_explanation: "(C) '怀疑的'一词意味着不愿意或不能相信某事的。比喻地，它可以表示非常惊讶或怀疑的。" + 
            "<br><br>" +
            "(A) '相信的' 意味着接受某事是真实的，尤其是没有证据。" +
            "<br><br>" +
            "(B) '信任的' 意味着表现出或倾向于相信一个人的诚实或真诚；不怀疑的。" +
            "<br><br>" +
            "(D) '确信的' 意味着完全确定某事的。"
    },
    {
        id: 6,
        question: "Her __________ approach to her studies ensured that she consistently received top grades and praise from her professors.",
        chinese_question: "她 __________ 的学习方法确保了她始终获得优异的成绩，并赢得教授的赞扬。",
        answers: [
            { option: "A", answer: "conscientious", chinese_answer: "认真负责的", chinese_romanization: "rènzhēn fùzé de" },
            { option: "B", answer: "negligent", chinese_answer: "玩忽职守的", chinese_romanization: "wánhū zhíshǒu de" },
            { option: "C", answer: "lackadaisical", chinese_answer: "敷衍了事的", chinese_romanization: "fūyǎn liǎoshì de" },
            { option: "D", answer: "perfunctory", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conscientious' means wishing to do one's work or duty well and thoroughly." + 
            "<br><br>" +
            "(B) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(C) 'lackadaisical' means lacking enthusiasm and determination; carelessly lazy." +
            "<br><br>" +
            "(D) 'perfunctory' means (of an action or gesture) carried out with a minimum of effort or reflection.",
        chinese_explanation: "(A) '认真负责的' 意味着希望把工作或职责做好并彻底完成的。" + 
            "<br><br>" +
            "(B) '玩忽职守的' 意味着没有正确履行职责。" +
            "<br><br>" +
            "(C) '敷衍了事的' 意味着缺乏热情和决心的；漫不经心的。" +
            "<br><br>" +
            "(D) '草率的' 意味着（动作或手势）以最少的努力或思考完成的。"
    },
    {
        id: 7,
        question: "His __________ temper made it difficult for him to maintain friendships, as he would get angry over the smallest things.",
        chinese_question: "他的__________脾气使他难以维持友谊，因为他会因小事而生气。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" },
            { option: "B", answer: "cheerful", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "C", answer: "irascible", chinese_answer: "易怒", chinese_romanization: "yìnù" },
            { option: "D", answer: "patient", chinese_answer: "耐心", chinese_romanization: "nàixīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irascible' means having or showing a tendency to be easily angered." +
                "<br><br>" +
                "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
                "<br><br>" +
                "(B) 'cheerful' means noticeably happy and optimistic." +
                "<br><br>" +
                "(D) 'patient' means able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious.",
        chinese_explanation: "(C) '易怒' 一词意味着有或表现出容易生气的倾向。" +
                "<br><br>" +
                "(A) '冷静' 意味着不表现出或感觉紧张、愤怒或其他强烈情绪。" +
                "<br><br>" +
                "(B) '愉快' 意味着明显地快乐和乐观。" +
                "<br><br>" +
                "(D) '耐心' 意味着能够接受或容忍延误、问题或痛苦而不变得恼火或焦虑。"
    },
    {
        id: 8,
        question: "Their __________ commitment to charity work has made a significant impact on the community.",
        chinese_question: "他们对慈善工作的 __________ 承诺对社区产生了重大影响。",
        answers: [
            { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "C", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enduring' means lasting over a long period of time; durable." +
            "<br><br>" +
            "(A) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(B) '持久的' 意味着持续很长时间的；耐用的。" +
            "<br><br>" +
            "(A) '短暂的' 意味着持续时间非常短。" +
            "<br><br>" +
            "(C) '暂时的' 意味着只持续有限的时间；非永久的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上。"
    },
    {
        id: 9,
        question: "Her __________ gesture of helping a stranger in need showed her kindness and compassion towards people.",
        chinese_question: "她 __________ 地帮助需要帮助的陌生人的举动显示了她对人的善良和同情心。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "B", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐxīn de" },
            { option: "D", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'empathetic' means showing an ability to understand and share the feelings of others." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'critical' means expressing adverse or disapproving comments or judgments.",
        chinese_explanation: "(C) '有同理心的' 意味着表现出理解和分享他人感受的能力。" +
            "<br><br>" +
            "(A) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '批评的' 意味着表达不赞成的或不满的评论或判断。"
    },
    {
        id: 10,
        question: "The __________ solution provided immediate relief but wasn’t a long-term fix.",
        chinese_question: "这个 __________ 的解决方案提供了即时的缓解，但不是长期的解决办法。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
            { option: "B", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
            { option: "C", answer: "durable", chinese_answer: "耐用", chinese_romanization: "nàiyòng" },
            { option: "D", answer: "lasting", chinese_answer: "持久", chinese_romanization: "chíjiǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'temporary' means lasting for only a limited period of time." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last indefinitely." +
            "<br><br>" +
            "(C) 'durable' means able to withstand wear, pressure, or damage." +
            "<br><br>" +
            "(D) 'lasting' means enduring over a long period of time.",
        chinese_explanation: "(B) '暂时' 意味着只持续一段有限的时间。" +
            "<br><br>" +
            "(A) '永久' 意味着持久或打算无限期持续。" +
            "<br><br>" +
            "(C) '耐用' 意味着能够承受磨损、压力或损害。" +
            "<br><br>" +
            "(D) '持久' 意味着能够在长时间内持续。"
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
