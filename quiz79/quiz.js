// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ that he was leaving the team spread like wildfire.",
        chinese_question: "关于他要离开团队的 __________ 像野火一样传播开来。",
        answers: [
            { option: "A", answer: "rumour", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
            { option: "B", answer: "guarantee", chinese_answer: "保证", chinese_romanization: "bǎozhèng" },
            { option: "C", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "D", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rumour' means a currently circulating story or report of uncertain or doubtful truth." +
                "<br><br>" +
                "(B) 'guarantee' means a formal assurance (typically in writing) that certain conditions will be fulfilled." +
                "<br><br>" +
                "(C) 'fact' means a thing that is known or proved to be true." +
                "<br><br>" +
                "(D) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid.",
        chinese_explanation: "(A) '谣言' 意味着目前流传的关于不确定或可疑真相的故事或报告。" +
                "<br><br>" +
                "(B) '保证' 意味着（通常以书面形式）对将履行某些条件的正式保证。" +
                "<br><br>" +
                "(C) '事实' 意味着已知或被证明为真的事情。" +
                "<br><br>" +
                "(D) '证据' 意味着表明某种信念或命题是否真实或有效的现有事实或信息。"
    },
    {
        id: 2,
    question: "The hot summer afternoon filled everyone with a sense of __________.",
    chinese_question: "炎热的夏日下午让每个人都感到一阵 __________ 。",
    answers: [
        { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "B", answer: "energy", chinese_answer: "能量", chinese_romanization: "néngliàng" },
        { option: "C", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" },
        { option: "D", answer: "languor", chinese_answer: "倦怠", chinese_romanization: "juàndài" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'languor' means a state of tiredness or inertia." +
                "<br><br>" +
                "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
                "<br><br>" +
                "(B) 'energy' means the strength and vitality required for sustained physical or mental activity." +
                "<br><br>" +
                "(C) 'alertness' means the quality of being quick to notice things.",
    chinese_explanation: "(D) '倦怠' 意味着疲倦或无力的状态。" +
                "<br><br>" +
                "(A) '兴奋' 意味着极大的热情和渴望。" +
                "<br><br>" +
                "(B) '能量' 意味着持续进行体力或脑力活动所需的力量和活力。" +
                "<br><br>" +
                "(C) '警觉' 意味着迅速注意事物的品质。"
    },
    {
        id: 3,
        question: "Her donation had a significant __________ on the charity's ability to help others.",
        chinese_question: "她的捐款对慈善机构帮助他人的能力产生了重大 __________。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "impact", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
            { option: "C", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "D", answer: "irrelevance", chinese_answer: "无关", chinese_romanization: "wúguān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impact' means the strong effect or influence that something has on a situation or person." +
                "<br><br>" +
                "(A) 'neglect' means the state of being uncared for." +
                "<br><br>" +
                "(C) 'avoidance' means the action of keeping away from or not doing something." +
                "<br><br>" +
                "(D) 'irrelevance' means the quality or state of being unrelated to the matter at hand.",
        chinese_explanation: "(B) '影响' 意味着某事对某种情况或某人的强烈影响。" +
                "<br><br>" +
                "(A) '忽视' 意味着无人照管的状态。" +
                "<br><br>" +
                "(C) '回避' 意味着远离或不做某事的行为。" +
                "<br><br>" +
                "(D) '无关' 意味着与眼前的事情无关的性质或状态。"
    },
    {
        id: 4,
        question: "The new shopping mall is a __________, covering over two million square feet and housing hundreds of stores.",
        chinese_question: "新的购物中心是一个 __________，占地超过两百万平方英尺，拥有数百家商店。",
        answers: [
                { option: "A", answer: "cottage", chinese_answer: "小屋", chinese_romanization: "xiǎowū" },
                { option: "B", answer: "behemoth", chinese_answer: "巨兽", chinese_romanization: "jùshòu" },
                { option: "C", answer: "kiosk", chinese_answer: "亭", chinese_romanization: "tíng" },
                { option: "D", answer: "bungalow", chinese_answer: "平房", chinese_romanization: "píngfáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'behemoth' means something enormous, especially a large and powerful organization or entity." +
                "<br><br>" +
                "(A) 'cottage' means a small house, typically one in the country." +
                "<br><br>" +
                "(C) 'kiosk' means a small open-fronted hut or cubicle from which newspapers, refreshments, tickets, etc., are sold." +
                "<br><br>" +
                "(D) 'bungalow' means a low house, typically with a broad front porch, having either no upper floor or upper rooms set in the roof.",
        chinese_explanation: "(B) '巨兽'一词意味着巨大的东西，尤其是一个庞大而强大的组织或实体。" +
                "<br><br>" +
                "(A) '小屋' 意味着一个小房子，通常是乡村里的一个。" +
                "<br><br>" +
                "(C) '亭' 意味着一个小型的开敞前面的棚子或亭子，用来出售报纸、饮料、票等。" +
                "<br><br>" +
                "(D) '平房' 意味着一栋低矮的房子，通常有一个宽敞的前廊，没有上层或上层房间设在屋顶中。"
    },
    {
        id: 5,
    question: "His mind was a __________ of ideas, each more innovative and peculiar than the last.",
    chinese_question: "他的思想是一个 __________ 的想法，每一个都比上一个更有创新和独特。",
    answers: [
        { option: "A", answer: "cauldron", chinese_answer: "大熔炉", chinese_romanization: "dà rónglú" },
        { option: "B", answer: "whirlwind", chinese_answer: "旋风", chinese_romanization: "xuànfēng" },
        { option: "C", answer: "treasure trove", chinese_answer: "宝藏", chinese_romanization: "bǎozàng" },
        { option: "D", answer: "contraption", chinese_answer: "奇妙装置", chinese_romanization: "qímiào zhuāngzhì" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'contraption' means a complex and creative thought process." +
                "<br><br>" +
                "(A) 'cauldron' means a situation characterized by instability and strong emotions." +
                "<br><br>" +
                "(B) 'whirlwind' means a situation or series of events where many things happen quickly." +
                "<br><br>" +
                "(C) 'treasure trove' means a valuable discovery or collection.",
    chinese_explanation: "(D) '奇妙装置'一词意味着复杂和创造性的思维过程。" +
                "<br><br>" +
                "(A) '大熔炉' 意味着不稳定和强烈情绪的情况。" +
                "<br><br>" +
                "(B) '旋风' 意味着许多事情迅速发生的情况或一系列事件。" +
                "<br><br>" +
                "(C) '宝藏' 意味着有价值的发现或收藏。"
    },
    {
        id: 6,
        question: "In a heated debate, he cast __________ on her qualifications, questioning her ability to lead the project.",
        chinese_question: "在激烈的辩论中，他对她的资质进行了 __________，质疑她领导项目的能力。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "aspersions", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "C", answer: "accolades", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
                { option: "D", answer: "endorsements", chinese_answer: "代言", chinese_romanization: "dàiyán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aspersions' means an attack on the reputation or integrity of someone or something." +
                "<br><br>" +
                "(A) 'praise' means the expression of approval or admiration for someone or something." +
                "<br><br>" +
                "(C) 'accolades' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
                "<br><br>" +
                "(D) 'endorsements' means an act of giving one's public approval or support to someone or something.",
        chinese_explanation: "(B) '诽谤'一词意味着对某人或某事的名誉或诚信的攻击。" +
                "<br><br>" +
                "(A) '赞美' 意味着对某人或某事表达赞同或钦佩。" +
                "<br><br>" +
                "(C) '荣誉' 意味着作为特殊荣誉或对优点的认可而授予的奖项或特权。" +
                "<br><br>" +
                "(D) '代言' 意味着公开表示赞同或支持某人或某事的行为。"
    },
    {
        id: 7,
        question: "The company leveraged its __________ to secure favorable terms in the contract negotiations.",
        chinese_question: "公司利用其 __________ 在合同谈判中获得了有利的条款。",
        answers: [
                { option: "A", answer: "clout", chinese_answer: "影响力", chinese_romanization: "yǐngxiǎng lì" },
                { option: "B", answer: "vulnerability", chinese_answer: "脆弱性", chinese_romanization: "cuìruò xìng" },
                { option: "C", answer: "anonymity", chinese_answer: "匿名", chinese_romanization: "nìmíng" },
                { option: "D", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'clout' figuratively means influence or power." +
                "<br><br>" +
                "(B) 'vulnerability' means the quality or state of being exposed to the possibility of being attacked or harmed." +
                "<br><br>" +
                "(C) 'anonymity' means the condition of being anonymous." +
                "<br><br>" +
                "(D) 'neutrality' means the state of not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(A) '影响力' 在此语境下意指影响力或权力。" +
                "<br><br>" +
                "(B) '脆弱性' 意味着可能遭受攻击或伤害的质量或状态。" +
                "<br><br>" +
                "(C) '匿名' 意味着匿名的状态。" +
                "<br><br>" +
                "(D) '中立' 意味着在冲突或争执中不支持或帮助任何一方的状态。"
    },
    {
        id: 8,
        question: "His __________ from drugs not only improved his health but also mended his broken relationships with family and friends.",
        chinese_question: "他的戒毒 __________ 不仅改善了他的健康，还修复了与家人和朋友破裂的关系。",
        answers: [
                { option: "A", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
                { option: "B", answer: "sobriety", chinese_answer: "清醒", chinese_romanization: "qīngxǐng" },
                { option: "C", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
                { option: "D", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sobriety' means the state of being sober, especially after giving up alcohol or drugs." +
                "<br><br>" +
                "(A) 'negligence' means failure to take proper care over something." +
                "<br><br>" +
                "(C) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
                "<br><br>" +
                "(D) 'indulgence' means allowing oneself to enjoy the pleasure of something.",
        chinese_explanation: "(B) '清醒'一词意味着清醒的状态，特别是在戒酒或戒毒之后。" +
                "<br><br>" +
                "(A) '疏忽' 意味着未能妥善照顾某事。" +
                "<br><br>" +
                "(C) '鲁莽' 意味着对危险或后果的漠视。" +
                "<br><br>" +
                "(D) '放纵' 意味着让自己享受某事的乐趣。"
    },
    {
        id: 9,
        question: "His __________ was evident in his refusal to help with any of the household chores, preferring instead to lounge on the couch all day.",
        chinese_question: "他的 __________ 表现在他拒绝帮助做任何家务，而是宁愿整天躺在沙发上。",
        answers: [
                { option: "A", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
                { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "indolence", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
                { option: "D", answer: "activity", chinese_answer: "活动", chinese_romanization: "huódòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indolence' means avoidance of activity or exertion; laziness." +
                "<br><br>" +
                "(A) 'diligence' means careful and persistent work or effort." +
                "<br><br>" +
                "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
                "<br><br>" +
                "(D) 'activity' means the condition in which things are happening or being done.",
        chinese_explanation: "(C) '懒惰'一词意味着避免活动或努力；懒惰。" +
                "<br><br>" +
                "(A) '勤奋' 意味着认真和持续的工作或努力。" +
                "<br><br>" +
                "(B) '热情' 意味着强烈而热切的享受、兴趣或赞同。" +
                "<br><br>" +
                "(D) '活动' 意味着事情正在发生或正在进行的状态。"
    },
    {
        id: 10,
        question: "Their friendship maintained a __________ of normalcy despite underlying tensions.",
        chinese_question: "尽管存在潜在的紧张关系，他们的友谊仍保持着 __________ 的正常状态。",
        answers: [
                { option: "A", answer: "rupture", chinese_answer: "破裂", chinese_romanization: "pòliè" },
                { option: "B", answer: "semblance", chinese_answer: "表象", chinese_romanization: "biǎoxiàng" },
                { option: "C", answer: "discord", chinese_answer: "不和", chinese_romanization: "bùhé" },
                { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'semblance' figuratively means the outward appearance or apparent form of something, especially when the reality is different." +
                "<br><br>" +
                "(A) 'rupture' means a breach or disturb." +
                "<br><br>" +
                "(C) 'discord' means disagreement between people." +
                "<br><br>" +
                "(D) 'conflict' means a serious disagreement or argument.",
        chinese_explanation: "(B) '表象' 在此语境下意指某物的外在表现或表面形式，尤其是当现实情况有所不同时。" +
                "<br><br>" +
                "(A) '破裂' 意味着破裂或扰乱。" +
                "<br><br>" +
                "(C) '不和' 意味着人们之间的分歧。" +
                "<br><br>" +
                "(D) '冲突' 意味着严重的分歧或争论。"
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
