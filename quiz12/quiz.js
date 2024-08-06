// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ attitude towards the rules, like constantly breaking curfew and ignoring dress codes, got her into trouble often.",
        chinese_question: "她对规则的__________态度，比如经常违反宵禁和无视着装规定，经常让她陷入麻烦。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "B", answer: "impudent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "C", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "D", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impudent' means not showing due respect for another person; impertinent. Figuratively, it can mean being shamelessly bold." + 
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(B) '无礼的'一词意味着没有对他人表现出应有的尊重；无礼的。比喻地，它可以表示无耻地大胆。" + 
            "<br><br>" +
            "(A) '尊重的' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(C) '礼貌的' 意味着有或表现出对他人尊重和体贴的行为。" +
            "<br><br>" +
            "(D) '有礼貌的' 意味着在行为上有礼貌、尊重或体贴的。"
    },
    {
        id: 2,
        question: "His dedication to his work was __________ in the long hours he spent at the office.",
        chinese_question: "他对工作的奉献在他长时间的办公时间中是 __________ 的。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
            { option: "C", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "apparent", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'apparent' means clearly visible or understood; obvious." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'obscure' means not discovered or known about; uncertain.",
        chinese_explanation: "(D) '显然的' 意味着清晰可见或理解的；明显的。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着被隐藏；隐蔽的。" +
            "<br><br>" +
            "(B) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着未被发现或了解的；不确定的。"
    },
    {
        id: 3,
        question: "The artist's __________ talent was evident in every piece of his work, attracting admirers from around the world.",
        chinese_question: "这位艺术家的 __________ 才华在他的每一件作品中都显而易见，吸引了来自世界各地的仰慕者。",
        answers: [
            { option: "A", answer: "outstanding", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "B", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "C", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'outstanding' means exceptionally good or impressive." +
            "<br><br>" +
            "(B) 'mediocre' means of only average quality; not very good." +
            "<br><br>" +
            "(C) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '杰出' 意味着特别好或令人印象深刻。" +
            "<br><br>" +
            "(B) '平庸' 意味着质量一般；不太好。" +
            "<br><br>" +
            "(C) '隐藏' 意味着藏在视线之外；隐藏的。" +
            "<br><br>" +
            "(D) '微不足道' 意味着太小或不重要而不值得考虑。"
    },
    {
        id: 4,
        question: "His __________ hair gave him a wild and carefree look.",
        chinese_question: "他__________的头发使他看起来狂野且无忧无虑。",
        answers: [
            { option: "A", answer: "neat", chinese_answer: "整洁的", chinese_romanization: "zhěngjié de" },
            { option: "B", answer: "unruly", chinese_answer: "不羁的", chinese_romanization: "bù jī de" },
            { option: "C", answer: "tidy", chinese_answer: "整齐的", chinese_romanization: "zhěngqí de" },
            { option: "D", answer: "groomed", chinese_answer: "打理好的", chinese_romanization: "dǎlǐ hǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unruly' means disorderly and disruptive and not amenable to discipline or control." +
            "<br><br>" +
            "(A) 'neat' means arranged in an orderly, tidy way." +
            "<br><br>" +
            "(C) 'tidy' means arranged neatly and in order." +
            "<br><br>" +
            "(D) 'groomed' means clean, tidy, and well cared for.",
        chinese_explanation: "(B) '不羁的' 意味着无纪律的和破坏性的，不服从纪律或控制的。" +
            "<br><br>" +
            "(A) '整洁的' 意味着以有序、整洁的方式排列的。" +
            "<br><br>" +
            "(C) '整齐的' 意味着整齐且有条理地排列的。" +
            "<br><br>" +
            "(D) '打理好的' 意味着干净、整洁且被照顾得很好的。"
    },
    {
        id: 5,
    question: "His __________ spending habits, like buying luxury cars and expensive jewelry on a whim, quickly drained his bank account.",
    chinese_question: "他 __________ 的消费习惯，比如心血来潮购买豪车和昂贵的珠宝，很快耗尽了他的银行账户。",
    answers: [
            { option: "A", answer: "outrageous", chinese_answer: "骇人的", chinese_romanization: "hàirén de" },
            { option: "B", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "C", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'outrageous' means shockingly bad or excessive; very bold, unusual, and startling." + 
        "<br><br>" + 
        "(B) 'frugal' means sparing or economical with regard to money or food." + 
        "<br><br>" + 
        "(C) 'moderate' means average in amount, intensity, quality, or degree." + 
        "<br><br>" + 
        "(D) 'cautious' means careful to avoid potential problems or dangers.",
    chinese_explanation: "(A) '骇人的' 意味着令人震惊的坏或过度的；非常大胆、不寻常和令人吃惊的。" +
        "<br><br>" +
        "(B) '节俭的' 意味着在花钱或食物方面节省或经济的。" +
        "<br><br>" +
        "(C) '适度的' 意味着数量、强度、质量或程度上的平均。" +
        "<br><br>" +
        "(D) '谨慎的' 意味着小心避免潜在的问题或危险的."
    },
    {
        id: 6,
        question: "As a mediator, it's crucial to remain __________ and not take sides in the dispute.",
        chinese_question: "作为调解人，保持 __________ 并不偏袒争端中的任何一方是至关重要的。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "B", answer: "impartial", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
            { option: "C", answer: "partial", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "D", answer: "one-sided", chinese_answer: "单方面", chinese_romanization: "dān fāngmiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impartial' means treating all rivals or disputants equally; fair and just." + 
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(C) 'partial' means favoring one side in a dispute above the other; biased." +
            "<br><br>" +
            "(D) 'one-sided' means unfairly giving or dealing with only one side of a contentious issue or argument.",
        chinese_explanation: "(B) '公正' 意味着平等地对待所有对手或争论者；公平和公正。" + 
            "<br><br>" +
            "(A) '偏见' 意味着对某人或某事不公平地持有成见。" +
            "<br><br>" +
            "(C) '偏袒' 意味着在争端中偏袒一方；有偏见的。" +
            "<br><br>" +
            "(D) '单方面' 意味着不公平地只涉及争议或争论的一个方面。"
    },
    {
        id: 7,
        question: "Attendance at the meeting is __________ for all employees, and failure to attend will result in disciplinary action.",
        chinese_question: "所有员工的出席是 __________ 的，不参加将导致纪律处分。",
        answers: [
            { option: "A", answer: "mandatory", chinese_answer: "强制性的", chinese_romanization: "qiángzhì xìng de" },
            { option: "B", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "C", answer: "voluntary", chinese_answer: "自愿的", chinese_romanization: "zìyuàn de" },
            { option: "D", answer: "discretionary", chinese_answer: "自主决定的", chinese_romanization: "zìzhǔ juédìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mandatory' means required by law or rules; compulsory." + 
            "<br><br>" +
            "(B) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'voluntary' means done, given, or acting of one's own free will." +
            "<br><br>" +
            "(D) 'discretionary' means left to individual choice or judgment.",
        chinese_explanation: "(A) '强制性的' 意味着法律或规则要求的；强制的。" + 
            "<br><br>" +
            "(B) '可选的' 意味着可以选择但不是强制的。" +
            "<br><br>" +
            "(C) '自愿的' 意味着出于自愿的。" +
            "<br><br>" +
            "(D) '自主决定的' 意味着留给个人选择或判断的。"
    },
    {
        id: 8,
        question: "The __________ events leading up to the revolution were critical in understanding the causes of the conflict.",
        chinese_question: "导致革命的 __________ 事件对于理解冲突的原因至关重要。",
        answers: [
            { option: "A", answer: "subsequent", chinese_answer: "随后的", chinese_romanization: "suíhòu de" },
            { option: "B", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" },
            { option: "D", answer: "antecedent", chinese_answer: "先前的", chinese_romanization: "xiānqián de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'antecedent' means preceding in time or order; previous or preexisting." +
                "<br><br>" +
                "(A) 'subsequent' means coming after something in time; following." +
                "<br><br>" +
                "(B) 'unrelated' means not connected; distinct." +
                "<br><br>" +
                "(C) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(D) '先前的' 一词意味着时间或顺序上在前的；先前存在的。" +
                "<br><br>" +
                "(A) '随后的' 意味着时间上在某事之后的；接着的。" +
                "<br><br>" +
                "(B) '无关的' 意味着没有连接的；独特的。" +
                "<br><br>" +
                "(C) '不相关的' 意味着与某事没有连接或相关的。"
    },
    {
        id: 9,
        question: "His __________ decision-making skills, like considering all possible outcomes and listening to others' opinions, made him an excellent leader.",
        chinese_question: "他 __________ 的决策能力，比如考虑所有可能的结果和听取他人的意见，使他成为一名优秀的领导者。",
        answers: [
            { option: "A", answer: "mature", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
            { option: "B", answer: "immature", chinese_answer: "不成熟", chinese_romanization: "bù chéngshú" },
            { option: "C", answer: "juvenile", chinese_answer: "青少年", chinese_romanization: "qīngshàonián" },
            { option: "D", answer: "inexperienced", chinese_answer: "缺乏经验", chinese_romanization: "quēfá jīngyàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mature' means having or showing the mental and emotional qualities of an adult." +
            "<br><br>" +
            "(B) 'immature' means not fully developed." +
            "<br><br>" +
            "(C) 'juvenile' means relating to young people." +
            "<br><br>" +
            "(D) 'inexperienced' means having little knowledge or experience of a particular thing.",
        chinese_explanation: "(A) '成熟' 意味着具有或表现出成年人的心理和情感素质。" +
            "<br><br>" +
            "(B) '不成熟' 意味着尚未完全发展。" +
            "<br><br>" +
            "(C) '青少年' 意味着与年轻人有关。" +
            "<br><br>" +
            "(D) '缺乏经验' 意味着对某一特定事物知之甚少或经验不足。"
    },
    {
        id: 10,
    question: "The new technology made it __________ to complete the project ahead of schedule because it streamlined the processes and increased efficiency.",
    chinese_question: "新技术使提前完成项目成为__________的，因为它简化了流程并提高了效率。",
    answers: [
        { option: "A", answer: "impossible", chinese_answer: "不可能的", chinese_romanization: "bù kěnéng de" },
        { option: "B", answer: "unworkable", chinese_answer: "不可行的", chinese_romanization: "bù kě xíng de" },
        { option: "C", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
        { option: "D", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'feasible' means possible to do easily or conveniently. Figuratively, it can mean being achievable or practical." +
        "<br><br>" +
        "(A) 'impossible' means not able to occur, exist, or be done." +
        "<br><br>" +
        "(B) 'unworkable' means not able to function or be carried out successfully." +
        "<br><br>" +
        "(D) 'impractical' means not adapted for use or action; not sensible or realistic.",
    chinese_explanation: "(C) '可行的' 一词意味着容易或方便地做的。比喻地，它可以表示可实现的或实际的。" +
        "<br><br>" +
        "(A) '不可能的' 意味着不能发生、存在或完成的。" +
        "<br><br>" +
        "(B) '不可行的' 意味着不能成功地运作或执行的。" +
        "<br><br>" +
        "(D) '不切实际的' 意味着不适用于使用或行动的；不明智或不现实的。"
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
