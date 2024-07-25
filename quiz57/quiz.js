// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The monument stands as an __________ symbol of the city's rich history.",
        chinese_question: "这座纪念碑作为城市悠久历史的 __________ 象征而屹立不倒。",
        answers: [
            { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "C", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "D", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enduring' means lasting over a long period of time; durable." +
            "<br><br>" +
            "(A) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(B) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time; not permanent.",
        chinese_explanation: "(D) '持久的' 意味着持续很长时间的；耐用的。" +
            "<br><br>" +
            "(A) '短暂的' 意味着持续时间非常短。" +
            "<br><br>" +
            "(B) '脆弱的' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(C) '暂时的' 意味着只持续有限的时间；非永久的。"
    },
    {
        id: 2,
        question: "The manager was frustrated with the team's __________ attitude towards meeting deadlines.",
        chinese_question: "经理对团队在截止日期方面的 __________ 态度感到沮丧。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "B", answer: "committed", chinese_answer: "尽职的", chinese_romanization: "jìnzhí de" },
            { option: "C", answer: "slack", chinese_answer: "懈怠的", chinese_romanization: "xièdài de" },
            { option: "D", answer: "punctual", chinese_answer: "准时的", chinese_romanization: "zhǔnshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slack' means showing a lack of activity or diligence; negligent." +
            "<br><br>" +
            "(A) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(B) 'committed' means feeling dedication and loyalty to a cause, activity, or job; wholeheartedly dedicated." +
            "<br><br>" +
            "(D) 'punctual' means happening or doing something at the agreed or proper time.",
        chinese_explanation: "(C) '懈怠的' 意味着表现出缺乏活动或勤奋；疏忽的。" +
            "<br><br>" +
            "(A) '勤奋的' 意味着在工作或职责上表现出关心和认真。" +
            "<br><br>" +
            "(B) '尽职的' 意味着对一个事业、活动或工作感到忠诚和忠诚；全心全意地奉献的。" +
            "<br><br>" +
            "(D) '准时的' 意味着在约定或适当的时间发生或做某事的."
    },
    {
        id: 3,
        question: "The __________ strategy involves expanding the company's market share through mergers and acquisitions.",
        chinese_question: "该公司的 __________ 战略包括通过并购扩大市场份额。",
        answers: [
            { option: "A", answer: "personal", chinese_answer: "个人的", chinese_romanization: "gèrén de" },
            { option: "B", answer: "corporate", chinese_answer: "公司的", chinese_romanization: "gōngsī de" },
            { option: "C", answer: "familial", chinese_answer: "家庭的", chinese_romanization: "jiātíng de" },
            { option: "D", answer: "communal", chinese_answer: "社区的", chinese_romanization: "shèqū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'corporate' means relating to a large company or group." +
            "<br><br>" +
            "(A) 'personal' means belonging to or affecting a particular person rather than anyone else." +
            "<br><br>" +
            "(C) 'familial' means relating to or occurring in a family or its members." +
            "<br><br>" +
            "(D) 'communal' means shared by all members of a community; for common use.",
        chinese_explanation: "(B) '公司的' 意味着与大公司或集团有关的。" +
            "<br><br>" +
            "(A) '个人的' 意味着属于或影响特定人的，而不是其他任何人。" +
            "<br><br>" +
            "(C) '家庭的' 意味着与家庭或其成员有关的。" +
            "<br><br>" +
            "(D) '社区的' 意味着由社区的所有成员共享的；供共同使用的."
    },
    {
        id: 4,
        question: "The office environment was very __________, with everyone getting along well and helping each other.",
        chinese_question: "办公室的环境非常 __________，每个人都相处得很好，并互相帮助。",
        answers: [
            { option: "A", answer: "congenial", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "C", answer: "unfriendly", chinese_answer: "不友好的", chinese_romanization: "bù yǒuhǎo de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'congenial' means pleasant because of a personality, qualities, or interests that are similar to one's own." + 
            "<br><br>" +
            "(B) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'unfriendly' means not friendly." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '友好的' 意味着由于个性、品质或兴趣与自己相似而令人愉快的。" + 
            "<br><br>" +
            "(B) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(C) '不友好的' 意味着不友好的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 5,
        question: "His __________ approach to management earned him the respect and loyalty of his employees.",
        chinese_question: "他 __________ 的管理方法赢得了员工的尊重和忠诚。",
        answers: [
            { option: "A", answer: "tyrannical", chinese_answer: "残暴", chinese_romanization: "cánbào" },
            { option: "B", answer: "humane", chinese_answer: "人道", chinese_romanization: "réndào" },
            { option: "C", answer: "ruthless", chinese_answer: "无情", chinese_romanization: "wúqíng" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'humane' means having or showing compassion or benevolence." + 
            "<br><br>" +
            "(A) 'tyrannical' means exercising power in a cruel or arbitrary way." +
            "<br><br>" +
            "(C) 'ruthless' means having or showing no pity or compassion for others." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '人道' 意味着有或表现出同情或仁慈。" + 
            "<br><br>" +
            "(A) '残暴' 意味着以残酷或武断的方式行使权力。" +
            "<br><br>" +
            "(C) '无情' 意味着对他人没有怜悯或同情心。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 6,
        question: "The environmental group issued a __________ warning about the effects of climate change.",
        chinese_question: "环境保护组织发出了关于气候变化影响的 __________ 警告。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "D", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'severe' means very great; intense." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'relaxed' means less strict or severe." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '严重的' 意味着非常大的；强烈的。" +
            "<br><br>" +
            "(A) '温和的' 意味着不严重、严重或苛刻。" +
            "<br><br>" +
            "(B) '放松的' 意味着不那么严格或严厉。" +
            "<br><br>" +
            "(D) '温柔的' 意味着有或表现出温和、善良或温柔的性格。"
    },
    {
        id: 7,
        question: "Her negative attitude was __________ to team collaboration, creating a toxic work environment.",
        chinese_question: "她的消极态度对团队合作 __________ ，造成了有毒的工作环境。",
        answers: [
            { option: "A", answer: "inimical", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "B", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inimical' means harmful or hostile, used figuratively here." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(D) 'beneficial' means resulting in good; favorable or advantageous.",
        chinese_explanation: "(A) '有害' 意味着有害或敌对的，这里是比喻用法。" +
            "<br><br>" +
            "(B) '支持' 意味着提供鼓励或情感上的帮助。" +
            "<br><br>" +
            "(C) '微不足道' 意味着小到或不重要到不值得考虑的。" +
            "<br><br>" +
            "(D) '有益' 意味着带来好处；有利或有优势的。"
    },
    {
        id: 8,
        question: "The team's __________ determination led them to victory, overcoming all the challenges they faced.",
        chinese_question: "团队 __________ 的决心使他们克服了所有遇到的挑战，最终赢得了胜利。",
        answers: [
            { option: "A", answer: "indomitable", chinese_answer: "不屈不挠的", chinese_romanization: "bùqū bùnáo de" },
            { option: "B", answer: "wavering", chinese_answer: "摇摆不定的", chinese_romanization: "yáobǎi bùdìng de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indomitable' means impossible to subdue or defeat." + 
            "<br><br>" +
            "(B) 'wavering' means shaking with a quivering motion; becoming weaker; faltering." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(A) '不屈不挠的' 意味着无法被征服或击败的。" + 
            "<br><br>" +
            "(B) '摇摆不定的' 意味着以颤抖的动作摇晃；变得虚弱；犹豫不决的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着试探性的，不确定的，或行动或说话缓慢的。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不可靠的；未知的或不确定的。"
    },
    {
        id: 9,
    question: "Her __________ attitude toward the new employees created a hostile work environment.",
    chinese_question: "她对新员工的 __________ 态度营造了一个敌对的工作环境。",
    answers: [
        { option: "A", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" },
        { option: "B", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
        { option: "C", answer: "welcoming", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
        { option: "D", answer: "condescending", chinese_answer: "居高临下的", chinese_romanization: "jūgāolínxià de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'condescending' means having or showing an attitude of patronizing superiority." + 
        "<br><br>" +
        "(A) 'encouraging' means giving someone support or confidence." +
        "<br><br>" +
        "(B) 'inclusive' means not excluding any of the parties or groups involved in something." +
        "<br><br>" +
        "(C) 'welcoming' means friendly or making someone feel welcome.",
    chinese_explanation: "(D) '居高临下的' 意味着有或表现出一种居高临下的优越态度。" + 
        "<br><br>" +
        "(A) '鼓励的' 意味着给予某人支持或信心的。" +
        "<br><br>" +
        "(B) '包容的' 意味着不排除参与其中的任何一方或团体的。" +
        "<br><br>" +
        "(C) '热情的' 意味着友好的或让某人感到受欢迎的。"
    },
    {
        id: 10,
        question: "Her __________ decision to donate her kidney to a stranger was praised by many.",
        chinese_question: "她 __________ 地决定将自己的肾捐给一个陌生人，这一行为受到了许多人的称赞。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "heroic", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
            { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heroic' means showing great bravery." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(B) '英勇的' 意味着表现出极大的勇敢。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑。" +
            "<br><br>" +
            "(C) '次要的' 意味着重要性、严重性或意义较小。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特殊或独特的特征；正常的。"
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
