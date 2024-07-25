// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician attempted to __________ the crowd with promises he couldn't keep.",
        chinese_question: "那位政治家试图通过无法兑现的承诺 __________ 群众。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "inveigle", chinese_answer: "哄骗", chinese_romanization: "hǒngpiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inveigle' means to persuade someone to do something by means of deception or flattery, used figuratively here." +
            "<br><br>" +
            "(A) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(C) 'assist' means to help someone.",
        chinese_explanation: "(D) '哄骗' 意味着通过欺骗或奉承说服某人做某事，这里是比喻用法。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
        question: "In casual speech, people often __________ syllables or sounds, making words shorter.",
        chinese_question: "在日常讲话中，人们经常 __________ 音节或声音，使词语变短。",
        answers: [
                { option: "A", answer: "elide", chinese_answer: "省略", chinese_romanization: "shěnglüè" },
                { option: "B", answer: "pronounce", chinese_answer: "发音", chinese_romanization: "fāyīn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "lengthen", chinese_answer: "延长", chinese_romanization: "yáncháng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'elide' means to omit or leave out, particularly in speech." +
            "<br><br>" +
            "(B) 'pronounce' means to make the sound of a word or part of a word." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'lengthen' means to make something longer.",
        chinese_explanation: "(A) '省略' 意味着省略或遗漏，特别是在言语中。" +
            "<br><br>" +
            "(B) '发音' 意味着发出词语或词的一部分的声音。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '延长' 意味着使某物更长。"
    },
    {
        id: 3,
question: "The unnecessary meetings every week __________ the employees, as they felt it was a waste of time.",
chinese_question: "每周不必要的会议让员工感到 __________，因为他们觉得这是在浪费时间。",
answers: [
        { option: "A", answer: "motivated", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "B", answer: "irked", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "C", answer: "inspired", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "D", answer: "appreciated", chinese_answer: "感激", chinese_romanization: "gǎnjī" }
],
correctAnswer: "B",
explanation: "(B) 'irked' used figuratively means to irritate or annoy." +
        "<br><br>" +
        "(A) 'motivated' means to provide someone with a reason for doing something." +
        "<br><br>" +
        "(C) 'inspired' means to fill someone with the urge or ability to do or feel something, especially something creative." +
        "<br><br>" +
        "(D) 'appreciated' means to recognize the full worth of.",
chinese_explanation: "(B) '激怒' 在比喻意义上指刺激或惹恼。" +
        "<br><br>" +
        "(A) '激励' 意味着为某人提供做某事的理由。" +
        "<br><br>" +
        "(C) '启发' 意味着使某人充满冲动或能力去做或感受某事，尤其是某种创造性的事情。" +
        "<br><br>" +
        "(D) '感激' 意味着认识到某物的全部价值。"
    },
    {
        id: 4,
question: "Parents began to __________ against the school's decision to cut art programs, fearing it would negatively impact their children's education.",
chinese_question: "家长们开始 __________ 学校削减艺术项目的决定，担心这会对孩子们的教育产生负面影响。",
answers: [
    { option: "A", answer: "advocate", chinese_answer: "支持", chinese_romanization: "zhīchí" },
    { option: "B", answer: "inveigh", chinese_answer: "抨击", chinese_romanization: "pēngjī" },
    { option: "C", answer: "endorse", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
    { option: "D", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "B",
explanation: "(B) 'inveigh' means to speak or write about something with great hostility." +
    "<br><br>" +
    "(A) 'advocate' means to publicly recommend or support." +
    "<br><br>" +
    "(C) 'endorse' means to declare one's public approval or support of." +
    "<br><br>" +
    "(D) 'overlook' means to fail to notice something.",
chinese_explanation: "(B) '抨击' 意味着对某事物进行强烈的批评。" +
    "<br><br>" +
    "(A) '支持' 意味着公开推荐或支持。" +
    "<br><br>" +
    "(C) '赞同' 意味着公开表示赞同或支持。" +
    "<br><br>" +
    "(D) '忽视' 意味着未能注意到某事。"
    },
    {
        id: 5,
  question: "To make sure everyone understood, she __________ the instructions at the end of the session.",
  chinese_question: "为了确保每个人都明白，她在课程结束时 __________ 了说明。",
  answers: [
    { option: "A", answer: "recapitulated", chinese_answer: "概述", chinese_romanization: "gàishù" },
    { option: "B", answer: "obscured", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
    { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'recapitulated' means to summarize and restate the main points." +
    "<br><br>" +
    "(B) 'obscured' means to keep from being seen; conceal." +
    "<br><br>" +
    "(C) 'ignored' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(D) 'dismissed' means to order or allow to leave; send away.",
  chinese_explanation: "(A) '概述' 意味着总结并重述主要观点。" +
    "<br><br>" +
    "(B) '遮掩' 意味着使看不见；隐藏。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 6,
        question: "The book details the harrowing experience of an __________ traveler, who was taken hostage by pirates while sailing through dangerous waters.",
        chinese_question: "这本书详细描述了一位被__________的旅行者的悲惨经历，这位旅行者在穿越危险水域时被海盗劫持了。",
        answers: [
            { option: "A", answer: "welcomed", chinese_answer: "受欢迎的", chinese_romanization: "shòu huānyíng de" },
            { option: "B", answer: "honored", chinese_answer: "受尊敬的", chinese_romanization: "shòu zūnjìng de" },
            { option: "C", answer: "celebrated", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "D", answer: "abducted", chinese_answer: "绑架的", chinese_romanization: "bǎngjià de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abducted' means taken away illegally by force or deception; kidnapped." +
            "<br><br>" +
            "(A) 'welcomed' means greeted in a friendly way." +
            "<br><br>" +
            "(B) 'honored' means regarded with great respect." +
            "<br><br>" +
            "(C) 'celebrated' means greatly admired; renowned.",
        chinese_explanation: "(D) '绑架的'一词意味着被非法强行或欺骗带走的；绑架的。" +
            "<br><br>" +
            "(A) '受欢迎的' 意味着以友好的方式迎接的。" +
            "<br><br>" +
            "(B) '受尊敬的' 意味着受到很大尊敬的。" +
            "<br><br>" +
            "(C) '著名的' 意味着被高度钦佩的；著名的。"
    },
    {
        id: 7,
question: "He hopes to __________ the art of negotiation to advance his career.",
chinese_question: "他希望 __________ 谈判艺术以推进他的职业生涯。",
answers: [
    { option: "A", answer: "misunderstand", chinese_answer: "误解", chinese_romanization: "wùjiě" },
    { option: "B", answer: "master", chinese_answer: "精通", chinese_romanization: "jīngtōng" },
    { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
    { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "B",
explanation: "(B) 'master' means to become highly skilled or proficient in a particular area." +
    "<br><br>" +
    "(A) 'misunderstand' means to fail to interpret or understand something correctly." +
    "<br><br>" +
    "(C) 'avoid' means to keep away from or stop oneself from doing something." +
    "<br><br>" +
    "(D) 'neglect' means to fail to care for properly.",
chinese_explanation: "(B) '精通' 意味着在某一特定领域变得非常熟练或精通。" +
    "<br><br>" +
    "(A) '误解' 意味着未能正确解释或理解某事。" +
    "<br><br>" +
    "(C) '避免' 意味着远离或阻止自己做某事。" +
    "<br><br>" +
    "(D) '忽视' 意味着未能适当照顾。"
    },
    {
        id: 8,
    question: "He felt __________ by the expectations placed on him by his family.",
    chinese_question: "他感到被家庭对他的期望所 __________。",
    answers: [
            { option: "A", answer: "fettered", chinese_answer: "束缚", chinese_romanization: "shùfù" },
            { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "freed", chinese_answer: "解放", chinese_romanization: "jiěfàng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fettered' means to be restricted or restrained in an unfair or undesirable manner." +
            "<br><br>" +
            "(B) 'supported' means to give assistance to." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'freed' means to release from confinement or bondage.",
    chinese_explanation: "(A) '束缚' 意味着以不公平或不理想的方式限制或约束某人。" +
            "<br><br>" +
            "(B) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '解放' 意味着从监禁或束缚中释放。"
    },
    {
        id: 9,
question: "The historian had to __________ additional context into the ancient text to make it understandable for modern readers.",
chinese_question: "历史学家不得不在古文中 __________ 额外的背景信息，以便现代读者理解。",
answers: [
        { option: "A", answer: "interpolate", chinese_answer: "插入", chinese_romanization: "chārù" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "erase", chinese_answer: "擦除", chinese_romanization: "cāchú" }
],
correctAnswer: "A",
explanation: "(A) 'interpolate' means to insert something, often words, into a text or conversation." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'support' means to give assistance to." +
        "<br><br>" +
        "(D) 'erase' means to remove all traces of something.",
chinese_explanation: "(A) '插入' 意味着将某物插入文本或对话中。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(D) '擦除' 意味着去除所有痕迹。"
    },
    {
        id: 10,
question: "The advertisement was crafted to __________ potential customers, encouraging them to try the new product.",
chinese_question: "这则广告的目的是 __________ 潜在客户，鼓励他们尝试新产品。",
answers: [
    { option: "A", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
    { option: "B", answer: "titillate", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
    { option: "C", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
    { option: "D", answer: "disappoint", chinese_answer: "使失望", chinese_romanization: "shǐ shīwàng" }
],
correctAnswer: "B",
explanation: "(B) 'titillate' figuratively means to excite or arouse interest or enjoyment." +
    "<br><br>" +
    "(A) 'discourage' means to dissuade." +
    "<br><br>" +
    "(C) 'clarify' means to make clear." +
    "<br><br>" +
    "(D) 'disappoint' means to let down.",
chinese_explanation: "(B) '吸引' 一词在比喻上意味着激发或引起兴趣或享受。" +
    "<br><br>" +
    "(A) '劝阻' 意味着劝阻。" +
    "<br><br>" +
    "(C) '澄清' 意味着使清楚。" +
    "<br><br>" +
    "(D) '使失望' 意味着让人失望。"
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
