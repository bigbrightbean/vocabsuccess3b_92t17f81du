// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her strict __________ with the company’s policies earned her the reputation of being a reliable and trustworthy employee.",
        chinese_question: "她严格遵守公司政策，为她赢得了可靠和值得信赖的员工的声誉。",
        answers: [
            { option: "A", answer: "compliance", chinese_answer: "合规", chinese_romanization: "hégūi" },
            { option: "B", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "C", answer: "deviation", chinese_answer: "偏离", chinese_romanization: "piānlí" },
            { option: "D", answer: "dissent", chinese_answer: "异议", chinese_romanization: "yìyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'compliance' means the action or fact of complying with a wish or command." +
                "<br><br>" +
                "(B) 'negligence' means failure to take proper care in doing something." +
                "<br><br>" +
                "(C) 'deviation' means the action of departing from an established course or accepted standard." +
                "<br><br>" +
                "(D) 'dissent' means the expression or holding of opinions at variance with those previously, commonly, or officially held.",
        chinese_explanation: "(A) '合规' 意味着遵从愿望或命令的行为或事实。" +
                "<br><br>" +
                "(B) '疏忽' 意味着未能妥善处理某事。" +
                "<br><br>" +
                "(C) '偏离' 意味着离开既定路线或公认标准的行为。" +
                "<br><br>" +
                "(D) '异议' 意味着表达或持有与以前、普遍或官方持有的不同的意见。"
    },
    {
        id: 2,
        question: "His casual __________ during the meeting sparked an interesting discussion.",
        chinese_question: "他在会议上的随意 __________ 引发了一场有趣的讨论。",
        answers: [
            { option: "A", answer: "remark", chinese_answer: "评论", chinese_romanization: "pínglùn" },
            { option: "B", answer: "command", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
            { option: "C", answer: "order", chinese_answer: "指示", chinese_romanization: "zhǐshì" },
            { option: "D", answer: "plea", chinese_answer: "请求", chinese_romanization: "qǐngqiú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'remark' means a spoken statement or comment." +
                "<br><br>" +
                "(B) 'command' means an authoritative order." +
                "<br><br>" +
                "(C) 'order' means an authoritative instruction." +
                "<br><br>" +
                "(D) 'plea' means a request made in an urgent and emotional manner.",
        chinese_explanation: "(A) '评论' 意味着口头的陈述或评论。" +
                "<br><br>" +
                "(B) '命令' 意味着权威的指令。" +
                "<br><br>" +
                "(C) '指示' 意味着权威的指示。" +
                "<br><br>" +
                "(D) '请求' 意味着以紧急和情绪化的方式提出的请求。"
    },
    {
        id: 3,
    question: "The __________ he felt towards his friend's success was hard to conceal.",
    chinese_question: "他对朋友成功的 __________ 难以掩饰。",
    answers: [
        { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
        { option: "B", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
        { option: "C", answer: "pity", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
        { option: "D", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'envy' means a feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck." +
                "<br><br>" +
                "(A) 'joy' means a feeling of great pleasure and happiness." +
                "<br><br>" +
                "(C) 'pity' means the feeling of sorrow and compassion caused by the suffering and misfortunes of others." +
                "<br><br>" +
                "(D) 'admiration' means respect and warm approval.",
    chinese_explanation: "(B) '嫉妒' 意味着对他人的财产、品质或运气产生不满或怨恨的感觉。" +
                "<br><br>" +
                "(A) '喜悦' 意味着极大的快乐和幸福。" +
                "<br><br>" +
                "(C) '同情' 意味着因他人的痛苦和不幸而产生的悲伤和怜悯。" +
                "<br><br>" +
                "(D) '钦佩' 意味着尊重和高度认可。"
    },
    {
        id: 4,
        question: "The artist's work explores the __________ between reality and fantasy, creating a unique and thought-provoking experience.",
        chinese_question: "这位艺术家的作品探讨了现实与幻想之间的 __________，创造了独特且引人深思的体验。",
        answers: [
                { option: "A", answer: "convergence", chinese_answer: "汇聚", chinese_romanization: "huìjù" },
                { option: "B", answer: "dichotomy", chinese_answer: "二分法", chinese_romanization: "èrfēnfǎ" },
                { option: "C", answer: "fusion", chinese_answer: "融合", chinese_romanization: "rónghé" },
                { option: "D", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dichotomy' means a division or contrast between two things that are represented as being opposed or entirely different." +
                "<br><br>" +
                "(A) 'convergence' means the process or state of converging." +
                "<br><br>" +
                "(C) 'fusion' means the process or result of joining two or more things together to form a single entity." +
                "<br><br>" +
                "(D) 'similarity' means the state or fact of being similar.",
        chinese_explanation: "(B) '二分法'一词意味着两个事物之间的分裂或对比，这两个事物被描述为对立或完全不同。" +
                "<br><br>" +
                "(A) '汇聚' 意味着汇聚的过程或状态。" +
                "<br><br>" +
                "(C) '融合' 意味着将两种或多种事物结合成单一实体的过程或结果。" +
                "<br><br>" +
                "(D) '相似' 意味着相似的状态或事实。"
    },
    {
        id: 5,
        question: "His __________ to his mentor was apparent in the way he sought guidance and valued every piece of advice given.",
        chinese_question: "他对导师的 __________ 体现在他寻求指导并重视每一条建议的方式中。",
        answers: [
                { option: "A", answer: "arrogance", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
                { option: "B", answer: "nonchalance", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
                { option: "C", answer: "independence", chinese_answer: "独立", chinese_romanization: "dúlì" },
                { option: "D", answer: "deference", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'deference' means humble submission and respect." +
                "<br><br>" +
                "(A) 'arrogance' means having an exaggerated sense of one's own importance or abilities." +
                "<br><br>" +
                "(B) 'nonchalance' means the state of being casually calm and relaxed." +
                "<br><br>" +
                "(C) 'independence' means the fact or state of being independent.",
        chinese_explanation: "(D) '尊重'一词意味着谦卑的服从和尊敬。" +
                "<br><br>" +
                "(A) '傲慢' 意味着对自己的重要性或能力有夸大的感觉。" +
                "<br><br>" +
                "(B) '漠不关心' 意味着随意冷静和放松的状态。" +
                "<br><br>" +
                "(C) '独立' 意味着独立的事实或状态。"
    },
    {
        id: 6,
        question: "The hot, humid weather induced a feeling of __________, making it hard for anyone to stay productive.",
        chinese_question: "炎热潮湿的天气引起了 __________ 的感觉，使得任何人都难以保持高效。",
        answers: [
                { option: "A", answer: "vigor", chinese_answer: "活力", chinese_romanization: "huólì" },
                { option: "B", answer: "lassitude", chinese_answer: "疲倦", chinese_romanization: "píjuàn" },
                { option: "C", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "D", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lassitude' means a state of physical or mental weariness; lack of energy." +
                "<br><br>" +
                "(A) 'vigor' means physical strength and good health." +
                "<br><br>" +
                "(C) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
                "<br><br>" +
                "(D) 'alertness' means the quality of being alert and attentive.",
        chinese_explanation: "(B) '疲倦'一词意味着身体或精神上的疲劳状态；缺乏精力。" +
                "<br><br>" +
                "(A) '活力' 意味着身体的力量和健康。" +
                "<br><br>" +
                "(C) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
                "<br><br>" +
                "(D) '警觉' 意味着警觉和注意的品质。"
    },
    {
        id: 7,
        question: "The detective's __________ in confronting the dangerous suspect alone was both brave and foolhardy.",
        chinese_question: "侦探独自面对危险嫌疑人的 __________ 既勇敢又愚勇。",
        answers: [
                { option: "A", answer: "temerity", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
                { option: "B", answer: "caution", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
                { option: "C", answer: "fear", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
                { option: "D", answer: "foresight", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'temerity' figuratively means excessive confidence or boldness; audacity." +
                "<br><br>" +
                "(B) 'caution' means care taken to avoid danger or mistakes." +
                "<br><br>" +
                "(C) 'fear' means an unpleasant emotion caused by the belief that someone or something is dangerous." +
                "<br><br>" +
                "(D) 'foresight' means the ability to predict or the action of predicting what will happen or be needed in the future.",
        chinese_explanation: "(A) '鲁莽' 在此语境下意指过度的自信或大胆；胆大妄为。" +
                "<br><br>" +
                "(B) '谨慎' 意味着避免危险或错误的谨慎。" +
                "<br><br>" +
                "(C) '恐惧' 意味着因相信某人或某事危险而引起的不愉快情绪。" +
                "<br><br>" +
                "(D) '远见' 意味着预测或预测未来将发生或需要的能力。"
    },
    {
        id: 8,
        question: "Her linguistic __________ allowed her to master several languages, making her a valuable asset in international negotiations.",
        chinese_question: "她在语言方面的 __________ 使她掌握了几种语言，使她在国际谈判中成为宝贵的资产。",
        answers: [
                { option: "A", answer: "ineptitude", chinese_answer: "无能", chinese_romanization: "wúnéng" },
                { option: "B", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" },
                { option: "C", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
                { option: "D", answer: "prowess", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prowess' means skill or expertise in a particular activity or field; bravery in battle." +
                "<br><br>" +
                "(A) 'ineptitude' means lack of skill or ability." +
                "<br><br>" +
                "(B) 'reluctance' means unwillingness or disinclination to do something." +
                "<br><br>" +
                "(C) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(D) '英勇'一词意味着在特定活动或领域的技能或专长；战斗中的勇敢。" +
                "<br><br>" +
                "(A) '无能' 意味着缺乏技能或能力。" +
                "<br><br>" +
                "(B) '勉强' 意味着不愿意或不情愿做某事。" +
                "<br><br>" +
                "(C) '困惑' 意味着缺乏理解；不确定。"
    },
    {
        id: 9,
        question: "When the __________ tried to order a fancy coffee, he was confused by the long list of options and strange names.",
        chinese_question: "当这个 __________ 尝试点一杯高级咖啡时，他被长长的选项清单和奇怪的名字搞得一头雾水。",
        answers: [
                { option: "A", answer: "yokel", chinese_answer: "乡巴佬", chinese_romanization: "xiāngbālǎo" },
                { option: "B", answer: "barista", chinese_answer: "咖啡师", chinese_romanization: "kāfēi shī" },
                { option: "C", answer: "connoisseur", chinese_answer: "鉴赏家", chinese_romanization: "jiànshǎng jiā" },
                { option: "D", answer: "regular", chinese_answer: "常客", chinese_romanization: "chángkè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'yokel' means an uneducated and unsophisticated person from the countryside." +
                "<br><br>" +
                "(B) 'barista' means a person who serves in a coffee bar." +
                "<br><br>" +
                "(C) 'connoisseur' means an expert judge in matters of taste." +
                "<br><br>" +
                "(D) 'regular' means a person who frequents a particular place.",
        chinese_explanation: "(A) '乡巴佬' 意味着来自乡村的未受教育和不懂世故的人。" +
                "<br><br>" +
                "(B) '咖啡师' 意味着在咖啡馆服务的人。" +
                "<br><br>" +
                "(C) '鉴赏家' 意味着在品味方面的专家。" +
                "<br><br>" +
                "(D) '常客' 意味着经常光顾某个地方的人。"
    },
    {
        id: 10,
        question: "The __________ of qualified teachers in rural areas affects the quality of education that students receive.",
        chinese_question: "农村地区合格教师的 __________ 影响了学生接受的教育质量。",
        answers: [
                { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
                { option: "B", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "C", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" },
                { option: "D", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paucity' means the presence of something in only small or insufficient quantities or amounts; scarcity." +
                "<br><br>" +
                "(A) 'abundance' means a very large quantity of something." +
                "<br><br>" +
                "(C) 'wealth' means an abundance of valuable possessions or money." +
                "<br><br>" +
                "(D) 'prosperity' means the state of being prosperous.",
        chinese_explanation: "(B) '缺乏'一词意味着只有少量或不足数量的东西的存在；稀缺。" +
                "<br><br>" +
                "(A) '丰富' 意味着非常大量的东西。" +
                "<br><br>" +
                "(C) '财富' 意味着大量有价值的财产或金钱。" +
                "<br><br>" +
                "(D) '繁荣' 意味着繁荣的状态。"
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
