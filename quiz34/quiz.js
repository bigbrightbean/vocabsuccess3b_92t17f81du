// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new manager’s __________ address set a hopeful tone for the company’s future and marked the start of his tenure.",
        chinese_question: "新经理的__________演讲为公司的未来定下了希望的基调，并标志着他任期的开始。",
        answers: [
            { option: "A", answer: "final", chinese_answer: "最终", chinese_romanization: "zuìzhōng" },
            { option: "B", answer: "redundant", chinese_answer: "多余", chinese_romanization: "duōyú" },
            { option: "C", answer: "dismissive", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" },
            { option: "D", answer: "inaugural", chinese_answer: "就职", chinese_romanization: "jiùzhí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inaugural' means marking the beginning of an institution, activity, or period of office." +
            "<br><br>" +
            "(A) 'final' means coming at the end of a series." +
            "<br><br>" +
            "(B) 'redundant' means not or no longer needed or useful." +
            "<br><br>" +
            "(C) 'dismissive' means feeling or showing that something is unworthy of consideration.",
        chinese_explanation: "(D) '就职'一词意味着标志着一个机构、活动或任期的开始。" +
            "<br><br>" +
            "(A) '最终' 意味着在一系列中最后。" +
            "<br><br>" +
            "(B) '多余' 意味着不再需要或不再有用。" +
            "<br><br>" +
            "(C) '轻蔑' 意味着感到或表明某事不值得考虑。"
    },
    {
        id: 2,
        question: "Her company made the event much more __________ with her lively conversation and cheerful attitude.",
        chinese_question: "她的陪伴和愉快的谈话使活动变得更加 __________。",
        answers: [
            { option: "A", answer: "stressful", chinese_answer: "压力大的", chinese_romanization: "yālì dà de" },
            { option: "B", answer: "tiring", chinese_answer: "疲惫的", chinese_romanization: "píbèi de" },
            { option: "C", answer: "pleasurable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pleasurable' means pleasing; enjoyable. Figuratively, it can mean making something more enjoyable or fun." +
            "<br><br>" +
            "(A) 'stressful' means causing mental or emotional stress." +
            "<br><br>" +
            "(B) 'tiring' means causing one to need rest or sleep; exhausting." +
            "<br><br>" +
            "(D) 'boring' means not interesting; tedious.",
        chinese_explanation: "(C) '愉快的' 一词意味着令人愉快的；享受的。比喻地，它可以表示使某事变得更愉快或有趣。" +
            "<br><br>" +
            "(A) '压力大的' 意味着引起心理或情绪压力的。" +
            "<br><br>" +
            "(B) '疲惫的' 意味着使人需要休息或睡眠的；令人疲惫的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着不有趣的；乏味的。"
    },
    {
        id: 3,
        question: "The CEO had an __________ presence in the company because he made all major decisions and controlled all strategic initiatives.",
        chinese_question: "这位首席执行官在公司内拥有__________的存在，因为他做出了所有重大决定并控制了所有战略举措。",
        answers: [
                { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
                { option: "B", answer: "powerless", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
                { option: "C", answer: "omnipotent", chinese_answer: "全能的", chinese_romanization: "quánnéng de" },
                { option: "D", answer: "helpless", chinese_answer: "无助的", chinese_romanization: "wúzhù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'omnipotent' means having unlimited power; able to do anything. Figuratively, it can mean having total control or authority." + 
            "<br><br>" + 
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." + 
            "<br><br>" + 
            "(B) 'powerless' means without ability, influence, or power." + 
            "<br><br>" + 
            "(D) 'helpless' means unable to defend oneself or to act without help.",
        chinese_explanation: "(C) '全能的'一词意味着拥有无限的力量；能够做任何事情的。比喻地，它可以表示拥有完全的控制或权力。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力要求高的任务的力量；缺乏体力和精力的。" +
            "<br><br>" +
            "(B) '无力的' 意味着没有能力、影响或力量的。" +
            "<br><br>" +
            "(D) '无助的' 意味着无法自我防卫或在没有帮助的情况下行动的."
    },
    {
        id: 4,
        question: "The __________ reforms were aimed at improving the well-being of all citizens by providing better healthcare and education.",
        chinese_question: "这些 __________ 改革旨在通过提供更好的医疗和教育来改善所有公民的福祉。",
        answers: [
            { option: "A", answer: "economic", chinese_answer: "经济的", chinese_romanization: "jīngjì de" },
            { option: "B", answer: "industrial", chinese_answer: "工业的", chinese_romanization: "gōngyè de" },
            { option: "C", answer: "political", chinese_answer: "政治的", chinese_romanization: "zhèngzhì de" },
            { option: "D", answer: "social", chinese_answer: "社会的", chinese_romanization: "shèhuì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'social' means relating to society or its organization." + 
            "<br><br>" +
            "(A) 'economic' means relating to economics or the economy." +
            "<br><br>" +
            "(B) 'industrial' means relating to or characterized by industry." +
            "<br><br>" +
            "(C) 'political' means relating to the government or public affairs of a country.",
        chinese_explanation: "(D) '社会的' 意味着与社会或其组织有关的。" + 
            "<br><br>" +
            "(A) '经济的' 意味着与经济学或经济有关的。" +
            "<br><br>" +
            "(B) '工业的' 意味着与工业有关或以工业为特征的。" +
            "<br><br>" +
            "(C) '政治的' 意味着与国家的政府或公共事务有关的。"
    },
    {
        id: 5,
        question: "The __________ atmosphere in the office was palpable after the layoffs were announced.",
        chinese_question: "裁员宣布后，办公室的__________气氛显而易见。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "C", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "D", answer: "happy", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'morose' means sullen and ill-tempered. Figuratively, it can mean a gloomy and depressing mood." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'upbeat' means cheerful; optimistic." +
            "<br><br>" +
            "(D) 'happy' means feeling or showing pleasure or contentment.",
        chinese_explanation: "(C) '忧郁的'一词意味着阴沉和脾气暴躁的。比喻地，它可以表示一种阴郁和令人沮丧的情绪。" +
            "<br><br>" +
            "(A) '愉快的' 意味着明显快乐和乐观的。" +
            "<br><br>" +
            "(B) '乐观的' 意味着乐观的；乐观的。" +
            "<br><br>" +
            "(D) '高兴的' 意味着感到或表现出快乐或满足。"
    },
    {
        id: 6,
        question: "His habits, like leaving dirty dishes everywhere and not cleaning up after himself, were __________ and a constant source of frustration for his roommates.",
        chinese_question: "他的习惯，比如把脏盘子到处乱放，不打扫卫生，是__________的，是室友们不断的烦恼来源。",
        answers: [
            { option: "A", answer: "neat", chinese_answer: "整洁的", chinese_romanization: "zhěngjié de" },
            { option: "B", answer: "unsanitary", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" },
            { option: "C", answer: "tidy", chinese_answer: "井井有条的", chinese_romanization: "jǐngjǐngyǒutiáo de" },
            { option: "D", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unsanitary' means not clean or sterile." +
            "<br><br>" +
            "(A) 'neat' means arranged in an orderly, tidy way." +
            "<br><br>" +
            "(C) 'tidy' means arranged neatly and in order." +
            "<br><br>" +
            "(D) 'organized' means arranged or structured in a systematic way.",
        chinese_explanation: "(B) '不卫生的'一词意味着不干净或不无菌的。" +
            "<br><br>" +
            "(A) '整洁的' 意味着以有序、整洁的方式排列的。" +
            "<br><br>" +
            "(C) '井井有条的' 意味着整齐且有条理地排列的。" +
            "<br><br>" +
            "(D) '有组织的' 意味着以系统方式排列或结构化的。"
    },
    {
        id: 7,
        question: "Her __________ return to the company after winning the prestigious award was met with applause and admiration.",
        chinese_question: "她在获得该项殊荣后 __________ 回到公司，受到了掌声和钦佩。",
        answers: [
            { option: "A", answer: "triumphant", chinese_answer: "胜利", chinese_romanization: "shènglì" },
            { option: "B", answer: "humble", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "C", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "D", answer: "unremarkable", chinese_answer: "平凡", chinese_romanization: "píngfán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'triumphant' means having achieved victory or success." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly interesting or surprising.",
        chinese_explanation: "(A) '胜利' 意味着取得了胜利或成功。" +
            "<br><br>" +
            "(B) '谦逊' 意味着对自己的重要性有或表现出谦虚的评价。" +
            "<br><br>" +
            "(C) '谦虚' 意味着对自己的能力或成就表现出谦虚。" +
            "<br><br>" +
            "(D) '平凡' 意味着没有特别有趣或令人惊讶的。"
    },
    {
        id: 8,
    question: "The restaurant's __________ lighting and soft music created the perfect setting for a romantic dinner.",
    chinese_question: "餐厅的 __________ 灯光和轻柔的音乐为浪漫的晚餐创造了完美的环境。",
    answers: [
        { option: "A", answer: "atmospheric", chinese_answer: "有氛围的", chinese_romanization: "yǒu fēnwéi de" },
        { option: "B", answer: "harsh", chinese_answer: "刺眼的", chinese_romanization: "cìyǎn de" },
        { option: "C", answer: "glaring", chinese_answer: "耀眼的", chinese_romanization: "yàoyǎn de" },
        { option: "D", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'atmospheric' means creating a distinctive mood, typically of romance, mystery, or nostalgia." +
        "<br><br>" +
        "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
        "<br><br>" +
        "(C) 'glaring' means giving out or reflecting a strong or dazzling light." +
        "<br><br>" +
        "(D) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest.",
    chinese_explanation: "(A) '有氛围的' 意味着营造出一种独特的情绪，通常是浪漫、神秘或怀旧的。" +
        "<br><br>" +
        "(B) '刺眼的' 意味着对感官不愉快地粗糙或刺耳的。" +
        "<br><br>" +
        "(C) '耀眼的' 意味着发出或反射强光或眩光的。" +
        "<br><br>" +
        "(D) '单调的' 意味着乏味、冗长且重复的；缺乏多样性和兴趣的。"
    },
    {
        id: 9,
        question: "The use of smartphones has become __________ in modern society, with nearly everyone relying on them for communication and information.",
        chinese_question: "在现代社会中，智能手机的使用变得非常 __________，几乎每个人都依赖它们进行交流和获取信息。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "B", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "obsolete", chinese_answer: "废弃的", chinese_romanization: "fèiqì de" },
            { option: "D", answer: "prevalent", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prevalent' means widespread in a particular area or at a particular time." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'outdated' means no longer in use or fashionable." +
            "<br><br>" +
            "(C) 'obsolete' means no longer produced or used; out of date.",
        chinese_explanation: "(D) '普遍的' 意味着在特定区域或特定时间内广泛存在的。" +
            "<br><br>" +
            "(A) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(B) '过时的' 意味着不再使用或不时尚的。" +
            "<br><br>" +
            "(C) '废弃的' 意味着不再生产或使用的；过时的。"
    },
    {
        id: 10,
    question: "The boy was __________ in practicing his guitar every day, despite his friends inviting him to play outside.",
    chinese_question: "尽管他的朋友邀请他去外面玩，这个男孩仍然每天 __________ 地练习吉他。",
    answers: [
        { option: "A", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
        { option: "B", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
        { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "persistent", chinese_answer: "坚持的", chinese_romanization: "jiānchí de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'persistent' means continuing firmly or obstinately in a course of action in spite of difficulty or opposition." +
        "<br><br>" +
        "(A) 'negligent' means failing to take proper care in doing something." +
        "<br><br>" +
        "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
        "<br><br>" +
        "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(D) '坚持的' 意思是尽管有困难或反对，仍然坚定或固执地采取行动。" +
        "<br><br>" +
        "(A) '疏忽的' 意思是未能妥善照顾某事。" +
        "<br><br>" +
        "(B) '零星的' 意思是间歇性发生或仅在少数地方发生；分散或孤立的。" +
        "<br><br>" +
        "(C) '冷漠的' 意思是表现出或感到没有兴趣、热情或关心。"
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
