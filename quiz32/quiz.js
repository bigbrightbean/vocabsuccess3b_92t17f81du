// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the economic downturn, the CEO remained __________ about the company's future, confident that their innovative strategies would lead to success.",
        chinese_question: "尽管经济低迷，CEO 对公司的未来仍然 __________，相信他们的创新策略会带来成功。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "B", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "buoyant", chinese_answer: "乐观的", chinese_romanization: "lèguān de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'buoyant' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(D) '乐观的' 意味着快乐和乐观的。" +
            "<br><br>" +
            "(A) '悲观的' 意味着倾向于看到事情的最坏方面或相信最坏的事情会发生。" +
            "<br><br>" +
            "(B) '怀疑的' 意味着对某事感到不确定的。" +
            "<br><br>" +
            "(C) '不确定的' 意味着不能依赖的；不确定的。"
    },
    {
        id: 2,
        question: "The company's financial reports were so __________ that investors had trouble understanding the true financial health.",
        chinese_question: "公司的财务报告如此 __________，以至于投资者很难了解真实的财务状况。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "opaque", chinese_answer: "不透明的", chinese_romanization: "bù tòumíng de" },
            { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéliǎodāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opaque' means not transparent; hard to understand or explain." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to understand or do.",
        chinese_explanation: "(C) '不透明的' 意味着不透明的；难以理解或解释的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '透明的' 意味着容易感知或检测的。" +
            "<br><br>" +
            "(D) '直截了当的' 意味着不复杂且易于理解或完成的."
    },
    {
        id: 3,
        question: "Despite the chaos around him, he remained __________, calmly addressing each problem with unshakable composure.",
        chinese_question: "尽管周围一片混乱，他依然 __________，冷静地解决每一个问题，表现出坚定的沉着。",
        answers: [
            { option: "A", answer: "phlegmatic", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "B", answer: "hysterical", chinese_answer: "歇斯底里的", chinese_romanization: "xiēsīdǐlǐ de" },
            { option: "C", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "D", answer: "agitated", chinese_answer: "激动的", chinese_romanization: "jīdòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'phlegmatic' means having an unemotional and stolidly calm disposition. Figuratively, it can mean maintaining calmness under pressure." +
            "<br><br>" +
            "(B) 'hysterical' means deriving from or affected by uncontrolled extreme emotion." +
            "<br><br>" +
            "(C) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(D) 'agitated' means feeling or appearing troubled or nervous.",
        chinese_explanation: "(A) '冷静的' 意味着有一种不动感情和冷静的性格。比喻地，它可以表示在压力下保持冷静。" +
            "<br><br>" +
            "(B) '歇斯底里的' 意味着受极端情绪控制的或受极端情绪影响的。" +
            "<br><br>" +
            "(C) '焦虑的' 意味着经历担忧、不安或紧张的。" +
            "<br><br>" +
            "(D) '激动的' 意味着感到或显得烦恼或紧张的。"
    },
    {
        id: 4,
        question: "The __________ book was praised by critics and readers alike and inspired a generation of activists.",
        chinese_question: "这本 __________ 书受到评论家和读者的一致好评，并启发了一代活动家。",
        answers: [
            { option: "A", answer: "forgotten", chinese_answer: "被遗忘", chinese_romanization: "bèi yíwàng" },
            { option: "B", answer: "influential", chinese_answer: "有影响力", chinese_romanization: "yǒu yǐngxiǎng lì" },
            { option: "C", answer: "unpopular", chinese_answer: "不受欢迎", chinese_romanization: "bù shòu huānyíng" },
            { option: "D", answer: "obscure", chinese_answer: "默默无闻", chinese_romanization: "mòmò wú wén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'influential' means having the power to have an effect on people or events." +
            "<br><br>" +
            "(A) 'forgotten' means no longer remembered." +
            "<br><br>" +
            "(C) 'unpopular' means not liked or popular." +
            "<br><br>" +
            "(D) 'obscure' means not well-known.",
        chinese_explanation: "(B) '有影响力' 意味着有能力对人或事件产生影响。" +
            "<br><br>" +
            "(A) '被遗忘' 意味着不再被记得。" +
            "<br><br>" +
            "(C) '不受欢迎' 意味着不受喜爱或欢迎。" +
            "<br><br>" +
            "(D) '默默无闻' 意味着不为人所知。"
    },
    {
        id: 5,
        question: "The __________ child asked endless questions about the world around her, eager to learn and understand everything.",
        chinese_question: "这个 __________ 的孩子对周围的世界问了无数的问题，渴望学习和理解一切。",
        answers: [
            { option: "A", answer: "inquisitive", chinese_answer: "好奇的", chinese_romanization: "hàoqí de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wúdòng yú zhōng de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inquisitive' means having or showing an interest in learning things; curious." + 
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(A) '好奇的' 意味着有兴趣学习事物的；好奇的。" + 
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '无动于衷的' 意味着没有兴趣、热情或关心的。" +
            "<br><br>" +
            "(D) '不感兴趣的' 意味着对某事或某人不感兴趣或不关心的。"
    },
    {
        id: 6,
        question: "By motivating his team and implementing innovative strategies, his __________ leadership guided the team to unprecedented success and set new benchmarks.",
        chinese_question: "通过激励团队和实施创新策略，他的 __________ 领导带领团队取得了前所未有的成功，树立了新的基准。",
        answers: [
            { option: "A", answer: "ineffective", chinese_answer: "无效", chinese_romanization: "wúxiào" },
            { option: "B", answer: "passive", chinese_answer: "被动", chinese_romanization: "bèidòng" },
            { option: "C", answer: "influential", chinese_answer: "有影响力", chinese_romanization: "yǒu yǐngxiǎng lì" },
            { option: "D", answer: "unremarkable", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'influential' means having the power to have an effect on people or events." +
            "<br><br>" +
            "(A) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(B) 'passive' means accepting or allowing what happens without active response." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly special or interesting.",
        chinese_explanation: "(C) '有影响力' 意味着有能力对人或事件产生影响。" +
            "<br><br>" +
            "(A) '无效' 意味着没有产生任何显著或期望的效果。" +
            "<br><br>" +
            "(B) '被动' 意味着接受或允许发生的事情而不积极回应。" +
            "<br><br>" +
            "(D) '平凡' 意味着不特别或有趣。"
    },
    {
        id: 7,
        question: "His __________ nature made him the ideal candidate for the project and the team could always count on him to meet deadlines.",
        chinese_question: "他 __________ 的性格使他成为这个项目的理想候选人，因为团队总是可以依靠他按时完成任务。",
        answers: [
            { option: "A", answer: "unpredictable", chinese_answer: "不可预测的", chinese_romanization: "bù kě yùcè de" },
            { option: "B", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "C", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(A) 'unpredictable' means not able to be predicted; changeable." +
            "<br><br>" +
            "(C) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(D) 'inconsistent' means not staying the same throughout.",
        chinese_explanation: "(B) '可靠的' 意味着质量或性能始终如一；值得信赖的。" +
            "<br><br>" +
            "(A) '不可预测的' 意味着无法预测的；多变的。" +
            "<br><br>" +
            "(C) '不可靠的' 意味着不能依赖的。" +
            "<br><br>" +
            "(D) '不一致的' 意味着始终不一致的。"
    },
    {
        id: 8,
        question: "The medication provided __________ relief from the pain, much to the patient's relief.",
        chinese_question: "药物提供了 __________ 的疼痛缓解，使患者大为宽心。",
        answers: [
            { option: "A", answer: "intermittent", chinese_answer: "间歇", chinese_romanization: "jiànxiē" },
            { option: "B", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
            { option: "C", answer: "eventual", chinese_answer: "最终", chinese_romanization: "zuìzhōng" },
            { option: "D", answer: "instant", chinese_answer: "即时", chinese_romanization: "jíshí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'instant' means happening or coming immediately." +
            "<br><br>" +
            "(A) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
            "<br><br>" +
            "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'eventual' means occurring at the end of or as a result of a process or period of time.",
        chinese_explanation: "(D) '即时' 意味着立即发生或来到。" +
            "<br><br>" +
            "(A) '间歇' 意味着不定期发生的；不连续或不稳定。" +
            "<br><br>" +
            "(B) '暂时' 意味着只持续有限的一段时间；不永久。" +
            "<br><br>" +
            "(C) '最终' 意味着在过程或一段时间结束时发生或作为结果发生。"
    },
    {
        id: 9,
        question: "She was the __________ hero of the office, always working hard behind the scenes.",
        chinese_question: "她是办公室里的__________英雄，总是在幕后努力工作。",
        answers: [
            { option: "A", answer: "prominent", chinese_answer: "突出的", chinese_romanization: "tūchū de" },
            { option: "B", answer: "unsung", chinese_answer: "默默无闻的", chinese_romanization: "mòmò wú wén de" },
            { option: "C", answer: "visible", chinese_answer: "可见的", chinese_romanization: "kějiàn de" },
            { option: "D", answer: "recognized", chinese_answer: "受认可的", chinese_romanization: "shòu rènkě de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unsung' means not celebrated or praised." +
            "<br><br>" +
            "(A) 'prominent' means important; famous." +
            "<br><br>" +
            "(C) 'visible' means able to be seen." +
            "<br><br>" +
            "(D) 'recognized' means acknowledged the existence, validity, or legality of.",
        chinese_explanation: "(B) '默默无闻的'一词意味着未被庆祝或赞扬的。" +
            "<br><br>" +
            "(A) '突出的' 意味着重要的；著名的。" +
            "<br><br>" +
            "(C) '可见的' 意味着可以看到的。" +
            "<br><br>" +
            "(D) '受认可的' 意味着承认存在、有效性或合法性。"
    },
    {
        id: 10,
    question: "The author's __________ revelations about the secret lives of celebrities caused a media frenzy and sold millions of copies.",
    chinese_question: "作者关于名人秘密生活的 __________ 揭露引起了媒体的疯狂，并且销售了数百万本书。",
    answers: [
        { option: "A", answer: "scandalous", chinese_answer: "丑闻的", chinese_romanization: "chǒuwén de" },
        { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
        { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'scandalous' means causing general public outrage by a perceived offense against morality or law." +
        "<br><br>" +
        "(B) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(C) 'mundane' means lacking interest or excitement; dull." +
        "<br><br>" +
        "(D) 'routine' means a sequence of actions regularly followed; a fixed program.",
    chinese_explanation: "(A) '丑闻的' 意味着因对道德或法律的冒犯而引起公众的愤慨。" +
        "<br><br>" +
        "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
        "<br><br>" +
        "(C) '平凡的' 意味着缺乏兴趣或兴奋的；乏味的。" +
        "<br><br>" +
        "(D) '常规的' 意味着经常遵循的一系列动作；一个固定的程序。"
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
