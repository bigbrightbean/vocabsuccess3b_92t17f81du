// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The committee's investigation was able to __________ her from any involvement in the scandal, clearing her name and proving her innocence.",
        chinese_question: "委员会的调查能够 __________ 她与丑闻的任何牵连，为她洗清罪名并证明她的清白。",
        answers: [
            { option: "A", answer: "involve", chinese_answer: "牵连", chinese_romanization: "qiānlián" },
            { option: "B", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "C", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "exonerate", chinese_answer: "免除", chinese_romanization: "miǎnchú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exonerate' means to absolve someone from blame for a fault or wrongdoing." +
            "<br><br>" +
            "(A) 'involve' means to include someone in an activity or situation." +
            "<br><br>" +
            "(B) 'accuse' means to charge someone with an offense or crime." +
            "<br><br>" +
            "(C) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(D) '免除' 意味着使某人免于承担过错或错误的责任。" +
            "<br><br>" +
            "(A) '牵连' 意味着包括某人在活动或情况中。" +
            "<br><br>" +
            "(B) '指控' 意味着指控某人犯有罪行。" +
            "<br><br>" +
            "(C) '掩盖' 意味着防止被看到；隐藏。"
    },
    {
        id: 2,
        question: "He was determined to sue the journalist who tried to __________ his character with baseless claims, spreading false information to ruin his reputation.",
        chinese_question: "他决心起诉试图用毫无根据的指控 __________ 他品格的记者，散布虚假信息以破坏他的名誉。",
        answers: [
                { option: "A", answer: "defame", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "B", answer: "commend", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "exalt", chinese_answer: "推崇", chinese_romanization: "tuīchóng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'defame' means to damage the good reputation of someone; to slander or libel." +
                "<br><br>" +
                "(B) 'commend' means to praise formally or officially." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'exalt' means to hold someone or something in very high regard; to think or speak very highly of.",
        chinese_explanation: "(A) '诽谤' 意味着损害某人的好名声；诽谤或中伤。" +
                "<br><br>" +
                "(B) '赞扬' 意味着正式或官方地表扬。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '推崇' 意味着对某人或某物高度重视；非常高地评价。"
    },
    {
        id: 3,
        question: "The repetitive questions from the audience began to __________ on the speaker's patience, making it increasingly difficult for him to remain calm and composed.",
        chinese_question: "观众重复的问题开始 __________ 演讲者的耐心，使他越来越难以保持冷静和镇定。",
        answers: [
            { option: "A", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "grate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "D", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grate' means to irritate or annoy someone, used figuratively here." +
            "<br><br>" +
            "(A) 'please' means to cause someone to feel happy and satisfied." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'reassure' means to say or do something to remove the doubts and fears of someone.",
        chinese_explanation: "(C) '刺激' 意味着使某人烦躁或恼火，这里是比喻用法。" +
            "<br><br>" +
            "(A) '取悦' 意味着使某人感到高兴和满意。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '安慰' 意味着说或做某事以消除某人的疑虑和恐惧。"
    },
    {
        id: 4,
        question: "The extensive library collection was enough to __________ any book lover's thirst for knowledge.",
        chinese_question: "丰富的图书馆藏书足以 __________ 任何爱书人对知识的渴望。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "satiate", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'satiate' means to satisfy fully." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(C) 'simplify' means to make something easier to do or understand." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice something.",
        chinese_explanation: "(B) '满足' 意味着完全满足。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事更易做或理解。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 5,
        question: "Despite his efforts, he could not avoid the __________ of his friends after making the same mistake again.",
        chinese_question: "尽管他努力了，但再次犯同样的错误后，还是无法避免朋友们的 __________。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
            "<br><br>" +
            "(A) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
        chinese_explanation: "(B) '责备'一词意味着表示不赞成或失望。" +
            "<br><br>" +
            "(A) '赞美' 意味着对某人或某事表示赞同或钦佩。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过进行愉快的、通常是社交的活动来标志一个重要事件或场合的愉快行为。"
    },
    {
        id: 6,
        question: "Online shopping has started to __________ traditional retail stores for many consumers by offering more convenience and often better prices.",
        chinese_question: "对于许多消费者来说，在线购物已经开始通过提供更多的便利和通常更优的价格来 __________ 传统零售店。",
        answers: [
            { option: "A", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "supplant", chinese_answer: "取代", chinese_romanization: "qǔdài" },
            { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'supplant' means to replace or take the place of." +
            "<br><br>" +
            "(A) 'assist' means to help (someone), typically by doing a share of the work." +
            "<br><br>" +
            "(B) 'undermine' means to damage or weaken someone or something, especially gradually." +
            "<br><br>" +
            "(D) 'delay' means to make (someone or something) late or slow.",
        chinese_explanation: "(C) '取代' 意味着替换或取代。" +
            "<br><br>" +
            "(A) '帮助' 意味着帮助（某人），通常是通过分担工作。" +
            "<br><br>" +
            "(B) '削弱' 意味着在力量、决心或体力上变得更弱。" +
            "<br><br>" +
            "(D) '延迟' 意味着使（某人或某事）变迟或变慢。"
    },
    {
        id: 7,
    question: "He managed to __________ a good deal for his client during the negotiations, using his clever tactics and persuasive skills.",
    chinese_question: "他在谈判中设法为他的客户 __________ 了一笔好交易，运用他的聪明战术和说服技巧。",
    answers: [
        { option: "A", answer: "chisel", chinese_answer: "巧取", chinese_romanization: "qiǎo qǔ" },
        { option: "B", answer: "ruin", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chisel' means to cleverly or deceitfully obtain something, often used figuratively." +
        "<br><br>" +
        "(B) 'ruin' means to destroy or severely damage something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'delay' means to make someone or something late or slow.",
    chinese_explanation: "(A) '巧取' 意味着巧妙或欺骗性地获得某物，通常用作比喻。" +
        "<br><br>" +
        "(B) '破坏' 意味着毁灭或严重损害某物。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '延迟' 意味着使某人或某事迟到或变慢。"
    },
    {
        id: 8,
    question: "The defeat was meant to __________ the team and teach them humility.",
    chinese_question: "这次失败是为了 __________ 团队，教他们谦逊。",
    answers: [
        { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "D", answer: "chasten", chinese_answer: "磨练", chinese_romanization: "móliàn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'chasten' means to have a restraining or moderating effect on; to discipline or punish in order to correct." +
        "<br><br>" +
        "(A) 'reward' means to give something to someone in recognition of their services, efforts, or achievements." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'promote' means to further the progress of something, especially a cause, venture, or aim; support or actively encourage.",
    chinese_explanation: "(D) '磨练' 意味着有抑制或缓和的作用；为了纠正而惩戒或处罚。" +
        "<br><br>" +
        "(A) '奖励' 意味着因其服务、努力或成就而给予某人某物。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '提升' 意味着推动某事物的发展，尤其是某项事业、冒险或目标；支持或积极鼓励。"
    },
    {
        id: 9,
        question: "She decided to __________ herself in bright and extravagant clothing for the festival.",
        chinese_question: "她决定在节日里穿上亮丽而奢华的服装来 __________ 自己。",
        answers: [
        { option: "A", answer: "bedizen", chinese_answer: "穿戴华丽", chinese_romanization: "chuāndài huálì" },
        { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bedizen' means to dress or decorate in a gaudy or showy manner." +
            "<br><br>" +
            "(B) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'conceal' means to keep something secret.",
        chinese_explanation: "(A) '穿戴华丽' 意味着以艳丽或炫耀的方式打扮或装饰。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '隐藏' 意味着保密某事。"
    },
    {
        id: 10,
        question: "The politician skillfully __________ the difficult question, redirecting the conversation to a more favourable topic.",
        chinese_question: "这位政客巧妙地 __________ 了这个棘手的问题，把谈话引向了一个更有利的话题。",
        answers: [
            { option: "A", answer: "addressed", chinese_answer: "处理", chinese_romanization: "chǔlǐ" },
            { option: "B", answer: "confronted", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "C", answer: "dodged", chinese_answer: "躲避", chinese_romanization: "duǒbì" },
            { option: "D", answer: "answered", chinese_answer: "回答", chinese_romanization: "huídá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dodged' means avoided something, often in a skillful or cunning manner." +
            "<br><br>" +
            "(A) 'addressed' means dealt with or discussed." +
            "<br><br>" +
            "(B) 'confronted' means faced up to and dealt with a problem or difficult situation." +
            "<br><br>" +
            "(D) 'answered' means responded to a question.",
        chinese_explanation: "(C) '躲避' 意味着避开某事，通常是巧妙或狡猾的方式。" +
            "<br><br>" +
            "(A) '处理' 意味着处理或讨论。" +
            "<br><br>" +
            "(B) '面对' 意味着面对和处理问题或困难的情况。" +
            "<br><br>" +
            "(D) '回答' 意味着对问题作出回应。"
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
