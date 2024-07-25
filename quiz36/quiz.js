// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team's __________ approach to the project resulted in numerous mistakes and setbacks.",
        chinese_question: "团队对项目的 __________ 方法导致了许多错误和挫折。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
            { option: "B", answer: "impetuous", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "methodical", chinese_answer: "有条理", chinese_romanization: "yǒu tiáolǐ" },
            { option: "D", answer: "organized", chinese_answer: "组织", chinese_romanization: "zǔzhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impetuous' means acting or done quickly and without thought or care." + 
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm." +
            "<br><br>" +
            "(C) 'methodical' means done according to a systematic or established form of procedure." +
            "<br><br>" +
            "(D) 'organized' means arranged or structured in a systematic way.",
        chinese_explanation: "(B) '冲动' 意味着快速且不加思考或关心地做出行为或决定。" + 
            "<br><br>" +
            "(A) '小心' 意味着确保避免潜在的危险、事故或伤害。" +
            "<br><br>" +
            "(C) '有条理' 意味着按照系统或既定程序进行。" +
            "<br><br>" +
            "(D) '组织' 意味着以系统的方式安排或结构化。"
    },
    {
        id: 2,
        question: "The scientist proposed a __________ hypothesis, awaiting further experiments to confirm its validity.",
        chinese_question: "科学家提出了一个 __________ 的假设，等待进一步的实验来确认其有效性。",
        answers: [
            { option: "A", answer: "conclusive", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "B", answer: "final", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "C", answer: "decisive", chinese_answer: "决定性的", chinese_romanization: "juédìngxìng de" },
            { option: "D", answer: "tentative", chinese_answer: "暂时的", chinese_romanization: "zànshí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tentative' means not certain or fixed; provisional." + 
            "<br><br>" +
            "(A) 'conclusive' means serving to prove a case; decisive or convincing." +
            "<br><br>" +
            "(B) 'final' means coming at the end of a series." +
            "<br><br>" +
            "(C) 'decisive' means settling an issue; producing a definite result.",
        chinese_explanation: "(D) '暂时的' 意味着不确定的或固定的；暂时的。" + 
            "<br><br>" +
            "(A) '确定的' 意味着证明一个案子的；决定性或令人信服的。" +
            "<br><br>" +
            "(B) '最终的' 意味着在一系列事物的结尾。" +
            "<br><br>" +
            "(C) '决定性的' 意味着解决一个问题；产生一个明确的结果。"
    },
    {
        id: 3,
        question: "He used a __________ tone to ease the tension during the heated debate.",
        chinese_question: "他使用 __________ 的语气来缓和激烈辩论中的紧张气氛。",
        answers: [
            { option: "A", answer: "inflammatory", chinese_answer: "煽动性", chinese_romanization: "shāndòng xìng" },
            { option: "B", answer: "diplomatic", chinese_answer: "外交", chinese_romanization: "wàijiāo" },
            { option: "C", answer: "abrasive", chinese_answer: "粗鲁", chinese_romanization: "cūlǔ" },
            { option: "D", answer: "confrontational", chinese_answer: "对抗性", chinese_romanization: "duìkàng xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." + 
            "<br><br>" +
            "(A) 'inflammatory' means arousing or intended to arouse angry or violent feelings." +
            "<br><br>" +
            "(C) 'abrasive' means showing little concern for the feelings of others; harsh." +
            "<br><br>" +
            "(D) 'confrontational' means tending to deal with situations in an aggressive way; hostile or argumentative.",
        chinese_explanation: "(B) '外交' 意味着有或表现出以敏感和有效的方式处理人的能力。" + 
            "<br><br>" +
            "(A) '煽动性' 意味着激起或意图激起愤怒或暴力情绪。" +
            "<br><br>" +
            "(C) '粗鲁' 意味着对他人感受关心甚少；严厉。" +
            "<br><br>" +
            "(D) '对抗性' 意味着倾向于以攻击性方式处理情况；敌对或争论。"
    },
    {
        id: 4,
    question: "He was __________ with his current job and had no plans to seek other opportunities.",
    chinese_question: "他对目前的工作感到__________，没有打算寻找其他机会。",
    answers: [
      { option: "A", answer: "dissatisfied", chinese_answer: "不满的", chinese_romanization: "bùmǎn de" },
      { option: "B", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
      { option: "C", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
      { option: "D", answer: "unhappy", chinese_answer: "不开心的", chinese_romanization: "bù kāixīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'content' means in a state of peaceful happiness. Figuratively, it can mean being satisfied with one's situation." +
      "<br><br>" +
      "(A) 'dissatisfied' means not content or happy with something." +
      "<br><br>" +
      "(C) 'anxious' means feeling or showing worry, nervousness, or unease." +
      "<br><br>" +
      "(D) 'unhappy' means not happy.",
    chinese_explanation: "(B) '满足的' 意味着处于平静的幸福状态。比喻地，它可以表示对自己的处境感到满意。" +
      "<br><br>" +
      "(A) '不满的' 意味着对某事不满意或不高兴。" +
      "<br><br>" +
      "(C) '焦虑的' 意味着感到或表现出担忧、紧张或不安。" +
      "<br><br>" +
      "(D) '不开心的' 意味着不高兴。"
    },
    {
        id: 5,
        question: "The __________ smell coming from the garbage bin made it hard to stay in the room.",
        chinese_question: "垃圾桶里散发出的 __________ 气味让人难以留在房间里。",
        answers: [
            { option: "A", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "B", answer: "pleasing", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "C", answer: "obnoxious", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "D", answer: "delightful", chinese_answer: "令人高兴的", chinese_romanization: "lìng rén gāoxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obnoxious' means extremely unpleasant or offensive." +
            "<br><br>" +
            "(A) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(B) 'pleasing' means satisfying or appealing." +
            "<br><br>" +
            "(D) 'delightful' means causing delight; charming.",
        chinese_explanation: "(C) '令人厌恶的' 意味着极其令人不快或冒犯的。" +
            "<br><br>" +
            "(A) '芳香的' 意味着有愉快或甜美的气味。" +
            "<br><br>" +
            "(B) '令人愉快的' 意味着令人满意或吸引人的。" +
            "<br><br>" +
            "(D) '令人高兴的' 意味着带来喜悦的；迷人的."
    },
    {
        id: 6,
        question: "The foundation's __________ support for local arts programs has greatly enriched the community's cultural life.",
        chinese_question: "基金会对本地艺术项目的 __________ 支持极大地丰富了社区的文化生活。",
        answers: [
            { option: "A", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
            { option: "B", answer: "munificent", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "D", answer: "restricted", chinese_answer: "受限的", chinese_romanization: "shòuxiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'munificent' means larger or more generous than is usual or necessary." +
            "<br><br>" +
            "(A) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(C) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'restricted' means limited in extent, number, scope, or action.",
        chinese_explanation: "(B) '慷慨的' 意味着比平常或必要的大或更慷慨的。" +
            "<br><br>" +
            "(A) '稀疏的' 意味着稀疏或分散的。" +
            "<br><br>" +
            "(C) '有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(D) '受限的' 意味着在范围、数量、范围或行动上受到限制的."
    },
    {
        id: 7,
        question: "Her plan to climb the corporate ladder quickly was __________ given her determination and skill set.",
        chinese_question: "鉴于她的决心和技能，她迅速晋升公司的计划是 __________ 的。",
        answers: [
            { option: "A", answer: "impossible", chinese_answer: "不可能", chinese_romanization: "bù kěnéng" },
            { option: "B", answer: "unlikely", chinese_answer: "不太可能", chinese_romanization: "bù tài kěnéng" },
            { option: "C", answer: "impractical", chinese_answer: "不切实际", chinese_romanization: "bù qiè shíjì" },
            { option: "D", answer: "practicable", chinese_answer: "可行", chinese_romanization: "kěxíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'practicable' means capable of being done or put into practice successfully." +
            "<br><br>" +
            "(A) 'impossible' means not able to occur or be done." +
            "<br><br>" +
            "(B) 'unlikely' means not likely to happen." +
            "<br><br>" +
            "(C) 'impractical' means not sensible or realistic.",
        chinese_explanation: "(D) '可行' 意味着能够成功地完成或付诸实践。" +
            "<br><br>" +
            "(A) '不可能' 意味着不能发生或完成。" +
            "<br><br>" +
            "(B) '不太可能' 意味着不太可能发生。" +
            "<br><br>" +
            "(C) '不切实际' 意味着不合理或不现实。"
    },
    {
        id: 8,
        question: "Her __________ silence made everyone in the room uncomfortable.",
        chinese_question: "她 __________ 的沉默让房间里的每个人都感到不舒服。",
        answers: [
            { option: "A", answer: "natural", chinese_answer: "自然的", chinese_romanization: "zìrán de" },
            { option: "B", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "easy", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'awkward' means causing difficulty; hard to deal with; uncomfortable." +
            "<br><br>" +
            "(A) 'natural' means existing in or derived from nature; not made or caused by humankind." +
            "<br><br>" +
            "(C) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(B) '尴尬的' 意味着造成困难；难以处理；不舒服的。" +
            "<br><br>" +
            "(A) '自然的' 意味着存在于自然界或源自自然；不是人类制造或引起的。" +
            "<br><br>" +
            "(C) '自信的' 意味着对自己有信心或表现出自信；自信的。" +
            "<br><br>" +
            "(D) '轻松的' 意味着无需努力就能完成；呈现出很少的困难。"
    },
    {
        id: 9,
        question: "She came from __________ beginnings but worked hard to achieve her dreams.",
        chinese_question: "她来自 __________ 的背景，但通过努力工作实现了她的梦想。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "卑微", chinese_romanization: "bēiwēi" },
            { option: "B", answer: "privileged", chinese_answer: "特权", chinese_romanization: "tèquán" },
            { option: "C", answer: "wealthy", chinese_answer: "富有", chinese_romanization: "fùyǒu" },
            { option: "D", answer: "extravagant", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(B) 'privileged' means having special rights, advantages, or immunities." +
            "<br><br>" +
            "(C) 'wealthy' means having a great deal of money, resources, or assets." +
            "<br><br>" +
            "(D) 'extravagant' means lacking restraint in spending money or using resources.",
        chinese_explanation: "(A) '卑微' 意味着对自己的重要性有或表现出适度或低估。" +
            "<br><br>" +
            "(B) '特权' 意味着有特殊的权利、优势或豁免。" +
            "<br><br>" +
            "(C) '富有' 意味着拥有大量金钱、资源或资产。" +
            "<br><br>" +
            "(D) '奢侈' 意味着在花钱或使用资源方面缺乏约束。"
    },
    {
        id: 10,
        question: "She helped him with his project, but he couldn't shake the feeling that she had an __________ agenda.",
        chinese_question: "她帮他做项目，但他无法摆脱她有一个 __________ 议程的感觉。",
        answers: [
            { option: "A", answer: "ulterior", chinese_answer: "隐秘的", chinese_romanization: "yǐnmì de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dàng de" },
            { option: "D", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ulterior' means existing beyond what is obvious or admitted; intentionally hidden." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(A) '隐秘的' 意味着存在于明显或承认之外的；故意隐藏的。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(C) '直截了当的' 意味着简单易做或理解的。" +
            "<br><br>" +
            "(D) '真诚的' 意味着没有虚伪或欺骗；源于真实情感的。"
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
