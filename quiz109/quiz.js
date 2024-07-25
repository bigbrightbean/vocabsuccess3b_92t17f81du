// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "She had to __________ from making a sarcastic comment during the meeting, although she was tempted.",
chinese_question: "虽然很想，但她还是不得不 __________ 在会议上发表讽刺评论。",
answers: [
        { option: "A", answer: "respond", chinese_answer: "回应", chinese_romanization: "huíyìng" },
        { option: "B", answer: "forbear", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "C", answer: "joke", chinese_answer: "开玩笑", chinese_romanization: "kāiwánxiào" },
        { option: "D", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" }
],
correctAnswer: "B",
explanation: "(B) 'forbear' used figuratively means to restrain oneself from showing or expressing something." +
        "<br><br>" +
        "(A) 'respond' means to say something in reply." +
        "<br><br>" +
        "(C) 'joke' means to say something for amusement or laughter." +
        "<br><br>" +
        "(D) 'smile' means to form one's features into a pleased, kind, or amused expression.",
chinese_explanation: "(B) '克制' 在比喻意义上指抑制自己不去表现或表达某事。" +
        "<br><br>" +
        "(A) '回应' 意味着回复某事。" +
        "<br><br>" +
        "(C) '开玩笑' 意味着说某事取乐或博得笑声。" +
        "<br><br>" +
        "(D) '微笑' 意味着让自己的面部特征形成高兴、友好或有趣的表情。"
    },
    {
        id: 2,
        question: "The CEO would often __________ at company events, mingling with employees and enjoying the festivities.",
        chinese_question: "首席执行官经常在公司活动中 __________ ，与员工交往并享受节庆活动。",
        answers: [
                { option: "A", answer: "disport", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "C", answer: "lecture", chinese_answer: "演讲", chinese_romanization: "yǎnjiǎng" },
                { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disport' means to amuse oneself in a lively and energetic way, used figuratively here." +
                "<br><br>" +
                "(B) 'avoid' means to keep away from or stop oneself from doing something." +
                "<br><br>" +
                "(C) 'lecture' means to deliver an educational talk to an audience." +
                "<br><br>" +
                "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(A) '娱乐' 意味着以生动和充满活力的方式娱乐自己，这里是比喻用法。" +
                "<br><br>" +
                "(B) '避免' 意味着远离或阻止自己做某事。" +
                "<br><br>" +
                "(C) '演讲' 意味着向观众发表教育性演讲。" +
                "<br><br>" +
                "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
    },
    {
        id: 3,
        question: "They did not __________ to the new rules, accepting them without complaint.",
        chinese_question: "他们没有 __________ 新规则，毫无怨言地接受了它们。",
        answers: [
                { option: "A", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
                { option: "B", answer: "demur", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
                { option: "C", answer: "object", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
                { option: "D", answer: "applaud", chinese_answer: "赞同", chinese_romanization: "zàntóng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demur' means to raise doubts or objections or show reluctance." +
                "<br><br>" +
                "(A) 'agree' means to have the same opinion about something." +
                "<br><br>" +
                "(C) 'object' means to express or feel disapproval." +
                "<br><br>" +
                "(D) 'applaud' means to show approval or praise.",
        chinese_explanation: "(B) '反对' 意味着提出异议或表现出不情愿。" +
                "<br><br>" +
                "(A) '同意' 意味着对某事持相同意见。" +
                "<br><br>" +
                "(C) '反对' 意味着表达或感到不满。" +
                "<br><br>" +
                "(D) '赞同' 意味着表示赞成或称赞。"
    },
    {
        id: 4,
        question: "In his pursuit of success, he chose to __________ negativity and focus solely on his goals.",
        chinese_question: "在追求成功的过程中，他选择 __________ 消极情绪，专注于自己的目标。",
        answers: [
                { option: "A", answer: "eschew", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "B", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "foster", chinese_answer: "培养", chinese_romanization: "péiyǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eschew' means to deliberately avoid or abstain from, used figuratively here." +
            "<br><br>" +
            "(B) 'embrace' means to accept or support willingly and enthusiastically." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'foster' means to encourage the development of something.",
        chinese_explanation: "(A) '避免' 意味着故意避免或戒绝，这里是比喻用法。" +
            "<br><br>" +
            "(B) '接受' 意味着愿意和热情地支持。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '培养' 意味着鼓励某事的发展。"
    },
    {
        id: 5,
        question: "The comedian is well-known for his ability to __________ jokes during his shows.",
        chinese_question: "这位喜剧演员以能够在节目中 __________ 笑话而闻名。",
        answers: [
            { option: "A", answer: "script", chinese_answer: "写剧本", chinese_romanization: "xiě jùběn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "read", chinese_answer: "阅读", chinese_romanization: "yuèdú" },
            { option: "D", answer: "extemporize", chinese_answer: "即兴创作", chinese_romanization: "jíxìng chuàngzuò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'extemporize' means to compose, perform, or produce something such as music or a speech without preparation; improvise." +
            "<br><br>" +
            "(A) 'script' means to write the text of a play, film, or broadcast." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'read' means to look at and comprehend the meaning of written or printed matter.",
        chinese_explanation: "(D) '即兴创作' 意味着在没有准备的情况下创作、表演或制作某物，如音乐或演讲；即兴发挥。" +
            "<br><br>" +
            "(A) '写剧本' 意味着写戏剧、电影或广播的文本。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '阅读' 意味着看和理解书写或印刷内容的意义。"
    },
    {
        id: 6,
        question: "Over time, the small villages began to __________ into a larger town.",
        chinese_question: "随着时间的推移，小村庄开始 __________ 成一个大镇。",
        answers: [
                { option: "A", answer: "coalesce", chinese_answer: "合并", chinese_romanization: "hébìng" },
                { option: "B", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coalesce' means to come together to form one mass or whole." +
            "<br><br>" +
            "(B) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'reduce' means to make smaller or less in amount, degree, or size.",
        chinese_explanation: "(A) '合并' 意味着聚集在一起形成一个整体。" +
            "<br><br>" +
            "(B) '分离' 意味着使移动或分开。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '减少' 意味着使数量、程度或规模变小。"
    },
    {
        id: 7,
        question: "The company’s conservative policies often __________ innovative ideas from younger employees.",
        chinese_question: "公司的保守政策经常 __________ 年轻员工的创新想法。",
        answers: [
                { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
                { option: "B", answer: "disallow", chinese_answer: "不允许", chinese_romanization: "bù yǔnxǔ" },
                { option: "C", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                { option: "D", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disallow' used figuratively means to refuse to accept or acknowledge." +
                "<br><br>" +
                "(A) 'encourage' means to give support, confidence, or hope to someone." +
                "<br><br>" +
                "(C) 'embrace' means to accept or support willingly and enthusiastically." +
                "<br><br>" +
                "(D) 'promote' means to further the progress of something.",
        chinese_explanation: "(B) '不允许' 在比喻意义上指拒绝接受或承认。" +
                "<br><br>" +
                "(A) '鼓励' 意味着给予某人支持、信心或希望。" +
                "<br><br>" +
                "(C) '接受' 意味着愿意并热情地接受或支持。" +
                "<br><br>" +
                "(D) '促进' 意味着推进某事的进展。"
    },
    {
        id: 8,
        question: "His ambiguous statement could be __________ in several different ways.",
        chinese_question: "他那含糊不清的陈述可以被 __________ 成几种不同的方式。",
        answers: [
                { option: "A", answer: "construed", chinese_answer: "解释", chinese_romanization: "jiěshì" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "forgotten", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
                { option: "D", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'construed' means to interpret (a word or action) in a particular way." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'forgotten' means to fail to remember." +
            "<br><br>" +
            "(D) 'dismissed' means to order or allow to leave; send away.",
        chinese_explanation: "(A) '解释' 意味着以特定方式解释（一个词或一个行为）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 9,
        question: "He would often __________ enthusiasm at work meetings, though he was indifferent to the topics discussed.",
        chinese_question: "他经常在工作会议上 __________ 热情，尽管他对讨论的主题无动于衷。",
        answers: [
                { option: "A", answer: "inspire", chinese_answer: "激发", chinese_romanization: "jīfā" },
                { option: "B", answer: "feign", chinese_answer: "假装", chinese_romanization: "jiǎzhuāng" },
                { option: "C", answer: "express", chinese_answer: "表达", chinese_romanization: "biǎodá" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feign' used figuratively means to pretend to have or feel something." +
            "<br><br>" +
            "(A) 'inspire' means to fill someone with the urge or ability to do or feel something." +
            "<br><br>" +
            "(C) 'express' means to convey a thought or feeling in words or by gestures and conduct." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '假装' 在比喻意义上指假装拥有或感受到某种情感。" +
            "<br><br>" +
            "(A) '激发' 意味着使某人有做某事的冲动或能力。" +
            "<br><br>" +
            "(C) '表达' 意味着通过言语或手势和行为传达思想或感情。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
question: "The manager was accused of __________ company funds for personal expenses.",
chinese_question: "经理被指控 __________ 公司资金用于个人开支。",
answers: [
    { option: "A", answer: "saving", chinese_answer: "节省", chinese_romanization: "jiéshěng" },
    { option: "B", answer: "investing", chinese_answer: "投资", chinese_romanization: "tóuzī" },
    { option: "C", answer: "misapplying", chinese_answer: "误用", chinese_romanization: "wùyòng" },
    { option: "D", answer: "donating", chinese_answer: "捐赠", chinese_romanization: "juānzèng" }
],
correctAnswer: "C",
explanation: "(C) 'misapplying' means using something, especially funds, for a wrong purpose." +
    "<br><br>" +
    "(A) 'saving' means setting aside money for future use." +
    "<br><br>" +
    "(B) 'investing' means putting money into financial schemes for profit." +
    "<br><br>" +
    "(D) 'donating' means giving money or goods for a good cause.",
chinese_explanation: "(C) '误用' 意味着错误地使用某物，特别是资金。" +
    "<br><br>" +
    "(A) '节省' 意味着为未来使用而储存钱。" +
    "<br><br>" +
    "(B) '投资' 意味着将钱投入金融计划以获利。" +
    "<br><br>" +
    "(D) '捐赠' 意味着为公益事业捐赠钱或物品。"
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
