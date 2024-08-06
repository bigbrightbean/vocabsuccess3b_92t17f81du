// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician's __________ actions, including bribery and corruption, were eventually exposed by the media.",
        chinese_question: "这位政治家的 __________ 行为，包括贿赂和腐败，最终被媒体曝光。",
        answers: [
            { option: "A", answer: "virtuous", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "B", answer: "nefarious", chinese_answer: "邪恶的", chinese_romanization: "xié'è de" },
            { option: "C", answer: "respectable", chinese_answer: "受人尊敬的", chinese_romanization: "shòurén zūnjìng de" },
            { option: "D", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhídé chēngzàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nefarious' means wicked or criminal." +
            "<br><br>" +
            "(A) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(C) 'respectable' means regarded by society to be good, proper, or correct." +
            "<br><br>" +
            "(D) 'commendable' means deserving praise.",
        chinese_explanation: "(B) '邪恶的' 意味着邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '善良的' 意味着有或表现出高尚的道德标准。" +
            "<br><br>" +
            "(C) '受人尊敬的' 意味着被社会认为是好的、适当的或正确的。" +
            "<br><br>" +
            "(D) '值得称赞的' 意味着值得称赞的."
    },
    {
        id: 2,
        question: "Her __________ remarks were intended to hurt her rival and show her anger.",
        chinese_question: "她的 __________ 言论旨在伤害她的对手，并表达她的愤怒。",
        answers: [
            { option: "A", answer: "benevolent", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "B", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "C", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "D", answer: "vindictive", chinese_answer: "报复性的", chinese_romanization: "bàofù xìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vindictive' means having or showing a strong or unreasoning desire for revenge." +
            "<br><br>" +
            "(A) 'benevolent' means well meaning and kindly." +
            "<br><br>" +
            "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(C) 'generous' means showing a readiness to give more of something than is strictly necessary or expected.",
        chinese_explanation: "(D) '报复性的' 意味着有或表现出强烈或不理智的复仇欲望的。" +
            "<br><br>" +
            "(A) '仁慈的' 意味着善意和友好的。" +
            "<br><br>" +
            "(B) '善良的' 意味着有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(C) '慷慨的' 意味着表现出比严格必要或预期更多的准备。"
    },
    {
        id: 3,
        question: "Her __________ determination to succeed in her career inspired everyone around her.",
        chinese_question: "她 __________ 的成功决心激励了她周围的每个人。",
        answers: [
            { option: "A", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "B", answer: "unrelenting", chinese_answer: "不屈不挠的", chinese_romanization: "bùqū bù náo de" },
            { option: "C", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "D", answer: "indecisive", chinese_answer: "优柔寡断的", chinese_romanization: "yōuróu guǎduàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unrelenting' means not yielding in strength, severity, or determination." +
            "<br><br>" +
            "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(C) 'wavering' means shaking with a quivering motion; becoming weaker; faltering." +
            "<br><br>" +
            "(D) 'indecisive' means not providing a clear and definite result.",
        chinese_explanation: "(B) '不屈不挠的' 意味着在强度、严重性或决心上不屈服的。" +
            "<br><br>" +
            "(A) '犹豫的' 意味着试探性的、不确定的或行动或讲话缓慢的。" +
            "<br><br>" +
            "(C) '动摇的' 意味着颤抖的动作；变得更弱；衰退的。" +
            "<br><br>" +
            "(D) '优柔寡断的' 意味着没有提供明确和确定的结果。"
    },
    {
        id: 4,
    question: "The critic described the film as __________, criticizing its over-the-top special effects and melodramatic plot.",
    chinese_question: "评论家描述这部电影为 __________，批评它过于夸张的特效和情节。",
    answers: [
        { option: "A", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
        { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
        { option: "C", answer: "gaudy", chinese_answer: "俗丽的", chinese_romanization: "súlì de" },
        { option: "D", answer: "minimalist", chinese_answer: "极简主义的", chinese_romanization: "jí jiǎn zhǔyì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'gaudy' means extravagantly bright or showy, typically so as to be tasteless." +
        "<br><br>" +
        "(A) 'understated' means presented or expressed in a subtle and effective way." +
        "<br><br>" +
        "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
        "<br><br>" +
        "(D) 'minimalist' means characterized by the use of simple or primary forms or structures, especially in art or design.",
    chinese_explanation: "(C) '俗丽的' 意味着华而不实的亮丽或炫耀，通常显得没有品味。" +
        "<br><br>" +
        "(A) '低调的' 意味着以微妙和有效的方式呈现或表达的。" +
        "<br><br>" +
        "(B) '微妙的' 意味着如此精细或精确以至于难以分析或描述的。" +
        "<br><br>" +
        "(D) '极简主义的' 意味着以简单或主要形式或结构为特征，尤其是在艺术或设计中。"
    },
    {
        id: 5,
    question: "She felt __________ with her past mistakes, having learned from them and moved forward with a positive outlook.",
    chinese_question: "她对过去的错误感到 __________，从中吸取了教训，并以积极的态度前进。",
    answers: [
        { option: "A", answer: "reconciled", chinese_answer: "和解的", chinese_romanization: "héjiě de" },
        { option: "B", answer: "burdened", chinese_answer: "负重的", chinese_romanization: "fùzhòng de" },
        { option: "C", answer: "regretful", chinese_answer: "后悔的", chinese_romanization: "hòuhuǐ de" },
        { option: "D", answer: "conflicted", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reconciled' means accepted or made peace with a difficult situation or one's own past actions." +
        "<br><br>" +
        "(B) 'burdened' means weighed down with a heavy load." +
        "<br><br>" +
        "(C) 'regretful' means feeling or showing regret." +
        "<br><br>" +
        "(D) 'conflicted' means having or showing confused and mutually inconsistent feelings.",
    chinese_explanation: "(A) '和解的' 意味着接受或与困难的情况或自己的过去行为和解。" +
        "<br><br>" +
        "(B) '负重的' 意味着被沉重的负担压垮的。" +
        "<br><br>" +
        "(C) '后悔的' 意味着感到或表示后悔的。" +
        "<br><br>" +
        "(D) '矛盾的' 意味着有或表现出困惑和相互矛盾的感情。"
    },
    {
        id: 6,
        question: "His job required a __________ lifestyle, constantly moving from one city to another.",
        chinese_question: "他的工作需要一种__________的生活方式，不断地从一个城市搬到另一个城市。",
        answers: [
                { option: "A", answer: "stationary", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
                { option: "B", answer: "resident", chinese_answer: "居住的", chinese_romanization: "jūzhù de" },
                { option: "C", answer: "migratory", chinese_answer: "迁徙的", chinese_romanization: "qiānxǐ de" },
                { option: "D", answer: "sedentary", chinese_answer: "久坐的", chinese_romanization: "jiǔzuò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'migratory' means denoting an animal that migrates. Figuratively, it can mean frequently moving from place to place." + 
            "<br><br>" + 
            "(A) 'stationary' means not moving or not intended to be moved." + 
            "<br><br>" + 
            "(B) 'resident' means living somewhere on a long-term basis." + 
            "<br><br>" + 
            "(D) 'sedentary' means tending to spend much time seated; somewhat inactive.",
        chinese_explanation: "(C) '迁徙的'一词意味着指迁徙的动物。比喻地，它可以表示经常从一个地方搬到另一个地方。" +
            "<br><br>" +
            "(A) '固定的' 意味着不移动的或不打算被移动的。" +
            "<br><br>" +
            "(B) '居住的' 意味着长期住在某地的。" +
            "<br><br>" +
            "(D) '久坐的' 意味着倾向于花很多时间坐着的；有些不活跃的."
    },
    {
        id: 7,
        question: "The singer gave an __________ performance at the cafe, surprising the customers with her talent.",
        chinese_question: "这位歌手在咖啡馆进行了一场 __________ 的表演，她的才华让顾客们感到惊讶。",
        answers: [
            { option: "A", answer: "rehearsed", chinese_answer: "排练", chinese_romanization: "páiliàn" },
            { option: "B", answer: "planned", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "C", answer: "scheduled", chinese_answer: "安排", chinese_romanization: "ānpái" },
            { option: "D", answer: "impromptu", chinese_answer: "即兴", chinese_romanization: "jíxìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impromptu' means done without being planned, organized, or rehearsed." + 
            "<br><br>" +
            "(A) 'rehearsed' means practiced (a play, piece of music, or other work) for later public performance." +
            "<br><br>" +
            "(B) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(C) 'scheduled' means included in or planned according to a schedule.",
        chinese_explanation: "(D) '即兴' 意味着没有计划、组织或排练的。" + 
            "<br><br>" +
            "(A) '排练' 意味着为以后的公开演出练习（戏剧、音乐作品或其他作品）。" +
            "<br><br>" +
            "(B) '计划' 意味着提前决定和安排。" +
            "<br><br>" +
            "(C) '安排' 意味着包含在或根据计划安排的。"
    },
    {
        id: 8,
        question: "His __________ writing style, full of long-winded sentences and grandiose vocabulary, was difficult to read.",
        chinese_question: "他的 __________ 写作风格，充满了冗长的句子和夸大的词汇，难以阅读。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "pompous", chinese_answer: "自负的", chinese_romanization: "zìfù de" },
            { option: "D", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pompous' means affectedly and irritatingly grand, solemn, or self-important." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive.",
        chinese_explanation: "(C) '自负的' 意味着做作的和令人恼火的庄严或自以为是。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成；没有难度的。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '简洁的' 意味着清楚简明地提供大量信息；简短但全面的."
    },
    {
        id: 9,
        question: "The __________ contribution from the new member did not impact the overall project outcome.",
        chinese_question: "新成员的 __________ 贡献并没有影响整个项目的结果。",
        answers: [
            { option: "A", answer: "significant", chinese_answer: "重大", chinese_romanization: "zhòngdà" },
            { option: "B", answer: "inconsiderable", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "C", answer: "major", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
            { option: "D", answer: "notable", chinese_answer: "显著", chinese_romanization: "xiǎnzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inconsiderable' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(A) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(C) 'major' means important, serious, or significant." +
            "<br><br>" +
            "(D) 'notable' means worthy of attention or notice.",
        chinese_explanation: "(B) '微不足道' 意味着小到不值得考虑。" +
            "<br><br>" +
            "(A) '重大' 意味着值得注意或重要。" +
            "<br><br>" +
            "(C) '主要' 意味着重要的、严重的或显著的。" +
            "<br><br>" +
            "(D) '显著' 意味着值得注意或注意的。"
    },
    {
        id: 10,
        question: "His __________ behavior at the meeting, like interrupting speakers and dismissing others' ideas, upset many of his colleagues.",
        chinese_question: "他在会议上的 __________ 行为，比如打断发言者和无视他人的意见，让许多同事感到不安。",
        answers: [
            { option: "A", answer: "courteous", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "B", answer: "impertinent", chinese_answer: "无礼", chinese_romanization: "wúlǐ" },
            { option: "C", answer: "considerate", chinese_answer: "体贴", chinese_romanization: "tǐtiē" },
            { option: "D", answer: "deferential", chinese_answer: "恭敬", chinese_romanization: "gōngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impertinent' means not showing proper respect; rude." + 
            "<br><br>" +
            "(A) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(C) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(D) 'deferential' means showing deference; respectful.",
        chinese_explanation: "(B) '无礼' 意味着不表现出应有的尊重；粗鲁的。" + 
            "<br><br>" +
            "(A) '礼貌' 意味着行为举止礼貌、尊重或体贴。" +
            "<br><br>" +
            "(C) '体贴' 意味着小心不造成不便或伤害他人。" +
            "<br><br>" +
            "(D) '恭敬' 意味着表现出敬意；尊重的。"
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
