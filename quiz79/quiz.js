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
        question: "After the diplomat criticized the foreign government's policies, there was an immediate __________, including travel bans, asset freezes, and diplomatic expulsions.",
        chinese_question: "在外交官批评外国政府的政策后，立即出现了 __________，包括旅行禁令、资产冻结和外交驱逐。",
        answers: [
            { option: "A", answer: "accolade", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "B", answer: "conciliation", chinese_answer: "和解", chinese_romanization: "héjiě" },
            { option: "C", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
            { option: "D", answer: "reprisal", chinese_answer: "报复", chinese_romanization: "bàofù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reprisal' means an act of retaliation." +
            "<br><br>" +
            "(A) 'accolade' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
            "<br><br>" +
            "(B) 'conciliation' means the action of stopping someone from being angry; placation." +
            "<br><br>" +
            "(C) 'amnesty' means an official pardon for people who have been convicted of political offenses.",
        chinese_explanation: "(D) '报复' 意味着报复行为。" +
            "<br><br>" +
            "(A) '荣誉' 意味着作为特别荣誉或承认功绩而授予的奖项或特权。" +
            "<br><br>" +
            "(B) '和解' 意味着让某人停止生气的行为；安抚。" +
            "<br><br>" +
            "(C) '大赦' 意味着对被判政治罪行的人的正式赦免。"
    },
    {
        id: 3,
        question: "At every gathering, he captivated the audience with his stories, proving himself to be a true __________ who was able to turn even mundane events into engaging tales.",
        chinese_question: "每次聚会，他都用他的故事吸引观众，证明自己是一个真正的__________，能够把平凡的事件变成引人入胜的故事。",
        answers: [
            { option: "A", answer: "bore", chinese_answer: "令人厌烦的人", chinese_romanization: "lìng rén yànfán de rén" },
            { option: "B", answer: "dullard", chinese_answer: "笨蛋", chinese_romanization: "bèndàn" },
            { option: "C", answer: "pedant", chinese_answer: "书呆子", chinese_romanization: "shūdāizi" },
            { option: "D", answer: "raconteur", chinese_answer: "健谈者", chinese_romanization: "jiàntán zhě" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'raconteur' means a person who tells anecdotes in a skillful and amusing way." +
            "<br><br>" +
            "(A) 'bore' means a person whose talk or behavior is dull and uninteresting." +
            "<br><br>" +
            "(B) 'dullard' means a slow or stupid person." +
            "<br><br>" +
            "(C) 'pedant' means a person who is excessively concerned with minor details and rules or with displaying academic learning.",
        chinese_explanation: "(D) '健谈者' 意味着能够巧妙而有趣地讲述轶事的人。" +
            "<br><br>" +
            "(A) '令人厌烦的人' 意味着讲话或行为沉闷无趣的人。" +
            "<br><br>" +
            "(B) '笨蛋' 意味着反应迟钝或愚蠢的人。" +
            "<br><br>" +
            "(C) '书呆子' 意味着过分关注细节和规则或炫耀学问的人。"
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
        question: "The eyewitness testimony gave __________ to the defense's argument, reinforcing their version of the events.",
        chinese_question: "目击者的证词为辩方的论点提供了__________，加强了他们对事件的描述。",
        answers: [
            { option: "A", answer: "disbelief", chinese_answer: "不信", chinese_romanization: "bù xìn" },
            { option: "B", answer: "skepticism", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "credence", chinese_answer: "可信性", chinese_romanization: "kěxìn xìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'credence' means belief in or acceptance of something as true." +
            "<br><br>" +
            "(A) 'disbelief' means inability or refusal to accept that something is true or real." +
            "<br><br>" +
            "(B) 'skepticism' means a skeptical attitude; doubt as to the truth of something." +
            "<br><br>" +
            "(C) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(D) '可信性' 意味着对某事物真实的信任或接受。" +
            "<br><br>" +
            "(A) '不信' 意味着无法或拒绝接受某事是真的或真实的。" +
            "<br><br>" +
            "(B) '怀疑' 意味着一种怀疑的态度；对某事的真实性表示怀疑。" +
            "<br><br>" +
            "(C) '怀疑' 意味着一种不确定或缺乏信念的感觉。"
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
