// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite being surrounded by friends, she often felt __________ and misunderstood.",
        chinese_question: "尽管被朋友们包围，她却常常感到 __________ 和被误解。",
        answers: [
            { option: "A", answer: "joyous", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "content", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "C", answer: "lonesome", chinese_answer: "孤独", chinese_romanization: "gūdú" },
            { option: "D", answer: "fulfilled", chinese_answer: "充实", chinese_romanization: "chōngshí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lonesome' means solitary or lonely." + 
            "<br><br>" +
            "(A) 'joyous' means full of happiness and joy." +
            "<br><br>" +
            "(B) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(D) 'fulfilled' means satisfied or happy because of fully developing one's abilities or character.",
        chinese_explanation: "(C) '孤独' 意味着孤独的或寂寞的。" + 
            "<br><br>" +
            "(A) '快乐' 意味着充满幸福和喜悦。" +
            "<br><br>" +
            "(B) '满足' 意味着处于宁静的幸福状态。" +
            "<br><br>" +
            "(D) '充实' 意味着因为充分发展了自己的能力或性格而感到满意或高兴。"
    },
    {
        id: 2,
        question: "The event was conducted in an __________ fashion, with each activity following a precise schedule.",
        chinese_question: "活动以一种 __________ 的方式进行，每项活动都遵循精确的时间表。",
        answers: [
            { option: "A", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "disorganized", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "C", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "D", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(A) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(B) 'disorganized' means not properly planned and controlled." +
            "<br><br>" +
            "(D) 'random' means made, done, or happening without method or conscious decision.",
        chinese_explanation: "(C) '有序的' 意味着整齐和有条理地排列的。" +
            "<br><br>" +
            "(A) '随意的' 意味着缺乏明显的组织原则。" +
            "<br><br>" +
            "(B) '杂乱的' 意味着没有适当的计划和控制的。" +
            "<br><br>" +
            "(D) '随机的' 意味着没有方法或有意识的决定而做的、完成的或发生的."
    },
    {
        id: 3,
        question: "In times of crisis, maintaining a __________ demeanor can help to de-escalate tensions and foster cooperation.",
        chinese_question: "在危机时刻，保持 __________ 的态度有助于缓和紧张局势并促进合作。",
        answers: [
            { option: "A", answer: "civil", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "B", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" },
            { option: "C", answer: "aggressive", chinese_answer: "侵略性的", chinese_romanization: "qīnlüè xìng de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'civil' means courteous and polite." +
            "<br><br>" +
            "(B) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(C) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '礼貌的' 意味着有礼貌的和礼貌的。" +
            "<br><br>" +
            "(B) '混乱的' 意味着完全混乱和无序的状态。" +
            "<br><br>" +
            "(C) '侵略性的' 意味着准备攻击或可能攻击的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 4,
        question: "She is a __________ leader, always making wise decisions and inspiring confidence in her team.",
        chinese_question: "她是一位 __________ 的领导者，总是做出明智的决定并激励团队的信心。",
        answers: [
            { option: "A", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "B", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "competent", chinese_answer: "能干的", chinese_romanization: "nénggàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(A) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(B) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(D) '能干的' 意味着具备完成某事所需的能力、知识或技能。" +
            "<br><br>" +
            "(A) '无效的' 意味着没有产生任何显著或期望的效果。" +
            "<br><br>" +
            "(B) '犹豫的' 意味着犹豫不决、不确定或行动或说话缓慢的。" +
            "<br><br>" +
            "(C) '不确定的' 意味着不能依靠的；不确定或不明确的。"
    },
    {
        id: 5,
    question: "After the company's collapse, many employees found themselves __________, struggling to find new jobs and support their families.",
    chinese_question: "公司倒闭后，许多员工发现自己陷入 __________ 的困境，努力寻找新工作并养家糊口。",
    answers: [
      { option: "A", answer: "destitute", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
      { option: "B", answer: "employed", chinese_answer: "有工作的", chinese_romanization: "yǒu gōngzuò de" },
      { option: "C", answer: "secure", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
      { option: "D", answer: "stable", chinese_answer: "稳固的", chinese_romanization: "wěngù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'destitute' means without the basic necessities of life." +
      "<br><br>" +
      "(B) 'employed' means having a job." +
      "<br><br>" +
      "(C) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
      "<br><br>" +
      "(D) 'stable' means not likely to change or fail; firmly established.",
    chinese_explanation: "(A) '贫困的' 意味着没有生活必需品的。" +
      "<br><br>" +
      "(B) '有工作的' 意味着有工作。" +
      "<br><br>" +
      "(C) '稳定的' 意味着固定或紧固的，以免让位、松动或丢失。" +
      "<br><br>" +
      "(D) '稳固的' 意味着不太可能改变或失败的；牢固建立的。"
    },
    {
        id: 6,
        question: "The __________ rights of individuals must be protected by law to ensure a just society.",
        chinese_question: "必须通过法律保护个人的 __________ 权利，以确保一个公正的社会。",
        answers: [
            { option: "A", answer: "peripheral", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "fundamental", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "C", answer: "inconsequential", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fundamental' means forming a necessary base or core; of central importance." + 
            "<br><br>" +
            "(A) 'peripheral' means relating to or situated on the edge or periphery of something." +
            "<br><br>" +
            "(C) 'inconsequential' means not important or significant." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(B) '基本的' 意味着构成必要的基础或核心；具有重要意义的。" + 
            "<br><br>" +
            "(A) '次要的' 意味着与某事物的边缘或外围有关的。" +
            "<br><br>" +
            "(C) '不重要的' 意味着不重要或不显著的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着如此小或不重要，不值得考虑的。"
    },
    {
        id: 7,
    question: "His views on social issues were criticized as __________, failing to consider the diverse perspectives of a global community.",
    chinese_question: "他对社会问题的看法被批评为 __________，未能考虑全球社区的多元观点。",
    answers: [
        { option: "A", answer: "provincial", chinese_answer: "狭隘的", chinese_romanization: "xián'ài de" },
        { option: "B", answer: "open-minded", chinese_answer: "开明的", chinese_romanization: "kāimíng de" },
        { option: "C", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
        { option: "D", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'provincial' means concerning the regions outside the capital city of a country, especially when regarded as unsophisticated or narrow-minded." +
        "<br><br>" +
        "(B) 'open-minded' means willing to consider new ideas; unprejudiced." +
        "<br><br>" +
        "(C) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
        "<br><br>" +
        "(D) 'progressive' means favoring or implementing social reform or new, liberal ideas.",
    chinese_explanation: "(A) '狭隘的' 意味着关于国家首都以外地区的，特别是被认为不成熟或狭隘的。" +
        "<br><br>" +
        "(B) '开明的' 意味着愿意考虑新想法的；无偏见的。" +
        "<br><br>" +
        "(C) '自由的' 意味着对新的行为或意见持开放态度，并愿意摒弃传统价值观的。" +
        "<br><br>" +
        "(D) '进步的' 意味着支持或实施社会改革或新的、自由的想法的。"
    },
    {
        id: 8,
        question: "Her soothing voice had an __________ effect on the anxious children, calming their fears and helping them to relax.",
        chinese_question: "她柔和的声音对焦虑的孩子们起到了 __________ 的作用，平息了他们的恐惧并帮助他们放松。",
        answers: [
            { option: "A", answer: "aggravating", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "emollient", chinese_answer: "润肤剂", chinese_romanization: "rùnfū jì" },
            { option: "C", answer: "irritating", chinese_answer: "刺激", chinese_romanization: "cìjī" },
            { option: "D", answer: "provoking", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emollient' means having the quality of softening or soothing." +
            "<br><br>" +
            "(A) 'aggravating' means making something worse or more serious." +
            "<br><br>" +
            "(C) 'irritating' means causing annoyance, impatience, or mild anger." +
            "<br><br>" +
            "(D) 'provoking' means causing annoyance or anger; arousing.",
        chinese_explanation: "(B) '润肤剂'一词意味着具有软化或舒缓品质的物质。" +
            "<br><br>" +
            "(A) '加剧' 意味着使某事变得更糟或更严重。" +
            "<br><br>" +
            "(C) '刺激' 意味着引起烦恼、急躁或轻微愤怒。" +
            "<br><br>" +
            "(D) '激怒' 意味着引起烦恼或愤怒；激起。"
    },
    {
        id: 9,
        question: "The __________ hostility between the two colleagues, like openly criticizing each other's ideas and refusing to collaborate, made it difficult for the team to work together.",
        chinese_question: "两位同事之间的 __________ 敌意，例如公开批评对方的想法和拒绝合作，使团队难以合作。",
        answers: [
            { option: "A", answer: "covert", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "D", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'overt' means done or shown openly; plainly or readily apparent, not secret or hidden." +
            "<br><br>" +
            "(A) 'covert' means not openly acknowledged or displayed." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(C) 'subtle' means so delicate or precise as to be difficult to analyze or describe.",
        chinese_explanation: "(D) '公开的' 意味着公开或明显地进行或显示的；不是秘密或隐藏的。" +
            "<br><br>" +
            "(A) '秘密的' 意味着不公开承认或展示的。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着保持在视线之外的；隐藏的。" +
            "<br><br>" +
            "(C) '微妙的' 意味着如此精细或精确以至于难以分析或描述的。"
    },
    {
        id: 10,
        question: "She made a __________ decision to invest in the company by considering all the potential risks and benefits before committing her funds.",
        chinese_question: "她__________地决定投资公司，考虑了所有潜在的风险和收益，然后才投入资金。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "C", answer: "judicious", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "D", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'judicious' means having, showing, or done with good judgment or sense. Figuratively, it can mean being careful and wise in decision-making." + 
            "<br><br>" +
            "(A) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'hasty' means done or acting with excessive speed or urgency; hurried.",
        chinese_explanation: "(C) '明智的'一词意味着有、表现出或用良好的判断力或感觉的。比喻地，它可以表示在决策中谨慎和明智的。" + 
            "<br><br>" +
            "(A) '鲁莽的' 意味着不顾危险或后果的；轻率或鲁莽的。" +
            "<br><br>" +
            "(B) '冲动的' 意味着没有深思熟虑的行动或完成。" +
            "<br><br>" +
            "(D) '匆忙的' 意味着以过快的速度或紧急行动的。"
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
