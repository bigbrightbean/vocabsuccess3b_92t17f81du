// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The villain in the story was described as a __________ character, whose actions were motivated by pure malice.",
        chinese_question: "故事中的反派被描述为一个 __________ 的角色，他的行为完全出于恶意。",
        answers: [
            { option: "A", answer: "heroic", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
            { option: "B", answer: "loathsome", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "C", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìng rén qīnpèi de" },
            { option: "D", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'loathsome' means causing hatred or disgust; repulsive." +
            "<br><br>" +
            "(A) 'heroic' means having the characteristics of a hero or heroine; very brave." +
            "<br><br>" +
            "(C) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(D) 'noble' means having or showing fine personal qualities or high moral principles.",
        chinese_explanation: "(B) '令人厌恶的' 意味着引起憎恨或厌恶的；令人反感的。" +
            "<br><br>" +
            "(A) '英勇的' 意味着具有英雄或女英雄的特征；非常勇敢的。" +
            "<br><br>" +
            "(C) '令人钦佩的' 意味着引起或应得尊重和赞同的。" +
            "<br><br>" +
            "(D) '高尚的' 意味着具有或表现出优良的个人品质或高尚的道德原则的。"
    },
    {
        id: 2,
        question: "Her __________ decisions in business always led to profitable outcomes.",
        chinese_question: "她在商业中的__________决策总是带来盈利的结果。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "B", answer: "educated", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "C", answer: "unlearned", chinese_answer: "无学识的", chinese_romanization: "wú xuéshí de" },
            { option: "D", answer: "uninformed", chinese_answer: "不知情的", chinese_romanization: "bù zhīqíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'educated' means having received education, especially to a high level. Figuratively, it can mean having sound judgment and knowledge." +
            "<br><br>" +
            "(A) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(C) 'unlearned' means not educated; unschooled." +
            "<br><br>" +
            "(D) 'uninformed' means not having or showing awareness or understanding of the facts.",
        chinese_explanation: "(B) '明智的' 一词意味着接受过教育，尤其是高等教育。比喻地，它可以表示具有正确判断力和知识。" +
            "<br><br>" +
            "(A) '无知的' 意味着普遍缺乏知识或意识；未受教育或不成熟的。" +
            "<br><br>" +
            "(C) '无学识的' 意味着未受教育的；未上学的。" +
            "<br><br>" +
            "(D) '不知情的' 意味着没有或未表现出事实的意识或理解。"
    },
    {
        id: 3,
        question: "The __________ adventurer set off on a solo expedition through the dangerous mountains.",
        chinese_question: "那个 __________ 的冒险家开始了穿越危险山脉的单人探险。",
        answers: [
            { option: "A", answer: "plucky", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "B", answer: "fearful", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūn yù shuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plucky' means having or showing determined courage in the face of difficulties." +
            "<br><br>" +
            "(B) 'fearful' means feeling afraid or showing fear." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'lethargic' means sluggish and apathetic.",
        chinese_explanation: "(A) '勇敢' 意味着在困难面前表现出坚定的勇气。" +
            "<br><br>" +
            "(B) '恐惧' 意味着感到害怕或表现出恐惧。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(D) '昏昏欲睡' 意味着懒洋洋和冷淡的状态。"
    },
    {
        id: 4,
        question: "The company became __________ for its poor customer service and high prices.",
        chinese_question: "这家公司因其糟糕的客户服务和高价而变得__________。",
        answers: [
            { option: "A", answer: "unknown", chinese_answer: "不为人知的", chinese_romanization: "bù wéi rén zhī de" },
            { option: "B", answer: "reputable", chinese_answer: "有声望的", chinese_romanization: "yǒu shēngwàng de" },
            { option: "C", answer: "notorious", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíng zhāozhù de" },
            { option: "D", answer: "honorable", chinese_answer: "可敬的", chinese_romanization: "kějìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'notorious' means famous or well known, typically for some bad quality or deed. Figuratively, it can mean being infamous or having a bad reputation." +
            "<br><br>" +
            "(A) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(B) 'reputable' means having a good reputation." +
            "<br><br>" +
            "(D) 'honorable' means bringing or worthy of honor.",
        chinese_explanation: "(C) '臭名昭著的'一词意味着因某些不良品质或行为而著名的。比喻地，它可以表示声名狼藉或声誉不佳的。" +
            "<br><br>" +
            "(A) '不为人知的' 意味着不知名或不熟悉的。" +
            "<br><br>" +
            "(B) '有声望的' 意味着有良好声誉的。" +
            "<br><br>" +
            "(D) '可敬的' 意味着带来或值得荣誉的."
    },
    {
        id: 5,
    question: "The ruler's __________ lifestyle, filled with excess and debauchery, eventually led to the downfall of his reign.",
    chinese_question: "统治者 __________ 的生活方式充满了奢侈和堕落，最终导致了他的统治垮台。",
    answers: [
        { option: "A", answer: "temperate", chinese_answer: "节制的", chinese_romanization: "jiézhì de" },
        { option: "B", answer: "licentious", chinese_answer: "放荡的", chinese_romanization: "fàngdàng de" },
        { option: "C", answer: "austere", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
        { option: "D", answer: "disciplined", chinese_answer: "有纪律的", chinese_romanization: "yǒu jìlǜ de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'licentious' means promiscuous and unprincipled in sexual matters." +
        "<br><br>" +
        "(A) 'temperate' means showing moderation or self-restraint." +
        "<br><br>" +
        "(C) 'austere' means severe or strict in manner, attitude, or appearance." +
        "<br><br>" +
        "(D) 'disciplined' means showing a controlled form of behavior or way of working.",
    chinese_explanation: "(B) '放荡的' 意味着在性方面放纵和没有原则的。" +
        "<br><br>" +
        "(A) '节制的' 意味着表现出节制或自我克制的。" +
        "<br><br>" +
        "(C) '严肃的' 意味着在态度、外表上严厉或严格的。" +
        "<br><br>" +
        "(D) '有纪律的' 意味着表现出一种受控制的行为方式或工作方式。"
    },
    {
        id: 6,
        question: "It was __________ to find out that his promotion was given to someone less qualified.",
        chinese_question: "得知他的晋升被授予了一个资格较低的人，这让他感到非常 __________。",
        answers: [
            { option: "A", answer: "comforting", chinese_answer: "安慰的", chinese_romanization: "ānwèi de" },
            { option: "B", answer: "reassuring", chinese_answer: "令人放心的", chinese_romanization: "lìngrén fàngxīn de" },
            { option: "C", answer: "gratifying", chinese_answer: "令人满意的", chinese_romanization: "lìngrén mǎnyì de" },
            { option: "D", answer: "galling", chinese_answer: "恼火的", chinese_romanization: "nǎohuǒ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'galling' means causing annoyance or resentment; annoying." + 
            "<br><br>" + 
            "(A) 'comforting' means serving to alleviate a person's feelings of grief or distress." + 
            "<br><br>" + 
            "(B) 'reassuring' means serving to remove someone's doubts or fears." + 
            "<br><br>" + 
            "(C) 'gratifying' means giving pleasure or satisfaction.",
        chinese_explanation: "(D) '恼火的' 意味着引起烦恼或怨恨的；恼人的。" +
            "<br><br>" +
            "(A) '安慰的' 意味着有助于缓解一个人的悲伤或痛苦的。" +
            "<br><br>" +
            "(B) '令人放心的' 意味着消除某人疑虑或恐惧的。" +
            "<br><br>" +
            "(C) '令人满意的' 意味着带来满足或快乐的。"
    },
    {
        id: 7,
        question: "His __________ approach to politics often led to disappointment when faced with harsh realities.",
        chinese_question: "他对政治的__________态度在面对严酷的现实时常常导致失望。",
        answers: [
            { option: "A", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "B", answer: "pragmatic", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
            { option: "C", answer: "idealistic", chinese_answer: "理想主义的", chinese_romanization: "lǐxiǎng zhǔyì de" },
            { option: "D", answer: "cynical", chinese_answer: "愤世嫉俗的", chinese_romanization: "fènshì jísú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'idealistic' means characterized by idealism; unrealistically aiming for perfection. Figuratively, it can mean being hopeful or naive." + 
            "<br><br>" +
            "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(B) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
            "<br><br>" +
            "(D) 'cynical' means believing that people are motivated by self-interest; distrustful of human sincerity or integrity.",
        chinese_explanation: "(C) '理想主义的'一词意味着由理想主义特征的；不切实际地追求完美的。比喻地，它可以表示充满希望或天真的。" + 
            "<br><br>" +
            "(A) '现实的' 意味着拥有或表现出对能实现或预期的事物的明智和实际的想法。" +
            "<br><br>" +
            "(B) '实际的' 意味着以实际而不是理论上的考虑来明智和现实地处理事情的。" +
            "<br><br>" +
            "(D) '愤世嫉俗的' 意味着认为人们是出于私利动机的；不信任人类诚意或正直的。"
    },
    {
        id: 8,
        question: "Despite the noise around him, he remained __________ to the commotion.",
        chinese_question: "尽管周围很吵，他仍然对骚动__________。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
            { option: "B", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
            { option: "C", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "D", answer: "conscious", chinese_answer: "有意识的", chinese_romanization: "yǒuyìshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
                "<br><br>" +
                "(A) 'aware' means having knowledge or perception of a situation or fact." +
                "<br><br>" +
                "(C) 'attentive' means paying close attention to something." +
                "<br><br>" +
                "(D) 'conscious' means aware of and responding to one's surroundings.",
        chinese_explanation: "(B) '无视的' 一词意味着对周围发生的事情没有意识或不关心。" +
                "<br><br>" +
                "(A) '知道的' 意味着对某种情况或事实有知识或感知。" +
                "<br><br>" +
                "(C) '注意的' 意味着密切关注某事。" +
                "<br><br>" +
                "(D) '有意识的' 意味着对周围的环境有意识并做出反应。"
    },
    {
        id: 9,
        question: "His __________ remark during the funeral was met with disapproval, as it was deemed inappropriate for the somber occasion.",
        chinese_question: "他在葬礼上的 __________ 言论遭到了反对，因为这被认为对庄严的场合不合适。",
        answers: [
            { option: "A", answer: "austere", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "maudlin", chinese_answer: "感伤的", chinese_romanization: "gǎnshāng de" },
            { option: "C", answer: "sepulchral", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "D", answer: "facetious", chinese_answer: "轻率的", chinese_romanization: "qīngshuài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'facetious' means treating serious issues with deliberately inappropriate humor; flippant." +
            "<br><br>" +
            "(A) 'austere' means severe or strict in manner, attitude, or appearance." +
            "<br><br>" +
            "(B) 'maudlin' means self-pityingly or tearfully sentimental." +
            "<br><br>" +
            "(C) 'sepulchral' means relating to a tomb or interment; gloomy.",
        chinese_explanation: "(D) '轻率的' 意味着以故意不适当的幽默对待严肃的问题；轻浮。" +
            "<br><br>" +
            "(A) '严肃的' 意味着举止、态度或外表严厉或严格。" +
            "<br><br>" +
            "(B) '感伤的' 意味着自怜或含泪的多愁善感。" +
            "<br><br>" +
            "(C) '阴沉的' 意味着与坟墓或埋葬有关；阴郁的。"
    },
    {
        id: 10,
        question: "After years of mismanagement, the once thriving company became __________ and struggled to compete in the market.",
        chinese_question: "经过多年的管理不善，这家曾经繁荣的公司变得 __________，难以在市场上竞争。",
        answers: [
            { option: "A", answer: "robust", chinese_answer: "强健的", chinese_romanization: "qiángjiàn de" },
            { option: "B", answer: "vigorous", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "C", answer: "resilient", chinese_answer: "有弹性的", chinese_romanization: "yǒu tánxìng de" },
            { option: "D", answer: "effete", chinese_answer: "衰弱的", chinese_romanization: "shuāiruò de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'effete' means lacking in wholesome vigor; degenerate; decadent." +
            "<br><br>" +
            "(A) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(B) 'vigorous' means strong, healthy, and full of energy." +
            "<br><br>" +
            "(C) 'resilient' means able to withstand or recover quickly from difficult conditions.",
        chinese_explanation: "(D) '衰弱的' 意味着缺乏健康的活力；退化的；堕落的。" +
            "<br><br>" +
            "(A) '强健的' 意味着强壮和健康；充满活力。" +
            "<br><br>" +
            "(B) '精力充沛的' 意味着强壮、健康、充满能量。" +
            "<br><br>" +
            "(C) '有弹性的' 意味着能够快速从困难条件中承受或恢复过来。"
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
