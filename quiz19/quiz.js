// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her contributions to the project were __________, significantly advancing its progress by providing essential insights and innovative solutions.",
        chinese_question: "她对项目的贡献是 __________ 的，通过提供重要的见解和创新的解决方案显著推进了项目进展。",
        answers: [
            { option: "A", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "substantive", chinese_answer: "实质性的", chinese_romanization: "shízhìxìng de" },
            { option: "D", answer: "negligible", chinese_answer: "可忽略不计的", chinese_romanization: "kě hūlüè bù jì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'substantive' means having a firm basis in reality and therefore important, meaningful, or considerable." +
            "<br><br>" +
            "(A) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at the surface." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(C) '实质性的' 意味着在现实中有坚实基础的，因此是重要、有意义或相当大的。" +
            "<br><br>" +
            "(A) '最小的' 意味着数量、程度或程度的最低值。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面的。" +
            "<br><br>" +
            "(D) '可忽略不计的' 意味着如此小或不重要以至于不值得考虑的。"
    },
    {
        id: 2,
    question: "She took a __________ approach to her studies, dedicating long hours to ensure she fully understood the material.",
    chinese_question: "她对学习采取了 __________ 的态度，花费了很长时间确保自己完全理解了材料。",
    answers: [
        { option: "A", answer: "serious", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
        { option: "B", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "C", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
        { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'serious' means showing deep thought or concentration; focused and dedicated." +
        "<br><br>" +
        "(B) 'casual' means relaxed and unconcerned." +
        "<br><br>" +
        "(C) 'negligent' means failing to take proper care in doing something." +
        "<br><br>" +
        "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
    chinese_explanation: "(A) '认真的' 意味着表现出深思熟虑或专注；专注和投入的。" +
        "<br><br>" +
        "(B) '随意的' 意味着放松和不关心的。" +
        "<br><br>" +
        "(C) '疏忽的' 意味着未能妥善处理某事的。" +
        "<br><br>" +
        "(D) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。"
    },
    {
        id: 3,
    question: "The community showed its __________ spirit by rebuilding quickly after the devastating flood.",
    chinese_question: "社区在毁灭性的洪水后迅速重建，展现了其 __________ 的精神。",
    answers: [
        { option: "A", answer: "resilient", chinese_answer: "有弹性的", chinese_romanization: "yǒu tánxìng de" },
        { option: "B", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'resilient' means able to withstand or recover quickly from difficult conditions." +
        "<br><br>" +
        "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
    chinese_explanation: "(A) '有弹性的' 意味着能够承受或迅速从困难条件中恢复。" +
        "<br><br>" +
        "(B) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情；冷漠的。" +
        "<br><br>" +
        "(D) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极反应或抵抗的。"
    },
    {
        id: 4,
        question: "Her voice had an __________ quality that made the song soothing, gently rising and falling to create a calming effect.",
        chinese_question: "她的声音具有__________的特点，温和的起伏使这首歌听起来非常舒缓。",
        answers: [
            { option: "A", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "B", answer: "undulating", chinese_answer: "起伏的", chinese_romanization: "qǐfú de" },
            { option: "C", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cìěr de" },
            { option: "D", answer: "flat", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undulating' means having a smoothly rising and falling form or outline." +
            "<br><br>" +
            "(A) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'flat' means lacking emotion, interest, or excitement.",
        chinese_explanation: "(B) '起伏的' 意味着具有平滑的起伏形态或轮廓。" +
            "<br><br>" +
            "(A) '单调的' 意味着枯燥乏味的；缺乏多样性和兴趣的。" +
            "<br><br>" +
            "(C) '刺耳的' 意味着使感官不愉快地粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '平淡的' 意味着缺乏情感、兴趣或兴奋的。"
    },
    {
        id: 5,
        question: "The __________ approach to budgeting ensured the project stayed within financial limits.",
        chinese_question: "__________ 的预算方法确保了项目在财务限制内进行。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "C", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(D) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(C) '节俭的' 意味着小心和不浪费地使用金钱和其他资源。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的关注或思考以避免伤害或错误的。" +
            "<br><br>" +
            "(B) '鲁莽的' 意味着不考虑行动的后果的。" +
            "<br><br>" +
            "(D) '奢华的' 意味着华丽的、精致的或奢侈的."
    },
    {
        id: 6,
        question: "To ensure the __________ functioning of the machine, it is crucial to perform regular maintenance and inspections so that it operates smoothly and efficiently.",
        chinese_question: "为了确保机器的 __________ 运作，进行定期维护和检查是至关重要的，以便它能顺利高效地运转。",
        answers: [
            { option: "A", answer: "suboptimal", chinese_answer: "次优的", chinese_romanization: "cì yōu de" },
            { option: "B", answer: "inferior", chinese_answer: "次等的", chinese_romanization: "cìděng de" },
            { option: "C", answer: "marginal", chinese_answer: "边缘的", chinese_romanization: "biānyuán de" },
            { option: "D", answer: "optimal", chinese_answer: "最佳的", chinese_romanization: "zuìjiā de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'optimal' means best or most favorable; optimum." +
            "<br><br>" +
            "(A) 'suboptimal' means below the best or most favorable level." +
            "<br><br>" +
            "(B) 'inferior' means lower in rank, status, or quality." +
            "<br><br>" +
            "(C) 'marginal' means of secondary or minor importance; not central.",
        chinese_explanation: "(D) '最佳的' 意味着最好或最有利的。" +
            "<br><br>" +
            "(A) '次优的' 意味着低于最好或最有利的水平。" +
            "<br><br>" +
            "(B) '次等的' 意味着在等级、地位或质量上较低的。" +
            "<br><br>" +
            "(C) '边缘的' 意味着次要或不重要的；不中心的."
    },
    {
        id: 7,
        question: "The organization aims to create a more __________ system where everyone has equal opportunities.",
        chinese_question: "该组织旨在建立一个更__________的系统，让每个人都有平等的机会。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "B", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "C", answer: "unfair", chinese_answer: "不公平的", chinese_romanization: "bù gōngpíng de" },
            { option: "D", answer: "prejudiced", chinese_answer: "偏见的", chinese_romanization: "piānjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equitable' means fair and impartial." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(C) 'unfair' means not based on or behaving according to the principles of equality and justice." +
            "<br><br>" +
            "(D) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice; bigoted.",
        chinese_explanation: "(B) '公平的'一词意味着公正和不偏不倚的。" +
            "<br><br>" +
            "(A) '有偏见的' 意味着对某人或某事不公平地有偏见的。" +
            "<br><br>" +
            "(C) '不公平的' 意味着不基于或不按照平等和正义原则行事的。" +
            "<br><br>" +
            "(D) '偏见的' 意味着表现出或显示出来自偏见的不喜欢或不信任的；偏执的。"
    },
    {
        id: 8,
        question: "Advertising is __________ in our lives, bombarding us with messages on every platform we use.",
        chinese_question: "广告在我们的生活中 __________，在我们使用的每个平台上都充斥着信息。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "B", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "C", answer: "ubiquitous", chinese_answer: "无处不在", chinese_romanization: "wúchùbùzài" },
            { option: "D", answer: "intermittent", chinese_answer: "间歇", chinese_romanization: "jiànxiē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ubiquitous' means present, appearing, or found everywhere." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'intermittent' means occurring at irregular intervals; not continuous or steady.",
        chinese_explanation: "(C) '无处不在' 意味着存在、出现或发现于每一个地方。" +
            "<br><br>" +
            "(A) '有限' 意味着在大小、数量或范围上受到限制。" +
            "<br><br>" +
            "(B) '零星' 意味着不定期发生或只在少数地方出现；分散的或孤立的。" +
            "<br><br>" +
            "(D) '间歇' 意味着不规则间隔发生的；不连续或不稳定的。"
    },
    {
        id: 9,
    question: "Her __________ retorts during debates made her a formidable opponent, because she was always ready with a clever comeback and could turn even the most serious arguments into humorous exchanges.",
    chinese_question: "她在辩论中的 __________ 反驳让她成为一个强大的对手，因为她总是准备好一个聪明的回击，甚至能将最严肃的辩论变成幽默的对话。",
    answers: [
        { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
        { option: "B", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
        { option: "C", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
        { option: "D", answer: "witty", chinese_answer: "机智的", chinese_romanization: "jīzhì de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'witty' means showing or characterized by quick and inventive verbal humor." +
        "<br><br>" +
        "(A) 'boring' means not interesting; tedious." +
        "<br><br>" +
        "(B) 'slow' means moving or operating only at a slow speed; not quick or fast." +
        "<br><br>" +
        "(C) 'clumsy' means awkward in movement or in handling things.",
    chinese_explanation: "(D) '机智的' 意味着表现出或以快速和富有创造力的口头幽默为特征。" +
        "<br><br>" +
        "(A) '无聊的' 意味着不有趣的；乏味的。" +
        "<br><br>" +
        "(B) '缓慢的' 意味着移动或操作只在缓慢的速度；不快或快速。" +
        "<br><br>" +
        "(C) '笨拙的' 意味着动作或处理事情时笨拙的。"
    },
    {
        id: 10,
    question: "His __________ ideas about business innovation, like proposing unconventional methods and challenging the status quo, often put him at odds with the more conservative members of the board.",
    chinese_question: "他关于商业创新的 __________ 想法，比如提出非常规方法和挑战现状，经常使他与董事会中较为保守的成员产生分歧。",
    answers: [
        { option: "A", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" },
        { option: "B", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "C", answer: "conformist", chinese_answer: "墨守成规的", chinese_romanization: "mòshǒuchéngguī de" },
        { option: "D", answer: "conventional", chinese_answer: "惯例的", chinese_romanization: "guànlì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rebellious' means showing a desire to resist authority, control, or convention." +
        "<br><br>" +
        "(B) 'traditional' means existing in or as part of a tradition; long-established." +
        "<br><br>" +
        "(C) 'conformist' means a person who conforms to accepted behavior or established practices." +
        "<br><br>" +
        "(D) 'conventional' means based on or in accordance with what is generally done or believed.",
    chinese_explanation: "(A) '叛逆的' 意味着表现出抵抗权威、控制或惯例的欲望。" +
        "<br><br>" +
        "(B) '传统的' 意味着作为传统的一部分存在的；久已建立的。" +
        "<br><br>" +
        "(C) '墨守成规的' 意味着一个人遵从被接受的行为或既定的做法。" +
        "<br><br>" +
        "(D) '惯例的' 意味着基于或按照通常所做或所信的。"
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
