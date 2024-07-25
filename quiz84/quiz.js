// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His constant lies led to a growing __________ in their relationship.",
        chinese_question: "他不断的谎言导致他们关系中的 __________ 不断增加。",
        answers: [
            { option: "A", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "mistrust", chinese_answer: "不信任", chinese_romanization: "bù xìnrèn" },
            { option: "D", answer: "peace", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mistrust' means lack of trust or confidence." +
                "<br><br>" +
                "(A) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something." +
                "<br><br>" +
                "(B) 'harmony' means the state of being in agreement or concord." +
                "<br><br>" +
                "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(C) '不信任' 意味着缺乏信任或信心。" +
                "<br><br>" +
                "(A) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。" +
                "<br><br>" +
                "(B) '和谐' 意味着处于一致或和睦的状态。" +
                "<br><br>" +
                "(D) '平静' 意味着没有干扰的自由；宁静。"
    },
    {
        id: 2,
        question: "The environmental group's report highlighted the __________ of corporations exploiting natural resources without considering the long-term consequences.",
        chinese_question: "环保组织的报告强调了公司在开发自然资源时不考虑长期后果的 __________。",
        answers: [
                { option: "A", answer: "altruism", chinese_answer: "利他主义", chinese_romanization: "lìtā zhǔyì" },
                { option: "B", answer: "rapacity", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
                { option: "C", answer: "stewardship", chinese_answer: "管理", chinese_romanization: "guǎnlǐ" },
                { option: "D", answer: "sustainability", chinese_answer: "可持续性", chinese_romanization: "kě chíxù xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rapacity' means aggressive greed." +
                "<br><br>" +
                "(A) 'altruism' means the belief in or practice of disinterested and selfless concern for the well-being of others." +
                "<br><br>" +
                "(C) 'stewardship' means the job of supervising or taking care of something." +
                "<br><br>" +
                "(D) 'sustainability' means the ability to be maintained at a certain rate or level.",
        chinese_explanation: "(B) '贪婪'一词意味着侵略性的贪婪。" +
                "<br><br>" +
                "(A) '利他主义' 意味着无私关注他人福祉的信念或实践。" +
                "<br><br>" +
                "(C) '管理' 意味着监督或照顾某事的工作。" +
                "<br><br>" +
                "(D) '可持续性' 意味着以某种速度或水平保持的能力。"
    },
    {
        id: 3,
        question: "The company's decision to cut benefits without warning caused significant __________ among the employees.",
        chinese_question: "公司在没有警告的情况下削减福利的决定引起了员工们的极大 __________。",
        answers: [
                { option: "A", answer: "ire", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
                { option: "B", answer: "contentment", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
                { option: "C", answer: "relief", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
                { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ire' means anger." +
                "<br><br>" +
                "(B) 'contentment' means a state of happiness and satisfaction." +
                "<br><br>" +
                "(C) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
                "<br><br>" +
                "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(A) '愤怒' 意味着愤怒。" +
                "<br><br>" +
                "(B) '满足' 意味着幸福和满足的状态。" +
                "<br><br>" +
                "(C) '轻松' 意味着在解除焦虑或痛苦后的放心和放松感觉。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 4,
question: "The billionaire was known for his __________, often donating large sums of money to various charities.",
chinese_question: "这位亿万富翁因他的 __________ 而闻名，经常向各种慈善机构捐赠巨款。",
answers: [
    { option: "A", answer: "largesse", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
    { option: "B", answer: "stinginess", chinese_answer: "吝啬", chinese_romanization: "lìnsè" },
    { option: "C", answer: "greed", chinese_answer: "贪婪", chinese_romanization: "tānlán" },
    { option: "D", answer: "frugality", chinese_answer: "节俭", chinese_romanization: "jiéjiǎn" }
],
correctAnswer: "A",
explanation: "(A) 'largesse' means generosity in bestowing money or gifts upon others." +
    "<br><br>" +
    "(B) 'stinginess' means unwillingness to spend money; meanness." +
    "<br><br>" +
    "(C) 'greed' means intense and selfish desire for something, especially wealth or power." +
    "<br><br>" +
    "(D) 'frugality' means the quality of being economical with money or food; thriftiness.",
chinese_explanation: "(A) '慷慨' 意味着慷慨地赠送金钱或礼物给他人。" +
    "<br><br>" +
    "(B) '吝啬' 意味着不愿意花钱；吝啬。" +
    "<br><br>" +
    "(C) '贪婪' 意味着对某事物的强烈和自私的欲望，尤其是财富或权力。" +
    "<br><br>" +
    "(D) '节俭' 意味着在金钱或食物上节约的品质；节俭。"
    },
    {
        id: 5,
        question: "The __________ of affordable housing in the city has made it difficult for many families to find suitable places to live.",
        chinese_question: "该市 __________ 的经济适用房使许多家庭难以找到合适的住所。",
        answers: [
                { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
                { option: "B", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "C", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
                { option: "D", answer: "plenty", chinese_answer: "足够", chinese_romanization: "zúgòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paucity' means the presence of something in only small or insufficient quantities or amounts; scarcity." +
                "<br><br>" +
                "(A) 'abundance' means a very large quantity of something." +
                "<br><br>" +
                "(C) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
                "<br><br>" +
                "(D) 'plenty' means a large or sufficient amount or quantity; more than enough.",
        chinese_explanation: "(B) '缺乏'一词意味着只有少量或不足数量的东西的存在；稀缺。" +
                "<br><br>" +
                "(A) '丰富' 意味着非常大量的东西。" +
                "<br><br>" +
                "(C) '过剩' 意味着在满足要求后剩余的东西；生产或供应过剩。" +
                "<br><br>" +
                "(D) '足够' 意味着大量或足够数量的东西；足够多。"
}
    ,
    {
        id: 6,
    question: "His __________ prevented him from acknowledging his mistakes, which only exacerbated the situation.",
    chinese_question: "他的 __________ 使他无法承认自己的错误，这只会使情况更加恶化。",
    answers: [
            { option: "A", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "B", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" },
            { option: "C", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" },
            { option: "D", answer: "hubris", chinese_answer: "傲慢", chinese_romanization: "àomàn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'hubris' figuratively means excessive pride or self-confidence, especially as it leads to negative consequences." +
            "<br><br>" +
            "(A) 'humility' means a modest or low view of one's own importance." +
            "<br><br>" +
            "(B) 'insight' means the capacity to gain an accurate and deep understanding of someone or something." +
            "<br><br>" +
            "(C) 'flexibility' means the quality of bending easily without breaking.",
    chinese_explanation: "(D) '傲慢' 在此语境下意指过度的自豪或自信，特别是导致负面后果。" +
            "<br><br>" +
            "(A) '谦逊' 意味着对自己重要性的谦虚或低调看法。" +
            "<br><br>" +
            "(B) '洞察力' 意味着获得准确和深入理解某人或某事的能力。" +
            "<br><br>" +
            "(C) '灵活性' 意味着在不破裂的情况下易于弯曲的质量。"
    },
    {
        id: 7,
        question: "The spy, pretending to be a harmless tourist, used __________ to gather information without arousing suspicion.",
        chinese_question: "间谍，假装是一个无害的游客，使用 __________ 收集信息而不引起怀疑。",
        answers: [
                { option: "A", answer: "subterfuge", chinese_answer: "诡计", chinese_romanization: "guǐjì" },
                { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
                { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "D", answer: "candor", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subterfuge' means deceit used in order to achieve one's goal." +
                "<br><br>" +
                "(B) 'honesty' means the quality of being truthful and free of deceit." +
                "<br><br>" +
                "(C) 'transparency' means the quality of being easy to see through." +
                "<br><br>" +
                "(D) 'candor' means the quality of being open and honest in expression.",
        chinese_explanation: "(A) '诡计' 意味着为了达到目的而使用的欺骗。" +
                "<br><br>" +
                "(B) '诚实' 意味着真实和无欺骗的品质。" +
                "<br><br>" +
                "(C) '透明' 意味着容易看穿的品质。" +
                "<br><br>" +
                "(D) '坦率' 意味着在表达上开放和诚实的品质。"
    },
    {
        id: 8,
    question: "The leader's __________ blinded him to the benefits of international cooperation and diplomacy, isolating the country from its allies.",
    chinese_question: "领导人的 __________ 使他看不到国际合作和外交的好处，使国家与盟友隔绝。",
    answers: [
            { option: "A", answer: "realism", chinese_answer: "现实主义", chinese_romanization: "xiànshí zhǔyì" },
            { option: "B", answer: "pragmatism", chinese_answer: "实用主义", chinese_romanization: "shíyòng zhǔyì" },
            { option: "C", answer: "altruism", chinese_answer: "利他主义", chinese_romanization: "lìtā zhǔyì" },
            { option: "D", answer: "jingoism", chinese_answer: "沙文主义", chinese_romanization: "shāwén zhǔyì" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'jingoism' figuratively means extreme patriotism, especially in the form of aggressive or warlike foreign policy." +
            "<br><br>" +
            "(A) 'realism' means the attitude or practice of accepting a situation as it is and being prepared to deal with it accordingly." +
            "<br><br>" +
            "(B) 'pragmatism' means a practical approach to problems and affairs." +
            "<br><br>" +
            "(C) 'altruism' means the belief in or practice of disinterested and selfless concern for the well-being of others.",
    chinese_explanation: "(D) '沙文主义' 在此语境下意指极端爱国主义，特别是以好战或好斗的外交政策为表现形式。" +
            "<br><br>" +
            "(A) '现实主义' 意味着接受现实情况并准备相应处理的态度或做法。" +
            "<br><br>" +
            "(B) '实用主义' 意味着对问题和事务的实际方法。" +
            "<br><br>" +
            "(C) '利他主义' 意味着对他人福祉的无私关注的信仰或实践。"
    },
    {
        id: 9,
        question: "The employee's __________ in refusing to follow the new procedures led to his termination.",
        chinese_question: "员工拒绝遵守新程序的 __________ 导致了他的解雇。",
        answers: [
                { option: "A", answer: "compliance", chinese_answer: "服从", chinese_romanization: "fúcóng" },
                { option: "B", answer: "contumacy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
                { option: "C", answer: "diligence", chinese_answer: "勤勉", chinese_romanization: "qínmiǎn" },
                { option: "D", answer: "punctuality", chinese_answer: "守时", chinese_romanization: "shǒushí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contumacy' means stubborn refusal to obey or comply with authority." +
                "<br><br>" +
                "(A) 'compliance' means the action or fact of complying with a wish or command." +
                "<br><br>" +
                "(C) 'diligence' means careful and persistent work or effort." +
                "<br><br>" +
                "(D) 'punctuality' means the quality or habit of being on time.",
        chinese_explanation: "(B) '违抗' 意味着顽固拒绝服从或遵守权威。" +
                "<br><br>" +
                "(A) '服从' 意味着遵守意愿或命令的行动或事实。" +
                "<br><br>" +
                "(C) '勤勉' 意味着仔细和持之以恒的工作或努力。" +
                "<br><br>" +
                "(D) '守时' 意味着准时的质量或习惯。"
    },
    {
        id: 10,
        question: "As a __________ for the charity organization, she coordinated efforts between donors and beneficiaries.",
        chinese_question: "作为慈善组织的 __________，她协调了捐赠者和受益者之间的努力。",
        answers: [
                { option: "A", answer: "consultant", chinese_answer: "顾问", chinese_romanization: "gùwèn" },
                { option: "B", answer: "liaison", chinese_answer: "联络员", chinese_romanization: "liánluòyuán" },
                { option: "C", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎozhě" },
                { option: "D", answer: "organizer", chinese_answer: "组织者", chinese_romanization: "zǔzhī zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'liaison' means communication or cooperation that facilitates a close working relationship between people or organizations." +
                "<br><br>" +
                "(A) 'consultant' means a person who provides expert advice professionally." +
                "<br><br>" +
                "(C) 'advocate' means a person who publicly supports or recommends a particular cause or policy." +
                "<br><br>" +
                "(D) 'organizer' means a person who arranges and plans events or activities.",
        chinese_explanation: "(B) '联络员'一词意味着促进人或组织之间紧密工作关系的沟通或合作。" +
                "<br><br>" +
                "(A) '顾问' 意味着专业提供专家建议的人。" +
                "<br><br>" +
                "(C) '倡导者' 意味着公开支持或推荐特定事业或政策的人。" +
                "<br><br>" +
                "(D) '组织者' 意味着安排和计划活动或活动的人。"
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
