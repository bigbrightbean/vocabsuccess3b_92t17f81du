// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The rock star's __________ behavior offstage often made headlines as he would indulge in wild parties and reckless actions.",
        chinese_question: "这位摇滚明星在舞台下的 __________ 行为经常成为头条新闻，因为他沉迷于狂野的派对和鲁莽的行为。",
        answers: [
            { option: "A", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" },
            { option: "B", answer: "disciplined", chinese_answer: "有纪律的", chinese_romanization: "yǒu jìlǜ de" },
            { option: "C", answer: "licentious", chinese_answer: "放荡的", chinese_romanization: "fàngdàng de" },
            { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'licentious' means promiscuous and unprincipled in sexual matters." +
            "<br><br>" +
            "(A) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate." +
            "<br><br>" +
            "(B) 'disciplined' means showing a controlled form of behavior or way of working." +
            "<br><br>" +
            "(D) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements.",
        chinese_explanation: "(C) '放荡的' 意味着在性方面放纵和没有原则的。" +
            "<br><br>" +
            "(A) '克制的' 意味着以克制或适度为特征的；不动感情的或无激情的。" +
            "<br><br>" +
            "(B) '有纪律的' 意味着表现出一种受控制的行为方式或工作方式。" +
            "<br><br>" +
            "(D) '谦虚的' 意味着对自己能力或成就的评价谦虚或适中的."
    },
    {
        id: 2,
    question: "His __________ reaction to the news, like gasping loudly and clutching his chest, made everyone think it was a bigger deal than it actually was.",
    chinese_question: "他对消息的 __________ 反应，例如大声喘气和捂住胸口，让每个人都认为这件事比实际情况要严重得多。",
    answers: [
        { option: "A", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
        { option: "B", answer: "theatrical", chinese_answer: "戏剧性的", chinese_romanization: "xìjù xìng de" },
        { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
        { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'theatrical' means exaggerated and excessively dramatic." +
        "<br><br>" +
        "(A) 'understated' means presented or expressed in a subtle and effective way." +
        "<br><br>" +
        "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
        "<br><br>" +
        "(D) 'mild' means not severe, serious, or harsh.",
    chinese_explanation: "(B) '戏剧性的' 意味着夸张和过度戏剧化的。" +
        "<br><br>" +
        "(A) '低调的' 意味着以微妙和有效的方式表达或表现的。" +
        "<br><br>" +
        "(C) '平静的' 意味着不表现出或感到紧张、愤怒或其他强烈情感的。" +
        "<br><br>" +
        "(D) '温和的' 意味着不严重、不激烈或不苛刻的。"
    },
    {
        id: 3,
        question: "She had an __________ understanding of people's emotions, often knowing how they felt without them saying a word.",
        chinese_question: "她对人们情感有一种__________的理解，常常在他们不说话的情况下知道他们的感受。",
        answers: [
            { option: "A", answer: "logical", chinese_answer: "合乎逻辑的", chinese_romanization: "héhū luójí de" },
            { option: "B", answer: "analytical", chinese_answer: "分析的", chinese_romanization: "fēnxī de" },
            { option: "C", answer: "intuitive", chinese_answer: "直觉的", chinese_romanization: "zhíjué de" },
            { option: "D", answer: "calculated", chinese_answer: "经过计算的", chinese_romanization: "jīngguò jìsuàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intuitive' means using or based on what one feels to be true even without conscious reasoning; instinctive." + 
            "<br><br>" +
            "(A) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(B) 'analytical' means relating to or using analysis or logical reasoning." +
            "<br><br>" +
            "(D) 'calculated' means (of an action) done with full awareness of the likely consequences.",
        chinese_explanation: "(C) '直觉的'一词意味着基于感觉的，甚至没有有意识的推理；本能的。" + 
            "<br><br>" +
            "(A) '合乎逻辑的' 意味着符合逻辑规则或正式论证的。" +
            "<br><br>" +
            "(B) '分析的' 意味着与分析或逻辑推理有关的。" +
            "<br><br>" +
            "(D) '经过计算的' 意味着（行为）在充分意识到可能后果的情况下进行的。"
    },
    {
        id: 4,
        question: "The negotiations required a __________ touch, as any misstep could derail the entire process.",
        chinese_question: "谈判需要 __________ 的处理，因为任何失误都可能使整个过程脱轨。",
        answers: [
          { option: "A", answer: "heavy-handed", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
          { option: "B", answer: "blunt", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
          { option: "C", answer: "forceful", chinese_answer: "强力", chinese_romanization: "qiánglì" },
          { option: "D", answer: "delicate", chinese_answer: "精细", chinese_romanization: "jīngxì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'delicate' means involving a careful and sensitive handling." +
          "<br><br>" +
          "(A) 'heavy-handed' means clumsy or insensitive." +
          "<br><br>" +
          "(B) 'blunt' means uncompromisingly forthright." +
          "<br><br>" +
          "(C) 'forceful' means strong and assertive; vigorous and powerful.",
        chinese_explanation: "(D) '精细' 意味着需要小心和敏感的处理。" +
          "<br><br>" +
          "(A) '笨拙' 意味着笨拙或不敏感。" +
          "<br><br>" +
          "(B) '直率' 意味着毫不妥协地直率。" +
          "<br><br>" +
          "(C) '强力' 意味着强壮和果断的；精力充沛和强大的。"
    },
    {
        id: 5,
        question: "In her __________ analysis of the book, she uncovered many subtle themes and underlying messages.",
        chinese_question: "在她对这本书的 __________ 分析中，她揭示了许多微妙的主题和潜在的信息。",
        answers: [
            { option: "A", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
            { option: "B", answer: "cursory", chinese_answer: "草率", chinese_romanization: "cǎoshuài" },
            { option: "C", answer: "hasty", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "D", answer: "thoughtful", chinese_answer: "深思熟虑", chinese_romanization: "shēnsī shúlǜ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'thoughtful' means showing careful consideration or attention." +
            "<br><br>" +
            "(A) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(B) 'cursory' means hasty and therefore not thorough or detailed." +
            "<br><br>" +
            "(C) 'hasty' means done with excessive speed or urgency; hurried.",
        chinese_explanation: "(D) '深思熟虑' 意味着表现出仔细的考虑或关注。" +
            "<br><br>" +
            "(A) '肤浅' 意味着存在于或发生在表面。" +
            "<br><br>" +
            "(B) '草率' 意味着匆忙，因此不详细或不彻底。" +
            "<br><br>" +
            "(C) '匆忙' 意味着以过快或紧急的速度完成；仓促。"
    },
    {
        id: 6,
        question: "The boss was __________ after hearing about the team's repeated mistakes on the project.",
        chinese_question: "在听到团队在项目中的重复错误后，老板非常 __________。",
        answers: [
            { option: "A", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "irate", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" },
            { option: "D", answer: "joyous", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'irate' means feeling or characterized by great anger." + 
            "<br><br>" +
            "(A) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'joyous' means full of happiness and joy.",
        chinese_explanation: "(B) '愤怒' 意味着感到或表现出极大的愤怒。" + 
            "<br><br>" +
            "(A) '高兴' 意味着感到或表现出极大的愉快。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '快乐' 意味着充满幸福和喜悦。"
    },
    {
        id: 7,
        question: "The company's financial losses this quarter were __________, forcing them to consider bankruptcy.",
        chinese_question: "公司本季度的财务损失 __________，迫使他们考虑破产。",
        answers: [
            { option: "A", answer: "horrendous", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'horrendous' means extremely unpleasant, horrifying, or terrible." + 
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '可怕的' 意味着极其不愉快、恐怖或可怕的。" + 
            "<br><br>" +
            "(B) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着如此小或不重要以至于不值得考虑的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着太小或不重要以至于不值得考虑的。"
    },
    {
        id: 8,
        question: "In meetings, she often appeared __________, rarely sharing her opinions or showing interest in the discussions.",
        chinese_question: "在会议上，她经常显得 __________，很少分享她的意见或对讨论表现出兴趣。",
        answers: [
            { option: "A", answer: "aloof", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "participative", chinese_answer: "参与的", chinese_romanization: "cānyù de" },
            { option: "D", answer: "passionate", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aloof' means not friendly or forthcoming; cool and distant." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'participative' means taking part in something." +
            "<br><br>" +
            "(D) 'passionate' means showing or caused by strong feelings or a strong belief.",
        chinese_explanation: "(A) '冷淡的' 意味着不友好或不主动；冷酷而疏远的。" +
            "<br><br>" +
            "(B) '热情的' 意味着表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '参与的' 意味着参与某事的。" +
            "<br><br>" +
            "(D) '充满激情的' 意味着表现出或由强烈感情或强烈信念引起的。"
    },
    {
        id: 9,
        question: "His mood was __________, making it difficult for others to know how he would react.",
        chinese_question: "他的情绪是 __________ 的，使得别人很难知道他会如何反应。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "B", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "C", answer: "unpredictable", chinese_answer: "不可预测的", chinese_romanization: "bù kě yùcè de" },
            { option: "D", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unpredictable' figuratively means likely to change suddenly and without reason." +
                "<br><br>" +
                "(A) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
                "<br><br>" +
                "(B) 'reliable' means consistently good in quality or performance; able to be trusted." +
                "<br><br>" +
                "(D) 'stable' means not likely to change or fail; firmly established.",
        chinese_explanation: "(C) '不可预测的' 在比喻意义上意味着可能突然且无理由地改变的。" +
                "<br><br>" +
                "(A) '一致的' 意味着一段时间内以同样的方式行事或完成的，特别是为了公平或准确。" +
                "<br><br>" +
                "(B) '可靠的' 意味着质量或性能始终如一的好；可以信赖的。" +
                "<br><br>" +
                "(D) '稳定的' 意味着不太可能改变或失败的；稳固的。"
    },
    {
        id: 10,
        question: "The __________ behavior of the guests ruined the otherwise elegant event.",
        chinese_question: "客人的 __________ 行为破坏了本来优雅的活动。",
        answers: [
            { option: "A", answer: "courteous", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "B", answer: "graceful", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "uncouth", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "D", answer: "polished", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'uncouth' means lacking good manners, refinement, or grace." +
            "<br><br>" +
            "(A) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(B) 'graceful' means having or showing grace or elegance." +
            "<br><br>" +
            "(D) 'polished' means refined, sophisticated, or elegant.",
        chinese_explanation: "(C) '粗鲁的' 意味着缺乏良好礼貌、修养或优雅的。" +
            "<br><br>" +
            "(A) '礼貌的' 意味着礼貌、尊重或体贴的方式。" +
            "<br><br>" +
            "(B) '优雅的' 意味着具有或展示优雅或优雅的。" +
            "<br><br>" +
            "(D) '优雅的' 意味着精致、老练或优雅的。"
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
