// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She began to __________ under the strict rules imposed by her parents, feeling increasingly frustrated and constrained.",
    chinese_question: "在父母施加的严格规则下，她开始 __________，感到越来越沮丧和受限。",
    answers: [
        { option: "A", answer: "thrive", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" },
        { option: "B", answer: "chafe", chinese_answer: "感到烦恼", chinese_romanization: "gǎndào fánnǎo" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'chafe' means to feel irritation or impatience under restrictive conditions." +
        "<br><br>" +
        "(A) 'thrive' means to grow or develop well." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'enjoy' means to take delight or pleasure in something.",
    chinese_explanation: "(B) '感到烦恼' 意味着在限制性条件下感到烦恼或不耐烦。" +
        "<br><br>" +
        "(A) '茁壮成长' 意味着生长或发展得很好。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '享受' 意味着从某事中获得乐趣或快乐。"
    },
    {
        id: 2,
        question: "During the interview, she began to __________ when asked about her previous job experience because she couldn't recall specific details and felt unprepared.",
        chinese_question: "在面试中，当被问及她的以前的工作经历时，她开始 __________，因为她无法回忆起具体细节并感到准备不足。",
        answers: [
            { option: "A", answer: "thrive", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" },
            { option: "B", answer: "excel", chinese_answer: "擅长", chinese_romanization: "shàncháng" },
            { option: "C", answer: "glow", chinese_answer: "发光", chinese_romanization: "fāguāng" },
            { option: "D", answer: "flounder", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'flounder' used figuratively means to struggle or have difficulty." +
            "<br><br>" +
            "(A) 'thrive' means to grow or develop well or vigorously." +
            "<br><br>" +
            "(B) 'excel' means to be exceptionally good at or proficient in an activity or subject." +
            "<br><br>" +
            "(C) 'glow' means to give out a steady light.",
        chinese_explanation: "(D) '挣扎' 在比喻意义上指困难或挣扎。" +
            "<br><br>" +
            "(A) '兴旺' 意味着生长或发展良好或蓬勃发展。" +
            "<br><br>" +
            "(B) '擅长' 意味着在某一活动或学科上非常出色或熟练。" +
            "<br><br>" +
            "(C) '发光' 意味着发出稳定的光。"
    },
    {
        id: 3,
    question: "She hoped to __________ her colleague's anger by explaining the misunderstanding and offering a sincere apology.",
    chinese_question: "她希望通过解释误会并真诚道歉来 __________ 同事的愤怒。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "mollify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "C", answer: "provoke", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "D", answer: "sustain", chinese_answer: "维持", chinese_romanization: "wéichí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'mollify' means to soothe or calm someone's anger or anxiety." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(C) 'provoke' means to stimulate or incite someone to feel anger or irritation." +
        "<br><br>" +
        "(D) 'sustain' means to support or maintain.",
    chinese_explanation: "(B) '安抚' 意味着安慰或平息某人的愤怒或焦虑。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(C) '激怒' 意味着刺激或煽动某人感到愤怒或恼火。" +
        "<br><br>" +
        "(D) '维持' 意味着支持或维持。"
    },
    {
        id: 4,
        question: "The invading army began to __________ the village, taking everything of value like gold, livestock, and crops.",
        chinese_question: "入侵的军队开始 __________ 村庄，抢走所有有价值的东西，如黄金、牲畜和庄稼。",
        answers: [
                { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "B", answer: "despoil", chinese_answer: "掠夺", chinese_romanization: "luèduó" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'despoil' means to steal or violently remove valuable or attractive possessions from; plunder." +
                "<br><br>" +
                "(A) 'protect' means to keep safe from harm or injury." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'repair' means to fix or mend something.",
        chinese_explanation: "(B) '掠夺' 意味着偷窃或暴力移除有价值或吸引人的财物；掠夺。" +
                "<br><br>" +
                "(A) '保护' 意味着保护免受伤害或损害。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '修理' 意味着修补或修理某物。"
    },
    {
        id: 5,
    question: "The politician tried to __________ his way into the voters' hearts with promises of change and a better future.",
    chinese_question: "政治家试图通过承诺改变和更美好的未来来 __________ 选民的心。",
    answers: [
        { option: "A", answer: "chisel", chinese_answer: "巧取", chinese_romanization: "qiǎo qǔ" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "D", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chisel' means to cleverly or deceitfully gain favor, often used figuratively." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'simplify' means to make something simpler or easier to do or understand." +
        "<br><br>" +
        "(D) 'complicate' means to make something more difficult or confusing.",
    chinese_explanation: "(A) '巧取' 意味着巧妙或欺骗性地获得好感，通常用作比喻。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '简化' 意味着使某事更简单或更容易做或理解。" +
        "<br><br>" +
        "(D) '复杂化' 意味着使某事更困难或更混乱。"
    },
    {
        id: 6,
        question: "The chef’s assistant accidentally __________ the recipe, ruining the dish and making it taste awful and unappetizing.",
        chinese_question: "厨师的助手不小心 __________ 了食谱，毁了这道菜，使其味道糟糕且毫无食欲。",
        answers: [
            { option: "A", answer: "perfected", chinese_answer: "完善", chinese_romanization: "wánshàn" },
            { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "simplified", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "bungled", chinese_answer: "搞砸", chinese_romanization: "gǎo zá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bungled' means to carry out a task clumsily or incompetently." +
            "<br><br>" +
            "(A) 'perfected' means to make something completely free from faults or defects." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'simplified' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(D) '搞砸' 意味着笨拙或无能地完成一项任务。" +
            "<br><br>" +
            "(A) '完善' 意味着使某物完全没有错误或缺陷。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "The rapid advancements in technology __________ the older generation because they struggle with using smartphones, navigating the internet and understanding modern gadgets.",
        chinese_question: "科技的快速进步让老一辈人 __________，因为他们难以使用智能手机、浏览互联网和理解现代设备。",
        answers: [
        { option: "A", answer: "boggle", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "B", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'boggle' means to overwhelm or bewilder." +
            "<br><br>" +
            "(B) 'aid' means to help or support." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '困惑' 意味着使不知所措或迷惑。" +
            "<br><br>" +
            "(B) '帮助' 意味着帮助或支持。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 8,
        question: "The manager __________ his team to complete the project before the deadline because they were falling behind schedule and needed to meet client expectations.",
        chinese_question: "经理 __________ 他的团队在截止日期前完成项目，因为他们落后于计划，需要满足客户的期望。",
        answers: [
                { option: "A", answer: "enjoined", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
                { option: "B", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "postponed", chinese_answer: "推迟", chinese_romanization: "tuīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enjoined' means to instruct or urge someone to do something." +
            "<br><br>" +
            "(B) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'postponed' means to arrange for something to take place at a time later than that first scheduled.",
        chinese_explanation: "(A) '命令' 意味着指示或敦促某人做某事。" +
            "<br><br>" +
            "(B) '劝阻' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '推迟' 意味着安排某事在预定时间之后进行。"
    },
    {
        id: 9,
    question: "The pristine waters of the lake were __________ by the illegal dumping of waste, making it polluted and unsafe for swimming.",
    chinese_question: "湖泊的清澈水域因非法倾倒垃圾而被 __________，使其受到污染且不适合游泳。",
    answers: [
        { option: "A", answer: "preserved", chinese_answer: "保持", chinese_romanization: "bǎochí" },
        { option: "B", answer: "sullied", chinese_answer: "玷污", chinese_romanization: "diànwū" },
        { option: "C", answer: "cleaned", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
        { option: "D", answer: "admired", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sullied' means to damage the purity or integrity of; defile." +
        "<br><br>" +
        "(A) 'preserved' means to maintain something in its original or existing state." +
        "<br><br>" +
        "(C) 'cleaned' means to remove dirt, marks, or stains from something." +
        "<br><br>" +
        "(D) 'admired' means to regard with respect or warm approval.",
    chinese_explanation: "(B) '玷污' 意味着损害纯洁性或完整性；玷污。" +
        "<br><br>" +
        "(A) '保持' 意味着保持某物的原始或现有状态。" +
        "<br><br>" +
        "(C) '清洁' 意味着去除某物上的污垢、痕迹或污渍。" +
        "<br><br>" +
        "(D) '钦佩' 意味着以尊重或热情的赞同对待。"
    },
    {
        id: 10,
        question: "Given the thorough analysis and unanimous support, she had no reason to __________ the decision and raise doubts or objections as it was clearly in everyone's best interest.",
        chinese_question: "鉴于详尽的分析和一致的支持，她没有理由 __________ 这个决定并提出疑问或反对，因为这显然符合每个人的最佳利益。",
        answers: [
                { option: "A", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
                { option: "B", answer: "demur", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'demur' used figuratively means to raise doubts or objections." +
                "<br><br>" +
                "(A) 'agree' means to have the same opinion about something." +
                "<br><br>" +
                "(C) 'support' means to bear all or part of the weight of something." +
                "<br><br>" +
                "(D) 'promote' means to further the progress of something.",
        chinese_explanation: "(B) '反对' 在比喻意义上指提出疑问或反对。" +
                "<br><br>" +
                "(A) '同意' 意味着对某事持相同意见。" +
                "<br><br>" +
                "(C) '支持' 意味着支撑某物的全部或部分重量。" +
                "<br><br>" +
                "(D) '促进' 意味着促进某事的进展。"
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
