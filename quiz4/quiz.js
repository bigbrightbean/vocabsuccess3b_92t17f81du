// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite initial skepticism, the community became __________ to the proposed changes, recognizing their potential benefits.",
        chinese_question: "尽管最初持怀疑态度，社区还是变得 __________，认识到这些提议的潜在好处。",
        answers: [
            { option: "A", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" },
            { option: "B", answer: "receptive", chinese_answer: "乐于接受的", chinese_romanization: "lè yú jiēshòu de" },
            { option: "C", answer: "suspicious", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "D", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'receptive' means willing to consider or accept new suggestions and ideas." +
            "<br><br>" +
            "(A) 'critical' means expressing adverse or disapproving comments or judgments." +
            "<br><br>" +
            "(C) 'suspicious' means having or showing a cautious distrust of someone or something." +
            "<br><br>" +
            "(D) 'doubtful' means feeling uncertain about something.",
        chinese_explanation: "(B) '乐于接受的' 意味着愿意考虑或接受新的建议和想法。" +
            "<br><br>" +
            "(A) '批评的' 意味着表达不赞成的评论或判断。" +
            "<br><br>" +
            "(C) '怀疑的' 意味着对某人或某事表现出谨慎的不信任。" +
            "<br><br>" +
            "(D) '怀疑的' 意味着对某事感到不确定的。"
    },
    {
        id: 2,
        question: "His __________ handling of the situation caused more problems than it solved, creating confusion and additional issues.",
        chinese_question: "他__________地处理情况，导致了更多的问题而不是解决问题，造成了混乱和额外的问题。",
        answers: [
            { option: "A", answer: "skillful", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "B", answer: "competent", chinese_answer: "能干的", chinese_romanization: "nénggàn de" },
            { option: "C", answer: "adept", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "D", answer: "ungainly", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ungainly' means awkward and clumsy." +
            "<br><br>" +
            "(A) 'skillful' means having or showing skill." +
            "<br><br>" +
            "(B) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(C) 'adept' means very skilled or proficient at something.",
        chinese_explanation: "(D) '笨拙的' 意味着笨拙和不灵巧的。" +
            "<br><br>" +
            "(A) '熟练的' 意味着拥有或展示技能的。" +
            "<br><br>" +
            "(B) '能干的' 意味着具有必要的能力、知识或技能成功地完成某事。" +
            "<br><br>" +
            "(C) '熟练的' 意味着在某事上非常熟练或精通的。"
    },
    {
        id: 3,
        question: "Her instructions were __________ and precise, leaving no room for misinterpretation.",
        chinese_question: "她的指示是__________的且精确的，不会留下任何误解的余地。",
        answers: [
            { option: "A", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
            { option: "B", answer: "unequivocal", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "C", answer: "vague", chinese_answer: "含糊的", chinese_romanization: "hánhú de" },
            { option: "D", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchǔ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unequivocal' means leaving no doubt; unambiguous." +
            "<br><br>" +
            "(A) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'unclear' means not easy to see, hear, or understand.",
        chinese_explanation: "(B) '明确的' 意味着没有疑问的；不含糊的。" +
            "<br><br>" +
            "(A) '模棱两可的' 意味着有多种解释的；没有一个明显的意义。" +
            "<br><br>" +
            "(C) '含糊的' 意味着不确定的、不明确的性格或意义。" +
            "<br><br>" +
            "(D) '不清楚的' 意味着不容易看到、听到或理解的。"
    },
    {
        id: 4,
    question: "Her __________ attitude after receiving the promotion alienated her colleagues, who felt she was too self-satisfied.",
    chinese_question: "她在晋升后表现出的 __________ 态度疏远了她的同事们，他们觉得她太自满了。",
    answers: [
        { option: "A", answer: "smug", chinese_answer: "自满的", chinese_romanization: "zìmǎn de" },
        { option: "B", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
        { option: "C", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
        { option: "D", answer: "approachable", chinese_answer: "平易近人的", chinese_romanization: "píngyì jìnrén de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'smug' means having or showing an excessive pride in oneself or one's achievements." +
        "<br><br>" +
        "(B) 'considerate' means careful not to cause inconvenience or hurt to others." +
        "<br><br>" +
        "(C) 'respectful' means feeling or showing deference and respect." +
        "<br><br>" +
        "(D) 'approachable' means friendly and easy to talk to.",
    chinese_explanation: "(A) '自满的' 意味着对自己或自己的成就表现出过度的自豪。" +
        "<br><br>" +
        "(B) '体贴的' 意味着小心不引起不便或伤害他人的。" +
        "<br><br>" +
        "(C) '尊敬的' 意味着感到或表现出尊重和敬意的。" +
        "<br><br>" +
        "(D) '平易近人的' 意味着友好且容易交谈的。"
    },
    {
        id: 5,
    question: "The __________ protests in the city caused disruptions to daily life.",
    chinese_question: "城市里的__________抗议活动扰乱了日常生活。",
    answers: [
        { option: "A", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ān jìng de" },
        { option: "B", answer: "soft", chinese_answer: "轻柔的", chinese_romanization: "qīng róu de" },
        { option: "C", answer: "raucous", chinese_answer: "喧闹的", chinese_romanization: "xuān nào de" },
        { option: "D", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēn róu de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'raucous' means making or constituting a disturbingly harsh and loud noise. Figuratively, it can mean being loud and disorderly." +
        "<br><br>" +
        "(A) 'quiet' means making little or no noise." +
        "<br><br>" +
        "(B) 'soft' means having a pleasingly gentle quality." +
        "<br><br>" +
        "(D) 'gentle' means mild in temperament or behavior; kind or tender.",
    chinese_explanation: "(C) '喧闹的'一词意味着发出令人不安的刺耳和响亮的声音。比喻地，它可以表示吵闹和混乱的。" +
        "<br><br>" +
        "(A) '安静的' 意味着几乎没有声音。" +
        "<br><br>" +
        "(B) '轻柔的' 意味着具有令人愉快的温和品质。" +
        "<br><br>" +
        "(D) '温柔的' 意味着温和的性情或行为；善良或温柔的。"
    },
    {
        id: 6,
question: "Her __________ approach to life's challenges helped her stay calm and find solutions even in stressful situations.",
chinese_question: "她对生活挑战的 __________ 态度帮助她在压力大的情况下保持冷静并找到解决方案。",
answers: [
        { option: "A", answer: "philosophical", chinese_answer: "哲学的", chinese_romanization: "zhéxué de" },
        { option: "B", answer: "frantic", chinese_answer: "狂乱的", chinese_romanization: "kuángluàn de" },
        { option: "C", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
        { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
],
correctAnswer: "A",
explanation: "(A) 'philosophical' means having a calm attitude towards disappointments or difficulties." + 
    "<br><br>" + 
    "(B) 'frantic' means wild or distraught with fear, anxiety, or other emotion." + 
    "<br><br>" + 
    "(C) 'hasty' means done or acting with excessive speed or urgency." + 
    "<br><br>" + 
    "(D) 'superficial' means existing or occurring at or on the surface.",
chinese_explanation: "(A) '哲学的' 意味着对失望或困难保持冷静态度的。" +
    "<br><br>" +
    "(B) '狂乱的' 意味着因恐惧、焦虑或其他情绪而疯狂或烦乱的。" +
    "<br><br>" +
    "(C) '匆忙的' 意味着以过快或紧迫的速度或行动完成的。" +
    "<br><br>" +
    "(D) '表面的' 意味着存在或发生在表面上的."
    },
    {
        id: 7,
question: "The new software made data analysis a much more __________ process for the researchers.",
chinese_question: "新软件使数据分析对研究人员来说变得更 __________。",
answers: [
    { option: "A", answer: "daunting", chinese_answer: "令人生畏", chinese_romanization: "lìng rén shēngwèi" },
    { option: "B", answer: "manageable", chinese_answer: "可管理", chinese_romanization: "kě guǎnlǐ" },
    { option: "C", answer: "strenuous", chinese_answer: "费力", chinese_romanization: "fèilì" },
    { option: "D", answer: "exhausting", chinese_answer: "疲惫", chinese_romanization: "píbèi" }
],
correctAnswer: "B",
explanation: "(B) 'manageable' means able to be controlled or dealt with without difficulty." + 
    "<br><br>" +
    "(A) 'daunting' means seeming difficult to deal with in anticipation; intimidating." +
    "<br><br>" +
    "(C) 'strenuous' means requiring or using great exertion." +
    "<br><br>" +
    "(D) 'exhausting' means making one feel very tired; very tiring.",
chinese_explanation: "(B) '可管理' 意味着能够被控制或处理而没有困难。" + 
    "<br><br>" +
    "(A) '令人生畏' 意味着在预期中似乎很难处理的；令人胆怯的。" +
    "<br><br>" +
    "(C) '费力' 意味着需要或使用很大的努力。" +
    "<br><br>" +
    "(D) '疲惫' 意味着让人感到非常疲倦的；非常累人的。"
    },
    {
        id: 8,
        question: "Her __________ attitude towards her wealth endeared her to everyone, as she never flaunted her riches.",
        chinese_question: "她对财富的 __________ 态度使她深受大家喜爱，因为她从不炫耀自己的财富。",
        answers: [
            { option: "A", answer: "pretentious", chinese_answer: "自命不凡的", chinese_romanization: "zìmìng bùfán de" },
            { option: "B", answer: "ostentatious", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
            { option: "C", answer: "proud", chinese_answer: "骄傲的", chinese_romanization: "jiāo'ào de" },
            { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'humble' means having or showing a modest or low estimate of one's own importance." + 
            "<br><br>" +
            "(A) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
            "<br><br>" +
            "(B) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
            "<br><br>" +
            "(C) 'proud' means feeling deep pleasure or satisfaction as a result of one's own achievements.",
        chinese_explanation: "(D) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。" + 
            "<br><br>" +
            "(A) '自命不凡的' 意味着试图通过影响比实际拥有的更大的重要性、才能、文化等来给人留下深刻印象。" +
            "<br><br>" +
            "(B) '炫耀的' 意味着以粗俗或自命不凡的展示为特征的；旨在给人留下深刻印象或吸引注意力的。" +
            "<br><br>" +
            "(C) '骄傲的' 意味着因为自己的成就而感到深深的快乐或满足。"
    },
    {
        id: 9,
        question: "The __________ structure of the organization made communication slow and inefficient.",
        chinese_question: "这个 __________ 的组织结构使得沟通缓慢且低效。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "streamlined", chinese_answer: "流线型", chinese_romanization: "liúxiànxíng" },
            { option: "C", answer: "bulky", chinese_answer: "笨重", chinese_romanization: "bènzhòng" },
            { option: "D", answer: "direct", chinese_answer: "直接", chinese_romanization: "zhíjiē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bulky' means large and unwieldy, suggesting something that is slow and cumbersome." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done." +
            "<br><br>" +
            "(B) 'streamlined' means designed to have little resistance to a flow of air or water." +
            "<br><br>" +
            "(D) 'direct' means going straight to the point.",
        chinese_explanation: "(C) '笨重' 意味着大而笨拙，暗示着某物缓慢而累赘。" +
            "<br><br>" +
            "(A) '简单' 意味着容易理解或做。" +
            "<br><br>" +
            "(B) '流线型' 意味着设计成对空气或水的流动阻力小的。" +
            "<br><br>" +
            "(D) '直接' 意味着直截了当。"
    },
    {
        id: 10,
        question: "The politician's past was __________, filled with rumors and unanswered questions about his involvement in various scandals.",
        chinese_question: "这位政治家的过去 __________，充满了关于他参与各种丑闻的谣言和未解的问题。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "murky", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "C", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "D", answer: "pristine", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'murky' means not fully explained or understood, especially with concealed dishonesty or immorality." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'transparent' means allowing light to pass through so that objects behind can be distinctly seen." +
            "<br><br>" +
            "(D) 'pristine' means in its original condition; unspoiled.",
        chinese_explanation: "(B) '模糊的' 意味着没有完全解释或理解，尤其是带有隐瞒的不诚实或不道德。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(C) '透明的' 意味着允许光线通过，使得后面的物体可以清晰地看到。" +
            "<br><br>" +
            "(D) '原始的' 意味着处于其原始状态的；未受损的."
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
