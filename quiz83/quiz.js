// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The manager disliked employees who showed excessive __________, preferring those who demonstrated initiative and confidence.",
        chinese_question: "经理不喜欢表现出过度 __________ 的员工，更喜欢那些表现出主动性和自信的员工。",
        answers: [
                { option: "A", answer: "independence", chinese_answer: "独立", chinese_romanization: "dúlì" },
                { option: "B", answer: "servility", chinese_answer: "奴性", chinese_romanization: "nǔxìng" },
                { option: "C", answer: "creativity", chinese_answer: "创造力", chinese_romanization: "chuàngzàolì" },
                { option: "D", answer: "leadership", chinese_answer: "领导力", chinese_romanization: "lǐngdǎolì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'servility' means an excessive willingness to serve or please others." +
                "<br><br>" +
                "(A) 'independence' means the fact or state of being independent." +
                "<br><br>" +
                "(C) 'creativity' means the use of imagination or original ideas to create something." +
                "<br><br>" +
                "(D) 'leadership' means the action of leading a group of people or an organization.",
        chinese_explanation: "(B) '奴性' 意味着过度愿意服务或取悦他人。" +
                "<br><br>" +
                "(A) '独立' 意味着独立的事实或状态。" +
                "<br><br>" +
                "(C) '创造力' 意味着用想象力或原创思想创造某物。" +
                "<br><br>" +
                "(D) '领导力' 意味着领导一群人或一个组织的行为。"
    },
    {
        id: 2,
    question: "In the dimly lit room, a sense of __________ washed over him, making him want to do nothing but rest.",
    chinese_question: "在昏暗的房间里，他感到一阵 __________ ，只想休息。",
    answers: [
        { option: "A", answer: "languor", chinese_answer: "倦怠", chinese_romanization: "juàndài" },
        { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "C", answer: "energy", chinese_answer: "能量", chinese_romanization: "néngliàng" },
        { option: "D", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'languor' means a state of tiredness or inertia, used figuratively here." +
                "<br><br>" +
                "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
                "<br><br>" +
                "(C) 'energy' means the strength and vitality required for sustained physical or mental activity." +
                "<br><br>" +
                "(D) 'alertness' means the quality of being quick to notice things.",
    chinese_explanation: "(A) '倦怠' 意味着疲倦或无力的状态，这里是比喻用法。" +
                "<br><br>" +
                "(B) '兴奋' 意味着极大的热情和渴望。" +
                "<br><br>" +
                "(C) '能量' 意味着持续进行体力或脑力活动所需的力量和活力。" +
                "<br><br>" +
                "(D) '警觉' 意味着迅速注意事物的品质。"
    },
    {
        id: 3,
question: "Her role as the __________ in the team made her indispensable to the success of their projects.",
chinese_question: "她在团队中作为 __________ 的角色使她对项目的成功不可或缺。",
answers: [
    { option: "A", answer: "linchpin", chinese_answer: "关键人物", chinese_romanization: "guānjiàn rénwù" },
    { option: "B", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" },
    { option: "C", answer: "adversary", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
    { option: "D", answer: "follower", chinese_answer: "追随者", chinese_romanization: "zhuīsuízhě" }
],
correctAnswer: "A",
explanation: "(A) 'linchpin' means a person or thing vital to an enterprise or organization." +
    "<br><br>" +
    "(B) 'bystander' means a person who is present at an event or incident but does not take part." +
    "<br><br>" +
    "(C) 'adversary' means one's opponent in a contest, conflict, or dispute." +
    "<br><br>" +
    "(D) 'follower' means a person who supports and admires a particular person or set of ideas.",
chinese_explanation: "(A) '关键人物' 意味着对企业或组织至关重要的人或事物。" +
    "<br><br>" +
    "(B) '旁观者' 意味着在事件或事故中存在但不参与的人。" +
    "<br><br>" +
    "(C) '对手' 意味着在比赛、冲突或争端中的对手。" +
    "<br><br>" +
    "(D) '追随者' 意味着支持和钦佩特定人或思想体系的人。"
    },
    {
        id: 4,
        question: "Her __________ is so tight that she hardly has time for herself.",
        chinese_question: "她的 __________ 如此紧凑，以至于几乎没有自己的时间。",
        answers: [
            { option: "A", answer: "freedom", chinese_answer: "自由", chinese_romanization: "zìyóu" },
            { option: "B", answer: "schedule", chinese_answer: "时间表", chinese_romanization: "shíjiān biǎo" },
            { option: "C", answer: "spontaneity", chinese_answer: "自发性", chinese_romanization: "zìfā xìng" },
            { option: "D", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." +
                "<br><br>" +
                "(A) 'freedom' means the power or right to act, speak, or think as one wants without hindrance or restraint." +
                "<br><br>" +
                "(C) 'spontaneity' means the condition of being spontaneous; spontaneous behavior or action." +
                "<br><br>" +
                "(D) 'flexibility' means the quality of bending easily without breaking.",
        chinese_explanation: "(B) '时间表' 意味着计划执行的过程或程序，列出预定的事件和时间。" +
                "<br><br>" +
                "(A) '自由' 意味着在没有阻碍或限制的情况下行动、说话或思考的力量或权利。" +
                "<br><br>" +
                "(C) '自发性' 意味着自发的条件；自发的行为或行动。" +
                "<br><br>" +
                "(D) '灵活性' 意味着容易弯曲而不会折断的质量。"
    },
    {
        id: 5,
        question: "Gaining access to the VIP section is a __________ that comes with purchasing the most expensive ticket.",
        chinese_question: "进入VIP区域是购买最昂贵门票的一种 __________。",
        answers: [
            { option: "A", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
            { option: "B", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
            { option: "C", answer: "duty", chinese_answer: "责任", chinese_romanization: "zérèn" },
            { option: "D", answer: "restriction", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'privilege' means a special right, advantage, or immunity granted or available only to a particular person or group." +
                "<br><br>" +
                "(B) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." +
                "<br><br>" +
                "(C) 'duty' means a moral or legal obligation; a responsibility." +
                "<br><br>" +
                "(D) 'restriction' means a limiting condition or measure, especially a legal one.",
        chinese_explanation: "(A) '特权' 意味着仅特定人或群体拥有的特殊权利、优势或豁免。" +
                "<br><br>" +
                "(B) '惩罚' 意味着作为对犯罪的报复而施加的惩罚。" +
                "<br><br>" +
                "(C) '责任' 意味着道德或法律上的义务；责任。" +
                "<br><br>" +
                "(D) '限制' 意味着限制条件或措施，尤其是法律上的。"
    },
    {
        id: 6,
    question: "Before signing the contract, the company conducted due __________ to verify the financial health of the partner firm.",
    chinese_question: "在签署合同之前，公司进行了尽 __________ 以核实合作公司的财务状况。",
    answers: [
            { option: "A", answer: "impulsiveness", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "D", answer: "diligence", chinese_answer: "勤", chinese_romanization: "qín" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'diligence' figuratively means careful and persistent effort to verify financial health." +
            "<br><br>" +
            "(A) 'impulsiveness' means acting or done without forethought." +
            "<br><br>" +
            "(B) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'negligence' means failure to take proper care in doing something.",
    chinese_explanation: "(D) '尽勤' 在此语境下意指仔细和持续的努力，以核实财务状况。" +
            "<br><br>" +
            "(A) '冲动' 意味着没有深思熟虑的行为或行为。" +
            "<br><br>" +
            "(B) '忽视' 意味着不注意；忽视。" +
            "<br><br>" +
            "(C) '疏忽' 意味着未能妥善处理某事。"
    },
    {
        id: 7,
        question: "The __________ in the office was evident as soon as the boss left for vacation.",
        chinese_question: "老板去度假后，办公室里显然是一片 __________ 。",
        answers: [
            { option: "A", answer: "mayhem", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "C", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "D", answer: "discipline", chinese_answer: "纪律", chinese_romanization: "jìlǜ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mayhem' means a state of chaos and disorder." +
                "<br><br>" +
                "(B) 'order' means an organized or orderly state." +
                "<br><br>" +
                "(C) 'quiet' means the absence of noise." +
                "<br><br>" +
                "(D) 'discipline' means controlled behavior resulting from training.",
        chinese_explanation: "(A) '混乱' 意味着一种混乱和无序的状态。" +
                "<br><br>" +
                "(B) '秩序' 意味着一种有组织或有序的状态。" +
                "<br><br>" +
                "(C) '安静' 意味着没有噪音。" +
                "<br><br>" +
                "(D) '纪律' 意味着通过训练获得的受控行为。"
    },
    {
        id: 8,
        question: "The CEO was the victim of a __________ orchestrated by jealous colleagues who wanted to see him fail.",
        chinese_question: "这位CEO是嫉妒的同事们策划的 __________ 的受害者，这些同事想看到他失败。",
        answers: [
                { option: "A", answer: "conspiracy", chinese_answer: "阴谋", chinese_romanization: "yīnmóu" },
                { option: "B", answer: "calumny", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "D", answer: "commendation", chinese_answer: "表彰", chinese_romanization: "biǎozhāng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'calumny' means the making of false and defamatory statements about someone in order to damage their reputation; slander." +
                "<br><br>" +
                "(A) 'conspiracy' means a secret plan by a group to do something unlawful or harmful." +
                "<br><br>" +
                "(C) 'praise' means the expression of approval or admiration for someone or something." +
                "<br><br>" +
                "(D) 'commendation' means praise formally or officially.",
        chinese_explanation: "(B) '诽谤'一词意味着为了损害某人的名誉而进行的虚假和诽谤性陈述；诋毁。" +
                "<br><br>" +
                "(A) '阴谋' 意味着一群人秘密策划的非法或有害的计划。" +
                "<br><br>" +
                "(C) '赞美' 意味着对某人或某事表示赞许或钦佩。" +
                "<br><br>" +
                "(D) '表彰' 意味着正式或官方的赞美。"
    },
    {
        id: 9,
    question: "The company reached its __________ when it reported its lowest profits in a decade.",
    chinese_question: "公司在报告其十年来最低利润时达到了 __________。",
    answers: [
        { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
        { option: "B", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
        { option: "C", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
        { option: "D", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'nadir' means the lowest point in the fortunes of a person or organization." +
        "<br><br>" +
        "(A) 'peak' means the highest point." +
        "<br><br>" +
        "(B) 'beginning' means the point in time or space at which something starts." +
        "<br><br>" +
        "(C) 'rise' means an upward movement or an increase in position or status.",
    chinese_explanation: "(D) '最低点' 意味着一个人或组织财富的最低点。" +
        "<br><br>" +
        "(A) '顶峰' 意味着最高点。" +
        "<br><br>" +
        "(B) '开始' 意味着某事物开始的时间或空间点。" +
        "<br><br>" +
        "(C) '上升' 意味着向上的运动或位置或地位的增加。"
    },
    {
        id: 10,
question: "With a quick flick of his wrist, he demonstrated impressive __________, making the card vanish into thin air.",
chinese_question: "他迅速一挥手腕，展示了令人印象深刻的 __________，让纸牌消失在空气中。",
answers: [
    { option: "A", answer: "legerdemain", chinese_answer: "戏法", chinese_romanization: "xìfǎ" },
    { option: "B", answer: "awkwardness", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
    { option: "C", answer: "clumsiness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
    { option: "D", answer: "frankness", chinese_answer: "直率", chinese_romanization: "zhíshuài" }
],
correctAnswer: "A",
explanation: "(A) 'legerdemain' means skillful use of one's hands when performing conjuring tricks." +
    "<br><br>" +
    "(B) 'awkwardness' means causing difficulty; hard to do or deal with." +
    "<br><br>" +
    "(C) 'clumsiness' means lacking skill or grace in movement or performance." +
    "<br><br>" +
    "(D) 'frankness' means the quality of being open, honest, and direct.",
chinese_explanation: "(A) '戏法' 意味着表演魔术时巧妙使用双手的技巧。" +
    "<br><br>" +
    "(B) '尴尬' 意味着造成困难；难以处理或对付。" +
    "<br><br>" +
    "(C) '笨拙' 意味着在动作或表演中缺乏技巧或优雅。" +
    "<br><br>" +
    "(D) '直率' 意味着开放、诚实和直接的品质。"
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
