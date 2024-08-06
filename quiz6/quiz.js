// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ memory allowed her to recall details with astounding accuracy.",
        chinese_question: "她的__________记忆力使她能够以惊人的准确性回忆细节。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "D", answer: "prodigious", chinese_answer: "惊人的", chinese_romanization: "jīngrén de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prodigious' means remarkably or impressively great in extent, size, or degree. Figuratively, it can mean being exceptionally large or impressive." +
            "<br><br>" +
            "(A) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'average' means having qualities that are seen as typical of a particular person or thing.",
        chinese_explanation: "(D) '惊人的'一词意味着在范围、大小或程度上显著或令人印象深刻的。比喻地，它可以表示异常大或令人印象深刻的。" +
            "<br><br>" +
            "(A) '平庸的' 意味着质量只是一般的；不太好的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特殊或显著特征的；正常的。" +
            "<br><br>" +
            "(C) '平均的' 意味着具有被视为某人或某事典型的特质的."
    },
    {
        id: 2,
        question: "His motive for volunteering was not __________; he genuinely wanted to help others and make a difference.",
        chinese_question: "他志愿服务的动机不是 __________；他真心想帮助别人并有所作为。",
        answers: [
            { option: "A", answer: "philanthropic", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "B", answer: "charitable", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "C", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" },
            { option: "D", answer: "pecuniary", chinese_answer: "金钱的", chinese_romanization: "jīnqián de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pecuniary' means relating to or consisting of money." +
            "<br><br>" +
            "(A) 'philanthropic' means seeking to promote the welfare of others, especially by donating money to good causes." +
            "<br><br>" +
            "(B) 'charitable' means relating to the assistance of those in need." +
            "<br><br>" +
            "(C) 'altruistic' means showing a disinterested and selfless concern for the well-being of others.",
        chinese_explanation: "(D) '金钱的' 意味着与金钱有关或由金钱组成的。" +
            "<br><br>" +
            "(A) '慈善的' 意味着寻求促进他人福利的，尤其是通过向公益事业捐款。" +
            "<br><br>" +
            "(B) '仁慈的' 意味着与帮助有需要的人有关。" +
            "<br><br>" +
            "(C) '利他的' 意味着表现出对他人福利的不感兴趣和无私的关心。"
    },
    {
        id: 3,
    question: "Her __________ dreams about the future made her anxious and unsure of what was to come.",
    chinese_question: "她对未来的 __________ 梦境让她感到焦虑和不确定。",
    answers: [
        { option: "A", answer: "hopeful", chinese_answer: "充满希望的", chinese_romanization: "chōngmǎn xīwàng de" },
        { option: "B", answer: "comforting", chinese_answer: "安慰的", chinese_romanization: "ānwèi de" },
        { option: "C", answer: "unsettling", chinese_answer: "令人不安的", chinese_romanization: "lìng rén bù'ān de" },
        { option: "D", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'unsettling' means causing anxiety or uneasiness." +
        "<br><br>" +
        "(A) 'hopeful' means feeling or inspiring optimism." +
        "<br><br>" +
        "(B) 'comforting' means giving comfort." +
        "<br><br>" +
        "(D) 'relaxing' means reducing tension or anxiety.",
    chinese_explanation: "(C) '令人不安的' 意味着引起焦虑或不安的。" +
        "<br><br>" +
        "(A) '充满希望的' 意味着感觉或激发乐观的。" +
        "<br><br>" +
        "(B) '安慰的' 意味着提供安慰的。" +
        "<br><br>" +
        "(D) '放松的' 意味着减少紧张或焦虑的。"
    },
    {
        id: 4,
    question: "Her performance in the play was __________, capturing the essence of the character perfectly and exemplifying the highest standard of acting.",
    chinese_question: "她在戏剧中的表演是 __________ 的，完美地捕捉了角色的本质，并展示了最高的演技标准。",
    answers: [
        { option: "A", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
        { option: "B", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" },
        { option: "C", answer: "quintessential", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
        { option: "D", answer: "mediocre", chinese_answer: "中等的", chinese_romanization: "zhōngděng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'quintessential' means representing the most perfect or typical example of a quality or class." +
        "<br><br>" +
        "(A) 'flawed' means blemished, damaged, or imperfect in some way." +
        "<br><br>" +
        "(B) 'average' means constituting the result obtained by adding together several quantities and then dividing this total by the number of quantities." +
        "<br><br>" +
        "(D) 'mediocre' means of only moderate quality; not very good.",
    chinese_explanation: "(C) '典型的' 意味着代表某种品质或类别的最完美或典型的例子。" +
        "<br><br>" +
        "(A) '有缺陷的' 意味着在某种程度上有瑕疵、损坏或不完美的。" +
        "<br><br>" +
        "(B) '一般的' 意味着通过将几种数量相加然后将此总数除以数量的总数而得出的结果。" +
        "<br><br>" +
        "(D) '中等的' 意味着质量一般；不太好的。"
    },
    {
        id: 5,
        question: "The court ruled that the contract was __________ due to its vague and ambiguous terms.",
        chinese_question: "法院裁定合同因条款模糊不清而 __________。",
        answers: [
            { option: "A", answer: "valid", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "binding", chinese_answer: "有约束力的", chinese_romanization: "yǒu yuēshù lì de" },
            { option: "D", answer: "unenforceable", chinese_answer: "无法执行的", chinese_romanization: "wúfǎ zhíxíng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unenforceable' means not able to be imposed or enforced." +
                "<br><br>" +
                "(A) 'valid' means having a sound basis in logic or fact; reasonable or cogent." +
                "<br><br>" +
                "(B) 'clear' means easy to perceive, understand, or interpret." +
                "<br><br>" +
                "(C) 'binding' means involving an obligation that cannot be broken.",
        chinese_explanation: "(D) '无法执行的' 一词意味着不能被强制执行。" +
                "<br><br>" +
                "(A) '有效的' 意味着在逻辑或事实上有坚实基础的；合理的。" +
                "<br><br>" +
                "(B) '清晰的' 意味着容易感知、理解或解释的。" +
                "<br><br>" +
                "(C) '有约束力的' 意味着涉及不能违反的义务。"
    },
    {
        id: 6,
        question: "Her storytelling style is __________ of her favorite author, weaving intricate plots with vivid descriptions.",
        chinese_question: "她的讲故事风格让人 __________ 她最喜欢的作家，编织复杂的情节和生动的描述。",
        answers: [
            { option: "A", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "B", answer: "reminiscent", chinese_answer: "使人想起的", chinese_romanization: "shǐ rén xiǎngqǐ de" },
            { option: "C", answer: "distinct", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reminiscent' means tending to remind one of something." +
            "<br><br>" +
            "(A) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(C) 'distinct' means recognizably different in nature from something else of a similar type." +
            "<br><br>" +
            "(D) 'innovative' means featuring new methods; advanced and original.",
        chinese_explanation: "(B) '使人想起的' 意味着让人想起某事。" +
            "<br><br>" +
            "(A) '独特的' 意味着独一无二的；不像其他任何东西。" +
            "<br><br>" +
            "(C) '明显的' 意味着在性质上与类似类型的其他东西明显不同的。" +
            "<br><br>" +
            "(D) '创新的' 意味着采用新方法的；先进的和原创的。"
    },
    {
        id: 7,
        question: "His __________ approach to negotiations made him a favorite among diplomats, as he skillfully navigated complex discussions.",
        chinese_question: "他在谈判中的 __________ 方法使他成为外交官中的佼佼者，因为他巧妙地处理了复杂的讨论。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "adroit", chinese_answer: "灵巧的", chinese_romanization: "língqiǎo de" },
            { option: "C", answer: "blunt", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "D", answer: "unrefined", chinese_answer: "不文雅的", chinese_romanization: "bù wényǎ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adroit' means clever or skillful in using the hands or mind, often used to describe someone who is very adept in negotiations." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'blunt' means (of a person or remark) uncompromisingly forthright." +
            "<br><br>" +
            "(D) 'unrefined' means not elegant or cultured.",
        chinese_explanation: "(B) '灵巧的' 意味着在使用手或头脑时聪明或熟练，通常用来描述在谈判中非常老练的人。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着动作或处理事情时笨拙的。" +
            "<br><br>" +
            "(C) '直率的' 意味着（一个人或言辞）毫不妥协地直率的。" +
            "<br><br>" +
            "(D) '不文雅的' 意味着不优雅或不文化的."
    },
    {
        id: 8,
        question: "Their __________ relationship was filled with frequent arguments and reconciliations, making it hard for them to find peace.",
        chinese_question: "他们的 __________ 关系充满了频繁的争吵和和解，使他们难以找到平静。",
        answers: [
            { option: "A", answer: "harmonious", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "C", answer: "turbulent", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
            { option: "D", answer: "peaceful", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'turbulent' means characterized by conflict, disorder, or confusion; not stable or calm." +
            "<br><br>" +
            "(A) 'harmonious' means forming a pleasing or consistent whole; free from disagreement or dissent." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'peaceful' means free from disturbance; tranquil.",
        chinese_explanation: "(C) '动荡' 意味着以冲突、无序或混乱为特征；不稳定或不平静。" +
            "<br><br>" +
            "(A) '和谐' 意味着形成一个令人愉快或一致的整体；没有分歧或异议。" +
            "<br><br>" +
            "(B) '稳定' 意味着不太可能改变或失败；牢固建立的。" +
            "<br><br>" +
            "(D) '平静' 意味着没有干扰；宁静的。"
    },
    {
        id: 9,
        question: "Her insistence on correcting every minor error made her seem overly __________, rather than understanding and supportive like a mother should be.",
        chinese_question: "她坚持纠正每一个小错误，使她显得过于 __________，而不是像母亲应该的那样理解和支持。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "B", answer: "understanding", chinese_answer: "理解的", chinese_romanization: "lǐjiě de" },
            { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "D", answer: "pedantic", chinese_answer: "学究式的", chinese_romanization: "xuéjiū shì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pedantic' means excessively concerned with minor details and rules." +
            "<br><br>" +
            "(A) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(B) 'understanding' means showing sympathy and empathy." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help.",
        chinese_explanation: "(D) '学究式的' 意味着过分关注细枝末节和规则。" +
            "<br><br>" +
            "(A) '宽容的' 意味着比预期的更加仁慈或宽容。" +
            "<br><br>" +
            "(B) '理解的' 意味着表现出同情和共鸣。" +
            "<br><br>" +
            "(C) '支持的' 意味着提供鼓励或情感帮助。"
    },
    {
        id: 10,
        question: "Writing the detailed report was a __________ process, but she felt accomplished when it was finally done.",
        chinese_question: "撰写详细报告是一个 __________ 的过程，但最终完成时她感到非常有成就感。",
        answers: [
            { option: "A", answer: "quick", chinese_answer: "快速", chinese_romanization: "kuàisù" },
            { option: "B", answer: "laborious", chinese_answer: "费力", chinese_romanization: "fèilì" },
            { option: "C", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "D", answer: "swift", chinese_answer: "迅速", chinese_romanization: "xùnsù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'laborious' means requiring considerable time and effort." + 
            "<br><br>" +
            "(A) 'quick' means moving fast or doing something in a short time." +
            "<br><br>" +
            "(C) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(D) 'swift' means happening quickly or promptly.",
        chinese_explanation: "(B) '费力' 意味着需要相当多的时间和精力。" + 
            "<br><br>" +
            "(A) '快速' 意味着动作快或在短时间内完成某事。" +
            "<br><br>" +
            "(C) '容易' 意味着无需很大努力就能实现；几乎没有困难。" +
            "<br><br>" +
            "(D) '迅速' 意味着迅速或及时发生。"
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
